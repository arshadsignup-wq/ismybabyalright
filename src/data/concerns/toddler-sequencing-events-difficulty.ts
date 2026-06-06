import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-sequencing-events-difficulty',
  title: 'Child Cannot Describe Events in Order',
  category: 'communication',
  searchTerms: [
    'toddler can\'t sequence events', 'child events out of order', 'toddler temporal ordering difficulty',
    'child can\'t tell things in order', 'toddler jumbled story telling', 'child sequencing difficulty',
    'toddler can\'t describe what happened first', 'temporal concepts child', 'child first then next difficulty',
    'toddler mixed up event order',
  ],
  quickAnswer:
    'Understanding and describing events in sequence develops between ages 3 and 5. Toddlers typically describe events as they remember them, not in chronological order. By age 4, most children can describe a 3-step sequence. By age 5, they can retell a story or event in order. If your child cannot sequence even 2 to 3 events by age 4, this may indicate a language or cognitive processing difference.',
  byAge: [
    { ageRange: '24-36 months', context: 'Toddlers describe events out of order, jumping to the most exciting or memorable part. This is completely normal. Sequencing concepts like "first," "then," and "next" have not yet developed.' },
    { ageRange: '3-4 years', context: 'Children begin to understand "first" and "then" and can sequence 2 to 3 familiar routine events. They may still get longer sequences mixed up, which is expected.' },
    { ageRange: '4-5 years', context: 'Children can typically sequence 3 to 4 events and use temporal words like "then," "after that," and "next." If your child cannot order even simple familiar routines by this age, an evaluation may help.' },
    { ageRange: '5-6 years', context: 'Event sequencing is well-developed. Children retell stories and personal experiences in order. Sequencing skills are important for reading comprehension, writing, and math. Persistent difficulty warrants evaluation.' },
    { ageRange: '6-7 years', context: 'Complex sequencing including multiple steps and cause-and-effect relationships is developing. Difficulty at this age can affect academic performance across subjects.' },
  ],
  whenNormal: [
    'Your toddler is under 3.5 and tells events in whatever order they remember them',
    'Your child can sequence familiar routines but not novel experiences',
    'Your child uses "and then" to connect events, even if not always in the right order',
    'Your preschooler\'s sequencing is improving with practice and prompting',
  ],
  whenToMention: [
    'Your child is over 4 and cannot describe even a 2-step familiar routine in order',
    'Your child seems confused by concepts of first, next, and last',
    'Sequencing difficulty is combined with other language comprehension challenges',
  ],
  whenToActNow: [
    'Your child has lost sequencing abilities they previously demonstrated',
    'Your child cannot understand or follow any sequential directions by age 4',
  ],
  relatedMilestones: ['narrative-skills', 'language-comprehension', 'follows-directions', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-narrative-skills-weak', 'child-not-telling-simple-stories', 'not-following-two-step-commands'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Spoken Language Disorders.', url: 'https://www.asha.org/practice-portal/clinical-topics/spoken-language-disorders/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development in Preschoolers. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Language-Development.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
