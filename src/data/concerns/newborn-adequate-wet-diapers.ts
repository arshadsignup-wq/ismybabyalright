import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-adequate-wet-diapers',
  title: 'How Many Wet Diapers Are Enough',
  category: 'medical',
  searchTerms: ['how many wet diapers newborn', 'baby wet diaper count', 'newborn adequate wet diapers', 'baby not enough wet diapers', 'how many wet diapers per day', 'newborn diaper output', 'baby dehydration wet diapers', 'newborn urine output normal', 'wet diaper guideline baby', 'is baby getting enough milk diapers'],
  quickAnswer: 'In the first few days, expect at least one wet diaper per day of life (1 on day 1, 2 on day 2, etc.). By day 4-5, your baby should have at least 6 wet diapers per day. This is one of the best indicators that your baby is getting enough milk. Modern diapers are very absorbent, so check by feeling the weight of the diaper.',
  byAge: [
    { ageRange: '0-1 month', context: 'Tracking wet diapers is one of the most reliable ways to assess whether your newborn is getting adequate nutrition. The general guideline is: Day 1: at least 1 wet diaper; Day 2: at least 2; Day 3: at least 3; Day 4 and beyond: at least 6 wet diapers per day. The urine should be pale yellow or colorless. Dark yellow or orange-tinged urine may indicate dehydration or concentrated urine. You should also see regular dirty diapers: meconium (black/green) in the first 1-3 days, transitioning to yellow seedy stools by day 4-5 in breastfed babies. If diaper count is low, contact your pediatrician.' },
    { ageRange: '1-3 months', context: 'Continue to expect at least 6 wet diapers per day. Breastfed babies may have fewer dirty diapers as they get older (some breastfed babies can go several days between stools and this is normal). Urine should remain pale.' },
    { ageRange: '3-6 months', context: 'Wet diaper frequency remains similar. As bladder capacity grows, individual diapers may be wetter but the overall count may decrease slightly. Weight gain at well-child visits is the best indicator of adequate nutrition.' },
    { ageRange: '6-12 months', context: 'With solid foods and larger bladder capacity, diaper patterns continue to change. Adequate hydration is indicated by pale urine and normal energy level.' },
  ],
  whenNormal: ['At least 6 wet diapers per day by day 4-5 of life', 'Pale yellow or colorless urine', 'Regular dirty diapers appropriate for age and feeding method', 'Baby is alert, feeding well, and gaining weight'],
  whenToMention: ['Fewer wet diapers than expected for baby\'s age', 'Urine appears dark yellow or has an orange tint', 'You are unsure how to tell if a modern disposable diaper is wet'],
  whenToActNow: ['Fewer than 6 wet diapers per day after day 4, combined with poor feeding, lethargy, or dry mouth', 'No wet diapers for 6-8 hours in a newborn, which could indicate dehydration requiring urgent evaluation'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Is Baby Getting Enough Milk. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Indicators for Assessing Breastfeeding Practices.', url: 'https://www.who.int/health-topics/breastfeeding' },
  ],
  relatedConcernSlugs: ['newborn-urate-crystals-diaper', 'newborn-weight-loss-first-week', 'newborn-not-regaining-birth-weight'],
};
