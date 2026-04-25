import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-using-gestures',
  title: 'Baby Not Using Gestures',
  category: 'communication',
  searchTerms: [
    'baby not using gestures',
    'baby not pointing',
    'baby not waving bye bye',
    'baby not clapping',
    'baby no gestures',
    'toddler not gesturing',
    'baby doesn\'t reach for things',
    'baby not shaking head',
    'baby not nodding',
    'when do babies gesture',
    'baby not using hands to communicate',
  ],
  quickAnswer:
    'Gestures  -  like pointing, waving, reaching, clapping, and shaking their head  -  are among the most important early communication milestones. Most babies start using gestures between 9 and 12 months. Gestures actually predict later language development better than early words do, so if your baby is gesturing, their language is likely developing well even if words are slow to come.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'Early gestures like reaching with arms to be picked up typically appear during this period. Your baby may also start to show objects by holding them up. These are pre-intentional gestures  -  your baby is communicating needs through movement before they can do it with sounds. Not all babies gesture this early, and that\'s fine.',
    },
    {
      ageRange: '9-12 months',
      context:
        'This is the key window for gesture development. By 12 months, most babies are pointing to things they want or find interesting, waving bye-bye, clapping, and reaching with arms up to be held. Pointing is especially important  -  it shows your baby understands that they can direct your attention to something, which is a foundational communication skill.',
    },
    {
      ageRange: '12-15 months',
      context:
        'Gestures should be well established by now. Your baby should be pointing to show you things (not just to request them), shaking their head for "no," and using several communicative gestures. If your baby is not using any gestures by 12 months, this is worth discussing with your pediatrician  -  absence of gestures by this age is a more reliable red flag than absence of words.',
    },
    {
      ageRange: '15-18 months',
      context:
        'By this age, gestures and words should begin working together  -  your toddler might point at a dog and say "duh!" or wave and say "bye." If your child is 15 months or older and not pointing, not waving, and not using other gestures, a developmental evaluation is recommended. Limited gestures at this age are associated with later language and social communication difficulties.',
    },
  ],
  whenNormal: [
    'Your baby is under 9 months and is reaching for objects and people, even if specific gestures like pointing or waving haven\'t appeared yet.',
    'Your baby uses some gestures but not all of them  -  for example, they point but don\'t wave, or they reach but don\'t clap. Different gestures emerge at different times.',
    'Your baby waves or claps during play but not always on cue when you ask them to  -  spontaneous gestures matter more than performing on demand.',
    'Your baby is 9-10 months and just starting to use gestures inconsistently  -  they\'re in the learning phase.',
  ],
  whenToMention: [
    'Your baby is 12 months old and doesn\'t point at anything  -  not to request things and not to show you things.',
    'Your baby is over 12 months and doesn\'t use any communicative gestures  -  no waving, no reaching to be held, no head shaking.',
    'Your baby doesn\'t follow your point  -  when you point at something, they don\'t look where you\'re pointing.',
    'Your toddler is 15 months or older and relies entirely on crying or fussing to communicate needs, without pointing or gesturing.',
  ],
  whenToActNow: [
    'Your baby is over 12 months with no gestures, no pointing, limited eye contact, and doesn\'t respond to their name  -  this combination warrants a prompt developmental evaluation.',
    'Your baby was using gestures and has stopped  -  loss of previously acquired gestures is a form of regression that should be evaluated right away.',
  ],
  relatedMilestones: [
    'social-emotional-joint-attention',
    'language-first-words',
    'pointing',
    'waving',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Twelve Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-12mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Communication and Your 8- to 12-Month-Old. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-8-to-12-Months.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
