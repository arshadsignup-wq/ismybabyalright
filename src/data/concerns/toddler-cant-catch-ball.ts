import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-cant-catch-ball',
  title: 'My Toddler Can\'t Catch a Ball',
  category: 'physical',
  searchTerms: [
    'toddler can\'t catch ball',
    'toddler won\'t catch',
    'when can toddler catch ball',
    'toddler catching milestone',
    'toddler drops ball when thrown to them',
    'teaching toddler to catch',
    'toddler ball catching age',
    'toddler hand eye coordination catching',
    'toddler trapping ball',
    'when do kids learn to catch',
  ],
  quickAnswer:
    'Catching is one of the most challenging ball skills and develops much later than throwing. Most toddlers cannot catch a thrown ball. Trapping a rolled ball against the body begins around 2-3 years, and catching a gently tossed ball with hands starts around age 3-4. This is a normal developmental timeline.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Toddlers at this age cannot catch a ball, and they are not expected to. Your child may enjoy rolling a ball back and forth with you, which is the precursor to catching skills. This rolling game helps develop hand-eye coordination and the concept of tracking a moving object.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Your toddler may start to trap a rolled ball using their arms and body. They are unlikely to catch a thrown ball. Playing rolling games, bouncing balls, and other ball play builds the tracking and timing skills needed for catching later.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Some children begin to catch large balls by trapping them against their chest. This is early catching and is a significant achievement. If your child can trap a large ball sometimes, their hand-eye coordination is developing well. True hand-catching with outstretched arms comes later.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most children can catch a large, gently tossed ball by age 3-4. If your child still cannot attempt to catch at all and does not try to reach for an approaching ball, mention it to your pediatrician, as it may indicate visual tracking or coordination difficulties.',
    },
  ],
  whenNormal: [
    'Your toddler is under 3 and cannot catch a thrown ball.',
    'Your toddler can roll a ball back and forth during play.',
    'Your toddler tries to catch but misses or traps against their body.',
    'Your toddler tracks a moving ball with their eyes.',
  ],
  whenToMention: [
    'Your child is over 3 and does not attempt to catch or react to balls tossed toward them.',
    'Your child seems unable to track moving objects with their eyes.',
    'Your child has difficulty with other hand-eye coordination tasks.',
  ],
  whenToActNow: [
    'Your child has lost coordination skills they previously had.',
    'Your child seems unable to visually track objects or has sudden changes in vision.',
  ],
  relatedMilestones: [
    'gross-motor-ball-skills',
    'fine-motor-coordination',
    'visual-tracking',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-cant-throw-ball', 'toddler-cant-kick-ball', 'poor-hand-eye-coordination'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Movement: 2 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-2-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 3 Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
    },
    {
      org: 'NIH',
      citation:
        'Gallahue DL, Ozmun JC. Understanding Motor Development: Infants, Children, Adolescents, Adults. McGraw-Hill. 2006',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
