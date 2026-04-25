"use client";

import Link from "next/link";
import { useProfile, useEvents, useSettings } from "@/lib/useStorage";
import { getAgeInMonthsFromDate, getWakeWindowStatus, isCurrentlySleeping, formatDuration, getEventsToday } from "@/lib/tracker";
import { getWakeWindow } from "@/data/tracker/wake-windows";
import SleepLogger from "@/components/tracker/SleepLogger";
import TimelineEvent from "@/components/tracker/TimelineEvent";

export default function SleepPage() {
  const { profile } = useProfile();
  const { events, addEvent, updateEvent } = useEvents();
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

  const ageMonths = getAgeInMonthsFromDate(profile.birthDate);
  const wakeStatus = getWakeWindowStatus(events, ageMonths);
  const wakeWindow = getWakeWindow(ageMonths);
  const sleeping = isCurrentlySleeping(events);
  const todaySleepEvents = getEventsToday(events).filter((e) => e.type === "sleep");
  const totalSleepMinutes = todaySleepEvents
    .filter((e) => e.sleep?.durationMinutes)
    .reduce((sum, e) => sum + (e.sleep?.durationMinutes ?? 0), 0);

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
        <h1 className="text-xl font-bold text-foreground">Sleep</h1>
      </div>

      {/* Sleep logger */}
      <SleepLogger
        babyId={profile.id}
        events={events}
        onLog={addEvent}
        onUpdate={updateEvent}
        onClose={() => {}}
      />

      {/* Wake window info */}
      {wakeWindow && !sleeping && (
        <div className="card p-4">
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-2">
            Wake Window ({wakeWindow.label})
          </h3>
          <p className="text-sm text-foreground">
            {formatDuration(wakeWindow.minMinutes)} &ndash;{" "}
            {formatDuration(wakeWindow.maxMinutes)} awake between naps
          </p>
          <p className="text-xs text-muted mt-1">
            Typical schedule: {wakeWindow.naps}
          </p>
          {wakeStatus && (
            <p className={`text-sm mt-2 font-medium ${
              wakeStatus.status === "overdue"
                ? "text-concern"
                : wakeStatus.status === "approaching"
                  ? "text-monitor"
                  : "text-safe"
            }`}>
              {wakeStatus.status === "overdue"
                ? `Overdue  -  awake for ${formatDuration(wakeStatus.minutesAwake)}`
                : wakeStatus.status === "approaching"
                  ? `Getting close  -  awake for ${formatDuration(wakeStatus.minutesAwake)}`
                  : `On track  -  awake for ${formatDuration(wakeStatus.minutesAwake)}`}
            </p>
          )}
        </div>
      )}

      {/* Today's sleep summary */}
      {todaySleepEvents.length > 0 && (
        <div className="card p-4">
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-2">
            Today&apos;s Sleep
          </h3>
          <p className="text-lg font-bold text-foreground mb-3">
            {formatDuration(totalSleepMinutes)} total
          </p>
          {todaySleepEvents.map((event) => (
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
