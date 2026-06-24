import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-scissors-use-when',
  title: 'When Should My Toddler Learn to Use Scissors?',
  category: 'physical',
  searchTerms: [
    'when can toddler use scissors',
    'toddler scissors age',
    'toddler cutting with scissors milestones',
    'safety scissors toddler',
    'teaching toddler to cut with scissors',
    'toddler can\'t use scissors',
    'fine motor skills cutting toddler',
    'best scissors for toddler',
    'toddler scissor skills development',
    'preschooler cutting skills',
  ],
  quickAnswer:
    'Most children begin showing interest in scissors around age 2 and can start learning to snip with safety scissors around age 2.5-3 years. By age 3-4, many children can cut along a straight line, and by age 4-5, they can cut out simple shapes. Scissor use is a complex fine motor skill that requires hand strength, bilateral coordination, and visual-motor control. Introducing child-safe scissors with close supervision is appropriate once your child shows interest and readiness.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Most toddlers are not ready for scissors at this age, but you can build foundational skills. Activities that develop the hand strength and coordination needed for cutting include tearing paper, squeezing sponges, playing with playdough, using tongs or tweezers to pick up objects, and opening and closing spring-loaded clothespins. These activities strengthen the small muscles in the hands and fingers that are essential for scissor use later.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Around age 2.5-3, many children are ready to try safety scissors with direct supervision. Start with spring-loaded training scissors that open automatically, requiring only a squeezing motion. Let your child practice "snipping" — making single cuts on a strip of paper. Show them how to hold scissors with their thumb on top and demonstrate the open-close motion. Do not expect them to cut along lines yet. Keep sessions short and always supervise. Some children may not be interested until closer to age 3, which is perfectly normal.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Between ages 3-4, children typically progress from random snipping to cutting along a straight line, then a curved line. By age 4-5, most children can cut out simple shapes like circles and squares, though their cuts may be rough. Left-handed children should use left-handed scissors, as regular scissors are significantly harder for them to manage. If your child is 4 years old and cannot snip at all or shows no interest in fine motor activities, mention this to your pediatrician or consider an occupational therapy evaluation.',
    },
  ],
  whenNormal: [
    'Your 2-year-old shows no interest in scissors — most children are not ready until age 2.5-3',
    'Your toddler can snip paper but cannot cut along a line — cutting accuracy develops gradually through age 4-5',
    'Your toddler switches hands when using scissors — hand dominance may not be established until age 3-4',
    'Your toddler gets frustrated with scissors and gives up quickly — this is a difficult skill that requires practice',
  ],
  whenToMention: [
    'Your child is 4 years old and cannot open and close scissors at all despite practice',
    'Your child avoids all fine motor activities including drawing, puzzles, and manipulating small objects',
    'Your child has significantly weaker hand strength compared to peers and struggles with everyday tasks like opening containers',
  ],
  whenToActNow: [
    'Your child has injured themselves with scissors — clean the wound, apply pressure, and seek medical care if the cut is deep',
    'Your child has lost fine motor abilities they previously had',
    'Your child has persistent weakness, tremors, or inability to control their hand movements',
  ],
  relatedMilestones: [
    'fine-motor-grasp',
    'fine-motor-manipulation',
    'bilateral-coordination',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-drawing-scribbling-milestones',
    'toddler-puzzle-skills-age',
    'weak-grip-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones: Preschoolers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Developmental-Milestones-3-to-4-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Three Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
    },
    {
      org: 'AOTA',
      citation:
        'American Occupational Therapy Association. Fine Motor Development in Early Childhood.',
      url: 'https://www.aota.org/about/fundamental-literacy/fine-motor',
    },
  ],
};
