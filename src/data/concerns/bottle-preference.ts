import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bottle-preference',
  title: 'Baby Prefers Bottle Over Breast',
  category: 'feeding',
  searchTerms: [
    'baby prefers bottle over breast',
    'baby likes bottle more than breast',
    'nipple confusion',
    'baby won\'t breastfeed after bottle',
    'bottle preference baby',
    'baby frustrated at breast after bottle',
    'flow preference baby',
    'baby refuses breast wants bottle',
    'breastfeeding after bottle feeding',
    'baby lazy at breast after bottle',
  ],
  quickAnswer:
    'Bottle preference, sometimes called nipple or flow preference, happens when a baby begins to favor the faster, more consistent flow of a bottle over the breast. This is a common and usually reversible situation. It is not about your baby being "lazy"; rather, they have learned that the bottle delivers milk with less effort. Paced bottle feeding and strategic timing of breast and bottle feeds can help reestablish breastfeeding.',
  byAge: [
    {
      ageRange: '0-4 weeks',
      context:
        'Bottle preference is most likely to develop during the early weeks before breastfeeding is well established. If bottles are introduced before breastfeeding is going smoothly, some babies may become frustrated at the breast because the flow is slower and requires more effort. If you need to supplement, try cup feeding, syringe feeding, or paced bottle feeding with a slow-flow nipple to reduce the risk of preference developing.',
    },
    {
      ageRange: '1-3 months',
      context:
        'This is the most common window for bottle preference to emerge, often when parents return to work and bottles are introduced more frequently. If your baby is becoming fussy at the breast, try always breastfeeding first when your baby is calmly hungry rather than very hungry, and have caregivers use paced bottle feeding with a slow-flow nipple. Skin-to-skin before nursing can also help.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies who have developed a bottle preference can often be brought back to the breast with patience and consistency. Offer the breast when your baby is drowsy or just waking up, when their natural sucking instinct is strongest. Reduce bottle use gradually if possible. Some mothers find that a supplemental nursing system, which delivers milk at the breast through a thin tube, can help bridge the gap.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If bottle preference has been established for months, transitioning back to full breastfeeding is more challenging but still possible for some families. At this age, the introduction of solid foods and cups means you have more options for providing nutrition while working on the breast relationship. A lactation consultant can create a personalized plan.',
    },
  ],
  whenNormal: [
    'Your baby takes bottles readily from other caregivers during the day but nurses well when you are together',
    'Your baby initially fusses at the breast but settles and feeds after letdown occurs',
    'Your baby went through a brief period of preference after starting bottles but returned to nursing',
    'Your baby nurses well at night and in the early morning but is less interested during the day',
  ],
  whenToMention: [
    'Your baby consistently cries and refuses the breast but readily takes a bottle from anyone',
    'You are struggling to maintain your milk supply because your baby is nursing less and less',
    'You want to continue breastfeeding but feel you need professional support to overcome the preference',
  ],
  whenToActNow: [
    'Your baby is refusing both breast and bottle and not getting adequate nutrition',
    'Your baby is showing signs of dehydration or significant weight loss',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bottle Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Bottle-Feeding.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
  ],
};
