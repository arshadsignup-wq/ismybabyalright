import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-rolling-one-direction-only',
  title: 'My Baby Only Rolls One Way',
  category: 'physical',
  searchTerms: [
    'baby only rolls one direction',
    'baby rolls left not right',
    'baby won\'t roll both ways',
    'baby rolling one side only',
    'baby prefers rolling one direction',
    'asymmetric rolling baby',
    'baby only rolls to one side',
    'when should baby roll both ways',
    'baby favors one side rolling',
    'one direction rolling baby',
  ],
  quickAnswer:
    'It is very common for babies to first learn to roll in one direction and then learn the other direction days or weeks later. Many babies have a preferred rolling direction for several weeks. This usually resolves on its own. However, if your baby can only roll one direction for more than 6-8 weeks, mention it to your pediatrician.',
  byAge: [
    {
      ageRange: '3-5 months',
      context:
        'When babies first learn to roll, they almost always roll in one direction first. This is completely normal. Your baby is still figuring out the mechanics and will likely learn the other direction within a few weeks. You can encourage rolling to the non-preferred side by placing interesting toys on that side.',
    },
    {
      ageRange: '5-7 months',
      context:
        'Most babies can roll in both directions by 6-7 months. If your baby strongly prefers one direction but can roll the other way when motivated, this is likely just a preference. If your baby seems unable to roll one direction at all, mention it at your next well visit.',
    },
    {
      ageRange: '7-9 months',
      context:
        'By this age, your baby should be able to roll in both directions. If they still can only roll one way, it is worth checking for asymmetry in muscle tone or strength. Your pediatrician may check for torticollis or other muscle tightness that could make one direction difficult.',
    },
    {
      ageRange: '9-12 months',
      context:
        'If rolling asymmetry persists at this age, evaluation is important. Persistent asymmetry in movement can indicate muscle tone differences that benefit from physical therapy intervention.',
    },
  ],
  whenNormal: [
    'Your baby just learned to roll and has been doing it for less than 6 weeks.',
    'Your baby can roll both ways but strongly prefers one direction.',
    'Your baby is under 6 months and developing other motor skills on track.',
    'You can coax your baby to roll the non-preferred direction with toys.',
  ],
  whenToMention: [
    'Your baby can only roll one direction for more than 6-8 weeks.',
    'Your baby seems unable rather than unwilling to roll the other direction.',
    'Your baby has other signs of favoring one side of their body.',
  ],
  whenToActNow: [
    'Your baby was rolling both ways and has lost the ability to roll one direction.',
    'Your baby has sudden weakness on one side of their body.',
  ],
  relatedMilestones: [
    'gross-motor-rolling',
    'gross-motor-tummy-time',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-rolling-over', 'torticollis', 'asymmetric-movement'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Movement: 4 to 7 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-4-to-7-Months.aspx',
    },
    {
      org: 'CDC',
      citation: 'CDC - Important Milestones: Your Baby at 6 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html',
    },
    {
      org: 'NIH',
      citation: 'Bartlett DJ, et al. Development of Prone Lying Motor Behaviors. Dev Med Child Neurol. 2003',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
