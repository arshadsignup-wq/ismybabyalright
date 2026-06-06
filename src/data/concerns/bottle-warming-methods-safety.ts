import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bottle-warming-methods-safety',
  title: 'What Is the Safest Way to Warm a Bottle?',
  category: 'feeding',
  searchTerms: ['bottle warming safe', 'how to warm bottle', 'bottle warmer safe', 'microwave bottle danger', 'warm baby bottle methods', 'bottle warming temperature', 'hot water bottle warming', 'bottle warmer vs running water', 'safe bottle heating', 'warm milk for baby'],
  quickAnswer: 'The safest ways to warm a bottle are running it under warm water, placing it in a bowl of warm water, or using a bottle warmer. Never microwave breast milk or formula as it creates dangerous hot spots and can destroy nutrients. Many babies accept room temperature or even cold milk, so warming is not required. Always test temperature on your inner wrist before feeding.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns may prefer warm milk as it mimics body temperature breast milk. Place the bottle in warm water for a few minutes or use a bottle warmer. Swirl gently after warming and test temperature.' },
    { ageRange: '4-6 months', context: 'Babies may accept milk at various temperatures. If your baby accepts room temperature milk, this simplifies feeding. There is no nutritional benefit to warming.' },
    { ageRange: '6-9 months', context: 'As feeding becomes more routine, use whichever warming method works best for your family. Bottle warmers provide consistent temperature but running water works just as well.' },
    { ageRange: '9-12 months', context: 'Many babies at this age accept cold or room temperature milk readily. Do not feel obligated to warm every bottle if baby is happy without it.' },
    { ageRange: '12-24 months', context: 'If transitioning to whole milk, it can be served at any safe temperature. Many toddlers prefer room temperature or cold milk.' },
  ],
  whenNormal: ['You warm bottles in warm water or with a bottle warmer', 'Baby accepts milk at room temperature', 'You test every bottle on your wrist before feeding'],
  whenToMention: ['Baby refuses all temperatures of milk and you need guidance', 'You are unsure about safe warming practices', 'Baby has been burned by milk that was too hot'],
  whenToActNow: ['Baby has a burn on their mouth or throat from overheated milk', 'Baby choked on milk that was heated unevenly in a microwave'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['formula-preparation-temperature', 'breast-milk-thawing-rules', 'food-temperature-preferences'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Safe Bottle Feeding. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Formula Preparation and Storage. 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/infant-formula-preparation-and-storage.html' },
  ],
};
