import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-carb-only-diet',
  title: 'My Toddler Only Eats Carbohydrates',
  category: 'feeding',
  searchTerms: [
    'toddler only eats carbs',
    'toddler carb only diet',
    'toddler only wants bread pasta rice',
    'toddler carbohydrate obsession',
    'toddler no protein or vegetables',
    'toddler starch only diet',
    'toddler won\'t eat anything but carbs',
    'toddler refusing everything except carbs',
    'is carb only diet bad for toddler',
    'toddler balanced diet without protein veggies',
  ],
  quickAnswer:
    'A carb-heavy diet is one of the most common toddler eating patterns. Carbohydrates are mild in flavor, predictable in texture, and provide quick energy that growing toddlers crave. While not ideal long-term, this is usually a phase. You can sneak nutrition in through enriched pastas, whole grains, and pairing carbs with protein and fat toppings.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context: 'When starting solids, offer a variety of foods including vegetables, proteins, and grains to build broad acceptance early.',
    },
    {
      ageRange: '6-9 months',
      context: 'Continue offering diverse foods. Some babies may show early preferences for milder, starchy foods, but keep presenting a variety without pressure.',
    },
    {
      ageRange: '9-12 months',
      context: 'If your baby begins preferring carbs, try pairing them with other foods. Spread nut butter on toast, add cheese to pasta, or mix vegetables into rice. The goal is gradual exposure to diverse flavors alongside preferred carbs.',
    },
    {
      ageRange: '12-24 months',
      context: 'A carb-dominant diet is extremely common at this age. Look for opportunities to add nutrition: whole grain breads, pasta with meat sauce, cheese quesadillas, oatmeal with fruit, pancakes with eggs mixed in. Continue offering other food groups without pressuring. Watch for signs of iron deficiency since carb-heavy diets can be low in iron.',
    },
  ],
  whenNormal: [
    'Toddler prefers carbs but will eat some dairy, fruit, or other foods',
    'Toddler is growing well and has normal energy levels',
    'Toddler accepts carbs with protein or fat additions like cheese on crackers or peanut butter on bread',
  ],
  whenToMention: [
    'Toddler eats only plain carbs and refuses all protein, fat, fruits, and vegetables',
    'Toddler appears pale, tired, or is not growing as expected',
    'Toddler\'s diet has been limited to carbs only for more than a month with no improvement',
  ],
  whenToActNow: [
    'Toddler shows signs of nutritional deficiency such as extreme fatigue, swelling, or hair changes',
    'Toddler is losing weight despite eating large amounts of carbs',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-eating-only-white-foods', 'picky-eating', 'toddler-iron-deficiency-risk'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Sample Menu for a Two-Year-Old. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Sample-One-Day-Menu-for-a-Two-Year-Old.aspx',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Foods and Drinks for 6 to 24 Month Olds. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/foods-and-drinks-6-to-24-months.html',
    },
  ],
};
