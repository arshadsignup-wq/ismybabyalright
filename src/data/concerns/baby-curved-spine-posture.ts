import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-curved-spine-posture', title: 'My Baby\'s Spine Seems Curved', category: 'physical',
  searchTerms: ['baby curved spine', 'baby scoliosis', 'baby spine not straight', 'infantile scoliosis', 'baby back curved', 'baby spine curvature', 'baby postural scoliosis', 'baby leans to one side sitting', 'baby asymmetric posture spine', 'baby kyphosis'],
  quickAnswer: 'Babies naturally have a C-shaped spine that gradually develops adult curves over the first years. True scoliosis in infants is rare but should be evaluated if you notice a consistent side-bending or rotation. Your pediatrician checks your baby\'s spine at every well visit.',
  byAge: [
    { ageRange: '0-6 months', context: 'Baby spines have a natural C-curve (kyphosis). Some apparent curvature may be related to positioning or torticollis. If your baby consistently leans to one side, your pediatrician should evaluate.' },
    { ageRange: '6-12 months', context: 'As your baby sits independently, their spine straightens. If you notice persistent leaning or a curve when viewed from behind, mention it to your pediatrician. Infantile scoliosis, while rare, benefits from early detection.' },
    { ageRange: '12-24 months', context: 'Your toddler\'s posture is developing. If a curve is visible when standing or bending forward, evaluation is recommended. Most infantile scoliosis cases resolve on their own, but monitoring is important.' },
    { ageRange: '2-4 years', context: 'Persistent spinal curves should be monitored by a pediatric orthopedist. Many infantile scoliosis cases resolve spontaneously, but some progress and need treatment.' },
  ],
  whenNormal: ['Natural C-curve in a young baby.', 'Slight curvature that resolves with position change.', 'Your baby sits straight when alert and engaged.'],
  whenToMention: ['Consistent spinal curve visible from behind.', 'Your baby always leans to one side.', 'Asymmetric trunk creases.'],
  whenToActNow: ['Progressive spinal curvature.', 'Spinal deformity with neurological symptoms.'],
  relatedMilestones: ['gross-motor-sitting', 'gross-motor-standing'], showSelfReferral: true,
  relatedConcernSlugs: ['torticollis', 'poor-trunk-control'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Scoliosis', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Scoliosis.aspx' },
    { org: 'NIH', citation: 'Fernandes P, Weinstein SL. Natural History of Early-Onset Scoliosis. J Bone Joint Surg Am. 2007;89', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Child Health', url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html' },
  ],
};
