import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-not-releasing-objects',
  title: 'My Baby Can\'t Let Go of Objects Voluntarily',
  category: 'physical',
  searchTerms: ['baby can\'t release objects', 'baby won\'t let go of toys', 'baby can\'t drop things', 'baby holds onto everything', 'baby can\'t release grasp', 'voluntary release baby', 'when do babies learn to let go', 'baby won\'t put things down', 'baby drops objects involuntarily only', 'baby release grasp delay'],
  quickAnswer: 'Voluntary release (the ability to intentionally let go of objects) develops around 7-9 months. Before this, babies can grasp but can only release by dropping accidentally. If your baby cannot release objects at all by 10-12 months, mention it to your pediatrician. This skill is needed for stacking, feeding, and play.',
  byAge: [
    { ageRange: '3-6 months', context: 'Babies at this age grasp reflexively and cannot voluntarily let go. Objects fall from their hands when they lose interest or their grip relaxes. This is completely normal. Voluntary release is a more advanced skill that comes later.' },
    { ageRange: '6-9 months', context: 'Voluntary release begins developing. Your baby may start dropping objects on purpose, which is why the "drop it and watch you pick it up" game becomes so popular. Initial releases are crude and imprecise. This is a wonderful developmental milestone.' },
    { ageRange: '9-12 months', context: 'Your baby should be able to release objects into containers, hand toys to you, and place objects down. If your baby still cannot let go of objects voluntarily by 12 months, evaluation is recommended.' },
    { ageRange: '12-18 months', context: 'Release should be precise enough for stacking blocks, putting shapes in sorters, and placing objects carefully. If voluntary release is still a struggle, occupational therapy can help develop this important skill.' },
  ],
  whenNormal: ['Your baby is under 8 months and drops objects involuntarily.', 'Your baby can release but is not very precise yet.', 'Your baby is starting to drop objects on purpose during play.', 'Release is developing and improving week by week.'],
  whenToMention: ['Your baby is over 10 months and cannot voluntarily let go of objects.', 'Your baby\'s hands seem stuck in a fisted position.', 'Your baby cannot hand a toy to you by 12 months.'],
  whenToActNow: ['Your baby has lost the ability to grasp or release objects.', 'Your baby\'s hands are persistently fisted after 4 months of age.'],
  relatedMilestones: ['fine-motor-grasp', 'fine-motor-release', 'fine-motor-stacking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-not-grasping-objects', 'baby-clenching-fists-after-3-months', 'fine-motor-delay-general'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Hand and Finger Skills', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-1.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Baby at 9 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html' },
    { org: 'NIH', citation: 'Eliasson AC, et al. Development of Hand Function and Precision Grip. Acta Paediatrica. 1995', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
