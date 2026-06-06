import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-sleep-sounds-noisy',
  title: 'Noisy Sleeping: Grunting, Snoring, and Squeaking',
  category: 'medical',
  searchTerms: ['baby noisy sleeper', 'newborn grunting in sleep', 'baby snoring', 'newborn squeaking sounds sleep', 'baby loud breathing sleep', 'newborn sleep sounds normal', 'baby grunting all night', 'noisy breathing baby sleeping', 'newborn sounds during sleep', 'baby wheezing in sleep'],
  quickAnswer: 'Newborns are notoriously noisy sleepers. Grunting, squeaking, snorting, cooing, and even brief pauses in breathing are all normal during newborn sleep. These sounds are caused by small nasal passages, immature breathing patterns, and active (REM) sleep. Most noisy sleeping resolves as baby grows.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborns are remarkably noisy sleepers, and this catches many new parents off guard. Common sounds include: grunting (especially common, sometimes called "grunting baby syndrome" where baby grunts while learning to coordinate breathing and bowel movements), squeaking and chirping, snorting and snuffling (tiny nasal passages clog easily with mucus), brief pauses in breathing lasting a few seconds followed by a deeper breath (periodic breathing, which is normal), and sighing. These sounds are most prominent during active (REM) sleep. Newborns spend about 50% of sleep in REM. Using a nasal aspirator and saline drops can help if congestion is contributing to noisy breathing.' },
    { ageRange: '1-3 months', context: 'Noisy sleeping continues but may gradually improve as nasal passages grow and breathing patterns mature. Some babies develop laryngomalacia (floppy tissue above the vocal cords), which causes a high-pitched squeaking sound (stridor) that is loudest during inhalation. Laryngomalacia is usually benign and resolves by 12-18 months.' },
    { ageRange: '3-6 months', context: 'Sleep sounds generally become quieter as baby grows. Snoring may persist if baby has nasal congestion or enlarged adenoids. If loud snoring is consistent, mention it to your pediatrician.' },
    { ageRange: '6-12 months', context: 'Most of the newborn noisy sleeping has resolved. Persistent snoring, gasping, or pauses in breathing should be evaluated as they may indicate obstructive sleep apnea.' },
  ],
  whenNormal: ['Grunting, squeaking, snorting, and cooing during sleep', 'Brief pauses in breathing (under 10 seconds) followed by a catch-up breath', 'Sounds are loudest during active/light sleep', 'Baby is gaining weight, feeding well, and breathing comfortably when awake'],
  whenToMention: ['Consistent loud snoring during every sleep', 'High-pitched squeaking with every breath that worsens with feeding or crying (possible laryngomalacia)', 'Noisy breathing accompanied by poor weight gain or difficult feeding'],
  whenToActNow: ['Breathing pauses longer than 20 seconds', 'Baby turns blue or pale during sleep', 'Labored breathing with chest retractions (ribs showing), flaring nostrils, or belly breathing', 'Baby gasps or chokes repeatedly during sleep'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Normal Newborn Breathing. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Infant Sleep and Breathing Patterns.', url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/healthy-baby/art-20047438' },
  ],
  relatedConcernSlugs: ['newborn-eye-rolling-during-sleep', 'newborn-irregular-sleep-patterns', 'fast-breathing-after-feeding'],
};
