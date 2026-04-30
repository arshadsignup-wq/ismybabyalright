import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-answering-questions',
  title: 'Toddler Not Answering Simple Questions',
  category: 'communication',
  searchTerms: [
    'toddler not answering questions',
    'toddler ignores questions',
    'toddler won\'t answer what\'s your name',
    'toddler won\'t answer yes or no',
    'toddler doesn\'t respond to questions',
    'toddler repeats question instead of answering',
    'toddler not responding to where is questions',
    'toddler ignoring when asked a question',
    'toddler not verbal enough to answer',
    'toddler only answers sometimes',
  ],
  quickAnswer:
    'Answering questions requires several skills working together: understanding the question, retrieving the answer, and producing a response. Most toddlers begin answering simple questions like "where is the ball?" (by pointing or going to it) around 18-24 months, and "what\'s this?" around 24-30 months. Not answering questions can reflect normal toddler independence, limited language skills, difficulty processing questions, or simply not wanting to perform on demand. Context matters - if your child answers sometimes but not always, that is typical toddler behavior.',
  byAge: [
    { ageRange: '12-18 months', context: 'At this age, toddlers may respond to simple questions with actions rather than words. "Where is your shoe?" should prompt looking, pointing, or going to the shoe. "Do you want milk?" might get a reach, nod, or excited response. They are not yet expected to answer with words or sentences.' },
    { ageRange: '18-24 months', context: 'Toddlers should begin answering "where" questions by pointing or going to the item. They may answer "what\'s this?" for familiar objects. "Yes" and "no" responses (nodding, shaking head, or saying the words) should be developing. Not all toddlers answer on demand - many answer when they feel like it and ignore questions when absorbed in play, which is normal.' },
    { ageRange: '2-3 years', context: 'By age 2.5-3, toddlers should be answering a variety of simple questions: "what\'s your name?", "what\'s this?", "where is mommy?", and some "what doing?" questions. If your child echoes the question back instead of answering (echolalia) or consistently cannot answer basic questions by age 3, a speech-language evaluation is recommended.' },
  ],
  whenNormal: [
    'A toddler who answers familiar people but not strangers',
    'Not answering when deeply engaged in play (selective attention is normal)',
    'Answering by pointing or showing rather than with words',
    'Sometimes answering and sometimes ignoring - typical toddler independence',
    'Using "no" as the default answer to everything (very common phase)',
  ],
  whenToMention: [
    'Your toddler never answers any questions by age 2, even with gestures or actions',
    'Your child echoes questions back instead of answering them consistently',
    'Your child does not seem to understand simple questions at all',
    'Your child answers questions at home but never at daycare or with other adults',
  ],
  whenToActNow: [
    'Your child does not respond to their name or any questions and seems unaware of being spoken to (possible hearing issue)',
    'Your child was answering questions and has stopped (regression)',
    'Inability to answer questions is paired with other communication and social concerns',
  ],
  relatedMilestones: ['18-months', '24-months', '36-months'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-following-commands', 'echolalia', 'delayed-receptive-language', 'toddler-repeating-questions-back'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. One to Two Years.', url: 'https://www.asha.org/public/speech/development/12/' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
