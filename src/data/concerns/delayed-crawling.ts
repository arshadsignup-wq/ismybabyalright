import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'delayed-crawling',
  title: 'My Baby Isn\'t Crawling Yet',
  category: 'physical',
  searchTerms: [
    'baby not crawling yet',
    'when should baby crawl',
    'baby 10 months not crawling',
    'baby 11 months not crawling',
    'baby skipping crawling',
    'late crawler',
    'baby won\'t crawl',
    'crawling delay',
  ],
  quickAnswer:
    'The age range for crawling is huge  -  some babies crawl as early as 6 months, others not until 10-11 months, and some skip crawling entirely and go straight to walking. What matters most is that your baby has some form of independent mobility (scooting, rolling, army crawling) by around 12 months and is exploring their environment.',
  byAge: [
    {
      ageRange: '6-7 months',
      context:
        'Some babies start crawling this early, but many don\'t. If your baby isn\'t crawling yet but can roll in both directions, sit with support, and is starting to pivot or scoot while sitting, they\'re building all the skills they\'ll need. There\'s no rush  -  crawling will come when your baby is ready.',
    },
    {
      ageRange: '8-9 months',
      context:
        'This is the most common age for crawling to start, but plenty of babies still aren\'t crawling yet. If your baby can sit independently, pivot to reach toys, and is showing interest in moving around (even if they haven\'t figured out how yet), that\'s a great sign. Some babies experiment with bottom-scooting, army crawling, or rolling as their first form of mobility before figuring out hands-and-knees crawling  -  or they skip traditional crawling altogether.',
    },
    {
      ageRange: '10-11 months',
      context:
        'If your baby isn\'t crawling yet, they should have some other form of independent mobility by now  -  scooting, rolling to get places, pulling to stand and cruising. As long as your baby is moving around to explore and is working on pulling to stand, the fact that they haven\'t mastered crawling isn\'t a concern. Many babies skip crawling entirely. If your baby isn\'t moving independently at all and isn\'t trying to pull up, mention it to your pediatrician.',
    },
    {
      ageRange: '12+ months',
      context:
        'By 12 months, your baby should have some way of getting around independently, whether it\'s crawling, scooting, cruising, or walking. If your baby is pulling to stand and cruising but never crawled, that\'s completely fine  -  some babies just skip that stage. But if your baby isn\'t mobile at all by 12 months and isn\'t pulling to stand, talk to your doctor about an evaluation to make sure everything is developing as it should.',
    },
  ],
  whenNormal: [
    'Your baby is under 11 months and isn\'t crawling yet but can sit independently and is showing interest in moving around.',
    'Your baby has an alternative form of mobility like scooting, rolling, or army crawling.',
    'Your baby is pulling to stand and cruising along furniture even though they never crawled.',
    'Your baby was premature  -  use adjusted age, which can shift motor milestones by weeks or months.',
  ],
  whenToMention: [
    'Your baby is 10-12 months old and has no form of independent mobility  -  not crawling, scooting, rolling, or cruising.',
    'Your baby can\'t sit independently by 9 months or seems very floppy and has poor head and trunk control.',
    'Your baby uses one side of their body much more than the other when trying to move.',
    'Your baby doesn\'t seem interested in exploring, reaching for toys, or trying to get to things across the room.',
  ],
  whenToActNow: [
    'Your baby was crawling or moving independently and has stopped  -  regression in motor skills requires immediate evaluation.',
    'Your baby seems to have lost strength or can\'t support their weight on their arms and legs like they used to.',
  ],
  relatedMilestones: [
    'gross-motor-sitting',
    'gross-motor-crawling',
    'gross-motor-pulling-to-stand',
    'gross-motor-cruising',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC  -  Important Milestones: Your Baby at 9 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Movement: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'WHO',
      citation:
        'WHO Multicentre Growth Reference Study  -  Crawling with hands and knees achieved between 5.2 and 13.5 months across populations',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
