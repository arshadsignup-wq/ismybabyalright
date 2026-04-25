"use client";

import { useState } from "react";
import type { FoodGuide } from "@/data/food/types";

interface FoodGuideCardProps {
  food: FoodGuide;
  ageMonths: number;
}

export default function FoodGuideCard({ food, ageMonths }: FoodGuideCardProps) {
  const [expanded, setExpanded] = useState(false);

  // Find age-appropriate prep
  const currentPrep = food.preps.find(
    (p) => ageMonths >= p.minMonths && ageMonths < p.maxMonths
  ) ?? food.preps[food.preps.length - 1];

  const isReadyToIntroduce = ageMonths >= food.introMonths;

  return (
    <div className={`card p-4 ${!isReadyToIntroduce ? "opacity-60" : ""}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between text-left cursor-pointer min-h-[44px]"
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl" aria-hidden="true">{food.emoji}</span>
          <div>
            <span className="text-sm font-bold text-foreground">{food.name}</span>
            {food.allergen && (
              <span className="ml-2 text-xs font-semibold text-monitor px-1.5 py-0.5 rounded-full bg-monitor-light border border-monitor-border">
                Allergen
              </span>
            )}
            {!isReadyToIntroduce && (
              <p className="text-xs text-muted">From {food.introMonths} months</p>
            )}
          </div>
        </div>
        <svg
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform text-muted ${expanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-card-border">
          {/* Current age prep */}
          {currentPrep && (
            <div className="mb-3">
              <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
                How to serve ({currentPrep.ageRange})
              </h4>
              <p className="text-sm text-foreground font-medium">{currentPrep.method}</p>
              <ul className="mt-1.5 flex flex-col gap-1">
                {currentPrep.tips.map((tip, i) => (
                  <li key={i} className="text-xs text-muted flex items-start gap-1.5">
                    <span className="flex-shrink-0 mt-1 w-1 h-1 rounded-full bg-muted" aria-hidden="true" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* All preps */}
          {food.preps.length > 1 && (
            <details className="text-sm mb-3">
              <summary className="font-medium text-muted cursor-pointer min-h-[44px] flex items-center">
                All age preparations
              </summary>
              <div className="mt-2 flex flex-col gap-2">
                {food.preps.map((prep, i) => (
                  <div key={i} className="bg-card-alt rounded-lg p-2.5">
                    <p className="text-xs font-semibold text-muted">{prep.ageRange}</p>
                    <p className="text-sm text-foreground">{prep.method}</p>
                  </div>
                ))}
              </div>
            </details>
          )}

          <p className="text-xs text-muted">{food.nutrition}</p>
          {food.notes && (
            <p className="text-xs text-monitor-foreground bg-monitor-light rounded px-2 py-1 mt-2">
              {food.notes}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
