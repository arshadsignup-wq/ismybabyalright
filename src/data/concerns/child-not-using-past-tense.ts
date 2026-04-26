import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'child-not-using-past-tense',
  title: 'Child Not Using Past Tense',
  category: 'communication',
  searchTerms: [
    'child not using past tense',
    'toddler doesn\'t use past tense',
    'child says goed instead of went',
    'when do kids learn past tense',
    'toddler not using -ed endings',
    'child doesn\'t talk about the past',
    'toddler only speaks in present tense',
    '3 year old no past tense',
    'child grammar development past tense',
    'toddler can\'t describe what happened',
  ],
  quickAnswer:
    'Past tense is one of the later grammar skills to develop. Most children begin using regular past tense (adding "-ed" to verbs) between ages 2.5 and 3.5, and irregular past tense (like "went," "ate," "fell") takes even longer. It\'s completely normal for a 3-year-old to say "I goed to the park" - this over-regularization actually shows they\'re learning grammar rules. Don\'t worry about past tense errors until well past age 4.',
  byAge: [
    {
      ageRange: '2-2.5 years',
      context:
        'At this age, children are just beginning to use two- and three-word sentences. Past tense is not expected yet. Your toddler lives very much "in the moment" and talks about what\'s happening now. They may describe past events using present tense ("Daddy go work") and that\'s completely normal. Focus on vocabulary growth and sentence length, not grammar accuracy.',
    },
    {
      ageRange: '2.5-3 years',
      context:
        'Around 2.5 to 3, some children start experimenting with past tense, especially common regular verbs ("walked," "jumped") and a few irregular ones they hear often ("fell," "went"). Many children haven\'t started using past tense yet at 3, and that\'s fine. If your child is using sentences and growing their vocabulary, grammar refinement will come.',
    },
    {
      ageRange: '3-4 years',
      context:
        'This is when past tense usage typically emerges and grows. You\'ll often hear charming over-regularization errors like "runned," "goed," "eated" - these are actually a great sign that your child is internalizing grammar rules and applying them. Irregular forms take longer because they must be memorized individually. By age 4, children should be using past tense regularly, though errors are still common.',
    },
    {
      ageRange: '4+ years',
      context:
        'After age 4, children should be using past tense in their speech with reasonable consistency. Some irregular forms ("brought," "caught," "thought") may still be tricky until age 5-6. If your child is 4+ and doesn\'t use any past tense forms, or if they have broad grammar difficulties (no plurals, no possessives, very short sentences), a speech evaluation can assess their overall grammar development.',
    },
  ],
  whenNormal: [
    'Your 2-3-year-old uses present tense to describe past events - past tense hasn\'t developed yet and this is age-appropriate.',
    'Your child says "goed," "runned," or "eated" - over-regularization is a healthy sign of grammar rule learning, not an error to worry about.',
    'Your child uses past tense for some verbs but not others - inconsistency is normal as the skill develops.',
    'Your child uses "went" and "ate" (common irregular forms they hear frequently) but over-regularizes less common verbs.',
    'Your child is under 3.5 and doesn\'t consistently use past tense - this is within the normal developmental window.',
  ],
  whenToMention: [
    'Your child is over 4 and never uses any past tense forms - not regular "-ed" endings or common irregular forms.',
    'Your child has broad grammar difficulties beyond just past tense - very short sentences, no plurals, no possessives, missing articles.',
    'Your child can\'t describe recent events at all, even with prompting, by age 3.5-4.',
  ],
  whenToActNow: [
    'Your child is over 4, uses very limited grammar of any kind, and their speech is mostly single words or two-word phrases - this level of language delay needs a comprehensive speech-language evaluation.',
  ],
  relatedMilestones: [
    'language-sentence-use',
    'language-vocabulary-growth',
    'social-emotional-communicates-needs',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Development: 3 to 4 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Language-Development-3-to-4-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By Four Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-4yr.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
