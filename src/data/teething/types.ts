export interface TeethingTooth {
  name: string;
  position: "upper" | "lower";
  typicalAgeMonths: { min: number; max: number };
  order: number;
}

export interface TeethingSymptom {
  symptom: string;
  description: string;
  normalDuration: string;
  isCommon: boolean;
}

export interface TeethingRemedy {
  name: string;
  description: string;
  safe: boolean;
  ageMinMonths: number;
}

export interface TeethingMyth {
  myth: string;
  truth: string;
}
