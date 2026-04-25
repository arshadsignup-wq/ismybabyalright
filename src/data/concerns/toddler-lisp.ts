import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-lisp',
  title: 'My Toddler Has a Lisp',
  category: 'communication',
  searchTerms: [
    'toddler lisp',
    'child says th instead of s',
    'frontal lisp toddler',
    'when to worry about lisp',
    'will toddler lisp go away',
    'lisp speech therapy',
    'toddler can\'t say s sound',
    'tongue thrust lisp',
    'lateral lisp',
    'toddler speech sounds wrong',
  ],
  quickAnswer:
    'Lisps are very common in toddlers and preschoolers who are still learning to make certain sounds. Most children don\'t master the "s" sound until around age 4-5, so a lisp before then is usually developmentally normal. If your child still has a noticeable lisp after age 5, or if it\'s affecting their confidence, a speech evaluation can help.',
  byAge: [
    {
      ageRange: '18 months-3 years',
      context:
        'Toddlers are just beginning to say words and simple sentences, and most sounds are still developing. It\'s completely normal for "s" sounds to come out as "th" (a frontal lisp) or to sound slushy at this age. Your child is learning to position their tongue correctly, and that takes time. Don\'t worry about correcting it now  -  just model correct speech and let development unfold.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Many preschoolers still have a lisp, especially on "s" and "z" sounds. The tongue is still learning precise placement, and some children push it forward between their teeth (frontal lisp) or let air escape over the sides (lateral lisp). If your child is speaking clearly otherwise and the lisp is their only speech issue, it\'s usually fine to wait. However, if they\'re hard to understand overall, a speech evaluation might be helpful.',
    },
    {
      ageRange: '4-5 years',
      context:
        'By age 5, most children can make the "s" sound correctly, though a mild lisp can still linger. If your child has a persistent lisp after age 4.5-5, especially if it\'s noticeable to strangers or affecting their self-esteem, speech therapy can help. Therapy for a lisp is usually short-term and very effective. Speech-language pathologists use fun exercises to teach correct tongue placement.',
    },
    {
      ageRange: '5+ years',
      context:
        'If your child is in kindergarten and still has a lisp, it\'s worth getting a speech evaluation. Lisps don\'t usually resolve on their own after age 5, but they respond very well to therapy. Left untreated, a lisp can sometimes persist into adulthood. The good news is that most kids correct a lisp in just a few months of therapy, and earlier treatment tends to work faster.',
    },
  ],
  whenNormal: [
    'Your child is under 4 years old and has a lisp on "s" and "z" sounds but is otherwise speaking clearly.',
    'Your child sometimes says "s" correctly and sometimes not  -  inconsistency is normal during the learning phase.',
    'Your child\'s lisp is mild and doesn\'t interfere with being understood by family or teachers.',
    'Your child just started talking recently and many sounds are still developing, including "s."',
  ],
  whenToMention: [
    'Your child is over 4.5 years old and has a persistent, noticeable lisp on "s," "z," or "sh" sounds.',
    'Your child\'s lisp is lateral (air escaping over the sides of the tongue, creating a slushy sound)  -  this type is less likely to resolve on its own.',
    'Your child is frustrated by their speech or is being teased by peers about how they talk.',
    'Your child has a lisp along with other speech sound errors or is hard to understand overall.',
  ],
  whenToActNow: [
    'Your child is over 5 years old with a noticeable lisp that isn\'t improving.',
    'Your child\'s lisp is severe and strangers have trouble understanding them.',
    'Your child is avoiding talking or showing signs of low confidence because of their speech.',
  ],
  relatedMilestones: [
    'language-speech-sound-development',
    'language-clear-speech',
    'language-s-sound-mastery',
    'language-articulation',
    'social-emotional-communication-confidence',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association  -  Speech Sound Disorders: Articulation and Phonology',
      url: 'https://www.asha.org/practice-portal/clinical-topics/articulation-and-phonology/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Speech and Language Delays and Disorders',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  Developmental Milestones: Language and Speech',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
  ],
};
