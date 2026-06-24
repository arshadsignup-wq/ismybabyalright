import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'infant-feeding-habits-obesity-prevention',
  title: 'Infant Feeding Habits and Childhood Obesity Prevention',
  category: 'feeding',
  searchTerms: [
    'baby eating too much obesity',
    'infant feeding obesity prevention',
    'overfeeding baby weight gain',
    'baby too chubby concern',
    'infant obesity risk factors',
    'responsive feeding baby',
    'baby weight gain too fast',
    'preventing childhood obesity start from birth',
    'large baby overweight concern',
    'formula feeding obesity risk',
    'baby food portions how much',
  ],
  quickAnswer:
    'Research shows that feeding practices in the first two years of life can influence long-term obesity risk. Responsive feeding, where caregivers recognize and respond to a baby\'s hunger and fullness cues rather than encouraging them to finish every bottle, is the most evidence-based approach to healthy weight development. Breastfeeding, appropriate timing of solid food introduction (around 6 months), and avoiding the use of food as a reward or comfort tool all support a healthy relationship with food from the start.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'In the first months, focus on feeding on demand and learning your baby\'s hunger and satiety cues. Breastfeeding is associated with a modest reduction in childhood obesity risk, likely because breastfed babies self-regulate intake more effectively. For formula-fed babies, use paced bottle feeding (holding the bottle horizontally, pausing frequently) to prevent overfeeding. Avoid adding cereal to bottles, which overrides satiety cues. Rapid weight gain in the first 4 months is a risk factor for later obesity, but this does not mean you should restrict a hungry baby\'s intake.',
    },
    {
      ageRange: '4-12 months',
      context:
        'Introduce solid foods around 6 months, starting with iron-rich foods and a variety of vegetables, fruits, and proteins. Let your baby set the pace of eating and stop when they show signs of fullness (turning head away, closing mouth, pushing food away). Avoid pressuring your baby to eat "one more bite" or using food as a reward. Research supports offering a wide variety of flavors and textures during this window, as food preferences established now tend to persist. Juice is not recommended; offer water in a cup after 6 months.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers\' appetites are naturally variable, and this is normal. The Division of Responsibility model (parent decides what, when, and where to eat; child decides how much and whether to eat) is supported by research for promoting healthy eating habits. Avoid restricting food or putting toddlers on diets, as this can lead to a preoccupation with food. Limit sugary drinks and highly processed snacks. Family meals and modeling healthy eating are more effective than rules or restrictions in shaping long-term eating behavior.',
    },
  ],
  whenNormal: [
    'Your baby is following their own growth curve consistently, even if it is at a higher percentile.',
    'Your baby shows clear hunger and fullness cues and you are responding to them.',
    'Your baby is gaining weight at a rate appropriate for their age, as confirmed by your pediatrician.',
  ],
  whenToMention: [
    'Your baby is crossing upward through two or more weight percentile lines rapidly.',
    'You are concerned about your baby\'s weight and want guidance on responsive feeding practices.',
    'Your baby seems constantly hungry and never satisfied, or conversely, shows no interest in eating.',
    'You have a family history of obesity and want to discuss evidence-based prevention strategies.',
  ],
  whenToActNow: [
    'Your baby is failing to gain weight or is losing weight unexpectedly.',
    'Your baby has signs of a feeding disorder: gagging on all textures, extreme food refusal, or distress during feeding.',
    'You are restricting your baby\'s intake to the point where they are showing signs of malnutrition or hunger.',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'how-much-should-baby-eat',
    'gut-microbiome-viral-infection-protection',
    'low-income-baby-nutrition-wic-assistance',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Prevention of Childhood Obesity Through Evidence-Based Guidance. Pediatrics, 2019.',
      url: 'https://publications.aap.org/pediatrics/article/143/1/e20183775/37237/The-Role-of-the-Pediatrician-in-Primary-Prevention',
    },
    {
      org: 'CDC',
      citation:
        'CDC. Childhood Obesity Causes and Consequences.',
      url: 'https://www.cdc.gov/obesity/childhood/causes.html',
    },
    {
      org: 'WHO',
      citation:
        'WHO. Report of the Commission on Ending Childhood Obesity, 2016.',
      url: 'https://www.who.int/publications/i/item/9789241510066',
    },
  ],
};
