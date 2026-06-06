import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-involuntary-movements', title: 'My Baby Has Unusual Involuntary Movements', category: 'physical',
  searchTerms: ['baby involuntary movements', 'baby unusual movements', 'baby abnormal movements', 'baby uncontrolled movements', 'baby movement disorder', 'baby choreiform movements', 'baby writhing movements', 'baby random movements', 'baby jerking movements awake', 'baby strange movements'],
  quickAnswer: 'While some jerky or unexpected movements are normal in babies (especially startles and sleep movements), persistent, unusual involuntary movements during wakefulness should be evaluated. These can range from benign conditions like benign myoclonus to more serious movement disorders. Recording the movements on video helps your pediatrician evaluate them.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns have many normal involuntary movements including startles (Moro reflex), jitteriness, and sleep myoclonus. If movements seem rhythmic, cannot be stopped by holding the limb, or your baby seems altered during episodes, contact your pediatrician.' },
    { ageRange: '3-6 months', context: 'As reflexes integrate, involuntary movements should decrease. New or persistent unusual movements should be evaluated. Video recording is extremely helpful for your doctor.' },
    { ageRange: '6-12 months', context: 'Babies at this age should have mostly purposeful movements. Involuntary movements such as rhythmic jerking, sustained posturing, or unusual writhing patterns warrant neurological evaluation.' },
    { ageRange: '12-24 months', context: 'Involuntary movements at this age should be evaluated by a pediatric neurologist. Many movement disorders in children are treatable once properly diagnosed.' },
  ],
  whenNormal: ['Brief startle movements.', 'Jitteriness that stops when the limb is held.', 'Movements only during sleep that do not wake baby.', 'Brief, self-limiting movements.'],
  whenToMention: ['Repetitive unusual movements during wakefulness.', 'Movements that cannot be stopped by holding the limb.', 'New involuntary movements appearing.'],
  whenToActNow: ['Movements accompanied by changes in consciousness.', 'Rhythmic jerking with eye deviation (possible seizure).', 'Progressive worsening of involuntary movements.'],
  relatedMilestones: ['gross-motor-reaching', 'gross-motor-sitting'], showSelfReferral: true,
  relatedConcernSlugs: ['baby-tremors', 'baby-twitching-in-sleep', 'baby-dystonia-movement-patterns'],
  sources: [
    { org: 'NIH', citation: 'Sanger TD, et al. Definition and Classification of Hyperkinetic Movements in Childhood. Mov Disord. 2010;25(11)', url: 'https://pubmed.ncbi.nlm.nih.gov/20629134/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics - Seizures and Epilepsy', url: 'https://www.healthychildren.org/English/health-issues/conditions/seizures/Pages/default.aspx' },
    { org: 'CDC', citation: 'CDC - Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/index.html' },
  ],
};
