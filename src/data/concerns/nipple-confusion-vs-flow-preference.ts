import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nipple-confusion-vs-flow-preference',
  title: 'My Baby Won\'t Switch Between Breast and Bottle (Nipple Confusion)',
  category: 'feeding',
  searchTerms: [
    'nipple confusion baby',
    'baby refuses breast after bottle',
    'bottle preference breastfed baby',
    'baby won\'t take bottle after breast',
    'nipple confusion myth',
    'flow preference baby',
    'baby prefers bottle over breast',
    'baby won\'t latch after bottle',
    'switching between breast and bottle',
    'breast refusal after bottle',
  ],
  quickAnswer:
    'What is commonly called "nipple confusion" is more accurately described as flow preference. Babies are not confused — they can tell the difference between breast and bottle. Some develop a preference for the faster, more consistent flow of a bottle and become frustrated at the breast. Others, accustomed to the breast, refuse a bottle. This is common and does not mean you cannot combo-feed. Strategies like paced bottle feeding, slow-flow nipples, and timing can help babies accept both.',
  byAge: [
    {
      ageRange: '0-4 weeks',
      context:
        'In the early weeks, many lactation consultants recommend avoiding bottles until breastfeeding is well-established (usually around 3-4 weeks), because newborns are still learning to coordinate the different oral mechanics of breast and bottle. However, if supplementation is medically necessary, it should not be delayed for fear of nipple confusion — a well-fed baby is the priority. If you need to supplement, ask about paced bottle feeding technique.',
    },
    {
      ageRange: '1-3 months',
      context:
        'This is the most common window for bottle introduction for breastfed babies. If your baby refuses the bottle: try having someone other than the nursing parent offer it, try different bottle brands and nipple shapes, try offering when baby is calm but not starving, and be patient. If your baby refuses the breast after getting bottles: ensure you are using slow-flow nipples, practice paced feeding (holding bottle horizontally, pausing frequently), and offer the breast first when baby is hungry but not frantic.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If a bottle-fed baby is refusing the breast, a "bottle wean" can sometimes help — gradually offering the breast more and the bottle less, with lots of skin-to-skin contact. If a breastfed baby is refusing the bottle as a parent returns to work, try different nipple types, offer the bottle in a different position than breastfeeding, and consider cup feeding or syringe feeding as an alternative if bottles are completely rejected.',
    },
    {
      ageRange: '6 months+',
      context:
        'By 6 months, you can also introduce an open cup or straw cup, which may be easier for some babies than switching between breast and bottle. The urgency of the bottle issue decreases as solid foods are introduced. Many babies who refused bottles will happily accept cups.',
    },
  ],
  whenNormal: [
    'Your baby has a mild preference for one feeding method but will accept the other with patience',
    'Your newborn takes a few feeds to get used to a new nipple type — an adjustment period is normal',
    'Your baby accepts bottles from others but prefers to breastfeed with the nursing parent',
  ],
  whenToMention: [
    'Your baby completely refuses all bottles and you need to return to work or have another reason bottles are necessary',
    'Your baby has stopped latching after bottle introduction and you want to continue breastfeeding',
    'Your baby is not getting enough intake from either method and weight gain is affected',
    'You are feeling stressed and overwhelmed trying to manage the transition',
  ],
  whenToActNow: [
    'Your baby is refusing both breast and bottle and is showing signs of dehydration — fewer wet diapers, dry mouth, sunken fontanelle — seek immediate medical care',
    'Your baby is losing weight or not gaining weight because of feeding refusal — contact your pediatrician promptly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'paced-bottle-feeding-guide',
    'high-lipase-breast-milk',
    'posterior-tongue-tie',
  ],
  sources: [
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Bottles and Other Tools.',
      url: 'https://llli.org/breastfeeding-info/bottles/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bottle Feeding Basics. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Bottle-Feeding-How-Its-Done.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Nipple Confusion and Breastfeeding. Journal of Human Lactation, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30457907/',
    },
  ],
};
