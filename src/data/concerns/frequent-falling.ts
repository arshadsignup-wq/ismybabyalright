import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'frequent-falling',
  title: 'My Toddler Falls Down a Lot',
  category: 'physical',
  searchTerms: [
    'toddler falls a lot',
    'toddler falling frequently',
    'toddler clumsy',
    'toddler tripping over nothing',
    'toddler falls down all the time',
    'is it normal for toddler to fall so much',
    'toddler wobbly walking',
    'toddler unsteady on feet',
    'toddler balance problems',
    'when do toddlers stop falling',
    'toddler keeps falling over',
  ],
  quickAnswer:
    'Falling is a completely normal part of learning to walk and run, and most toddlers fall frequently in the first 6 months after they start walking. A new walker may fall dozens of times per day and that\'s expected. Falling typically decreases significantly by around 18-24 months of walking experience. It only becomes a concern if falling increases over time rather than decreasing, or if it seems out of proportion compared to peers.',
  byAge: [
    {
      ageRange: '12-15 months (new walkers)',
      context:
        'New walkers fall constantly  -  research shows that toddlers who just started walking may take 2,000+ steps and fall 17+ times per hour. Their wide-based, stiff-legged gait is normal for beginners. Every fall teaches their brain about balance. This is absolutely expected and not a reason for concern.',
    },
    {
      ageRange: '15-18 months',
      context:
        'Falling should be gradually decreasing as your toddler gains experience. Their gait is narrowing and they\'re getting better at navigating obstacles and uneven surfaces. Falls still happen regularly, especially when they\'re tired, excited, or on unfamiliar terrain. If falling seems to be increasing or staying the same, mention it at your next visit.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Most toddlers are fairly steady walkers by now, though they still trip and fall, especially when running or climbing. If your toddler is still very unsteady at this age and falls much more than peers, or if they seem to fall in unusual ways (like their legs giving out), it\'s worth discussing with your pediatrician.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, children should walk confidently and fall only occasionally. If your child still falls very frequently, seems unusually clumsy, or has difficulty with stairs, running, or kicking a ball, an evaluation can help determine whether there are balance, coordination, or muscle tone factors that would benefit from physical therapy support.',
    },
  ],
  whenNormal: [
    'Your child just started walking in the last 3-6 months  -  frequent falling is completely typical for new walkers.',
    'Your toddler falls more when tired, sick, or in a new environment  -  situational falling is normal.',
    'Your toddler falls while running or climbing but walks steadily  -  they\'re pushing their limits, which is how they learn.',
    'Falling is gradually decreasing over weeks and months  -  the trend is what matters.',
    'Your toddler trips on uneven surfaces, carpet edges, or going up/down slopes  -  these are tricky for everyone at first.',
  ],
  whenToMention: [
    'Your toddler has been walking for more than 6 months and is still very unsteady.',
    'Falling seems to be increasing rather than decreasing over time.',
    'Your toddler falls much more frequently than same-age peers.',
    'Your toddler seems to fall in unusual ways  -  legs giving out, falling backward, or falling only to one side.',
  ],
  whenToActNow: [
    'Your toddler was walking well and has become suddenly more unsteady or has started falling frequently  -  any regression in motor skills warrants prompt evaluation.',
    'Frequent falling is accompanied by complaints of leg or foot pain, limping, or refusal to walk.',
    'Your toddler seems dizzy, has changes in eye movement, or falling is accompanied by other neurological concerns like headaches or vomiting.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-climbing',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Movement Milestones: 12 to 24 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-12-to-24-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones: Your Child By 18 Months and 2 Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
    {
      org: 'AAP',
      citation:
        'Adolph KE, Cole WG, et al. How Do You Learn to Walk? Thousands of Steps and Dozens of Falls per Day. Psychological Science. 2012.',
      url: 'https://publications.aap.org/pediatrics',
    },
  ],
};
