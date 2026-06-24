import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nipple-confusion-bottle-breast',
  title: 'Nipple Confusion - Switching Between Bottle and Breast',
  category: 'feeding',
  searchTerms: [
    'nipple confusion baby',
    'baby won\'t take breast after bottle',
    'nipple confusion bottle breastfeeding',
    'baby prefers bottle over breast',
    'when to introduce bottle breastfed baby',
    'flow preference baby',
    'baby confused between breast and bottle',
    'paced bottle feeding nipple confusion',
    'breast to bottle transition',
    'bottle refusal breastfed baby',
  ],
  quickAnswer:
    'What is commonly called "nipple confusion" is more accurately described as "flow preference." Babies do not get confused between breast and bottle; rather, some develop a preference for the faster, more consistent flow of a bottle, making them fussy or resistant at the breast. This is more common when bottles are introduced in the first 2-4 weeks before breastfeeding is well established. Paced bottle feeding (holding the bottle horizontally and pausing to mimic the breast) and using slow-flow nipples can help prevent and address this issue.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'This is the most sensitive period for establishing breastfeeding. If supplementation with a bottle is medically necessary (for weight loss, low blood sugar, or maternal separation), using a slow-flow nipple and paced feeding technique is important. Some lactation consultants recommend alternative feeding methods during this period, such as cup feeding, syringe feeding, or supplemental nursing systems (SNS), to avoid introducing a bottle altogether. However, many babies do transition between breast and bottle without problems, especially if the breast is always offered first.',
    },
    {
      ageRange: '2-6 weeks',
      context:
        'If you plan to combine breast and bottle feeding, many experts suggest waiting until 3-4 weeks (when breastfeeding is better established) to introduce a bottle. However, waiting too long (past 6-8 weeks) can make some babies resistant to accepting a bottle at all. When introducing a bottle, use slow-flow nipples, practice paced feeding, have someone other than the breastfeeding parent offer the bottle, and always offer the breast first. If your baby starts showing preference for the bottle (becoming fussy, pulling off the breast, or taking longer to latch), temporarily reduce or eliminate bottle feedings and increase breast time.',
    },
    {
      ageRange: '6 weeks - 6 months',
      context:
        'By 6 weeks, most breastfeeding relationships are well established, and combining breast and bottle feeding is generally easier. If flow preference has developed, strategies to address it include: only using the slowest flow nipple regardless of baby\'s age, paced bottle feeding with frequent pauses, offering the breast when baby is drowsy or just waking (less likely to be impatient), breast compressions during nursing to increase flow, and ensuring adequate milk supply. A lactation consultant can help troubleshoot persistent breast refusal. Some flow preference resolves on its own as the baby matures.',
    },
  ],
  whenNormal: [
    'Your baby transitions between breast and bottle without difficulty when bottles are introduced after breastfeeding is established.',
    'Your baby has occasional fussy feeding sessions but generally nurses well.',
    'Your baby initially resists a new bottle nipple but adjusts within a few feedings.',
  ],
  whenToMention: [
    'Your baby consistently refuses the breast after bottle feedings have been introduced.',
    'Your baby is becoming increasingly frustrated at the breast and your milk supply is decreasing.',
    'You need to combine breast and bottle feeding and want guidance on the best approach.',
    'Your baby refuses all bottles and you need to return to work or separate from your baby.',
  ],
  whenToActNow: [
    'Your baby is refusing both breast and bottle and is not getting adequate nutrition (fewer than 6 wet diapers per day, losing weight, showing signs of dehydration).',
    'Your baby is losing weight because of feeding difficulties regardless of the method.',
    'Your newborn has not regained birth weight by 2 weeks and feeding struggles are contributing.',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'bottle-preference',
    'refusing-breast',
    'how-much-should-baby-eat',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Introducing a Bottle to a Breastfed Baby.',
      url: 'https://www.llli.org/breastfeeding-info/bottles/',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Nipple Confusion and Breastfeeding Duration. Journal of Human Lactation, 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28731828/',
    },
  ],
};
