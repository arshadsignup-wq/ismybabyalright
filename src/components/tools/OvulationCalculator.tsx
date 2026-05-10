"use client";

import { useState } from "react";
import {
  calculateFertilityWindow,
  getFutureCycles,
  OVULATION_SIGNS,
  FERTILITY_TIPS,
  type FertilityWindow,
} from "@/data/ovulation/data";

export default function OvulationCalculator() {
  const [lmpInput, setLmpInput] = useState("");
  const [cycleLength, setCycleLength] = useState("28");

  const cycleDays = parseInt(cycleLength) || 28;
  let results: FertilityWindow[] = [];

  if (lmpInput && cycleDays >= 20 && cycleDays <= 45) {
    const lmpDate = new Date(lmpInput + "T00:00:00");
    if (!isNaN(lmpDate.getTime())) {
      results = getFutureCycles(lmpDate, cycleDays, 6);
    }
  }

  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Ovulation & Fertility Calculator
        </h1>
        <p className="mt-2 text-muted">
          Estimate your fertile window and ovulation day based on your cycle
          length. Track your most fertile days for the next 6 cycles.
        </p>
      </div>

      {/* Inputs */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div className="flex-1">
            <label htmlFor="lmp" className="mb-1.5 block text-sm font-semibold text-foreground">
              First Day of Last Period
            </label>
            <input
              id="lmp"
              type="date"
              value={lmpInput}
              onChange={(e) => setLmpInput(e.target.value)}
              className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="sm:w-48">
            <label htmlFor="cycle" className="mb-1.5 block text-sm font-semibold text-foreground">
              Cycle Length (days)
            </label>
            <input
              id="cycle"
              type="number"
              min="20"
              max="45"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              className="h-11 w-full rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <p className="text-xs text-muted mt-1">Average is 28 days</p>
          </div>
        </div>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-4">
          {/* Current cycle highlight */}
          <div className="rounded-2xl border-2 border-primary/30 bg-primary-light p-5">
            <h2 className="text-lg font-bold text-foreground mb-3">Your Next Fertile Window</h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-muted">Fertile Window Opens</p>
                <p className="text-base font-bold text-foreground">{fmt(results[0].fertileStart)}</p>
              </div>
              <div>
                <p className="text-xs text-muted">Estimated Ovulation</p>
                <p className="text-lg font-bold text-primary">{fmt(results[0].ovulationDate)}</p>
              </div>
              <div>
                <p className="text-xs text-muted">Fertile Window Closes</p>
                <p className="text-base font-bold text-foreground">{fmt(results[0].fertileEnd)}</p>
              </div>
            </div>
            <p className="text-xs text-muted text-center mt-3">
              Next period expected: <span className="font-semibold">{fmt(results[0].nextPeriod)}</span>
            </p>
          </div>

          {/* Future cycles */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
            <h2 className="mb-3 text-lg font-bold text-foreground">Next 6 Cycles</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-card-border">
                    <th className="text-left py-2 text-xs font-semibold text-muted">Cycle</th>
                    <th className="text-left py-2 text-xs font-semibold text-muted">Fertile Window</th>
                    <th className="text-left py-2 text-xs font-semibold text-muted">Ovulation</th>
                    <th className="text-left py-2 text-xs font-semibold text-muted">Next Period</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, i) => (
                    <tr key={i} className="border-b border-card-border last:border-0">
                      <td className="py-2.5 font-medium text-foreground">Cycle {i + 1}</td>
                      <td className="py-2.5 text-muted">
                        {fmt(r.fertileStart)} – {fmt(r.fertileEnd)}
                      </td>
                      <td className="py-2.5 font-semibold text-primary">{fmt(r.ovulationDate)}</td>
                      <td className="py-2.5 text-muted">{fmt(r.nextPeriod)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Ovulation signs */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Signs of Ovulation</h2>
        <ul className="space-y-2 text-sm text-muted">
          {OVULATION_SIGNS.map((s, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Tips */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Fertility Tips</h2>
        <ul className="space-y-2 text-sm text-muted">
          {FERTILITY_TIPS.map((t, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
              {t}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a href="https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning" target="_blank" rel="noopener noreferrer" className="underline text-primary">ACOG — Fertility Awareness Methods</a>
          </li>
          <li>
            <a href="https://www.marchofdimes.org/find-support/topics/getting-pregnant/ovulation" target="_blank" rel="noopener noreferrer" className="underline text-primary">March of Dimes — Ovulation</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
