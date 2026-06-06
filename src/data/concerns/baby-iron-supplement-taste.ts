import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-iron-supplement-taste',
  title: 'My Baby Refuses Iron Supplements',
  category: 'feeding',
  searchTerms: [
    'baby refuses iron supplement',
    'baby spits out iron drops',
    'iron drops taste terrible baby',
    'how to give baby iron drops',
    'baby won\'t take iron supplement',
    'baby hates iron liquid',
    'iron supplement stains teeth baby',
    'iron drops constipation baby',
    'tricks for iron drops baby',
    'best iron supplement taste baby',
  ],
  quickAnswer:
    'Iron supplements can have a strong metallic taste that many babies dislike. Mixing the supplement with a small amount of vitamin C-rich juice or fruit puree can improve the taste and enhance iron absorption. Using a syringe to place drops at the back of the cheek can help bypass the taste buds. Iron supplements may stain teeth, so brush or wipe gums after giving them.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Most full-term babies do not need iron supplements. Premature babies or those with low birth weight may be prescribed iron drops by their pediatrician. Use a syringe to deliver drops to the inside of the cheek during feeding.',
    },
    {
      ageRange: '4-6 months',
      context: 'If your pediatrician has recommended iron supplements, try mixing the drops with a small amount of pureed fruit or expressed breast milk. Vitamin C in fruit helps both the taste and absorption. Do not mix iron into a full bottle as baby may not finish it.',
    },
    {
      ageRange: '6-9 months',
      context: 'Iron drops can be mixed into a small portion of fruit puree. Offer it at the beginning of a meal when baby is most hungry. Some parents find success giving iron drops right before nursing. If iron causes constipation, discuss with your pediatrician.',
    },
    {
      ageRange: '9-12 months',
      context: 'Continue strategies to mask the taste. Mix iron drops with a small amount of applesauce or orange juice. Focus on also increasing dietary iron through fortified cereals, meats, and beans to reduce reliance on supplements.',
    },
    {
      ageRange: '12-24 months',
      context: 'If your toddler still needs iron supplementation, chewable iron vitamins may be an option depending on their chewing ability. Discuss with your pediatrician. Focus on iron-rich foods and pairing them with vitamin C for better absorption.',
    },
  ],
  whenNormal: [
    'Baby makes a face but swallows the iron supplement',
    'Baby accepts iron mixed into a small amount of food or juice',
    'Baby\'s stools become darker, which is a normal side effect of iron',
  ],
  whenToMention: [
    'Baby absolutely refuses iron supplements despite multiple strategies',
    'Baby is constipated from iron supplements',
    'You are concerned about iron staining on baby\'s teeth',
  ],
  whenToActNow: [
    'Baby has signs of severe iron deficiency such as extreme pallor, rapid heartbeat, or extreme fatigue',
    'Baby has accidentally consumed a large amount of iron supplement',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['iron-rich-foods-for-baby', 'baby-vitamin-d-drops-taste', 'toddler-iron-deficiency-risk'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Iron Supplementation in Infants. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Iron-Needs-of-Babies-and-Children.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Iron: Fact Sheet for Health Professionals. Office of Dietary Supplements, 2023.',
      url: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    },
  ],
};
