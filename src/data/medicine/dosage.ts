/* -------------------------------------------------------------------------- */
/*  Weight-based dosing data for infant/child acetaminophen & ibuprofen       */
/*  Sources: AAP via HealthyChildren.org, MedlinePlus                         */
/* -------------------------------------------------------------------------- */

export interface DoseRange {
  /** Weight range low bound in lbs */
  weightMinLbs: number;
  /** Weight range high bound in lbs (null = no upper bound) */
  weightMaxLbs: number | null;
  /** Single dose in mg */
  doseMg: number;
  /** Volume to give in mL (based on concentration) */
  volumeMl: number;
}

export interface Medication {
  name: string;
  brandNames: string[];
  /** Concentration description, e.g. "160 mg / 5 mL" */
  concentration: string;
  /** mg per mL for calculations */
  mgPerMl: number;
  /** Minimum dosing interval description */
  interval: string;
  /** Maximum doses in 24 hours */
  maxDosesPerDay: number;
  /** Minimum age in months */
  minAgeMonths: number;
  /** Dosing table */
  doses: DoseRange[];
  /** Safety warnings */
  warnings: string[];
}

export const acetaminophen: Medication = {
  name: "Acetaminophen",
  brandNames: ["Tylenol", "FeverAll"],
  concentration: "160 mg / 5 mL",
  mgPerMl: 32,
  interval: "Every 4-6 hours",
  maxDosesPerDay: 5,
  minAgeMonths: 3,
  doses: [
    { weightMinLbs: 6, weightMaxLbs: 11, doseMg: 40, volumeMl: 1.25 },
    { weightMinLbs: 12, weightMaxLbs: 17, doseMg: 80, volumeMl: 2.5 },
    { weightMinLbs: 18, weightMaxLbs: 23, doseMg: 120, volumeMl: 3.75 },
    { weightMinLbs: 24, weightMaxLbs: 35, doseMg: 160, volumeMl: 5 },
    { weightMinLbs: 36, weightMaxLbs: 47, doseMg: 240, volumeMl: 7.5 },
    { weightMinLbs: 48, weightMaxLbs: 59, doseMg: 320, volumeMl: 10 },
    { weightMinLbs: 60, weightMaxLbs: 71, doseMg: 400, volumeMl: 12.5 },
    { weightMinLbs: 72, weightMaxLbs: 95, doseMg: 480, volumeMl: 15 },
    { weightMinLbs: 96, weightMaxLbs: null, doseMg: 640, volumeMl: 20 },
  ],
  warnings: [
    "Do not give to infants under 3 months without a doctor's guidance.",
    "Do not exceed 5 doses in 24 hours.",
    "Check all other medications for acetaminophen to avoid double-dosing.",
    "Use the syringe or dosing cup that comes with the product, not a kitchen spoon.",
  ],
};

export const ibuprofen: Medication = {
  name: "Ibuprofen",
  brandNames: ["Motrin", "Advil"],
  concentration: "100 mg / 5 mL",
  mgPerMl: 20,
  interval: "Every 6-8 hours",
  maxDosesPerDay: 4,
  minAgeMonths: 6,
  doses: [
    { weightMinLbs: 12, weightMaxLbs: 17, doseMg: 50, volumeMl: 2.5 },
    { weightMinLbs: 18, weightMaxLbs: 23, doseMg: 75, volumeMl: 3.75 },
    { weightMinLbs: 24, weightMaxLbs: 35, doseMg: 100, volumeMl: 5 },
    { weightMinLbs: 36, weightMaxLbs: 47, doseMg: 150, volumeMl: 7.5 },
    { weightMinLbs: 48, weightMaxLbs: 59, doseMg: 200, volumeMl: 10 },
    { weightMinLbs: 60, weightMaxLbs: 71, doseMg: 250, volumeMl: 12.5 },
    { weightMinLbs: 72, weightMaxLbs: 95, doseMg: 300, volumeMl: 15 },
    { weightMinLbs: 96, weightMaxLbs: null, doseMg: 400, volumeMl: 20 },
  ],
  warnings: [
    "Do not give to infants under 6 months of age.",
    "Do not exceed 4 doses in 24 hours.",
    "Give with food to reduce stomach upset.",
    "Do not give if child is dehydrated or vomiting repeatedly.",
    "Never give aspirin to children or teenagers.",
  ],
};
