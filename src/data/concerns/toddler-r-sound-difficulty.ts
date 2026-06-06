import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-r-sound-difficulty',
  title: 'Child Cannot Say the R Sound',
  category: 'communication',
  searchTerms: [
    'toddler can\'t say r',
    'child r sound difficulty',
    'child says w instead of r',
    'r sound speech therapy',
    'when should child say r',
    'child r articulation error',
    'wabbit instead of rabbit',
    'child r sound distortion',
    'r sound not developing',
    'child difficulty with r sound',
  ],
  quickAnswer:
    'The R sound is one of the most challenging English sounds and is typically not expected to be mastered until age 6 to 7. Substituting W for R is very common in toddlers and preschoolers and is not a concern before age 5. If R errors persist past age 6, speech therapy is recommended and is usually very effective.',
  byAge: [
    {
      ageRange: '2-3 years',
      context:
        'R sounds are not expected at this age at all. Saying W for R is completely normal and universal among toddlers. Do not worry about R production during this stage of development.',
    },
    {
      ageRange: '3-4 years',
      context:
        'R remains a later-developing sound. Most preschoolers still substitute W for R. Some children may produce R correctly in some word positions but not others. This is all within the normal range.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Some children begin producing R correctly during this period, while many still use W. Both are considered normal. R is one of the last sounds to develop and patience is appropriate.',
    },
    {
      ageRange: '5-6 years',
      context:
        'R production should be developing. Some children master it early in this period while others need more time. If your child shows no progress toward R production by 5.5 to 6 years, a speech evaluation is recommended.',
    },
    {
      ageRange: '6-8 years',
      context:
        'R should be mastered by age 7. If your child still cannot produce R by age 6, speech therapy should begin. R is the most commonly treated sound in speech therapy, and with consistent practice, most children achieve correct production.',
    },
  ],
  whenNormal: [
    'Your child is under 5 and says W instead of R in most or all words',
    'Your child occasionally produces R correctly in some words but not consistently',
    'Your child is between 5 and 6 and R is starting to emerge in some word positions',
    'Your child can produce R in isolation or imitation but not in conversation',
  ],
  whenToMention: [
    'Your child is over 6 and still cannot produce R in any words',
    'Your child is becoming self-conscious or being teased about their R sound',
    'Your child is over 5 with no sign of R production emerging',
  ],
  whenToActNow: [
    'Your child was saying R correctly and has lost this ability',
    'Your child is school-age and R errors are affecting reading, spelling, or social confidence',
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
