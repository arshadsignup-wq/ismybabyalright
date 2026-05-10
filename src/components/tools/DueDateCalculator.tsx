"use client";

import { useState } from "react";
import {
  calculateDueDateFromLMP,
  calculateDueDateFromConception,
  calculateDueDateFromIVF,
  calculateDueDateFromUltrasound,
  getGestationalAge,
  PREGNANCY_MILESTONES,
} from "@/data/due-date/data";

type Method = "lmp" | "conception" | "ivf" | "ultrasound";

export default function DueDateCalculator() {
  const [method, setMethod] = useState<Method>("lmp");
  const [dateInput, setDateInput] = useState("");
  const [ultrasoundWeeks, setUltrasoundWeeks] = useState("");
  const [ultrasoundDays, setUltrasoundDays] = useState("");
  const [embryoAge, setEmbryoAge] = useState<3 | 5>(5);

  let dueDate: Date | null = null;
  let gestAge: { weeks: number; days: number } | null = null;
  let lmpDate: Date | null = null;

  if (dateInput) {
    const date = new Date(dateInput + "T00:00:00");
    if (!isNaN(date.getTime())) {
      switch (method) {
        case "lmp":
          dueDate = calculateDueDateFromLMP(date);
          lmpDate = date;
          break;
        case "conception":
          dueDate = calculateDueDateFromConception(date);
          // Approximate LMP as conception - 14 days
          lmpDate = new Date(date);
          lmpDate.setDate(lmpDate.getDate() - 14);
          break;
        case "ivf":
          dueDate = calculateDueDateFromIVF(date, embryoAge);
          // Approximate LMP from due date
          lmpDate = new Date(dueDate);
          lmpDate.setDate(lmpDate.getDate() - 280);
          break;
        case "ultrasound": {
          const w = parseInt(ultrasoundWeeks) || 0;
          const d = parseInt(ultrasoundDays) || 0;
          if (w > 0) {
            dueDate = calculateDueDateFromUltrasound(date, w, d);
            lmpDate = new Date(dueDate);
            lmpDate.setDate(lmpDate.getDate() - 280);
          }
          break;
        }
      }
      if (lmpDate) {
        gestAge = getGestationalAge(lmpDate);
      }
    }
  }

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Due Date Calculator
        </h1>
        <p className="mt-2 text-muted">
          Estimate your baby&apos;s due date based on your last period, conception date,
          IVF transfer, or ultrasound measurements.
        </p>
      </div>

      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
        {/* Method selector */}
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-foreground">
            Calculation Method
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {([
              { value: "lmp", label: "Last Period" },
              { value: "conception", label: "Conception" },
              { value: "ivf", label: "IVF Transfer" },
              { value: "ultrasound", label: "Ultrasound" },
            ] as { value: Method; label: string }[]).map((m) => (
              <button
                key={m.value}
                onClick={() => setMethod(m.value)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  method === m.value
                    ? "bg-primary text-white"
                    : "bg-background border border-card-border text-muted hover:bg-primary-light"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Date input */}
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-semibold text-foreground">
            {method === "lmp"
              ? "First Day of Last Menstrual Period"
              : method === "conception"
                ? "Estimated Conception Date"
                : method === "ivf"
                  ? "IVF Transfer Date (Day 5 Blastocyst)"
                  : "Ultrasound Date"}
          </label>
          <input
            id="date"
            type="date"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className="h-11 w-full max-w-xs rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* IVF-specific fields */}
        {method === "ivf" && (
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-foreground">
              Embryo Type
            </label>
            <div className="flex gap-2">
              {([5, 3] as const).map((age) => (
                <button
                  key={age}
                  onClick={() => setEmbryoAge(age)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                    embryoAge === age
                      ? "bg-primary text-white"
                      : "bg-background border border-card-border text-muted hover:bg-primary-light"
                  }`}
                >
                  Day {age} {age === 5 ? "Blastocyst" : "Embryo"}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Ultrasound-specific fields */}
        {method === "ultrasound" && (
          <div className="flex gap-4">
            <div>
              <label htmlFor="us-weeks" className="mb-1.5 block text-sm font-semibold text-foreground">
                Gestational Age (weeks)
              </label>
              <input
                id="us-weeks"
                type="number"
                min="4"
                max="42"
                value={ultrasoundWeeks}
                onChange={(e) => setUltrasoundWeeks(e.target.value)}
                placeholder="e.g. 8"
                className="h-11 w-24 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="us-days" className="mb-1.5 block text-sm font-semibold text-foreground">
                Days
              </label>
              <input
                id="us-days"
                type="number"
                min="0"
                max="6"
                value={ultrasoundDays}
                onChange={(e) => setUltrasoundDays(e.target.value)}
                placeholder="0"
                className="h-11 w-24 rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      {dueDate && gestAge && (
        <div className="space-y-4">
          <div className="rounded-2xl border-2 border-primary/30 bg-primary-light p-5 text-center">
            <p className="text-sm font-semibold text-muted mb-1">Estimated Due Date</p>
            <p className="text-2xl font-bold text-primary">{formatDate(dueDate)}</p>
            {gestAge.weeks > 0 && (
              <p className="mt-2 text-sm text-muted">
                Currently{" "}
                <span className="font-bold text-foreground">
                  {gestAge.weeks} weeks, {gestAge.days} days
                </span>{" "}
                pregnant
              </p>
            )}
          </div>

          {/* Trimester progress */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
            <h2 className="mb-3 text-lg font-bold text-foreground">Pregnancy Timeline</h2>
            <div className="space-y-3">
              {PREGNANCY_MILESTONES.map((m, i) => {
                const isPast = gestAge!.weeks >= m.week;
                const isCurrent =
                  gestAge!.weeks >= m.week &&
                  (i === PREGNANCY_MILESTONES.length - 1 || gestAge!.weeks < PREGNANCY_MILESTONES[i + 1].week);
                return (
                  <div
                    key={m.week}
                    className={`flex gap-3 items-start p-3 rounded-xl transition-colors ${
                      isCurrent
                        ? "bg-primary-light border border-primary/20"
                        : isPast
                          ? "opacity-60"
                          : ""
                    }`}
                  >
                    <div
                      className={`mt-0.5 h-3 w-3 rounded-full shrink-0 ${
                        isCurrent
                          ? "bg-primary"
                          : isPast
                            ? "bg-primary/40"
                            : "bg-card-border"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Week {m.week} — {m.title}
                      </p>
                      <p className="text-xs text-muted mt-0.5">{m.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-500/30 dark:bg-amber-950/20">
        <p className="text-xs text-amber-800 dark:text-amber-300">
          Only about 5% of babies are born on their due date. Most are born within 2 weeks
          before or after. Your healthcare provider may adjust your due date based on
          ultrasound measurements.
        </p>
      </div>

      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a href="https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date" target="_blank" rel="noopener noreferrer" className="underline text-primary">ACOG — Methods for Estimating Due Date</a>
          </li>
          <li>
            <a href="https://www.marchofdimes.org/find-support/topics/pregnancy/due-date-calculator" target="_blank" rel="noopener noreferrer" className="underline text-primary">March of Dimes — Due Date Calculator</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
