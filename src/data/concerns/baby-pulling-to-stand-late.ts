import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-pulling-to-stand-late',
  title: 'My Baby Is Late to Pull to Stand',
  category: 'physical',
  searchTerms: [
    'baby not pulling to stand',
    'baby late pulling up',
    'when should baby pull to stand',
    'baby won\'t pull up on furniture',
    'baby not pulling up 10 months',
    'late pull to stand',
    'baby not pulling to standing',
    'baby doesn\'t try to stand up',
    'pull to stand delay',
    'baby not interested in standing',
  ],
  quickAnswer:
    'Most babies pull to stand between 8-12 months, with 9-10 months being the most common age. If your baby is not pulling to stand by 12 months, discuss it with your pediatrician. Some babies who are efficient crawlers or bottom shufflers may pull to stand later because they are content with their current mobility.',
  byAge: [
    { ageRange: '8-10 months', context: 'This is the most common age for pulling to stand to develop, but many babies are not doing it yet at 8-9 months. If your baby is crawling well and showing interest in upright positions, pulling to stand will likely come soon. You can encourage it by placing favorite toys on low furniture.' },
    { ageRange: '10-12 months', context: 'Most babies pull to stand by now. If your baby has not started, but is mobile on the floor and developing other skills, give them a few more weeks. If your baby shows no interest in upright positions and does not try to pull up at all, mention it to your pediatrician.' },
    { ageRange: '12-14 months', context: 'If your baby is not pulling to stand by 12 months, evaluation is recommended. Your pediatrician will check leg strength, muscle tone, and overall motor development. Many late pull-to-standers respond well to physical therapy encouragement.' },
    { ageRange: '14-18 months', context: 'Not pulling to stand by 14 months warrants thorough evaluation. Your pediatrician may refer to a developmental specialist or physical therapist. Early intervention is important for building the strength and skills needed for upright mobility.' },
  ],
  whenNormal: [
    'Your baby is under 11 months and is showing interest in pulling up.',
    'Your baby is a bottom shuffler or efficient crawler who is content with floor mobility.',
    'Your baby was premature and is on track for adjusted age.',
    'Your baby recently started trying to pull up and is building this skill.',
  ],
  whenToMention: [
    'Your baby is 12 months and not pulling to stand at all.',
    'Your baby seems to have weak legs or cannot bear weight.',
    'Your baby shows no interest in upright positions by 10 months.',
  ],
  whenToActNow: [
    'Your baby was pulling to stand and has stopped.',
    'Your baby seems to be getting weaker or losing motor skills.',
  ],
  relatedMilestones: ['gross-motor-pulling-to-stand', 'gross-motor-cruising', 'gross-motor-walking'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-pulling-up', 'not-standing', 'not-bearing-weight-on-legs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Movement: 8 to 12 Months', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Baby at 12 Months', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html' },
    { org: 'WHO', citation: 'WHO Motor Development Study: Standing with assistance milestone windows', url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450' },
  ],
};
