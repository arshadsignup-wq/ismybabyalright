import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-speech-not-understood-by-strangers',
  title: 'Toddler Speech Not Understood by Strangers',
  category: 'communication',
  searchTerms: [
    'toddler speech not understood by strangers',
    'toddler hard to understand',
    'toddler unclear speech',
    'toddler intelligibility',
    'nobody understands my toddler',
    'toddler mumbles',
    'strangers can\'t understand my child',
    'toddler speech clarity',
    'how clear should toddler speech be',
    'toddler talks but no one understands',
    'speech intelligibility 2 year old',
  ],
  quickAnswer:
    'It\'s normal for toddler speech to be difficult for unfamiliar people to understand. As a general rule, strangers should understand about 50% of a 2-year-old\'s speech, 75% of a 3-year-old\'s, and nearly 100% of a 4-year-old\'s. If you as a parent can understand your child but others can\'t, they\'re likely still developing clearer speech sounds - which is completely normal and expected.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this stage, toddler speech is mostly understood only by close family members, and even parents may need context clues to figure out what their child is saying. Your toddler may substitute, drop, or simplify sounds in many words. This is completely typical. As long as they\'re attempting words and their vocabulary is growing, clarity will improve with time.',
    },
    {
      ageRange: '18-24 months',
      context:
        'By age 2, about 50% of your child\'s speech should be understandable to unfamiliar listeners. That means it\'s perfectly fine if half of what your toddler says is still unclear. Common patterns at this age include dropping the ends of words, substituting easier sounds for harder ones, and simplifying consonant clusters. These are normal phonological processes.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Between 2 and 3, speech clarity improves steadily. By age 3, about 75% of your child\'s speech should be understood by strangers. If your 3-year-old is still very difficult for others to understand, a speech evaluation can help. Some sound errors are still normal at 3 (like saying "wabbit" for "rabbit"), but overall clarity should be increasing noticeably.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 4, nearly all of your child\'s speech should be intelligible to strangers, even if they still make some specific sound errors. If your child is 4 and people frequently ask you to "translate," speech therapy can help them develop the sound patterns they\'re missing. Articulation therapy at this age is typically very effective and can be fun for kids.',
    },
  ],
  whenNormal: [
    'You can understand your 2-year-old most of the time, but grandparents or babysitters need some help - family members always understand children better than strangers.',
    'Your toddler drops sounds at the end of words (says "ca" for "cat") - final consonant deletion is a normal pattern that typically resolves by age 3.',
    'Your child substitutes easier sounds for harder ones, like saying "tat" for "cat" or "wun" for "run" - these simplifications are developmentally appropriate.',
    'Your child\'s speech is clearer when they\'re calm and speaking slowly, but gets muddled when they\'re excited or talking fast.',
    'Your child is under 3 years old and you can understand about 50-75% of what they say.',
  ],
  whenToMention: [
    'Your child is 3 years old and strangers understand less than half of their speech.',
    'Your child is getting frustrated because others can\'t understand them, leading to behavioral outbursts or withdrawal from communication.',
    'Your child\'s speech clarity does not seem to be improving over time - it\'s been at the same level for 6 months or more.',
  ],
  whenToActNow: [
    'Your child is over 3 and even you (as their parent) frequently cannot understand what they\'re trying to say - this level of unintelligibility needs professional assessment.',
    'Your child has stopped trying to talk because people don\'t understand them - giving up on communication is a sign they need support now.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-sentence-use',
    'language-vocabulary-growth',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - How to Raise Concerns About Your Child\'s Speech',
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
