import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-eating-only-breakfast',
  title: 'My Toddler Only Eats One Meal a Day',
  category: 'feeding',
  searchTerms: [
    'toddler only eats breakfast',
    'toddler only eats one meal',
    'toddler skips lunch and dinner',
    'toddler won\'t eat dinner',
    'toddler refuses lunch',
    'toddler eats breakfast nothing else',
    'toddler one meal a day enough',
    'toddler appetite only morning',
    'toddler doesn\'t eat all day',
    'toddler eating one good meal a day',
    'is one meal a day enough toddler',
  ],
  quickAnswer:
    'It is surprisingly common for toddlers to eat well at one meal and barely touch the others. Toddler appetites fluctuate significantly throughout the day and from day to day. If your toddler is growing well and has good energy, one strong meal plus snacks may be providing enough nutrition. Looking at intake over a week rather than a single day gives a more accurate picture.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Not applicable as babies are just starting solids alongside milk feeds.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Babies at this age are still getting most nutrition from breast milk or formula. Solid food meals are supplementary and it is normal if baby eats more at some feedings than others.',
    },
    {
      ageRange: '9-12 months',
      context:
        'As solids become a bigger part of the diet, some babies show meal preferences. Many babies eat best at breakfast after the overnight fast. Continue offering meals and snacks at regular times without pressure to eat.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler growth slows significantly compared to infancy, so their appetites naturally decrease. Many toddlers truly are hungry only at breakfast and nibble the rest of the day. Ensure snacks are nutritious, limit milk to 16-20 ounces per day so it does not fill them up, and continue to offer meals without pressure. Track growth at well visits to make sure they are on their curve.',
    },
  ],
  whenNormal: [
    'Toddler eats a large breakfast and smaller amounts the rest of the day',
    'Toddler has days of eating a lot and days of eating very little',
    'Toddler is growing along their growth curve and has good energy',
    'Toddler nibbles at other meals even if they do not eat a full portion',
  ],
  whenToMention: [
    'Toddler refuses food at all meals including their one good meal for several days',
    'Toddler is falling off their growth curve',
    'Toddler seems lethargic or unusually tired',
  ],
  whenToActNow: [
    'Toddler stops eating and drinking entirely for more than 24 hours',
    'Toddler shows signs of dehydration or malnutrition',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-not-eating-enough', 'toddler-meal-skipping-frequent', 'picky-eating'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toddler Appetite and Eating Patterns. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. How Much and How Often to Feed. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/how-much-and-how-often.html',
    },
  ],
};
