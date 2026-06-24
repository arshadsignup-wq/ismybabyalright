import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-speech-delay-signs',
  title: 'Signs of Speech Delay in Toddlers',
  category: 'communication',
  searchTerms: [
    'toddler speech delay signs',
    'signs of speech delay toddler',
    'toddler not talking enough',
    'toddler speech milestones',
    'how many words should toddler say',
    'toddler language delay symptoms',
    'toddler behind in speech',
    'speech delay red flags toddler',
    'toddler expressive language delay',
    'toddler receptive language delay signs',
  ],
  quickAnswer:
    'Speech delay is one of the most common developmental concerns in toddlers, affecting about 10-15% of children under age 3. Key signs include no babbling by 12 months, no words by 16-18 months, fewer than 50 words by age 2, no two-word combinations by age 2, and speech that is difficult for familiar adults to understand by age 2-3. Early identification and intervention through speech therapy leads to significantly better outcomes than a "wait and see" approach.',
  byAge: [
    {
      ageRange: '9-12 months',
      context:
        'By 9 months, babies should be babbling with varied consonant sounds ("bababa," "mamama," "dadada"). By 12 months, most babies say at least one word intentionally and understand simple words like "no" and "bye-bye." They should also be using gestures like pointing, waving, and showing objects to communicate. Early signs of concern include: no babbling with consonant sounds, not responding to their name, not following your gaze or pointing, and not using any communicative gestures.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Between 12-18 months, toddlers typically acquire their first 10-20 words and understand far more. They should point to familiar objects when named, follow simple one-step directions ("give me the ball"), and use a mix of words and gestures to communicate. Signs of possible delay include: not saying any words by 15-16 months, not pointing to ask for things or show interest, not understanding simple commands, and not imitating words or sounds when you model them.',
    },
    {
      ageRange: '18-24 months',
      context:
        'A significant "word explosion" typically occurs in this window, with vocabulary growing from about 20 words at 18 months to approximately 50+ words and two-word combinations by age 2. Children should understand most of what you say and follow two-step directions. Red flags include: fewer than 50 words by age 2, no two-word combinations ("more milk," "daddy up"), difficulty understanding simple questions or directions, and relying almost entirely on gestures rather than words to communicate.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, children typically use 200-1,000 words, speak in 3-4 word sentences, and are understood by familiar listeners at least 50-75% of the time. By age 3, strangers should understand about 75% of your child\'s speech. Signs of delay at this age include: very limited vocabulary, not using sentences, speech that is very difficult for even family members to understand, inability to follow two-step directions, and avoiding verbal communication. If you observe these signs, request a speech-language evaluation.',
    },
  ],
  whenNormal: [
    'Your toddler understands language well and communicates through a mix of words and gestures',
    'Your toddler\'s vocabulary is growing steadily, even if slowly compared to some peers',
    'Your toddler has occasional "errors" in pronunciation — mispronouncing words is normal and expected through age 4-5',
  ],
  whenToMention: [
    'Your toddler has no words by 16 months or fewer than 50 words by age 2',
    'Your toddler does not combine two words into phrases by age 2',
    'Your toddler\'s speech is difficult for familiar adults to understand at age 2 or for strangers to understand at age 3',
  ],
  whenToActNow: [
    'Your toddler has lost words or phrases they previously used — any regression in speech requires urgent evaluation',
    'Your toddler does not respond to their name, does not understand simple language, and does not use gestures',
    'Your toddler has completely stopped vocalizing or communicating in any way',
  ],
  relatedMilestones: [
    'language-expressive',
    'language-receptive',
    'social-emotional-communication',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-speech-delay-panic-when-to-worry',
    'toddler-understands-but-wont-speak',
    'limited-vocabulary',
    'not-babbling-at-9-months',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Delays in Toddlers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Late Language Emergence.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
