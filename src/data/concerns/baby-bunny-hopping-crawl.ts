import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-bunny-hopping-crawl',
  title: 'My Baby Bunny Hops When Crawling',
  category: 'physical',
  searchTerms: [
    'baby bunny hopping crawl',
    'baby hops when crawling',
    'baby both legs together crawling',
    'baby jumps forward crawling',
    'bunny hop crawling pattern',
    'baby symmetric crawling legs together',
    'baby doesn\'t alternate legs crawling',
    'baby pulls both legs up crawling',
    'bunny crawl baby normal',
    'baby crawling with legs together',
  ],
  quickAnswer:
    'Bunny hopping, where a baby moves both legs together rather than alternating them while crawling, can be a normal variation but should be monitored. While some babies bunny hop briefly before developing a reciprocal crawling pattern, persistent bunny hopping may indicate tight hip muscles or neurological differences that benefit from evaluation.',
  byAge: [
    {
      ageRange: '7-9 months',
      context:
        'When babies first start crawling, some experimentation with movement patterns is normal, including bunny hopping. If your baby has just started moving and bunny hops sometimes but also alternates legs at other times, this may simply be part of learning. Watch over the next few weeks to see if an alternating pattern develops.',
    },
    {
      ageRange: '9-12 months',
      context:
        'If your baby exclusively bunny hops and never alternates their legs while crawling, mention it to your pediatrician. Persistent bunny hopping can sometimes indicate increased muscle tone in the legs or hips. However, some babies who bunny hop develop perfectly normally and transition to walking without issues.',
    },
    {
      ageRange: '12-15 months',
      context:
        'If your baby is still bunny hopping and is also starting to pull up and cruise, the bunny hopping alone may not be concerning. However, if you notice stiffness in the legs, toe walking when standing, or difficulty separating the legs, an evaluation is recommended.',
    },
    {
      ageRange: '15-18 months',
      context:
        'If your child has transitioned to walking and seems coordinated, the bunny hopping phase was likely just a variation. If walking also shows unusual patterns like stiff legs or toe walking, discuss with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby just started crawling and sometimes bunny hops, sometimes alternates legs.',
    'Your baby bunny hops but can also separate their legs and sit with legs apart.',
    'Your baby is developing other motor skills on track.',
    'The bunny hopping resolves within a few weeks as crawling matures.',
  ],
  whenToMention: [
    'Your baby exclusively bunny hops and never alternates legs while crawling.',
    'Your baby seems to have stiff legs or difficulty separating them.',
    'Bunny hopping has persisted for more than 4-6 weeks with no change.',
    'Your baby also has toe walking, leg scissoring, or other unusual movement patterns.',
  ],
  whenToActNow: [
    'Your baby has increasing stiffness in their legs or seems to be losing motor skills.',
    'Your baby cannot move their legs independently at all.',
  ],
  relatedMilestones: [
    'gross-motor-crawling',
    'gross-motor-pulling-to-stand',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-asymmetric-crawling-pattern', 'stiff-baby-hypertonia', 'delayed-crawling'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Movement: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'NIH',
      citation: 'Sanger TD, et al. Classification and Definition of Disorders Causing Hypertonia in Childhood. Pediatrics. 2003;111(1):e89-e97',
      url: 'https://pubmed.ncbi.nlm.nih.gov/12509602/',
    },
    {
      org: 'CDC',
      citation: 'CDC - Important Milestones: Your Baby at 9 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
  ],
};
