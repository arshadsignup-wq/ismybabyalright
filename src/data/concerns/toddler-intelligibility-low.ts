import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-intelligibility-low',
  title: 'Toddler Is Hard to Understand',
  category: 'communication',
  searchTerms: [
    'toddler hard to understand',
    'can\'t understand my toddler',
    'toddler unclear speech',
    'toddler speech intelligibility low',
    'strangers can\'t understand toddler',
    'toddler mumbles',
    'toddler speech not clear',
    'how much should you understand toddler',
    'toddler unintelligible speech',
    'toddler garbled speech',
  ],
  quickAnswer:
    'Speech intelligibility increases gradually: parents typically understand about 50% of a 2-year-old\'s speech, 75% by age 3, and nearly 100% by age 4. Strangers understand less than familiar listeners. If your toddler is significantly harder to understand than these benchmarks, or if they are becoming frustrated by not being understood, a speech evaluation may help.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'First words are often only understandable to parents and regular caregivers. It is completely normal for others to not understand your baby\'s early words. About 25% intelligibility to unfamiliar listeners is typical.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Parents understand about 50% of their toddler\'s speech. Many sound substitutions and simplifications are normal. Strangers may understand only 25 to 30% of what your toddler says.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By age 3, parents should understand about 75% or more of their child\'s speech, and unfamiliar listeners should understand about 50%. Common normal errors include simplifying consonant clusters and substituting easier sounds for harder ones.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most of your child\'s speech should be understandable, even to unfamiliar listeners. About 75% intelligibility to strangers is expected. If your child is still very difficult to understand at this age, a speech evaluation is recommended.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Speech should be nearly fully intelligible to everyone. Some sound errors may persist, such as difficulty with R, L, S, or TH, but overall meaning should be clear. If your child is still hard to understand, speech therapy can help before school entry.',
    },
  ],
  whenNormal: [
    'Your 2-year-old is hard for strangers to understand but you can interpret most of what they say',
    'Your toddler makes common sound substitutions like saying "wabbit" for "rabbit" or "nana" for "banana"',
    'Your toddler is clearer in calm, familiar situations and harder to understand when excited or tired',
    'Your toddler\'s clarity is gradually improving over time even if it is still below age expectations',
  ],
  whenToMention: [
    'You can understand less than half of your 2-year-old\'s speech as their primary caregiver',
    'Strangers cannot understand any of your 3-year-old\'s speech',
    'Your toddler is becoming frustrated, tantruming, or withdrawing because they are not understood',
  ],
  whenToActNow: [
    'Your child\'s speech clarity has gotten worse rather than better over time',
    'Your child is over 3 years and almost no one can understand their speech, causing significant frustration and communication breakdown',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'sentence-formation', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['unclear-speech', 'toddler-speech-not-understood-by-strangers', 'toddler-phonological-processes-persistent'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Speech Sound Disorders.',
      url: 'https://www.asha.org/public/speech/disorders/speech-sound-disorders/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Speech and Language Development. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
