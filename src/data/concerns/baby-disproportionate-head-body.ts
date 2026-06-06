import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-disproportionate-head-body',
  title: 'My Baby\'s Head Seems Too Big or Small for Their Body',
  category: 'physical',
  searchTerms: ['baby head too big for body', 'baby head size disproportionate', 'baby head body ratio', 'baby proportions off', 'baby big head small body', 'baby small head big body', 'baby head circumference vs body size', 'disproportionate baby', 'baby growth proportion', 'baby head body mismatch'],
  quickAnswer: 'Babies naturally have proportionally larger heads than adults - a baby\'s head is about 25% of their body length compared to 12% in adults. However, when head size is on a very different percentile from length and weight, your pediatrician will monitor and may evaluate for conditions like familial macrocephaly, nutritional issues, or genetic conditions.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies\' heads are naturally large relative to their bodies. Some disproportionality is normal, especially in premature babies. Your pediatrician tracks all three growth measurements (weight, length, head circumference) to identify concerning patterns.' },
    { ageRange: '3-6 months', context: 'Growth proportions should be relatively consistent. If head circumference is on a very different percentile from weight and length, your pediatrician may investigate. Large heads with normal body size often indicate familial macrocephaly.' },
    { ageRange: '6-12 months', context: 'Proportions should remain fairly consistent. If the gap between head and body measurements is widening, evaluation may include imaging or genetic testing. Many disproportionalities are benign and familial.' },
    { ageRange: '12-24 months', context: 'As children grow, proportions change naturally. If disproportionality persists or worsens, your pediatrician may refer to specialists. The key is whether your child is developing normally alongside the size differences.' },
  ],
  whenNormal: ['Head and body sizes run in the family.', 'Your baby is developing normally.', 'Proportions are consistent and not changing.', 'Your baby was premature and proportions are normalizing.'],
  whenToMention: ['Head circumference is on a very different percentile than weight and length.', 'The gap between head and body measurements is widening.', 'You notice your baby\'s proportions seem very different from peers.'],
  whenToActNow: ['Rapid head growth with symptoms like vomiting or bulging fontanelle.', 'Sudden change in proportions.'],
  relatedMilestones: ['growth-head-circumference', 'growth-weight', 'growth-length'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-head-growth-too-fast', 'baby-head-growth-too-slow', 'baby-large-head-family-trait'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Growth Monitoring', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/default.aspx' },
    { org: 'WHO', citation: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
    { org: 'CDC', citation: 'CDC - Growth Charts', url: 'https://www.cdc.gov/growthcharts/index.htm' },
  ],
};
