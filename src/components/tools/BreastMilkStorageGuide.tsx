"use client";

import {
  STORAGE_GUIDELINES,
  THAWING_GUIDELINES,
  STORAGE_CONTAINER_TIPS,
} from "@/data/breast-milk-storage/data";

const ICONS: Record<string, string> = {
  countertop: "🏠",
  cooler: "🧊",
  fridge: "❄️",
  freezer: "🧊",
  "deep-freezer": "🥶",
};

export default function BreastMilkStorageGuide() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Breast Milk Storage Guide
        </h1>
        <p className="mt-2 text-muted">
          How long can breast milk sit out? How long does it last in the fridge or
          freezer? Quick reference based on CDC and AAP guidelines.
        </p>
      </div>

      {/* Storage chart */}
      <div className="space-y-4">
        {STORAGE_GUIDELINES.map((g) => (
          <div
            key={g.location}
            className="rounded-2xl border border-card-border bg-card p-4 sm:p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl" aria-hidden="true">{ICONS[g.icon] || "📦"}</span>
              <div>
                <h2 className="text-base font-bold text-foreground">{g.location}</h2>
                <p className="text-xs text-muted">{g.temperature}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="rounded-xl bg-background p-3">
                <p className="text-xs text-muted mb-0.5">Fresh Milk</p>
                <p className="text-sm font-bold text-foreground">{g.freshMilk}</p>
              </div>
              <div className="rounded-xl bg-background p-3">
                <p className="text-xs text-muted mb-0.5">Thawed Milk</p>
                <p className="text-sm font-bold text-foreground">{g.thawedMilk}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted mb-1">Tips</p>
              <ul className="space-y-1">
                {g.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-xs text-muted">
                    <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Quick reference table */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-card-border">
                <th className="text-left py-2 text-xs font-semibold text-muted">Location</th>
                <th className="text-left py-2 text-xs font-semibold text-muted">Temp</th>
                <th className="text-left py-2 text-xs font-semibold text-muted">Fresh</th>
                <th className="text-left py-2 text-xs font-semibold text-muted">Thawed</th>
              </tr>
            </thead>
            <tbody>
              {STORAGE_GUIDELINES.map((g) => (
                <tr key={g.location} className="border-b border-card-border last:border-0">
                  <td className="py-2 font-medium text-foreground">{g.location}</td>
                  <td className="py-2 text-muted text-xs">{g.temperature}</td>
                  <td className="py-2 font-semibold text-foreground">{g.freshMilk}</td>
                  <td className="py-2 text-muted">{g.thawedMilk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Thawing */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">How to Thaw Breast Milk</h2>
        <ul className="space-y-2 text-sm text-muted">
          {THAWING_GUIDELINES.map((tip, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Storage containers */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">Storage Container Tips</h2>
        <ul className="space-y-2 text-sm text-muted">
          {STORAGE_CONTAINER_TIPS.map((tip, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Important warning */}
      <div className="rounded-xl border-2 border-red-300 bg-red-50 px-4 py-3 dark:border-red-500/40 dark:bg-red-950/30">
        <p className="text-sm font-semibold text-red-800 dark:text-red-300">
          Never microwave breast milk. Never refreeze thawed breast milk. When in
          doubt, throw it out.
        </p>
      </div>

      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a href="https://www.cdc.gov/breastfeeding/recommendations/handling_breastmilk.htm" target="_blank" rel="noopener noreferrer" className="underline text-primary">CDC — Proper Storage and Preparation of Breast Milk</a>
          </li>
          <li>
            <a href="https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Storing-and-Preparing-Expressed-Breast-Milk.aspx" target="_blank" rel="noopener noreferrer" className="underline text-primary">AAP — Storing and Preparing Breast Milk</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
