import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-telegraphic-speech-only',
  title: 'Toddler Using Only Two-Word Telegraphic Speech',
  category: 'communication',
  searchTerms: [
    'toddler telegraphic speech',
    'toddler only two word phrases',
    'toddler not using full sentences',
    'toddler dropping small words',
    'toddler speech like telegram',
    'toddler not using grammar',
    'two word phrases only toddler',
    'toddler sentence length short',
    'toddler not progressing past two words',
    'stuck at two word combinations',
  ],
  quickAnswer:
    'Telegraphic speech, where toddlers use short phrases like "want cookie" or "daddy go," is a normal stage of language development between 18 and 30 months. Children gradually add grammatical words like articles, prepositions, and verb endings as they mature. If your child is still using only two-word phrases past age 3, a speech evaluation may be helpful.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Two-word combinations are the expected milestone at this age. Telegraphic speech is completely normal and shows that your child is beginning to understand word order and basic grammar. Common examples include "more milk," "big dog," and "mommy up."',
    },
    {
      ageRange: '24-30 months',
      context:
        'Children begin expanding to three-word phrases and adding grammatical elements. You may hear "I want cookie" instead of "want cookie." This transition happens gradually. Some children remain in the two-word stage a bit longer and this can be normal.',
    },
    {
      ageRange: '30-36 months',
      context:
        'Most children are using three to four word sentences by age 3, with increasing use of grammar like pronouns, articles, and verb endings. If your child is still primarily using two-word phrases, a speech-language evaluation is recommended.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Children are typically speaking in sentences of four to five words with more complex grammar. Persistent telegraphic speech at this age may indicate a language disorder rather than a simple delay, and professional support can help.',
    },
    {
      ageRange: '4-5 years',
      context:
        'By this age, children should be using complex sentences. If your child is still limited to two-word phrases, speech therapy is essential to build sentence structure and grammar skills before starting school.',
    },
  ],
  whenNormal: [
    'Your toddler is between 18 and 27 months and using two-word combinations as their primary sentence type',
    'Your toddler occasionally uses three-word phrases but mostly sticks to two-word combinations',
    'Your toddler\'s telegraphic phrases are creative and varied, not just memorized chunks',
    'Your toddler\'s vocabulary is growing and they are adding new word combinations regularly',
  ],
  whenToMention: [
    'Your child is over 30 months and still primarily using only two-word phrases',
    'Your child\'s phrase length has not increased over the past several months',
    'Your child uses two-word phrases but seems unable to add grammatical words even with modeling',
  ],
  whenToActNow: [
    'Your child\'s sentence length is decreasing or they are losing language skills',
    'Your child is over 3 years and uses only two-word phrases with limited vocabulary and comprehension difficulties',
  ],
  relatedMilestones: ['word-combinations', 'sentence-formation', 'grammar-development', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-sentence-length-short', 'toddler-grammar-errors-persistent', 'toddler-not-combining-by-24-months'],
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
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
