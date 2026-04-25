"use client";

import type { TrackerEvent } from "@/data/tracker/types";
import { formatTime, formatDuration } from "@/lib/tracker";

interface TimelineEventProps {
  event: TrackerEvent;
  timeFormat: "12h" | "24h";
  onDelete?: (id: string) => void;
}

function getEventIcon(event: TrackerEvent): string {
  switch (event.type) {
    case "feed":
      if (event.feed?.feedType === "bottle") return "🍼";
      if (event.feed?.feedType === "solids") return "🥄";
      return "🤱";
    case "sleep":
      return event.sleep?.endTime ? "😴" : "💤";
    case "diaper":
      if (event.diaper?.diaperType === "wet") return "💧";
      if (event.diaper?.diaperType === "dirty") return "💩";
      return "💧💩";
    case "medication":
      return "💊";
    case "temperature":
      return "🌡️";
    case "note":
      return "📝";
    default:
      return "📋";
  }
}

function getEventLabel(event: TrackerEvent): string {
  switch (event.type) {
    case "feed": {
      const ft = event.feed?.feedType;
      if (ft === "breast-left") return "Nursed (left)";
      if (ft === "breast-right") return "Nursed (right)";
      if (ft === "bottle") return "Bottle";
      if (ft === "solids") return "Solids";
      return "Feed";
    }
    case "sleep":
      return event.sleep?.endTime ? "Sleep" : "Sleeping...";
    case "diaper": {
      const dt = event.diaper?.diaperType;
      if (dt === "wet") return "Wet diaper";
      if (dt === "dirty") return "Dirty diaper";
      return "Wet + dirty diaper";
    }
    case "medication":
      return `Medication: ${event.medication?.name ?? ""}`;
    case "temperature":
      return `Temp: ${event.temperature?.value}°${event.temperature?.unit}`;
    case "note":
      return "Note";
    default:
      return "Event";
  }
}

function getEventDetail(event: TrackerEvent): string | null {
  switch (event.type) {
    case "feed":
      if (event.feed?.amountOz) return `${event.feed.amountOz} oz`;
      if (event.feed?.durationMinutes)
        return `${event.feed.durationMinutes} min`;
      return null;
    case "sleep":
      if (event.sleep?.durationMinutes)
        return formatDuration(event.sleep.durationMinutes);
      return null;
    case "note":
      return event.note ?? null;
    default:
      return null;
  }
}

export default function TimelineEvent({
  event,
  timeFormat,
  onDelete,
}: TimelineEventProps) {
  const detail = getEventDetail(event);

  return (
    <div className="flex items-start gap-3 py-3 border-b border-card-border last:border-0">
      <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">
        {getEventIcon(event)}
      </span>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm font-semibold text-foreground">
            {getEventLabel(event)}
          </span>
          <span className="text-xs text-muted tabular-nums flex-shrink-0">
            {formatTime(event.timestamp, timeFormat)}
          </span>
        </div>
        {detail && (
          <p className="text-xs text-muted mt-0.5">{detail}</p>
        )}
      </div>

      {onDelete && (
        <button
          onClick={() => onDelete(event.id)}
          className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded text-muted-light hover:text-concern hover:bg-concern-light transition-colors cursor-pointer"
          aria-label={`Delete ${getEventLabel(event)} event`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}
