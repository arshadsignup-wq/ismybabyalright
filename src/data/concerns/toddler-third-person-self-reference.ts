import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-third-person-self-reference',
  title: 'Toddler Refers to Themselves by Name Instead of "I"',
  category: 'communication',
  searchTerms: [
    'toddler refers to self by name', 'toddler says own name instead of I',
    'toddler third person self reference', 'toddler doesn\'t say I', 'toddler talks about self in third person',
    'toddler uses name not I me', 'when do toddlers say I', 'toddler Bobby wants instead of I want',
    'toddler self reference development', 'toddler name instead of pronoun',
  ],
  quickAnswer:
    'It is very common for toddlers to refer to themselves by name rather than using "I" or "me." This typically resolves between ages 2.5 and 3.5 as pronoun understanding develops. Using their own name is actually a logical strategy since names do not shift based on speaker perspective. If your child still exclusively uses their name instead of "I" past age 3.5, mention it to your pediatrician.',
  byAge: [
    { ageRange: '18-24 months', context: 'Most toddlers use their own name to refer to themselves. "Jake want milk" is a typical construction. Pronouns have not yet developed and this is completely age-appropriate.' },
    { ageRange: '24-30 months', context: 'The pronoun "me" often emerges alongside continued use of their name. A child may alternate between "me want" and "Jake want." Both are normal. The pronoun "I" typically comes slightly later.' },
    { ageRange: '30-36 months', context: '"I" should begin emerging during this period. Children may switch between using their name and "I" for several months. Consistent use of "I" typically develops by age 3 to 3.5.' },
    { ageRange: '3-4 years', context: 'Most children are using "I" and "me" correctly by now, though occasional use of their own name may persist. If your child exclusively refers to themselves by name at age 4, a speech-language evaluation may be helpful.' },
    { ageRange: '4-5 years', context: 'Self-referencing by name should be largely replaced by appropriate pronoun use. Persistent third-person self-reference at this age, especially combined with other language or social differences, warrants evaluation.' },
  ],
  whenNormal: [
    'Your toddler is under 3 and refers to themselves by name most of the time',
    'Your toddler is starting to use "me" or "I" sometimes alongside their name',
    'Your toddler uses "I" in familiar phrases like "I want" but uses their name in other contexts',
    'Your toddler gradually uses "I" more often and their name less often',
  ],
  whenToMention: [
    'Your child is over 3.5 and exclusively refers to themselves by name with no "I" or "me"',
    'Your child avoids first-person pronouns in all contexts',
    'Third-person self-reference is accompanied by other pronoun confusion or language differences',
  ],
  whenToActNow: [
    'Persistent third-person self-reference is combined with echolalia, scripted speech, and social communication difficulties',
    'Your child has regressed from using "I" to only using their name',
  ],
  relatedMilestones: ['grammar-development', 'vocabulary-growth', 'self-awareness'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-pronoun-avoidance', 'pronoun-reversal', 'toddler-mixing-up-pronouns-he-she'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Typical Speech and Language Development.', url: 'https://www.asha.org/public/speech/development/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Language Development in Toddlers.', url: 'https://www.zerotothree.org/resource/from-babbling-to-books/' },
  ],
};
