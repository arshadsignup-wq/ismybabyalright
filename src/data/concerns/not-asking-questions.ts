import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-asking-questions',
  title: 'My Toddler Isn\'t Asking Questions',
  category: 'communication',
  searchTerms: [
    'toddler not asking questions',
    'toddler doesn\'t ask why',
    'toddler not saying what\'s that',
    'when do toddlers ask questions',
    'toddler not curious about things',
    'child doesn\'t ask what or where',
    'toddler no question words',
    'toddler not asking what\'s this',
    'when should toddler ask why',
    'toddler not using question words',
  ],
  quickAnswer:
    'Asking questions is a sophisticated language skill that develops in stages. Simple questions like "What\'s that?" typically emerge around 18-24 months, "where" questions around 24-30 months, and "why" questions around 2.5-3 years. If your toddler is using other words and phrases but hasn\'t started asking questions yet, they may just need a bit more time to reach this milestone.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Toddlers at this age ask questions through behavior, not words. They point at things and look at you expectantly, hold up objects for you to name, or use a rising intonation on a word ("ba?" while pointing at a ball). These proto-questions show curiosity and a desire to learn  -  the verbal questions will follow naturally as vocabulary grows.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Many toddlers begin asking "What\'s that?" or "Dat?" during this period. It might sound like "whassat?" or just a pointing gesture with a questioning tone. This is often the first true question form and it drives vocabulary growth  -  they\'re essentially asking you to label the world for them. Not all toddlers hit this milestone by 24 months, and that\'s often fine if other language is developing.',
    },
    {
      ageRange: '24-30 months',
      context:
        '"Where" questions typically emerge next ("Where daddy?" or "Where go?"), followed by "who." Your toddler should be showing curiosity about their environment through both words and actions. If your child is speaking in phrases and sentences but never asks any questions by 30 months, it\'s worth mentioning to your pediatrician, as question-asking reflects both language development and social engagement.',
    },
    {
      ageRange: '30-36 months',
      context:
        'The famous "why" phase typically starts between 2.5 and 3 years. By age 3, most children are asking questions frequently  -  sometimes relentlessly. If your 3-year-old has good vocabulary and sentence skills but never asks questions, it could indicate a difference in social communication or pragmatic language. A speech-language pathologist can assess whether intervention would help.',
    },
  ],
  whenNormal: [
    'Your toddler is under 24 months and shows curiosity by pointing, grunting with rising intonation, and bringing you objects  -  these are pre-verbal questions.',
    'Your toddler asks "What\'s that?" frequently but hasn\'t moved on to "where" or "why" yet  -  question words emerge in a predictable sequence.',
    'Your toddler is between 24 and 30 months and asks some questions but not consistently  -  the skill is still developing.',
    'Your toddler asks questions at home with familiar people but not with strangers or at daycare  -  comfort level affects language performance.',
  ],
  whenToMention: [
    'Your child is over 30 months with good vocabulary but never asks any questions  -  not even "What\'s that?"  -  which could indicate a pragmatic language difference.',
    'Your child is over 24 months and doesn\'t show curiosity through any means  -  not pointing at new things, not looking to you for information, not exploring.',
    'Your child repeats your questions back instead of asking their own (persistent echolalia in place of question-asking).',
  ],
  whenToActNow: [
    'Your child is over 30 months with no questions AND limited social engagement  -  doesn\'t seek your attention, doesn\'t share interests, doesn\'t look to you for reactions  -  this pattern warrants comprehensive evaluation.',
    'Your child previously asked questions and has stopped  -  any regression in communicative behavior should be evaluated promptly.',
  ],
  relatedMilestones: [
    'language-two-word-phrases',
    'language-sentences',
    'social-emotional-joint-attention',
    'cognitive-curiosity',
  ],
  showSelfReferral: true,
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
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
