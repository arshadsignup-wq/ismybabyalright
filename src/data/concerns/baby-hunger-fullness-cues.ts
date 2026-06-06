import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hunger-fullness-cues',
  title: 'How to Read My Baby\'s Hunger and Fullness Signals',
  category: 'feeding',
  searchTerms: ['baby hunger cues', 'baby fullness cues', 'how to tell baby hungry', 'how to tell baby full', 'baby feeding signals', 'baby satiety cues', 'baby hunger signs', 'when baby is done eating', 'baby cues feeding', 'reading baby feeding signals'],
  quickAnswer: 'Babies communicate hunger through rooting, hand-to-mouth movements, fussing, and increased alertness. Fullness signals include turning head away, closing mouth, pushing food away, slowing down eating, and becoming distracted. Learning to read these cues helps you feed responsively. Crying is a late hunger cue and feeding before baby gets to this point makes feeding easier.',
  byAge: [
    { ageRange: '0-3 months', context: 'Hunger cues: rooting (turning head and opening mouth), sucking on fists, fussing, smacking lips. Fullness cues: falling asleep at breast or bottle, slowing sucking, turning head away, releasing nipple, relaxed hands. Crying is a late cue.' },
    { ageRange: '4-6 months', context: 'Hunger cues: reaching for food, watching you eat with interest, opening mouth when food approaches. Fullness cues: turning head away from spoon, closing mouth, pushing spoon away, becoming fussy or distracted.' },
    { ageRange: '6-9 months', context: 'Hunger: reaching for food, getting excited at sight of food, leaning toward food. Fullness: playing with food instead of eating, throwing food, shaking head no, pushing tray away.' },
    { ageRange: '9-12 months', context: 'Baby begins to communicate more clearly about food preferences. They may point at foods they want or refuse specific items. Respect both preferences and fullness signals.' },
    { ageRange: '12-24 months', context: 'Toddlers can verbalize or sign "more" and "all done." They may physically leave the table when full. Trust these signals even if the amount eaten seems small to you. Toddler appetites are naturally variable.' },
  ],
  whenNormal: ['Baby has clear hunger and fullness cues that you can identify', 'Baby eats well when hungry and stops when full', 'Baby\'s eating varies from meal to meal based on hunger level'],
  whenToMention: ['Baby never seems to show hunger cues and you have to prompt all feeds', 'Baby never seems satisfied no matter how much they eat', 'You are having difficulty reading your baby\'s cues'],
  whenToActNow: ['Baby is lethargic and not showing hunger cues while losing weight', 'Baby is inconsolable and feeding does not help'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['responsive-feeding-approach', 'formula-overfeeding-signs', 'formula-underfeeding-signs'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Signs Your Child is Hungry or Full. 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/mealtime/signs-your-child-is-hungry-or-full.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Responsive Feeding Guidelines. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
  ],
};
