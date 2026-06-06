import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-small-head-family-trait',
  title: 'My Baby Has a Small Head That Runs in the Family',
  category: 'physical',
  searchTerms: ['baby small head family', 'familial microcephaly', 'small head runs in family baby', 'baby small head genetic', 'benign microcephaly family', 'baby head size low percentile family', 'hereditary small head baby', 'small head both parents', 'familial small head normal development', 'genetic small head baby'],
  quickAnswer: 'Familial microcephaly (small heads running in the family) is a benign condition where a baby\'s head circumference is below average but the brain develops normally. If one or both parents have small heads and your baby is developing on track, the small head size is likely inherited and not a medical concern.',
  byAge: [
    { ageRange: '0-6 months', context: 'Your pediatrician will measure parental head circumferences to assess familial pattern. If your baby is developing normally and head growth is consistent (even if at a low percentile), familial microcephaly is the likely explanation.' },
    { ageRange: '6-12 months', context: 'Continued normal development with a consistently small head is reassuring. Your pediatrician monitors head growth at every well visit. If development is also delayed, further evaluation may be needed.' },
    { ageRange: '12-24 months', context: 'If your child is meeting developmental milestones with a consistently small head matching family pattern, no intervention is needed. Ongoing monitoring at well visits is sufficient.' },
    { ageRange: '2-4 years', context: 'Children with familial microcephaly develop normally and lead normal lives. The small head size is simply a genetic trait, much like having smaller feet or shorter stature.' },
  ],
  whenNormal: ['Parent head sizes are also below average.', 'Head is tracking consistently along a low percentile.', 'Development is on track.', 'Head growth is not decelerating.'],
  whenToMention: ['Head circumference is falling across percentile lines.', 'Small head is combined with developmental delays.', 'Head growth has stalled.'],
  whenToActNow: ['Head growth is decelerating rapidly.', 'Small head with seizures or developmental regression.'],
  relatedMilestones: ['growth-head-circumference'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-head-growth-too-slow', 'baby-disproportionate-head-body'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Microcephaly', url: 'https://www.healthychildren.org/English/health-issues/conditions/Glands-Growth-Disorders/Pages/default.aspx' },
    { org: 'WHO', citation: 'WHO - Microcephaly', url: 'https://www.who.int/news-room/fact-sheets/detail/microcephaly' },
    { org: 'CDC', citation: 'CDC - Facts about Microcephaly', url: 'https://www.cdc.gov/ncbddd/birthdefects/microcephaly.html' },
  ],
};
