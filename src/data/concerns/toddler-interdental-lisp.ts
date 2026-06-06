import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-interdental-lisp',
  title: 'Toddler Puts Tongue Between Teeth for S Sound',
  category: 'communication',
  searchTerms: [
    'toddler interdental lisp',
    'toddler tongue between teeth s',
    'toddler frontal lisp',
    'toddler th instead of s',
    'toddler lisp normal',
    'toddler says th for s',
    'interdental lisp child',
    'frontal lisp toddler',
    'when does frontal lisp go away',
    'toddler lisping s sounds',
  ],
  quickAnswer:
    'An interdental or frontal lisp, where the tongue slides between the teeth during S and Z sounds (making them sound like TH), is a common developmental pattern in young children. Most children outgrow this by age 4.5. If the lisp persists past this age, speech therapy can help your child learn correct tongue placement.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'S sounds are just beginning to develop. Lisping is not a concern at this age as children are still learning how to position their tongue for different sounds. Many toddlers do not yet produce S sounds at all.',
    },
    {
      ageRange: '24-36 months',
      context:
        'An interdental lisp is very common and completely normal during this period. Many children naturally place their tongue between their teeth when attempting S and Z. This usually resolves as oral motor control improves.',
    },
    {
      ageRange: '3-4 years',
      context:
        'A frontal lisp is still considered normal at this age. Many preschoolers lisp and most will outgrow it. Correct S production typically emerges between ages 3.5 and 4.5. No intervention is usually needed yet.',
    },
    {
      ageRange: '4-5 years',
      context:
        'By age 4.5, the frontal lisp should be resolving. If it persists, speech therapy may be recommended. Some speech-language pathologists prefer to wait until age 5 before beginning treatment, as many children self-correct during this period.',
    },
    {
      ageRange: '5-7 years',
      context:
        'A frontal lisp that persists past age 5 is unlikely to resolve on its own and speech therapy is recommended. Treatment is typically effective and straightforward, teaching the child to keep their tongue behind their teeth.',
    },
  ],
  whenNormal: [
    'Your child is under 4.5 years and places their tongue between their teeth for S and Z sounds',
    'Your child\'s lisp is consistent, not something that appeared suddenly',
    'Your child\'s other speech development is on track aside from the lisp',
    'Your child is not frustrated or self-conscious about their speech',
  ],
  whenToMention: [
    'Your child is over 4.5 years and still has a consistent frontal lisp',
    'Your child\'s lisp is accompanied by other speech sound errors',
    'Your child is starting school and is self-conscious about lisping',
  ],
  whenToActNow: [
    'Your child suddenly developed a lisp they did not have before, which could indicate dental or oral changes',
    'Your child is over 5 years and the lisp is affecting their confidence or willingness to speak',
  ],
  relatedMilestones: ['speech-clarity', 'consonant-sounds', 'oral-motor-development'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-lisp', 'toddler-lateral-lisp', 'toddler-s-sound-difficulty'],
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
