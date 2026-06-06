import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-growth-percentile-jumping',
  title: 'My Baby Is Jumping Growth Percentiles',
  category: 'physical',
  searchTerms: ['baby growth percentile jumping', 'baby gaining weight too fast', 'baby crossing percentile lines up', 'baby rapid growth percentile change', 'baby jumping growth curves', 'baby weight increasing rapidly', 'baby overweight percentile', 'baby growth percentile rising fast', 'baby moving up growth chart', 'baby rapid weight gain percentile'],
  quickAnswer: 'Some upward crossing of percentile lines can be normal, especially in the first year when babies are establishing their genetic growth trajectory. Breastfed babies born small may rapidly catch up. However, rapidly crossing multiple percentile lines upward, especially for weight without matching length gain, may warrant discussion about feeding practices.',
  byAge: [
    { ageRange: '0-3 months', context: 'Catch-up growth in the first 3 months is common, especially in babies born small or premature. Breastfed babies may grow rapidly in the early weeks. Some upward percentile crossing at this age is normal and expected as babies find their genetic growth channel.' },
    { ageRange: '3-6 months', context: 'Growth should start to stabilize along a percentile channel. If weight is climbing rapidly while length stays at a lower percentile, your pediatrician may discuss feeding patterns. Breastfed babies cannot be overfed, but bottle-feeding techniques can sometimes lead to overfeeding.' },
    { ageRange: '6-12 months', context: 'With solid food introduction, some children experience growth changes. If your baby is rapidly gaining weight, your pediatrician will monitor the pattern. Focus on offering a variety of nutritious foods and letting your baby eat to their appetite.' },
    { ageRange: '12-24 months', context: 'Toddler growth normally slows. If rapid weight gain continues, your pediatrician may review dietary habits and activity levels. In rare cases, rapid growth can indicate endocrine conditions that should be evaluated.' },
  ],
  whenNormal: ['Your baby was born small and is catching up to their genetic potential.', 'Both weight and length are increasing proportionally.', 'Your baby stabilizes at a new percentile and tracks it consistently.', 'Your baby is active and meeting developmental milestones.'],
  whenToMention: ['Weight is crossing percentile lines upward while length remains stable.', 'Growth acceleration is persistent across multiple visits.', 'You are concerned about overfeeding or your baby seems to eat excessively.'],
  whenToActNow: ['Growth acceleration is accompanied by other symptoms like excessive thirst or urination.', 'Your baby has sudden rapid head growth or other concerning growth changes.'],
  relatedMilestones: ['growth-weight', 'growth-length'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-weight-gain-too-rapid', 'baby-growth-percentile-dropping'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Healthy Growth', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/default.aspx' },
    { org: 'WHO', citation: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
    { org: 'CDC', citation: 'CDC - Growth Charts for Children', url: 'https://www.cdc.gov/growthcharts/index.htm' },
  ],
};
