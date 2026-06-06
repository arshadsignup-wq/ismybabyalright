import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-bubbles-gas-concern',
  title: 'Are Bubbles in Formula Causing My Baby Gas?',
  category: 'feeding',
  searchTerms: ['formula bubbles gas', 'shaking formula gas baby', 'formula mixing air bubbles', 'baby gas from formula bubbles', 'stirring vs shaking formula', 'formula foam', 'air bubbles bottle feeding', 'how to mix formula without bubbles', 'formula preparation gas', 'reduce formula bubbles'],
  quickAnswer: 'Shaking formula can introduce air bubbles, which may contribute to gas in some babies. While shaking is the fastest way to mix formula, if your baby is gassy, try stirring with a fork or spoon instead, or let the bottle sit for a few minutes after mixing to allow bubbles to rise and dissipate. Using a formula pitcher to mix larger batches also reduces bubbles.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns have immature digestive systems and are most prone to gas. If you notice your baby is gassy after feeds, try stirring formula instead of shaking, use anti-colic bottles, and burp frequently during feeds.' },
    { ageRange: '4-6 months', context: 'Gas from formula bubbles typically improves as baby\'s digestive system matures. Continue using techniques to minimize air in formula if your baby seems affected.' },
    { ageRange: '6-9 months', context: 'Most babies handle formula bubbles well by this age. If gas persists, it may be related to other factors like the formula type, feeding pace, or introduction of solids.' },
    { ageRange: '9-12 months', context: 'Gas from formula preparation is rarely a significant issue at this age. Focus on paced bottle feeding and proper burping if gas continues.' },
    { ageRange: '12-24 months', context: 'If still using formula, the same preparation tips apply. Most toddlers have mature enough digestive systems that bubbles are not an issue.' },
  ],
  whenNormal: ['Baby has some gas but is otherwise comfortable and feeding well', 'Gas improves when you stir instead of shake formula', 'Baby passes gas but is not in significant distress'],
  whenToMention: ['Baby has excessive gas, pain, and fussiness after every feed despite trying different preparation methods', 'Baby has bloody stools or mucus in addition to gas', 'You are wondering if the formula type rather than preparation is causing issues'],
  whenToActNow: ['Baby has a severely distended belly with vomiting and refusal to eat', 'Baby appears to be in severe pain with inconsolable crying'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-gulping-air', 'formula-intolerance-signs', 'preparing-formula-safely'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Gas in Babies. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Formula Preparation and Storage. 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/infant-formula-preparation-and-storage.html' },
  ],
};
