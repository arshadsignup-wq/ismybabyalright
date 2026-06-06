import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-refusing-fruit',
  title: "My Toddler Won't Eat Any Fruit",
  category: 'feeding',
  searchTerms: [
    'toddler refusing fruit',
    'toddler won\'t eat fruit',
    'toddler doesn\'t like fruit',
    'toddler fruit refusal',
    'toddler rejects all fruit',
    'toddler only eats vegetables no fruit',
    'toddler won\'t eat fresh fruit',
    'how to get toddler to eat fruit',
    'toddler vitamin C without fruit',
    'toddler fruit alternative',
  ],
  quickAnswer:
    'While most people assume all children love fruit, some toddlers refuse it. This can be related to texture, temperature, or taste preferences. Fruits can be slippery, have seeds, or have mixed textures that toddlers find challenging. If your toddler eats vegetables, they are likely getting similar nutrients. There are many ways to offer fruit in different forms.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context:
        'When starting solids, offering vegetables before fruits can help build vegetable acceptance without establishing a strong sweet preference. Both fruits and vegetables are important first foods.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Continue offering a variety of fruits in appropriate forms. Some babies prefer certain fruits over others. Try different preparations including pureed, mashed, and soft pieces.',
    },
    {
      ageRange: '9-12 months',
      context:
        'If baby begins refusing fruit, try different forms such as frozen fruit for teething, baked fruit, or fruit mixed into yogurt. Some babies dislike the slippery texture of raw fruit but will eat it cooked or dried.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Fruit refusal can develop during the picky eating phase. Offer fruit in various forms: smoothies, frozen, baked into muffins, as fruit leather, or with yogurt dips. Continue placing small pieces of fruit on their plate without pressure. Remember that vegetables provide many of the same vitamins and minerals as fruits.',
    },
  ],
  whenNormal: [
    'Toddler refuses some fruits but accepts others',
    'Toddler eats fruit in certain forms but not others such as smoothies but not raw',
    'Toddler eats vegetables and gets adequate vitamins from other sources',
    'Toddler is growing well and has good energy',
  ],
  whenToMention: [
    'Toddler refuses all fruits and vegetables',
    'Toddler\'s diet is extremely limited and they show signs of nutritional deficiency',
    'Toddler has never accepted any fruit in any form since starting solids',
  ],
  whenToActNow: [
    'Toddler shows signs of scurvy from severe vitamin C deficiency such as easy bruising, bleeding gums, or poor wound healing',
    'Toddler is losing weight from extremely restricted diet',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-wont-eat-vegetables', 'picky-eating', 'food-neophobia-toddler'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fruits and Vegetables for Children. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Fruits and Vegetables for Infants and Toddlers. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/fruits-and-vegetables.html',
    },
  ],
};
