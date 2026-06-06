import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-head-growth-too-slow',
  title: 'My Baby\'s Head Growth Is Slow',
  category: 'physical',
  searchTerms: ['baby head growth slow', 'baby small head', 'baby head not growing', 'baby microcephaly', 'baby head circumference dropping', 'baby head size small', 'baby head percentile falling', 'slow head growth baby', 'baby head circumference low', 'baby head growth deceleration'],
  quickAnswer: 'Slow head growth (head circumference falling across percentile lines) warrants evaluation because it may indicate poor brain growth. However, some babies with small heads have familial microcephaly (small heads run in the family) and develop normally. Your pediatrician monitors head growth at every visit.',
  byAge: [
    { ageRange: '0-3 months', context: 'Head growth is most rapid in the first months. If head circumference is falling across percentile lines, your pediatrician will evaluate development, check for other signs, and may order imaging. Premature babies may have different growth trajectories.' },
    { ageRange: '3-6 months', context: 'Continued slow head growth should be investigated. Your pediatrician may check both parents\' head sizes, assess development, and potentially order an MRI to evaluate brain structure.' },
    { ageRange: '6-12 months', context: 'If head growth has been consistently slow but your baby is developing normally and parents have smaller heads, this may be benign familial microcephaly. If development is also delayed, more extensive evaluation is recommended.' },
    { ageRange: '12-24 months', context: 'Head growth naturally slows after the first year. If your child\'s head circumference has been tracking at a low but consistent percentile and development is on track, ongoing monitoring may be sufficient.' },
  ],
  whenNormal: ['Both parents have small heads (familial microcephaly).', 'Your baby is developing normally despite a small head.', 'Head size is small but tracking consistently along a percentile.'],
  whenToMention: ['Head circumference is falling across percentile lines.', 'Small head is combined with developmental delays.', 'Head growth has stalled or slowed significantly.'],
  whenToActNow: ['Rapidly decelerating head growth.', 'Slow head growth with seizures or developmental regression.'],
  relatedMilestones: ['growth-head-circumference'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-small-head-family-trait', 'baby-disproportionate-head-body'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Microcephaly', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/default.aspx' },
    { org: 'WHO', citation: 'WHO - Microcephaly Fact Sheet', url: 'https://www.who.int/news-room/fact-sheets/detail/microcephaly' },
    { org: 'CDC', citation: 'CDC - Facts about Microcephaly', url: 'https://www.cdc.gov/ncbddd/birthdefects/microcephaly.html' },
  ],
};
