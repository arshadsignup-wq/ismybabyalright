import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'difficulty-with-consonants',
  title: 'My Child Has Difficulty with Consonant Sounds',
  category: 'communication',
  searchTerms: [
    'toddler can\'t say consonants',
    'child difficulty with consonant sounds',
    'toddler drops consonants',
    'child can\'t say certain letters',
    'toddler only says vowels',
    'child leaves off beginning sounds',
    'toddler can\'t say S or R',
    'child substitutes consonant sounds',
    'toddler speech unclear consonants',
    'when should child say all consonant sounds',
  ],
  quickAnswer:
    'Consonant sounds develop in a predictable order, and no child masters them all at once. Early consonants (m, b, p, d, n) typically emerge by age 2, while later consonants (r, l, s, sh, th) may not be mastered until age 6-7. If your child is consistently only using vowels with no consonants past 12 months, that\'s worth evaluating. But if they have some consonants and are missing the trickier ones, they\'re likely right on track.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Consonants first appear in babbling  -  "babababa," "dadadada," "mamama." These early consonant-vowel combinations are the foundation for speech. By 12 months, your baby should be babbling with several different consonant sounds. If babbling contains only vowel sounds ("aaa," "eee," "ooo") with no consonants, it\'s worth mentioning at your next pediatric visit, as consonant babbling is an important speech precursor.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Early words typically feature the easiest consonants: m, b, p, d, n, h, and w. Your toddler\'s version of words might drop harder consonants  -  "nana" for banana, "goggy" for doggy. This is called phonological simplification and it\'s completely normal. What matters is that they\'re using some consonants consistently and their consonant repertoire is gradually expanding.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, most children use consonants like m, b, p, d, t, n, h, w, k, g, and f. They might still simplify consonant clusters ("poon" for spoon) and substitute easier consonants for harder ones ("wabbit" for rabbit). By age 3, a familiar listener should understand about 75% of what your child says. If your child is very difficult to understand because they\'re dropping or substituting most consonants, a speech evaluation can help.',
    },
    {
      ageRange: '3+ years',
      context:
        'Between ages 3 and 7, children master the remaining consonants: s, z, l, r, sh, ch, j, th, and consonant blends (like "str" and "bl"). The sounds "r," "l," "s," and "th" are among the last to develop and many children don\'t master them until age 5-7. If your child is over 4 and missing consonants that should be established by their age, or if strangers can\'t understand most of their speech, articulation therapy can be very effective.',
    },
  ],
  whenNormal: [
    'Your toddler has early consonants (m, b, p, d, n) but is missing later-developing sounds like r, l, s, or th  -  these sounds develop on a known timeline and later ones aren\'t expected until age 5-7.',
    'Your toddler simplifies consonant clusters  -  saying "pider" for "spider" or "top" for "stop"  -  cluster reduction is a normal phonological process in young children.',
    'Your toddler substitutes easier consonants for harder ones  -  "wabbit" for "rabbit" or "tat" for "cat"  -  sound substitution is typical and gradually resolves.',
    'Your child\'s consonant accuracy is improving over time, even if some sounds are still challenging.',
  ],
  whenToMention: [
    'Your child is over 2 and primarily uses only vowels and a few consonants  -  their speech is very limited in consonant variety.',
    'Your child is over 3 and strangers can\'t understand more than half of what they say, largely due to consonant errors.',
    'Your child is over 4 and still missing consonants that are typically mastered by age 3 (like b, p, m, d, t, n, k, g).',
  ],
  whenToActNow: [
    'Your child is over 12 months and produces only vowel sounds with no consonants at all  -  a hearing evaluation should be the first step, followed by a speech-language assessment.',
    'Your child was using consonant sounds and has stopped or their speech has become less clear over time  -  any regression in speech clarity warrants evaluation.',
  ],
  relatedMilestones: [
    'language-babbling',
    'language-first-words',
    'language-two-word-phrases',
    'language-sentences',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Speech Sound Disorders: Articulation and Phonological Processes.',
      url: 'https://www.asha.org/public/speech/disorders/speech-sound-disorders/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Delays in Toddlers: Information for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'NIDCD',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
