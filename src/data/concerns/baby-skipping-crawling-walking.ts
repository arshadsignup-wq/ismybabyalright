import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-skipping-crawling-walking',
  title: 'My Baby Skipped Crawling and Went Straight to Walking',
  category: 'physical',
  searchTerms: [
    'baby skipped crawling',
    'baby never crawled went straight to walking',
    'is it bad baby skipped crawling',
    'baby didn\'t crawl',
    'skipping crawling development',
    'baby went from sitting to walking',
    'no crawling stage',
    'baby walked without crawling first',
    'skipping crawling milestone',
    'baby never learned to crawl',
  ],
  quickAnswer:
    'Skipping crawling entirely is normal and is not associated with any developmental delays. Research shows that about 4-7% of babies never crawl and go directly from sitting to pulling up and walking. The CDC removed crawling from their developmental milestone checklist because it is not a required step for healthy development.',
  byAge: [
    {
      ageRange: '7-9 months',
      context:
        'If your baby sits well, can pivot while sitting, and is starting to pull up on furniture but shows no interest in crawling, they may be one of the babies who skip this stage. As long as they have a way to explore their environment and are progressing toward upright mobility, there is nothing to worry about.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Some babies go directly from sitting to pulling up and cruising along furniture. If your baby is pulling to stand and cruising but has never crawled, this is a normal developmental path. Your baby may be more interested in being upright and is building skills toward walking instead.',
    },
    {
      ageRange: '12-15 months',
      context:
        'If your baby skipped crawling and is now walking or close to walking, there is nothing to be concerned about. Research shows no long-term developmental differences between babies who crawled and those who did not. Your baby found their own path to walking.',
    },
    {
      ageRange: '15-18 months',
      context:
        'By this age, if your child is walking well, the fact that they never crawled is of no concern. If your child is not yet walking and also never crawled, discuss this with your pediatrician, as the combination of both delayed walking and absent crawling warrants evaluation.',
    },
  ],
  whenNormal: [
    'Your baby skipped crawling but is pulling to stand, cruising, or walking.',
    'Your baby has another form of mobility such as scooting or rolling.',
    'Your baby has good muscle tone and uses both sides of their body equally.',
    'Your baby is meeting other developmental milestones on time.',
  ],
  whenToMention: [
    'Your baby is over 12 months with no form of independent mobility at all.',
    'Your baby seems to have low muscle tone or difficulty with upright positions.',
    'Your baby avoids weight bearing on their legs and does not pull to stand by 12 months.',
  ],
  whenToActNow: [
    'Your baby has lost motor skills they previously had.',
    'Your baby cannot sit independently by 9 months and shows no interest in any form of movement.',
  ],
  relatedMilestones: [
    'gross-motor-sitting',
    'gross-motor-pulling-to-stand',
    'gross-motor-cruising',
    'gross-motor-walking',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['delayed-crawling', 'not-walking', 'baby-bottom-shuffling'],
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Developmental Milestones - Crawling removed from milestone checklist in 2022 revision',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Movement: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'WHO',
      citation:
        'WHO Motor Development Study: Windows of achievement for six gross motor milestones',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
