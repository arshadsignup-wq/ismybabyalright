/**
 * Car seat safety data — stages, weight/height limits, AAP guidelines.
 * Sources: AAP, NHTSA, Safe Kids Worldwide.
 */

export interface CarSeatStage {
  id: string;
  name: string;
  type: string;
  ageRange: string;
  weightRange: string;
  heightLimit: string;
  direction: string;
  description: string;
  whenToTransition: string;
  safetyTips: string[];
}

export const CAR_SEAT_STAGES: CarSeatStage[] = [
  {
    id: "rear-facing-infant",
    name: "Rear-Facing Infant Seat",
    type: "Infant carrier",
    ageRange: "Birth to 12-15 months",
    weightRange: "4-35 lbs (varies by seat)",
    heightLimit: "30-32 inches (varies by seat)",
    direction: "Rear-facing only",
    description:
      "Infant-only car seats come with a base that stays in the car and a carrier that snaps in and out. Convenient for carrying a sleeping baby.",
    whenToTransition:
      "When baby exceeds the seat's weight OR height limit (whichever comes first), or when the top of their head is within 1 inch of the top of the seat shell.",
    safetyTips: [
      "Install at a 30-45 degree angle for newborns",
      "Harness straps should be AT or BELOW the shoulders",
      "Chest clip should be at armpit level",
      "You should NOT be able to pinch any slack in the harness straps",
      "Never place a rear-facing seat in front of an active airbag",
    ],
  },
  {
    id: "rear-facing-convertible",
    name: "Rear-Facing Convertible Seat",
    type: "Convertible seat (rear-facing mode)",
    ageRange: "Birth to 2-4+ years",
    weightRange: "Up to 40-50 lbs rear-facing (varies by seat)",
    heightLimit: "Varies by seat — usually 40-49 inches",
    direction: "Rear-facing",
    description:
      "The AAP recommends keeping children rear-facing as long as possible, until they reach the maximum weight or height allowed by the seat. Many convertible seats now allow rear-facing up to 40-50 lbs.",
    whenToTransition:
      "When the child exceeds the rear-facing weight OR height limit of the seat. The AAP recommends staying rear-facing as long as the seat allows.",
    safetyTips: [
      "Keep rear-facing as long as possible — it's 5x safer in a crash",
      "Harness straps should be AT or BELOW the shoulders",
      "The seat should not move more than 1 inch side to side at the belt path",
      "It's OK if the child's legs touch the back seat — legs folded is safe",
      "Check the seat's manual for the correct recline angle",
    ],
  },
  {
    id: "forward-facing",
    name: "Forward-Facing with Harness",
    type: "Convertible or combination seat (forward-facing mode)",
    ageRange: "2-5+ years (after outgrowing rear-facing)",
    weightRange: "20-65 lbs (varies by seat)",
    heightLimit: "Up to 49 inches (varies by seat)",
    direction: "Forward-facing with 5-point harness",
    description:
      "Once your child outgrows the rear-facing limits, switch to forward-facing with a 5-point harness. Use the top tether strap — it reduces head movement by 4-6 inches in a crash.",
    whenToTransition:
      "When the child exceeds the harness weight or height limit, OR when their ears reach the top of the seat shell.",
    safetyTips: [
      "ALWAYS use the top tether strap in forward-facing mode",
      "Harness straps should be AT or ABOVE the shoulders",
      "Keep the child in a 5-point harness as long as possible before switching to a booster",
      "Chest clip at armpit level — no slack in straps",
      "The seat should not move more than 1 inch at the belt path",
    ],
  },
  {
    id: "booster",
    name: "Booster Seat",
    type: "High-back or backless booster",
    ageRange: "4-8+ years",
    weightRange: "40-100 lbs (varies by seat)",
    heightLimit: "Up to 57 inches (varies by seat)",
    direction: "Forward-facing, using vehicle seat belt",
    description:
      "Booster seats position the vehicle's seat belt correctly on the child's body. The lap belt should lie across the upper thighs (not the stomach), and the shoulder belt should cross the chest and shoulder (not the neck).",
    whenToTransition:
      "When the child can pass the 5-step seat belt fit test: back against seat, knees bend at edge, lap belt on upper thighs, shoulder belt crosses mid-chest/shoulder, can sit properly for entire trip.",
    safetyTips: [
      "High-back boosters provide head and neck support — better for cars without headrests",
      "Never tuck the shoulder belt behind the child or under their arm",
      "The child must be mature enough to sit properly for the entire ride",
      "Most children need a booster until 8-12 years of age",
      "Children under 13 should always ride in the back seat",
    ],
  },
  {
    id: "seat-belt",
    name: "Seat Belt Only",
    type: "Vehicle seat belt",
    ageRange: "8-12+ years (when belt fits properly)",
    weightRange: "Over 80 lbs and at least 4'9\" tall",
    heightLimit: "At least 4'9\" (57 inches)",
    direction: "Forward-facing",
    description:
      "Children can use the vehicle seat belt alone when they pass the 5-step seat belt fit test. Most children are ready between ages 8-12.",
    whenToTransition: "This is the final stage before adult seat belt use.",
    safetyTips: [
      "Lap belt must lie flat across the upper thighs, NOT across the stomach",
      "Shoulder belt crosses the center of chest and shoulder, NOT the neck",
      "Back should rest flat against the vehicle seat back",
      "Knees should bend at the edge of the seat with feet on the floor",
      "All children under 13 should ride in the back seat",
    ],
  },
];

export interface CarSeatRecommendation {
  stage: CarSeatStage;
  message: string;
  isTransitioning: boolean;
}

export function getCarSeatRecommendation(
  ageMonths: number,
  weightLbs: number,
  heightInches: number
): CarSeatRecommendation {
  // Default: rear-facing infant for newborns
  if (ageMonths < 12 && weightLbs < 30 && heightInches < 30) {
    return {
      stage: CAR_SEAT_STAGES[0],
      message: "Your baby should be in a rear-facing infant seat.",
      isTransitioning: false,
    };
  }

  // Rear-facing convertible: up to age 2-4, under 40 lbs, under 40 inches
  if (weightLbs < 40 && heightInches < 40) {
    const isNearLimit = weightLbs > 35 || heightInches > 37;
    return {
      stage: CAR_SEAT_STAGES[1],
      message: isNearLimit
        ? "Keep rear-facing but your child is approaching the limits. Check your specific seat's limits."
        : "Your child should remain rear-facing as long as possible.",
      isTransitioning: isNearLimit,
    };
  }

  // Forward-facing with harness: typically 2-5 years, 20-65 lbs
  if (weightLbs < 65 && heightInches < 49 && ageMonths < 84) {
    const isNearLimit = weightLbs > 55 || heightInches > 46;
    return {
      stage: CAR_SEAT_STAGES[2],
      message: isNearLimit
        ? "Your child may be ready to transition to a booster seat soon."
        : "Use a forward-facing seat with a 5-point harness. Always use the top tether.",
      isTransitioning: isNearLimit,
    };
  }

  // Booster seat: typically 4-8+ years, 40-100 lbs, under 57 inches
  if (heightInches < 57 || ageMonths < 144) {
    const isNearLimit = heightInches > 54 && weightLbs > 80;
    return {
      stage: CAR_SEAT_STAGES[3],
      message: isNearLimit
        ? "Your child may be ready for the seat belt fit test. Try the 5-step test."
        : "Use a booster seat to ensure the vehicle seat belt fits correctly.",
      isTransitioning: isNearLimit,
    };
  }

  // Seat belt
  return {
    stage: CAR_SEAT_STAGES[4],
    message: "Your child may be ready for a seat belt alone if they pass the 5-step fit test.",
    isTransitioning: false,
  };
}
