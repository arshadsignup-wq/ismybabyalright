import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-limping-after-nap', title: 'My Toddler Limps After Resting', category: 'physical',
  searchTerms: ['toddler limps after nap', 'toddler limps after sleep', 'toddler stiff after nap', 'toddler morning limp', 'toddler limps then improves', 'toddler gelling after rest', 'toddler walk stiff after sleep', 'toddler limp goes away', 'morning stiffness toddler', 'toddler limps when wakes up'],
  quickAnswer: 'Limping after rest that improves with movement is a hallmark sign of juvenile idiopathic arthritis (JIA). This "gelling" phenomenon occurs because inflamed joints stiffen during inactivity. If your toddler consistently limps after naps or in the morning but walks better after moving around, contact your pediatrician for evaluation.',
  byAge: [
    { ageRange: '12-18 months', context: 'A toddler who limps after resting should be evaluated. At this age, a child cannot describe pain, so limping or reluctance to walk may be the only sign. JIA can begin this young.' },
    { ageRange: '18-24 months', context: 'If limping after rest is a pattern, your pediatrician should assess. They may order blood work and refer to a pediatric rheumatologist. Early diagnosis of JIA leads to much better outcomes.' },
    { ageRange: '2-3 years', context: 'Morning stiffness lasting more than 15-30 minutes that improves with activity is a classic JIA sign. Your child may also be reluctant to use the affected joint initially but then warm up to normal movement.' },
    { ageRange: '3-5 years', context: 'If your child consistently limps after rest, has any joint swelling, or has morning stiffness, a rheumatology evaluation is recommended. Modern treatments are very effective at controlling JIA.' },
  ],
  whenNormal: ['Brief stiffness after sleeping that resolves in seconds.', 'Limp after an obvious injury that is healing.'],
  whenToMention: ['Consistent limping after naps or in the morning.', 'Morning stiffness lasting more than 15 minutes.', 'Limping pattern persisting for more than 1-2 weeks.'],
  whenToActNow: ['Limping with fever or inability to bear weight.', 'Sudden severe limp with joint swelling and pain.'],
  relatedMilestones: ['gross-motor-walking'], showSelfReferral: true,
  relatedConcernSlugs: ['toddler-joint-swelling', 'toddler-refusing-to-walk-pain', 'baby-limping'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Juvenile Arthritis', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx' },
    { org: 'NIH', citation: 'Ravelli A, Martini A. Juvenile Idiopathic Arthritis. Lancet. 2007;369(9563)', url: 'https://pubmed.ncbi.nlm.nih.gov/17382826/' },
    { org: 'CDC', citation: 'CDC - Juvenile Arthritis', url: 'https://www.cdc.gov/arthritis/basics/childhood.htm' },
  ],
};
