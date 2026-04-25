"use client";

import Link from "next/link";
import { useProfile } from "@/lib/useStorage";
import { getAgeInMonthsFromDate } from "@/lib/tracker";
import { sleepGuidance, regressions, getGuidanceForAge } from "@/data/sleep/guidance";
import SleepGuidance from "@/components/sleep/SleepGuidance";
import RegressionExplainer from "@/components/sleep/RegressionExplainer";

export default function SleepPage() {
  const { profile } = useProfile();
  const ageMonths = profile ? getAgeInMonthsFromDate(profile.birthDate) : null;
  const currentGuidance = ageMonths !== null ? getGuidanceForAge(ageMonths) : null;

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/tracker"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to tracker"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <div>
          <h1 className="text-xl font-bold text-foreground">Sleep Guide</h1>
          <p className="text-sm text-muted">Age-based guidance and regression info</p>
        </div>
      </div>

      {/* Current age guidance (highlighted) */}
      {currentGuidance && (
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">
            Your baby right now
          </h2>
          <SleepGuidance guidance={currentGuidance} />
        </div>
      )}

      {/* Sleep regressions */}
      <div className="mb-6">
        <h2 className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">
          Sleep regressions
        </h2>
        <div className="flex flex-col gap-3">
          {regressions.map((reg) => (
            <RegressionExplainer
              key={reg.ageLabel}
              regression={reg}
              isRelevant={ageMonths !== null && Math.abs(ageMonths - reg.ageMonths) <= 1}
            />
          ))}
        </div>
      </div>

      {/* All ages reference */}
      <div>
        <h2 className="text-xs font-semibold text-muted uppercase tracking-wide mb-3">
          All ages
        </h2>
        <div className="flex flex-col gap-3">
          {sleepGuidance
            .filter((g) => g !== currentGuidance)
            .map((g) => (
              <SleepGuidance key={g.ageRange} guidance={g} />
            ))}
        </div>
      </div>

      {/* Safe sleep reminder */}
      <div className="mt-6 p-4 rounded-xl bg-safe-light border border-safe-border">
        <p className="text-sm font-semibold text-safe mb-1">Safe sleep reminder</p>
        <p className="text-sm text-foreground leading-relaxed">
          Always place your baby on their back to sleep, on a firm, flat surface, with no blankets,
          pillows, or toys in the crib. Room-sharing (not bed-sharing) is recommended for at least
          the first 6 months.
        </p>
        <p className="text-xs text-muted mt-2">Source: AAP Safe Sleep Guidelines</p>
      </div>
    </div>
  );
}
