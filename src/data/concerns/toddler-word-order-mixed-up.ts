import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-word-order-mixed-up',
  title: 'Toddler Mixing Up Word Order',
  category: 'communication',
  searchTerms: [
    'toddler word order wrong',
    'toddler scrambled sentences',
    'toddler words in wrong order',
    'toddler mixed up word order',
    'toddler sentence structure wrong',
    'toddler backwards sentences',
    'toddler syntax errors',
    'toddler jumbled speech',
    'when do toddlers get word order right',
    'toddler puts words in wrong place',
  ],
  quickAnswer:
    'Occasional word order errors are normal as toddlers learn sentence structure. Children typically master basic subject-verb-object word order by age 2.5 to 3. Saying things like "ball throw me" instead of "throw me the ball" is part of the learning process. Persistent or severe word order difficulties beyond age 3 should be evaluated.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Early two-word combinations may not always follow adult word order. "Up me" for "pick me up" or "cookie more" for "more cookies" are typical. Children are just beginning to learn how word order conveys meaning.',
    },
    {
      ageRange: '24-30 months',
      context:
        'Basic subject-verb-object order becomes more consistent, but errors still occur, especially with more complex sentence types. Questions may have unusual word order, like "where daddy go?" which is normal at this age.',
    },
    {
      ageRange: '30-36 months',
      context:
        'Word order is mostly correct for simple sentences. Errors may persist with questions, negatives, and complex sentences. Gradual improvement is expected through exposure to correct models.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most children have mastered basic word order. Some complexity with embedded clauses and questions may still be developing. Persistent basic word order errors at this age warrant a language evaluation.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Word order should be consistently correct for a wide range of sentence types. If your child is still producing many word order errors, a speech-language pathologist can assess whether there is an underlying language disorder.',
    },
  ],
  whenNormal: [
    'Your toddler is under 2.5 years and occasionally puts words in an unusual order',
    'Your toddler uses correct word order most of the time but makes errors with questions or complex sentences',
    'Your toddler\'s word order errors are decreasing over time',
    'Your toddler is bilingual and the word order of their other language sometimes influences their English',
  ],
  whenToMention: [
    'Your child is over 3 years and frequently uses incorrect word order in simple sentences',
    'Your child\'s word order errors make their speech difficult to understand',
    'Word order difficulties are combined with other grammar and language delays',
  ],
  whenToActNow: [
    'Your child\'s sentence structure has deteriorated or become more confused over time',
    'Your child is over 3 years with severely disordered word order, limited vocabulary, and comprehension difficulties',
  ],
  relatedMilestones: ['sentence-formation', 'grammar-development', 'language-comprehension', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-grammar-errors-persistent', 'toddler-telegraphic-speech-only', 'toddler-sentence-length-short'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Typical Speech and Language Development.',
      url: 'https://www.asha.org/public/speech/development/',
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
