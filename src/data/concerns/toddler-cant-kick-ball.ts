import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-cant-kick-ball',
  title: 'My Toddler Can\'t Kick a Ball',
  category: 'physical',
  searchTerms: [
    'toddler can\'t kick ball',
    'toddler won\'t kick ball',
    'when can toddler kick ball',
    'toddler kicking milestone',
    'toddler can\'t kick forward',
    'teaching toddler to kick',
    'toddler ball skills delay',
    'toddler kicking a ball age',
    'toddler leg coordination kicking',
    'toddler gross motor ball play',
  ],
  quickAnswer:
    'Kicking a ball forward is a milestone that typically develops between 18 and 24 months. It requires balancing on one foot while swinging the other, which is a complex motor skill. If your toddler is under 2 and cannot kick yet, this is within the normal range. Most children are kicking a ball forward by age 2.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Most toddlers at this age walk into a ball rather than kicking it, or they may stomp on it. This is completely normal. True kicking requires the ability to balance on one foot momentarily, which most toddlers have not developed yet. Your child is building the balance and leg strength they will need.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Kicking a ball forward typically develops during this period. Initial kicks may be small toe pokes rather than big swings. Your toddler is learning to shift weight to one foot while moving the other. If your child is not kicking yet but can walk well and is starting to attempt it, they are on track.',
    },
    {
      ageRange: '24-30 months',
      context:
        'Most children can kick a ball forward by now, even if not very far or accurately. If your child still cannot kick a ball, it may help to demonstrate and practice. If they seem to have difficulty balancing on one foot or have weak legs, mention it to your pediatrician.',
    },
    {
      ageRange: '30-36 months',
      context:
        'By age 3, most children can kick a ball a few feet. If your child cannot kick at all, your pediatrician may want to assess balance, leg strength, and coordination. Physical therapy can help children who are struggling with ball skills.',
    },
  ],
  whenNormal: [
    'Your toddler is under 24 months and is still learning to balance on one foot.',
    'Your toddler kicks weakly but is attempting the motion.',
    'Your toddler walks and runs well and is developing other gross motor skills on time.',
    'Your toddler walks into the ball rather than kicking it.',
  ],
  whenToMention: [
    'Your child is over 2 years old and shows no ability or interest in kicking a ball.',
    'Your child seems to have difficulty balancing on one foot even briefly.',
    'Your child has weak legs or difficulty with other leg-coordination tasks.',
  ],
  whenToActNow: [
    'Your child was previously able to kick and has lost this ability.',
    'Your child has leg weakness, stiffness, or pain affecting movement.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-cant-throw-ball', 'toddler-clumsy-coordination', 'poor-balance-toddler'],
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 2 Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Movement: 2 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Movement-2-Year-Olds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Gallahue DL, Ozmun JC. Understanding Motor Development: Infants, Children, Adolescents, Adults. McGraw-Hill. 2006',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
