import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-meal-skipping-frequent',
  title: 'My Toddler Keeps Skipping Meals',
  category: 'feeding',
  searchTerms: [
    'toddler skipping meals',
    'toddler refuses to eat meals',
    'toddler not eating at mealtimes',
    'toddler won\'t sit for meals',
    'toddler meal refusal',
    'toddler skips dinner every night',
    'is it ok if toddler skips meal',
    'toddler never hungry at mealtime',
    'toddler eating very little at meals',
    'how many meals should toddler eat',
  ],
  quickAnswer:
    'Skipping meals is very common for toddlers and is usually not a cause for concern. Toddler growth slows considerably after the first year, so their appetites naturally decrease. Looking at food intake over a week rather than meal by meal gives a much more reassuring picture. Most toddlers eat enough overall even when individual meals seem tiny.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Not applicable. Babies this age feed frequently and should not skip feeds.',
    },
    {
      ageRange: '4-6 months',
      context: 'Not applicable as solid food meals are just starting.',
    },
    {
      ageRange: '6-9 months',
      context: 'Babies may eat more at some meals than others. Milk feeds remain the primary nutrition source, so varying solid intake is normal.',
    },
    {
      ageRange: '9-12 months',
      context: 'As solids become a larger part of the diet, some meal skipping begins. Baby may eat a big lunch and then have little appetite for dinner. This self-regulation is healthy.',
    },
    {
      ageRange: '12-24 months',
      context: 'Frequent meal skipping is extremely common. Toddlers may eat only 1-2 real meals per day plus snacks. Their caloric needs per pound of body weight actually decrease after the first year. Continue offering meals and snacks at regular times, but do not force eating. Ensure milk intake is no more than 16-20 ounces per day so it does not replace food.',
    },
  ],
  whenNormal: [
    'Toddler skips a meal but eats well at the next one',
    'Toddler eats better on active days and less on quieter days',
    'Toddler makes up for a skipped meal with good snack intake',
    'Toddler is growing along their curve and has good energy',
  ],
  whenToMention: [
    'Toddler skips most meals for more than a week and seems to have no appetite',
    'Toddler is losing weight or falling off their growth curve',
    'Toddler has dramatically decreased appetite along with other symptoms like fever or lethargy',
  ],
  whenToActNow: [
    'Toddler refuses all food and drink for more than 24 hours',
    'Toddler shows signs of dehydration such as dry mouth, no tears, or very few wet diapers',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-not-eating-enough', 'toddler-eating-only-breakfast', 'toddler-eating-only-snacks'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Toddler Eating Patterns. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. How Much and How Often to Feed. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/how-much-and-how-often.html',
    },
  ],
};
