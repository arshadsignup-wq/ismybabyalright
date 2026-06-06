import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-asymmetric-crawling-pattern',
  title: 'My Baby Crawls Unevenly',
  category: 'physical',
  searchTerms: [
    'baby crawling unevenly',
    'baby asymmetric crawling',
    'baby drags one leg crawling',
    'baby crawling lopsided',
    'baby uses one arm more crawling',
    'baby uneven crawl pattern',
    'one sided crawling baby',
    'baby crawling favoring one side',
    'baby pulling one leg while crawling',
    'baby dragging foot when crawling',
  ],
  quickAnswer:
    'While some variation in crawling patterns is normal, consistently favoring one side or dragging one limb while crawling warrants attention. Babies should use both arms and both legs relatively equally when crawling. Persistent asymmetry could indicate muscle tone differences, hip issues, or neurological concerns that benefit from early evaluation.',
  byAge: [
    {
      ageRange: '7-9 months',
      context:
        'When babies first start crawling, some unevenness is normal as they figure out the coordination. Give your baby a few weeks to refine their crawling pattern. If the asymmetry persists beyond 2-3 weeks of crawling, or if one limb seems noticeably weaker, mention it to your pediatrician.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, your baby should be using both sides fairly equally when crawling. If your baby consistently drags one leg, uses one arm much more than the other, or seems unable to use one side effectively, this should be evaluated. Asymmetric crawling can sometimes indicate hemiplegia, hip dysplasia, or other treatable conditions.',
    },
    {
      ageRange: '12-15 months',
      context:
        'If your baby is still crawling asymmetrically at this age, evaluation is important even if they are also starting to pull up and cruise. Asymmetry in crawling often carries over to walking and can indicate underlying issues that are best addressed early with physical therapy.',
    },
    {
      ageRange: '15-18 months',
      context:
        'If your child has transitioned to walking and the asymmetry has resolved, there may be no concern. However, if walking also appears uneven or your child favors one side, a thorough evaluation is recommended.',
    },
  ],
  whenNormal: [
    'Your baby just started crawling and is still developing a consistent pattern.',
    'The unevenness is mild and improves over 2-3 weeks.',
    'Your baby can use both sides when prompted, even if they prefer one.',
    'Your baby is a new crawler and the asymmetry is resolving on its own.',
  ],
  whenToMention: [
    'Your baby consistently drags one leg or does not use one arm while crawling.',
    'The asymmetric pattern has persisted for more than 3-4 weeks.',
    'Your baby seems unable rather than unwilling to use one side equally.',
    'You notice one hand is always fisted or one leg seems stiffer than the other.',
  ],
  whenToActNow: [
    'Your baby was crawling symmetrically and has developed asymmetric patterns.',
    'Your baby seems to have lost function in one arm or leg.',
  ],
  relatedMilestones: [
    'gross-motor-crawling',
    'gross-motor-pulling-to-stand',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['baby-uneven-crawling', 'asymmetric-movement', 'hip-dysplasia'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics - Movement: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'NIH',
      citation: 'Palma P, et al. Asymmetric Crawling as an Early Marker in Cerebral Palsy. Dev Med Child Neurol. 2006',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
    {
      org: 'CDC',
      citation: 'CDC - Important Milestones: Your Baby at 9 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
  ],
};
