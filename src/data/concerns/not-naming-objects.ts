import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-naming-objects',
  title: 'My Toddler Can\'t Name Objects',
  category: 'communication',
  searchTerms: [
    'toddler can\'t name objects',
    'toddler not labeling things',
    'toddler won\'t name things',
    'toddler doesn\'t say what things are',
    'toddler not naming animals',
    'child can\'t name pictures',
    'toddler expressive vocabulary delay',
    'toddler knows objects but won\'t name them',
    'toddler points but doesn\'t name',
    'when should toddler name objects',
  ],
  quickAnswer:
    'Most toddlers start naming familiar objects between 15 and 18 months, with rapid growth after that. Many children can identify objects by pointing before they can name them aloud. If your toddler clearly recognizes and understands objects but isn\'t labeling them verbally, their receptive language may be ahead of their expressive language  -  which is common and often resolves with time.',
  byAge: [
    {
      ageRange: '12-15 months',
      context:
        'At this stage, most toddlers have only a handful of words, and those words are usually social ("mama," "dada," "bye-bye") rather than object labels. It\'s completely normal for a 12-15 month old to point at a dog without saying "dog." What matters is that they\'re showing interest in objects and starting to connect words they hear with things they see.',
    },
    {
      ageRange: '15-18 months',
      context:
        'Many toddlers begin naming familiar objects  -  "ball," "cup," "car"  -  during this period. Some children name things enthusiastically, while others point and grunt. If your child clearly understands object names (they look at or bring you the right object when asked), their comprehension is strong even if production is lagging. A vocabulary of 5-20 words by 18 months is typical.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is when the "word explosion" often happens  -  toddlers may go from 20 words to 200 seemingly overnight. They should be naming familiar objects, body parts, and people. If your toddler still can\'t name any objects by 24 months, even though they understand what things are, an evaluation is a good idea. Expressive language delays are the most common type of speech delay.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By 2 years, most children can name many everyday objects and are starting to categorize them ("food," "animals"). By 3, they can name colors, some shapes, and describe what objects do. If your child significantly struggles with naming at this stage  -  particularly if they also have difficulty understanding what objects are  -  a speech-language assessment can identify whether support is needed.',
    },
  ],
  whenNormal: [
    'Your toddler is under 18 months and points to objects to show interest, even if they can\'t name them yet.',
    'Your toddler can identify objects when you name them ("Where\'s the ball?") but doesn\'t say the names aloud  -  receptive language is ahead of expressive, which is typical.',
    'Your toddler names some objects but not others  -  vocabulary builds unevenly, often starting with the most interesting or frequently encountered items.',
    'Your toddler uses a general word like "dat" or "dis" while pointing at objects  -  they\'re trying to label and the specific words will follow.',
  ],
  whenToMention: [
    'Your child is 18-24 months and can\'t name any objects, even highly familiar ones like "ball" or "cup."',
    'Your child is over 24 months and has fewer than 50 words, including object names.',
    'Your child seems to have difficulty remembering the names of objects they\'ve been exposed to repeatedly  -  they learn and then forget.',
  ],
  whenToActNow: [
    'Your child can\'t name objects AND doesn\'t seem to understand object names either  -  a combined receptive and expressive delay warrants prompt evaluation.',
    'Your child previously named objects and has stopped  -  any loss of vocabulary is a reason for immediate assessment.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-two-word-phrases',
    'language-receptive',
    'cognitive-object-permanence',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Late Language Emergence.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 1 Year Olds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-1-Year-Olds.aspx',
    },
    {
      org: 'NIDCD',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
