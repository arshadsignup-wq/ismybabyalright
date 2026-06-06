import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-eating-same-food-daily',
  title: 'My Toddler Demands the Same Food Every Day',
  category: 'feeding',
  searchTerms: [
    'toddler wants same food every day',
    'toddler eating same food daily',
    'toddler repetitive eating',
    'toddler food jag won\'t stop',
    'toddler stuck on one food',
    'toddler same breakfast every day',
    'toddler demanding same meal',
    'toddler won\'t try anything new',
    'toddler repetitive food requests',
    'toddler same food obsession',
  ],
  quickAnswer:
    'Demanding the same food every day, known as a "food jag," is a hallmark toddler behavior. Toddlers find comfort in predictability, and a food jag can last days to weeks before the child suddenly moves on. Continue offering other foods alongside the preferred food, and try not to worry as long as your toddler is growing well.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Not applicable for this age group.',
    },
    {
      ageRange: '4-6 months',
      context: 'Not applicable as babies are just beginning solids.',
    },
    {
      ageRange: '6-9 months',
      context: 'Some babies show strong preferences for certain foods early on. Continue offering a variety while also serving preferred foods.',
    },
    {
      ageRange: '9-12 months',
      context: 'Food jags can begin at this age. Baby may want the same food at every meal. Keep offering other options alongside the favorite food.',
    },
    {
      ageRange: '12-24 months',
      context: 'Food jags peak during toddlerhood and are a normal developmental behavior. Serve the preferred food in a smaller portion alongside other foods. Avoid offering it at every meal or your toddler may burn out on it. If the jag lasts more than two weeks, you can try rotating it to every other meal. Most food jags resolve on their own.',
    },
  ],
  whenNormal: [
    'Toddler insists on the same food for a few days or weeks then moves on',
    'Toddler eats the preferred food plus small amounts of other foods',
    'Toddler eventually tires of the preferred food naturally',
    'Toddler is growing well and has adequate energy',
  ],
  whenToMention: [
    'Food jag has lasted more than a month with no variation at all',
    'Toddler eats only one food and refuses everything else including previously accepted foods',
    'Toddler seems distressed or anxious about food variety rather than just preferring sameness',
  ],
  whenToActNow: [
    'Toddler is showing signs of nutritional deficiency from extremely limited diet',
    'Toddler stops eating even their preferred food',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-food-jag', 'picky-eating', 'toddler-brand-specific-food-demand'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Food Jags in Toddlers. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Picky Eaters and What to Do. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/picky-eaters.html',
    },
  ],
};
