import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-article-omission-speech',
  title: 'Toddler Dropping Articles and Small Words',
  category: 'communication',
  searchTerms: [
    'toddler dropping articles',
    'toddler not using a the is',
    'toddler omitting small words',
    'toddler leaving out words',
    'toddler speech missing words',
    'toddler not using articles',
    'toddler no function words',
    'toddler grammar missing a the',
    'when do toddlers use articles',
    'toddler dropping is and are',
  ],
  quickAnswer:
    'Omitting small grammatical words like "a," "the," "is," and "are" is completely normal in toddler speech. These function words carry less meaning and are often unstressed in speech, making them harder for young children to learn. Most children begin using articles and auxiliary verbs consistently between ages 3 and 4.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Children at this stage focus on content words like nouns and verbs. Saying "want ball" instead of "I want the ball" is completely normal telegraphic speech. Function words are not expected at this age.',
    },
    {
      ageRange: '24-30 months',
      context:
        'Some function words begin to appear, but omissions are still very common. Your child might say "doggy running" instead of "the doggy is running." This is a normal part of language development.',
    },
    {
      ageRange: '30-36 months',
      context:
        'Articles like "a" and "the" begin to appear more frequently. Auxiliary verbs like "is" and "are" start being used. Omissions are still common, especially in longer sentences or when your child is excited or rushing to communicate.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most children are using articles and auxiliary verbs more consistently, though errors still occur. If your child is consistently omitting all function words at age 4, a language evaluation may be helpful.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Function words should be well-established by this age. Persistent omission of articles and auxiliary verbs may indicate a specific language impairment that benefits from speech therapy.',
    },
  ],
  whenNormal: [
    'Your toddler is under 3 and omits articles and auxiliary verbs in most sentences',
    'Your toddler uses some function words inconsistently, including them sometimes and leaving them out other times',
    'Your toddler uses function words in short simple sentences but drops them in longer ones',
    'Your toddler is bilingual and one of their languages has different article rules',
  ],
  whenToMention: [
    'Your child is over 4 years and consistently omits articles and auxiliary verbs',
    'Your child\'s sentence structure remains very simplified compared to same-age peers',
    'Your child omits function words as part of a broader pattern of language delay',
  ],
  whenToActNow: [
    'Your child is losing grammar skills they previously had',
    'Your child is over 4 with severely limited grammar, minimal vocabulary, and difficulty being understood',
  ],
  relatedMilestones: ['grammar-development', 'sentence-formation', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-grammar-errors-persistent', 'toddler-telegraphic-speech-only', 'toddler-sentence-length-short'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Two to Three Years: Communication Development.',
      url: 'https://www.asha.org/public/speech/development/23/',
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
        'National Institute on Deafness and Other Communication Disorders. Specific Language Impairment.',
      url: 'https://www.nidcd.nih.gov/health/specific-language-impairment',
    },
  ],
};
