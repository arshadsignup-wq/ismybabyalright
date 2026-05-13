import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bottle-nipple-flow-concerns',
  title: 'Choosing the Right Bottle Nipple Flow',
  category: 'feeding',
  searchTerms: [
    'bottle nipple flow rate',
    'when to change nipple flow',
    'baby frustrated with slow nipple',
    'baby choking on bottle nipple',
    'nipple flow too fast baby',
    'nipple flow too slow baby',
    'bottle nipple size guide',
    'level 1 vs level 2 nipple',
    'baby gulping from bottle',
  ],
  quickAnswer:
    'The right nipple flow rate depends on your baby\'s feeding cues, not strictly on their age. A flow that is too slow can frustrate your baby and cause excessive air swallowing, while a flow that is too fast can cause choking, gulping, or overfeeding. Watch your baby rather than following age labels on packaging, as every baby\'s needs are different.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Most newborns do well with a slow-flow or level 1 nipple. You should see a rhythmic suck-swallow-breathe pattern with occasional short pauses. If your baby is getting frustrated, pulling away, or taking more than 30 minutes to finish a feeding, the flow may be too slow. If your baby is coughing, sputtering, or milk is leaking from the corners of their mouth, the flow is likely too fast.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some babies are ready for a medium-flow nipple around this age, but many continue to do well with slow-flow. Signs that your baby might benefit from a faster flow include collapsing the nipple from strong suction, becoming frustrated and crying during feeds, or taking noticeably longer to finish a bottle than before. If feeds are going well, there is no need to move up in nipple size.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies who are also eating solids may have different feeding rhythms. Some prefer a faster flow for bottle feeds while others continue with medium flow. If you are also breastfeeding, staying with a slower flow nipple can help prevent flow preference where your baby becomes frustrated at the breast. As you approach 12 months, begin introducing cups alongside bottles.',
    },
  ],
  whenNormal: [
    'Your baby feeds comfortably, finishes bottles in about 10 to 20 minutes, and seems satisfied',
    'Your baby occasionally coughs during a feed but quickly recovers and continues eating',
    'Your baby needs a different nipple flow level than what the packaging suggests for their age',
    'Your baby takes slightly longer or shorter than before as their feeding patterns evolve',
  ],
  whenToMention: [
    'Your baby consistently chokes, coughs, or sputters during every bottle feed despite trying different nipple sizes',
    'Feedings regularly take more than 30 minutes and your baby seems exhausted afterward',
    'Your baby is swallowing a lot of air during feeds leading to significant discomfort and gas',
    'You are breastfeeding and concerned that bottle nipple flow is affecting your baby\'s latch at the breast',
  ],
  whenToActNow: [
    'Your baby turns blue, has significant breathing difficulty, or stops breathing during feeds',
    'Your baby chokes severely during feeds and cannot clear the milk from their airway',
    'Your baby consistently aspirates milk, shown by coughing fits, watery eyes, and a wet or gurgly voice after every feed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bottle Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Bottle-Feeding.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Amount and Schedule of Baby Formula Feedings. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Amount-and-Schedule-of-Formula-Feedings.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. How Much and How Often to Feed Infant Formula.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/how-much-how-often.html',
    },
  ],
};
