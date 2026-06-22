import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'talking-to-newborn-language-development',
  title: 'Talking to Your Newborn: Why It Matters for Language Development',
  category: 'communication',
  searchTerms: [
    'talking to newborn language development',
    'does talking to baby help development',
    'when should I start talking to my baby',
    'how to talk to a newborn',
    'baby talk good or bad for development',
    'narrating to baby language',
    'word gap baby development',
    'how many words should I say to my baby',
    'parentese infant directed speech',
    'reading to newborn benefits',
  ],
  quickAnswer:
    'Talking to your newborn from day one is one of the most impactful things you can do for their brain development. Research from the NIH and NICHD shows that the quantity and quality of language exposure in the first 3 years profoundly shapes neural pathways for language, cognition, and literacy. The landmark Hart & Risley study found that children who heard more words in early childhood had significantly larger vocabularies and stronger academic performance by age 9. The AAP recommends using "parentese" (not baby talk), which means speaking in a higher pitch, slower pace, and exaggerated intonation that research shows infants preferentially attend to across all languages and cultures. You don\'t need special training: narrating your daily activities, responding to your baby\'s coos and sounds, reading aloud, and singing all contribute to healthy language development.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns can distinguish their mother\'s voice from birth (they heard it in utero) and prefer human speech over other sounds. At this age, babies are learning the rhythm and patterns of their native language even though they can\'t yet produce words. "Serve and return" interactions, where you respond to their coos, grunts, and facial expressions as if in conversation, build the neural foundations for language. Narrate what you\'re doing: "I\'m changing your diaper now. Here comes the warm wipe." This feels one-sided but is building critical pathways.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies begin babbling (producing vowel sounds like "ooh" and "aah") and show more social responsiveness. They start to turn toward voices and recognize their name by around 4-5 months. Respond to their babbling as if they\'re talking: take turns, pause, and let them "reply." This conversational turn-taking, studied extensively by researchers at MIT, is even more important than total word count. Read simple board books, pointing to pictures and naming them. Babies benefit from face-to-face interaction more than background noise (TV, radio).',
    },
    {
      ageRange: '6-12 months',
      context:
        'Receptive language (understanding) develops rapidly. By 8-10 months, babies understand common words like "no," "mama," "dada," and "bye-bye" even before they can say them. Label objects consistently, use gestures alongside words (wave while saying "bye-bye"), and expand on what interests them. If they point at a dog, say "Yes, that\'s a big brown dog! The dog is running." Joint attention, where you and your baby focus on the same thing, is a critical building block for language. Limit background screen noise, which studies show can reduce parent-child verbal interactions.',
    },
    {
      ageRange: '12-24 months',
      context:
        'The language explosion begins. Most toddlers say their first words around 12 months and have 50+ words by 24 months. Continue narrating, reading, and having "conversations." Extend their utterances: if they say "ball," respond with "Yes, the red ball! You want to throw the ball." Research from Zero to Three shows that responsive, back-and-forth interactions are more beneficial than simply talking at a child. Bilingual families should speak both languages freely, because bilingualism does not cause language delays and provides cognitive advantages.',
    },
  ],
  whenNormal: [
    'Feeling awkward talking to a baby who can\'t respond (this is universal and the feeling passes as they become more responsive)',
    'Not talking constantly, since quality interactions matter more than nonstop narration',
    'Using "parentese" (higher pitch, slower speech) naturally without thinking about it',
    'Your baby not responding to every verbalization, as they are still listening and learning',
  ],
  whenToMention: [
    'Baby doesn\'t startle to loud sounds or turn toward your voice by 4 months',
    'No babbling (consonant-vowel combinations like "ba-ba" or "da-da") by 9 months',
    'Baby doesn\'t respond to their name by 9-12 months despite normal hearing',
    'No first words by 15-16 months or fewer than 50 words by 24 months',
  ],
  whenToActNow: [
    'Sudden loss of previously acquired language skills at any age, which warrants urgent evaluation',
    'Baby shows no interest in social interaction, doesn\'t make eye contact, and doesn\'t respond to voices by 6 months',
    'You suspect hearing loss, because any concern about hearing should be evaluated promptly, as early intervention for hearing impairment is time-sensitive',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-not-babbling',
    'not-responding-to-name',
    'delayed-language-in-bilingual-child',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Talk to Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/How-to-Talk-to-Your-Baby.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development (NICHD). Language and Communication Development.',
      url: 'https://www.nichd.nih.gov/health/topics/language',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Brain Development: Frequently Asked Questions.',
      url: 'https://www.zerotothree.org/resource/brain-development-frequently-asked-questions/',
    },
  ],
};
