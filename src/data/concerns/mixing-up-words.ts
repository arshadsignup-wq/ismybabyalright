import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'mixing-up-words',
  title: 'My Toddler Mixes Up Words',
  category: 'communication',
  searchTerms: [
    'toddler mixing up words',
    'toddler says wrong words',
    'toddler word confusion',
    'toddler calls things wrong name',
    'toddler substitutes words',
    'toddler says cat instead of dog',
    'toddler word retrieval problems',
    'toddler uses wrong word',
    'toddler confuses similar words',
    'child can\'t find the right word',
  ],
  quickAnswer:
    'Mixing up words is a very common and typically normal part of early language development. Toddlers are building their mental "dictionary" at an incredible pace, and mix-ups happen because their brains are organizing and categorizing language. Calling a horse a "doggy" or saying "spoon" when they mean "fork" shows they understand the category  -  they just haven\'t fine-tuned the specific labels yet.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Word "overextension" is extremely common at this stage and is actually a sign of cognitive growth. Your toddler might call all four-legged animals "doggy" or all round objects "ball." This shows they\'re categorizing the world  -  they understand that objects share features  -  but their vocabulary isn\'t large enough yet to make fine distinctions. This is healthy cognitive development, not confusion.',
    },
    {
      ageRange: '18-24 months',
      context:
        'As vocabulary grows, overextensions start to narrow. Your toddler learns that a cat isn\'t a "doggy" and a moon isn\'t a "ball." But new mix-ups appear  -  they might confuse related words like "shoes" and "socks" or "cup" and "bowl." Semantic category errors (mixing up words within the same category) are normal. You\'ll also see occasional phonological mix-ups  -  saying a similar-sounding word instead of the intended one.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Most children still make occasional word-retrieval errors at this age. They might say "yesterday" when they mean "tomorrow" or mix up color names even though they can match colors correctly. These mix-ups typically decrease as vocabulary and cognitive skills mature. If your child frequently pauses, says "um" a lot, or gets frustrated trying to find the right word, they may have word-retrieval difficulties worth monitoring.',
    },
    {
      ageRange: '3+ years',
      context:
        'By age 3-4, most children use words accurately most of the time, though some category mix-ups persist (especially with time concepts and spatial words like "before/after" and "in front of/behind"). If your child consistently struggles to come up with the right word, frequently substitutes related words, or uses vague words like "thing" or "stuff" excessively, a language evaluation can determine if there\'s a word-retrieval issue that would benefit from speech therapy.',
    },
  ],
  whenNormal: [
    'Your toddler calls all four-legged animals "doggy" or all vehicles "car"  -  overextension is a normal, healthy stage of vocabulary development.',
    'Your toddler mixes up words within the same category  -  calling a fork a "spoon" or pants "shoes"  -  showing they understand the category even if the specific label is wrong.',
    'Your toddler self-corrects ("No, not spoon  -  fork!")  -  this shows they know the right word, they just grabbed the wrong one first.',
    'The mix-ups are decreasing over time as vocabulary grows.',
  ],
  whenToMention: [
    'Your child is over 3 and frequently struggles to find the right word, often pausing, substituting, or giving up on what they were trying to say.',
    'Your child consistently uses vague words ("the thing," "that stuff") in place of specific vocabulary they should know.',
    'Your child mixes up words that aren\'t related at all  -  not category-based errors but seemingly random substitutions.',
  ],
  whenToActNow: [
    'Word-finding difficulties combined with overall language delay  -  limited vocabulary, short sentences, and difficulty being understood  -  warrants comprehensive speech-language evaluation.',
    'Your child had accurate word use and has begun consistently using wrong words or losing vocabulary  -  any regression should be evaluated promptly.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-two-word-phrases',
    'language-receptive',
    'cognitive-categorization',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Spoken Language Disorders.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/spoken-language-disorders/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 2 Year Olds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx',
    },
    {
      org: 'NIDCD',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
