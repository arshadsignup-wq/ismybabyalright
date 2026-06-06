import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-throwing-food-every-meal',
  title: 'My Baby Throws Food at Every Meal',
  category: 'feeding',
  searchTerms: [
    'baby throwing food',
    'baby drops food on floor',
    'baby throws food every meal',
    'toddler throwing food',
    'baby won\'t stop throwing food',
    'baby food throwing phase',
    'baby plays with food instead of eating',
    'how to stop baby throwing food',
    'baby dumps food off tray',
    'baby food on the floor constantly',
  ],
  quickAnswer:
    'Food throwing is an extremely common and developmentally normal behavior in babies and toddlers. It is often related to exploring cause and effect, signaling fullness, or testing boundaries. While frustrating, it is not typically a sign of a feeding problem and usually improves with consistent, calm responses.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies this age are not eating solids and food throwing is not applicable at this stage.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Babies just starting solids may bat at the spoon or knock food off their tray as they develop hand coordination. This is exploratory behavior and not intentional food throwing. It is part of learning about objects and how they move.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Food throwing peaks as babies discover cause and effect. They are fascinated by watching food fall and hearing it hit the floor. They may also throw food when they are full or tired. Offer small portions at a time and watch for signs of fullness. Avoid making a big reaction, as babies love the response.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Food throwing continues as babies refine their understanding of gravity and reactions. They may throw food when bored, full, or overwhelmed. Try offering only two or three pieces of food at a time. Calmly say "food stays on the tray" and remove the meal if throwing persists. Keep mealtimes to 15-20 minutes.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may throw food as boundary testing or to communicate that they are done eating. Teach the sign or word for "all done" and offer a designated place to put unwanted food. Consistent calm responses work best. If your toddler throws food at every single meal and also refuses to eat much, discuss it with your pediatrician.',
    },
  ],
  whenNormal: [
    'Baby throws food occasionally, especially when full or exploring',
    'Baby eats some food before throwing the rest',
    'Baby seems fascinated by watching food fall rather than being upset',
    'Food throwing decreases when you offer smaller portions',
  ],
  whenToMention: [
    'Baby throws all food at every meal and is not eating enough to gain weight',
    'Baby seems distressed or upset during meals rather than playful',
    'Food throwing is accompanied by gagging, vomiting, or extreme food refusal',
  ],
  whenToActNow: [
    'Baby is losing weight or showing signs of malnutrition because they refuse to eat anything',
    'Baby seems to be in pain during meals and throws food in distress',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-not-interested-in-food', 'picky-eating', 'toddler-meal-skipping-frequent'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toddler Food Jags and Throwing Food. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Mealtime Behaviors in Toddlers. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/mealtime/index.html',
    },
  ],
};
