import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'refusing-solids',
  title: 'Baby Refusing Solid Food',
  category: 'feeding',
  searchTerms: [
    'baby refusing solids',
    'baby won\'t eat solid food',
    'baby spits out food',
    'baby turns head away from food',
    'baby refuses purees',
    'baby not interested in food',
    '6 month old won\'t eat solids',
    '7 month old refusing food',
    'baby clamps mouth shut when feeding',
    'baby cries when offered solids',
  ],
  quickAnswer:
    'It is very common for babies to refuse solid food when they are first introduced to it, and this is usually not a cause for concern. Most babies need 10 to 15 exposures to a new food before they accept it. As long as your baby is still getting adequate breast milk or formula and growing well, a slow start with solids is perfectly normal.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'Many babies simply are not developmentally ready for solids before 6 months. Signs of readiness include sitting with minimal support, showing interest in food, and loss of the tongue-thrust reflex. If your baby is pushing food out with their tongue, they may just need a few more weeks before trying again.',
    },
    {
      ageRange: '6-8 months',
      context:
        'This is the most common window for starting solids, but some babies take longer to warm up to it. It is normal for babies to eat only a teaspoon or two at first. Keep offering a variety of tastes and textures without pressure, and follow your baby\'s cues. The primary source of nutrition is still breast milk or formula at this stage.',
    },
    {
      ageRange: '8-10 months',
      context:
        'By this age most babies are more interested in food, but some remain cautious eaters. Try offering soft finger foods so they can explore texture and self-feed. Babies who are allowed to play with food and eat at their own pace often develop better eating habits long-term. Avoid distractions like screens during mealtimes.',
    },
    {
      ageRange: '10-12 months',
      context:
        'If your baby is still largely refusing solids by 10 months, it is worth discussing with your pediatrician. However, many babies in this range are simply picky about texture rather than truly refusing. Try different consistencies: some babies dislike purees but enjoy small soft pieces they can pick up themselves.',
    },
    {
      ageRange: '12 months+',
      context:
        'After 12 months, solid food becomes a more important source of nutrition, especially iron and zinc. If your toddler is still refusing most solids, a feeding evaluation can be helpful. In many cases, toddler food refusal is a normal expression of independence rather than a medical issue.',
    },
  ],
  whenNormal: [
    'Your baby turns away or closes their mouth after a few bites, as they are learning their appetite cues',
    'Your baby refuses a new food but happily eats foods they already know',
    'Your baby is under 6 months and pushes food out with their tongue, which suggests they are not quite ready',
    'Your baby is growing well and meeting milestones even though they eat very little solid food',
    'Your baby goes through a few days of refusing solids during teething or illness',
  ],
  whenToMention: [
    'Your baby is older than 8 months and shows no interest in any solid food despite regular offerings',
    'Your baby gags or vomits with every attempt at solids, even very smooth purees',
    'Your baby seems uncomfortable or distressed during mealtimes beyond normal fussiness',
    'Your baby\'s weight gain has slowed significantly since starting or attempting solids',
  ],
  whenToActNow: [
    'Your baby is losing weight or has crossed two percentile lines on their growth chart',
    'Your baby chokes (not just gags) during feeding and has difficulty breathing',
    'Your baby is over 12 months and refuses all food and liquids and shows signs of dehydration',
  ],
  relatedMilestones: [
    'fine-motor',
    'feeding',
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
        'World Health Organization. Complementary feeding: report of the global consultation.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
  ],
};
