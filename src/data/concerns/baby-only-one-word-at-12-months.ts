import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-only-one-word-at-12-months',
  title: 'Baby Only Has One Word at 12 Months',
  category: 'communication',
  searchTerms: [
    'baby only one word at 12 months',
    '12 month old limited words',
    'how many words at 12 months',
    'baby only says one word',
    '1 year old vocabulary',
    'baby first words milestone',
    'limited words at 12 months',
    'baby should have how many words at 1',
    'only says mama at 12 months',
    'baby few words at one year',
  ],
  quickAnswer:
    'At 12 months, most babies have 1 to 3 recognizable words, so having just one word is within the normal range. What matters most is whether your baby is also using gestures, understanding words, and babbling with varied sounds. These skills together predict healthy language development.',
  byAge: [
    {
      ageRange: '9-11 months',
      context:
        'Many babies have not yet produced their first true word at this stage, and that is normal. They may be babbling with varied consonant sounds, using gestures like pointing and waving, and understanding simple words. These are all positive signs that words are coming.',
    },
    {
      ageRange: '12 months',
      context:
        'The typical range at 12 months is 1 to 3 words, though some babies have a few more and some have none yet. "Mama," "dada," "hi," "no," and "uh-oh" are common first words. Having just one word at this age is within the expected range, especially if your baby is communicating in other ways.',
    },
    {
      ageRange: '12-15 months',
      context:
        'Words typically begin to accumulate slowly during this period. Your baby may add a new word every few weeks. What matters is that vocabulary is growing, even if slowly. Receptive language, understanding of words and directions, usually advances faster than expressive language.',
    },
    {
      ageRange: '15-18 months',
      context:
        'Most children have 5 to 20 words by 18 months. If your baby still has only one word at 15 months, it is worth monitoring closely. Your pediatrician may recommend a wait-and-see approach if comprehension and gestures are strong, or may refer for a speech evaluation.',
    },
    {
      ageRange: '18-24 months',
      context:
        'A vocabulary explosion often occurs between 18 and 24 months. If your child\'s vocabulary has not grown beyond a few words by 18 months, a speech-language evaluation can help determine if intervention would be beneficial.',
    },
  ],
  whenNormal: [
    'Your 12-month-old has one word and is also babbling, gesturing, and understanding simple words',
    'Your baby uses one word consistently and meaningfully while also communicating with pointing and sounds',
    'Your baby has one clear word but seems close to producing more, with many "almost words" in their babbling',
    'Your baby is developing other skills well including motor skills and social engagement',
  ],
  whenToMention: [
    'Your baby is 15 months or older with only one word and is not adding new words',
    'Your baby has one word but is not using any gestures like pointing, waving, or reaching to communicate',
    'Your baby does not seem to understand common words or simple directions by 12 months',
  ],
  whenToActNow: [
    'Your baby had words and has stopped using them entirely',
    'Your baby has no words, no gestures, limited babbling, and poor eye contact by 12 months',
  ],
  relatedMilestones: ['first-words', 'babbling', 'gestures', 'language-comprehension'],
  showSelfReferral: true,
  relatedConcernSlugs: ['late-talker', 'baby-no-words-at-15-months', 'limited-vocabulary'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By One Year.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-1yr.html',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. One to Two Years: Communication Development.',
      url: 'https://www.asha.org/public/speech/development/12/',
    },
  ],
};
