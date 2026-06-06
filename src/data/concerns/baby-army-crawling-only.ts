import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-army-crawling-only',
  title: 'My Baby Only Army Crawls',
  category: 'physical',
  searchTerms: [
    'baby army crawling only',
    'commando crawling baby',
    'baby belly crawling',
    'baby dragging belly',
    'baby not crawling on hands and knees',
    'army crawl vs real crawl',
    'baby pulling with arms crawling',
    'baby won\'t get on hands and knees',
    'is army crawling normal',
    'commando crawl delay',
  ],
  quickAnswer:
    'Army crawling (also called commando crawling) is a completely valid and normal way for babies to move. Many babies army crawl for weeks or even months before transitioning to hands-and-knees crawling, and some skip hands-and-knees crawling entirely. What matters is that your baby is independently mobile and exploring their environment.',
  byAge: [
    {
      ageRange: '6-8 months',
      context:
        'Army crawling at this age is very common and is often the first form of mobile crawling babies develop. Your baby is learning to coordinate their arms and legs and building core strength. Many babies army crawl for several weeks before progressing to hands-and-knees crawling. This is completely age-appropriate and a wonderful milestone.',
    },
    {
      ageRange: '8-10 months',
      context:
        'Some babies are still army crawling at this age while others have moved on to hands-and-knees crawling. Both are perfectly normal. If your baby is efficiently army crawling across the room to get what they want, they are developing well. You may notice them start to push up onto hands and knees and rock, which is a precursor to traditional crawling.',
    },
    {
      ageRange: '10-12 months',
      context:
        'If your baby is still exclusively army crawling, that is still fine as long as they are mobile and exploring. Many babies who are efficient army crawlers transition directly to pulling up, cruising, and walking. If your baby is using both sides of their body equally while army crawling and is also pulling to stand, there is no cause for concern.',
    },
    {
      ageRange: '12-18 months',
      context:
        'By this age, most babies have moved on to other forms of mobility such as cruising or walking. If your baby is still only army crawling and is not pulling to stand or showing interest in upright mobility, mention it to your pediatrician. Some babies who continue to army crawl exclusively may benefit from a physical therapy evaluation to check for core weakness.',
    },
  ],
  whenNormal: [
    'Your baby is under 10 months and is army crawling effectively to explore.',
    'Your baby uses both arms and both legs equally while army crawling.',
    'Your baby is also starting to pull up to stand or cruise along furniture.',
    'Your baby was a preemie and is hitting milestones on their adjusted age timeline.',
  ],
  whenToMention: [
    'Your baby is over 12 months and is still only army crawling with no interest in pulling up or cruising.',
    'Your baby seems to drag one side of their body or favors one arm while army crawling.',
    'Your baby appears to have difficulty pushing up onto hands and knees at all by 10 months.',
  ],
  whenToActNow: [
    'Your baby was army crawling and has stopped moving independently, or has lost other motor skills.',
    'Your baby seems to be in pain when trying to crawl or move.',
  ],
  relatedMilestones: [
    'gross-motor-crawling',
    'gross-motor-pulling-to-stand',
    'gross-motor-cruising',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['delayed-crawling', 'scooting-instead-of-crawling', 'baby-bottom-shuffling'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Movement: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Baby at 9 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'WHO',
      citation:
        'WHO Motor Development Study: Windows of achievement for motor milestones',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
