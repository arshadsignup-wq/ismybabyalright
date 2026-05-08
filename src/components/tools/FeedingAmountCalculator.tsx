"use client";

import { useState } from "react";
import { getFeedingAmount, ozToMl } from "@/data/feeding-amount/data";

export default function FeedingAmountCalculator() {
  const [ageInput, setAgeInput] = useState("");
  const [unit, setUnit] = useState<"oz" | "ml">("oz");

  const ageMonths = ageInput !== "" ? parseFloat(ageInput) : null;
  const feeding =
    ageMonths !== null && ageMonths >= 0 ? getFeedingAmount(ageMonths) : null;

  function displayVolume(oz: number): string {
    if (unit === "ml") return `${ozToMl(oz)} mL`;
    return `${oz} oz`;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Baby Feeding Amount Calculator
        </h1>
        <p className="mt-2 text-muted">
          Find out how much and how often to feed your baby based on their age.
          Covers formula, breast milk, and when to introduce solids.
        </p>
      </div>

      {/* Input */}
      <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div className="flex-1">
            <label
              htmlFor="age"
              className="mb-1.5 block text-sm font-semibold text-foreground"
            >
              Baby&apos;s age in months
            </label>
            <input
              id="age"
              type="number"
              inputMode="decimal"
              step="0.5"
              min="0"
              max="24"
              placeholder="e.g. 4"
              value={ageInput}
              onChange={(e) => setAgeInput(e.target.value)}
              className="h-11 w-full max-w-xs rounded-xl border border-card-border bg-background px-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <p className="mb-1.5 text-sm font-semibold text-foreground">
              Volume unit
            </p>
            <div className="flex rounded-xl border border-card-border overflow-hidden">
              <button
                onClick={() => setUnit("oz")}
                className={`px-3 h-11 text-sm font-medium transition-colors cursor-pointer ${
                  unit === "oz"
                    ? "bg-primary text-white"
                    : "bg-card text-muted hover:bg-primary-light"
                }`}
              >
                oz
              </button>
              <button
                onClick={() => setUnit("ml")}
                className={`px-3 h-11 text-sm font-medium transition-colors cursor-pointer ${
                  unit === "ml"
                    ? "bg-primary text-white"
                    : "bg-card text-muted hover:bg-primary-light"
                }`}
              >
                mL
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      {feeding && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-foreground">
            Feeding Guide for {feeding.label}
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <StatCard
              label="Per Feed"
              value={`${displayVolume(feeding.formulaPerFeedOzMin)}-${displayVolume(feeding.formulaPerFeedOzMax)}`}
            />
            <StatCard
              label="Feeds/Day"
              value={`${feeding.feedsPerDayMin}-${feeding.feedsPerDayMax}`}
            />
            <StatCard
              label="Daily Total"
              value={`${displayVolume(feeding.totalDailyOzMin)}-${displayVolume(feeding.totalDailyOzMax)}`}
            />
          </div>

          {/* Details */}
          <div className="rounded-2xl border border-card-border bg-card p-4 sm:p-6 space-y-4">
            <div>
              <p className="text-xs font-semibold text-muted uppercase tracking-wide">
                Breastfeeding
              </p>
              <p className="text-sm font-medium text-foreground mt-1">
                {feeding.breastfeedMinutes}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted uppercase tracking-wide">
                Solids
              </p>
              <p className="text-sm text-foreground mt-1">
                {feeding.solidsNote}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted uppercase tracking-wide">
                Tips
              </p>
              <p className="text-sm text-muted mt-1">{feeding.tips}</p>
            </div>
          </div>

          {/* Important note */}
          <div className="rounded-xl border-2 border-amber-300 bg-amber-50 px-4 py-3 dark:border-amber-500/40 dark:bg-amber-950/30">
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <span className="font-semibold">Remember:</span> Every baby is
              different. These are general guidelines — your baby may eat more
              or less. Always follow your pediatrician&apos;s recommendations
              and watch for hunger and fullness cues.
            </p>
          </div>
        </div>
      )}

      {/* Sources */}
      <div className="text-xs text-muted">
        <p className="font-semibold mb-1">Sources</p>
        <ul className="space-y-0.5">
          <li>
            <a
              href="https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/How-Often-and-How-Much-Should-Your-Baby-Eat.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              AAP — How Much and How Often to Feed
            </a>
          </li>
          <li>
            <a
              href="https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/how-much-and-how-often.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary"
            >
              CDC — Infant and Toddler Nutrition
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-card-border bg-card p-3 text-center">
      <p className="text-xs font-semibold text-muted uppercase tracking-wide">
        {label}
      </p>
      <p className="text-base font-bold text-foreground mt-1">{value}</p>
    </div>
  );
}
