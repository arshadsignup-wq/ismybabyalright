import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-hypertonia-movement-impact',
  title: 'High Muscle Tone Is Affecting My Baby\'s Movement',
  category: 'physical',
  searchTerms: ['baby high tone movement', 'hypertonia movement difficulty', 'stiff baby movement problems', 'baby rigid muscles movement', 'high muscle tone crawling difficulty', 'hypertonia walking impact', 'baby stiff legs movement', 'high tone affecting development', 'hypertonia motor delay', 'baby stiffness limiting movement'],
  quickAnswer: 'High muscle tone (hypertonia) can make it harder for your baby to move freely, as stiff muscles resist stretching and limit range of motion. Physical therapy is very effective for managing hypertonia, helping to improve flexibility, range of motion, and functional movement. Early intervention leads to the best outcomes.',
  byAge: [
    { ageRange: '0-3 months', context: 'High tone in newborns may appear as stiff, rigid limbs that resist bending, difficulty with diaper changes, or arms and legs that stay in tight positions. Some increased tone is normal in newborns, but persistent stiffness should be evaluated.' },
    { ageRange: '3-6 months', context: 'If high tone is affecting your baby\'s ability to bring hands to midline, reach for toys, or develop age-appropriate movements, physical therapy can help. Stretching exercises and positioning strategies can improve range of motion.' },
    { ageRange: '6-12 months', context: 'High tone may affect sitting, crawling, and transitional movements. Your baby may have difficulty getting into and out of positions. Physical therapy focused on stretching, strengthening, and functional movement is important during this period.' },
    { ageRange: '12-24 months', context: 'If your child is walking with high tone, they may have stiff gait, toe walking, or scissoring. Ongoing physical therapy, and in some cases medication or botulinum toxin injections, can improve functional movement. An orthopedic evaluation may also be recommended.' },
  ],
  whenNormal: ['Some stiffness that comes and goes with excitement or effort.', 'Your baby can be positioned and moved comfortably with gentle handling.', 'Stiffness is mild and not limiting motor milestones.', 'Your baby was premature and tone is normalizing with age.'],
  whenToMention: ['Stiffness makes it difficult for your baby to move freely.', 'High tone is interfering with motor milestones.', 'Diaper changes and dressing are difficult due to stiff legs or arms.', 'Your baby has scissoring or crossing of legs when held upright.'],
  whenToActNow: ['Stiffness is increasing or new.', 'Your baby seems to be in pain related to muscle stiffness.', 'Your baby is losing motor skills alongside increasing tone.'],
  relatedMilestones: ['gross-motor-crawling', 'gross-motor-walking', 'gross-motor-sitting'],
  showSelfReferral: true,
  relatedConcernSlugs: ['stiff-baby-hypertonia', 'baby-spasticity-signs', 'baby-standing-legs-crossed'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Cerebral Palsy', url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Cerebral-Palsy.aspx' },
    { org: 'NIH', citation: 'Sanger TD, et al. Classification and Definition of Disorders Causing Hypertonia in Childhood. Pediatrics. 2003;111(1)', url: 'https://pubmed.ncbi.nlm.nih.gov/12509602/' },
    { org: 'CDC', citation: 'CDC - Cerebral Palsy Information', url: 'https://www.cdc.gov/ncbddd/cp/index.html' },
  ],
};
