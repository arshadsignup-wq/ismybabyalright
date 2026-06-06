import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-bilateral-coordination-poor',
  title: 'My Baby Has Difficulty Using Both Hands Together',
  category: 'physical',
  searchTerms: ['baby bilateral coordination', 'baby not using both hands', 'baby one hand play only', 'baby bilateral hand use', 'baby can\'t use hands together', 'baby not coordinating hands', 'two handed play delay', 'baby midline hand play', 'baby using hands together', 'bilateral integration baby'],
  quickAnswer: 'Bilateral coordination (using both hands together) develops gradually. Babies begin bringing hands to midline around 3-4 months and use both hands together for tasks like holding a bottle or banging objects by 7-9 months. If your baby consistently avoids using both hands together by 9-10 months, mention it to your pediatrician.',
  byAge: [
    { ageRange: '0-3 months', context: 'Hands are often fisted and movements are not yet coordinated. Bringing hands to midline begins around 3 months. One-handed reaching is normal at this age.' },
    { ageRange: '3-6 months', context: 'Your baby should start bringing hands together at midline, grasping with both hands, and transferring objects from one hand to the other. If your baby does not bring hands to midline by 5 months, mention it to your doctor.' },
    { ageRange: '6-9 months', context: 'Bilateral hand use should be emerging clearly - holding a toy in one hand while reaching with the other, banging objects together, and clapping. If your baby only uses one hand and ignores the other, evaluation is recommended.' },
    { ageRange: '9-12 months', context: 'Complex bilateral hand tasks like pulling apart toys, holding a container while putting objects in, and feeding with one hand while stabilizing with the other should be developing. Persistent one-handed play warrants evaluation.' },
  ],
  whenNormal: ['Your baby is under 6 months and just beginning to use both hands.', 'Your baby uses both hands but prefers one for certain tasks.', 'Your baby is developing bilateral skills progressively.', 'Your baby can bring hands to midline and clasp them together.'],
  whenToMention: ['Your baby is over 9 months and consistently ignores one hand.', 'Your baby cannot bring hands to midline by 5 months.', 'Your baby never uses both hands together for play.'],
  whenToActNow: ['Your baby has lost use of one hand.', 'Your baby\'s hand function is declining on one or both sides.'],
  relatedMilestones: ['fine-motor-bilateral', 'fine-motor-grasp'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-not-bringing-hands-to-midline', 'baby-not-using-one-arm', 'baby-crossing-midline-difficulty'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Hand and Finger Skills', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-1.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Baby at 6 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html' },
    { org: 'NIH', citation: 'Fagard J, Lockman JJ. The Effect of Task Constraints on Infants Bimanual Strategy. Dev Psychol. 2005;41(1)', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
