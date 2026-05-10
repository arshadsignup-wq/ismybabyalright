"use client";

import { useState } from "react";
import {
  getScreenTimeGuideline,
  SCREEN_TIME_EFFECTS,
  HEALTHY_ALTERNATIVES,
} from "@/data/screen-time/data";

export default function ScreenTimeCalculator() {
  const [ageInput, setAgeInput] = useState("");

  const ageMonths = parseInt(ageInput);
  const guideline =
    !isNaN(ageMonths) && ageMonths >= 0
      ? getScreenTimeGuideline(ageMonths)
      : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Screen Time Guidelines by Age
        </h1>
        <p className="mt-2 text-muted">
          How much screen time is OK for your child? Get age-specific
          recommendations from the AAP and WHO.
        </p>
      </div>

      {/* Input */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <label htmlFor="age" className="mb-1.5 block text-sm font-semibold text-foreground">
          Child&apos;s Age (months)
        </label>
        <input
          id="age"
          type="number"
          min="0"
          max="144"
          placeholder="e.g. 24"
          value={ageInput}
          onChange={(e) => setAgeInput(e.target.value)}
          className="h-11 w-full max-w-xs rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <p className="text-xs text-muted mt-1">
          Enter your child&apos;s age in months (0-144)
        </p>
      </div>

      {/* Result */}
      {guideline && (
        <div className="space-y-4">
          <div className={`rounded-2xl border-2 p-5 ${
            guideline.maxMinutesPerDay === null
              ? "border-red-300 bg-red-50 dark:border-red-500/30 dark:bg-red-950/20"
              : guideline.maxMinutesPerDay <= 15
                ? "border-amber-300 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-950/20"
                : "border-primary/30 bg-primary-light"
          }`}>
            <p className="text-sm font-semibold text-muted mb-1">{guideline.label}</p>
            <p className="text-2xl font-bold text-foreground">{guideline.recommendation}</p>
            {guideline.maxMinutesPerDay !== null && (
              <p className="text-sm text-muted mt-1">
                Maximum: <span className="font-bold">{guideline.maxMinutesPerDay} minutes</span> per day
              </p>
            )}
            <p className="text-sm text-muted mt-2">{guideline.details}</p>
          </div>

          {/* Tips */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
            <h2 className="mb-3 text-lg font-bold text-foreground">Tips for {guideline.label}</h2>
            <ul className="space-y-2 text-sm text-muted">
              {guideline.tips.map((tip, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Exceptions */}
          {guideline.exceptions.length > 0 && (
            <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
              <h2 className="mb-3 text-lg font-bold text-foreground">Exceptions</h2>
              <ul className="space-y-2 text-sm text-muted">
                {guideline.exceptions.map((exc, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                    {exc}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Effects */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Effects of Excessive Screen Time</h2>
        <div className="space-y-3">
          {SCREEN_TIME_EFFECTS.map((e, i) => (
            <div key={i}>
              <p className="text-sm font-semibold text-foreground">{e.effect}</p>
              <p className="text-xs text-muted">{e.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Alternatives */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Healthy Alternatives to Screen Time</h2>
        <ul className="space-y-2 text-sm text-muted">
          {HEALTHY_ALTERNATIVES.map((alt, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
              {alt}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a href="https://www.healthychildren.org/English/family-life/Media/Pages/Where-We-Stand-TV-Viewing-Time.aspx" target="_blank" rel="noopener noreferrer" className="underline text-primary">AAP — Media and Children</a>
          </li>
          <li>
            <a href="https://www.who.int/news/item/24-04-2019-to-grow-up-healthy-children-need-to-sit-less-and-play-more" target="_blank" rel="noopener noreferrer" className="underline text-primary">WHO — Screen Time Guidelines</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
