import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breast-milk-color-changes',
  title: 'Why Is My Breast Milk a Different Color?',
  category: 'feeding',
  searchTerms: ['breast milk color change', 'breast milk green', 'breast milk yellow', 'breast milk blue tint', 'breast milk pink', 'breast milk orange', 'breast milk looks different', 'normal breast milk color', 'breast milk color variations', 'breast milk not white'],
  quickAnswer: 'Breast milk color varies widely and is almost always normal. Colostrum is yellow-orange, mature milk can range from white to bluish, and food dyes, medications, and supplements can change milk to green, pink, or orange. Even within a single day, milk color can change from a thin bluish foremilk to a richer, creamier white hindmilk.',
  byAge: [
    { ageRange: '0-3 months', context: 'Colostrum in the first few days is thick and yellow-orange. This transitions to thinner, whiter mature milk over 2-5 days. Transitional milk may appear yellowish-white. All of these color changes are completely normal.' },
    { ageRange: '4-6 months', context: 'Mature breast milk ranges from bluish-white (foremilk) to creamy white (hindmilk). If you eat a lot of green vegetables or take certain supplements, milk may appear greenish. This is harmless.' },
    { ageRange: '6-9 months', context: 'As baby starts solids and nursing patterns change, you may notice more variation in milk appearance. Foods you eat can continue to affect milk color. This does not affect the safety or nutrition of the milk.' },
    { ageRange: '9-12 months', context: 'Breast milk color remains variable. If you notice pink or red-tinged milk, it may indicate blood from cracked nipples or a broken capillary, which is usually harmless and safe for baby to drink.' },
    { ageRange: '12-24 months', context: 'Breast milk continues to be nutritious regardless of color. As nursing frequency decreases, you may notice milk appears more concentrated or yellowish, similar to colostrum. This is normal.' },
  ],
  whenNormal: ['Milk ranges from bluish-white to creamy yellow', 'Milk appears greenish after eating green vegetables or green drinks', 'Milk color changes from the beginning to end of a feeding session'],
  whenToMention: ['Milk is consistently pink or red for more than a few days', 'Milk has an unusual foul odor along with color change', 'You see blood in your milk and are concerned'],
  whenToActNow: ['There is a large amount of bright red blood in breast milk accompanied by breast pain, fever, or a lump', 'Baby appears ill after drinking milk that seemed unusual'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['breast-milk-foremilk-watery', 'breast-milk-smell-taste-change', 'breast-milk-high-lipase'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breast Milk Appearance. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Human Milk Composition and Appearance. Journal of Mammary Gland Biology and Neoplasia, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
