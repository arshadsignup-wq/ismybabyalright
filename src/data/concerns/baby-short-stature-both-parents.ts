import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-short-stature-both-parents',
  title: 'My Baby Is Small and Both Parents Are Short',
  category: 'physical',
  searchTerms: ['baby short parents short', 'baby small both parents short', 'familial short stature baby', 'genetic short stature', 'baby small genetic', 'short parents short baby normal', 'baby height genetic', 'baby below growth chart parents short', 'hereditary short stature', 'baby short for age parents short'],
  quickAnswer: 'Familial short stature is the most common cause of a small baby when both parents are short. If your baby is growing at a consistent rate along a lower percentile, is proportional, and is developing normally, their small size likely reflects their genetics. Your pediatrician can calculate a target height range based on parental heights.',
  byAge: [
    { ageRange: '0-6 months', context: 'Babies of short parents may be born average-sized then gradually adjust downward to match their genetic potential. This settling into a lower percentile in the first months is normal and expected. Your baby should track consistently once settled.' },
    { ageRange: '6-12 months', context: 'Your baby should be growing at a steady rate along their percentile, even if that percentile is low. Consistent growth along any percentile is usually normal. If growth is decelerating beyond expected adjustment, evaluation is warranted.' },
    { ageRange: '12-24 months', context: 'Your child\'s growth should continue at a consistent rate. The mid-parental height formula can estimate your child\'s adult height. If growth is significantly below what is expected even for your family, your pediatrician may check for other causes.' },
    { ageRange: '2-4 years', context: 'By this age, your child\'s growth trajectory is well established. If tracking consistently along a lower percentile with normal proportions and development, familial short stature is the most likely explanation. No treatment is typically needed.' },
  ],
  whenNormal: ['Your baby is growing consistently along a lower percentile.', 'Growth rate is normal even if absolute size is small.', 'Your baby is proportional (weight and length match).', 'Your baby is developing normally.'],
  whenToMention: ['Growth is decelerating beyond genetic adjustment.', 'Your baby is falling below the lowest percentile.', 'Growth seems disproportionate.'],
  whenToActNow: ['Growth has completely stopped.', 'Your baby is showing signs of malnutrition or chronic illness.'],
  relatedMilestones: ['growth-length', 'growth-weight'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-length-percentile-dropping', 'baby-growth-percentile-dropping'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Short Stature in Children', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/default.aspx' },
    { org: 'NIH', citation: 'Rogol AD, et al. Growth at Puberty. J Adolesc Health. 2002;31(6)', url: 'https://pubmed.ncbi.nlm.nih.gov/12466337/' },
    { org: 'CDC', citation: 'CDC - Growth Charts', url: 'https://www.cdc.gov/growthcharts/index.htm' },
  ],
};
