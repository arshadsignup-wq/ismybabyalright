import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-cant-get-into-sitting',
  title: 'My Baby Can\'t Get Into a Sitting Position on Their Own',
  category: 'physical',
  searchTerms: [
    'baby can\'t get into sitting',
    'baby can\'t transition to sitting',
    'baby sits when placed but can\'t get there',
    'baby won\'t sit up from lying',
    'baby can\'t push to sitting',
    'baby needs help sitting up',
    'when can baby sit up on own',
    'baby can\'t move from lying to sitting',
    'transition to sitting milestone',
    'baby sits independently but can\'t get there alone',
  ],
  quickAnswer:
    'Being able to get into a sitting position independently is a separate skill from being able to sit once placed. Most babies learn to transition from lying or crawling into sitting between 8 and 10 months. If your baby sits well when placed but cannot get there on their own yet, they are likely still developing this transitional movement.',
  byAge: [
    {
      ageRange: '6-8 months',
      context:
        'It is completely normal for babies at this age to sit well when placed in position but not be able to get there independently. Transitioning to sitting requires rotating the trunk and shifting weight, which are complex movements. This skill typically develops after independent sitting is well established.',
    },
    {
      ageRange: '8-10 months',
      context:
        'Most babies learn to push up from lying or transition from crawling into sitting during this period. If your baby is crawling well and sitting well when placed, the transition will likely come soon. Some babies figure this out quickly while others take a few more weeks.',
    },
    {
      ageRange: '10-12 months',
      context:
        'If your baby still cannot get into a sitting position on their own by 10-12 months, mention it to your pediatrician. This may indicate difficulty with transitional movements that can benefit from physical therapy. Your baby should be able to move between positions fluidly by this age.',
    },
    {
      ageRange: '12+ months',
      context:
        'By 12 months, babies should move freely between positions, including getting into and out of sitting. If your child cannot do this, evaluation is important. Physical therapy can help teach transitional movements and build the core strength needed.',
    },
  ],
  whenNormal: [
    'Your baby is under 9 months and sits well when placed but cannot get there alone.',
    'Your baby is starting to push up from side-lying or from a crawling position.',
    'Your baby moves between other positions even if sitting transition is not mastered.',
    'Your baby is progressing in other motor skills.',
  ],
  whenToMention: [
    'Your baby is over 10 months and cannot get into sitting independently.',
    'Your baby seems stuck in one position and cannot transition between positions.',
    'Your baby has difficulty with trunk rotation or weight shifting.',
  ],
  whenToActNow: [
    'Your baby was transitioning to sitting and has lost this ability.',
    'Your baby seems unable to move between any positions independently.',
  ],
  relatedMilestones: [
    'gross-motor-sitting',
    'gross-motor-crawling',
    'gross-motor-transitions',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-sitting-up', 'baby-sitting-always-propped', 'poor-trunk-control'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Movement: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation: 'CDC - Important Milestones: Your Baby at 9 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'NIH',
      citation: 'Harbourne RT, et al. Sitting and the Emergence of Reaching in Infancy. J Mot Behav. 2004',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
