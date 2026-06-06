import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-cluster-reduction-speech',
  title: 'Toddler Simplifying Consonant Blends',
  category: 'communication',
  searchTerms: [
    'toddler cluster reduction',
    'toddler simplifying blends',
    'toddler dropping sounds in blends',
    'toddler says poon instead of spoon',
    'toddler can\'t say blends',
    'toddler consonant cluster errors',
    'toddler bl pl sp st errors',
    'toddler dropping part of blend',
    'when do toddlers say blends',
    'consonant blend simplification toddler',
  ],
  quickAnswer:
    'Cluster reduction, where a child simplifies consonant blends by dropping one sound (saying "poon" for "spoon" or "boo" for "blue"), is a very common phonological process that is normal until age 4. Consonant blends are among the last sound combinations children master. If cluster reduction persists after age 4.5, speech therapy may be helpful.',
  byAge: [
    {
      ageRange: '12-24 months',
      context:
        'Cluster reduction is universal at this age. No toddler is expected to produce consonant blends correctly. Words like "stop" become "top" and "play" becomes "pay." This is completely normal.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Cluster reduction remains very common. Some children begin producing a few blends, often starting with N blends or L blends, but most blends are still simplified. This is expected and typical.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Children begin to produce more consonant blends correctly, though errors are still common. S blends like "sp," "st," and "sk" may emerge during this period. Some cluster reduction is still normal.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Most children can produce common consonant blends by age 4.5. If your child is still consistently reducing most blends, a speech evaluation is recommended. Therapy can effectively target blend production.',
    },
    {
      ageRange: '5-6 years',
      context:
        'All common consonant blends should be mastered by school entry. Persistent cluster reduction in kindergarten can affect spelling and reading development as well as speech clarity.',
    },
  ],
  whenNormal: [
    'Your toddler is under 4 years and drops one sound from consonant blends',
    'Your child is beginning to produce some blends correctly while still reducing others',
    'Your child can produce the individual sounds in a blend but cannot yet combine them',
    'Your child\'s cluster reduction is gradually improving over time',
  ],
  whenToMention: [
    'Your child is over 4.5 years and still reduces most consonant blends',
    'Your child shows no progress in producing any blends over the past 6 months',
    'Cluster reduction combined with other speech errors makes your child very hard to understand',
  ],
  whenToActNow: [
    'Your child was producing blends and has lost this ability',
    'Your child is over 5 years and cannot produce any consonant blends, affecting literacy development',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'phonological-awareness'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-phonological-processes-persistent', 'toddler-speech-sound-disorder', 'toddler-intelligibility-low'],
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
