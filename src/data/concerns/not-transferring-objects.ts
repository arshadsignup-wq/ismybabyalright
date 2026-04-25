import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-transferring-objects',
  title: 'My Baby Isn\'t Transferring Objects Between Hands',
  category: 'physical',
  searchTerms: [
    'baby not transferring objects between hands',
    'baby won\'t pass toy from one hand to other',
    'when do babies transfer objects',
    'baby only uses one hand',
    'baby not switching hands',
    'baby can\'t pass things between hands',
    'when should baby transfer toys',
    'baby holds toy in one hand only',
    'baby not passing objects hand to hand',
    'midline crossing baby',
  ],
  quickAnswer:
    'Transferring objects from one hand to the other typically develops between 5 and 7 months. This is an important fine motor milestone that shows your baby can coordinate both sides of their body and cross the midline. Like all milestones, it develops gradually  -  your baby may fumble and drop the object many times before the transfer becomes smooth.',
  byAge: [
    {
      ageRange: '3-5 months',
      context:
        'Most babies are holding objects placed in their hand but aren\'t transferring yet. You might see your baby hold a toy in one hand and look at their other hand, or bring both hands together on an object. These are precursor skills. Your baby is building the neural connections needed for hand-to-hand transfer.',
    },
    {
      ageRange: '5-7 months',
      context:
        'This is when most babies start transferring objects between hands. It often begins accidentally  -  your baby reaches for a toy with both hands and ends up moving it from one to the other. Over time, it becomes more deliberate. Offering toys at the midline (center of their body) gives them natural opportunities to practice.',
    },
    {
      ageRange: '7-9 months',
      context:
        'By 7-9 months, most babies transfer objects smoothly and intentionally. If your baby isn\'t doing this at all by 9 months, mention it to your pediatrician. They\'ll want to make sure there isn\'t a strength or coordination difference between the two sides of the body. Often, simple activities and play suggestions can encourage this skill.',
    },
    {
      ageRange: '10+ months',
      context:
        'If your baby still isn\'t transferring objects between hands by 10 months, an evaluation is recommended. Your pediatrician may check for any asymmetry in muscle tone or movement between the two sides and may refer to an occupational therapist. These skills respond very well to targeted therapy activities.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and holds objects but doesn\'t transfer them yet  -  this skill is still developing.',
    'Your baby sometimes transfers and sometimes drops the object during the attempt  -  coordination is still refining.',
    'Your baby brings both hands together on objects at midline even if they don\'t formally "transfer" yet.',
    'Your baby was premature  -  use adjusted age for fine motor milestones.',
  ],
  whenToMention: [
    'Your baby is over 9 months and consistently uses only one hand while ignoring the other.',
    'Your baby can\'t seem to open one hand to accept an object from the other hand.',
    'You notice a clear difference in how well your baby moves or uses their right versus left hand.',
    'Your baby isn\'t bringing hands together at midline by 5-6 months.',
  ],
  whenToActNow: [
    'Your baby was transferring objects and has stopped  -  loss of fine motor skills needs prompt evaluation.',
    'One of your baby\'s hands is consistently fisted while the other moves freely, especially after 4 months.',
    'Your baby has no use of one arm or hand  -  this requires immediate medical evaluation.',
  ],
  relatedMilestones: [
    'fine-motor-grasping',
    'fine-motor-transferring',
    'fine-motor-midline-play',
    'fine-motor-pincer-grasp',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones: Your Child By 6 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Hand and Finger Skills: 4 to 7 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-4-to-7-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  If You\'re Concerned About Your Child\'s Development',
      url: 'https://www.cdc.gov/ncbddd/actearly/concerned.html',
    },
  ],
};
