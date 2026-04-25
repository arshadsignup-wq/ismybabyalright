import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-standing',
  title: 'My Baby Isn\'t Standing Independently',
  category: 'physical',
  searchTerms: [
    'baby not standing',
    'baby not standing on own',
    'when do babies stand alone',
    'baby not standing at 12 months',
    'baby not standing independently',
    'baby won\'t stand without holding on',
    'when should baby stand by themselves',
    'baby only stands holding furniture',
    'toddler not standing alone',
    'baby afraid to stand alone',
  ],
  quickAnswer:
    'Independent standing  -  letting go and balancing without holding anything  -  typically happens between 9 and 14 months, with many babies not mastering it until around 12 months. Standing independently requires tremendous balance and confidence, and it\'s one of those skills that often clicks suddenly after weeks of almost-but-not-quite moments.',
  byAge: [
    {
      ageRange: '8-10 months',
      context:
        'Very few babies stand independently this early. Most are just learning to pull up and may stand holding furniture. If your baby is pulling to stand and bearing weight on their legs, the foundation for independent standing is being built. This is not a concern at all.',
    },
    {
      ageRange: '11-12 months',
      context:
        'Many babies begin to let go and stand alone for a few seconds around this age, but plenty of babies still need to hold on. You might notice your baby standing at furniture and briefly letting go with one hand, or standing with just a fingertip on the couch. These are signs they\'re getting ready.',
    },
    {
      ageRange: '13-14 months',
      context:
        'If your baby is cruising confidently along furniture but won\'t let go, they may simply be a cautious child. Some babies need to feel completely steady before they\'ll release their grip. Try placing a motivating toy just out of reach while they\'re standing at furniture  -  sometimes a little incentive helps. If they\'re not pulling to stand at all by this age, talk to your pediatrician.',
    },
    {
      ageRange: '15-18 months',
      context:
        'Most babies are standing and walking by this age. If your child still can\'t stand independently, it\'s worth a conversation with your pediatrician. They may suggest an evaluation with a physical therapist, who can assess balance, muscle tone, and coordination. Many children benefit from a few sessions of targeted support.',
    },
  ],
  whenNormal: [
    'Your baby is under 12 months and is pulling to stand and cruising  -  independent standing is likely just around the corner.',
    'Your baby briefly lets go of furniture and stands for a second or two before grabbing on again  -  the skill is emerging.',
    'Your baby stands independently but only when distracted (holding a toy, watching something interesting)  -  they can do it, they just don\'t trust it yet.',
    'Your baby was premature  -  use adjusted age for motor milestone expectations.',
    'Your baby is cautious by temperament and prefers to hold on  -  personality plays a real role in when babies let go.',
  ],
  whenToMention: [
    'Your baby is over 14 months and cannot stand independently for even a few seconds.',
    'Your baby seems unsteady or wobbly even when holding furniture, well past the early cruising stage.',
    'Your baby stands but consistently on their toes rather than with flat feet.',
    'Your baby has no interest in upright positions and prefers to sit or lie down most of the time.',
  ],
  whenToActNow: [
    'Your baby was standing independently and has stopped  -  loss of achieved motor skills requires prompt evaluation.',
    'Your baby cannot bear weight on their legs at all by 12 months, even when you hold them in a standing position.',
    'Your baby\'s legs appear stiff, crossed, or significantly asymmetric when they try to stand.',
  ],
  relatedMilestones: [
    'gross-motor-pulling-to-stand',
    'gross-motor-cruising',
    'gross-motor-standing',
    'gross-motor-walking',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones: Your Child By 12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Movement Milestones: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'WHO',
      citation:
        'WHO Multicentre Growth Reference Study  -  Standing alone achieved between 6.9 and 16.9 months across populations',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
