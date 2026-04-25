import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pronoun-reversal',
  title: 'My Child Reverses Pronouns (Says \'You\' Instead of \'I\')',
  category: 'communication',
  searchTerms: [
    'toddler pronoun reversal',
    'child says you instead of I',
    'toddler mixes up pronouns',
    'child refers to self as you',
    'toddler pronoun confusion',
    'toddler says your name instead of I',
    'pronoun reversal autism',
    'child calls self by name not I',
    'toddler he she mix up',
    'when do toddlers learn pronouns',
  ],
  quickAnswer:
    'Pronoun confusion is surprisingly common in toddlers and is often a normal part of language development. Pronouns are one of the trickiest parts of language because "I" and "you" change depending on who is speaking. Most children sort out basic pronouns (I, you, me) by age 3. Persistent pronoun reversal past age 3-3.5, especially combined with other communication differences, may warrant evaluation.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Most toddlers this age don\'t use pronouns at all yet, and that\'s perfectly fine. They typically refer to themselves by name ("Max want milk") or use "me" as a catch-all. When they start experimenting with pronouns, mistakes are expected. They might say "You want cookie" when they mean "I want cookie" because that\'s how they hear it from you ("Do you want a cookie?").',
    },
    {
      ageRange: '24-30 months',
      context:
        'Pronoun use is emerging but messy. Your toddler may switch between "me," "I," their own name, and sometimes "you" when talking about themselves. This is normal experimentation. The important thing is progress over time  -  you should see them getting it right more often. "Me" and "my" typically come first, followed by "I" and "you."',
    },
    {
      ageRange: '30-36 months',
      context:
        'By 3 years old, most children have sorted out "I," "you," "me," and "my" in most contexts, though occasional errors still happen. "He" and "she" mix-ups are common well into preschool years. If your child consistently reverses "I" and "you" at this age  -  always saying "you" when they mean "I"  -  it\'s worth discussing with your pediatrician, especially if other social communication differences are present.',
    },
    {
      ageRange: '3+ years',
      context:
        'Persistent, consistent pronoun reversal past age 3.5  -  where a child reliably says "you" when they mean "I"  -  can be associated with autism spectrum disorder or language processing differences. This is different from occasional mix-ups, which are normal until age 4-5 (especially with "he" and "she"). If your child seems to have a systematic reversal pattern rather than occasional confusion, a developmental evaluation is recommended.',
    },
  ],
  whenNormal: [
    'Your toddler is under 3 and occasionally mixes up "I" and "you"  -  pronouns are one of the hardest parts of language to master.',
    'Your toddler refers to themselves by name instead of using "I"  -  this is a common intermediate step before pronoun mastery.',
    'Your child mixes up "he" and "she"  -  gender pronouns are typically not mastered until age 4-5.',
    'Your toddler gets pronouns right sometimes and wrong sometimes  -  inconsistency is part of the learning process.',
  ],
  whenToMention: [
    'Your child is over 3 and consistently says "you" when meaning "I" in a systematic way  -  not occasional errors but a reliable pattern.',
    'Your child echoes your pronoun use without switching perspective ("Do you want milk?" answered with "You want milk" instead of "I want milk").',
    'Pronoun reversal is accompanied by other echolalia  -  repeating phrases exactly as heard rather than adapting them.',
  ],
  whenToActNow: [
    'Persistent pronoun reversal combined with limited social engagement, repetitive behaviors, difficulty with back-and-forth conversation, and restricted interests  -  this cluster of features warrants comprehensive developmental evaluation.',
    'Your child previously used pronouns correctly and has begun reversing them  -  any regression in language skills should be evaluated promptly.',
  ],
  relatedMilestones: [
    'language-sentences',
    'language-two-word-phrases',
    'social-emotional-joint-attention',
    'cognitive-self-awareness',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Autism Spectrum Disorder: Communication Problems in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/Communication-Problems-in-Children-with-Autism.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Autism Spectrum Disorder.',
      url: 'https://www.asha.org/public/speech/disorders/autism/',
    },
    {
      org: 'NIDCD',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Autism Spectrum Disorder: Communication Problems in Children.',
      url: 'https://www.nidcd.nih.gov/health/autism-spectrum-disorder-communication-problems-children',
    },
  ],
};
