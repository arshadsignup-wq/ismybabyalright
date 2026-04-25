import type { TrackerEvent, TrackerEventType } from "@/data/tracker/types";
import { getWakeWindow } from "@/data/tracker/wake-windows";

/** Generate a short unique ID */
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

/** Get age in months from a birth date string */
export function getAgeInMonthsFromDate(birthDate: string): number {
  const birth = new Date(birthDate);
  const now = new Date();
  const months =
    (now.getFullYear() - birth.getFullYear()) * 12 +
    (now.getMonth() - birth.getMonth());
  return Math.max(0, months);
}

/** Check if two dates are the same calendar day */
function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** Get all events from today */
export function getEventsToday(events: TrackerEvent[]): TrackerEvent[] {
  const today = new Date();
  return events
    .filter((e) => isSameDay(new Date(e.timestamp), today))
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
}

/** Get last event of a specific type */
export function getLastEventOfType(
  events: TrackerEvent[],
  type: TrackerEventType
): TrackerEvent | undefined {
  return events
    .filter((e) => e.type === type)
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )[0];
}

/** Get time since last event of a given type, in minutes */
export function getTimeSinceLastEvent(
  events: TrackerEvent[],
  type: TrackerEventType
): number | null {
  const last = getLastEventOfType(events, type);
  if (!last) return null;
  const diff = Date.now() - new Date(last.timestamp).getTime();
  return Math.floor(diff / 60000);
}

/** Count diapers today */
export function getDiaperCountToday(events: TrackerEvent[]): number {
  return getEventsToday(events).filter((e) => e.type === "diaper").length;
}

/** Count feeds today */
export function getFeedCountToday(events: TrackerEvent[]): number {
  return getEventsToday(events).filter((e) => e.type === "feed").length;
}

/** Get total sleep minutes today */
export function getSleepMinutesToday(events: TrackerEvent[]): number {
  return getEventsToday(events)
    .filter((e) => e.type === "sleep" && e.sleep?.durationMinutes)
    .reduce((sum, e) => sum + (e.sleep?.durationMinutes ?? 0), 0);
}

/** Check if baby is currently sleeping (sleep event with no end time) */
export function isCurrentlySleeping(
  events: TrackerEvent[]
): TrackerEvent | null {
  const sleepEvents = events
    .filter((e) => e.type === "sleep")
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  const latest = sleepEvents[0];
  if (latest && latest.sleep && !latest.sleep.endTime) {
    return latest;
  }
  return null;
}

export interface WakeWindowStatus {
  minutesAwake: number;
  windowMinMinutes: number;
  windowMaxMinutes: number;
  status: "ok" | "approaching" | "overdue";
  label: string;
  naps: string;
}

/** Get wake window status based on baby age and last sleep event */
export function getWakeWindowStatus(
  events: TrackerEvent[],
  ageMonths: number
): WakeWindowStatus | null {
  const ww = getWakeWindow(ageMonths);
  if (!ww) return null;

  // Find last sleep end time
  const sleepEvents = events
    .filter((e) => e.type === "sleep" && e.sleep?.endTime)
    .sort(
      (a, b) =>
        new Date(b.sleep!.endTime!).getTime() -
        new Date(a.sleep!.endTime!).getTime()
    );

  const lastWake = sleepEvents[0]?.sleep?.endTime;
  if (!lastWake) return null;

  const minutesAwake = Math.floor(
    (Date.now() - new Date(lastWake).getTime()) / 60000
  );

  let status: WakeWindowStatus["status"] = "ok";
  if (minutesAwake >= ww.maxMinutes) {
    status = "overdue";
  } else if (minutesAwake >= ww.minMinutes) {
    status = "approaching";
  }

  return {
    minutesAwake,
    windowMinMinutes: ww.minMinutes,
    windowMaxMinutes: ww.maxMinutes,
    status,
    label: ww.label,
    naps: ww.naps,
  };
}

export interface DailySummaryData {
  feedCount: number;
  diaperCount: number;
  sleepMinutes: number;
  wetDiapers: number;
  dirtyDiapers: number;
  lastFeedTime: string | null;
  lastSleepEnd: string | null;
  eventCount: number;
}

/** Get a summary of today's events */
export function getDailySummary(events: TrackerEvent[]): DailySummaryData {
  const todayEvents = getEventsToday(events);

  const diaperEvents = todayEvents.filter((e) => e.type === "diaper");

  return {
    feedCount: todayEvents.filter((e) => e.type === "feed").length,
    diaperCount: diaperEvents.length,
    sleepMinutes: todayEvents
      .filter((e) => e.type === "sleep" && e.sleep?.durationMinutes)
      .reduce((sum, e) => sum + (e.sleep?.durationMinutes ?? 0), 0),
    wetDiapers: diaperEvents.filter(
      (e) => e.diaper?.diaperType === "wet" || e.diaper?.diaperType === "both"
    ).length,
    dirtyDiapers: diaperEvents.filter(
      (e) =>
        e.diaper?.diaperType === "dirty" || e.diaper?.diaperType === "both"
    ).length,
    lastFeedTime: getLastEventOfType(todayEvents, "feed")?.timestamp ?? null,
    lastSleepEnd:
      todayEvents
        .filter((e) => e.type === "sleep" && e.sleep?.endTime)
        .sort(
          (a, b) =>
            new Date(b.sleep!.endTime!).getTime() -
            new Date(a.sleep!.endTime!).getTime()
        )[0]?.sleep?.endTime ?? null,
    eventCount: todayEvents.length,
  };
}

/** Format minutes into human-readable duration */
export function formatDuration(totalMinutes: number): string {
  if (totalMinutes < 1) return "just now";
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.round(totalMinutes % 60);
  if (hours === 0) return `${minutes}m`;
  if (minutes === 0) return `${hours}h`;
  return `${hours}h ${minutes}m`;
}

/** Format a timestamp for display */
export function formatTime(
  timestamp: string,
  format: "12h" | "24h" = "12h"
): string {
  const d = new Date(timestamp);
  if (format === "24h") {
    return d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  }
  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
