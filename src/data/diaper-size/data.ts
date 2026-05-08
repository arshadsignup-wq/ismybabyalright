/**
 * Diaper size guide data — weight ranges, age estimates, tips.
 * Sources: Pampers, Huggies, manufacturer sizing charts, AAP guidelines.
 */

export interface DiaperSize {
  size: string;
  weightMinLbs: number;
  weightMaxLbs: number;
  ageRange: string;
  diapersPerDay: string;
  notes: string;
}

export const DIAPER_SIZES: DiaperSize[] = [
  {
    size: "Preemie",
    weightMinLbs: 0,
    weightMaxLbs: 6,
    ageRange: "Premature babies",
    diapersPerDay: "8-12",
    notes: "Designed for premature or very small newborns. Extra soft with umbilical cord cutout.",
  },
  {
    size: "Newborn",
    weightMinLbs: 0,
    weightMaxLbs: 10,
    ageRange: "0-1 month",
    diapersPerDay: "8-12",
    notes: "Umbilical cord notch in most brands. Expect to go through these quickly — most babies move to Size 1 within 2-4 weeks.",
  },
  {
    size: "Size 1",
    weightMinLbs: 8,
    weightMaxLbs: 14,
    ageRange: "0-4 months",
    diapersPerDay: "8-10",
    notes: "First size most babies spend significant time in. Wetness indicator is helpful at this stage.",
  },
  {
    size: "Size 2",
    weightMinLbs: 12,
    weightMaxLbs: 18,
    ageRange: "2-6 months",
    diapersPerDay: "8-10",
    notes: "Baby is becoming more active. Look for stretch panels for comfort during movement.",
  },
  {
    size: "Size 3",
    weightMinLbs: 16,
    weightMaxLbs: 28,
    ageRange: "5-15 months",
    diapersPerDay: "6-8",
    notes: "Most popular size — babies spend the most time in Size 3. Consider overnight diapers if leaking at night.",
  },
  {
    size: "Size 4",
    weightMinLbs: 22,
    weightMaxLbs: 37,
    ageRange: "12-24 months",
    diapersPerDay: "6-8",
    notes: "Toddlers need more absorbent diapers for larger voids. Look for brands with extra absorbency zones.",
  },
  {
    size: "Size 5",
    weightMinLbs: 27,
    weightMaxLbs: 45,
    ageRange: "18-36+ months",
    diapersPerDay: "5-7",
    notes: "Often the transition size before potty training. Many brands offer pull-up style for this size.",
  },
  {
    size: "Size 6",
    weightMinLbs: 35,
    weightMaxLbs: 50,
    ageRange: "3+ years",
    diapersPerDay: "4-6",
    notes: "For larger toddlers still in diapers. Pull-up training pants are a popular alternative at this size.",
  },
  {
    size: "Size 7",
    weightMinLbs: 41,
    weightMaxLbs: 65,
    ageRange: "3-4+ years",
    diapersPerDay: "4-6",
    notes: "Largest disposable diaper size. Not all brands make this size — check Pampers or specialty brands.",
  },
];

export function getRecommendedSize(weightLbs: number): DiaperSize | null {
  // Find the best-fit size (where weight is in the middle of the range)
  const candidates = DIAPER_SIZES.filter(
    (d) => weightLbs >= d.weightMinLbs && weightLbs <= d.weightMaxLbs
  );
  if (candidates.length === 0) return null;
  // Return the one where baby is closest to the middle of the range
  return candidates.reduce((best, d) => {
    const mid = (d.weightMinLbs + d.weightMaxLbs) / 2;
    const bestMid = (best.weightMinLbs + best.weightMaxLbs) / 2;
    return Math.abs(weightLbs - mid) < Math.abs(weightLbs - bestMid) ? d : best;
  });
}

export const FIT_TIPS = [
  "The waistband should fit snugly but allow two fingers between the diaper and baby's belly.",
  "Leg cuffs should be pulled out (not tucked in) to prevent leaks.",
  "If you see red marks on baby's thighs or waist, it's time to size up.",
  "Frequent blowouts usually mean it's time for the next size, not a tighter fit.",
  "If the diaper looks saggy or droopy, you may have sized up too soon.",
  "Overnight diapers are one size up from daytime — extra absorbency for longer stretches.",
];
