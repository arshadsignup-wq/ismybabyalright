import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-tonic-labyrinthine-reflex',
  title: 'My Baby May Have Persistent Tonic Labyrinthine Reflex (TLR)',
  category: 'physical',
  searchTerms: ['tonic labyrinthine reflex baby', 'TLR persistent baby', 'baby arches back head tilted', 'tonic labyrinthine reflex retained', 'baby stiffens when tilted back', 'TLR integration', 'baby extends when head back', 'baby flexes when head forward', 'persistent TLR signs', 'tonic labyrinthine reflex not gone'],
  quickAnswer: 'The tonic labyrinthine reflex (TLR) causes your baby to extend when their head tilts backward and flex when tilted forward. It normally integrates by 6 months. Persistence can affect head control, balance, posture, and muscle tone. If you notice your baby consistently stiffening or extending when their head tilts backward past 6 months, discuss it with your pediatrician.',
  byAge: [
    { ageRange: '0-3 months', context: 'TLR is normal at this age. Your baby may stiffen and extend when you tilt them backward or when their head falls back. This is part of normal neurological development and will integrate as your baby develops head control.' },
    { ageRange: '3-6 months', context: 'TLR should be weakening as head control develops. Your baby should be gaining the ability to hold their head steady in different positions without the reflex overpowering them.' },
    { ageRange: '6-9 months', context: 'TLR should be integrated. If your baby still extends strongly when their head tilts backward, it may affect sitting balance, rolling, and transitional movements. Evaluation is recommended.' },
    { ageRange: '9-12 months', context: 'Persistent TLR at this age warrants thorough evaluation and likely physical therapy intervention. It can significantly affect motor development including balance, posture, and movement transitions.' },
  ],
  whenNormal: ['Your baby is under 6 months and TLR is gradually weakening.', 'Your baby has good head control and the reflex does not affect function.', 'Brief extension when startled or position changes.'],
  whenToMention: ['TLR persists strongly beyond 6 months.', 'Your baby stiffens and extends whenever their head tilts backward.', 'The reflex affects sitting balance or head control.'],
  whenToActNow: ['TLR is getting stronger.', 'Your baby has other persistent reflexes alongside TLR.'],
  relatedMilestones: ['gross-motor-head-control', 'gross-motor-sitting', 'gross-motor-balance'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-primitive-reflex-not-integrating', 'baby-arching-back', 'poor-trunk-control'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Newborn Reflexes', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx' },
    { org: 'NIH', citation: 'Palano GM. Primitive Reflexes in the Neurodevelopmental Examination. 2004', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
