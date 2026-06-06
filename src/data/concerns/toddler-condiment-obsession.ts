import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-condiment-obsession',
  title: 'My Toddler Only Eats Food with Ketchup or Sauce',
  category: 'feeding',
  searchTerms: [
    'toddler only eats with ketchup',
    'toddler condiment obsession',
    'toddler dips everything in sauce',
    'toddler ranch dressing everything',
    'toddler won\'t eat without ketchup',
    'toddler needs sauce on everything',
    'toddler ketchup addiction',
    'toddler dipping food constantly',
    'is too much ketchup bad for toddler',
    'toddler eating only with dip',
  ],
  quickAnswer:
    'Using condiments and dips is actually a common and often helpful strategy for toddlers to try new foods. Dipping gives toddlers a sense of control and can make unfamiliar foods more approachable. While too much ketchup adds extra sugar and sodium, moderate use of dips and sauces is generally fine and can expand the variety of foods your toddler will eat.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context: 'Not applicable. Condiments are not appropriate for babies just starting solids.',
    },
    {
      ageRange: '6-9 months',
      context: 'Babies may begin exploring dips around 9 months. Offer healthy dips like hummus, yogurt, or mashed avocado rather than sugary or salty condiments.',
    },
    {
      ageRange: '9-12 months',
      context: 'Dipping is a great fine motor skill practice. Offer age-appropriate dips and let baby explore. Keep sodium and sugar content low by choosing healthier options like unsweetened applesauce, hummus, or plain yogurt.',
    },
    {
      ageRange: '12-24 months',
      context: 'The condiment obsession often peaks during toddlerhood. If ketchup or ranch helps your toddler eat vegetables or proteins, that is a win. Try to vary the dips offered and choose lower-sugar and lower-sodium options when possible. Offer dips in small amounts. If your toddler licks the dip off and refuses the food itself, try spreading a thin layer directly on the food.',
    },
  ],
  whenNormal: [
    'Toddler uses dips and sauces to explore new foods',
    'Toddler eats the actual food along with the condiment',
    'Toddler will eat some foods without condiments',
    'Toddler is growing well and eating a reasonable variety overall',
  ],
  whenToMention: [
    'Toddler only licks condiments off food and refuses to eat the food itself',
    'Toddler is consuming very large amounts of high-sodium or high-sugar condiments daily',
    'Toddler absolutely will not eat any food without a specific condiment and diet is very limited',
  ],
  whenToActNow: [
    'Toddler is not eating enough actual food and is losing weight',
    'Toddler shows signs of excessive sodium intake such as extreme thirst or swelling',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['picky-eating', 'toddler-eating-too-much-salt', 'toddler-eating-too-much-sugar'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Healthy Food Choices for Toddlers. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Sodium and Potassium in Children\'s Diets. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/index.html',
    },
  ],
};
