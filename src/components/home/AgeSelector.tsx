"use client";

import Link from "next/link";
import { allCheckpoints } from "@/data/milestones";

const STAGES = [
  {
    label: "Infant",
    range: "1 – 6 mo",
    options: [
      { id: "1-month", label: "1 mo", ageInMonths: 1 },
      { id: "2-months", label: "2 mo", ageInMonths: 2 },
      { id: "4-months", label: "4 mo", ageInMonths: 4 },
      { id: "6-months", label: "6 mo", ageInMonths: 6 },
    ],
  },
  {
    label: "Baby",
    range: "9 – 18 mo",
    options: [
      { id: "9-months", label: "9 mo", ageInMonths: 9 },
      { id: "12-months", label: "12 mo", ageInMonths: 12 },
      { id: "15-months", label: "15 mo", ageInMonths: 15 },
      { id: "18-months", label: "18 mo", ageInMonths: 18 },
    ],
  },
  {
    label: "Toddler",
    range: "2 – 3 yr",
    options: [
      { id: "24-months", label: "2 yr", ageInMonths: 24 },
      { id: "30-months", label: "2.5 yr", ageInMonths: 30 },
      { id: "36-months", label: "3 yr", ageInMonths: 36 },
    ],
  },
];

interface AgeSelectorProps {
  currentId?: string;
}

export default function AgeSelector({ currentId }: AgeSelectorProps) {
  const availableIds = new Set(allCheckpoints.map((cp) => cp.id));

  return (
    <section aria-labelledby="age-selector-heading" className="px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <h2
          id="age-selector-heading"
          className="mb-8 text-center text-foreground"
        >
          Select your baby&rsquo;s age
        </h2>

        {/* Horizontal scroll wrapper on mobile */}
        <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
          {STAGES.map((stage) => (
            <div key={stage.label} className="flex flex-col items-center gap-2 snap-start min-w-fit">
              {/* Stage label */}
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                {stage.label}
              </span>

              <div className="flex gap-2" role="list" aria-label={`${stage.label} age checkpoints`}>
                {stage.options.map((option) => {
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
                        flex min-h-[44px] items-center justify-center rounded-lg px-3 py-2
                        text-sm font-semibold leading-none whitespace-nowrap
                        transition-all duration-150
                        ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/30 ring-offset-2 ring-offset-background scale-105"
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
          ))}
        </div>
      </div>
    </section>
  );
}
