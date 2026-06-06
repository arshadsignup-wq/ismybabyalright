import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-bottom-shuffling',
  title: 'My Baby Bum Shuffles Instead of Crawling',
  category: 'physical',
  searchTerms: [
    'baby bum shuffling',
    'baby bottom shuffling',
    'baby scooting on bottom',
    'baby shuffles on bum',
    'baby won\'t crawl just scoots',
    'bum shuffler baby',
    'is bum shuffling normal',
    'baby sitting and scooting',
    'baby moves on bottom',
    'bottom shuffling delay walking',
  ],
  quickAnswer:
    'Bottom shuffling (bum shuffling) is a normal alternative to crawling used by about 9% of babies. Bottom shufflers often walk later than crawlers, typically around 18 months, but they develop perfectly normally. It tends to run in families and is not a sign of a developmental problem.',
  byAge: [
    {
      ageRange: '7-9 months',
      context:
        'Some babies start bottom shuffling as soon as they can sit independently. They discover that by using their hands or feet, they can scoot across the floor on their bottom. This is a valid form of early mobility. Bottom shufflers often dislike tummy time and skip the traditional crawling stage entirely.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Your baby may be an efficient bum shuffler by now, scooting across the room at impressive speed. Research shows that bottom shufflers are typically independent sitters who found a way to get around without going through crawling. This is completely normal. Bottom shuffling often runs in families, so ask if anyone else in your family was a bum shuffler.',
    },
    {
      ageRange: '12-15 months',
      context:
        'Bottom shufflers tend to walk a bit later than babies who crawled on hands and knees. If your baby is still shuffling and not yet walking, this is expected. Many bum shufflers walk between 15 and 18 months. As long as your baby is pulling up and showing interest in standing, they are on track.',
    },
    {
      ageRange: '15-21 months',
      context:
        'Most bottom shufflers are walking by 18-21 months. If your baby is not yet walking by 18 months, your pediatrician may recommend an evaluation, but many healthy bum shufflers simply start walking later. If your child is pulling to stand and cruising, walking will likely come soon.',
    },
  ],
  whenNormal: [
    'Your baby bottom shuffles and can also sit independently with good balance.',
    'Your baby uses both sides of their body equally when shuffling.',
    'There is a family history of bum shuffling or late walking.',
    'Your baby is pulling to stand and cruising, even if not yet walking independently.',
  ],
  whenToMention: [
    'Your baby is over 18 months, still bottom shuffling, and not walking independently.',
    'Your baby seems unable to pull to stand or shows no interest in upright mobility.',
    'Your baby only shuffles in one direction or favors one side of their body.',
  ],
  whenToActNow: [
    'Your baby was previously walking or crawling and has reverted to only bottom shuffling.',
    'Your baby seems to have weakness in their legs or cannot bear weight when held standing.',
  ],
  relatedMilestones: [
    'gross-motor-sitting',
    'gross-motor-pulling-to-stand',
    'gross-motor-walking',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['scooting-instead-of-crawling', 'delayed-crawling', 'not-walking'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Movement: 8 to 12 Months',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Robson P. Shuffling, Hitching, Scooting - Some Observations in 30 Otherwise Normal Children. Developmental Medicine & Child Neurology. 1970;12(5):608-617',
      url: 'https://pubmed.ncbi.nlm.nih.gov/5518336/',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Baby at 12 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
  ],
};
