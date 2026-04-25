import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'unclear-speech',
  title: 'Toddler Speech Is Hard to Understand',
  category: 'communication',
  searchTerms: [
    'toddler speech hard to understand',
    'toddler unclear speech',
    'toddler mumbling',
    'can\'t understand my toddler',
    'toddler speech intelligibility',
    'toddler not speaking clearly',
    'toddler garbled speech',
    'toddler pronunciation problems',
    'strangers can\'t understand toddler',
    'toddler articulation problems',
    'toddler speech not clear',
  ],
  quickAnswer:
    'Speech clarity improves gradually  -  by age 2, strangers typically understand about 50% of what a child says, and by age 3, about 75%. It\'s perfectly normal for toddlers to drop sounds, substitute easier ones, and simplify words. As long as speech is becoming clearer over time, your child is likely developing normally.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'First words are often only understood by parents and regular caregivers. Your toddler might say "ba" for bottle, "guh" for dog, or "nana" for banana. These simplified versions are expected  -  your child is figuring out how to coordinate dozens of tiny muscles in their mouth. Only about 25% of speech may be intelligible to strangers at this stage.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Speech clarity gradually improves, but it\'s common for strangers to understand only about 25-50% of what your toddler says. Familiar listeners (parents, caregivers) typically understand much more. Sound substitutions  -  saying "wabbit" for rabbit or "dood" for good  -  are completely normal at this age.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-2.5, about 50-75% of your child\'s speech should be understandable to unfamiliar listeners. Many sound errors are still normal: "w" for "r" (wabbit), "d" for "th" (dat), "f" for "th" (fank you). These sounds are among the last to develop. If strangers can\'t understand at least half of your 2.5-year-old\'s speech, a speech evaluation may be helpful.',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3, about 75% of speech should be intelligible to strangers. Some sound errors remain normal  -  "r," "l," "s," "z," "sh," "ch," and "th" sounds may not be mastered until age 5-7. If your child is very difficult for strangers to understand at age 3, or if they\'re frustrated by not being understood, speech therapy can help significantly.',
    },
  ],
  whenNormal: [
    'You (the parent) can understand your child even if others can\'t  -  parents are always the best interpreters of their toddler\'s speech.',
    'Your child substitutes easier sounds for harder ones ("wun" for "run")  -  most sound substitutions are developmentally appropriate.',
    'Your child\'s speech is becoming clearer over time, even if progress is gradual.',
    'Your child simplifies long words ("nana" for banana, "pasketti" for spaghetti)  -  this is a normal part of learning complex words.',
    'Your child speaks clearly in calm, one-on-one situations but becomes harder to understand when excited or speaking quickly.',
  ],
  whenToMention: [
    'Strangers can\'t understand at least 50% of your 2-year-old\'s or 75% of your 3-year-old\'s speech.',
    'Your child is dropping beginning sounds from most words (saying "all" for "ball," "og" for "dog") past age 2.',
    'Your child seems frustrated that people can\'t understand them and is giving up on trying to communicate.',
    'Your child\'s speech clarity doesn\'t seem to be improving over time.',
  ],
  whenToActNow: [
    'Your child\'s speech was becoming clearer and has suddenly become more garbled or slurred  -  any regression in speech quality should be evaluated.',
    'Your child drools excessively, has difficulty chewing or swallowing, and has unclear speech  -  this combination may indicate an oral-motor concern that benefits from early intervention.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-two-word-phrases',
    'language-sentences',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Speech and Language Delays and Disorders. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Speech Sound Disorders: Articulation and Phonological Processes.',
      url: 'https://www.asha.org/public/speech/disorders/speech-sound-disorders/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Three Years.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-3yr.html',
    },
  ],
};
