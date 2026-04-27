import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-only-says-no',
  title: 'Toddler Only Says "No" - Limited Vocabulary Concerns',
  category: 'communication',
  searchTerms: ['toddler only says no','toddler says no to everything','toddler limited vocabulary','toddler only a few words','toddler says no but not yes','18 month old only says no','toddler negative phase','toddler no phase','toddler only says one word','toddler refuses to say words','toddler vocabulary stuck','toddler won\'t say new words'],
  quickAnswer: '"No" is often among the first and most-used words in a toddler\'s vocabulary because it is powerful, gets a reaction, and they hear it frequently. A toddler who says "no" to everything - even things they want - is asserting independence, not necessarily being defiant. If "no" is one of several words your toddler uses, this is normal. If "no" is your toddler\'s only word at 18+ months, their vocabulary may be limited and worth monitoring. By 18 months, toddlers should have at least 10-20 words.',
  byAge: [
    { ageRange: '12-15 months', context: 'First words are emerging, and toddlers typically have 1-5 words. "No" (with head shake), "mama," "dada," and "uh-oh" are among the most common first words. If "no" is one of your child\'s first words, they are on track. At this age, having even a few words plus good gesture communication (pointing, waving, showing you things) indicates normal language development. Keep narrating your day, reading books, and responding to all communication attempts.' },
    { ageRange: '15-18 months', context: 'Vocabulary should be growing to 10-20 words by 18 months. If "no" remains the only word, but your toddler is pointing, gesturing, following simple directions, and clearly understanding what you say, they may be a late talker who is about to have a language explosion. If they have fewer than 10 words at 18 months AND limited gesture use, or if they do not seem to understand simple instructions ("Where\'s your shoes?"), a speech-language evaluation is recommended.' },
    { ageRange: '18-24 months', context: 'The "no" phase intensifies as toddlers discover the power of refusal. Your toddler may say "no" to everything, including things they want. This is autonomy-seeking, not a language problem, as long as they also have a growing vocabulary of other words (should be 50+ by age 2). Offer choices instead of yes/no questions: "Do you want apple or banana?" instead of "Do you want a snack?" If "no" remains the dominant or only word with minimal other vocabulary, discuss with your pediatrician.' },
    { ageRange: '2-3 years', context: 'By age 2, toddlers should have 50+ words and be combining two words ("no want," "no sleep," "more milk"). If your child primarily communicates through "no" and has very few other words, speech therapy can help expand their vocabulary. The "no" phase typically peaks around 2-2.5 and gradually decreases as your toddler gains more language to express their preferences. Teaching "yes" explicitly (modeling head nodding and the word "yes") can help balance the constant "no."' },
  ],
  whenNormal: ['Your toddler says "no" constantly but also uses a growing list of other words','Your toddler says "no" to things they want and then accepts them - this is autonomy, not vocabulary limitation','The "no" phase coincides with ages 18-30 months and gradually improves','Your toddler understands much more than they say and follows directions well'],
  whenToMention: ['Your toddler at 18 months has fewer than 10 words total including "no"','Your toddler at 24 months has fewer than 50 words or is not combining two words','Your toddler does not seem to understand simple instructions','Your child had words and has lost them - regression of any kind needs evaluation'],
  whenToActNow: ['Your child over 18 months has no words at all, not even "no"','Your child has lost words they previously had','Your child does not point, gesture, or attempt to communicate in any way'],
  relatedMilestones: ['language-expressive','language-receptive'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-nonverbal-at-2','toddler-talking-but-not-communicating','toddler-making-up-words'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development: 2 Year Olds. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Late Language Emergence.', url: 'https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
