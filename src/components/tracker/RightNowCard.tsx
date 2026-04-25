"use client";

import { useEffect, useState } from "react";
import type { TrackerEvent } from "@/data/tracker/types";
import {
  getTimeSinceLastEvent,
  getDiaperCountToday,
  getFeedCountToday,
  getWakeWindowStatus,
  isCurrentlySleeping,
  formatDuration,
} from "@/lib/tracker";

interface RightNowCardProps {
  events: TrackerEvent[];
  babyName: string;
  ageMonths: number;
}

export default function RightNowCard({
  events,
  babyName,
  ageMonths,
}: RightNowCardProps) {
  const [, setTick] = useState(0);

  // Refresh every minute so "time since" stays current
  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  const minutesSinceFeed = getTimeSinceLastEvent(events, "feed");
  const diaperCount = getDiaperCountToday(events);
  const feedCount = getFeedCountToday(events);
  const sleeping = isCurrentlySleeping(events);
  const wakeStatus = getWakeWindowStatus(events, ageMonths);

  return (
    <div
      className="card p-5 border-l-4 border-l-primary"
      role="status"
      aria-label={`${babyName} right now`}
    >
      <h2 className="text-base font-bold text-foreground mb-4">
        {babyName} right now
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Last fed */}
        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide">
            Last fed
          </p>
          <p className="text-lg font-bold text-foreground tabular-nums mt-0.5">
            {minutesSinceFeed !== null
              ? formatDuration(minutesSinceFeed) + " ago"
              : "Not yet"}
          </p>
        </div>

        {/* Status */}
        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide">
            Status
          </p>
          <p className="text-lg font-bold mt-0.5">
            {sleeping ? (
              <span className="text-primary">Sleeping</span>
            ) : wakeStatus ? (
              <span
                className={
                  wakeStatus.status === "overdue"
                    ? "text-concern"
                    : wakeStatus.status === "approaching"
                      ? "text-monitor"
                      : "text-safe"
                }
              >
                Awake {formatDuration(wakeStatus.minutesAwake)}
              </span>
            ) : (
              <span className="text-foreground">Awake</span>
            )}
          </p>
        </div>

        {/* Feeds today */}
        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide">
            Feeds today
          </p>
          <p className="text-lg font-bold text-foreground tabular-nums mt-0.5">
            {feedCount}
          </p>
        </div>

        {/* Diapers today */}
        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide">
            Diapers today
          </p>
          <p className="text-lg font-bold text-foreground tabular-nums mt-0.5">
            {diaperCount}
          </p>
        </div>
      </div>

      {/* Wake window hint */}
      {wakeStatus && !sleeping && (
        <div
          className={`mt-4 px-3 py-2 rounded-lg text-sm ${
            wakeStatus.status === "overdue"
              ? "bg-concern-light text-concern-foreground"
              : wakeStatus.status === "approaching"
                ? "bg-monitor-light text-monitor-foreground"
                : "bg-safe-light text-safe-foreground"
          }`}
        >
          {wakeStatus.status === "overdue"
            ? `Past wake window (${formatDuration(wakeStatus.windowMaxMinutes)}). May be ready for a nap.`
            : wakeStatus.status === "approaching"
              ? `Approaching nap time (window: ${formatDuration(wakeStatus.windowMinMinutes)}-${formatDuration(wakeStatus.windowMaxMinutes)}).`
              : `Wake window: ${formatDuration(wakeStatus.windowMinMinutes)}-${formatDuration(wakeStatus.windowMaxMinutes)} (${wakeStatus.naps})`}
        </div>
      )}
    </div>
  );
}
