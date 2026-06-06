import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-gliding-speech',
  title: 'Toddler Replacing R and L with W and Y',
  category: 'communication',
  searchTerms: [
    'toddler gliding speech',
    'toddler says w instead of r',
    'toddler says w instead of l',
    'toddler says wabbit instead of rabbit',
    'toddler r becomes w',
    'toddler l becomes w',
    'gliding phonological process',
    'toddler yeg instead of leg',
    'when does gliding stop',
    'toddler r and l sound errors',
  ],
  quickAnswer:
    'Gliding is a phonological process where R and L sounds are replaced with W or Y, such as "wabbit" for "rabbit" or "yeg" for "leg." This is one of the last phonological processes to resolve, often persisting until age 5 or even 6. Gliding is normal and expected in toddlers and preschoolers, and speech therapy is typically only recommended if it persists past age 5 to 6.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Gliding is universal at this age. R and L are among the latest-developing sounds in English. No toddler is expected to produce these sounds correctly, and W and Y substitutions are the norm.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Gliding remains completely normal. Most children under 3 use W for R and L consistently. Some children may begin to produce L in some positions while still gliding R.',
    },
    {
      ageRange: '3-4 years',
      context:
        'L sounds may begin to emerge, especially at the beginning of words. R sounds are still commonly glided. Gliding is considered normal at this age and does not require intervention.',
    },
    {
      ageRange: '4-5 years',
      context:
        'L sounds should be mostly mastered. R sounds may still be glided and this is within the normal range, though some children begin producing R correctly during this period. Intervention is typically not recommended until closer to age 5 or 6.',
    },
    {
      ageRange: '5-7 years',
      context:
        'Both R and L should be produced correctly by age 6 to 7. If gliding persists past age 6, speech therapy is recommended. R sounds are among the most commonly treated speech sounds in therapy.',
    },
  ],
  whenNormal: [
    'Your toddler or preschooler says W for R and L in most words',
    'Your child is under 5 and still glides R sounds to W',
    'Your child has begun producing L correctly but still glides R',
    'Your child can sometimes produce R or L in some word positions but not others',
  ],
  whenToMention: [
    'Your child is over 5 years and still glides both R and L sounds',
    'Your child is becoming frustrated or self-conscious about their speech',
    'Your child is entering school and gliding affects their confidence',
  ],
  whenToActNow: [
    'Your child was producing R and L correctly and has lost these sounds',
    'Your child is over 6 years with persistent gliding and it is affecting academic performance or social interaction',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'oral-motor-development'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-r-sound-difficulty', 'toddler-l-sound-difficulty', 'toddler-phonological-processes-persistent'],
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
