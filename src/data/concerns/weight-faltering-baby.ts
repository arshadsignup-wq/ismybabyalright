import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'weight-faltering-baby',
  title: 'Weight Faltering',
  category: 'feeding',
  searchTerms: [
    'weight faltering baby',
    'baby not gaining enough weight',
    'baby weight stalling',
    'infant poor weight gain',
    'baby weight gain plateau',
    'baby underweight for age',
    'faltering growth baby',
    'baby weight gain slowed down',
  ],
  quickAnswer:
    'Weight faltering (previously called "failure to thrive") describes a pattern where a baby\'s weight gain is significantly slower than expected, causing them to fall below the 2nd percentile for weight or drop across two or more major percentile lines on the growth chart. It is a description of a growth pattern, not a diagnosis. The most common cause in infants is inadequate caloric intake  -  the baby is simply not getting enough calories, whether from insufficient milk supply, feeding difficulties, or issues with solid food intake. Medical causes such as malabsorption, metabolic conditions, or chronic illness are less common but should be considered.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Normal weight gain at this age is approximately 5-7 ounces (150-200 grams) per week. If your baby is gaining significantly less, the most common cause is a feeding issue  -  whether insufficient breast milk supply, poor latch, inefficient suck, or incorrect formula preparation. A lactation consultant can evaluate breastfeeding technique and milk transfer. Your pediatrician will check for medical causes such as oral abnormalities (tongue tie), reflux, or heart conditions that increase caloric needs.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Expected weight gain slows slightly to about 4-5 ounces (120-150 grams) per week. Weight faltering identified at this age may represent a continuation of early feeding issues or newly developing problems. If your baby seems satisfied after feedings but is not gaining adequately, calorie density of feeds may need to be increased (fortifying breast milk or switching to a higher-calorie formula). A feeding evaluation can identify subtle problems with swallowing or oral motor function.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Weight gain expectations continue to decrease (about 3-4 ounces per week at 6-9 months and 2-3 ounces per week at 9-12 months). As solids are introduced, some babies may not consume enough calories from the combination of milk and food. Picky eating, texture aversion, or gagging on solids can limit caloric intake. If weight faltering persists at this age, your doctor may check for celiac disease, food protein allergies, or other malabsorption conditions that interfere with nutrient absorption.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers are notoriously unpredictable eaters, and some weight plateau around the transition from baby food to table food is common. However, continued weight faltering in a toddler needs thorough evaluation. Consider whether your toddler is drinking too much milk (displacing solid food calories), has undiagnosed food allergies, or has a behavioral feeding problem. A pediatric dietitian can be extremely helpful in creating a calorie-dense meal plan. Underlying conditions such as celiac disease and inflammatory bowel disease should be considered if basic nutritional interventions do not improve weight gain.',
    },
  ],
  whenNormal: [
    'Your baby\'s weight gain slowed slightly around 4-6 months but is still tracking along a consistent, albeit lower, percentile  -  growth velocity normally decreases with age.',
    'Your toddler\'s weight plateaued for a few weeks around 12-15 months when appetite decreased and activity increased  -  this common transition is usually temporary.',
    'Your baby dropped from a higher to a lower percentile in the first 3-6 months but is now growing consistently  -  this "channeling" is normal.',
    'Your baby was ill for a week and weight gain stalled temporarily but resumed afterward.',
  ],
  whenToMention: [
    'Your baby\'s weight has crossed down through two or more percentile lines on the growth chart.',
    'Your baby is below the 2nd percentile for weight and has been consistently low or declining.',
    'You are concerned your baby is not eating enough  -  feedings are very short, your baby seems unsatisfied, or diaper output seems low.',
  ],
  whenToActNow: [
    'Your baby is losing weight (not just gaining slowly, but actually declining) at any age  -  urgent medical evaluation is needed.',
    'Your baby has weight faltering along with persistent vomiting, bloody stools, chronic diarrhea, or signs of dehydration  -  these suggest a medical cause requiring prompt investigation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Slow Weight Gain in Infants and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Slow-Weight-Gain-in-Infants-and-Children.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Child Growth Standards.',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Failure to Thrive. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459285/',
    },
  ],
};
