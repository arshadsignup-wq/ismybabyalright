import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-portion-sizes-guide',
  title: 'How Much Should My Toddler Eat at Each Meal?',
  category: 'feeding',
  searchTerms: ['toddler portion size', 'how much should toddler eat', 'toddler serving size', 'toddler food amount', 'toddler eating too little', 'toddler meal size', 'how much food 1 year old', 'toddler portion guide', 'toddler food quantity', 'serving size baby toddler'],
  quickAnswer: 'Toddler portions are much smaller than adult servings, typically about one-quarter of an adult portion. A general guide is 1 tablespoon of each food per year of age at each meal. For a 1-year-old, that means about 1 tablespoon each of protein, grain, fruit, and vegetable. Toddlers are generally good at self-regulating intake, so offer appropriate portions and let your child decide how much to eat. It is normal for intake to vary significantly from day to day.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies drink about 2-4 oz of breast milk or formula per feeding, increasing to 4-6 oz by 3 months. Feed on demand, typically every 2-3 hours.' },
    { ageRange: '4-6 months', context: 'When starting solids around 6 months, begin with 1-2 tablespoons of food once or twice daily. This is for practice, not nutrition. Breast milk or formula remains the primary source of calories.' },
    { ageRange: '6-9 months', context: 'Gradually increase to about 2-4 tablespoons per meal, 2-3 times daily, plus breast milk or formula. Follow baby\'s hunger and fullness cues rather than focusing on specific amounts.' },
    { ageRange: '9-12 months', context: 'Baby may eat 3-4 tablespoons of each food at meals, with 3 meals and 1-2 snacks daily. Total solid food intake increases as breast milk or formula decreases slightly. Baby should still be drinking 24-32 oz of breast milk or formula daily.' },
    { ageRange: '12-24 months', context: 'Typical portions: grains (1/4 slice bread, 2-3 tablespoons cereal or pasta), protein (1-2 tablespoons meat, 1/2 egg), fruit (2-3 tablespoons or small pieces), vegetables (2-3 tablespoons), dairy (1/2 cup milk, 1/2 oz cheese). Offer 3 meals and 2-3 snacks. Total daily intake averages 1,000-1,200 calories, but daily variation is completely normal.' },
  ],
  whenNormal: ['Toddler eats varying amounts from meal to meal and day to day', 'Toddler sometimes eats a lot at one meal and barely touches the next', 'Toddler is growing steadily along their curve despite intake fluctuations'],
  whenToMention: ['Toddler consistently eats very little at every meal for more than a week', 'You are concerned the portions seem extremely small even for a toddler', 'Toddler insists on very large portions and seems to overeat consistently', 'Toddler is not growing well despite what seems like adequate food offering'],
  whenToActNow: ['Toddler has stopped eating almost entirely for more than 2-3 days', 'Toddler is losing weight or showing signs of dehydration', 'Toddler has sudden changes in appetite accompanied by other symptoms like fever or lethargy'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-meal-planning-balanced', 'baby-hunger-fullness-cues', 'responsive-feeding-approach'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Serving Sizes for Toddlers. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. How Much and How Often to Feed. CDC.gov, 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/how-much-and-how-often.html' },
  ],
};
