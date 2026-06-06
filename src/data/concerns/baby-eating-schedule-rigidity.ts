import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eating-schedule-rigidity',
  title: 'Should My Baby Eat on a Strict Schedule?',
  category: 'feeding',
  searchTerms: ['baby eating schedule', 'strict feeding schedule baby', 'baby meal times', 'flexible vs strict feeding', 'baby feeding routine', 'when to feed baby', 'baby eating times', 'scheduled feeding baby', 'on demand vs schedule feeding', 'baby meal schedule'],
  quickAnswer: 'A loose routine is better than a strict schedule for most babies. Responsive feeding, where you watch for hunger and fullness cues rather than feeding by the clock, supports healthy eating habits and weight regulation. Having general meal and snack times provides structure while still allowing flexibility based on baby\'s actual hunger.',
  byAge: [
    { ageRange: '0-3 months', context: 'Feed on demand. Newborns need to eat every 2-3 hours and should not be put on a strict schedule. Watch for hunger cues like rooting, fussing, and hand-to-mouth movements.' },
    { ageRange: '4-6 months', context: 'A loose pattern may emerge naturally. Baby may eat every 3-4 hours. Offer solids at roughly the same times each day but remain flexible. Do not force baby to eat if they are not showing hunger cues.' },
    { ageRange: '6-9 months', context: 'Establish a general rhythm of 2-3 meals plus milk feeds. Having consistent mealtimes helps baby anticipate meals, but the exact timing can be flexible by 30-60 minutes.' },
    { ageRange: '9-12 months', context: 'Three meals plus 1-2 snacks and milk feeds become a natural pattern. Spacing meals about 2-3 hours apart allows baby to build appropriate hunger. Avoid grazing between meals.' },
    { ageRange: '12-24 months', context: 'A predictable schedule of three meals and two snacks works well for most toddlers. Keep times roughly consistent but do not stress about exact timing. Avoiding random snacking between set times helps toddlers arrive at meals hungry enough to eat.' },
  ],
  whenNormal: ['Baby eats at roughly similar times each day with some flexibility', 'Baby sometimes eats more at one meal and less at another', 'You adapt the schedule when traveling, sick, or during schedule disruptions'],
  whenToMention: ['You feel anxious about feeding timing and want reassurance about your approach', 'Baby seems constantly hungry or never hungry at mealtimes', 'You need help establishing a feeding routine'],
  whenToActNow: ['Baby is showing signs of dehydration or weight loss from too rigid a schedule that does not meet their needs', 'Baby is being put on an overly restrictive feeding schedule that limits their intake'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['responsive-feeding-approach', 'baby-hunger-fullness-cues', 'grazing-all-day-toddler'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Responsive Feeding. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Signs Your Child is Hungry or Full. 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/mealtime/signs-your-child-is-hungry-or-full.html' },
  ],
};
