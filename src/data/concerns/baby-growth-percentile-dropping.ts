import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-growth-percentile-dropping',
  title: 'My Baby Is Falling Off the Growth Curve',
  category: 'physical',
  searchTerms: ['baby growth percentile dropping', 'baby falling off growth curve', 'baby weight percentile declining', 'baby dropping percentiles', 'baby growth slowing down', 'baby not following growth curve', 'baby weight dropping', 'failure to thrive baby', 'baby growth deceleration', 'baby percentile going down'],
  quickAnswer: 'While babies do not need to stay at the exact same percentile, dropping across two or more major percentile lines on the growth chart warrants evaluation. Common causes include inadequate caloric intake, increased energy needs, or malabsorption. Your pediatrician tracks growth at every well visit and will flag concerning changes.',
  byAge: [
    { ageRange: '0-3 months', context: 'Some weight readjustment in the first 2-3 months is normal as your baby settles to their genetic growth trajectory. Babies born large may drop percentiles, and babies born small may rise. However, significant drops in weight-for-age should be evaluated to ensure adequate feeding.' },
    { ageRange: '3-6 months', context: 'Growth should be relatively steady along a percentile channel. If your baby is dropping percentiles, your pediatrician will assess feeding adequacy, check for reflux or other conditions, and may increase monitoring. More frequent weight checks can determine if the drop is a trend or a one-time measurement.' },
    { ageRange: '6-12 months', context: 'Starting solids can temporarily affect growth patterns. Some slowing is normal as babies become more active. However, crossing two percentile lines down still warrants evaluation. Ensure your baby is getting adequate calories from both milk and solids.' },
    { ageRange: '12-24 months', context: 'Toddlers\' growth naturally slows compared to the first year. Some percentile adjustment is normal. However, if weight or length continues to drop across percentile lines, your pediatrician may investigate causes including picky eating, allergies, or medical conditions.' },
  ],
  whenNormal: ['Your baby drops one percentile line but then stabilizes.', 'The drop is in the first 3 months as your baby finds their growth trajectory.', 'Your baby is active, happy, and meeting developmental milestones.', 'Your baby was born large and is adjusting to genetic potential.'],
  whenToMention: ['Your baby has crossed two or more percentile lines downward.', 'Weight gain has stalled for more than 2-4 weeks in a young baby.', 'Your baby seems hungry all the time or refuses feeds.'],
  whenToActNow: ['Your baby is losing weight.', 'Your baby is lethargic, dehydrated, or refusing all feeds.'],
  relatedMilestones: ['growth-weight', 'growth-length'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-weight-plateau', 'baby-length-percentile-dropping'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Failure to Thrive', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/Failure-to-Thrive.aspx' },
    { org: 'WHO', citation: 'WHO Child Growth Standards: Methods and Development', url: 'https://www.who.int/tools/child-growth-standards' },
    { org: 'CDC', citation: 'CDC - Growth Charts', url: 'https://www.cdc.gov/growthcharts/index.htm' },
  ],
};
