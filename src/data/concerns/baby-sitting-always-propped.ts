import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sitting-always-propped',
  title: 'My Baby Can Only Sit When Propped Up',
  category: 'physical',
  searchTerms: [
    'baby only sits propped up',
    'baby tripod sitting only',
    'baby can\'t sit without hands',
    'baby leans forward sitting',
    'baby propped sitting',
    'baby uses hands to sit',
    'baby not sitting independently',
    'baby sits with arms propped',
    'tripod sitting baby age',
    'baby needs support to sit',
  ],
  quickAnswer:
    'Tripod sitting (sitting with hands on the floor for support) is a normal developmental stage that typically occurs around 5-6 months before independent sitting develops at 6-9 months. If your baby is under 7 months and tripod sits, this is age-appropriate. If they cannot sit without propping by 9 months, mention it to your pediatrician.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'Tripod sitting is completely normal at this age and shows your baby is building the core strength and balance needed for independent sitting. Your baby leans forward and uses their hands because they are still developing trunk control. This stage typically lasts several weeks before independent sitting emerges.',
    },
    {
      ageRange: '6-8 months',
      context:
        'Most babies transition from tripod sitting to independent sitting during this period. Your baby may sit independently for a few seconds at first, gradually increasing to longer periods. If your baby is still propped sitting at 7-8 months, extra tummy time and seated play activities can help build core strength.',
    },
    {
      ageRange: '8-9 months',
      context:
        'If your baby still cannot sit without propping their hands by 8-9 months, mention it to your pediatrician. They may want to evaluate your baby\'s core strength and muscle tone. Physical therapy can be very effective at building the trunk strength needed for independent sitting.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Independent sitting should be well established by 9 months. If your baby still needs to prop themselves with hands to sit, evaluation is important. Delayed independent sitting can indicate low muscle tone or core weakness that benefits from early intervention.',
    },
  ],
  whenNormal: [
    'Your baby is under 7 months and tripod sits as they build core strength.',
    'Your baby can sit independently for brief periods but reverts to propping when tired.',
    'Your baby is gradually increasing the time they can sit without hands.',
    'Your baby was premature and is on track for adjusted age.',
  ],
  whenToMention: [
    'Your baby is 8-9 months and still cannot sit without propping their hands down.',
    'Your baby seems floppy or has difficulty maintaining any upright position.',
    'Your baby cannot sit at all even with prop support by 7 months.',
  ],
  whenToActNow: [
    'Your baby was sitting independently and has lost this ability.',
    'Your baby seems increasingly floppy or weak.',
  ],
  relatedMilestones: [
    'gross-motor-sitting',
    'gross-motor-balance',
    'gross-motor-crawling',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-sitting-up', 'poor-trunk-control', 'low-muscle-tone'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Movement: 4 to 7 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-4-to-7-Months.aspx',
    },
    {
      org: 'CDC',
      citation: 'CDC - Important Milestones: Your Baby at 9 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'WHO',
      citation: 'WHO Motor Development Study: Sitting without support milestone windows',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
