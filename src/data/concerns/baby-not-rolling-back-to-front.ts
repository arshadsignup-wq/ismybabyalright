import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-not-rolling-back-to-front',
  title: 'My Baby Only Rolls Front to Back',
  category: 'physical',
  searchTerms: [
    'baby only rolls front to back',
    'baby can\'t roll back to front',
    'baby won\'t roll back to tummy',
    'rolling back to front delay',
    'when should baby roll back to front',
    'baby rolls tummy to back only',
    'back to front rolling milestone',
    'baby not rolling over both ways',
    'baby can\'t flip from back',
    'rolling front to back but not back to front',
  ],
  quickAnswer:
    'Rolling from front to back typically develops first (around 4 months), and rolling from back to front follows weeks or months later (around 5-6 months). It is completely normal for there to be a gap between mastering these two skills. Rolling back to front requires more core strength and coordination.',
  byAge: [
    {
      ageRange: '3-5 months',
      context:
        'If your baby rolls front to back but not back to front, this is completely normal and expected. Front-to-back rolling develops first because gravity helps. Back-to-front rolling requires more core strength and typically comes a few weeks later. Keep doing tummy time to build the muscles needed.',
    },
    {
      ageRange: '5-7 months',
      context:
        'Most babies learn to roll back to front by 5-6 months. If your baby is not rolling back to front yet but is developing other skills like reaching, grasping, and showing good core strength when sitting with support, they are likely developing normally. Some babies simply take longer to master this direction.',
    },
    {
      ageRange: '7-9 months',
      context:
        'If your baby still cannot roll from back to front by 7 months, mention it to your pediatrician. They may want to check core strength and muscle tone. Some babies who skip back-to-front rolling go on to sit and crawl without ever consistently rolling this direction, which can be fine.',
    },
    {
      ageRange: '9-12 months',
      context:
        'If your baby is sitting independently, crawling, or pulling up but never rolled back to front, this is likely not a concern. Rolling back to front becomes less important once a baby has other ways to change position. However, if your baby cannot change positions at all, this warrants evaluation.',
    },
  ],
  whenNormal: [
    'Your baby is under 7 months and rolls front to back but not yet back to front.',
    'Your baby is developing other motor skills on track.',
    'Your baby is attempting to roll back to front but has not quite mastered it.',
    'Your baby can get into and out of positions in other ways.',
  ],
  whenToMention: [
    'Your baby is over 7 months and shows no attempt to roll from back to front.',
    'Your baby seems to have weak core muscles or poor trunk control.',
    'Your baby cannot change positions at all by 9 months.',
  ],
  whenToActNow: [
    'Your baby was rolling both ways and has stopped rolling.',
    'Your baby seems to be getting weaker or losing motor skills.',
  ],
  relatedMilestones: [
    'gross-motor-rolling',
    'gross-motor-sitting',
    'gross-motor-tummy-time',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-rolling-over', 'baby-rolling-one-direction-only', 'poor-trunk-control'],
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
      org: 'WHO',
      citation: 'WHO Motor Development Study: Windows of achievement for motor milestones',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
