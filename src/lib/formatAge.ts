/**
 * Format an age given in months into a full human-readable string.
 *
 * @example
 * formatAge(0)   // "0 months"
 * formatAge(1)   // "1 month"
 * formatAge(2)   // "2 months"
 * formatAge(12)  // "1 year"
 * formatAge(18)  // "1 year, 6 months"
 * formatAge(24)  // "2 years"
 * formatAge(25)  // "2 years, 1 month"
 */
export function formatAge(months: number): string {
  const m = Math.max(0, Math.floor(months));
  const years = Math.floor(m / 12);
  const remainder = m % 12;

  if (years === 0) {
    return remainder === 1 ? '1 month' : `${remainder} months`;
  }

  const yearPart = years === 1 ? '1 year' : `${years} years`;

  if (remainder === 0) {
    return yearPart;
  }

  const monthPart = remainder === 1 ? '1 month' : `${remainder} months`;
  return `${yearPart}, ${monthPart}`;
}

/**
 * Format an age in months into a compact string suitable for badges,
 * table headers, and other space-constrained UI.
 *
 * @example
 * formatAgeShort(0)   // "0mo"
 * formatAgeShort(2)   // "2mo"
 * formatAgeShort(12)  // "1yr"
 * formatAgeShort(18)  // "18mo"
 * formatAgeShort(24)  // "2yr"
 * formatAgeShort(30)  // "2yr 6mo"
 */
export function formatAgeShort(months: number): string {
  const m = Math.max(0, Math.floor(months));
  const years = Math.floor(m / 12);
  const remainder = m % 12;

  // Under 24 months: always express in months for clarity
  if (m < 24) {
    return `${m}mo`;
  }

  // 24 months and above
  if (remainder === 0) {
    return `${years}yr`;
  }

  return `${years}yr ${remainder}mo`;
}

/**
 * Calculate a child's age in whole months from their birth date.
 *
 * Uses calendar math so that e.g. Jan 15 -> Mar 15 = exactly 2 months
 * regardless of how many days are in February.
 *
 * @param birthDate   The child's date of birth.
 * @param currentDate Optional reference date; defaults to today.
 * @returns Age in whole (floored) months. Always >= 0.
 *
 * @example
 * getAgeInMonths(new Date('2024-06-15'), new Date('2025-01-20')); // 7
 */
export function getAgeInMonths(birthDate: Date, currentDate?: Date): number {
  const now = currentDate ?? new Date();

  const yearDiff = now.getFullYear() - birthDate.getFullYear();
  const monthDiff = now.getMonth() - birthDate.getMonth();
  let total = yearDiff * 12 + monthDiff;

  // If the current day-of-month hasn't reached the birth day-of-month,
  // the last month is incomplete.
  if (now.getDate() < birthDate.getDate()) {
    total -= 1;
  }

  return Math.max(0, total);
}

/**
 * Convert a URL-style age slug into a human-readable label.
 *
 * @example
 * slugToLabel("6-months")   // "6 Months"
 * slugToLabel("12-months")  // "12 Months"
 * slugToLabel("2-years")    // "2 Years"
 * slugToLabel("newborn")    // "Newborn"
 */
export function slugToLabel(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
