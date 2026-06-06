import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-stopping-fricatives',
  title: 'Toddler Replacing S and F Sounds with T and P',
  category: 'communication',
  searchTerms: [
    'toddler stopping fricatives',
    'toddler says t instead of s',
    'toddler says p instead of f',
    'toddler can\'t make s sound',
    'toddler replacing s with t',
    'stopping phonological process',
    'toddler tun instead of sun',
    'toddler pish instead of fish',
    'when does stopping resolve',
    'toddler substituting sounds',
  ],
  quickAnswer:
    'Stopping is a phonological process where children replace continuous sounds like S, F, and Z with stop sounds like T, P, and D. For example, saying "tun" for "sun" or "pish" for "fish." Stopping is normal until around age 3 for most sounds and typically resolves without intervention. If it persists after age 3.5, speech therapy may help.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Stopping is very common and expected. Young children produce stop consonants (B, P, T, D) more easily than fricatives (S, F, Z, SH). Most early words will have stop sounds substituted for continuous sounds.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Stopping remains a normal pattern. Some children begin producing F and S sounds in some contexts while still stopping in others. The emergence of fricatives varies from child to child.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Stopping of F, S, and Z sounds typically begins to resolve during this period. Your child may produce fricatives correctly in some words but not others. By age 3, most children have begun using F and S sounds correctly.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Stopping should be largely eliminated for F and S sounds by age 3.5. If your child is still consistently using stops for fricatives, speech therapy can help teach the correct production of these sounds.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Persistent stopping beyond age 4 is not expected and indicates a speech sound disorder that benefits from therapy. Most children respond well to treatment for this pattern.',
    },
  ],
  whenNormal: [
    'Your toddler is under 3 and replaces F with P or S with T in most words',
    'Your toddler is beginning to produce some fricative sounds correctly while still stopping others',
    'Your toddler produces F and S sounds in some words but not others, showing the process is resolving',
    'Your toddler can produce fricative sounds when imitating you but not yet in spontaneous speech',
  ],
  whenToMention: [
    'Your child is over 3.5 years and still consistently stops all fricative sounds',
    'Your child shows no progress in producing S, F, or Z sounds over the past several months',
    'Your child\'s stopping pattern makes them very hard to understand',
  ],
  whenToActNow: [
    'Your child was producing fricative sounds and has lost this ability',
    'Your child is over 4 years with persistent stopping and multiple other speech sound errors',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'oral-motor-development'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-phonological-processes-persistent', 'toddler-s-sound-difficulty', 'toddler-speech-sound-disorder'],
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
