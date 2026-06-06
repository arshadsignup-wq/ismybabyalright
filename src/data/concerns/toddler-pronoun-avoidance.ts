import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-pronoun-avoidance',
  title: 'Toddler Avoids Using Pronouns Entirely',
  category: 'communication',
  searchTerms: [
    'toddler avoids pronouns', 'toddler won\'t use I me you', 'toddler no pronouns',
    'toddler uses names instead of pronouns', 'toddler pronoun avoidance',
    'toddler refers to self by name', 'toddler doesn\'t say I or me',
    'when do toddlers use pronouns', 'toddler pronoun development delayed',
    'toddler skipping pronouns',
  ],
  quickAnswer:
    'Pronouns like "I," "me," "you," and "my" are among the more challenging words for toddlers because they shift depending on who is speaking. Most children begin using pronouns between 18 and 30 months, with errors being very common until age 3 to 4. Avoiding pronouns entirely past age 3 may indicate a language processing difference and is worth discussing with a speech-language pathologist.',
  byAge: [
    { ageRange: '18-24 months', context: 'Most toddlers do not yet use pronouns. They typically refer to themselves by name and may use "me" or "mine" as first pronouns. Not using any pronouns at this age is completely normal.' },
    { ageRange: '24-30 months', context: 'Pronouns begin to emerge but errors are extremely common. Children may say "me want" instead of "I want" or use their own name instead of "I." These errors are normal and part of pronoun learning.' },
    { ageRange: '30-36 months', context: 'Most children are using I, me, you, and my, though errors persist. If your child still avoids pronouns entirely by age 3, using names for everyone instead, this may warrant evaluation. Some children avoid pronouns because the shifting reference is confusing.' },
    { ageRange: '3-4 years', context: 'Pronoun use should be more consistent by now, though errors with he/she and him/her are still common. Complete avoidance of all pronouns at this age should be evaluated, as it may be associated with language processing differences or autism spectrum features.' },
    { ageRange: '4-5 years', context: 'Most pronouns should be used correctly by this age. Persistent avoidance or confusion may benefit from targeted speech therapy that specifically teaches pronoun concepts.' },
  ],
  whenNormal: [
    'Your toddler is under 2.5 and uses names instead of pronouns',
    'Your toddler uses some pronouns incorrectly, like "me" instead of "I"',
    'Your toddler is gradually adding pronouns to their vocabulary',
    'Your toddler mixes up he/she, which is common until age 4',
  ],
  whenToMention: [
    'Your child is over 3 and completely avoids all pronouns, always using names instead',
    'Your child uses pronouns in memorized phrases but cannot use them correctly in spontaneous speech',
    'Pronoun avoidance is combined with other language or social communication differences',
  ],
  whenToActNow: [
    'Your child avoids pronouns as part of broader language regression or skill loss',
    'Your child is over 4 with no pronoun use and multiple other language and social concerns',
  ],
  relatedMilestones: ['grammar-development', 'vocabulary-growth', 'language-comprehension'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-third-person-self-reference', 'toddler-mixing-up-pronouns-he-she', 'pronoun-reversal'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Typical Speech and Language Development.', url: 'https://www.asha.org/public/speech/development/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
