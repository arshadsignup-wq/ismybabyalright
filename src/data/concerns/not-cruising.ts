import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-cruising',
  title: 'My Baby Isn\'t Cruising Along Furniture',
  category: 'physical',
  searchTerms: [
    'baby not cruising',
    'baby not walking along furniture',
    'when do babies cruise',
    'baby not cruising at 10 months',
    'baby not cruising at 12 months',
    'baby pulls up but won\'t cruise',
    'baby stands at furniture but won\'t move',
    'when should baby walk holding furniture',
    'baby not sidestepping along couch',
    'cruising milestone baby',
  ],
  quickAnswer:
    'Cruising  -  walking sideways while holding onto furniture  -  typically begins between 8 and 12 months. Some babies cruise for weeks before walking independently, while others barely cruise at all and go straight from pulling to stand to walking. The timeline varies enormously, and cruising itself is not a required milestone.',
  byAge: [
    {
      ageRange: '8-9 months',
      context:
        'Some babies begin cruising this early, but many haven\'t started yet. If your baby is pulling to stand and seems steady on their feet, cruising may start any day. You might see early cruising behaviors like shifting weight from foot to foot while standing at furniture, or sliding along a surface while holding on with both hands.',
    },
    {
      ageRange: '10-11 months',
      context:
        'This is the most common window for cruising to develop. If your baby pulls to stand confidently but stands in one spot, try placing a motivating toy just out of reach along the furniture edge. Some babies need a reason to take those first sideways steps. If your baby isn\'t pulling to stand yet at this age, that\'s the more relevant concern to discuss with your doctor.',
    },
    {
      ageRange: '12-13 months',
      context:
        'If your baby pulls to stand but hasn\'t started cruising by 12 months, it\'s worth mentioning at a well visit. However, keep in mind that some babies skip cruising and walk independently without doing much furniture walking first. What matters more is the overall motor trajectory  -  are they building toward independent mobility?',
    },
    {
      ageRange: '14+ months',
      context:
        'If your baby isn\'t cruising or showing signs of moving toward walking by 14 months, talk to your pediatrician. They can assess whether there are balance, strength, or coordination factors to address. A pediatric physical therapist can provide helpful strategies and exercises to support your baby\'s progression toward walking.',
    },
  ],
  whenNormal: [
    'Your baby is under 11 months and is pulling to stand  -  cruising often follows within a few weeks.',
    'Your baby cruises along some surfaces (like the couch) but not others (like walls)  -  they\'re learning which surfaces offer good handholds.',
    'Your baby stands at furniture and bounces or dances but doesn\'t move sideways yet  -  they\'re building balance and confidence.',
    'Your baby skips cruising and takes independent steps  -  not all babies cruise, and that\'s perfectly fine.',
    'Your baby was premature  -  use adjusted age for motor milestones.',
  ],
  whenToMention: [
    'Your baby is over 12 months and isn\'t cruising or showing any signs of moving toward walking.',
    'Your baby pulls to stand but seems very wobbly and falls frequently, making cruising difficult.',
    'Your baby cruises but only moves in one direction or strongly favors one side.',
    'Your baby seems afraid of standing at furniture and cries when placed in a standing position.',
  ],
  whenToActNow: [
    'Your baby was cruising and has stopped  -  loss of motor skills requires prompt evaluation.',
    'Your baby can\'t bear weight on their legs by 12 months or has no interest in upright positions.',
    'Your baby has stiff, crossed legs when standing or moves very asymmetrically.',
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
        'WHO Multicentre Growth Reference Study  -  Walking with assistance achieved between 5.9 and 13.7 months',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
