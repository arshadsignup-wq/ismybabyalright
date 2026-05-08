"use client";

import Link from "next/link";
import { useProfile, useEvents, useSettings } from "@/lib/useStorage";
import { getEventsToday, getDiaperCountToday, getTimeSinceLastEvent, formatDuration } from "@/lib/tracker";
import DiaperLogger from "@/components/tracker/DiaperLogger";
import TimelineEvent from "@/components/tracker/TimelineEvent";

export default function DiaperPage() {
  const { profile } = useProfile();
  const { events, addEvent } = useEvents();
  const { settings } = useSettings();

  if (!profile) {
    return (
      <div className="mx-auto max-w-lg px-4 py-10 text-center">
        <p className="text-muted mb-4">Set up your baby&apos;s profile first.</p>
        <Link href="/tracker" className="text-primary font-semibold hover:underline">
          Go to Tracker
        </Link>
      </div>
    );
  }

  const todayDiapers = getEventsToday(events).filter((e) => e.type === "diaper");
  const diaperCount = getDiaperCountToday(events);
  const minutesSinceLast = getTimeSinceLastEvent(events, "diaper");

  // Count wet vs dirty
  const wetCount = todayDiapers.filter(
    (e) => e.diaper?.diaperType === "wet" || e.diaper?.diaperType === "both"
  ).length;
  const dirtyCount = todayDiapers.filter(
    (e) => e.diaper?.diaperType === "dirty" || e.diaper?.diaperType === "both"
  ).length;

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <Link
          href="/tracker"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to tracker"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <h1 className="text-xl font-bold text-foreground">Diaper Log</h1>
      </div>

      {/* Stats */}
      <div className="card p-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <p className="text-xs font-medium text-muted uppercase tracking-wide">
              Total today
            </p>
            <p className="text-2xl font-bold text-foreground tabular-nums mt-0.5">
              {diaperCount}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted uppercase tracking-wide">
              Last change
            </p>
            <p className="text-2xl font-bold text-foreground tabular-nums mt-0.5">
              {minutesSinceLast !== null
                ? formatDuration(minutesSinceLast) + " ago"
                : " - "}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted uppercase tracking-wide">
              Wet
            </p>
            <p className="text-2xl font-bold text-foreground tabular-nums mt-0.5">
              {wetCount}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-muted uppercase tracking-wide">
              Dirty
            </p>
            <p className="text-2xl font-bold text-foreground tabular-nums mt-0.5">
              {dirtyCount}
            </p>
          </div>
        </div>
      </div>

      {/* Logger */}
      <DiaperLogger
        babyId={profile.id}
        onLog={addEvent}
        onClose={() => {}}
      />

      {/* Today's diaper history */}
      {todayDiapers.length > 0 && (
        <div className="card p-4">
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-2">
            Today&apos;s Diaper Changes
          </h3>
          {todayDiapers.map((event) => (
            <TimelineEvent
              key={event.id}
              event={event}
              timeFormat={settings.timeFormat}
            />
          ))}
        </div>
      )}
    </div>
  );
}
