import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-spasticity-signs',
  title: 'Signs of Spasticity vs Normal Stiffness in Babies',
  category: 'physical',
  searchTerms: ['baby spasticity signs', 'baby spastic movements', 'spasticity vs normal stiffness baby', 'baby velocity dependent stiffness', 'baby tight muscles spastic', 'baby spasticity symptoms', 'infant spasticity early signs', 'baby clasp knife spasticity', 'spastic baby diagnosis', 'baby stiff when moved quickly'],
  quickAnswer: 'Spasticity is velocity-dependent stiffness, meaning muscles resist fast movement more than slow movement. Normal baby stiffness occurs briefly during excitement or startle and resolves quickly. Spasticity is persistent, may affect one or more limbs, and often worsens with growth. Your pediatrician can perform specific tests to distinguish between normal tone variation and spasticity.',
  byAge: [
    { ageRange: '0-3 months', context: 'Distinguishing spasticity from normal newborn tone can be difficult this early. Some increased tone is normal. Signs to watch for include persistent fisting, difficulty straightening arms or legs, and stiffness that worsens with handling. Your pediatrician monitors tone at every visit.' },
    { ageRange: '3-6 months', context: 'Spasticity may become more apparent as your baby should be developing more relaxed, fluid movements. If your baby\'s limbs are still persistently stiff and resist passive movement, especially with faster movements, evaluation is recommended.' },
    { ageRange: '6-12 months', context: 'Spasticity at this age typically affects motor milestone achievement. Your baby may have difficulty sitting, reaching, or crawling due to tight muscles. Physical therapy started at this stage can significantly improve outcomes.' },
    { ageRange: '12-24 months', context: 'Spasticity in walking-age children may cause toe walking, scissoring gait, or stiff-legged walking. Treatment options include physical therapy, stretching, serial casting, botulinum toxin, and in some cases medication. Many children with spasticity achieve good functional mobility with treatment.' },
  ],
  whenNormal: ['Brief stiffness during excitement or startle that resolves quickly.', 'Muscles relax easily when your baby is calm.', 'Stiffness does not affect motor milestone achievement.', 'Tone feels the same regardless of how quickly you move the limb.'],
  whenToMention: ['Muscles resist faster movements more than slow ones.', 'Stiffness is persistent and does not resolve with calm handling.', 'One side of the body seems stiffer than the other.', 'Stiffness is limiting motor development.'],
  whenToActNow: ['Stiffness is rapidly increasing.', 'Your baby has new spasticity along with other neurological changes.'],
  relatedMilestones: ['gross-motor-sitting', 'gross-motor-crawling', 'gross-motor-walking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['stiff-baby-hypertonia', 'baby-hypertonia-movement-impact', 'baby-standing-legs-crossed'],
  sources: [
    { org: 'NIH', citation: 'Sanger TD, et al. Classification and Definition of Disorders Causing Hypertonia in Childhood. Pediatrics. 2003;111(1):e89-e97', url: 'https://pubmed.ncbi.nlm.nih.gov/12509602/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics - Cerebral Palsy', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Cerebral-Palsy.aspx' },
    { org: 'CDC', citation: 'CDC - Cerebral Palsy Facts', url: 'https://www.cdc.gov/ncbddd/cp/facts.html' },
  ],
};
