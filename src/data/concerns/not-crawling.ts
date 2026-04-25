import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-crawling',
  title: 'My Baby Isn\'t Crawling',
  category: 'physical',
  searchTerms: [
    'baby not crawling',
    'when do babies crawl',
    'baby won\'t crawl',
    'baby not crawling at 10 months',
    'is crawling a milestone',
    'baby skipping crawling',
    'baby bum scooting instead of crawling',
    'do all babies crawl',
    'baby not crawling at 12 months',
    'baby crawling late',
  ],
  quickAnswer:
    'Here\'s something that surprises many parents: crawling is not actually a required developmental milestone. The CDC removed it from their milestone checklist because many healthy babies skip crawling entirely and go straight to pulling up, cruising, or walking. If your baby is finding ways to move and explore, they\'re doing great.',
  byAge: [
    {
      ageRange: '6-7 months',
      context:
        'Most babies aren\'t crawling yet at this age, so there\'s truly nothing to worry about. Your baby might be rocking on hands and knees, pivoting on their tummy, or rolling to get around. These are all building blocks, and every one of them counts as progress.',
    },
    {
      ageRange: '8-9 months',
      context:
        'This is when many babies start crawling, but "crawling" looks different for every baby. Some do a classic hands-and-knees crawl, others army crawl, bum scoot, crab walk, or bear walk. All of these are perfectly valid ways of getting around. What matters is that your baby is motivated to move and explore.',
    },
    {
      ageRange: '10-11 months',
      context:
        'If your baby isn\'t crawling or using any other method to get around by 10 months, it\'s worth checking in with your pediatrician  -  not because crawling itself matters, but because some form of independent mobility by this age is a helpful sign. Many babies at this stage are more interested in pulling up to stand than crawling.',
    },
    {
      ageRange: '12-14 months',
      context:
        'Some babies skip crawling and walk first, and that\'s genuinely fine. If your baby isn\'t crawling or walking or using any method to move independently, bring it up with your doctor. But if they\'re pulling up, cruising furniture, or starting to take steps, they\'ve simply chosen a different path  -  literally.',
    },
    {
      ageRange: '15+ months',
      context:
        'By this age, the question is less about crawling and more about whether your baby has some form of independent mobility. If they\'re walking or close to it, crawling is irrelevant. If they\'re not moving independently at all, an evaluation can help determine whether there\'s anything to support.',
    },
  ],
  whenNormal: [
    'Your baby is under 10 months and uses any method to get around  -  rolling, scooting, army crawling, or bum shuffling all count.',
    'Your baby skips crawling entirely and goes straight to pulling up and cruising along furniture.',
    'Your baby crawls in an unconventional way (backward, sideways, one-legged)  -  creative movers are still movers.',
    'Your baby was premature  -  use adjusted age for milestones.',
    'Your baby is more interested in standing and bouncing than getting on all fours  -  they may walk before they crawl, and that\'s okay.',
  ],
  whenToMention: [
    'Your baby is over 10 months and doesn\'t use any method at all to move independently (no rolling, scooting, crawling, or pulling up).',
    'Your baby seems to drag one side of their body or has an asymmetric movement pattern when trying to get around.',
    'Your baby doesn\'t seem interested in reaching for toys or moving toward things they want.',
  ],
  whenToActNow: [
    'Your baby has stopped moving or lost mobility they previously had  -  any regression in motor skills warrants prompt evaluation.',
    'Your baby\'s legs seem stiff and cross when you hold them upright, or they consistently can\'t bear weight on their legs by 10-12 months.',
  ],
  relatedMilestones: [
    'gross-motor-rolling',
    'gross-motor-sitting',
    'gross-motor-crawling',
    'gross-motor-pulling-to-stand',
    'gross-motor-walking',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Developmental Milestones  -  Crawling is not included as a milestone in the updated 2022 checklist',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
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
        'WHO Motor Development Study: Windows of Achievement for Six Gross Motor Milestones',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
