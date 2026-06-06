import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-cant-throw-ball',
  title: 'My Toddler Can\'t Throw a Ball',
  category: 'physical',
  searchTerms: [
    'toddler can\'t throw ball',
    'toddler won\'t throw',
    'when can toddler throw ball',
    'toddler throwing milestone',
    'toddler can\'t throw overhand',
    'toddler drops ball instead of throwing',
    'teaching toddler to throw',
    'toddler ball throwing age',
    'toddler arm coordination throwing',
    'overhand throw development toddler',
  ],
  quickAnswer:
    'Throwing develops in stages. Most toddlers can throw underhand by 12-18 months and progress to an overhand throw by 18-24 months. Early throws are often more like dropping or pushing the ball. A true overhand throw with follow-through does not develop until around age 3-4.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Early throwing at this age looks like dropping, pushing, or flinging a ball. Your toddler is learning to release objects voluntarily and aim in a general direction. These early throws may not travel very far, and that is perfectly normal. The important thing is that your child is practicing the release action.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Most toddlers can throw a ball a short distance by now, though accuracy and distance are limited. Your child may throw underhand, overhand, or sideways. All of these are normal variations. If your child can release a ball and send it in the general desired direction, their throwing is developing normally.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Throwing should be improving in distance and coordination. Your child should be able to throw a ball overhand a few feet by age 2-3. If your child still cannot throw at all, consider whether they have opportunities to practice. If they have had practice but still cannot release and throw a ball, mention it to your pediatrician.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3-4, most children have a recognizable overhand throw, though it may still lack power and accuracy. If your child cannot throw at all, evaluation of upper body strength and coordination may be helpful.',
    },
  ],
  whenNormal: [
    'Your toddler is under 2 and throws are more like drops or pushes.',
    'Your toddler can throw but not accurately or very far.',
    'Your toddler throws underhand instead of overhand.',
    'Your toddler is developing other arm coordination skills like feeding and stacking blocks.',
  ],
  whenToMention: [
    'Your child is over 2.5 years and cannot throw a ball at all.',
    'Your child seems to have difficulty with arm coordination in general.',
    'Your child cannot release objects voluntarily.',
  ],
  whenToActNow: [
    'Your child has lost the ability to throw or has developed arm weakness.',
    'Your child has pain or stiffness in their arms affecting all arm movements.',
  ],
  relatedMilestones: [
    'gross-motor-ball-skills',
    'fine-motor-grasp',
    'gross-motor-balance',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-cant-kick-ball', 'toddler-cant-catch-ball', 'poor-hand-eye-coordination'],
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
        'CDC - Important Milestones: Your Child By 2 Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
    {
      org: 'NIH',
      citation:
        'Gallahue DL, Ozmun JC. Understanding Motor Development: Infants, Children, Adolescents, Adults. McGraw-Hill. 2006',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
