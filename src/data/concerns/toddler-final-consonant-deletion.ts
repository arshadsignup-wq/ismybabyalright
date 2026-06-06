import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-final-consonant-deletion',
  title: 'Toddler Dropping End Sounds from Words',
  category: 'communication',
  searchTerms: [
    'toddler dropping end sounds',
    'toddler final consonant deletion',
    'toddler leaving off last sound',
    'toddler says ca instead of cat',
    'toddler not finishing words',
    'toddler drops ending consonants',
    'final sound deletion toddler',
    'toddler open syllable speech',
    'toddler words end in vowels only',
    'when should toddler say final consonants',
  ],
  quickAnswer:
    'Final consonant deletion, where a child drops the last sound of a word (saying "ca" for "cat" or "ba" for "ball"), is a normal phonological process in early speech development. It typically resolves by age 3. If your child consistently drops final consonants after age 3, a speech-language evaluation is recommended.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Final consonant deletion is extremely common at this age. Most early words end in vowel sounds as children simplify word structure. "Dog" becomes "do" and "cup" becomes "cu." This is completely expected.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Final consonant deletion remains common but some children begin including final consonants in some words. Easy final sounds like "p," "t," "m," and "n" often emerge first. Progress varies among children.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Final consonants should be emerging in more words during this period. Your child may include final sounds in some words but not others. By age 3, final consonant deletion should be largely resolved.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most children include final consonants consistently by age 3. If your child is still routinely dropping final sounds, speech therapy can target this pattern effectively. Persistent final consonant deletion significantly impacts intelligibility.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Final consonants should be consistently present in all words. Persistent deletion at this age requires speech therapy and may also affect early reading and spelling development.',
    },
  ],
  whenNormal: [
    'Your toddler is under 2.5 years and frequently drops final consonants',
    'Your toddler includes final consonants in some words but not others',
    'Your toddler is beginning to add final sounds to words that they previously dropped',
    'Your toddler produces final consonants for some sounds like M and N but not yet for others',
  ],
  whenToMention: [
    'Your child is over 3 years and still consistently drops final consonants in most words',
    'Your child shows no progress in producing final consonants over the past several months',
    'Final consonant deletion makes your child difficult to understand',
  ],
  whenToActNow: [
    'Your child was producing final consonants and has stopped',
    'Your child is over 3.5 years and drops final consonants in virtually all words',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'phonological-awareness'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-phonological-processes-persistent', 'toddler-intelligibility-low', 'toddler-dropping-beginning-sounds'],
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
