import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-th-sound-difficulty',
  title: 'Child Cannot Say the TH Sound',
  category: 'communication',
  searchTerms: [
    'toddler can\'t say th',
    'child th sound difficulty',
    'child says f instead of th',
    'child says d instead of th',
    'th sound speech therapy',
    'when should child say th',
    'child th articulation error',
    'child fumb instead of thumb',
    'th sound not developing',
    'child difficulty with th sound',
  ],
  quickAnswer:
    'The TH sound is one of the last speech sounds to develop, typically not mastered until age 6 to 8. Substituting F for TH (saying "fumb" for "thumb") or D for TH (saying "dis" for "this") is extremely common and completely normal in young children. Speech therapy is only needed if TH errors persist past age 7.',
  byAge: [
    {
      ageRange: '2-3 years',
      context:
        'TH sounds are not expected at all. Most children substitute F, D, or T for TH. This is completely normal and no cause for concern.',
    },
    {
      ageRange: '3-4 years',
      context:
        'TH substitutions remain normal. Children typically use F for voiceless TH (as in "thumb") and D for voiced TH (as in "this"). These substitutions do not affect intelligibility and are age-appropriate.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Some children begin producing TH sounds correctly in some words, but many still substitute. Both are normal. TH is not a priority for speech therapy at this age.',
    },
    {
      ageRange: '5-6 years',
      context:
        'TH production is emerging for many children. Some research suggests TH may not be fully mastered until age 7 or even 8. If your child can produce other sounds well but still struggles with TH, this is typical.',
    },
    {
      ageRange: '6-8 years',
      context:
        'TH should be mastered by age 7 to 8. If your child still cannot produce TH sounds at this age, speech therapy can help. TH is usually straightforward to teach once a child is developmentally ready.',
    },
  ],
  whenNormal: [
    'Your child is under 6 and says F instead of TH or D instead of TH',
    'Your child can produce TH in some words but not others',
    'Your child\'s only speech error is TH substitution while all other sounds are correct',
    'Your child is aware of the TH sound and trying to produce it but has not yet mastered it',
  ],
  whenToMention: [
    'Your child is over 7 and still consistently substitutes other sounds for TH',
    'Your child has TH errors combined with multiple other speech sound errors',
    'Your child\'s TH substitution is part of a broader pattern of speech delay',
  ],
  whenToActNow: [
    'Your child previously produced TH correctly and has lost this ability',
    'Your child is school-age and multiple speech errors including TH are significantly affecting communication',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'oral-motor-development'],
  showSelfReferral: true,
  relatedConcernSlugs: ['speech-articulation-disorder', 'toddler-speech-sound-disorder', 'difficulty-with-consonants'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Speech Sound Disorders: Articulation and Phonology.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/',
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
