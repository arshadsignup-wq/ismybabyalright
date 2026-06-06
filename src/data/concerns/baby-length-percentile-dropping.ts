import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-length-percentile-dropping',
  title: 'My Baby\'s Length Is Falling Off the Growth Curve',
  category: 'physical',
  searchTerms: ['baby length percentile dropping', 'baby not growing taller', 'baby short for age', 'baby height falling off chart', 'baby length growth slowing', 'baby growth length deceleration', 'baby short stature', 'baby length percentile declining', 'baby linear growth delay', 'baby height not increasing'],
  quickAnswer: 'Length/height falling across percentile lines is less common than weight changes and should be evaluated. Common causes include constitutional growth delay (late bloomer), familial short stature, nutritional deficiency, or rarely hormonal or genetic conditions. Your pediatrician can determine if further testing is needed.',
  byAge: [
    { ageRange: '0-6 months', context: 'Some adjustment in length percentile is normal in the first months as babies settle to their genetic trajectory. However, significant drops in length should be evaluated, especially if weight is also affected.' },
    { ageRange: '6-12 months', context: 'Length should be tracking along a percentile. If dropping, your pediatrician may evaluate nutrition, check for malabsorption, and consider growth hormone testing if the decline is significant.' },
    { ageRange: '12-24 months', context: 'If length continues to fall off the growth curve, a thorough evaluation is recommended. This may include blood work to check thyroid function, growth hormone levels, and nutritional markers.' },
    { ageRange: '2-3 years', context: 'By this age, growth patterns are more established. If your child is progressively falling behind in height, a pediatric endocrinologist referral may be recommended. Many causes of growth delay are treatable.' },
  ],
  whenNormal: ['Both parents are short (familial short stature).', 'Your baby was born large and is adjusting downward to genetic potential.', 'Length has stabilized at a lower percentile and is tracking consistently.', 'Weight and length are proportional.'],
  whenToMention: ['Length is crossing two or more percentile lines downward.', 'Length is falling while weight is stable (becoming disproportionate).', 'Growth deceleration is persistent across multiple visits.'],
  whenToActNow: ['Growth has completely stopped.', 'Length loss is accompanied by other symptoms like fatigue or developmental regression.'],
  relatedMilestones: ['growth-length', 'growth-weight'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-growth-percentile-dropping', 'baby-short-stature-both-parents'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Growth and Your Child', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/default.aspx' },
    { org: 'NIH', citation: 'Rogol AD, et al. Growth and Pubertal Development in Children. J Clin Endocrinol Metab. 2002;87(12)', url: 'https://pubmed.ncbi.nlm.nih.gov/12466337/' },
    { org: 'CDC', citation: 'CDC - Growth Charts', url: 'https://www.cdc.gov/growthcharts/index.htm' },
  ],
};
