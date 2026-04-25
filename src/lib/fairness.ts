import type { TrackerEvent } from "@/data/tracker/types";
import type { LaborSummary, LaborEntry } from "@/data/fairness/types";

/**
 * Compute labor summaries from tracker events.
 * Groups by caregiver name and counts contributions.
 */
export function computeLaborSummary(
  events: TrackerEvent[],
  daysBack: number = 7
): LaborSummary {
  const cutoff = Date.now() - daysBack * 24 * 60 * 60 * 1000;
  const recentEvents = events.filter(
    (e) => new Date(e.timestamp).getTime() >= cutoff
  );

  const caregiverMap = new Map<string, LaborEntry>();

  for (const event of recentEvents) {
    const name = event.caregiver || "Primary";
    if (!caregiverMap.has(name)) {
      caregiverMap.set(name, {
        caregiver: name,
        feeds: 0,
        diapers: 0,
        sleepSessions: 0,
        totalEvents: 0,
      });
    }
    const entry = caregiverMap.get(name)!;
    entry.totalEvents++;

    switch (event.type) {
      case "feed":
        entry.feeds++;
        break;
      case "diaper":
        entry.diapers++;
        break;
      case "sleep":
        entry.sleepSessions++;
        break;
    }
  }

  return {
    period: `Last ${daysBack} days`,
    entries: Array.from(caregiverMap.values()).sort(
      (a, b) => b.totalEvents - a.totalEvents
    ),
  };
}
