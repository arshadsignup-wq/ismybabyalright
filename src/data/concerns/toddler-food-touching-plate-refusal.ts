import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-food-touching-plate-refusal',
  title: "My Toddler Won't Eat if Foods Touch on the Plate",
  category: 'feeding',
  searchTerms: [
    'toddler food can\'t touch plate',
    'toddler refuses mixed food',
    'toddler food touching refusal',
    'toddler won\'t eat food that touches',
    'toddler needs food separated',
    'toddler divided plate',
    'toddler food contamination fears',
    'toddler hates casseroles',
    'toddler won\'t eat mixed dishes',
    'toddler each food separate',
  ],
  quickAnswer:
    'Many toddlers insist that foods not touch each other on the plate. This is a very common behavior related to their need for predictability and control. They want to know exactly what each food is and how it will taste. Using divided plates can help, and this preference typically lessens over time.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context: 'Not applicable. Babies are eating single foods and purees.',
    },
    {
      ageRange: '6-9 months',
      context: 'Babies at this age are generally accepting of mixed flavors. Combination purees and mixed dishes are often well accepted at this stage.',
    },
    {
      ageRange: '9-12 months',
      context: 'Some babies begin to notice when foods are mixed and may prefer to pick individual pieces. This is early self-feeding development and not typically a concern.',
    },
    {
      ageRange: '12-24 months',
      context: 'The "foods can\'t touch" phase is extremely common in toddlers. Use a divided plate to separate foods. Honor this preference as it helps your toddler feel safe at mealtimes. They are more likely to eat when they feel in control of their food. Over time, gradually introduce foods that are naturally combined, like sandwiches or pasta with sauce.',
    },
  ],
  whenNormal: [
    'Toddler prefers foods separated but will still eat them',
    'Toddler uses a divided plate successfully and eats well',
    'Toddler refuses mixed dishes but eats the individual components separately',
    'Preference is limited to mealtime and does not extend to extreme rigidity in other areas',
  ],
  whenToMention: [
    'Toddler has extreme distress and will not eat if any food accidentally touches another',
    'This rigidity is part of a broader pattern of inflexibility in many areas of daily life',
    'Toddler is losing weight or not eating enough due to this restriction',
  ],
  whenToActNow: [
    'Toddler has intense meltdowns about food touching that last an unusually long time and cannot be redirected',
    'Extreme food rigidity is combined with loss of social skills or developmental regression',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['picky-eating', 'sensory-food-aversion', 'toddler-brand-specific-food-demand'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Managing Picky Eating in Toddlers. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Selective Eating and Sensory Sensitivity in Young Children. Journal of Child Psychology, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
