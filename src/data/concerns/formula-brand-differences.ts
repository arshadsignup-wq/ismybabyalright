import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-brand-differences',
  title: 'Is Generic Formula as Good as Name Brand?',
  category: 'feeding',
  searchTerms: ['generic vs name brand formula', 'store brand formula safe', 'formula brand differences', 'cheap formula vs expensive', 'are all formulas the same', 'formula brand comparison', 'generic formula quality', 'store brand baby formula', 'formula brand matters', 'organic vs regular formula'],
  quickAnswer: 'All infant formulas sold in the United States must meet the same FDA nutritional standards regardless of brand or price. Generic and store brand formulas are nutritionally equivalent to name brands and are safe for your baby. The main differences are in price, added extras like DHA or prebiotics, and taste. Many generic formulas are actually made in the same factories as name brands.',
  byAge: [
    { ageRange: '0-3 months', context: 'All standard infant formulas meet the same FDA requirements. If your baby is doing well on a generic formula, there is no nutritional reason to switch to a name brand. If baby seems unsettled, it could be due to slight taste differences between brands.' },
    { ageRange: '4-6 months', context: 'If you have been using name brand and want to save money by switching to generic, this is generally fine. Make the switch gradually over a few days by mixing the two formulas if your baby is sensitive to change.' },
    { ageRange: '6-9 months', context: 'All standard formulas continue to meet baby\'s needs at this age. If you are supplementing with formula while breastfeeding, any standard formula is appropriate.' },
    { ageRange: '9-12 months', context: 'Continue using whichever formula works well for your baby. There is no need to switch to a more expensive brand as baby approaches 12 months.' },
    { ageRange: '12-24 months', context: 'Most babies transition to whole milk at 12 months. If your toddler needs to stay on formula for medical reasons, your pediatrician will guide brand selection.' },
  ],
  whenNormal: ['You use generic formula and baby is thriving', 'You switch between brands based on availability or price', 'Baby accepts different brands without issue'],
  whenToMention: ['Baby seems to react differently to different brands despite equivalent ingredients', 'You need a specialty formula and want to know if generic versions are equivalent', 'You are confused by marketing claims about formula ingredients'],
  whenToActNow: ['You are using a formula that has been recalled', 'Baby has a severe reaction to any formula brand'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['switching-formula-brands', 'formula-type-transitions', 'formula-shortage-alternatives'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Choosing an Infant Formula. HealthyChildren.org, 2024.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Choosing-an-Infant-Formula.aspx' },
    { org: 'FDA', citation: 'U.S. Food and Drug Administration. Infant Formula Requirements. 2023.', url: 'https://www.fda.gov/food/resources-you-food/infant-formula' },
  ],
};
