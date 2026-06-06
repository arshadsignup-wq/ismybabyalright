import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cluster-feeding-not-newborn',
  title: 'My Older Baby Is Cluster Feeding Again',
  category: 'feeding',
  searchTerms: [
    'cluster feeding older baby',
    'cluster feeding after newborn stage',
    'baby suddenly feeding constantly',
    'baby wanting to nurse every hour',
    'growth spurt feeding frenzy',
    '4 month old cluster feeding',
    '6 month old feeding constantly',
    'baby eating all the time suddenly',
    'increased feeding demand older baby',
    'cluster feeding growth spurt',
  ],
  quickAnswer:
    'Cluster feeding is not just for newborns. Older babies can have periods of increased feeding during growth spurts, developmental leaps, teething, illness recovery, or times of stress. These periods typically last 2-5 days. Continue feeding on demand and ensure baby is also getting enough solid foods if they are age-appropriate.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Cluster feeding is most common in the first few weeks but can happen anytime. Growth spurts around 3 weeks, 6 weeks, and 3 months often trigger increased feeding. This is normal and helps establish milk supply.',
    },
    {
      ageRange: '4-6 months',
      context: 'A growth spurt around 4 months can trigger cluster feeding. If breastfeeding, this increased demand helps boost supply. If formula feeding, baby may need more frequent or larger bottles for a few days. This is also when the 4-month sleep regression can increase feeding demands.',
    },
    {
      ageRange: '6-9 months',
      context: 'Around 6 months, babies may cluster feed as they begin solids and their nutritional needs increase. Teething can also cause increased comfort nursing. Growth spurts around 6 months are common. Continue offering breast or bottle alongside solids.',
    },
    {
      ageRange: '9-12 months',
      context: 'Increased feeding may occur during growth spurts, developmental milestones like walking, or when teething. Some babies also increase nursing when they feel unwell. If baby is eating well from solids, increased milk feeds usually resolve within a few days.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers may increase nursing or bottle feeding during illness, teething, stress, or transitions. If your toddler is still breastfeeding, increased nursing demand is normal during these times and does not mean your supply is low.',
    },
  ],
  whenNormal: [
    'Baby has 2-5 days of increased feeding then returns to normal patterns',
    'Baby is going through a known growth spurt or developmental milestone',
    'Baby is teething or recovering from illness',
    'Baby is content between feeds despite feeding more frequently',
  ],
  whenToMention: [
    'Increased feeding demand lasts more than a week with no improvement',
    'Baby seems unsatisfied after every feed despite feeding frequently',
    'Baby is not gaining weight despite increased feeding',
  ],
  whenToActNow: [
    'Baby has signs of dehydration despite feeding frequently',
    'Baby is lethargic or unresponsive between feeds',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['cluster-feeding-newborn', 'supply-dips-breastfeeding', 'low-milk-supply-signs'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Growth Spurts and Feeding Patterns. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Infant Feeding Patterns and Growth Velocity. Pediatric Research, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
