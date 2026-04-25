import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-interested-in-food',
  title: 'My Baby Isn\'t Interested in Food',
  category: 'feeding',
  searchTerms: [
    'baby not interested in food',
    'baby doesn\'t want to eat',
    'baby ignores food on tray',
    'baby plays with food but won\'t eat',
    'baby has no appetite',
    'baby won\'t open mouth for food',
    'baby uninterested in solids',
    'baby prefers milk over food',
    'baby lost interest in eating',
    'baby won\'t try new foods',
  ],
  quickAnswer:
    'Many babies show limited interest in food when solids are first introduced, and this is usually perfectly normal. Babies develop at different rates, and some take weeks or even months to become enthusiastic eaters. As long as your baby is still getting adequate milk and growing well, a slow start with food is not a cause for concern.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'Most babies are not truly ready for solids until around 6 months. If your baby seems uninterested before this age, they may simply not be developmentally ready. Signs of readiness include sitting with support, reaching for food, opening their mouth when food is offered, and losing the tongue-thrust reflex. There is no rush. Waiting until your baby shows clear readiness signs often leads to a smoother introduction to solids.',
    },
    {
      ageRange: '6-8 months',
      context:
        'Even babies who are developmentally ready may not be enthusiastic about food right away. At this stage, the goal is exploration and exposure rather than nutrition. Offer small amounts of age-appropriate foods at family mealtimes without pressure. Let your baby touch, smell, and play with food. Some babies prefer to self-feed with soft finger foods rather than being spoon-fed. Keep milk feeds as the primary source of nutrition.',
    },
    {
      ageRange: '8-12 months',
      context:
        'By 8 to 9 months, most babies are showing more interest in food, though the amount they eat can vary widely from day to day. If your baby is still largely uninterested, consider whether they may be filling up on milk before mealtimes. Try offering solids about 30 minutes to an hour before a milk feed so they come to the table with some appetite. Eating together as a family can also encourage interest as babies learn by watching others eat.',
    },
    {
      ageRange: '12-18 months',
      context:
        'After 12 months, solid food should become a more significant part of your child\'s diet. If your toddler remains largely uninterested in food and prefers milk, discuss this with your pediatrician. Excessive milk intake, particularly cow\'s milk after 12 months, can reduce appetite for solids and contribute to iron deficiency. Limiting milk to 16 to 24 ounces per day and offering meals and snacks on a regular schedule can help.',
    },
  ],
  whenNormal: [
    'Your baby tastes or plays with food but does not eat much at each meal',
    'Your baby goes through days of eating well followed by days of eating very little',
    'Your baby prefers certain textures or flavors and rejects others',
    'Your baby is growing well and meeting developmental milestones despite eating small amounts of solid food',
  ],
  whenToMention: [
    'Your baby is older than 9 months and shows no interest in any solid food despite regular exposure',
    'Your baby seems to have difficulty with textures, gagging on anything that is not perfectly smooth',
    'Your baby\'s weight gain has slowed or plateaued',
  ],
  whenToActNow: [
    'Your baby is losing weight or shows signs of nutritional deficiency such as extreme pallor or lethargy',
    'Your baby refuses both solids and milk and shows signs of dehydration',
  ],
  relatedMilestones: [
    'feeding',
    'fine-motor',
    'starting-solids',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. When, What, and How to Introduce Solid Foods.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/when-to-introduce-solid-foods.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding: Model Chapter for Textbooks.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
  ],
};
