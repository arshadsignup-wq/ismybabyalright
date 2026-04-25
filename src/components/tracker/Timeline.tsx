"use client";

import type { TrackerEvent } from "@/data/tracker/types";
import { getEventsToday } from "@/lib/tracker";
import TimelineEvent from "./TimelineEvent";

interface TimelineProps {
  events: TrackerEvent[];
  timeFormat: "12h" | "24h";
  onDelete?: (id: string) => void;
}

export default function Timeline({
  events,
  timeFormat,
  onDelete,
}: TimelineProps) {
  const todayEvents = getEventsToday(events);

  if (todayEvents.length === 0) {
    return (
      <div className="card p-6 text-center">
        <p className="text-muted">No events logged today yet.</p>
        <p className="text-sm text-muted-light mt-1">
          Use the buttons above to start tracking.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-4" role="log" aria-label="Today's events">
      <h3 className="text-sm font-semibold text-muted uppercase tracking-wide mb-2">
        Today
      </h3>
      <div>
        {todayEvents.map((event) => (
          <TimelineEvent
            key={event.id}
            event={event}
            timeFormat={timeFormat}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
