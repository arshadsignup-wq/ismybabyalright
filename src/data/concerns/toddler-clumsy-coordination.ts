import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-clumsy-coordination',
  title: 'My Toddler Seems Very Clumsy',
  category: 'physical',
  searchTerms: [
    'toddler clumsy',
    'toddler uncoordinated',
    'clumsy toddler normal',
    'toddler poor coordination',
    'toddler bumps into things',
    'toddler drops everything',
    'toddler clumsy vs normal',
    'when is clumsiness a concern toddler',
    'toddler motor coordination problems',
    'toddler awkward movement',
  ],
  quickAnswer:
    'Clumsiness is extremely common and normal in toddlers. Their brains are still developing the neural pathways for coordination, spatial awareness, and balance. Most toddlers appear clumsy compared to older children. However, if clumsiness is persistent, severe, or worsening after age 3, it may be worth evaluating for developmental coordination disorder.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'All toddlers at this age are clumsy. They are learning to walk, reach, and manipulate objects all at the same time. Bumping into furniture, knocking over cups, and falling are all completely normal. Your toddler is doing an enormous amount of motor learning, and clumsiness is simply part of the process.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers are becoming more mobile but are not yet coordinated. They may run into walls, trip over their own feet, and struggle with eating utensils. This is age-appropriate. Coordination improves with practice, and your child is practicing constantly. As long as overall improvement is happening, even slowly, things are on track.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Coordination should be noticeably improving. Your child should be able to walk without frequently bumping into things, stack blocks, and use utensils with increasing skill. Some clumsiness is still normal, especially during new activities. If your child seems significantly clumsier than peers, mention it to your pediatrician.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By this age, persistent significant clumsiness may warrant evaluation. Developmental coordination disorder (DCD) affects about 5-6% of children and can be identified around this age. Children with DCD are intelligent and capable but struggle with motor tasks. Early identification and occupational or physical therapy can make a big difference.',
    },
  ],
  whenNormal: [
    'Your toddler is under 3 and clumsiness is improving over time.',
    'Your toddler is clumsy mainly when tired, excited, or trying new activities.',
    'Your toddler can perform age-appropriate tasks like stacking blocks and using a spoon, even if messily.',
    'Your toddler\'s clumsiness seems similar to other children the same age.',
  ],
  whenToMention: [
    'Your child is over 3 years old and significantly clumsier than peers.',
    'Your child avoids physical activities because of coordination difficulties.',
    'Clumsiness is affecting daily tasks like eating, dressing, or playing.',
    'Your child seems frustrated by their motor difficulties.',
  ],
  whenToActNow: [
    'Your child was previously well-coordinated and has become suddenly clumsy.',
    'Clumsiness is accompanied by other new symptoms like vision changes, headaches, or balance problems.',
  ],
  relatedMilestones: [
    'gross-motor-walking',
    'gross-motor-running',
    'fine-motor-stacking',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-tripping-falling-often', 'poor-balance-toddler', 'toddler-dyspraxia-signs'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Developmental Coordination Disorder',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Blank R, et al. International Clinical Practice Recommendations on the Definition, Diagnosis, Assessment, Intervention, and Psychosocial Aspects of Developmental Coordination Disorder. Dev Med Child Neurol. 2019;61(3):242-285',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30671947/',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 3 Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
    },
  ],
};
