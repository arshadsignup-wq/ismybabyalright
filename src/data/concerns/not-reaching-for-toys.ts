import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-reaching-for-toys',
  title: 'My Baby Isn\'t Reaching for Toys',
  category: 'physical',
  searchTerms: [
    'baby not reaching for toys',
    'baby not grabbing things',
    'when do babies reach for objects',
    'baby not interested in toys',
    'baby won\'t grab toys',
    'baby not reaching at 4 months',
    'baby not reaching at 5 months',
    'baby doesn\'t try to grab things',
    'when should baby reach for things',
    'baby not swiping at toys',
  ],
  quickAnswer:
    'Babies typically begin reaching for objects around 3 to 5 months of age. Early reaching looks like swiping at dangling toys, and it gradually becomes more accurate and intentional. Reaching requires your baby to coordinate vision, arm movement, and the desire to interact with objects  -  it\'s a surprisingly complex skill that develops over several weeks.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Newborns don\'t reach for objects, and that\'s completely normal. Their hands are often fisted, and their arm movements are mostly reflexive. You might see early "pre-reaching"  -  jerky arm movements toward objects in their visual field  -  but intentional reaching isn\'t expected yet.',
    },
    {
      ageRange: '3-4 months',
      context:
        'Most babies begin swiping at toys or objects held in front of them around 3 to 4 months. Early reaching is imprecise  -  your baby might bat at a dangling toy and miss, or swipe with their whole arm. If your baby is tracking objects with their eyes and bringing their hands to midline, reaching is coming. Try holding toys at chest level rather than above their head.',
    },
    {
      ageRange: '5-6 months',
      context:
        'By 5 months, most babies are reaching for and grasping objects reliably. They should be able to grab a toy held in front of them using both hands. If your baby isn\'t reaching for things by 5 months, it\'s a good idea to mention it to your pediatrician, as it can indicate vision concerns, motor delays, or low muscle tone that are all very treatable.',
    },
    {
      ageRange: '7+ months',
      context:
        'Babies at this age should be reaching for, grasping, and manipulating objects confidently. If your baby still isn\'t reaching for toys, your pediatrician should evaluate them. They may check vision, upper body strength, and overall motor development. Early intervention for reaching and grasping difficulties is very effective.',
    },
  ],
  whenNormal: [
    'Your baby is under 4 months and swipes at objects but can\'t quite grab them yet  -  accuracy improves with practice.',
    'Your baby reaches for some objects but not others  -  they have preferences, and familiar objects may be more motivating.',
    'Your baby reaches more during certain activities (like bath time or feeding) than during play  -  context matters.',
    'Your baby reaches and grabs but immediately drops the object  -  holding on is a separate skill that comes next.',
    'Your baby was premature  -  use adjusted age for reaching milestones.',
  ],
  whenToMention: [
    'Your baby is over 5 months and doesn\'t reach toward objects held in front of them.',
    'Your baby doesn\'t seem to track objects with their eyes, which is a prerequisite for reaching.',
    'Your baby reaches with one arm consistently and never uses the other arm.',
    'Your baby\'s hands are still frequently fisted after 3-4 months of age.',
  ],
  whenToActNow: [
    'Your baby was reaching for objects and has stopped  -  any loss of motor skills needs prompt evaluation.',
    'Your baby shows no interest in objects, doesn\'t look at toys, and doesn\'t reach  -  this may indicate a vision concern that needs assessment.',
    'Your baby has very stiff or very floppy arms that prevent reaching, combined with other motor delays.',
  ],
  relatedMilestones: [
    'fine-motor-reaching',
    'fine-motor-grasping',
    'fine-motor-object-manipulation',
    'visual-tracking',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones: Your Child By 4 Months and 6 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Hand and Finger Skills: 4 to 7 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-4-to-7-Months.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Developmental Milestones: Fine Motor Skills and Visual Motor Skills',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-Fine-Motor-Skills.aspx',
    },
  ],
};
