import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-l-sound-difficulty',
  title: 'Child Cannot Say the L Sound',
  category: 'communication',
  searchTerms: [
    'toddler can\'t say l',
    'child l sound difficulty',
    'child says w instead of l',
    'l sound speech therapy',
    'when should child say l',
    'child l articulation error',
    'child wight instead of light',
    'l sound not developing',
    'child difficulty with l sound',
    'l sound substitution',
  ],
  quickAnswer:
    'The L sound is typically mastered between ages 4 and 6. Substituting W or Y for L is common and normal in toddlers and young preschoolers. If your child cannot produce L by age 5 to 6, speech therapy can help. L is generally easier to correct than R and responds well to therapy.',
  byAge: [
    {
      ageRange: '2-3 years',
      context:
        'L sounds are not expected to be mastered at this age. Substituting W for L is completely normal. "Wight" for "light" and "wove" for "love" are typical at this stage.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Some children begin producing L correctly, especially at the beginning of words. Others still substitute W or Y. Both patterns are within the normal range at this age.',
    },
    {
      ageRange: '4-5 years',
      context:
        'L in the initial position of words should be emerging or mastered. L in the middle or end of words may still be developing. Most children produce L correctly in at least some contexts by age 5.',
    },
    {
      ageRange: '5-6 years',
      context:
        'L should be produced correctly in most word positions. If your child still consistently substitutes W for L at this age, a speech evaluation is recommended. Therapy for L is typically effective and efficient.',
    },
    {
      ageRange: '6-7 years',
      context:
        'L should be fully mastered by this age. Persistent L errors at age 6 require speech therapy. Most children correct L production relatively quickly with professional support.',
    },
  ],
  whenNormal: [
    'Your child is under 4 and substitutes W or Y for L in most words',
    'Your child produces L correctly at the beginning of some words but not in the middle or end',
    'Your child is between 4 and 5 and L is beginning to emerge consistently',
    'Your child can produce L when you model it but not yet in spontaneous speech',
  ],
  whenToMention: [
    'Your child is over 5 and still cannot produce L in any word position',
    'Your child is over 4 and shows no progress toward L production',
    'Your child is frustrated about not being able to say L',
  ],
  whenToActNow: [
    'Your child previously produced L correctly and has lost this ability',
    'Your child is school-age and L errors are affecting their confidence or academic performance',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'oral-motor-development'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-gliding-speech', 'speech-articulation-disorder', 'toddler-speech-sound-disorder'],
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
