import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-eating-only-snacks',
  title: 'My Toddler Only Wants Snacks Instead of Meals',
  category: 'feeding',
  searchTerms: [
    'toddler only wants snacks',
    'toddler refuses meals eats snacks',
    'toddler snacking all day',
    'toddler won\'t eat meals only snacks',
    'toddler preferring snacks over dinner',
    'toddler grazing snacks',
    'toddler skipping meals for snacks',
    'toddler snack addiction',
    'toddler filling up on snacks',
    'how to get toddler to eat meals not snacks',
  ],
  quickAnswer:
    'Many toddlers prefer snacks over sit-down meals because snacks are often more convenient and familiar. Establishing a regular meal and snack schedule with set times helps toddlers build appetite for meals. Offering balanced options at both meals and snacks and avoiding grazing between scheduled eating times can make a big difference.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Not applicable as babies are just beginning solids.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Babies at this age are learning to eat and meals are still supplementary to breast milk or formula. The concept of meals versus snacks is not yet relevant.',
    },
    {
      ageRange: '9-12 months',
      context:
        'As babies eat more solids, establishing a regular eating schedule begins to matter. Aim for three meals and two snacks at consistent times. Avoid offering crackers or puffs randomly throughout the day, as this can undermine appetite at mealtimes.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is the most common age for snack preference to develop. Toddlers have small stomachs and may genuinely do better with smaller, more frequent eating opportunities. Structure meals and snacks about 2-3 hours apart. Make snacks nutritious and similar in quality to meals. Avoid using snacks as rewards or distractions. If your toddler has a snack, remove leftover food until the next scheduled eating time.',
    },
  ],
  whenNormal: [
    'Toddler eats well at some meals and prefers snacks at other times',
    'Toddler is growing well and has good energy despite preferring snacks',
    'Toddler eats better when meals and snacks are offered on a consistent schedule',
    'Toddler is going through a normal picky phase but still eats a reasonable variety',
  ],
  whenToMention: [
    'Toddler refuses all meals consistently and will only eat dry snack foods like crackers and chips',
    'Toddler is not growing well or losing weight',
    'Toddler\'s diet is extremely limited to fewer than five foods total',
  ],
  whenToActNow: [
    'Toddler is showing signs of malnutrition such as extreme fatigue, brittle hair, or swollen belly',
    'Toddler is refusing all food and drinks for more than 24 hours',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['grazing-all-day-toddler', 'picky-eating', 'toddler-not-eating-enough'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding and Nutrition Tips: Your 2-Year-Old. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Feeding-and-Nutrition-Your-Two-Year-Old.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Meal and Snack Patterns for Toddlers. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/meals-and-snacks.html',
    },
  ],
};
