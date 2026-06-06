import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-crossing-midline-difficulty',
  title: 'My Baby Doesn\'t Cross Their Body Midline',
  category: 'physical',
  searchTerms: ['baby not crossing midline', 'baby won\'t reach across body', 'crossing midline delay', 'baby uses closest hand only', 'baby midline crossing', 'toddler won\'t cross midline', 'midline development baby', 'baby switches hands midline', 'crossing body midline milestone', 'baby bilateral reaching'],
  quickAnswer: 'Crossing the midline means reaching across the center of the body with one hand to the opposite side. This skill typically develops around 8-12 months and becomes more consistent by 18 months. If your baby always uses the closest hand rather than reaching across, it may indicate developmental delays in bilateral integration.',
  byAge: [
    { ageRange: '4-8 months', context: 'Babies at this age typically reach with whichever hand is closest to the object. This is normal and does not mean they cannot cross the midline - the skill has not yet developed. You may see early crossing when they reach for a very motivating toy.' },
    { ageRange: '8-12 months', context: 'Crossing the midline should begin to emerge. Your baby may start reaching across their body to grab toys or food on the other side. If your baby consistently avoids crossing midline by 12 months, this is worth monitoring.' },
    { ageRange: '12-18 months', context: 'Crossing the midline should be developing more consistently. If your toddler switches hands at midline rather than reaching across, mention it to your pediatrician. Activities that encourage reaching across the body can help develop this skill.' },
    { ageRange: '18-24 months', context: 'Midline crossing should be well established. Persistent avoidance of crossing midline may indicate motor planning difficulties or bilateral integration issues that benefit from occupational therapy.' },
  ],
  whenNormal: ['Your baby is under 10 months and uses the closest hand.', 'Your baby occasionally crosses midline during play.', 'Your baby is beginning to reach across their body for interesting toys.', 'Midline crossing is improving over time.'],
  whenToMention: ['Your baby is over 12 months and consistently avoids crossing midline.', 'Your child switches hands at the center of the body during activities like drawing.', 'Your child has difficulty with bilateral tasks that require midline crossing.'],
  whenToActNow: ['Your child has lost the ability to use one side of their body.', 'Your child has sudden changes in reaching or hand use patterns.'],
  relatedMilestones: ['fine-motor-bilateral', 'fine-motor-coordination'],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-bilateral-coordination-poor', 'baby-not-bringing-hands-to-midline', 'baby-hand-dominance-too-early'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Hand and Finger Skills Development', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-1.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones by Age', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
    { org: 'NIH', citation: 'Van Hof P, et al. The Development of Reaching Across the Midline. Infant Behav Dev. 2002', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
