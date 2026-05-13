"use client";

import Link from "next/link";
import { getAdviceForAge } from "@/lib/ageAdvice";
import { allCheckpoints } from "@/data/milestones";

interface AgeRelevantContentProps {
  ageMonths: number;
}

export default function AgeRelevantContent({ ageMonths }: AgeRelevantContentProps) {
  const advice = getAdviceForAge(ageMonths);
  const topConcerns = advice.concerns.slice(0, 3);

  // Find the next milestone checkpoint after the current age
  const nextCheckpoint = allCheckpoints
    .filter((cp) => cp.ageInMonths > ageMonths)
    .sort((a, b) => a.ageInMonths - b.ageInMonths)[0];

  if (topConcerns.length === 0 && !nextCheckpoint) return null;

  return (
    <div className="rounded-xl border border-[#E8E2D9] bg-white p-4">
      {topConcerns.length > 0 && (
        <div>
          <p className="text-xs font-bold text-muted mb-2">
            At {ageMonths} {ageMonths === 1 ? "month" : "months"}, parents commonly ask about:
          </p>
          <div className="flex flex-col gap-1.5">
            {topConcerns.map((c) => (
              <Link
                key={c.slug}
                href={`/concerns/${c.slug}`}
                className="text-sm text-primary font-semibold hover:text-primary-hover transition-colors no-underline"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {nextCheckpoint && (
        <div className={topConcerns.length > 0 ? "mt-3 pt-3 border-t border-[#E8E2D9]" : ""}>
          <p className="text-xs text-muted">
            <span className="font-bold">Coming up:</span>{" "}
            {nextCheckpoint.label} milestone checkpoint
          </p>
        </div>
      )}

      <Link
        href={`/age/${ageMonths}`}
        className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-hover transition-colors no-underline"
      >
        See all advice for {ageMonths} months
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </Link>
    </div>
  );
}
