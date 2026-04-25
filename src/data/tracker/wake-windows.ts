/**
 * Age-based wake window data (AAP / pediatric sleep research)
 * Wake window = max comfortable awake time between sleeps
 * All values in minutes.
 */

export interface WakeWindow {
  minMonths: number;
  maxMonths: number;
  label: string;
  minMinutes: number;
  maxMinutes: number;
  naps: string;
}

export const WAKE_WINDOWS: WakeWindow[] = [
  {
    minMonths: 0,
    maxMonths: 1,
    label: "Newborn",
    minMinutes: 35,
    maxMinutes: 60,
    naps: "4-8 naps",
  },
  {
    minMonths: 1,
    maxMonths: 2,
    label: "1 month",
    minMinutes: 45,
    maxMinutes: 75,
    naps: "4-6 naps",
  },
  {
    minMonths: 2,
    maxMonths: 3,
    label: "2 months",
    minMinutes: 60,
    maxMinutes: 90,
    naps: "4-5 naps",
  },
  {
    minMonths: 3,
    maxMonths: 4,
    label: "3 months",
    minMinutes: 75,
    maxMinutes: 105,
    naps: "3-4 naps",
  },
  {
    minMonths: 4,
    maxMonths: 6,
    label: "4-5 months",
    minMinutes: 90,
    maxMinutes: 150,
    naps: "3-4 naps",
  },
  {
    minMonths: 6,
    maxMonths: 8,
    label: "6-7 months",
    minMinutes: 120,
    maxMinutes: 180,
    naps: "2-3 naps",
  },
  {
    minMonths: 8,
    maxMonths: 10,
    label: "8-9 months",
    minMinutes: 150,
    maxMinutes: 210,
    naps: "2 naps",
  },
  {
    minMonths: 10,
    maxMonths: 12,
    label: "10-11 months",
    minMinutes: 180,
    maxMinutes: 240,
    naps: "2 naps",
  },
  {
    minMonths: 12,
    maxMonths: 18,
    label: "12-17 months",
    minMinutes: 180,
    maxMinutes: 300,
    naps: "1-2 naps",
  },
  {
    minMonths: 18,
    maxMonths: 24,
    label: "18-23 months",
    minMinutes: 300,
    maxMinutes: 360,
    naps: "1 nap",
  },
  {
    minMonths: 24,
    maxMonths: 36,
    label: "2-3 years",
    minMinutes: 300,
    maxMinutes: 420,
    naps: "0-1 nap",
  },
];

export function getWakeWindow(ageMonths: number): WakeWindow | null {
  return (
    WAKE_WINDOWS.find(
      (w) => ageMonths >= w.minMonths && ageMonths < w.maxMonths
    ) ?? WAKE_WINDOWS[WAKE_WINDOWS.length - 1]
  );
}
