"use client";

import { useState } from "react";
import {
  LEAPS,
  getCurrentLeap,
  getAgeInWeeks,
  monthsToWeeks,
  type DevelopmentalLeap,
} from "@/data/wonder-weeks/data";

export default function WonderWeeksCalculator() {
  const [inputMode, setInputMode] = useState<"birthdate" | "age">("birthdate");
  const [birthDateInput, setBirthDateInput] = useState("");
  const [ageMonthsInput, setAgeMonthsInput] = useState("");

  let ageWeeks = 0;
  let ageMonths = 0;
  let hasResult = false;

  if (inputMode === "birthdate" && birthDateInput) {
    const bd = new Date(birthDateInput + "T00:00:00");
    if (!isNaN(bd.getTime())) {
      ageWeeks = getAgeInWeeks(bd);
      ageMonths = Math.round(ageWeeks / 4.345);
      hasResult = ageWeeks >= 0;
    }
  } else if (inputMode === "age" && ageMonthsInput) {
    ageMonths = parseFloat(ageMonthsInput);
    ageWeeks = monthsToWeeks(ageMonths);
    hasResult = ageMonths >= 0;
  }

  const { currentLeap, nextLeap, isInLeap } = hasResult
    ? getCurrentLeap(ageWeeks)
    : { currentLeap: null, nextLeap: null, isInLeap: false };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Wonder Weeks Calculator
        </h1>
        <p className="mt-2 text-muted">
          Find out if your baby is going through a developmental leap. Based on
          the 10 major mental leaps in the first 20 months.
        </p>
      </div>

      {/* Input */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
        <div className="flex gap-2">
          {(["birthdate", "age"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setInputMode(mode)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                inputMode === mode
                  ? "bg-primary text-white"
                  : "bg-background border border-card-border text-muted hover:bg-primary-light"
              }`}
            >
              {mode === "birthdate" ? "Birth Date" : "Age in Months"}
            </button>
          ))}
        </div>

        {inputMode === "birthdate" ? (
          <div>
            <label htmlFor="birthdate" className="mb-1.5 block text-sm font-semibold text-foreground">
              Baby&apos;s Birth Date
            </label>
            <input
              id="birthdate"
              type="date"
              value={birthDateInput}
              onChange={(e) => setBirthDateInput(e.target.value)}
              className="h-11 w-full max-w-xs rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        ) : (
          <div>
            <label htmlFor="age-months" className="mb-1.5 block text-sm font-semibold text-foreground">
              Age in Months
            </label>
            <input
              id="age-months"
              type="number"
              min="0"
              max="24"
              step="0.5"
              placeholder="e.g. 5"
              value={ageMonthsInput}
              onChange={(e) => setAgeMonthsInput(e.target.value)}
              className="h-11 w-full max-w-xs rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        )}

        {hasResult && (
          <p className="text-sm text-muted">
            Baby is approximately <span className="font-bold text-foreground">{ageWeeks} weeks</span> ({ageMonths} months) old
          </p>
        )}
      </div>

      {/* Current status */}
      {hasResult && (
        <div className={`rounded-2xl border-2 p-5 ${
          isInLeap
            ? "border-amber-300 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-950/20"
            : "border-primary/30 bg-primary-light"
        }`}>
          {isInLeap && currentLeap ? (
            <>
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-300 mb-1">Currently in a Leap!</p>
              <p className="text-xl font-bold text-foreground">
                Leap {currentLeap.leapNumber}: {currentLeap.name}
              </p>
              <p className="text-sm text-muted mt-1">{currentLeap.mentalSkill}</p>
            </>
          ) : nextLeap ? (
            <>
              <p className="text-sm font-semibold text-primary mb-1">No leap right now</p>
              <p className="text-lg font-bold text-foreground">
                Next: Leap {nextLeap.leapNumber} ({nextLeap.name}) — around week {nextLeap.weekStart}
              </p>
              <p className="text-sm text-muted mt-1">
                About {Math.round(nextLeap.weekStart - ageWeeks)} weeks away
              </p>
            </>
          ) : (
            <p className="text-lg font-bold text-foreground">
              Your baby has completed all 10 developmental leaps!
            </p>
          )}
        </div>
      )}

      {/* Current leap details */}
      {isInLeap && currentLeap && (
        <LeapDetail leap={currentLeap} />
      )}

      {/* All leaps timeline */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-4 text-lg font-bold text-foreground">All 10 Developmental Leaps</h2>
        <div className="space-y-3">
          {LEAPS.map((leap) => {
            const isPast = hasResult && ageWeeks > leap.weekEnd;
            const isCurrent = hasResult && isInLeap && currentLeap?.leapNumber === leap.leapNumber;
            return (
              <div
                key={leap.leapNumber}
                className={`p-3 rounded-xl border transition-colors ${
                  isCurrent
                    ? "border-amber-300 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-950/20"
                    : isPast
                      ? "border-card-border bg-background opacity-60"
                      : "border-card-border bg-background"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-foreground">
                      Leap {leap.leapNumber}: {leap.name}
                      {isCurrent && <span className="ml-2 text-xs font-semibold text-amber-600 dark:text-amber-400">NOW</span>}
                      {isPast && <span className="ml-2 text-xs text-muted">✓</span>}
                    </p>
                    <p className="text-xs text-muted">{leap.mentalSkill}</p>
                  </div>
                  <span className="text-xs text-muted shrink-0 ml-2">
                    Week {leap.weekStart}–{leap.weekEnd}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a href="https://www.thewonderweeks.com/" target="_blank" rel="noopener noreferrer" className="underline text-primary">The Wonder Weeks — Official Site</a>
          </li>
          <li>Based on research by Hetty van de Rijt and Frans Plooij</li>
        </ul>
      </div>
    </div>
  );
}

function LeapDetail({ leap }: { leap: DevelopmentalLeap }) {
  return (
    <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
      <h2 className="text-lg font-bold text-foreground">
        Leap {leap.leapNumber}: {leap.name}
      </h2>
      <p className="text-sm text-muted">{leap.description}</p>

      <div>
        <h3 className="text-sm font-bold text-foreground mb-2">Signs Your Baby Is in This Leap</h3>
        <ul className="space-y-1">
          {leap.signs.map((s, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted">
              <span className="mt-0.5 shrink-0 text-amber-500" aria-hidden="true">&#x2022;</span>
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-bold text-foreground mb-2">New Abilities After This Leap</h3>
        <ul className="space-y-1">
          {leap.newAbilities.map((a, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted">
              <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
