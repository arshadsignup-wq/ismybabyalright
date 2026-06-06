import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-toe-walking-intermittent',
  title: 'My Toddler Toe Walks Sometimes',
  category: 'physical',
  searchTerms: ['toddler toe walking sometimes', 'toddler intermittent toe walking', 'toddler walks on toes sometimes', 'occasional toe walking toddler', 'toddler tiptoes sometimes', 'toddler goes on toes when excited', 'intermittent toe walking normal', 'toddler alternates flat and tiptoe', 'sometimes toe walking toddler', 'toddler toe walks on certain surfaces'],
  quickAnswer: 'Intermittent toe walking, where your toddler walks on toes sometimes but flat-footed other times, is very common and usually harmless. Many toddlers toe walk when excited, on new surfaces, or when walking fast. This is different from constant toe walking. Intermittent toe walking usually resolves by age 2-3.',
  byAge: [
    { ageRange: '10-15 months', context: 'Many new walkers toe walk intermittently as they experiment with balance. As long as your child can and does walk flat-footed, occasional toe walking is part of learning to walk.' },
    { ageRange: '15-24 months', context: 'Intermittent toe walking remains common. If your toddler walks flat most of the time and goes on toes when excited, running, or on cold surfaces, this is normal behavior.' },
    { ageRange: '2-3 years', context: 'Toe walking should be decreasing. If your child still toe walks intermittently but can easily put feet flat, this is usually benign. If toe walking is increasing rather than decreasing, mention it to your pediatrician.' },
    { ageRange: '3-4 years', context: 'Most intermittent toe walking resolves by this age. If it persists, ensure your child has full ankle range of motion. Any tightness warrants evaluation.' },
  ],
  whenNormal: ['Your child walks flat most of the time.', 'Toe walking happens when excited or on certain surfaces.', 'Your child can easily put feet flat when asked.', 'Full ankle range of motion is present.'],
  whenToMention: ['Toe walking is becoming more frequent rather than less.', 'Your child seems to have difficulty getting heels down.', 'Toe walking persists beyond age 3.'],
  whenToActNow: ['Your child was walking flat and has started constant toe walking.', 'Ankle stiffness is developing.'],
  relatedMilestones: ['gross-motor-walking', 'gross-motor-running'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toe-walking', 'baby-standing-on-toes-only'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Toe Walking', url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Toe-Walking.aspx' },
    { org: 'NIH', citation: 'Engstrom P, Tedroff K. Idiopathic Toe-Walking: Prevalence and Natural History. Pediatrics. 2018', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 18 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html' },
  ],
};
