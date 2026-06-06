import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-rolling-as-transport',
  title: 'My Baby Rolls to Get Around',
  category: 'physical',
  searchTerms: [
    'baby rolling to get places',
    'baby rolls instead of crawling',
    'baby uses rolling to move',
    'baby rolling as transportation',
    'baby won\'t crawl just rolls',
    'log rolling baby',
    'baby rolls across room',
    'rolling as mobility baby',
    'baby prefers rolling over crawling',
    'baby rolls everywhere',
  ],
  quickAnswer:
    'Rolling as a primary form of transportation is a normal and creative way for babies to get around. Some babies discover that rolling is efficient and use it as their main form of mobility before transitioning to crawling, cruising, or walking. As long as your baby is independently mobile and progressing toward other motor milestones, rolling is a valid movement strategy.',
  byAge: [
    {
      ageRange: '5-7 months',
      context:
        'Rolling as transportation is very common at this age. Your baby has just mastered rolling and discovered it can get them places. This shows great body awareness and problem-solving. Many babies use rolling to reach toys before they develop crawling. This is a wonderful sign of your baby\'s motivation to explore.',
    },
    {
      ageRange: '7-9 months',
      context:
        'Some babies continue to prefer rolling at this age because they are very efficient at it. If your baby is also starting to sit independently and shows interest in getting up on hands and knees, rolling is simply their favorite method for now. Crawling typically develops around this time, but rolling as a primary transport method is still normal.',
    },
    {
      ageRange: '9-12 months',
      context:
        'If rolling is your baby\'s only form of mobility at this age, it is worth checking that they are developing other skills like sitting independently, pulling up, and bearing weight on their legs. Many rolling babies transition directly to pulling up and cruising. If your baby is making progress in other motor areas, rolling as their primary mobility is fine.',
    },
    {
      ageRange: '12+ months',
      context:
        'By 12 months, most babies have developed another form of upright mobility such as cruising or walking. If your baby is still exclusively rolling to get around, discuss this with your pediatrician. While rolling shows good mobility, most babies have progressed to more advanced movement patterns by this age.',
    },
  ],
  whenNormal: [
    'Your baby is under 10 months and rolls to get toys and explore.',
    'Your baby rolls both directions and uses both sides of their body equally.',
    'Your baby is also developing other skills like sitting and pulling up.',
    'Your baby shows interest in other movement patterns even if rolling is their favorite.',
  ],
  whenToMention: [
    'Your baby is over 12 months and rolling is their only form of mobility.',
    'Your baby can only roll in one direction.',
    'Your baby is not developing other motor skills like sitting or pulling up alongside rolling.',
  ],
  whenToActNow: [
    'Your baby has lost the ability to roll or other motor skills they previously had.',
    'Your baby seems to have weakness or stiffness that prevents them from using any other movement pattern.',
  ],
  relatedMilestones: [
    'gross-motor-rolling',
    'gross-motor-sitting',
    'gross-motor-crawling',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-rolling-over', 'delayed-crawling', 'baby-rolling-one-direction-only'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Movement: 4 to 7 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-4-to-7-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Baby at 6 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-6mo.html',
    },
    {
      org: 'WHO',
      citation:
        'WHO Motor Development Study: Windows of achievement for motor milestones',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
