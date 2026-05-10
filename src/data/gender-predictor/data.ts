/**
 * Chinese Gender Predictor chart data.
 * Based on the traditional Chinese lunar calendar gender prediction chart.
 * This is for entertainment purposes only and has no scientific basis.
 */

export type GenderPrediction = "boy" | "girl";

/**
 * Chinese Gender Chart — lunar age (rows 18-45) × conception month (cols 1-12).
 * "B" = Boy, "G" = Girl
 * Source: Traditional Chinese gender chart (entertainment only).
 */
const CHART: Record<number, string> = {
  18: "GBGBBBBGBBGB",
  19: "BGBBGGGBGGGB",
  20: "GBGBBBBBBGBB",
  21: "BGGGGGGGGGGB",
  22: "GBBBGBGBGBGG",
  23: "BGBBGGBBGBBG",
  24: "BGBBGBBBBGGG",
  25: "GBGBGGBGBBBB",
  26: "BGBGBGBBGBGG",
  27: "GBGBGGBGBBGG",
  28: "BGBGGBBGBGBB",
  29: "GBGBBGBBGGGB",
  30: "BGBBGGBGBBGB",
  31: "BGBGGGGGGGGB",
  32: "BGGGBGBGBBGB",
  33: "GBGBGBBGBBGG",
  34: "BGBGBBBBGBGG",
  35: "BGBBGBGGBGBB",
  36: "GBGBBGBGBBGG",
  37: "GBGBGBGBBGBB",
  38: "BGBGBGBBGGBB",
  39: "BGBGBBGGBGBG",
  40: "GBGBGBGGBGBG",
  41: "BGBGBBGBBGBB",
  42: "GBGBBGBBGBBG",
  43: "BGBBBGGBBGBG",
  44: "BGGGBGBBGBBB",
  45: "GBGBGBBGBGBB",
};

/** Look up prediction from the chart */
export function predictGender(
  lunarAge: number,
  conceptionMonth: number
): GenderPrediction | null {
  const row = CHART[lunarAge];
  if (!row || conceptionMonth < 1 || conceptionMonth > 12) return null;
  return row[conceptionMonth - 1] === "B" ? "boy" : "girl";
}

/**
 * Approximate lunar age from solar birthday.
 * In the Chinese system, you are 1 at birth and add a year at Chinese New Year.
 * This is a simplified approximation.
 */
export function calculateLunarAge(birthDate: Date, conceptionDate: Date): number {
  const solarAge =
    conceptionDate.getFullYear() -
    birthDate.getFullYear() -
    (conceptionDate.getMonth() < birthDate.getMonth() ||
    (conceptionDate.getMonth() === birthDate.getMonth() &&
      conceptionDate.getDate() < birthDate.getDate())
      ? 1
      : 0);
  // Add 1 for Chinese age counting (9 months in womb + rounding)
  return solarAge + 1;
}

export const DISCLAIMER =
  "The Chinese Gender Prediction Chart is a fun, traditional tool with no scientific backing. It is based on ancient Chinese folklore and should be used for entertainment only. The actual probability of having a boy or girl is approximately 50/50.";

export const FUN_FACTS = [
  "The chart is said to be over 700 years old, allegedly discovered in a royal tomb in Beijing",
  "Some claim it's 85-93% accurate, but scientific studies show it's no better than chance (~50%)",
  "The chart uses lunar age (typically 1-2 years older than Western age) and lunar month of conception",
  "Modern sex determination occurs through ultrasound (typically at 18-20 weeks) or NIPT blood test (as early as 10 weeks)",
  "In reality, the baby's sex is determined at conception by whether the sperm carries an X or Y chromosome",
];
