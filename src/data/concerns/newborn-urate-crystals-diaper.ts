import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-urate-crystals-diaper',
  title: 'Orange or Brick Dust in Diaper (Urate Crystals)',
  category: 'medical',
  searchTerms: ['orange in diaper baby', 'brick dust diaper newborn', 'urate crystals baby', 'pink stain diaper', 'orange crystals baby diaper', 'red spots newborn diaper', 'brick dust urine baby', 'uric acid crystals newborn', 'pink diaper newborn', 'salmon colored diaper'],
  quickAnswer: 'Orange, pink, or reddish-brown spots in a newborn\'s diaper (called urate crystals or "brick dust") are common in the first few days of life when the baby is getting small amounts of colostrum. They are not blood and are usually harmless. However, if they persist beyond the first few days, it may indicate the baby needs more fluids or calories.',
  byAge: [
    { ageRange: '0-1 month', context: 'Urate crystals appear as salmon, pink, orange, or reddish-brown spots or powder in the diaper. They are concentrated uric acid that is excreted in small amounts of urine. In the first 2-3 days, when colostrum volume is low and baby is learning to breastfeed, this is common and generally not concerning. As milk supply increases and baby feeds more effectively, the urine becomes more dilute and urate crystals disappear. If urate crystals persist beyond day 3-4, it may indicate the baby is not getting enough milk and needs a feeding evaluation. This is an important early sign that should not be ignored.' },
    { ageRange: '1-3 months', context: 'Urate crystals should not be present once feeding is well established. If you see orange or pink staining in the diaper at this age, it could indicate dehydration from illness, inadequate feeding, or rarely, a metabolic condition. Contact your pediatrician.' },
    { ageRange: '3-6 months', context: 'Urate crystals at this age are unusual and warrant evaluation. Ensure adequate fluid intake through breast milk or formula.' },
    { ageRange: '6-12 months', context: 'Orange diaper staining at this age is not normal for healthy babies getting adequate fluids. Discuss with your pediatrician.' },
  ],
  whenNormal: ['Orange, pink, or reddish spots in the diaper in the first 2-3 days of life', 'Crystals that disappear as milk supply increases and baby feeds more', 'No other symptoms and baby is otherwise well'],
  whenToMention: ['Urate crystals persist beyond day 3-4', 'You are unsure whether the staining is urate crystals or blood', 'Baby also seems excessively sleepy or not feeding well'],
  whenToActNow: ['Persistent urate crystals with poor feeding, weight loss, or fewer than expected wet diapers suggesting inadequate intake and possible dehydration', 'Frank blood in the diaper (which looks different from urate crystals and requires evaluation)'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding Assessment. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Urate Crystals in Neonates. Pediatrics.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
  relatedConcernSlugs: ['newborn-adequate-wet-diapers', 'newborn-weight-loss-first-week', 'blood-in-diaper-newborn'],
};
