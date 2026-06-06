import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breast-milk-foremilk-watery',
  title: 'My Breast Milk Looks Watery',
  category: 'feeding',
  searchTerms: ['breast milk looks watery', 'thin breast milk', 'breast milk not creamy', 'watery breast milk concern', 'foremilk thin and watery', 'breast milk not thick enough', 'is watery breast milk nutritious', 'breast milk like water', 'breast milk clear and thin', 'foremilk vs hindmilk appearance'],
  quickAnswer: 'Watery-looking breast milk is completely normal and is still highly nutritious. The milk at the beginning of a feeding (foremilk) is thinner and more hydrating, while the milk toward the end (hindmilk) is fattier and creamier. Both are essential. The appearance of breast milk is not a reliable indicator of its nutritional value.',
  byAge: [
    { ageRange: '0-3 months', context: 'In the early weeks, milk transitions from thick yellow colostrum to thinner mature milk. This can look alarmingly watery but is completely normal and nutritious. As long as baby is having adequate wet and dirty diapers and gaining weight, the milk is providing what baby needs.' },
    { ageRange: '4-6 months', context: 'Pumped milk that separates in the refrigerator is normal. The fat rises to the top and the thinner portion settles below. Gently swirl the bottle to mix before feeding. Do not shake vigorously.' },
    { ageRange: '6-9 months', context: 'Breast milk continues to change composition based on the time of day, how long since the last feed, and your diet. It is always providing appropriate nutrition for your baby.' },
    { ageRange: '9-12 months', context: 'Milk composition continues to adapt. Breast milk produced by mothers of older babies actually contains more fat and immune factors than early milk in some ways.' },
    { ageRange: '12-24 months', context: 'Breast milk beyond 12 months remains nutritious. The composition shifts to provide even more immunological protection as feeding frequency decreases.' },
  ],
  whenNormal: ['Foremilk is thin and bluish-white while hindmilk is thicker and creamier', 'Pumped milk separates into layers in the refrigerator', 'Milk appearance varies at different times of day'],
  whenToMention: ['Baby is not gaining weight adequately despite frequent nursing', 'You are concerned your milk quality is not meeting baby\'s needs', 'Baby seems hungry soon after every feeding and you suspect supply issues'],
  whenToActNow: ['Baby is losing weight or showing signs of dehydration despite frequent feeding', 'Baby is excessively fussy and not producing adequate wet diapers'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['foremilk-hindmilk-imbalance', 'breast-milk-color-changes', 'low-milk-supply-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. How Breast Milk Is Made. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/How-Breast-Milk-Is-Made.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Macronutrient Composition of Human Milk. Journal of Perinatology, 2021.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
