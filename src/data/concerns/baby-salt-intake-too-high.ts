import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-salt-intake-too-high',
  title: 'Is My Baby Getting Too Much Salt?',
  category: 'feeding',
  searchTerms: [
    'baby too much salt',
    'baby sodium intake',
    'baby salt limit',
    'how much salt can baby have',
    'baby eating salty food',
    'salt bad for baby kidneys',
    'baby food sodium content',
    'salt in baby meals',
    'toddler salt intake',
    'adding salt to baby food',
  ],
  quickAnswer:
    'Babies under 12 months should have less than 1 gram of salt (400mg sodium) per day, and toddlers 1-3 years should have no more than 2 grams of salt (800mg sodium) per day. Their immature kidneys cannot process excess sodium efficiently. While you should not add salt to baby food, do not stress if your baby occasionally eats a higher-sodium food.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Breast milk and formula naturally contain the right amount of sodium for babies. No additional salt or solid foods are needed.',
    },
    {
      ageRange: '4-6 months',
      context: 'When starting solids, do not add salt to any baby foods. Baby\'s taste buds do not need added salt, and their kidneys are still maturing. Plain fruits, vegetables, and grains are ideal first foods.',
    },
    {
      ageRange: '6-9 months',
      context: 'As your baby eats more table foods, be mindful of sodium in processed foods like canned vegetables, bread, and cheese. Choose low-sodium options when possible. Small amounts of naturally occurring sodium in foods are fine.',
    },
    {
      ageRange: '9-12 months',
      context: 'As baby joins family meals, you may need to set aside a portion before adding salt for the rest of the family. Read labels on packaged foods. Choose unsalted or low-sodium versions of crackers, cereals, and canned goods when possible.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers can handle slightly more sodium than babies, but processed foods can still contribute too much. Continue choosing low-sodium options when possible. It is fine for toddlers to eat family meals with moderate salt. Focus on a balanced diet overall rather than stressing about every milligram of sodium.',
    },
  ],
  whenNormal: [
    'Baby occasionally eats a food that has some sodium such as cheese or bread',
    'You do not add salt to baby\'s food but baby eats family meals with mild seasoning',
    'Baby drinks plenty of breast milk, formula, or water alongside solid foods',
  ],
  whenToMention: [
    'Baby regularly eats very salty processed foods like chips, deli meats, or canned soups',
    'Baby seems excessively thirsty all the time',
    'You are unsure how to prepare family meals that are appropriate for baby\'s sodium needs',
  ],
  whenToActNow: [
    'Baby has consumed a very large amount of salt and is showing symptoms like extreme thirst, vomiting, or lethargy',
    'Baby seems dehydrated despite adequate fluid intake',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-eating-too-much-salt', 'baby-first-foods-best-choices', 'baby-food-heavy-metals-concern'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Sodium Intake in Young Children. Pediatrics, 2023.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/default.aspx',
    },
    {
      org: 'WHO',
      citation: 'World Health Organization. Guideline: Sodium Intake for Adults and Children. Geneva, 2012.',
      url: 'https://www.who.int/publications/i/item/9789241504836',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Sodium and Children. 2023.',
      url: 'https://www.cdc.gov/salt/role_of_sodium.htm',
    },
  ],
};
