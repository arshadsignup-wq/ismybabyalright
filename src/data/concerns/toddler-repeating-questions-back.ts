import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-repeating-questions-back',
  title: 'Toddler Repeating Questions Back Instead of Answering',
  category: 'communication',
  searchTerms: [
    'toddler repeats questions back',
    'toddler echoes my questions',
    'toddler won\'t answer questions',
    'child repeats question instead of answering',
    'toddler parrots my questions',
    'toddler echolalia questions',
    'child says back what I ask',
    'toddler can\'t answer questions',
    'toddler repeats everything I say as a question',
    'why does my toddler repeat my questions',
  ],
  quickAnswer:
    'When toddlers repeat questions back instead of answering, they\'re often processing what you\'ve said. This is a common phase of language development between 18 months and 2.5 years. For many children, echoing a question is a step on the way to learning how to respond. It usually resolves as their language skills grow. However, if question-echoing is the primary way your child communicates past age 3, or if it\'s combined with other social-communication concerns, a speech evaluation is a good idea.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'At this age, repeating your questions is a common part of language learning. When you ask "do you want milk?" and your toddler says "want milk?" they\'re rehearsing the words, processing the meaning, and may then act on it (reaching for milk). This is echolalia being used as a communication bridge. It\'s a positive sign that they\'re hearing and processing your words.',
    },
    {
      ageRange: '2-2.5 years',
      context:
        'Question-echoing often peaks around this age, especially for "yes/no" questions. Children may not yet understand how to respond with "yes" or "no" and instead repeat the question because they don\'t know the expected format of the answer. You can help by offering choices ("milk or water?") instead of yes/no questions, and modeling answers ("Do you want milk? Yes, I want milk!").',
    },
    {
      ageRange: '2.5-3 years',
      context:
        'By 2.5 to 3 years, most children are answering simple questions without echoing them first. Some may still echo occasionally, especially when a question is complex or unexpected. If your child is still echoing most questions at 3 but is also generating original language and having conversations, the echoing is likely resolving. If they almost never answer questions independently, a speech evaluation can help.',
    },
    {
      ageRange: '3+ years',
      context:
        'Past age 3, if your child still routinely repeats questions back instead of answering - and this is their primary response to questions - it may indicate difficulty with language processing or social communication. A speech-language pathologist can assess whether your child understands the questions and help them develop the skill of responding. In some cases, persistent question-echoing past age 3 can be associated with autism spectrum disorder.',
    },
  ],
  whenNormal: [
    'Your 2-year-old echoes your question and then answers it ("Want milk? ... Yes!") - echoing as a processing step before answering is healthy.',
    'Your toddler echoes new or unusual questions but answers familiar, routine questions correctly - novelty makes language processing harder.',
    'Your child repeats questions sometimes but also generates spontaneous language, asks their own questions, and has conversations.',
    'Your toddler echoes yes/no questions but correctly answers "what" and "where" questions - yes/no is actually harder for many children.',
    'Your child is between 18 months and 2.5 years - this is the peak echolalia age and echoing questions is very common.',
  ],
  whenToMention: [
    'Your child is over 3 and still echoes most questions instead of answering them, with very few independent responses.',
    'Your child echoes questions and also has limited spontaneous language overall - they rarely generate their own phrases.',
    'Your child seems genuinely confused by questions rather than using echoing as a processing strategy.',
  ],
  whenToActNow: [
    'Your child is over 3, echoes nearly all questions, generates very little original language, and also has limited eye contact, difficulty with social interaction, and repetitive behaviors - this combination warrants a developmental evaluation for autism spectrum disorder.',
    'Your child previously answered questions independently and has reverted to echoing them - regression in communication skills needs immediate assessment.',
  ],
  relatedMilestones: [
    'language-sentence-use',
    'language-vocabulary-growth',
    'social-emotional-communicates-needs',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Delay in Toddlers: Information for Parents',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By Three Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
    },
  ],
};
