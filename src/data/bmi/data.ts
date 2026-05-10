/**
 * Pediatric BMI calculator data — percentile interpretation.
 * Sources: CDC growth charts, AAP guidelines.
 */

export interface BMIResult {
  bmi: number;
  percentile: number;
  category: string;
  categoryColor: string;
  description: string;
}

/** Calculate BMI from weight (lbs) and height (inches) */
export function calculateBMI(weightLbs: number, heightInches: number): number {
  return (weightLbs / (heightInches * heightInches)) * 703;
}

/** Get BMI category from percentile */
export function getBMICategory(percentile: number): {
  category: string;
  categoryColor: string;
  description: string;
} {
  if (percentile < 5) {
    return {
      category: "Underweight",
      categoryColor: "#3b82f6",
      description:
        "Below the 5th percentile. Talk to your pediatrician about nutrition and growth patterns.",
    };
  }
  if (percentile < 85) {
    return {
      category: "Healthy Weight",
      categoryColor: "#22c55e",
      description:
        "Between the 5th and 85th percentile. Your child is at a healthy weight for their age and sex.",
    };
  }
  if (percentile < 95) {
    return {
      category: "Overweight",
      categoryColor: "#f59e0b",
      description:
        "Between the 85th and 95th percentile. Discuss healthy eating and activity habits with your pediatrician.",
    };
  }
  return {
    category: "Obese",
    categoryColor: "#ef4444",
    description:
      "At or above the 95th percentile. Your pediatrician can help develop a plan for healthier habits.",
  };
}

/**
 * Approximate BMI percentile from BMI, age, and sex.
 * This uses simplified reference ranges based on CDC data.
 * For clinical use, the full CDC LMS data tables should be used.
 */
export function approximatePercentile(
  bmi: number,
  ageYears: number,
  sex: "male" | "female"
): number {
  // Simplified median BMI by age (approximate CDC 50th percentile)
  const medians: Record<string, number[]> = {
    // ages 2-18, index = age - 2
    male: [16.4, 15.8, 15.5, 15.3, 15.3, 15.5, 15.8, 16.2, 16.6, 17.2, 17.8, 18.5, 19.2, 20.0, 20.7, 21.4, 22.0],
    female: [16.0, 15.5, 15.2, 15.1, 15.2, 15.4, 15.8, 16.3, 16.9, 17.5, 18.2, 18.9, 19.5, 20.1, 20.7, 21.2, 21.6],
  };

  const idx = Math.max(0, Math.min(16, Math.round(ageYears) - 2));
  const median = medians[sex]?.[idx] ?? 17;

  // Approximate using a simplified z-score approach
  const sd = 2.5; // approximate SD for pediatric BMI
  const zScore = (bmi - median) / sd;

  // Convert z-score to percentile using simplified normal CDF
  const percentile = normalCDF(zScore) * 100;
  return Math.max(0.1, Math.min(99.9, Math.round(percentile * 10) / 10));
}

function normalCDF(z: number): number {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const sign = z < 0 ? -1 : 1;
  z = Math.abs(z) / Math.sqrt(2);

  const t = 1.0 / (1.0 + p * z);
  const y = 1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-z * z);

  return 0.5 * (1.0 + sign * y);
}
