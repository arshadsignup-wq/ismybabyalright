"use client";

import Link from "next/link";
import { useProfile, useEvents, useSettings } from "@/lib/useStorage";
import { getAgeInMonthsFromDate } from "@/lib/tracker";
import QuickTapGrid from "@/components/tracker/QuickTapGrid";
import RightNowCard from "@/components/tracker/RightNowCard";
import Timeline from "@/components/tracker/Timeline";
import DailySummary from "@/components/tracker/DailySummary";
import ExportSummary from "@/components/tracker/ExportSummary";
import OnboardingFlow from "@/components/tracker/OnboardingFlow";

export default function TrackerPage() {
  const { profile, saveProfile } = useProfile();
  const { events, addEvent, updateEvent, deleteEvent } = useEvents();
  const { settings } = useSettings();

  if (!profile) {
    return <OnboardingFlow onComplete={saveProfile} />;
  }

  const ageMonths = getAgeInMonthsFromDate(profile.birthDate);

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-5">
      {/* Right Now Card */}
      <RightNowCard
        events={events}
        babyName={profile.name}
        ageMonths={ageMonths}
      />

      {/* Quick-tap grid */}
      <QuickTapGrid
        babyId={profile.id}
        events={events}
        volumeUnit={settings.volumeUnit}
        onLog={addEvent}
        onUpdate={updateEvent}
      />

      {/* Daily Summary */}
      <DailySummary events={events} />

      {/* Timeline */}
      <Timeline
        events={events}
        timeFormat={settings.timeFormat}
        onDelete={deleteEvent}
      />

      {/* Export for doctor */}
      <ExportSummary events={events} babyName={profile.name} />

      {/* Quick links */}
      <div className="flex gap-3 text-sm">
        <Link
          href="/tracker/feeding"
          className="flex-1 text-center px-3 py-2.5 rounded-lg bg-card border border-card-border text-primary font-medium hover:bg-primary-light transition-colors"
        >
          Feeding Log
        </Link>
        <Link
          href="/tracker/sleep"
          className="flex-1 text-center px-3 py-2.5 rounded-lg bg-card border border-card-border text-primary font-medium hover:bg-primary-light transition-colors"
        >
          Sleep Log
        </Link>
        <Link
          href="/tracker/diaper"
          className="flex-1 text-center px-3 py-2.5 rounded-lg bg-card border border-card-border text-primary font-medium hover:bg-primary-light transition-colors"
        >
          Diaper Log
        </Link>
      </div>

      {/* Share with caregiver */}
      <Link
        href="/sharing"
        className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-dashed border-primary/40 text-sm font-medium text-primary hover:bg-primary-light transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
        Share with caregiver
      </Link>
    </div>
  );
}
