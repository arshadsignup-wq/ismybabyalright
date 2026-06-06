import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-weight-plateau',
  title: 'My Baby\'s Weight Has Plateaued',
  category: 'physical',
  searchTerms: ['baby weight plateau', 'baby not gaining weight', 'baby weight stalled', 'baby weight stuck', 'baby stopped gaining weight', 'baby weight flat line', 'baby weight gain stopped', 'baby weight not increasing', 'baby weight stable no gain', 'baby growth plateau'],
  quickAnswer: 'Brief weight plateaus can occur during illness, teething, or when babies become more active. However, a weight plateau lasting more than 2-4 weeks in a young baby, or significant stalling in an older baby, should be evaluated. Your pediatrician can determine whether the plateau is temporary or needs intervention.',
  byAge: [
    { ageRange: '0-3 months', context: 'Babies should gain about 5-7 ounces per week in the first months. A weight plateau lasting more than 1-2 weeks at this age is concerning and should be evaluated immediately. Ensure adequate feeding frequency and effective milk transfer if breastfeeding.' },
    { ageRange: '3-6 months', context: 'Weight gain naturally slows but should continue. A plateau lasting 2-3 weeks warrants evaluation. If your baby is ill, teething, or going through a developmental leap, a brief slowdown may be temporary.' },
    { ageRange: '6-12 months', context: 'As babies become more active and start solids, weight gain slows further. Brief plateaus during illness or diet transitions are common. If weight does not resume an upward trend within 2-4 weeks, discuss with your pediatrician.' },
    { ageRange: '12-24 months', context: 'Toddler weight gain is much slower than infant weight gain. Brief plateaus are more common and less concerning if your child is active and eating. Ensure a balanced diet with adequate calories and fats.' },
  ],
  whenNormal: ['A brief plateau during illness that resolves in 1-2 weeks.', 'Your baby recently became more active (crawling, walking).', 'Your toddler is going through a period of picky eating.', 'Weight resumes its upward trend after the plateau.'],
  whenToMention: ['Weight plateau lasts more than 2-4 weeks in a baby under 6 months.', 'Your baby seems hungry but is not gaining weight.', 'Weight plateau is accompanied by decreased energy or feeding refusal.'],
  whenToActNow: ['Your baby is losing weight.', 'Your baby is lethargic, dehydrated, or refusing all feeds.'],
  relatedMilestones: ['growth-weight'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-growth-percentile-dropping'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Failure to Thrive', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Failure-to-Thrive.aspx' },
    { org: 'WHO', citation: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
    { org: 'CDC', citation: 'CDC - Growth Charts', url: 'https://www.cdc.gov/growthcharts/index.htm' },
  ],
};
