import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-s-sound-difficulty',
  title: 'Child Cannot Say the S Sound',
  category: 'communication',
  searchTerms: [
    'toddler can\'t say s',
    'child s sound difficulty',
    'child s sound lisp',
    'child substituting s sound',
    's sound speech therapy',
    'when should child say s',
    'child s articulation error',
    's sound not developing',
    'child difficulty with s sound',
    'child lisping s sound',
  ],
  quickAnswer:
    'The S sound is typically mastered between ages 3 and 5. Many young children substitute TH or T for S, which is normal developmental variation. A frontal lisp with S is common and often resolves by age 4.5. If S errors persist past age 5, or if your child has a lateral (slushy) lisp, a speech evaluation is recommended.',
  byAge: [
    {
      ageRange: '2-3 years',
      context:
        'S sounds are just emerging. Many children substitute T for S (stopping) or produce S with the tongue between the teeth (frontal lisp). Both are normal developmental patterns at this age.',
    },
    {
      ageRange: '3-4 years',
      context:
        'S production improves during this period. A frontal lisp may persist and is still considered normal. Stopping of S to T should be resolving. If your child produces S with a slushy or wet quality (lateral lisp), mention this to your pediatrician.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Most children produce S correctly by age 5, though some variation remains. A frontal lisp that persists past age 4.5 may benefit from speech therapy. A lateral lisp should be evaluated for treatment.',
    },
    {
      ageRange: '5-6 years',
      context:
        'S should be mastered by this age. Persistent S errors beyond age 5 are unlikely to resolve without therapy. Missing front teeth may temporarily affect S production, which is normal.',
    },
    {
      ageRange: '6-7 years',
      context:
        'S should be consistently correct. Missing teeth from natural tooth loss may cause temporary changes in S production, which resolves when permanent teeth come in. Persistent S errors unrelated to tooth loss need therapy.',
    },
  ],
  whenNormal: [
    'Your child is under 4 and produces S with their tongue between their teeth (frontal lisp)',
    'Your child is under 3 and substitutes T for S',
    'Your child produces S correctly in some words but not others',
    'Your child\'s S sound changes because they are missing front teeth',
  ],
  whenToMention: [
    'Your child is over 4.5 and still has a consistent frontal lisp',
    'Your child produces S with a slushy or wet quality at any age (lateral lisp)',
    'Your child is over 5 and S errors persist in all positions',
  ],
  whenToActNow: [
    'Your child previously produced S correctly and has lost this ability',
    'Your child has a lateral lisp combined with other speech sound errors affecting intelligibility',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'oral-motor-development'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-lisp', 'toddler-lateral-lisp', 'toddler-interdental-lisp'],
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
