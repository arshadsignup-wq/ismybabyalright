import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-physical-therapy-when-needed',
  title: 'Does My Baby Need Physical Therapy?',
  category: 'physical',
  searchTerms: ['baby physical therapy', 'baby PT referral', 'infant physical therapy needed', 'baby gross motor delay therapy', 'pediatric physical therapy', 'baby not meeting milestones PT', 'early intervention physical therapy', 'baby physical therapy signs', 'when does baby need PT', 'infant PT evaluation'],
  quickAnswer: 'Pediatric physical therapy (PT) helps babies and toddlers who have delays or difficulties with gross motor skills like rolling, sitting, crawling, standing, and walking. PT is recommended when a child is significantly behind on motor milestones, has muscle tone issues (too stiff or too floppy), shows asymmetric movement, or has a diagnosed condition affecting movement. Early intervention PT is free or low-cost in most states for children under 3.',
  byAge: [
    { ageRange: '0-4 months', context: 'PT may be recommended if your baby has torticollis (head turning preference), difficulty with tummy time, low muscle tone, or a known medical condition like Down syndrome or prematurity. Early PT at this age focuses on positioning, stretching, and encouraging movement.' },
    { ageRange: '4-8 months', context: 'PT may be helpful if your baby is not rolling, has difficulty with sitting, shows significant head lag, or has asymmetric movement patterns. A PT can assess whether your baby\'s motor development is on track and provide exercises to support progress.' },
    { ageRange: '8-12 months', context: 'If your baby is not sitting independently, not crawling or moving toward mobility, or not pulling to stand by the later end of this range, PT evaluation is recommended. PT can help your child build the strength and coordination needed for walking.' },
    { ageRange: '12-24 months', context: 'PT is commonly recommended if your child is not walking by 18 months, walks with an unusual gait pattern, has persistent toe walking, or shows balance and coordination difficulties significantly behind peers.' },
  ],
  whenNormal: ['Your baby is meeting motor milestones within the expected range.', 'Your baby moves symmetrically (uses both sides equally).', 'Muscle tone feels normal (not too stiff or too floppy).', 'Your pediatrician is not concerned about motor development.'],
  whenToMention: ['Your baby seems behind on motor milestones compared to peers.', 'Your baby strongly prefers one side of the body.', 'Your baby seems unusually stiff or floppy.', 'You have a family history of motor delays.'],
  whenToActNow: ['Your baby has lost motor skills they previously had.', 'Your baby is not sitting by 9 months.', 'Your baby is not walking by 18 months.', 'Your baby has sudden changes in movement or muscle tone.'],
  relatedMilestones: ['gross-motor-walking', 'gross-motor-sitting', 'gross-motor-crawling'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-occupational-therapy-signs', 'baby-orthopedic-referral-signs', 'delayed-crawling'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Early Intervention', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Early-Intervention.aspx' },
    { org: 'NIH', citation: 'Morgan C, et al. Effectiveness of Motor Interventions in Infants with Cerebral Palsy. Dev Med Child Neurol. 2016;58(9)', url: 'https://pubmed.ncbi.nlm.nih.gov/27027732/' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
