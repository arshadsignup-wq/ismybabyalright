/**
 * Contraction timer data and guidelines.
 * Sources: ACOG, APA, Mayo Clinic.
 */

export interface Contraction {
  id: string;
  startTime: number; // timestamp ms
  endTime: number | null; // timestamp ms
}

export interface ContractionStats {
  count: number;
  avgDurationSec: number;
  avgIntervalSec: number;
  lastDurationSec: number | null;
  lastIntervalSec: number | null;
}

/** Calculate stats from a list of contractions */
export function calculateStats(contractions: Contraction[]): ContractionStats {
  const completed = contractions.filter((c) => c.endTime !== null);

  if (completed.length === 0) {
    return { count: 0, avgDurationSec: 0, avgIntervalSec: 0, lastDurationSec: null, lastIntervalSec: null };
  }

  // Durations
  const durations = completed.map((c) => (c.endTime! - c.startTime) / 1000);
  const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;

  // Intervals (time between starts)
  const sorted = [...completed].sort((a, b) => a.startTime - b.startTime);
  const intervals: number[] = [];
  for (let i = 1; i < sorted.length; i++) {
    intervals.push((sorted[i].startTime - sorted[i - 1].startTime) / 1000);
  }
  const avgInterval = intervals.length > 0
    ? intervals.reduce((a, b) => a + b, 0) / intervals.length
    : 0;

  return {
    count: completed.length,
    avgDurationSec: Math.round(avgDuration),
    avgIntervalSec: Math.round(avgInterval),
    lastDurationSec: durations.length > 0 ? Math.round(durations[durations.length - 1]) : null,
    lastIntervalSec: intervals.length > 0 ? Math.round(intervals[intervals.length - 1]) : null,
  };
}

/** Format seconds to mm:ss */
export function formatSeconds(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export interface LaborPhase {
  name: string;
  contractionDuration: string;
  contractionInterval: string;
  description: string;
  action: string;
}

export const LABOR_PHASES: LaborPhase[] = [
  {
    name: "Early Labor",
    contractionDuration: "30-45 seconds",
    contractionInterval: "5-20 minutes apart",
    description: "Cervix dilates to about 6 cm. Contractions are mild to moderate and may be irregular.",
    action: "Stay home, rest, hydrate, eat light meals. Time contractions but try to relax.",
  },
  {
    name: "Active Labor",
    contractionDuration: "45-60 seconds",
    contractionInterval: "3-5 minutes apart",
    description: "Cervix dilates from 6 to 10 cm. Contractions become stronger, longer, and more regular.",
    action: "Head to the hospital or birth center. Use breathing techniques and comfort measures.",
  },
  {
    name: "Transition",
    contractionDuration: "60-90 seconds",
    contractionInterval: "2-3 minutes apart",
    description: "Final phase of active labor. Cervix dilates from 8 to 10 cm. Most intense contractions.",
    action: "You should already be at the hospital. Focus on breathing. Pushing stage is near.",
  },
];

export const WHEN_TO_GO_TO_HOSPITAL = [
  "Contractions are 5 minutes apart, lasting 1 minute each, for at least 1 hour (5-1-1 rule)",
  "Your water breaks (note the time, color, and odor)",
  "You have heavy vaginal bleeding (more than spotting)",
  "You feel decreased fetal movement",
  "You have a severe, constant headache or vision changes",
  "Your contractions are so strong you cannot walk or talk through them",
];
