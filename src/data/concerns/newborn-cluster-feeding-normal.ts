import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-cluster-feeding-normal',
  title: 'Cluster Feeding in Newborns',
  category: 'feeding',
  searchTerms: ['cluster feeding newborn', 'baby feeding constantly', 'newborn cluster feeding normal', 'baby eating every 30 minutes', 'constant feeding newborn', 'cluster feeding evening', 'baby won\'t stop eating', 'newborn marathon feeding', 'cluster feeding milk supply', 'is cluster feeding normal'],
  quickAnswer: 'Cluster feeding, where your baby feeds very frequently for several hours (often in the evening), is completely normal in newborns. It is especially common during growth spurts and helps build your milk supply. As long as your baby is gaining weight and producing adequate wet and dirty diapers, cluster feeding is a healthy behavior.',
  byAge: [
    { ageRange: '0-1 month', context: 'Cluster feeding is very common in the first few weeks. Your newborn may want to feed every 30-60 minutes during certain periods, often in the late afternoon and evening. This is normal and does not mean your milk supply is insufficient. Cluster feeding actually helps stimulate milk production by increasing demand. It is exhausting for parents but is a temporary phase. Ensure you have support, stay hydrated, and rest when possible. Your baby may also cluster feed during growth spurts (around days 7-10, 2-3 weeks, and 4-6 weeks).' },
    { ageRange: '1-3 months', context: 'Cluster feeding may continue, particularly during growth spurts at 6 weeks and 3 months. The pattern may shift as your baby develops more predictable feeding patterns. Evening cluster feeding often precedes a longer stretch of sleep. If cluster feeding is constant (not in clusters but truly every hour around the clock), evaluate feeding effectiveness with your pediatrician.' },
    { ageRange: '3-6 months', context: 'Cluster feeding becomes less frequent as feeding patterns become more established. Some babies still cluster feed during growth spurts. Feeding intervals generally lengthen during this period.' },
    { ageRange: '6-12 months', context: 'With the introduction of solid foods and more mature feeding patterns, cluster feeding is uncommon at this age. Periods of increased feeding may still occur during growth spurts or illness.' },
  ],
  whenNormal: ['Frequent feeding (every 30-90 minutes) during a defined period, usually in the evening', 'Baby is content between feedings and not excessively fussy', 'Adequate wet diapers (6+ per day) and regular dirty diapers', 'Good weight gain at pediatrician visits'],
  whenToMention: ['Cluster feeding is happening around the clock without any longer breaks', 'Baby never seems satisfied after feeding', 'Weight gain is slower than expected despite frequent feeding'],
  whenToActNow: ['Baby is losing weight, producing fewer than 6 wet diapers per day, or appears dehydrated', 'Baby is lethargic and difficult to wake for feeding'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Breastfeeding Recommendations.', url: 'https://www.who.int/health-topics/breastfeeding' },
  ],
  relatedConcernSlugs: ['newborn-feeding-every-hour', 'newborn-not-regaining-birth-weight', 'newborn-adequate-wet-diapers'],
};
