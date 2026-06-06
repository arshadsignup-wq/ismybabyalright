import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-wh-questions-difficulty',
  title: 'Toddler Can\'t Answer Who, What, Where Questions',
  category: 'communication',
  searchTerms: [
    'toddler can\'t answer wh questions', 'toddler doesn\'t understand who what where',
    'toddler wh questions difficulty', 'toddler can\'t answer questions',
    'toddler doesn\'t answer what is this', 'toddler confused by questions',
    'wh question development toddler', 'toddler not understanding questions',
    'toddler can\'t answer where questions', 'when do toddlers answer questions',
  ],
  quickAnswer:
    'Understanding and answering "wh" questions develops in a specific order: "what" and "where" first (around 2 to 2.5 years), followed by "who" (around 2.5 to 3 years), then "when," "why," and "how" (3 to 4 years). If your toddler cannot answer basic "what" or "where" questions by age 3, a speech-language evaluation may be helpful.',
  byAge: [
    { ageRange: '18-24 months', context: 'Toddlers may begin to understand simple "what" questions like "what is that?" when pointing at objects. Many toddlers cannot yet answer wh-questions verbally, but may respond by pointing or showing. This is age-appropriate.' },
    { ageRange: '24-30 months', context: '"What" and "where" questions are developing. Your child may be able to answer "What is this?" by naming an object and "Where is your cup?" by looking or pointing. Verbal answers may be one word.' },
    { ageRange: '30-36 months', context: 'Children should be able to answer basic "what," "where," and "who" questions. They may still struggle with "why," "when," and "how" questions. If your child cannot answer "what" questions at this age, a language evaluation is recommended.' },
    { ageRange: '3-4 years', context: '"Why" and "how" questions are developing. Children begin to give simple explanations and descriptions. Some difficulty with these more complex questions is normal. Most children answer basic wh-questions reliably by age 4.' },
    { ageRange: '4-5 years', context: 'All basic wh-questions should be understood and answered. Children provide more detailed and accurate responses. Persistent difficulty with question comprehension may indicate a receptive language disorder.' },
  ],
  whenNormal: [
    'Your toddler is under 2.5 and cannot yet answer verbal wh-questions but responds through gestures',
    'Your toddler answers "what" and "where" questions but not yet "why" or "how"',
    'Your toddler answers questions about things they can see but struggles with questions about past events',
    'Your toddler sometimes answers correctly and sometimes does not, which reflects developing skills',
  ],
  whenToMention: [
    'Your child is over 3 and cannot answer basic "what is this" or "where is it" questions',
    'Your child seems confused by questions and often gives random or unrelated answers',
    'Your child can answer questions about visible items but never about past events or absent objects',
  ],
  whenToActNow: [
    'Your child shows no understanding of any question types and gives no response',
    'Your child previously answered questions and has lost this ability',
  ],
  relatedMilestones: ['language-comprehension', 'conversation-skills', 'vocabulary-growth', 'narrative-skills'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-asking-questions', 'delayed-receptive-language', 'toddler-yes-no-confusion'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Two to Three Years: Communication Development.', url: 'https://www.asha.org/public/speech/development/23/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
