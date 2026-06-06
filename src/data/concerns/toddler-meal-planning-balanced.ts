import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-meal-planning-balanced',
  title: 'How Do I Plan Balanced Meals for My Toddler?',
  category: 'feeding',
  searchTerms: ['toddler meal planning', 'balanced toddler meals', 'toddler nutrition guide', 'what to feed toddler daily', 'toddler food groups', 'toddler meal ideas healthy', 'toddler diet balanced', 'toddler food pyramid', 'toddler eating variety', 'balanced diet 1 year old'],
  quickAnswer: 'A balanced toddler diet includes foods from all five food groups: fruits, vegetables, grains, protein, and dairy (or dairy alternatives). Toddlers need about 1,000-1,400 calories per day depending on age and activity level. Aim for 3 meals and 2-3 snacks daily. Include iron-rich foods, healthy fats for brain development, and a variety of colors on the plate. Do not worry if every single meal is perfectly balanced; focus on balance over the course of a week rather than each individual meal.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies at this age need only breast milk or formula. Meal planning is not yet relevant, though building healthy family eating habits early creates a positive food environment.' },
    { ageRange: '4-6 months', context: 'As you introduce first foods around 6 months, start with single-ingredient purees and gradually expand. This is the beginning of building a varied diet that will become balanced meals later.' },
    { ageRange: '6-9 months', context: 'Offer a variety of fruits, vegetables, grains, and proteins as you expand the diet. Aim to introduce iron-rich foods early (meat, lentils, fortified cereals). Offer different colors and textures to build acceptance.' },
    { ageRange: '9-12 months', context: 'Baby should be eating a wide variety of table foods. Include protein at each meal (meat, beans, eggs, dairy), fruits or vegetables, and a grain. Begin offering water in a cup with meals.' },
    { ageRange: '12-24 months', context: 'A balanced day might include: grains at each meal (oatmeal, bread, pasta), a fruit or vegetable at each meal and snack, protein 2-3 times per day (eggs, meat, fish, beans, tofu), dairy 2-3 servings (milk, yogurt, cheese), and healthy fats (avocado, olive oil, nut butters). Aim for variety over the week rather than stressing about each individual meal.' },
  ],
  whenNormal: ['Toddler eats from most food groups over the course of a week', 'Toddler has days of eating more or less but averages out', 'Toddler is growing well and has good energy levels'],
  whenToMention: ['Toddler consistently refuses entire food groups for weeks', 'You are struggling to include iron-rich or protein-rich foods', 'Toddler is on a restricted diet due to allergies and you need planning help', 'You are unsure if your toddler is getting adequate nutrition'],
  whenToActNow: ['Toddler is losing weight or falling off their growth curve', 'Toddler shows signs of nutritional deficiency such as extreme fatigue or pallor', 'Toddler is on an extremely limited diet of fewer than 10 foods'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-portion-sizes-guide', 'toddler-growth-slowing-eating-less', 'baby-protein-needs-by-age'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Toddler Food and Feeding. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Toddler Nutrition. CDC.gov, 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/toddler-nutrition/index.html' },
  ],
};
