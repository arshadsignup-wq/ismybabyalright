import type { Vaccine } from "./types";

export const cdcVaccineSchedule: Vaccine[] = [
  {
    id: "hepb",
    name: "Hepatitis B",
    abbreviation: "HepB",
    description: "Protects against hepatitis B virus, which can cause liver disease.",
    doses: [
      { doseNumber: 1, ageLabel: "Birth", ageMonths: 0 },
      { doseNumber: 2, ageLabel: "1 month", ageMonths: 1 },
      { doseNumber: 3, ageLabel: "6 months", ageMonths: 6 },
    ],
    commonSideEffects: [
      "Soreness at injection site",
      "Low-grade fever",
      "Fussiness for 1-2 days",
    ],
    whenToWorry: [
      "Fever over 104°F (40°C)",
      "Severe allergic reaction (hives, swelling, difficulty breathing)  -  extremely rare",
    ],
  },
  {
    id: "rv",
    name: "Rotavirus",
    abbreviation: "RV",
    description: "Protects against rotavirus, a common cause of severe diarrhea in babies.",
    doses: [
      { doseNumber: 1, ageLabel: "2 months", ageMonths: 2 },
      { doseNumber: 2, ageLabel: "4 months", ageMonths: 4 },
      { doseNumber: 3, ageLabel: "6 months", ageMonths: 6, notes: "3rd dose only needed for RotaTeq brand" },
    ],
    commonSideEffects: [
      "Mild diarrhea or vomiting",
      "Fussiness",
      "This is an oral vaccine (drops, not a shot)",
    ],
    whenToWorry: [
      "Severe vomiting or bloody diarrhea",
      "Signs of intussusception: severe belly pain, drawing knees up, bloody stool (very rare)",
    ],
  },
  {
    id: "dtap",
    name: "Diphtheria, Tetanus, Pertussis",
    abbreviation: "DTaP",
    description: "Protects against three serious diseases: diphtheria, tetanus, and whooping cough.",
    doses: [
      { doseNumber: 1, ageLabel: "2 months", ageMonths: 2 },
      { doseNumber: 2, ageLabel: "4 months", ageMonths: 4 },
      { doseNumber: 3, ageLabel: "6 months", ageMonths: 6 },
      { doseNumber: 4, ageLabel: "15-18 months", ageMonths: 15 },
      { doseNumber: 5, ageLabel: "4-6 years", ageMonths: 48 },
    ],
    commonSideEffects: [
      "Soreness, redness, or swelling at injection site",
      "Fever",
      "Fussiness, tiredness",
      "Loss of appetite",
    ],
    whenToWorry: [
      "Fever over 105°F (40.5°C)",
      "Crying for 3+ hours non-stop",
      "Seizure (very rare)",
    ],
  },
  {
    id: "hib",
    name: "Haemophilus influenzae type b",
    abbreviation: "Hib",
    description: "Protects against Hib disease, which can cause meningitis and other severe infections.",
    doses: [
      { doseNumber: 1, ageLabel: "2 months", ageMonths: 2 },
      { doseNumber: 2, ageLabel: "4 months", ageMonths: 4 },
      { doseNumber: 3, ageLabel: "6 months", ageMonths: 6, notes: "Depending on brand" },
      { doseNumber: 4, ageLabel: "12-15 months", ageMonths: 12 },
    ],
    commonSideEffects: [
      "Redness, warmth, or swelling at injection site",
      "Fever",
    ],
    whenToWorry: [
      "Very high fever",
      "Signs of allergic reaction",
    ],
  },
  {
    id: "pcv",
    name: "Pneumococcal",
    abbreviation: "PCV15",
    description: "Protects against pneumococcal disease, which can cause ear infections, pneumonia, and meningitis.",
    doses: [
      { doseNumber: 1, ageLabel: "2 months", ageMonths: 2 },
      { doseNumber: 2, ageLabel: "4 months", ageMonths: 4 },
      { doseNumber: 3, ageLabel: "6 months", ageMonths: 6 },
      { doseNumber: 4, ageLabel: "12-15 months", ageMonths: 12 },
    ],
    commonSideEffects: [
      "Soreness at injection site",
      "Mild fever",
      "Fussiness, drowsiness",
    ],
    whenToWorry: [
      "Fever over 104°F",
      "Signs of severe allergic reaction",
    ],
  },
  {
    id: "ipv",
    name: "Polio",
    abbreviation: "IPV",
    description: "Protects against poliovirus.",
    doses: [
      { doseNumber: 1, ageLabel: "2 months", ageMonths: 2 },
      { doseNumber: 2, ageLabel: "4 months", ageMonths: 4 },
      { doseNumber: 3, ageLabel: "6-18 months", ageMonths: 6 },
      { doseNumber: 4, ageLabel: "4-6 years", ageMonths: 48 },
    ],
    commonSideEffects: [
      "Soreness at injection site",
      "This vaccine has very few side effects",
    ],
    whenToWorry: [
      "Signs of severe allergic reaction (extremely rare)",
    ],
  },
  {
    id: "flu",
    name: "Influenza (Flu)",
    abbreviation: "Flu",
    description: "Annual flu vaccine recommended for all children 6 months and older.",
    doses: [
      { doseNumber: 1, ageLabel: "6 months", ageMonths: 6, notes: "Annual vaccine; 2 doses the first year, 1 dose each year after" },
    ],
    commonSideEffects: [
      "Soreness at injection site",
      "Low-grade fever",
      "Runny nose (if nasal spray)",
    ],
    whenToWorry: [
      "Severe allergic reaction (especially if egg allergy  -  inform your doctor)",
    ],
  },
  {
    id: "mmr",
    name: "Measles, Mumps, Rubella",
    abbreviation: "MMR",
    description: "Protects against three viral diseases: measles, mumps, and rubella.",
    doses: [
      { doseNumber: 1, ageLabel: "12-15 months", ageMonths: 12 },
      { doseNumber: 2, ageLabel: "4-6 years", ageMonths: 48 },
    ],
    commonSideEffects: [
      "Fever 7-12 days after vaccination",
      "Mild rash",
      "Swelling of glands in cheeks or neck",
    ],
    whenToWorry: [
      "Fever over 104°F",
      "Seizure (febrile seizure  -  rare)",
    ],
  },
  {
    id: "var",
    name: "Varicella (Chickenpox)",
    abbreviation: "VAR",
    description: "Protects against chickenpox.",
    doses: [
      { doseNumber: 1, ageLabel: "12-15 months", ageMonths: 12 },
      { doseNumber: 2, ageLabel: "4-6 years", ageMonths: 48 },
    ],
    commonSideEffects: [
      "Soreness at injection site",
      "Mild fever",
      "A few chickenpox-like spots near injection site",
    ],
    whenToWorry: [
      "Seizure",
      "Widespread rash (rare)",
    ],
  },
  {
    id: "hepa",
    name: "Hepatitis A",
    abbreviation: "HepA",
    description: "Protects against hepatitis A virus.",
    doses: [
      { doseNumber: 1, ageLabel: "12 months", ageMonths: 12 },
      { doseNumber: 2, ageLabel: "18 months", ageMonths: 18, notes: "At least 6 months after 1st dose" },
    ],
    commonSideEffects: [
      "Soreness at injection site",
      "Headache",
      "Tiredness",
    ],
    whenToWorry: [
      "Severe allergic reaction (very rare)",
    ],
  },
];
