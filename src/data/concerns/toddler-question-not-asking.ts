import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-question-not-asking',
  title: 'Toddler Never Asks Questions',
  category: 'communication',
  searchTerms: [
    'toddler never asks questions', 'toddler doesn\'t ask why what where',
    'toddler no questions', 'when do toddlers ask questions', 'toddler not curious about language',
    'toddler doesn\'t ask what\'s that', 'toddler not questioning', 'toddler question development',
    'toddler doesn\'t ask for information', 'toddler not asking what why',
  ],
  quickAnswer:
    'Asking questions is an important language milestone. "What\'s that?" typically emerges around 18 to 24 months, "where" questions around 24 to 30 months, and "why" questions around 2.5 to 3 years. If your toddler has adequate vocabulary but never asks questions of any type by age 2.5, a speech-language evaluation can help determine whether support is needed.',
  byAge: [
    { ageRange: '12-18 months', context: 'Before verbal questions, babies ask through pointing and vocalizing with a rising intonation. These gestural questions are the foundation for verbal question-asking. If your baby points with an inquiring look, they are "asking" what something is.' },
    { ageRange: '18-24 months', context: '"What\'s that?" or "that?" with rising intonation is often the first verbal question. Some children ask "where" questions early too. Not all children ask questions by age 2, and this alone is not concerning if other language is developing.' },
    { ageRange: '24-30 months', context: 'Question-asking should be emerging. Children who are curious and engaged but not yet asking verbal questions may be pointing and using intonation to ask instead. If your child has 50 or more words but never asks any questions, mention this to your pediatrician.' },
    { ageRange: '30-36 months', context: '"Why" questions typically begin during this period. A child who makes statements and requests but never asks questions may have a pragmatic language difference. The ability to ask questions reflects an understanding that others have knowledge to share.' },
    { ageRange: '3-5 years', context: 'Questions become more complex and frequent. Children ask who, what, when, where, why, and how questions. If your child rarely or never asks questions by age 4, a pragmatic language evaluation is recommended.' },
  ],
  whenNormal: [
    'Your toddler is under 2 and has not yet started asking verbal questions',
    'Your toddler asks questions through pointing and rising intonation rather than words',
    'Your toddler asks "what" questions but has not yet progressed to "why" questions',
    'Your toddler asks questions in some settings but not others',
  ],
  whenToMention: [
    'Your toddler is over 2.5 with good vocabulary but never asks any questions',
    'Your toddler makes requests and comments but shows no curiosity through question-asking',
    'Your toddler does not seem to recognize that others can provide information',
  ],
  whenToActNow: [
    'Your toddler has no questions, limited social engagement, and no curiosity about the world',
    'Your toddler previously asked questions and has stopped',
  ],
  relatedMilestones: ['language-development', 'conversation-skills', 'social-engagement', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-asking-questions', 'child-not-asking-why-questions', 'toddler-wh-questions-difficulty'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Two to Three Years: Communication Development.', url: 'https://www.asha.org/public/speech/development/23/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Language and Communication Development.', url: 'https://www.zerotothree.org/resource/from-babbling-to-books/' },
  ],
};
