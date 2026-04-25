import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'scooting-instead-of-crawling',
  title: 'My Baby Scoots Instead of Crawling',
  category: 'physical',
  searchTerms: [
    'baby scooting instead of crawling',
    'baby scoots on bottom',
    'baby won\'t crawl just scoots',
    'is scooting instead of crawling normal',
    'baby butt scooting',
    'baby slides on bottom',
    'baby commando crawl',
    'baby army crawl',
  ],
  quickAnswer:
    'Some babies skip traditional hands-and-knees crawling entirely and scoot on their bottoms, army crawl on their bellies, or invent other creative ways to get around. As long as your baby is moving independently and exploring their environment by 12 months, the method they choose doesn\'t matter. Many bottom-scooters go straight to walking and never crawl at all.',
  byAge: [
    {
      ageRange: '7-9 months',
      context:
        'This is when many babies start experimenting with different ways to move. Some get up on hands and knees, some scoot on their bottoms, some army crawl (dragging themselves forward on their bellies), and some do a combination of all of these. There\'s no "right" way to be mobile at this age  -  what matters is that your baby is motivated to move toward toys and people and is figuring out a method that works for them.',
    },
    {
      ageRange: '10-12 months',
      context:
        'By this age, your baby should have some form of independent mobility, whether that\'s crawling, scooting, rolling, or cruising along furniture. If your baby is a dedicated bottom-scooter and is zooming around happily, there\'s no need to worry. Many babies who scoot skip crawling entirely and go straight to walking around 12-15 months. If your baby is not yet moving independently at all by 12 months, mention it to your pediatrician.',
    },
    {
      ageRange: '12+ months',
      context:
        'If your baby is still scooting and hasn\'t started pulling to stand or cruising, it\'s worth talking to your doctor to make sure everything is on track. Some babies are late walkers but are developing normally otherwise. Occasionally, persistent bottom-scooting can be related to hip issues or muscle tone differences, so it\'s worth having a professional take a look just to be sure.',
    },
  ],
  whenNormal: [
    'Your baby is scooting efficiently and happily, moving around to explore and reach toys.',
    'Your baby is also working on other gross motor skills like pulling to stand or cruising furniture.',
    'Both sides of your baby\'s body are equally involved in the scooting motion.',
    'Your pediatrician has examined your baby and isn\'t concerned.',
  ],
  whenToMention: [
    'Your baby is over 12 months, only scoots, and shows no interest in pulling to stand or other upright movement.',
    'Your baby scoots asymmetrically (for example, using one leg much more than the other) or avoids bearing weight on their legs when you try to stand them up.',
    'Your baby isn\'t moving independently at all by 10-12 months and doesn\'t seem interested in exploring or reaching for objects.',
  ],
  whenToActNow: [
    'Your baby was crawling or moving in another way and has suddenly stopped or regressed to only scooting  -  loss of motor skills needs immediate evaluation.',
    'Scooting seems painful or your baby cries when they try to move.',
  ],
  relatedMilestones: [
    'gross-motor-crawling',
    'gross-motor-sitting',
    'gross-motor-pulling-to-stand',
    'gross-motor-cruising',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Crawling Styles: What\'s Normal?',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  Developmental Milestones: Movement at 9-12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'International Hip Dysplasia Institute',
      citation:
        'IHDI  -  Bottom Shuffling and Hip Development',
      url: 'https://hipdysplasia.org/infant-child-development/',
    },
  ],
};
