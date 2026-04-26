import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-using-pronouns',
  title: 'Toddler Not Using Pronouns',
  category: 'communication',
  searchTerms: [
    'toddler not using pronouns',
    'toddler refers to self by name',
    'toddler doesn\'t say I or me',
    'when do toddlers use pronouns',
    'toddler says own name instead of I',
    'child not using I me you',
    'toddler pronoun development',
    'when should toddler say I',
    'child speaks in third person',
    'toddler won\'t say me or my',
  ],
  quickAnswer:
    'Pronouns like "I," "me," "you," and "my" are some of the trickiest words for toddlers to learn because they change depending on who is speaking. Most children start using "me" and "mine" around 20 to 24 months and "I" and "you" by age 2 to 3. It\'s completely normal for a 2-year-old to say "Emma want milk" instead of "I want milk." Pronoun use typically falls into place by age 3.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'At this age, toddlers typically refer to themselves by name or say "me" and "mine." Using "I" consistently is not expected yet. If your child says "baby want up" or uses their name instead of a pronoun, that\'s perfectly normal. They\'re learning to express possession and desire before they master the grammar of pronouns.',
    },
    {
      ageRange: '2-2.5 years',
      context:
        'Between ages 2 and 2.5, children often begin experimenting with "I," "me," "you," and "my," though they frequently mix them up. Saying "me do it" instead of "I\'ll do it" is typical. Some children still prefer using their own name. As long as they\'re developing language in other areas - combining words, growing vocabulary - pronoun confusion at this age is not a concern.',
    },
    {
      ageRange: '2.5-3 years',
      context:
        'By age 2.5 to 3, most children are using "I," "me," "my," and "you" correctly most of the time, with occasional mix-ups. If your child is 3 and still exclusively using their name instead of any pronouns, or consistently reverses "I" and "you," it\'s worth mentioning to your pediatrician. A speech therapist can work on this skill if needed.',
    },
    {
      ageRange: '3+ years',
      context:
        'After age 3, children should be using basic pronouns (I, me, you, he, she, we, they) with reasonable accuracy. Occasional errors with he/she or him/her can persist until age 4. If your child over 3 still avoids pronouns entirely and speaks only in third person, a speech-language evaluation can help determine if there\'s an underlying language concern.',
    },
  ],
  whenNormal: [
    'Your 2-year-old refers to themselves by name instead of using "I" - this is a normal step before pronoun use develops.',
    'Your toddler says "me do it" or "me want" instead of "I" - early pronoun attempts often use "me" as a default.',
    'Your child sometimes mixes up "I" and "you" - pronouns that shift depending on the speaker are genuinely confusing for young children.',
    'Your child uses "mine" and "my" but hasn\'t started using "I" or "you" yet - possessive pronouns often emerge first.',
  ],
  whenToMention: [
    'Your child is 3 years old and never uses any pronouns - they exclusively refer to themselves and others by name.',
    'Your child consistently reverses "I" and "you" past age 3 (says "you want milk" when they mean "I want milk").',
    'Your child avoids pronoun use alongside other language delays like limited vocabulary or difficulty forming sentences.',
  ],
  whenToActNow: [
    'Your child is over 3, never uses pronouns, and also shows persistent pronoun reversal along with limited eye contact, repetitive behaviors, or difficulty with social interaction - this pattern can sometimes be associated with autism and warrants a developmental evaluation.',
  ],
  relatedMilestones: [
    'language-sentence-use',
    'language-two-word-phrases',
    'language-vocabulary-growth',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Development: 2 to 3 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By Three Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-3yr.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
