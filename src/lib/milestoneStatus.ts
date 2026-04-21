export type StatusTier = 'green' | 'yellow' | 'red';

export interface MilestoneStatus {
  tier: StatusTier;
  message: string;
}

export interface MilestoneRange {
  /** Age at which some babies begin achieving this milestone. */
  earlyMonths: number;
  /** Average age for achieving this milestone. */
  averageMonths: number;
  /** Upper end of the normal window -- most babies have achieved it by now. */
  lateNormalMonths: number;
  /** If the milestone is not met by this age, professional evaluation is recommended. */
  concernThresholdMonths: number;
}

/**
 * Determine a green / yellow / red status for a single milestone based
 * on the baby's current age and the milestone's typical age range.
 *
 * Tiers:
 * - **green**: The baby is younger than `lateNormalMonths`. There is plenty
 *   of time for this milestone to emerge naturally.
 * - **yellow**: The baby is between `lateNormalMonths` and
 *   `concernThresholdMonths`. The milestone has not appeared within the
 *   typical window, so it is worth mentioning at the next well-child visit.
 * - **red**: The baby is past `concernThresholdMonths`. The milestone is
 *   significantly delayed and should be discussed with a doctor promptly.
 *
 * @param babyAgeMonths The baby's current age in months (use adjusted age
 *   for preemies when appropriate).
 * @param milestone     An object describing the expected age range for the
 *   milestone.
 * @returns A {@link MilestoneStatus} with the tier and a parent-friendly message.
 *
 * @example
 * getMilestoneStatus(5, {
 *   typicalRange: { earlyMonths: 3, averageMonths: 4, lateNormalMonths: 6, concernThresholdMonths: 9 }
 * });
 * // { tier: 'green', message: 'Plenty of time ...' }
 */
export function getMilestoneStatus(
  babyAgeMonths: number,
  milestone: { typicalRange: MilestoneRange },
): MilestoneStatus {
  const { lateNormalMonths, concernThresholdMonths } = milestone.typicalRange;

  if (babyAgeMonths < lateNormalMonths) {
    return {
      tier: 'green',
      message:
        'Plenty of time. Most babies reach this milestone within the expected window.',
    };
  }

  if (babyAgeMonths < concernThresholdMonths) {
    return {
      tier: 'yellow',
      message:
        'Worth mentioning at your next visit. Your baby is still within a reasonable window, but it is good to keep an eye on this.',
    };
  }

  return {
    tier: 'red',
    message:
      'Talk to your doctor about this. The expected window for this milestone has passed, and a professional evaluation can help determine next steps.',
  };
}
