import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-not-lifting-head-45-degrees',
  title: 'My Baby Can\'t Lift Their Head During Tummy Time',
  category: 'physical',
  searchTerms: [
    'baby can\'t lift head tummy time',
    'baby face down in tummy time',
    'baby won\'t lift head',
    'baby head stays down tummy time',
    'baby can\'t lift head 45 degrees',
    'baby not lifting head off floor',
    'tummy time head lifting delay',
    'baby weak neck tummy time',
    'baby hates tummy time won\'t lift head',
    'when should baby lift head tummy time',
  ],
  quickAnswer:
    'Most babies can lift their head 45 degrees during tummy time by 2 months and 90 degrees by 4 months. If your baby cannot lift their head at all during tummy time by 2 months, try shorter, more frequent sessions. If there is no improvement by 3 months, mention it to your pediatrician.',
  byAge: [
    {
      ageRange: '0-4 weeks',
      context:
        'Newborns may only briefly turn their head to the side during tummy time. Very little head lifting is expected at this age. Keep tummy time sessions short (1-2 minutes) and frequent. Placing your baby on your chest while reclined counts as tummy time and may be more enjoyable.',
    },
    {
      ageRange: '1-2 months',
      context:
        'Your baby should begin lifting their head briefly during tummy time, eventually reaching about 45 degrees. If your baby seems to make no effort to lift their head, try enticing them with a toy or your face at their eye level. Some babies need more encouragement and practice than others.',
    },
    {
      ageRange: '2-4 months',
      context:
        'Most babies can lift their head 45-90 degrees by this age and hold it up for increasingly longer periods. If your baby cannot lift their head at all by 3 months, discuss this with your pediatrician. It may indicate low muscle tone that can be addressed with specific exercises or physical therapy.',
    },
    {
      ageRange: '4-6 months',
      context:
        'By 4 months, your baby should lift their head 90 degrees and push up on forearms during tummy time. If your baby still struggles to lift their head, evaluation is important. Early intervention with physical therapy can make a significant difference.',
    },
  ],
  whenNormal: [
    'Your baby is under 2 months and briefly lifts their head during tummy time.',
    'Your baby hates tummy time but can lift their head when motivated.',
    'Your baby was premature and is on track for adjusted age.',
    'Head lifting is improving week by week.',
  ],
  whenToMention: [
    'Your baby cannot lift their head at all during tummy time by 2-3 months.',
    'Your baby seems unusually floppy or weak during tummy time.',
    'Head lifting is not improving despite regular tummy time practice.',
  ],
  whenToActNow: [
    'Your baby was lifting their head and has stopped.',
    'Your baby seems to be getting weaker or floppier over time.',
  ],
  relatedMilestones: [
    'gross-motor-head-control',
    'gross-motor-tummy-time',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-head-control-delayed', 'baby-not-weight-bearing-arms-tummy', 'low-muscle-tone'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Back to Sleep, Tummy to Play',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
    {
      org: 'CDC',
      citation: 'CDC - Important Milestones: Your Baby at 2 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2mo.html',
    },
    {
      org: 'NIH',
      citation: 'Pin T, et al. The Relationship of Prone Positioning to Motor Development. Pediatrics. 2007;120(6)',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
