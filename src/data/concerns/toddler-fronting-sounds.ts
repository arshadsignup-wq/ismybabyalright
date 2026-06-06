import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-fronting-sounds',
  title: 'Toddler Replacing Back Sounds with Front Sounds',
  category: 'communication',
  searchTerms: [
    'toddler fronting sounds',
    'toddler says t instead of k',
    'toddler says d instead of g',
    'toddler can\'t say k sound',
    'toddler can\'t say g sound',
    'toddler replacing back sounds',
    'fronting phonological process',
    'toddler says tar instead of car',
    'toddler tup instead of cup',
    'when does fronting stop',
  ],
  quickAnswer:
    'Fronting is a common phonological process where children replace back sounds like K and G with front sounds like T and D, saying "tar" for "car" or "do" for "go." Fronting is normal until about age 3.5. If your child is still consistently fronting sounds after age 4, speech therapy can help.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Fronting is very common at this age and completely expected. Most early words are produced with front sounds. "Cookie" might become "tootie" and "go" might become "do." This is part of normal speech sound development.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Fronting remains common and normal. Children are still developing the ability to produce back sounds like K and G. Some children begin producing these sounds in some words while still fronting in others.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Fronting typically begins to resolve during this period. Your child may correctly produce K and G in some words but not others. Gradual improvement is expected. By age 3, many children have eliminated fronting.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Fronting should be largely eliminated by 3.5 years. If your child is still consistently replacing K with T and G with D at age 4, speech therapy is recommended. Fronting beyond this age does not typically resolve on its own.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Persistent fronting at this age requires speech therapy intervention. A speech-language pathologist can teach your child to produce K and G sounds correctly through targeted exercises.',
    },
  ],
  whenNormal: [
    'Your toddler is under 3 years and replaces K with T and G with D in most words',
    'Your toddler is beginning to produce some K and G sounds correctly while still fronting in other words',
    'Your toddler\'s fronting is decreasing over time and they are producing back sounds more often',
    'Your toddler can produce K and G sounds in isolation but still fronts in connected speech',
  ],
  whenToMention: [
    'Your child is over 3.5 years and still consistently fronting all K and G sounds',
    'Your child has shown no improvement in producing back sounds over the past 6 months',
    'Your child\'s fronting makes them difficult to understand even in familiar contexts',
  ],
  whenToActNow: [
    'Your child was producing K and G sounds and has lost the ability to make these sounds',
    'Your child is over 4 years with persistent fronting combined with multiple other sound errors',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'oral-motor-development'],
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
