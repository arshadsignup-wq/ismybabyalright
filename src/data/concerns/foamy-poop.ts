import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'foamy-poop',
  title: 'Baby Foamy or Frothy Poop',
  category: 'digestive',
  searchTerms: [
    'baby foamy poop',
    'baby frothy poop',
    'baby bubbly poop',
    'baby poop has bubbles',
    'foamy stool baby',
    'baby poop looks like foam',
    'frothy green poop baby',
    'baby poop fizzy',
    'breastfed baby foamy poop',
    'baby foamy diarrhea',
  ],
  quickAnswer:
    'Foamy or frothy poop in babies is usually caused by excess gas in the stool and is most commonly seen in breastfed babies who may be getting more foremilk (the thinner, lactose-rich milk at the beginning of a feed) relative to hindmilk. It can also occur with a mild stomach bug or a food sensitivity. In most cases, it is not a serious concern and resolves with simple feeding adjustments.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Foamy, frothy poop in young breastfed babies is most often related to a foremilk-hindmilk imbalance. If your baby is not draining the breast fully before switching sides, they may get more lactose-rich foremilk, which can ferment in the gut and produce gas and frothy stools. Try allowing your baby to finish one breast before offering the other. Foamy stools can also appear green.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Foamy stools may continue if the foremilk-hindmilk balance issue persists, but many babies outgrow this as feeding patterns regulate. If foamy stools are accompanied by significant gas, fussiness during or after feeds, and slow weight gain, consulting a lactation specialist can be very helpful. In formula-fed babies, foamy stools can sometimes indicate a sensitivity to the formula.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solid foods, foamy stools become less common. If they do occur, they may be related to a specific food that causes gas or mild digestive upset. A stomach bug can also produce foamy, loose stools temporarily. If foamy stools are a new development that persists, mention it at your next pediatrician visit.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Foamy stools in toddlers are less common and most often related to a viral illness causing temporary diarrhea. Lactose intolerance, though uncommon in children under 3, can cause foamy, gassy stools after consuming dairy. If your toddler has persistent foamy stools, especially with other digestive symptoms, discuss it with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your breastfed baby has occasional frothy stools but is feeding well and gaining weight normally',
    'Foamy stools appear during a mild cold or stomach bug and resolve within a few days',
    'Your baby has some frothy stools along with normal-looking stools',
    'Foamy stools improve when you adjust breastfeeding technique to let your baby fully drain one breast before switching',
  ],
  whenToMention: [
    'Your breastfed baby consistently has foamy green stools and seems fussy or uncomfortable during feeds',
    'Foamy stools are accompanied by poor weight gain or slow growth',
    'Your baby has foamy, mucusy stools that persist for more than a week',
    'You suspect a food allergy or intolerance may be causing the foamy stools',
  ],
  whenToActNow: [
    'Foamy, watery stools are very frequent and your baby shows signs of dehydration such as fewer wet diapers, no tears, dry mouth, or lethargy',
    'Foamy stools contain blood or significant mucus along with fever or vomiting',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Many Colors of Poop. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Many-Colors-of-Poop.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding: Making Sure Your Baby Is Getting Enough Milk. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Making-Sure-Your-Baby-is-Getting-Enough-Milk.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Breastfeeding: Frequently Asked Questions.',
      url: 'https://www.cdc.gov/breastfeeding/faq/index.htm',
    },
  ],
};
