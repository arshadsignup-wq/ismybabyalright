import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-grammar-errors-persistent',
  title: 'Toddler\'s Grammar Errors Not Improving',
  category: 'communication',
  searchTerms: [
    'toddler grammar errors',
    'toddler grammar not improving',
    'toddler wrong grammar',
    'toddler speech grammar mistakes',
    'persistent grammar errors toddler',
    'toddler not using correct grammar',
    'grammar development toddler',
    'toddler missing words in sentences',
    'toddler broken grammar',
    'when should toddler use correct grammar',
  ],
  quickAnswer:
    'Grammar errors are a completely normal part of language development in toddlers and preschoolers. Children naturally say things like "I goed" or "him is big" as they learn grammar rules. Most grammar errors resolve by age 4 to 5. If errors persist beyond age 5 or if your child uses very limited grammar for their age, a speech-language evaluation may be helpful.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Grammar is just emerging at this stage. Two-word combinations are the norm, and children are not expected to use correct grammar. Missing articles, incorrect pronouns, and absent verb endings are all completely normal.',
    },
    {
      ageRange: '24-30 months',
      context:
        'Children begin using basic grammar like plural -s, present progressive -ing, and simple pronouns. Errors are frequent and expected. Over-regularization errors like "foots" instead of "feet" actually show that your child is learning grammar rules.',
    },
    {
      ageRange: '30-36 months',
      context:
        'Grammar becomes more complex with use of auxiliary verbs, past tense, and possessives. Errors are still very common, especially with irregular forms. Your child may say "runned" or "mouses," showing they are applying grammar rules even to exceptions.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most grammar structures are used, though errors with irregular forms, complex sentences, and some pronouns persist. Children at this age are expected to still make mistakes. Grammar accuracy improves gradually through exposure and practice.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Most children have mastered basic grammar by age 5, though some irregular forms may still be tricky. If your child still has significant grammar difficulties at this age, such as consistently omitting verb tense markers or using very simple sentence structures, a language evaluation is recommended.',
    },
  ],
  whenNormal: [
    'Your toddler makes errors with irregular past tense like "goed" or "bringed"',
    'Your toddler confuses pronouns like "him" and "he" or "her" and "she" before age 4',
    'Your toddler omits small grammatical words like articles and prepositions occasionally',
    'Your toddler\'s grammar is gradually improving over time even if errors persist',
  ],
  whenToMention: [
    'Your child is over 4 years and grammar has not improved noticeably in the past year',
    'Your child consistently omits grammar markers that same-age peers use correctly',
    'Your child\'s grammar difficulties make their speech harder to understand',
  ],
  whenToActNow: [
    'Your child is losing grammar skills they previously demonstrated',
    'Your child is over 4 years and uses almost no grammatical markers, speaking as if every sentence is a simple list of words',
  ],
  relatedMilestones: ['grammar-development', 'sentence-formation', 'vocabulary-growth', 'narrative-skills'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-verb-tense-confusion', 'toddler-article-omission-speech', 'child-not-using-past-tense'],
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
