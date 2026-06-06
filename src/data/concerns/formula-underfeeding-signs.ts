import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-underfeeding-signs',
  title: 'Is My Baby Getting Enough Formula?',
  category: 'feeding',
  searchTerms: ['baby not getting enough formula', 'formula underfeeding signs', 'baby still hungry formula', 'not enough formula intake', 'baby not eating enough formula', 'baby underfed formula', 'hungry baby formula', 'signs baby needs more formula', 'formula feeding not enough', 'inadequate formula intake'],
  quickAnswer: 'Signs that baby may not be getting enough formula include fewer than 6 wet diapers per day, dark concentrated urine, poor weight gain, lethargy, dry mouth, and persistent hunger cues after feeds. If you are concerned, count wet diapers and discuss with your pediatrician. Most healthy babies regulate their own intake when fed responsively.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns should have at least 6 wet diapers and 3-4 stools per day. If baby is not meeting these minimums, they may need more formula. Weight checks at pediatric visits are the best way to monitor adequate intake. Baby should regain birth weight by 2 weeks.' },
    { ageRange: '4-6 months', context: 'Baby should be steadily gaining weight and growing in length. If growth has slowed or baby seems constantly hungry, they may need more ounces per feed or more frequent feeds.' },
    { ageRange: '6-9 months', context: 'With the introduction of solids, formula remains the primary nutrition. If baby is eating lots of solid food but not drinking enough formula, their nutrition may be inadequate. Continue offering formula before solids at this age.' },
    { ageRange: '9-12 months', context: 'Baby should still be getting at least 16 ounces of formula daily. If baby is refusing formula but eating solids, ensure solids are nutritionally diverse.' },
    { ageRange: '12-24 months', context: 'After transitioning to whole milk, 16-20 ounces per day plus a varied diet should be adequate. If your toddler drinks very little milk and has a limited diet, discuss with your pediatrician.' },
  ],
  whenNormal: ['Baby has at least 6 wet diapers per day', 'Baby is gaining weight along their growth curve', 'Baby has periods of feeding less and more from day to day'],
  whenToMention: ['Baby has fewer than 6 wet diapers per day', 'Baby is not gaining weight at expected rate', 'Baby seems constantly hungry and unsatisfied after feeding recommended amounts'],
  whenToActNow: ['Baby has very few wet diapers, dry mouth, sunken fontanelle, or extreme lethargy suggesting dehydration', 'Baby has lost weight or not gained weight for more than 2 weeks'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['formula-amount-by-age', 'baby-not-drinking-enough-milk', 'failure-to-thrive-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Tell if Baby is Getting Enough Formula. HealthyChildren.org, 2024.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. How Much and How Often to Feed Formula. 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/how-much-how-often.html' },
  ],
};
