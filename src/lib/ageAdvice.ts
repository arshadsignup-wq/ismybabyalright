import { allCheckpoints } from '@/data/milestones';
import type { AgeCheckpoint } from '@/data/milestones';
import { allConcerns } from '@/data/concerns';
import type { ConcernPage } from '@/data/concerns/types';
import { getFoodsForAge } from '@/data/food/foods';
import type { FoodGuide } from '@/data/food/types';
import { getGuidanceForAge } from '@/data/sleep/guidance';
import type { SleepGuidanceEntry } from '@/data/sleep/types';
import { cdcVaccineSchedule } from '@/data/vaccines/cdc-schedule';
import type { Vaccine, VaccineDose } from '@/data/vaccines/types';

export interface VaccineDueItem {
  vaccine: Vaccine;
  dose: VaccineDose;
}

export interface AgeAdvice {
  months: number;
  milestones: AgeCheckpoint | null;
  concerns: ConcernPage[];
  foods: FoodGuide[];
  sleep: SleepGuidanceEntry | null;
  vaccines: VaccineDueItem[];
}

/**
 * Parse an ageRange string from a concern's byAge entry and return
 * the range as { minMonths, maxMonths }. Returns null if unparseable.
 *
 * Supported formats:
 *   "0-2 weeks", "2-6 weeks"
 *   "0-3 months", "6-12 months", "3-5 months"
 *   "1-3 years", "2-3 years"
 *   "12-18 months"
 *   "18 months - 2 years"
 *   "18 months"  (single value)
 *   "19+ months"
 */
function parseAgeRange(ageRange: string): { minMonths: number; maxMonths: number } | null {
  const normalized = ageRange.toLowerCase().trim();

  // Pattern: "X+ months" or "X+ years" (open-ended)
  const openEndedMatch = normalized.match(/^(\d+)\+\s*(months?|years?)$/);
  if (openEndedMatch) {
    const value = parseInt(openEndedMatch[1], 10);
    const unit = openEndedMatch[2];
    const minMonths = unit.startsWith('year') ? value * 12 : value;
    return { minMonths, maxMonths: 36 };
  }

  // Pattern: "X months - Y years" (mixed units with dash)
  const mixedMatch = normalized.match(/^(\d+)\s*months?\s*-\s*(\d+)\s*years?$/);
  if (mixedMatch) {
    const minMonths = parseInt(mixedMatch[1], 10);
    const maxMonths = parseInt(mixedMatch[2], 10) * 12;
    return { minMonths, maxMonths };
  }

  // Pattern: "X-Y weeks", "X-Y months", "X-Y years"
  const rangeMatch = normalized.match(/^(\d+)\s*-\s*(\d+)\s*(weeks?|months?|years?)$/);
  if (rangeMatch) {
    const low = parseInt(rangeMatch[1], 10);
    const high = parseInt(rangeMatch[2], 10);
    const unit = rangeMatch[3];

    if (unit.startsWith('week')) {
      return {
        minMonths: Math.floor(low / 4.33),
        maxMonths: Math.ceil(high / 4.33),
      };
    }
    if (unit.startsWith('year')) {
      return { minMonths: low * 12, maxMonths: high * 12 };
    }
    // months
    return { minMonths: low, maxMonths: high };
  }

  // Pattern: single "X months" or "X years"
  const singleMatch = normalized.match(/^(\d+)\s*(months?|years?)$/);
  if (singleMatch) {
    const value = parseInt(singleMatch[1], 10);
    const unit = singleMatch[2];
    const months = unit.startsWith('year') ? value * 12 : value;
    return { minMonths: months, maxMonths: months };
  }

  return null;
}

/**
 * Check if a given age in months falls within any of a concern's byAge ranges.
 */
function concernMatchesAge(concern: ConcernPage, months: number): boolean {
  return concern.byAge.some((entry) => {
    const range = parseAgeRange(entry.ageRange);
    if (!range) return false;
    return months >= range.minMonths && months <= range.maxMonths;
  });
}

/**
 * Find the closest milestone checkpoint at or below the given age.
 * For example, age 3 returns the 2-month checkpoint; age 7 returns 6-month.
 */
function getClosestCheckpoint(months: number): AgeCheckpoint | null {
  const sorted = [...allCheckpoints].sort((a, b) => b.ageInMonths - a.ageInMonths);
  for (const checkpoint of sorted) {
    if (checkpoint.ageInMonths <= months) {
      return checkpoint;
    }
  }
  // If younger than all checkpoints, return the earliest one for newborns
  if (months === 0 && allCheckpoints.length > 0) {
    return allCheckpoints[0];
  }
  return null;
}

/**
 * Find vaccines due at or around the given age (+/- 1 month).
 */
function getVaccinesDue(months: number): VaccineDueItem[] {
  const results: VaccineDueItem[] = [];

  for (const vaccine of cdcVaccineSchedule) {
    for (const dose of vaccine.doses) {
      if (dose.ageMonths >= months - 1 && dose.ageMonths <= months + 1) {
        results.push({ vaccine, dose });
      }
    }
  }

  return results;
}

/**
 * Get age-appropriate food prep info for the given age.
 * Filters each food's preps to only those applicable to this age.
 */
function getFoodPrepsForAge(foods: FoodGuide[], months: number): FoodGuide[] {
  return foods.map((food) => ({
    ...food,
    preps: food.preps.filter(
      (prep) => months >= prep.minMonths && months <= prep.maxMonths
    ),
  })).filter((food) => food.preps.length > 0);
}

/**
 * Aggregate all advice data for a given age in months.
 */
export function getAdviceForAge(months: number): AgeAdvice {
  const milestones = getClosestCheckpoint(months);

  // Filter concerns relevant to this age, limit to 8
  const matchingConcerns = allConcerns
    .filter((concern) => concernMatchesAge(concern, months))
    .slice(0, 8);

  const allFoods = getFoodsForAge(months);
  const foods = getFoodPrepsForAge(allFoods, months);

  const sleep = getGuidanceForAge(months) ?? null;

  const vaccines = getVaccinesDue(months);

  return {
    months,
    milestones,
    concerns: matchingConcerns,
    foods,
    sleep,
    vaccines,
  };
}

/**
 * Format a month count as a human-readable age label.
 */
export function formatAge(months: number): string {
  if (months === 0) return 'Newborn';
  if (months === 1) return '1 Month';
  if (months < 24) return `${months} Months`;
  const years = Math.floor(months / 12);
  const remainder = months % 12;
  if (remainder === 0) {
    return years === 1 ? '1 Year' : `${years} Years`;
  }
  return `${years} Year${years > 1 ? 's' : ''}, ${remainder} Month${remainder > 1 ? 's' : ''}`;
}
