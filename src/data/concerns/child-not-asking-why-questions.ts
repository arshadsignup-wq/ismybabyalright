import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'child-not-asking-why-questions',
  title: 'Child Not Asking "Why" Questions',
  category: 'communication',
  searchTerms: [
    'child not asking why',
    'toddler doesn\'t ask questions',
    'when do kids start asking why',
    'child never asks why',
    'toddler not curious about things',
    '3 year old not asking questions',
    'child doesn\'t ask what or why',
    'toddler not asking what\'s that',
    'when should child ask questions',
    'child not inquisitive',
  ],
  quickAnswer:
    'Most children begin asking simple questions like "what\'s that?" around age 2, and "why?" questions typically emerge between ages 2.5 and 3. If your child isn\'t asking questions yet, consider whether they\'re communicating their curiosity in other ways - like pointing, looking at you expectantly, or bringing you things to name. Some children are more observers than askers, and that\'s okay as long as their overall language is developing.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'At this age, toddlers show curiosity mainly through actions - pointing at things, bringing objects to show you, and looking at you for reactions. Some early talkers may ask "dat?" (what\'s that?) with rising intonation. But most toddlers are not yet forming question sentences. If your child is pointing, showing, and engaging with the world around them, curiosity is present even without verbal questions.',
    },
    {
      ageRange: '2-2.5 years',
      context:
        'Between 2 and 2.5, children often start asking "what" questions - "what\'s that?" and "what doing?" These are the first true question forms. Some children use rising intonation to turn any word into a question ("Doggy?"). If your 2-year-old isn\'t asking questions yet but is using two-word phrases and showing curiosity through behavior, they\'re likely on track.',
    },
    {
      ageRange: '2.5-3 years',
      context:
        'The famous "why" stage typically begins around 2.5 to 3 years. Children start asking "why," "where," and "how" as they try to understand the world. If your child is 3 and hasn\'t started asking any type of question, but is otherwise communicating in sentences, it may just be a matter of time. However, if they also have limited language overall, a speech evaluation can help.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3-4, most children are in a full "why" phase, asking endless questions about everything. If your child is 4 and rarely or never asks questions of any kind - not "what," "where," "why," or "how" - this could suggest a pragmatic language concern. A speech therapist can assess whether your child understands the conversational purpose of questions and help develop this skill.',
    },
  ],
  whenNormal: [
    'Your 2-year-old doesn\'t ask verbal questions yet but points at things and looks at you expectantly, waiting for you to name them.',
    'Your child asks "what" questions but hasn\'t started "why" questions yet - "what" typically comes before "why."',
    'Your child is naturally quiet or observant and prefers to watch and listen rather than ask - personality plays a role in how children express curiosity.',
    'Your child asks questions in some settings (like at home) but not others (like at daycare) - comfort level affects communication.',
  ],
  whenToMention: [
    'Your child is over 3 and has never asked any type of question - not "what," "where," or "why."',
    'Your child has a good vocabulary and speaks in sentences but doesn\'t use language to ask for information or engage in back-and-forth conversation.',
    'Your child doesn\'t show curiosity about new objects, people, or situations in any way - verbally or nonverbally.',
  ],
  whenToActNow: [
    'Your child is over 3 with very limited language overall and no question-asking, combined with limited social engagement and repetitive behaviors - this pattern warrants a developmental evaluation.',
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
        'American Academy of Pediatrics - Language Development: 2 to 3 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By Three Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
