import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-stuttering-vs-normal-disfluency',
  title: 'Is My Toddler\'s Stuttering Normal?',
  category: 'communication',
  searchTerms: [
    'toddler stuttering normal',
    'normal disfluency vs stuttering',
    'toddler repeating words normal',
    'toddler developmental stuttering',
    'toddler stumbling over words',
    'normal stuttering age',
    'when to worry about stuttering',
    'toddler repeating first syllable',
    'typical disfluency toddler',
    'is stuttering normal at 2',
  ],
  quickAnswer:
    'Many toddlers between 2 and 5 years go through a period of normal disfluency, where they repeat whole words or phrases, use filler words, and revise sentences. This is different from true stuttering, which involves sound or syllable repetitions, prolongations, or blocks. Normal disfluency typically resolves within 6 months. If disfluencies persist, worsen, or cause your child distress, a fluency evaluation is recommended.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Some disfluency may begin as toddlers start combining words. Repeating whole words like "I-I-I want that" is common and normal as children learn to organize longer sentences. This is not cause for concern.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Normal disfluency is most common during this period of rapid language growth. Children\'s thoughts often move faster than their ability to express them. Whole-word repetitions, phrase revisions, and filler words are all typical.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Normal disfluency often peaks between ages 2.5 and 4. Key differences from true stuttering: normal disfluency involves whole-word repetitions ("I-I want"), while true stuttering involves part-word repetitions ("I w-w-want"), sound prolongations ("ssssssnake"), or blocks where no sound comes out.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Most normal disfluency resolves by this age. If stuttering-like behaviors persist beyond 6 months, or if your child shows physical tension, eye blinking, or frustration when speaking, a fluency evaluation by a speech-language pathologist is recommended.',
    },
    {
      ageRange: '5-6 years',
      context:
        'Persistent stuttering at this age is less likely to resolve on its own and benefits from therapy. Early intervention for stuttering is very effective. A speech-language pathologist can teach strategies to promote fluent speech.',
    },
  ],
  whenNormal: [
    'Your toddler repeats whole words or phrases like "I want I want the cookie"',
    'Your toddler uses filler words like "um" and "uh" while thinking of what to say',
    'Your toddler revises sentences mid-stream, like "I want the...can I have juice?"',
    'The disfluencies are relaxed with no physical tension, and your toddler seems unaware of them',
  ],
  whenToMention: [
    'Your toddler repeats parts of words or individual sounds like "b-b-b-ball" or "ssssnake"',
    'Your toddler seems physically tense when speaking, with visible jaw or lip tension',
    'Disfluencies have lasted more than 6 months or are getting worse',
    'Your toddler is frustrated, avoids speaking, or says "I can\'t talk"',
  ],
  whenToActNow: [
    'Your toddler has blocks where they appear stuck and no sound comes out despite effort',
    'Your toddler has developed secondary behaviors like eye blinking, head nodding, or fist clenching when trying to speak',
  ],
  relatedMilestones: ['fluency', 'sentence-formation', 'self-confidence', 'language-development'],
  showSelfReferral: true,
  relatedConcernSlugs: ['stuttering', 'toddler-stuttering-onset-sudden', 'toddler-stuttering-getting-worse'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Stuttering.',
      url: 'https://www.asha.org/public/speech/disorders/stuttering/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Stuttering in Toddlers and Preschoolers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Stuttering-in-Toddlers-Preschoolers.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Stuttering.',
      url: 'https://www.nidcd.nih.gov/health/stuttering',
    },
  ],
};
