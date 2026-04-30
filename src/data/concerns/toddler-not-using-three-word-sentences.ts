import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-using-three-word-sentences',
  title: 'Toddler Not Using Three-Word Sentences by Age 3',
  category: 'communication',
  searchTerms: [
    'toddler not using three word sentences',
    '3 year old not using sentences',
    'toddler short sentences',
    'toddler only two word phrases',
    'toddler sentence length delay',
    '3 year old speech behind',
    'toddler not combining three words',
    'toddler grammar delay',
    'toddler sentence development',
    'when should toddler use sentences',
  ],
  quickAnswer:
    'By age 3, most children are using 3-4 word sentences like "I want juice" or "Daddy go work." If your toddler is still primarily using single words or two-word phrases at age 3, their expressive language may benefit from evaluation. Some late talkers catch up on their own, but children who are not combining at least 2-3 words by age 3 often benefit from speech therapy to build sentence structure and grammar skills.',
  byAge: [
    { ageRange: '18-24 months', context: 'Most toddlers begin combining two words around 18-24 months ("more milk," "daddy up," "big truck"). Some children do this earlier, some later. If your child has at least 50 words and is starting to put two together by 24 months, they are on track. Two-word combinations at this age are the building blocks for longer sentences.' },
    { ageRange: '24-30 months', context: 'Two-word phrases should become more frequent and varied. By 2.5 years, many children are using 2-3 word sentences and starting to use simple grammar markers (adding "ing" to verbs, using plurals). Vocabulary is typically 200-300+ words. If your child is still mostly using single words at this point, a speech evaluation is recommended.' },
    { ageRange: '30-36 months', context: 'By age 3, most children use 3-4 word sentences, ask questions, and are understood by familiar adults about 75% of the time. They should be telling simple stories and describing what they see. If your child is not yet using at least 3-word combinations, is not asking questions, or is very difficult to understand, speech therapy can help build these skills.' },
  ],
  whenNormal: [
    'Using mostly 2-word phrases at age 2 with occasional 3-word combinations',
    'Making grammar mistakes ("me want it" instead of "I want it") through age 3-4',
    'Having a vocabulary explosion between 2-3 years that brings sentence length up quickly',
    'Speaking in longer sentences at home than in unfamiliar settings',
  ],
  whenToMention: [
    'Your child is mostly using single words at age 2',
    'Your child is not using 2-word phrases by 24 months',
    'Your child is not using 3-word sentences by 36 months',
    'Your child\'s sentences are much shorter than same-age peers',
  ],
  whenToActNow: [
    'Your child has lost language skills they previously had',
    'Your child has no words at all by age 2',
    'Your child is 3 years old and is not understood by anyone outside the immediate family',
  ],
  relatedMilestones: ['24-months', '36-months'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-combining-words', 'speech-delay', 'late-talker', 'limited-vocabulary'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development: 2 Year Olds. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Two to Three Years.', url: 'https://www.asha.org/public/speech/development/23/' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
