import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-no-words-at-15-months',
  title: 'No Words at 15 Months',
  category: 'communication',
  searchTerms: [
    'no words at 15 months',
    '15 month old not talking',
    'baby no words yet 15 months',
    'toddler not saying any words',
    '15 month old silent',
    'no first words at 15 months',
    'when to worry about no words',
    'late first words baby',
    '15 month old babbling but no words',
    'should baby talk by 15 months',
  ],
  quickAnswer:
    'While most babies say their first words between 10 and 14 months, some do not produce recognizable words until 15 to 18 months. If your 15-month-old is babbling with varied sounds, using gestures to communicate, and understanding words you say, they may simply be a late talker. However, no words by 15 months warrants a conversation with your pediatrician.',
  byAge: [
    {
      ageRange: '9-12 months',
      context:
        'Most babies produce their first word between 10 and 14 months. Before words appear, babies typically use jargon babbling, gestures like pointing and waving, and show clear understanding of familiar words and phrases.',
    },
    {
      ageRange: '12-14 months',
      context:
        'The average baby has 1 to 3 words by their first birthday, but there is wide variation. Some babies who are not yet talking at 12 months have strong comprehension and gesture use, which are positive signs. Others may need monitoring more closely.',
    },
    {
      ageRange: '14-16 months',
      context:
        'By 15 months, the absence of any words becomes more noteworthy. Your pediatrician should assess whether comprehension, gesture use, and social engagement are on track. If these other areas are strong, your child may catch up on their own, but monitoring is important.',
    },
    {
      ageRange: '16-18 months',
      context:
        'If no words have emerged by 16 to 18 months, a speech-language evaluation is recommended. Early intervention during this period can make a significant difference. Many late talkers who receive support catch up well.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Children who are still not using words by 18 months benefit from a comprehensive evaluation including hearing testing, speech-language assessment, and developmental screening. The earlier support begins, the better the outcomes.',
    },
  ],
  whenNormal: [
    'Your 15-month-old babbles with varied sounds and uses gestures like pointing, reaching, and waving',
    'Your child understands many words and follows simple directions even without speaking yet',
    'Your child uses sounds and gestures intentionally to communicate wants and needs',
    'Your child was born premature and is on track for their adjusted age',
  ],
  whenToMention: [
    'Your child is 15 months with no recognizable words and limited babbling variety',
    'Your child is 15 months with no words and does not use gestures to communicate',
    'Your child does not seem to understand common words or respond to simple directions',
  ],
  whenToActNow: [
    'Your child had words and has lost them, which requires immediate evaluation',
    'Your child has no words, no gestures, no babbling, and limited social engagement by 15 months',
  ],
  relatedMilestones: ['first-words', 'gestures', 'language-comprehension', 'babbling'],
  showSelfReferral: true,
  relatedConcernSlugs: ['late-talker', 'baby-only-one-word-at-12-months', 'toddler-10-words-at-18-months'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Delays in Toddlers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Late Blooming or Language Problem?',
      url: 'https://www.asha.org/public/speech/disorders/late-blooming-or-language-problem/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By 15 Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-15mo.html',
    },
  ],
};
