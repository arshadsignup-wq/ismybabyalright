import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-fast-breathing-after-feeding',
  title: 'Rapid Breathing After Feeding in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn breathing fast after feeding',
    'baby rapid breathing after eating',
    'newborn tachypnea post feed',
    'baby panting after bottle',
    'newborn breathing hard after nursing',
    'infant fast breathing after meal',
    'baby out of breath after feeding',
    'newborn breathless after eating',
    'baby breathing quickly post feed',
    'newborn respiratory rate after feeding',
  ],
  quickAnswer:
    'A brief increase in breathing rate after feeding is common in newborns and is usually normal. The full stomach pushes up on the diaphragm, and the effort of feeding can temporarily speed up breathing. However, persistent rapid breathing (over 60 breaths per minute) during or after feeds, especially with other symptoms, should be evaluated by your doctor.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns often breathe faster after feeding because their small stomachs fill up and press against the diaphragm, temporarily reducing lung capacity. Additionally, the physical effort of sucking, swallowing, and breathing in coordination can be tiring for a young baby. A brief period of faster breathing that settles within a few minutes after feeding is generally normal. Normal newborn breathing rate is 30-60 breaths per minute. If rapid breathing persists beyond a few minutes, is consistently over 60 breaths per minute, or is accompanied by other symptoms, medical evaluation is needed.',
    },
    {
      ageRange: '1-3 months',
      context:
        'As your baby becomes a more efficient feeder, post-feeding rapid breathing typically decreases. If your baby consistently breathes rapidly during and after feeds, tires easily during feeds, or takes very long to finish a feed, it could indicate underlying cardiac or respiratory conditions that should be evaluated.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Feeding coordination is well-established by this age, and post-feeding rapid breathing should not be a regular occurrence. If you notice persistent tachypnea after feeds, discuss with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Rapid breathing after feeds is not expected at this age. If it occurs, it may indicate a respiratory or cardiac issue that should be evaluated.',
    },
  ],
  whenNormal: [
    'Brief increase in breathing rate after feeding that settles within a few minutes',
    'Baby is feeding well, gaining weight, and comfortable during feeds',
    'No sweating, color changes, or distress during or after feeding',
    'Breathing rate returns to 30-60 breaths per minute shortly after the feed',
  ],
  whenToMention: [
    'Post-feeding rapid breathing occurs after every feed and takes more than a few minutes to resolve',
    'Baby seems to tire easily during feeds or takes much longer than expected to finish',
    'You notice sweating around the forehead during feeds',
  ],
  whenToActNow: [
    'Persistent breathing rate over 60 breaths per minute that does not settle, especially with nasal flaring, chest retractions, or grunting',
    'Blue or gray color of the lips or skin during or after feeding, or baby refusing to eat due to respiratory difficulty',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. When to Call the Pediatrician: Breathing Issues. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Tachypnea in Neonates. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537354/',
    },
  ],
  relatedConcernSlugs: ['baby-breathing-fast', 'transient-tachypnea-newborn', 'congenital-heart-defect-signs'],
};
