import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-phonological-processes-persistent',
  title: 'Toddler\'s Sound Pattern Errors Not Resolving',
  category: 'communication',
  searchTerms: [
    'toddler phonological processes',
    'toddler sound pattern errors',
    'toddler simplifying words',
    'toddler leaving out syllables',
    'toddler speech patterns immature',
    'phonological disorder toddler',
    'toddler sound errors persistent',
    'toddler reducing sounds in words',
    'phonological delay toddler',
    'toddler speech simplification',
  ],
  quickAnswer:
    'Phonological processes are normal sound pattern simplifications that young children use as they learn to talk. For example, saying "goggy" for "doggy" (fronting) or "poon" for "spoon" (cluster reduction). These patterns should gradually disappear by specific ages. If patterns persist beyond their expected resolution age, a speech-language evaluation is recommended.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Many phonological processes are present and completely expected. Words are significantly simplified. "Banana" might become "nana" and "bottle" might become "ba." This is normal in early word production.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Sound simplifications remain common. Cluster reduction, final consonant deletion, and fronting are all typical patterns. Speech is often only understandable to familiar listeners. These processes are part of normal development.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Some phonological processes begin to resolve. Final consonant deletion typically resolves by 3 years. Fronting, stopping of fricatives, and cluster reduction are still common but should be decreasing. If all processes persist at full strength, mention this to your pediatrician.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most phonological processes resolve between ages 3 and 4. Fronting, stopping, and weak syllable deletion should be eliminated. Cluster reduction may persist a bit longer. If multiple processes remain at age 4, speech therapy is recommended.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Nearly all phonological processes should be resolved by age 5. Persistent patterns at this age indicate a phonological disorder that benefits from speech therapy. Early treatment before school entry is ideal.',
    },
  ],
  whenNormal: [
    'Your toddler is under 3 and uses common sound simplifications like final consonant deletion or fronting',
    'Your toddler\'s phonological processes are gradually decreasing as they get older',
    'Your toddler simplifies some words but produces the correct sounds in other words',
    'Your toddler\'s processes are age-appropriate based on known resolution timelines',
  ],
  whenToMention: [
    'Your child is over 3 and still uses fronting, stopping, or final consonant deletion consistently',
    'Your child has unusual phonological processes not typical of normal development',
    'Multiple processes persist at the same time, making your child very difficult to understand',
  ],
  whenToActNow: [
    'Your child\'s speech clarity is getting worse rather than better',
    'Your child is over 4 with multiple persistent phonological processes and increasing frustration about communication',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-intelligibility-low', 'toddler-fronting-sounds', 'toddler-final-consonant-deletion'],
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
        'National Institute on Deafness and Other Communication Disorders. Speech Sound Disorders.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
