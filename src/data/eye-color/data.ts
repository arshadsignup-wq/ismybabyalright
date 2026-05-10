/**
 * Baby eye color predictor based on simplified genetics model.
 * Sources: Stanford genetics, simplified Punnett square approach.
 * Note: Eye color is polygenic — this is a simplified educational model.
 */

export type EyeColor = "brown" | "green" | "blue";

export interface EyeColorPrediction {
  color: EyeColor;
  probability: number;
  label: string;
}

/**
 * Simplified probability model based on dominant/recessive alleles.
 * Brown > Green > Blue (simplified dominance hierarchy).
 * Real eye color involves 16+ genes, so this is an approximation.
 */
export function predictEyeColor(
  parent1: EyeColor,
  parent2: EyeColor
): EyeColorPrediction[] {
  const key = [parent1, parent2].sort().join("-");

  const predictions: Record<string, EyeColorPrediction[]> = {
    "brown-brown": [
      { color: "brown", probability: 75, label: "Brown" },
      { color: "green", probability: 18.75, label: "Green" },
      { color: "blue", probability: 6.25, label: "Blue" },
    ],
    "brown-green": [
      { color: "brown", probability: 50, label: "Brown" },
      { color: "green", probability: 37.5, label: "Green" },
      { color: "blue", probability: 12.5, label: "Blue" },
    ],
    "brown-blue": [
      { color: "brown", probability: 50, label: "Brown" },
      { color: "green", probability: 0, label: "Green" },
      { color: "blue", probability: 50, label: "Blue" },
    ],
    "green-green": [
      { color: "brown", probability: 0, label: "Brown" },
      { color: "green", probability: 75, label: "Green" },
      { color: "blue", probability: 25, label: "Blue" },
    ],
    "blue-green": [
      { color: "brown", probability: 0, label: "Brown" },
      { color: "green", probability: 50, label: "Green" },
      { color: "blue", probability: 50, label: "Blue" },
    ],
    "blue-blue": [
      { color: "brown", probability: 0, label: "Brown" },
      { color: "green", probability: 1, label: "Green" },
      { color: "blue", probability: 99, label: "Blue" },
    ],
  };

  return (predictions[key] || predictions["brown-brown"]).filter(
    (p) => p.probability > 0
  );
}

export const EYE_COLOR_HEX: Record<EyeColor, string> = {
  brown: "#8B4513",
  green: "#228B22",
  blue: "#4169E1",
};

export const EYE_COLOR_FACTS = [
  "Most babies are born with blue or gray eyes that may change over the first 1-3 years",
  "Eye color is determined by the amount and distribution of melanin in the iris",
  "Brown eyes have the most melanin, blue eyes have the least",
  "Eye color is polygenic — controlled by at least 16 different genes, not just one",
  "This calculator uses a simplified model. Actual results can surprise parents!",
  "Two brown-eyed parents can have a blue-eyed child if both carry recessive blue alleles",
  "Eye color typically stabilizes by age 3, though subtle changes can occur into adulthood",
];
