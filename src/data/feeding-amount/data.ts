/**
 * Feeding amount data by age — formula & breast milk recommendations.
 * Sources: AAP, WHO, CDC infant feeding guidelines.
 */

export interface FeedingAmount {
  minMonths: number;
  maxMonths: number;
  label: string;
  formulaPerFeedOzMin: number;
  formulaPerFeedOzMax: number;
  feedsPerDayMin: number;
  feedsPerDayMax: number;
  totalDailyOzMin: number;
  totalDailyOzMax: number;
  breastfeedMinutes: string;
  solidsNote: string;
  tips: string;
}

export const FEEDING_AMOUNTS: FeedingAmount[] = [
  {
    minMonths: 0,
    maxMonths: 0.5,
    label: "Newborn (0-2 weeks)",
    formulaPerFeedOzMin: 1,
    formulaPerFeedOzMax: 2,
    feedsPerDayMin: 8,
    feedsPerDayMax: 12,
    totalDailyOzMin: 12,
    totalDailyOzMax: 20,
    breastfeedMinutes: "10-15 min per breast",
    solidsNote: "No solids",
    tips: "Feed on demand — baby's stomach is tiny (marble-sized at birth). Watch for hunger cues: rooting, lip smacking, hand-to-mouth.",
  },
  {
    minMonths: 0.5,
    maxMonths: 1,
    label: "2-4 weeks",
    formulaPerFeedOzMin: 2,
    formulaPerFeedOzMax: 3,
    feedsPerDayMin: 7,
    feedsPerDayMax: 9,
    totalDailyOzMin: 16,
    totalDailyOzMax: 24,
    breastfeedMinutes: "15-20 min per breast",
    solidsNote: "No solids",
    tips: "Expect frequent cluster feeding, especially in evenings. Weight gain of 5-7 oz/week is normal.",
  },
  {
    minMonths: 1,
    maxMonths: 2,
    label: "1 month",
    formulaPerFeedOzMin: 3,
    formulaPerFeedOzMax: 4,
    feedsPerDayMin: 6,
    feedsPerDayMax: 8,
    totalDailyOzMin: 20,
    totalDailyOzMax: 28,
    breastfeedMinutes: "15-20 min per breast",
    solidsNote: "No solids",
    tips: "Baby may begin to establish a feeding pattern. Continue feeding on demand.",
  },
  {
    minMonths: 2,
    maxMonths: 4,
    label: "2-3 months",
    formulaPerFeedOzMin: 4,
    formulaPerFeedOzMax: 5,
    feedsPerDayMin: 6,
    feedsPerDayMax: 8,
    totalDailyOzMin: 24,
    totalDailyOzMax: 32,
    breastfeedMinutes: "15-20 min per breast",
    solidsNote: "No solids",
    tips: "Feeds become more efficient. Baby may go longer between feedings, especially at night.",
  },
  {
    minMonths: 4,
    maxMonths: 6,
    label: "4-5 months",
    formulaPerFeedOzMin: 4,
    formulaPerFeedOzMax: 6,
    feedsPerDayMin: 5,
    feedsPerDayMax: 7,
    totalDailyOzMin: 24,
    totalDailyOzMax: 36,
    breastfeedMinutes: "15-20 min per breast",
    solidsNote: "May begin solids if showing readiness signs (sitting with support, interest in food, tongue-thrust reflex gone)",
    tips: "Most babies max out at about 32 oz/day of formula. Talk to your pediatrician about starting solids.",
  },
  {
    minMonths: 6,
    maxMonths: 9,
    label: "6-8 months",
    formulaPerFeedOzMin: 6,
    formulaPerFeedOzMax: 8,
    feedsPerDayMin: 4,
    feedsPerDayMax: 6,
    totalDailyOzMin: 24,
    totalDailyOzMax: 32,
    breastfeedMinutes: "10-20 min per breast",
    solidsNote: "1-2 solid meals/day (purees, soft foods). Breast milk/formula still primary nutrition.",
    tips: "Introduce a variety of flavors and textures. Start with iron-rich foods like fortified cereal, pureed meat.",
  },
  {
    minMonths: 9,
    maxMonths: 12,
    label: "9-11 months",
    formulaPerFeedOzMin: 6,
    formulaPerFeedOzMax: 8,
    feedsPerDayMin: 3,
    feedsPerDayMax: 5,
    totalDailyOzMin: 24,
    totalDailyOzMax: 32,
    breastfeedMinutes: "10-15 min per breast",
    solidsNote: "2-3 solid meals/day plus snacks. Soft finger foods encouraged.",
    tips: "Baby may self-wean from some feedings as solids increase. Offer water in a sippy cup at meals.",
  },
  {
    minMonths: 12,
    maxMonths: 24,
    label: "12-23 months",
    formulaPerFeedOzMin: 0,
    formulaPerFeedOzMax: 0,
    feedsPerDayMin: 0,
    feedsPerDayMax: 3,
    totalDailyOzMin: 16,
    totalDailyOzMax: 24,
    breastfeedMinutes: "On demand if still nursing",
    solidsNote: "3 meals + 2 snacks/day. Whole milk replaces formula (16-24 oz/day).",
    tips: "Transition to whole cow's milk at 12 months. Continue breastfeeding as long as mutually desired.",
  },
];

export function getFeedingAmount(ageMonths: number): FeedingAmount | null {
  return (
    FEEDING_AMOUNTS.find(
      (f) => ageMonths >= f.minMonths && ageMonths < f.maxMonths
    ) ?? FEEDING_AMOUNTS[FEEDING_AMOUNTS.length - 1]
  );
}

/** Convert oz to ml */
export function ozToMl(oz: number): number {
  return Math.round(oz * 29.5735);
}
