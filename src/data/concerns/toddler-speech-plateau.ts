import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'toddler-speech-plateau', title: 'Speech Development Has Plateaued', category: 'communication',
  searchTerms: ['speech plateau toddler', 'speech development stopped', 'toddler stopped learning new words', 'speech not progressing', 'language development stalled', 'toddler same words for months', 'no new words toddler', 'speech development stuck', 'language plateau child', 'toddler not adding vocabulary'],
  quickAnswer: 'A temporary plateau in speech development can be normal, especially when a child is focused on developing other skills like walking or problem-solving. However, a prolonged plateau lasting more than 2 to 3 months without any new words, improved understanding, or communication attempts warrants evaluation. True language plateaus may indicate that the child needs support to continue progressing. An SLP can determine whether the plateau is a normal developmental pause or a sign that intervention is needed.',
  byAge: [
    { ageRange: '12-18 months', context: 'Brief pauses in word acquisition are common when a child is mastering motor skills like walking. However, pre-linguistic skills like gestures, babbling variety, and understanding should continue to develop even during a word plateau.' },
    { ageRange: '18-24 months', context: 'Most children experience a vocabulary explosion during this period. If your child\'s vocabulary has not grown in 2 to 3 months, or if they are stuck well below 50 words by age 2, an evaluation is recommended.' },
    { ageRange: '2-3 years', context: 'A plateau at this age is more concerning. Children should be adding words steadily and beginning to combine them. If sentence length and vocabulary have not increased in several months, discuss this with your pediatrician or SLP.' },
    { ageRange: '3-4 years', context: 'A plateau after initial progress in therapy may indicate a need to change the therapeutic approach, increase session frequency, or investigate underlying factors. Discuss concerns with your child\'s SLP.' },
    { ageRange: '4-5 years', context: 'Persistent plateaus despite intervention may suggest a language disorder rather than a delay. A comprehensive evaluation can help differentiate and guide appropriate support.' },
  ],
  whenNormal: ['Your child\'s speech paused briefly while they focused on learning to walk', 'Your child had a short plateau during illness but is adding words again', 'Your child is still gaining understanding and communication skills even if new words have slowed'],
  whenToMention: ['Your child has not added new words for 2 to 3 months', 'Your child\'s speech progress has slowed significantly compared to earlier gains', 'Your child is in therapy but progress seems to have stalled'],
  whenToActNow: ['Your child has not gained any new words or communication skills for more than 3 months', 'Your child\'s plateau is accompanied by loss of interest in communicating', 'Your child is losing previously acquired words alongside the plateau'],
  relatedMilestones: ['language-development', 'vocabulary-growth', 'first-words', 'social-engagement'],
  showSelfReferral: true, relatedConcernSlugs: ['toddler-speech-progress-slow', 'toddler-catching-up-speech', 'toddler-language-disorder-vs-delay'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Late Language Emergence.', url: 'https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
