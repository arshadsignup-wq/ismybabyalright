import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-sentence-length-short',
  title: 'Toddler Using Shorter Sentences Than Expected',
  category: 'communication',
  searchTerms: [
    'toddler short sentences',
    'toddler sentence length behind',
    'toddler not using long sentences',
    'how many words in toddler sentence',
    'toddler not speaking in sentences',
    'toddler phrases too short',
    'sentence development toddler',
    'mean length utterance low',
    'toddler language length behind',
    'toddler not making longer phrases',
  ],
  quickAnswer:
    'Sentence length increases steadily through the toddler years: two-word phrases by age 2, three-word phrases by 2.5, and four to five word sentences by age 3. If your toddler\'s sentences are consistently shorter than expected for their age, a speech-language evaluation can identify whether support would be helpful.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Two-word combinations are the norm at this age. Sentences like "more juice" and "daddy go" are typical. Longer sentences are not expected yet, and single words are still commonly used alongside two-word phrases.',
    },
    {
      ageRange: '24-30 months',
      context:
        'Phrases expand to two to three words. You may hear "I want that" or "big red ball." Some children are naturally more terse while others are more verbose. Look for gradual lengthening over this period.',
    },
    {
      ageRange: '30-36 months',
      context:
        'Most children use three to four word sentences regularly. Grammar elements like pronouns, prepositions, and verb endings are being added. If your child is still mostly using two-word phrases at this age, a speech evaluation is recommended.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Four to five word sentences are typical, with increasingly complex grammar. Children tell simple stories and describe events. Persistently short sentences at this age may indicate a language disorder that benefits from therapy.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Children use sentences of five or more words and combine sentences with conjunctions like "and" and "because." Short, simple sentences at this age warrant a language evaluation before starting kindergarten.',
    },
  ],
  whenNormal: [
    'Your toddler is age-appropriately using two-word phrases at 2 or three-word phrases at 2.5',
    'Your toddler uses shorter sentences when tired, excited, or in unfamiliar situations',
    'Your toddler occasionally produces longer sentences even if their average sentence is shorter',
    'Your toddler\'s sentence length has been gradually increasing over the past few months',
  ],
  whenToMention: [
    'Your child is over 30 months and still primarily using two-word phrases',
    'Your child\'s sentence length has not increased in the past 3 to 4 months',
    'Your child speaks in shorter sentences than same-age peers consistently',
  ],
  whenToActNow: [
    'Your child\'s sentences are getting shorter or they are losing language skills',
    'Your child is over 3 years and uses only one to two word phrases with limited vocabulary',
  ],
  relatedMilestones: ['sentence-formation', 'grammar-development', 'vocabulary-growth', 'narrative-skills'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-telegraphic-speech-only', 'toddler-grammar-errors-persistent', 'toddler-not-using-three-word-sentences'],
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
