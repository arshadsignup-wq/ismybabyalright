import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-verb-tense-confusion',
  title: 'Toddler Confusing Verb Tenses',
  category: 'communication',
  searchTerms: [
    'toddler verb tense confusion',
    'toddler wrong verb tense',
    'toddler not using past tense',
    'toddler mixing up tenses',
    'toddler says goed instead of went',
    'toddler irregular verbs errors',
    'toddler tense errors',
    'toddler grammar verb mistakes',
    'when do toddlers learn verb tenses',
    'toddler over-regularization verbs',
  ],
  quickAnswer:
    'Verb tense errors are one of the most common and normal grammar mistakes in young children. Toddlers often over-regularize, saying "goed" instead of "went" or "runned" instead of "ran," because they are actively learning and applying grammar rules. These errors typically resolve by age 4 to 5 without intervention.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Children are primarily using present-tense verbs and base forms. Past tense and future tense have not developed yet. Verb use is very basic, and tense errors are not a concern at this age.',
    },
    {
      ageRange: '24-30 months',
      context:
        'The present progressive -ing form appears, such as "running" or "eating." Regular past tense -ed may begin to emerge. Over-regularization errors like "eated" or "goed" start appearing and are actually a positive sign of grammar learning.',
    },
    {
      ageRange: '30-36 months',
      context:
        'Children use past tense more frequently but errors with irregular forms are common. "I falled down" or "She bringed it" are typical examples. These errors show your child is applying grammatical rules systematically, which is an important cognitive achievement.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Verb tense use becomes more accurate with regular verbs. Irregular verb errors persist and are normal. Children may switch tenses within a narrative, which is also typical at this age. Gradual improvement is expected.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Most children master regular verb tenses and many irregular forms. Some irregular verbs may still be challenging. If your child is consistently unable to use any past tense forms by age 5, a language evaluation may be warranted.',
    },
  ],
  whenNormal: [
    'Your toddler over-regularizes irregular verbs by saying things like "goed" or "bringed"',
    'Your toddler switches between correct and incorrect verb forms, showing they are learning',
    'Your toddler uses present tense for past events, like saying "I go to the park" about yesterday',
    'Your preschooler still makes occasional errors with tricky irregular verbs like "brought" or "caught"',
  ],
  whenToMention: [
    'Your child is over 4 years and consistently uses no verb tense markers at all',
    'Your child does not seem to understand the concept of past versus present when you speak',
    'Your child\'s verb tense difficulties are part of broader grammar and language delays',
  ],
  whenToActNow: [
    'Your child was using verb tenses correctly and has regressed to using only base forms',
    'Your child is over 5 years and cannot produce any past tense forms despite being taught',
  ],
  relatedMilestones: ['grammar-development', 'sentence-formation', 'narrative-skills', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-grammar-errors-persistent', 'child-not-using-past-tense', 'toddler-article-omission-speech'],
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
        'American Academy of Pediatrics. Language Development in Preschoolers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Language-Development.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Specific Language Impairment.',
      url: 'https://www.nidcd.nih.gov/health/specific-language-impairment',
    },
  ],
};
