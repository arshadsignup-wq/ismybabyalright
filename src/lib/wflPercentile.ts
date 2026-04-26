import { wflBoys, type WFLDataPoint } from '@/data/growth/wfl-boys';
import { wflGirls } from '@/data/growth/wfl-girls';

/**
 * Weight-for-Length percentile calculator using WHO LMS method.
 *
 * The LMS system expresses the distribution of a measurement at each
 * length value through three parameters:
 *   L (lambda) - Box-Cox power for skewness
 *   M (mu)     - median
 *   S (sigma)  - coefficient of variation
 *
 * Source:
 *   WHO Multicentre Growth Reference Study Group (2006).
 *   WHO Child Growth Standards: Length/height-for-age, weight-for-age,
 *   weight-for-length, weight-for-height and body mass index-for-age.
 */

/* -------------------------------------------------------------------------- */
/*  Find closest data point                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Find the data point with the closest length value.
 * Returns null if the length is outside the valid range (45-110 cm).
 */
function findClosest(data: WFLDataPoint[], length: number): WFLDataPoint | null {
  if (data.length === 0) return null;

  const minLength = data[0].length;
  const maxLength = data[data.length - 1].length;

  // Allow a small tolerance outside the range (0.25 cm)
  if (length < minLength - 0.25 || length > maxLength + 0.25) {
    return null;
  }

  // Clamp to valid range
  const clamped = Math.max(minLength, Math.min(maxLength, length));

  let closest = data[0];
  let smallestDiff = Math.abs(clamped - data[0].length);

  for (let i = 1; i < data.length; i++) {
    const diff = Math.abs(clamped - data[i].length);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      closest = data[i];
    }
  }

  return closest;
}

/**
 * Interpolate LMS values between two adjacent data points for a given length.
 * This provides smoother results when the length falls between 0.5 cm intervals.
 */
function interpolateLMS(
  data: WFLDataPoint[],
  length: number,
): WFLDataPoint | null {
  if (data.length === 0) return null;

  const minLength = data[0].length;
  const maxLength = data[data.length - 1].length;

  if (length < minLength - 0.25 || length > maxLength + 0.25) {
    return null;
  }

  const clamped = Math.max(minLength, Math.min(maxLength, length));

  // Find the bracketing points
  for (let i = 0; i < data.length - 1; i++) {
    if (clamped >= data[i].length && clamped <= data[i + 1].length) {
      const span = data[i + 1].length - data[i].length;
      if (span === 0) return data[i];
      const t = (clamped - data[i].length) / span;
      return {
        length: clamped,
        L: data[i].L + (data[i + 1].L - data[i].L) * t,
        M: data[i].M + (data[i + 1].M - data[i].M) * t,
        S: data[i].S + (data[i + 1].S - data[i].S) * t,
      };
    }
  }

  // Exact match on last point
  return findClosest(data, clamped);
}

/* -------------------------------------------------------------------------- */
/*  Z-score calculation                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Calculate Z-score using the LMS method.
 *
 * When L is not close to 0:
 *   Z = ((value / M)^L - 1) / (L * S)
 *
 * When L is close to 0 (|L| < 0.001):
 *   Z = ln(value / M) / S
 */
function calculateZScore(weight: number, dataPoint: WFLDataPoint): number {
  const { L, M, S } = dataPoint;

  if (weight <= 0 || M <= 0 || S <= 0) {
    return 0;
  }

  if (Math.abs(L) < 0.001) {
    // L is approximately 0 - use logarithmic form
    return Math.log(weight / M) / S;
  }

  // Standard LMS formula
  return (Math.pow(weight / M, L) - 1) / (L * S);
}

/* -------------------------------------------------------------------------- */
/*  Z-score to percentile                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Convert a Z-score to a percentile using the standard normal cumulative
 * distribution function (CDF). Uses the Abramowitz and Stegun approximation
 * (equation 26.2.17) which is accurate to about 7.5 x 10^-8.
 */
function zToPercentile(z: number): number {
  // Clamp extreme Z-scores
  const zClamped = Math.max(-4, Math.min(4, z));

  // Constants for the approximation
  const p = 0.2316419;
  const b1 = 0.319381530;
  const b2 = -0.356563782;
  const b3 = 1.781477937;
  const b4 = -1.821255978;
  const b5 = 1.330274429;

  const absZ = Math.abs(zClamped);
  const t = 1 / (1 + p * absZ);

  // Standard normal PDF
  const pdf = Math.exp(-0.5 * absZ * absZ) / Math.sqrt(2 * Math.PI);

  // CDF approximation for positive z
  const cdf =
    1 - pdf * (b1 * t + b2 * t * t + b3 * t * t * t + b4 * t * t * t * t + b5 * t * t * t * t * t);

  // If z was negative, use symmetry: P(Z < -z) = 1 - P(Z < z)
  const percentile = zClamped >= 0 ? cdf : 1 - cdf;

  // Convert to percentage and round to one decimal
  return Math.round(percentile * 1000) / 10;
}

/* -------------------------------------------------------------------------- */
/*  Interpretation                                                             */
/* -------------------------------------------------------------------------- */

export type WFLTier = 'normal' | 'monitor' | 'concern' | 'urgent';

interface WFLResult {
  percentile: number;
  zScore: number;
  interpretation: string;
  tier: WFLTier;
}

function getInterpretation(percentile: number): { interpretation: string; tier: WFLTier } {
  if (percentile < 3) {
    return {
      tier: 'urgent',
      interpretation:
        'Well below expected range. Discuss with your pediatrician soon.',
    };
  }

  if (percentile < 15) {
    return {
      tier: 'concern',
      interpretation:
        'Below average. Worth mentioning at your next visit.',
    };
  }

  if (percentile <= 85) {
    return {
      tier: 'normal',
      interpretation:
        'Within the expected range. Your baby is growing well.',
    };
  }

  if (percentile <= 97) {
    return {
      tier: 'monitor',
      interpretation:
        'Above average. Mention at your next visit if trending upward.',
    };
  }

  return {
    tier: 'concern',
    interpretation:
      'Well above expected range. Discuss with your pediatrician.',
  };
}

/* -------------------------------------------------------------------------- */
/*  Main function                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Calculate the weight-for-length percentile for a child.
 *
 * @param weight - Weight in kilograms
 * @param length - Recumbent length in centimeters (45-110 cm)
 * @param sex    - 'boy' or 'girl'
 * @returns Object with percentile, Z-score, interpretation text, and tier
 */
export function calculateWFLPercentile(
  weight: number,
  length: number,
  sex: 'boy' | 'girl',
): WFLResult {
  const data = sex === 'boy' ? wflBoys : wflGirls;
  const dataPoint = interpolateLMS(data, length);

  if (!dataPoint) {
    return {
      percentile: -1,
      zScore: 0,
      interpretation:
        'Length is outside the valid range (45-110 cm). This calculator covers birth to 2 years.',
      tier: 'normal',
    };
  }

  const zScore = calculateZScore(weight, dataPoint);
  const percentile = zToPercentile(zScore);
  const { interpretation, tier } = getInterpretation(percentile);

  return {
    percentile: Math.max(0.1, Math.min(99.9, percentile)),
    zScore: Math.round(zScore * 100) / 100,
    interpretation,
    tier,
  };
}
