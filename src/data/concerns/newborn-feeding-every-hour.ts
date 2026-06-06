import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-feeding-every-hour',
  title: 'Very Frequent Feeding (Every Hour) in Newborns',
  category: 'feeding',
  searchTerms: ['baby feeding every hour', 'newborn eating every hour', 'baby always hungry', 'newborn constant hunger', 'baby wanting to eat all the time', 'hourly feeding baby', 'newborn not satisfied after feeding', 'baby hungry every hour normal', 'frequent feeding too much', 'is hourly feeding normal'],
  quickAnswer: 'Feeding every hour can be normal during cluster feeding periods, growth spurts, or in the early days of establishing breastfeeding. However, if your baby is feeding every hour around the clock and not gaining weight well, it may indicate ineffective feeding or low milk supply that needs evaluation. Check that your baby is producing adequate wet and dirty diapers.',
  byAge: [
    { ageRange: '0-1 month', context: 'In the first weeks, feeding every 1-2 hours is within the range of normal, especially for breastfed babies. Newborn stomachs are tiny (marble-sized at birth, walnut-sized by week 2), so they need frequent small meals. Cluster feeding in the evening with hourly feeds is common. However, if your baby feeds every hour 24 hours a day without any longer breaks, is difficult to settle after feeds, and weight gain is poor, this could indicate a latch issue, tongue tie, or low milk supply. A lactation consultation can help evaluate feeding effectiveness.' },
    { ageRange: '1-3 months', context: 'Feeding frequency typically decreases to every 2-3 hours during this period. Occasional periods of more frequent feeding (growth spurts) are normal. If your baby continues to feed every hour consistently and weight gain is a concern, further evaluation is needed.' },
    { ageRange: '3-6 months', context: 'Feeding every hour at this age is unusual and may indicate hunger from developmental changes, growth spurts, or readiness for solid foods (closer to 6 months). Discuss with your pediatrician.' },
    { ageRange: '6-12 months', context: 'With solid foods supplementing milk feeds, constant hourly feeding should not be necessary. Comfort nursing may continue in breastfed babies but should not interfere with adequate nutrition from solids and milk.' },
  ],
  whenNormal: ['Hourly feeding during a defined cluster feeding period (usually evening) with longer breaks at other times', 'During a growth spurt that lasts 2-3 days then resolves', 'Baby is gaining weight well and producing adequate wet and dirty diapers', 'Baby is content between feeds'],
  whenToMention: ['Hourly feeding persists around the clock for more than a few days', 'Baby never seems satisfied despite frequent feeding', 'Weight gain is slower than expected'],
  whenToActNow: ['Poor weight gain combined with constant feeding and signs of dehydration', 'Baby is lethargic, increasingly difficult to rouse, or refusing to feed'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Amount and Schedule of Feedings. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Amount-and-Schedule-of-Feedings.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Breastfeeding the Newborn. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK549825/' },
  ],
  relatedConcernSlugs: ['newborn-cluster-feeding-normal', 'newborn-not-regaining-birth-weight', 'newborn-tongue-tie-feeding-issues'],
};
