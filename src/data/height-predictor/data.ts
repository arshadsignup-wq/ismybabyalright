/**
 * Height predictor data using the mid-parental height formula.
 * Sources: AAP, Khamis-Roche method references, pediatric endocrinology.
 */

/** Mid-parental height prediction (most commonly used clinical method) */
export function predictHeight(
  motherHeightInches: number,
  fatherHeightInches: number,
  childSex: "male" | "female"
): { predictedInches: number; rangeMin: number; rangeMax: number } {
  // Mid-parental height formula (AAP/clinical standard)
  // Boys: (mother's height + 5 inches + father's height) / 2
  // Girls: (father's height - 5 inches + mother's height) / 2
  const CORRECTION = 5;
  const MARGIN = 2; // +/- 2 inches is typical clinical margin

  let midParental: number;
  if (childSex === "male") {
    midParental = (motherHeightInches + CORRECTION + fatherHeightInches) / 2;
  } else {
    midParental = (fatherHeightInches - CORRECTION + motherHeightInches) / 2;
  }

  return {
    predictedInches: Math.round(midParental * 10) / 10,
    rangeMin: Math.round((midParental - MARGIN) * 10) / 10,
    rangeMax: Math.round((midParental + MARGIN) * 10) / 10,
  };
}

/** Convert feet + inches to total inches */
export function feetInchesToInches(feet: number, inches: number): number {
  return feet * 12 + inches;
}

/** Convert total inches to feet + inches display */
export function inchesToFeetInches(totalInches: number): string {
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return `${feet}'${inches}"`;
}

/** Convert inches to cm */
export function inchesToCm(inches: number): number {
  return Math.round(inches * 2.54 * 10) / 10;
}

/** Convert cm to inches */
export function cmToInches(cm: number): number {
  return Math.round((cm / 2.54) * 10) / 10;
}

/** Average adult heights for reference */
export const AVERAGE_HEIGHTS = {
  male: { inches: 69.1, label: "5'9\"" },
  female: { inches: 63.7, label: "5'3.7\"" },
};
