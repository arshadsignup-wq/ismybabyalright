import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-running-awkward-gait',
  title: 'My Toddler Has an Awkward Running Gait',
  category: 'physical',
  searchTerms: [
    'toddler running awkward',
    'toddler runs funny',
    'awkward running gait toddler',
    'toddler running form weird',
    'toddler runs stiffly',
    'toddler clumsy running',
    'toddler runs on toes',
    'toddler running with arms out',
    'when does running look normal toddler',
    'toddler uncoordinated running',
  ],
  quickAnswer:
    'Running starts around 18-24 months and initially looks quite awkward and uncoordinated. Toddlers typically run with a flat-footed stride, arms held out for balance, and limited coordination. A mature running pattern does not develop until age 3-4, so awkward running is completely normal for toddlers.',
  byAge: [
    {
      ageRange: '15-18 months',
      context:
        'If your toddler is just starting to run, their "running" is essentially fast walking. They may totter, use their arms for balance, and look very unsteady. This is completely normal. True running with a flight phase (both feet off the ground) does not typically develop until around 18-24 months.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Early running at this age looks quite different from adult running. Expect wide legs, arms out for balance, flat foot landings, and frequent stumbles. Your toddler is learning to coordinate speed, balance, and direction all at once. Awkward running is the norm at this age.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Running should be becoming more coordinated, with better arm swing and fewer falls. However, running form at this age is still developing and may look clumsy compared to older children. If your child can run across a room without falling, stop and change direction, their running development is on track even if it looks a bit awkward.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3-4, most children have a fairly coordinated running pattern. If your child\'s running still looks very awkward, involves a lot of tripping, or seems to be getting worse rather than better, mention it to your pediatrician. Some children benefit from physical therapy to improve coordination.',
    },
  ],
  whenNormal: [
    'Your toddler is under 3 years old and running looks stiff or uncoordinated.',
    'Your toddler\'s running is gradually improving over time.',
    'Your toddler runs with arms out for balance but is getting steadier.',
    'Your toddler can stop and change direction without always falling.',
  ],
  whenToMention: [
    'Your child is over 3 years old and running still looks very awkward or clumsy.',
    'Your child falls frequently while running compared to peers.',
    'Your child\'s running involves unusual movements like head tilting or crossing legs.',
    'Running does not seem to be improving over several months.',
  ],
  whenToActNow: [
    'Your child\'s running has become worse or they have lost coordination they previously had.',
    'Your child has pain when running or refuses to run.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-clumsy-coordination', 'frequent-falling', 'toddler-tripping-falling-often'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Movement: 18 Months to 2 Years',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-18-Months-to-2-Years.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 2 Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
    {
      org: 'NIH',
      citation:
        'Whitall J, Getchell N. From Walking to Running: Applying a Dynamical Systems Approach to the Development of Locomotor Skills. Child Dev. 1995;66:1541-1553',
      url: 'https://pubmed.ncbi.nlm.nih.gov/8556903/',
    },
  ],
};
