"use client";

import Link from "next/link";
import { allCheckpoints } from "@/data/milestones";

/**
 * All age options the selector should display, including checkpoints
 * that may not have data files yet. This ensures the UI always shows
 * the full set of CDC age checkpoints even as data is being authored.
 */
const AGE_OPTIONS = [
  { id: "1-month", label: "1mo", ageInMonths: 1 },
  { id: "2-months", label: "2mo", ageInMonths: 2 },
  { id: "4-months", label: "4mo", ageInMonths: 4 },
  { id: "6-months", label: "6mo", ageInMonths: 6 },
  { id: "9-months", label: "9mo", ageInMonths: 9 },
  { id: "12-months", label: "12mo", ageInMonths: 12 },
  { id: "15-months", label: "15mo", ageInMonths: 15 },
  { id: "18-months", label: "18mo", ageInMonths: 18 },
  { id: "24-months", label: "2yr", ageInMonths: 24 },
  { id: "30-months", label: "2.5yr", ageInMonths: 30 },
  { id: "36-months", label: "3yr", ageInMonths: 36 },
];

interface AgeSelectorProps {
  /** The id of the currently-selected checkpoint (e.g. "9-months"). */
  currentId?: string;
}

export default function AgeSelector({ currentId }: AgeSelectorProps) {
  // Build a set of IDs that have real data behind them
  const availableIds = new Set(allCheckpoints.map((cp) => cp.id));

  return (
    <section aria-labelledby="age-selector-heading" className="px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <h2
          id="age-selector-heading"
          className="mb-6 text-center text-foreground"
        >
          Select your baby&rsquo;s age
        </h2>

        <div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          role="list"
          aria-label="Age checkpoints"
        >
          {AGE_OPTIONS.map((option) => {
            const isActive = option.id === currentId;
            const hasData = availableIds.has(option.id);

            return (
              <Link
                key={option.id}
                href={`/milestones/${option.id}`}
                role="listitem"
                aria-current={isActive ? "page" : undefined}
                aria-label={`${option.ageInMonths} months${!hasData ? " (coming soon)" : ""}`}
                className={`
                  flex h-16 w-16 items-center justify-center rounded-full
                  text-sm font-semibold leading-none
                  transition-all duration-150
                  sm:h-[4.5rem] sm:w-[4.5rem] sm:text-base
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/30 ring-offset-2 ring-offset-background scale-110"
                      : hasData
                        ? "bg-card text-foreground border border-card-border hover:border-primary hover:text-primary hover:shadow-sm"
                        : "bg-card-alt text-muted-light border border-card-border cursor-default opacity-60"
                  }
                `}
              >
                {option.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
