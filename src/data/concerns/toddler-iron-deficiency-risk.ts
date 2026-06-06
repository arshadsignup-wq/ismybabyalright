import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-iron-deficiency-risk',
  title: 'Is My Toddler at Risk for Iron Deficiency?',
  category: 'feeding',
  searchTerms: [
    'toddler iron deficiency',
    'toddler iron levels low',
    'toddler anemia risk',
    'toddler iron needs',
    'toddler pale iron',
    'toddler drinking too much milk iron',
    'toddler iron deficiency symptoms',
    'toddler iron rich foods',
    'toddler iron blood test',
    'toddler iron supplement',
  ],
  quickAnswer:
    'Iron deficiency is the most common nutritional deficiency in toddlers. Risk factors include drinking more than 24 ounces of milk daily, a diet low in iron-rich foods, picky eating, and a history of prematurity. The AAP recommends screening for iron deficiency at 12 months. Symptoms include pallor, fatigue, poor appetite, and irritability.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Full-term babies have iron stores from birth. Premature babies may be at higher risk and may need iron supplements starting at 2 weeks of age as prescribed by their doctor.',
    },
    {
      ageRange: '4-6 months',
      context: 'Iron stores begin to deplete. Introducing iron-rich foods at 6 months is important. Breastfed babies are at higher risk if solids are delayed significantly.',
    },
    {
      ageRange: '6-9 months',
      context: 'Offer iron-rich foods at every meal: fortified cereals, pureed meats, beans, and tofu. Pair with vitamin C sources for better absorption. Continue breast milk or iron-fortified formula.',
    },
    {
      ageRange: '9-12 months',
      context: 'Continue iron-rich foods. Your pediatrician will likely screen for iron deficiency at the 12-month visit with a blood test. If baby is primarily breastfed with limited solid intake, discuss iron supplementation.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers need 7mg of iron daily. The biggest risk factor for iron deficiency at this age is drinking too much cow\'s milk, which displaces iron-rich foods and inhibits iron absorption. Limit milk to 16-20 ounces per day. Offer iron-rich foods regularly and pair with vitamin C.',
    },
  ],
  whenNormal: [
    'Toddler eats iron-rich foods regularly and drinks a normal amount of milk',
    'Toddler passed their 12-month iron screening',
    'Toddler has good energy, normal skin color, and healthy appetite',
  ],
  whenToMention: [
    'Toddler drinks more than 24 ounces of milk daily',
    'Toddler refuses most iron-rich foods',
    'Toddler appears pale, tired, or has poor appetite',
    'Toddler eats non-food items like dirt, ice, or chalk which can signal iron deficiency',
  ],
  whenToActNow: [
    'Toddler has extreme pallor, rapid heartbeat, or significant fatigue',
    'Toddler is eating large amounts of non-food items like paint chips which may contain lead',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['iron-deficiency-from-milk', 'iron-rich-foods-for-baby', 'drinking-too-much-milk'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Screening for Iron Deficiency. Pediatrics, 2010.',
      url: 'https://publications.aap.org/pediatrics/article/126/5/1040/65365/',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Iron Deficiency in Children. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/vitamins-minerals/iron.html',
    },
    {
      org: 'WHO',
      citation: 'World Health Organization. Iron Deficiency Anaemia: Assessment, Prevention and Control. 2001.',
      url: 'https://www.who.int/publications/m/item/iron-children-6to23--archived',
    },
  ],
};
