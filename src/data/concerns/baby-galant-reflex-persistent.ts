import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-galant-reflex-persistent',
  title: 'My Baby Still Has the Spinal Galant Reflex',
  category: 'physical',
  searchTerms: ['baby spinal galant reflex', 'galant reflex persistent', 'baby curves when back stroked', 'spinal galant not gone', 'galant reflex integration', 'baby twists when back touched', 'persistent galant reflex', 'baby hip swing back touch', 'when does galant reflex go away', 'spinal galant reflex retained'],
  quickAnswer: 'The spinal galant reflex causes your baby to curve their trunk toward the side that is stroked along the spine. It normally integrates by 3-9 months. Persistence beyond 9 months may affect sitting posture, potty training (sensitivity to clothing against the back), and concentration. If you notice your baby still curves strongly when their back is stroked after 9 months, mention it to your pediatrician.',
  byAge: [
    { ageRange: '0-3 months', context: 'The spinal galant reflex is normal at this age. When you stroke along one side of your baby\'s spine, they curve toward that side. This reflex is thought to help babies wiggle through the birth canal during delivery.' },
    { ageRange: '3-6 months', context: 'The reflex should be weakening. Your baby may still respond to back stroking but the response should be less dramatic. If the reflex is still very strong, it may affect your baby\'s ability to lie flat comfortably.' },
    { ageRange: '6-9 months', context: 'The galant reflex should be integrated or very weak by now. If it persists strongly, it may contribute to difficulty sitting still, sensitivity along the back, and postural issues.' },
    { ageRange: '9-12 months', context: 'Persistence of the galant reflex at this age warrants evaluation. Physical or occupational therapy can help integrate retained reflexes. Some children with persistent galant reflex are fidgety and have difficulty sitting comfortably.' },
  ],
  whenNormal: ['Your baby is under 6 months and responds to back stroking.', 'The response is weakening over time.', 'Your baby is not bothered by clothing or lying on their back.'],
  whenToMention: ['The galant reflex persists beyond 9 months.', 'Your baby seems very sensitive to back touch.', 'Your baby is very fidgety and cannot sit comfortably.'],
  whenToActNow: ['The reflex is getting stronger.', 'Multiple reflexes are persisting beyond their expected timeframes.'],
  relatedMilestones: ['gross-motor-sitting', 'gross-motor-balance'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-primitive-reflex-not-integrating', 'poor-trunk-control'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Newborn Reflexes', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx' },
    { org: 'NIH', citation: 'Palano GM. Primitive Reflexes in the Neurodevelopmental Examination. 2004', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Developmental Monitoring', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
