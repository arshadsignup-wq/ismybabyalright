/**
 * Ovulation and fertility window calculator data.
 * Sources: ACOG, Mayo Clinic, NHS.
 */

export interface FertilityWindow {
  fertileStart: Date;
  fertileEnd: Date;
  ovulationDate: Date;
  nextPeriod: Date;
}

/** Calculate ovulation and fertility window from last period and cycle length */
export function calculateFertilityWindow(
  lastPeriodStart: Date,
  cycleLength: number
): FertilityWindow {
  // Ovulation typically occurs 14 days before the next period
  const ovulationDay = cycleLength - 14;

  const ovulationDate = new Date(lastPeriodStart);
  ovulationDate.setDate(ovulationDate.getDate() + ovulationDay);

  // Fertile window: 5 days before ovulation + ovulation day
  const fertileStart = new Date(ovulationDate);
  fertileStart.setDate(fertileStart.getDate() - 5);

  const fertileEnd = new Date(ovulationDate);
  fertileEnd.setDate(fertileEnd.getDate() + 1);

  const nextPeriod = new Date(lastPeriodStart);
  nextPeriod.setDate(nextPeriod.getDate() + cycleLength);

  return { fertileStart, fertileEnd, ovulationDate, nextPeriod };
}

/** Get multiple future cycles */
export function getFutureCycles(
  lastPeriodStart: Date,
  cycleLength: number,
  count: number
): FertilityWindow[] {
  const cycles: FertilityWindow[] = [];
  let currentStart = new Date(lastPeriodStart);

  for (let i = 0; i < count; i++) {
    cycles.push(calculateFertilityWindow(currentStart, cycleLength));
    currentStart = new Date(currentStart);
    currentStart.setDate(currentStart.getDate() + cycleLength);
  }

  return cycles;
}

/** Format date short */
export function formatDateShort(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export const OVULATION_SIGNS = [
  "Rise in basal body temperature (0.5-1°F after ovulation)",
  "Change in cervical mucus (clear, stretchy, egg-white consistency)",
  "Mild cramping or twinge on one side (mittelschmerz)",
  "Breast tenderness",
  "Increased sex drive",
  "Positive ovulation predictor kit (OPK) test",
  "Light spotting",
  "Heightened sense of smell",
];

export const FERTILITY_TIPS = [
  "Have intercourse every 1-2 days during the fertile window for best chances",
  "The most fertile days are the 2-3 days before ovulation and ovulation day itself",
  "Sperm can survive up to 5 days in the reproductive tract, but the egg only survives 12-24 hours",
  "Tracking basal body temperature can confirm ovulation but can't predict it in advance",
  "Ovulation predictor kits (OPKs) detect the LH surge 24-36 hours before ovulation",
  "Stress, illness, and travel can shift ovulation timing even with regular cycles",
];
