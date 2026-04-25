import type { HandoffSnapshot, HandoffEvent, CaregiverCard } from "@/data/sharing/types";
import type { TrackerEvent } from "@/data/tracker/types";
import { formatTime } from "./tracker";

/**
 * Build a handoff snapshot from recent events.
 * Includes events from the last N hours (default 12).
 */
export function buildHandoffSnapshot(
  babyName: string,
  events: TrackerEvent[],
  caregiverCard?: CaregiverCard,
  hoursBack: number = 12
): HandoffSnapshot {
  const cutoff = Date.now() - hoursBack * 60 * 60 * 1000;

  const recentEvents = events
    .filter((e) => new Date(e.timestamp).getTime() >= cutoff)
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

  const handoffEvents: HandoffEvent[] = recentEvents.map((e) => ({
    type: e.type,
    timestamp: e.timestamp,
    summary: summarizeEvent(e),
  }));

  return {
    babyName,
    generatedAt: new Date().toISOString(),
    events: handoffEvents,
    caregiverCard,
  };
}

function summarizeEvent(e: TrackerEvent): string {
  const time = formatTime(e.timestamp, "12h");
  switch (e.type) {
    case "feed": {
      const ft = e.feed?.feedType;
      if (ft === "breast-left") return `${time}  -  Nursed (left)${e.feed?.durationMinutes ? `, ${e.feed.durationMinutes} min` : ""}`;
      if (ft === "breast-right") return `${time}  -  Nursed (right)${e.feed?.durationMinutes ? `, ${e.feed.durationMinutes} min` : ""}`;
      if (ft === "bottle") return `${time}  -  Bottle${e.feed?.amountOz ? `, ${e.feed.amountOz} oz` : ""}`;
      if (ft === "solids") return `${time}  -  Solids`;
      return `${time}  -  Feed`;
    }
    case "sleep":
      if (e.sleep?.endTime) {
        const dur = e.sleep.durationMinutes;
        return `${time}  -  Slept${dur ? ` for ${dur} min` : ""}`;
      }
      return `${time}  -  Fell asleep (still sleeping)`;
    case "diaper": {
      const dt = e.diaper?.diaperType;
      if (dt === "wet") return `${time}  -  Wet diaper`;
      if (dt === "dirty") return `${time}  -  Dirty diaper`;
      return `${time}  -  Wet + dirty diaper`;
    }
    case "medication":
      return `${time}  -  Medication: ${e.medication?.name ?? ""}${e.medication?.dosage ? ` (${e.medication.dosage})` : ""}`;
    case "temperature":
      return `${time}  -  Temp: ${e.temperature?.value}°${e.temperature?.unit}`;
    case "note":
      return `${time}  -  Note: ${e.note ?? ""}`;
    default:
      return `${time}  -  Event`;
  }
}

/**
 * Encode a handoff snapshot into a URL-safe string.
 * Uses JSON → UTF-8 → base64url (no CompressionStream for max compatibility).
 */
export function encodeSnapshot(snapshot: HandoffSnapshot): string {
  const json = JSON.stringify(snapshot);
  // Use btoa with URI encoding for Unicode safety
  const encoded = btoa(unescape(encodeURIComponent(json)));
  // Make URL-safe
  return encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

/**
 * Decode a URL-safe string back into a handoff snapshot.
 */
export function decodeSnapshot(encoded: string): HandoffSnapshot | null {
  try {
    // Restore base64 padding
    let base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    while (base64.length % 4 !== 0) {
      base64 += "=";
    }
    const json = decodeURIComponent(escape(atob(base64)));
    return JSON.parse(json) as HandoffSnapshot;
  } catch {
    return null;
  }
}

/**
 * Build the full shareable URL.
 */
export function buildShareUrl(snapshot: HandoffSnapshot): string {
  const encoded = encodeSnapshot(snapshot);
  const base =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://ismybabyalright.com";
  return `${base}/shared/view?d=${encoded}`;
}
