import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-less-than-50-words-at-2',
  title: 'Toddler Has Fewer Than 50 Words at Age 2',
  category: 'communication',
  searchTerms: [
    'toddler less than 50 words at 2',
    '2 year old limited vocabulary',
    'toddler not enough words at 2',
    'how many words should 2 year old have',
    'toddler vocabulary behind at 2',
    'under 50 words at 24 months',
    'late talker 2 years old',
    '2 year old not saying many words',
    'toddler word count low',
    'vocabulary delay 2 year old',
  ],
  quickAnswer:
    'By age 2, most toddlers have at least 50 words and are starting to combine two words together. Having fewer than 50 words at 24 months is considered a marker for "late talking." About half of these late talkers catch up on their own by age 3, but a speech-language evaluation is recommended to determine whether your child would benefit from early support.',
  byAge: [
    {
      ageRange: '15-18 months',
      context:
        'Vocabulary typically ranges from 10 to 50 words. Some children are slower to add words but will have a vocabulary explosion later. Monitoring word growth rate is more informative than counting exact words at this stage.',
    },
    {
      ageRange: '18-21 months',
      context:
        'Many children experience a rapid vocabulary increase during this period. If your child is still adding words slowly, observe whether comprehension and social communication are strong. These are positive prognostic factors for late talkers.',
    },
    {
      ageRange: '21-24 months',
      context:
        'The benchmark of 50 words by age 2 comes from language development research. Children who fall below this threshold are often identified as late talkers. A speech-language pathologist can assess whether your child is likely to catch up or would benefit from therapy.',
    },
    {
      ageRange: '24-30 months',
      context:
        'This is a critical window for language growth. Some late talkers experience a rapid catch-up during this period. Others may need ongoing speech therapy. Regular monitoring of vocabulary growth and the emergence of word combinations helps guide decisions.',
    },
    {
      ageRange: '30-36 months',
      context:
        'By age 3, most children are using sentences. If your child still has a limited vocabulary and is not combining words, speech therapy is strongly recommended. Children who remain delayed at 3 are less likely to catch up without support.',
    },
  ],
  whenNormal: [
    'Your 2-year-old has fewer than 50 words but is steadily adding new words each week',
    'Your child understands language well, follows directions, and points to items in books when asked',
    'Your child uses gestures, sounds, and eye contact to communicate effectively',
    'Your child is beginning to combine words even if their total vocabulary is below 50',
  ],
  whenToMention: [
    'Your 2-year-old has fewer than 50 words and word growth has been very slow',
    'Your child has few words and is not yet combining any words together',
    'Your child has limited vocabulary and also has difficulty understanding what you say',
  ],
  whenToActNow: [
    'Your 2-year-old has lost words they previously used',
    'Your child has almost no words, does not use gestures, and shows limited social interaction at age 2',
  ],
  relatedMilestones: ['vocabulary-growth', 'word-combinations', 'language-comprehension', 'gestures'],
  showSelfReferral: true,
  relatedConcernSlugs: ['late-talker', 'limited-vocabulary', 'toddler-not-combining-by-24-months'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Late Blooming or Language Problem?',
      url: 'https://www.asha.org/public/speech/disorders/late-blooming-or-language-problem/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 2 Year Olds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
