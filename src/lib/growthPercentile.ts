import type { GrowthDataPoint } from '@/data/growth/types';

/**
 * Standard percentile keys available in the WHO growth data.
 * Ordered from lowest to highest.
 */
const PERCENTILE_KEYS = ['p3', 'p15', 'p50', 'p85', 'p97'] as const;
const PERCENTILE_VALUES = [3, 15, 50, 85, 97] as const;

type PercentileKey = (typeof PERCENTILE_KEYS)[number];

/**
 * Linearly interpolate between two numbers.
 */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Interpolate a single percentile value at `ageMonths` between two
 * bracketing data points.
 */
function interpolatePercentileValue(
  lower: GrowthDataPoint,
  upper: GrowthDataPoint,
  ageMonths: number,
  key: PercentileKey,
): number {
  if (lower.ageMonths === upper.ageMonths) {
    return lower[key];
  }
  const t = (ageMonths - lower.ageMonths) / (upper.ageMonths - lower.ageMonths);
  return lerp(lower[key], upper[key], t);
}

/**
 * Find the two data points that bracket the given age.
 * If the age is exactly on a data point, both entries in the tuple will
 * be the same object. If the age is outside the data range, the nearest
 * endpoint is clamped.
 */
function findBracketingPoints(
  ageMonths: number,
  data: GrowthDataPoint[],
): [GrowthDataPoint, GrowthDataPoint] {
  if (data.length === 0) {
    throw new Error('Growth data array must not be empty');
  }

  // Sort defensively by age in case data is not pre-sorted.
  const sorted = [...data].sort((a, b) => a.ageMonths - b.ageMonths);

  // Below the lowest data point
  if (ageMonths <= sorted[0].ageMonths) {
    return [sorted[0], sorted[0]];
  }

  // Above the highest data point
  if (ageMonths >= sorted[sorted.length - 1].ageMonths) {
    return [sorted[sorted.length - 1], sorted[sorted.length - 1]];
  }

  // Find bracketing pair
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i].ageMonths <= ageMonths && sorted[i + 1].ageMonths >= ageMonths) {
      return [sorted[i], sorted[i + 1]];
    }
  }

  // Fallback (should not be reachable)
  return [sorted[0], sorted[sorted.length - 1]];
}

/**
 * Calculate the estimated percentile (0-100) for a measurement value at a
 * given age, using WHO growth chart data.
 *
 * The function interpolates the standard percentile curves (3rd, 15th, 50th,
 * 85th, 97th) at the exact age, then determines where the value falls among
 * those curves via linear interpolation.
 *
 * @param value     The measurement (weight in kg, length in cm, etc.)
 * @param ageMonths The child's age in months (can be fractional).
 * @param data      Array of WHO growth data points (must contain at least one entry).
 * @returns Estimated percentile between 0 and 100.
 *
 * @example
 * const percentile = calculatePercentile(7.5, 6, weightData);
 */
export function calculatePercentile(
  value: number,
  ageMonths: number,
  data: GrowthDataPoint[],
): number {
  const [lower, upper] = findBracketingPoints(ageMonths, data);

  // Build the interpolated percentile values at this exact age.
  const interpolated: number[] = PERCENTILE_KEYS.map((key) =>
    interpolatePercentileValue(lower, upper, ageMonths, key),
  );

  // --- Determine where `value` falls among the interpolated curves ---

  // Below the 3rd percentile
  if (value <= interpolated[0]) {
    // Extrapolate below: assume linear relationship between 0 and p3.
    // Clamp to a minimum of 0.
    if (interpolated[0] <= 0) return 0;
    const ratio = value / interpolated[0];
    return Math.max(0, Math.round(PERCENTILE_VALUES[0] * Math.max(0, ratio)));
  }

  // Above the 97th percentile
  if (value >= interpolated[interpolated.length - 1]) {
    // Extrapolate above: mirror the below-p3 logic.
    // The distance above p97 relative to the p85-p97 span determines
    // how far above 97 the percentile is, capped at 100.
    const span = interpolated[interpolated.length - 1] - interpolated[interpolated.length - 2];
    if (span <= 0) return 100;
    const excess = value - interpolated[interpolated.length - 1];
    const extraPercentile = (excess / span) * (PERCENTILE_VALUES[PERCENTILE_VALUES.length - 1] - PERCENTILE_VALUES[PERCENTILE_VALUES.length - 2]);
    return Math.min(100, Math.round(PERCENTILE_VALUES[PERCENTILE_VALUES.length - 1] + extraPercentile));
  }

  // Between two known percentile curves: interpolate linearly.
  for (let i = 0; i < interpolated.length - 1; i++) {
    if (value >= interpolated[i] && value <= interpolated[i + 1]) {
      const span = interpolated[i + 1] - interpolated[i];
      if (span === 0) return PERCENTILE_VALUES[i];
      const t = (value - interpolated[i]) / span;
      return Math.round(lerp(PERCENTILE_VALUES[i], PERCENTILE_VALUES[i + 1], t));
    }
  }

  // Fallback (should not be reachable)
  return 50;
}

/**
 * Return a human-readable label for a numeric percentile.
 *
 * @example
 * getPercentileLabel(50)  // "50th percentile"
 * getPercentileLabel(23)  // "between 15th and 50th percentile"
 */
export function getPercentileLabel(percentile: number): string {
  const clamped = Math.max(0, Math.min(100, Math.round(percentile)));

  // Check if the value is close to one of the standard percentile lines
  for (const p of PERCENTILE_VALUES) {
    if (Math.abs(clamped - p) <= 2) {
      return `${ordinal(p)} percentile`;
    }
  }

  // Otherwise describe it as "between Xth and Yth percentile"
  for (let i = 0; i < PERCENTILE_VALUES.length - 1; i++) {
    if (clamped > PERCENTILE_VALUES[i] && clamped < PERCENTILE_VALUES[i + 1]) {
      return `between ${ordinal(PERCENTILE_VALUES[i])} and ${ordinal(PERCENTILE_VALUES[i + 1])} percentile`;
    }
  }

  if (clamped < PERCENTILE_VALUES[0]) {
    return `below ${ordinal(PERCENTILE_VALUES[0])} percentile`;
  }

  if (clamped > PERCENTILE_VALUES[PERCENTILE_VALUES.length - 1]) {
    return `above ${ordinal(PERCENTILE_VALUES[PERCENTILE_VALUES.length - 1])} percentile`;
  }

  return `${ordinal(clamped)} percentile`;
}

/**
 * Return contextual guidance based on where a percentile falls.
 *
 * - **green** (3rd-97th): typical range, no concerns.
 * - **yellow** (near 3rd or 97th, specifically 1st-3rd or 97th-99th): at the
 *   edge of typical, worth monitoring.
 * - **red** (below 1st or above 99th): outside typical range, discuss with
 *   pediatrician.
 */
export function getPercentileContext(
  percentile: number,
): { tier: 'green' | 'yellow' | 'red'; message: string } {
  const clamped = Math.max(0, Math.min(100, Math.round(percentile)));

  if (clamped < 1 || clamped > 99) {
    return {
      tier: 'red',
      message:
        'This falls outside the typical range. Discuss with your pediatrician.',
    };
  }

  if (clamped <= 3) {
    return {
      tier: 'yellow',
      message:
        'This is at the lower end of the typical range. Worth monitoring.',
    };
  }

  if (clamped >= 97) {
    return {
      tier: 'yellow',
      message:
        'This is at the upper end of the typical range. Worth monitoring.',
    };
  }

  return {
    tier: 'green',
    message: "Your baby's measurement falls within the typical range.",
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Convert a number to its ordinal string (1st, 2nd, 3rd, 4th, ...).
 */
function ordinal(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
