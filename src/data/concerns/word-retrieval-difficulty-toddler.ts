import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'word-retrieval-difficulty-toddler',
  title: 'Word-Finding Difficulty in Toddlers',
  category: 'communication',
  searchTerms: [
    'toddler can\'t find words',
    'toddler tip of tongue',
    'toddler word retrieval problems',
    'toddler knows word but can\'t say it',
    'toddler struggling to remember words',
    'child can\'t think of the word',
    'toddler word finding difficulty',
    'toddler pausing mid sentence',
    'toddler says um a lot',
    'anomia toddler',
  ],
  quickAnswer:
    'It is common for toddlers to struggle to find the right word, pause mid-sentence, or substitute a related word (like saying "dog" when they mean "cat"). This happens because their vocabulary is growing rapidly and the connections between word knowledge and word retrieval are still forming. Occasional word-finding difficulties are a normal part of language development and usually improve as your child\'s language system matures.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this stage, children are just beginning to use words. They may point or gesture when they cannot produce the word they want. This is completely normal. Their receptive vocabulary (words they understand) is much larger than their expressive vocabulary (words they can say). Responding to their gestures by naming the object helps build word retrieval pathways.',
    },
    {
      ageRange: '18-24 months',
      context:
        'During the "vocabulary explosion" around 18 months, children are learning new words rapidly. They may mix up words, use a general word like "thing" or "that," or become frustrated when they cannot find the right word. This is a natural part of rapidly expanding language skills. Modeling the correct word without correcting them directly supports learning.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Toddlers at this age are combining words into sentences and may pause, say "um," or substitute words when they cannot retrieve the one they want. They might describe an object instead of naming it ("the thing you drink from" instead of "cup"). Frequent word-finding difficulty at this age, especially if it is worsening rather than improving, may be worth mentioning to your pediatrician.',
    },
  ],
  whenNormal: [
    'Occasional pausing or hesitation when trying to say a word, especially when excited or tired',
    'Using a related word in place of the target word (saying "spoon" instead of "fork")',
    'Describing an object instead of naming it directly',
    'Saying "um" or "uh" frequently while constructing sentences',
    'Word-finding difficulty that improves over time as vocabulary grows',
  ],
  whenToMention: [
    'Your toddler frequently becomes very frustrated because they cannot find words to express themselves',
    'Word retrieval difficulties seem to be getting worse rather than better over several months',
    'Your child avoids speaking or participates less in conversations because of word-finding trouble',
    'You notice that your child\'s vocabulary seems to plateau or shrink rather than grow',
  ],
  whenToActNow: [
    'Your child has lost words they previously used consistently (language regression), which warrants prompt evaluation',
    'Word-finding difficulty is accompanied by other developmental concerns such as loss of social skills or new repetitive behaviors',
    'Your child suddenly cannot find words or speak clearly after a head injury, illness, or seizure',
  ],
  relatedMilestones: ['18-months', '24-months', '36-months'],
  showSelfReferral: true,
  relatedConcernSlugs: ['speech-delay', 'limited-vocabulary', 'late-talker', 'mixing-up-words'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Delays in Toddlers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Late Language Emergence.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
