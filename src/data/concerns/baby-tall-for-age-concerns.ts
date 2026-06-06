import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-tall-for-age-concerns',
  title: 'My Baby Is Very Tall for Their Age',
  category: 'physical',
  searchTerms: ['baby tall for age', 'baby very long', 'baby above growth chart', 'baby tall concern', 'baby height above 99th percentile', 'baby growing too tall', 'tall baby normal', 'baby length high percentile', 'baby taller than peers', 'overgrowth baby'],
  quickAnswer: 'Most tall babies are simply genetically tall, especially if one or both parents are tall. Being above the 95th percentile is usually normal and not a cause for concern. In rare cases, excessive height can indicate conditions like Marfan syndrome or growth hormone excess, but these are typically accompanied by other features.',
  byAge: [
    { ageRange: '0-6 months', context: 'Many babies are born long and continue to track high on the growth chart. If both parents are tall, this is simply genetics. Your pediatrician will monitor growth at well visits to ensure consistent tracking.' },
    { ageRange: '6-12 months', context: 'Consistent tall stature along a high percentile is typically normal. If growth is accelerating upward beyond genetic expectations, your pediatrician may monitor more closely.' },
    { ageRange: '12-24 months', context: 'Tall toddlers are common and usually healthy. If your child\'s height is significantly above what parental heights would predict, your pediatrician may consider evaluation. Features like very long fingers, loose joints, or heart murmurs alongside extreme height warrant investigation.' },
    { ageRange: '2-4 years', context: 'Consistent tall stature is typically benign. If growth continues to accelerate disproportionately, a pediatric endocrinologist can evaluate for overgrowth syndromes, though these are rare.' },
  ],
  whenNormal: ['One or both parents are tall.', 'Growth is consistent along a high percentile.', 'Your baby is proportional (weight and length match).', 'Development is normal.'],
  whenToMention: ['Height is significantly above what parental heights predict.', 'Growth is accelerating beyond a consistent trajectory.', 'Unusual body proportions (very long limbs, fingers, or toes).'],
  whenToActNow: ['Sudden unexplained growth acceleration.', 'Tall stature with features like loose joints, vision problems, or heart murmur.'],
  relatedMilestones: ['growth-length'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-growth-percentile-jumping'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Tall Stature in Children', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/default.aspx' },
    { org: 'NIH', citation: 'Davies JH, Cheetham T. Investigation and Management of Tall Stature. Arch Dis Child. 2014;99(8)', url: 'https://pubmed.ncbi.nlm.nih.gov/24573884/' },
    { org: 'CDC', citation: 'CDC - Growth Charts', url: 'https://www.cdc.gov/growthcharts/index.htm' },
  ],
};
