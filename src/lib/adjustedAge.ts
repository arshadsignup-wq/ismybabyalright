export interface AdjustedAgeResult {
  chronologicalMonths: number;
  chronologicalWeeks: number;
  adjustedMonths: number;
  adjustedWeeks: number;
  correctionWeeks: number;
  adjustedAgeExpired: boolean;
  displayChronological: string;
  displayAdjusted: string;
}

/**
 * Calculate the number of full weeks between two dates.
 * Returns a positive number if `earlier` is before `later`.
 */
function weeksBetween(earlier: Date, later: Date): number {
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  return Math.floor((later.getTime() - earlier.getTime()) / msPerWeek);
}

/**
 * Calculate the number of full months between two dates using calendar math.
 * Handles varying month lengths correctly.
 */
function monthsBetween(earlier: Date, later: Date): number {
  const yearDiff = later.getFullYear() - earlier.getFullYear();
  const monthDiff = later.getMonth() - earlier.getMonth();
  let total = yearDiff * 12 + monthDiff;

  // If the day-of-month in `later` hasn't reached the day-of-month in `earlier`,
  // the final month is incomplete, so subtract one.
  if (later.getDate() < earlier.getDate()) {
    total -= 1;
  }

  return Math.max(0, total);
}

/**
 * Format a duration in months into a human-readable string.
 *   0 months  -> "0 months"
 *   1 month   -> "1 month"
 *   11 months -> "11 months"
 *   12 months -> "1 year"
 *   18 months -> "1 year, 6 months"
 *   24 months -> "2 years"
 */
function formatMonths(months: number): string {
  if (months < 0) {
    return '0 months';
  }

  const years = Math.floor(months / 12);
  const remainder = months % 12;

  if (years === 0) {
    return remainder === 1 ? '1 month' : `${remainder} months`;
  }

  const yearLabel = years === 1 ? '1 year' : `${years} years`;

  if (remainder === 0) {
    return yearLabel;
  }

  const monthLabel = remainder === 1 ? '1 month' : `${remainder} months`;
  return `${yearLabel}, ${monthLabel}`;
}

/**
 * Calculate the adjusted (corrected) age for a premature baby.
 *
 * Adjusted age = chronological age minus weeks born early.
 * This correction is typically applied until the child reaches
 * 24 months of chronological age, after which developmental
 * expectations align with chronological age.
 *
 * @param birthDate   The actual date the baby was born.
 * @param dueDate     The original estimated due date (40 weeks gestation).
 * @param currentDate Optional reference date; defaults to today.
 * @returns An {@link AdjustedAgeResult} with both ages and display strings.
 *
 * @example
 * // Baby born 8 weeks early on Jan 1 2025, due date Feb 26 2025
 * calculateAdjustedAge(new Date('2025-01-01'), new Date('2025-02-26'));
 */
export function calculateAdjustedAge(
  birthDate: Date,
  dueDate: Date,
  currentDate?: Date,
): AdjustedAgeResult {
  const now = currentDate ?? new Date();

  // --- Chronological age (time since birth) ---
  const chronologicalWeeks = Math.max(0, weeksBetween(birthDate, now));
  const chronologicalMonths = Math.max(0, monthsBetween(birthDate, now));

  // --- Prematurity correction ---
  // correctionWeeks is positive when the baby was born before the due date.
  // If the baby was born on or after the due date, no correction is needed.
  const correctionWeeks = Math.max(0, weeksBetween(birthDate, dueDate));

  // --- Adjusted age ---
  // We compute adjusted age from the due date rather than subtracting weeks
  // from chronological age, which avoids rounding issues across month
  // boundaries.
  const adjustedReferenceDate = dueDate > birthDate ? dueDate : birthDate;
  const adjustedWeeks = Math.max(0, weeksBetween(adjustedReferenceDate, now));
  const adjustedMonths = Math.max(0, monthsBetween(adjustedReferenceDate, now));

  // --- Expiration ---
  // Adjusted age correction is no longer clinically used after 24 months
  // of chronological age.
  const adjustedAgeExpired = chronologicalMonths >= 24;

  return {
    chronologicalMonths,
    chronologicalWeeks,
    adjustedMonths: adjustedAgeExpired ? chronologicalMonths : adjustedMonths,
    adjustedWeeks: adjustedAgeExpired ? chronologicalWeeks : adjustedWeeks,
    correctionWeeks,
    adjustedAgeExpired,
    displayChronological: formatMonths(chronologicalMonths),
    displayAdjusted: adjustedAgeExpired
      ? formatMonths(chronologicalMonths)
      : formatMonths(adjustedMonths),
  };
}
