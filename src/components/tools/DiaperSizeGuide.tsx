"use client";

import { useState } from "react";
import {
  DIAPER_SIZES,
  getRecommendedSize,
  FIT_TIPS,
} from "@/data/diaper-size/data";

export default function DiaperSizeGuide() {
  const [weightInput, setWeightInput] = useState("");
  const [weightUnit, setWeightUnit] = useState<"lbs" | "kg">("lbs");

  const weightNum = parseFloat(weightInput);
  const weightLbs =
    !isNaN(weightNum) && weightNum > 0
      ? weightUnit === "kg"
        ? weightNum * 2.20462
        : weightNum
      : null;
  const recommended = weightLbs !== null ? getRecommendedSize(weightLbs) : null;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Diaper Size Guide
        </h1>
        <p className="mt-2 text-muted">
          Enter your baby&apos;s weight to find the right diaper size, or browse
          the full size chart below.
        </p>
      </div>

      {/* Input */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <label
          htmlFor="weight"
          className="mb-1.5 block text-sm font-semibold text-foreground"
        >
          Baby&apos;s weight
        </label>
        <div className="flex gap-2">
          <input
            id="weight"
            type="number"
            inputMode="decimal"
            step="0.5"
            min="0"
            placeholder={weightUnit === "lbs" ? "e.g. 15" : "e.g. 7"}
            value={weightInput}
            onChange={(e) => setWeightInput(e.target.value)}
            className="h-11 flex-1 max-w-xs rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <div className="flex rounded-xl border border-card-border overflow-hidden">
            <button
              onClick={() => setWeightUnit("lbs")}
              className={`px-3 h-11 text-sm font-medium transition-colors cursor-pointer ${
                weightUnit === "lbs"
                  ? "bg-primary text-white"
                  : "bg-card text-muted hover:bg-primary-light"
              }`}
            >
              lbs
            </button>
            <button
              onClick={() => setWeightUnit("kg")}
              className={`px-3 h-11 text-sm font-medium transition-colors cursor-pointer ${
                weightUnit === "kg"
                  ? "bg-primary text-white"
                  : "bg-card text-muted hover:bg-primary-light"
              }`}
            >
              kg
            </button>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      {recommended && (
        <div className="rounded-2xl border-2 border-primary/30 bg-primary-light/30 p-4 sm:p-6">
          <h2 className="text-lg font-bold text-foreground mb-2">
            Recommended: {recommended.size}
          </h2>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <p className="text-xs font-semibold text-muted uppercase">Weight Range</p>
              <p className="text-sm font-bold text-foreground">
                {recommended.weightMinLbs}-{recommended.weightMaxLbs} lbs
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted uppercase">Typical Age</p>
              <p className="text-sm font-bold text-foreground">
                {recommended.ageRange}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted uppercase">Diapers/Day</p>
              <p className="text-sm font-bold text-foreground">
                {recommended.diapersPerDay}
              </p>
            </div>
          </div>
          <p className="text-sm text-muted">{recommended.notes}</p>
        </div>
      )}

      {/* Full size chart */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="text-lg font-bold text-foreground mb-3">
          Full Size Chart
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-card-border">
                <th className="py-2 pr-3 font-semibold text-muted">Size</th>
                <th className="py-2 pr-3 font-semibold text-muted">Weight</th>
                <th className="py-2 pr-3 font-semibold text-muted">Age</th>
                <th className="py-2 font-semibold text-muted hidden sm:table-cell">
                  Per Day
                </th>
              </tr>
            </thead>
            <tbody>
              {DIAPER_SIZES.map((d) => (
                <tr
                  key={d.size}
                  className={`border-b border-card-border/50 ${
                    recommended?.size === d.size ? "bg-primary-light/40" : ""
                  }`}
                >
                  <td className="py-2.5 pr-3 font-bold text-foreground">
                    {d.size}
                    {recommended?.size === d.size && (
                      <span className="ml-1 text-xs text-primary font-normal">
                        (best fit)
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 pr-3 text-foreground">
                    {d.weightMinLbs}-{d.weightMaxLbs} lbs
                  </td>
                  <td className="py-2.5 pr-3 text-muted">{d.ageRange}</td>
                  <td className="py-2.5 text-muted hidden sm:table-cell">
                    {d.diapersPerDay}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Fit tips */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <h2 className="mb-3 text-lg font-bold text-foreground">
          Diaper Fit Tips
        </h2>
        <ul className="space-y-2 text-sm text-muted">
          {FIT_TIPS.map((tip, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Sources */}
      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a
              href="https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              AAP — Diapers &amp; Clothing
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
