"use client";

import type { TrackerEvent } from "@/data/tracker/types";
import { getDailySummary, formatDuration } from "@/lib/tracker";

interface DailySummaryProps {
  events: TrackerEvent[];
}

export default function DailySummary({ events }: DailySummaryProps) {
  const summary = getDailySummary(events);

  if (summary.eventCount === 0) return null;

  return (
    <div className="card-alt p-5" role="region" aria-label="Daily summary">
      <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-3">
        Today&apos;s Summary
      </h3>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-foreground tabular-nums">
            {summary.feedCount}
          </p>
          <p className="text-xs text-muted mt-0.5">
            {summary.feedCount === 1 ? "feed" : "feeds"}
          </p>
        </div>

        <div>
          <p className="text-2xl font-bold text-foreground tabular-nums">
            {summary.diaperCount}
          </p>
          <p className="text-xs text-muted mt-0.5">
            {summary.diaperCount === 1 ? "diaper" : "diapers"}
          </p>
          {(summary.wetDiapers > 0 || summary.dirtyDiapers > 0) && (
            <p className="text-xs text-muted-light mt-0.5">
              {summary.wetDiapers}W / {summary.dirtyDiapers}D
            </p>
          )}
        </div>

        <div>
          <p className="text-2xl font-bold text-foreground tabular-nums">
            {summary.sleepMinutes > 0
              ? formatDuration(summary.sleepMinutes)
              : "0h"}
          </p>
          <p className="text-xs text-muted mt-0.5">sleep</p>
        </div>
      </div>
    </div>
  );
}
