import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-asymmetric-tonic-neck-persistent',
  title: 'My Baby Still Has the Fencing Reflex (Persistent ATNR)',
  category: 'physical',
  searchTerms: ['baby ATNR persistent', 'baby fencing reflex still present', 'asymmetric tonic neck reflex', 'baby extends arm when turns head', 'ATNR not gone', 'persistent fencing reflex', 'baby fencing posture', 'when does ATNR go away', 'ATNR integration delay', 'fencing reflex retained'],
  quickAnswer: 'The asymmetric tonic neck reflex (ATNR, also called the fencing reflex) causes your baby to extend the arm on the side they are looking toward. It should integrate between 4-6 months. If the ATNR persists strongly beyond 6 months, it can interfere with bringing hands to midline, bilateral hand use, and rolling. Evaluation is recommended.',
  byAge: [
    { ageRange: '0-3 months', context: 'The ATNR is normal and should be present. When your baby turns their head, the arm on that side extends while the opposite arm flexes. This helps develop early hand-eye coordination. It should not be the dominant posture but should be elicited by head turning.' },
    { ageRange: '3-5 months', context: 'The ATNR should be weakening. Your baby should be able to bring hands to midline and mouth their hands even when their head is turned. If the ATNR is still very strong and your baby is locked into the fencing posture, discuss it with your pediatrician.' },
    { ageRange: '5-7 months', context: 'The ATNR should be integrated by now. Your baby should freely bring hands to midline regardless of head position. Persistent ATNR at this age can delay bilateral hand use, rolling, and crawling.' },
    { ageRange: '7-12 months', context: 'A persistent ATNR at this age significantly warrants evaluation. It can be a sign of neurological differences and will interfere with many motor skills. Physical therapy can help with reflex integration.' },
  ],
  whenNormal: ['Your baby is under 5 months and shows ATNR intermittently.', 'Your baby can bring hands to midline despite some ATNR.', 'The ATNR is gradually weakening.'],
  whenToMention: ['ATNR is still obligatory (baby locked in position) beyond 4 months.', 'ATNR prevents your baby from bringing hands to midline.', 'The reflex persists beyond 6 months.'],
  whenToActNow: ['ATNR is getting stronger.', 'Your baby has other persistent reflexes alongside ATNR.'],
  relatedMilestones: ['fine-motor-bilateral', 'gross-motor-rolling'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-primitive-reflex-not-integrating', 'baby-not-bringing-hands-to-midline', 'baby-bilateral-coordination-poor'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Newborn Reflexes', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx' },
    { org: 'NIH', citation: 'Palano GM. Primitive Reflexes in the Neurodevelopmental Examination. Pediatr Neurol. 2004', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Baby at 6 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html' },
  ],
};
