import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'not-talking',
  title: 'My Baby Isn\'t Talking',
  category: 'communication',
  searchTerms: [
    'baby not talking',
    'when do babies talk',
    'when do babies start talking',
    'baby not saying words',
    'baby no words at 12 months',
    'baby not talking at 12 months',
    'baby not talking at 18 months',
    'baby not talking at 2 years',
    'late talker baby',
    'toddler not talking',
    'baby only babbling no words',
    'when should baby say first word',
    'speech delay baby',
    'when do babies say their first word',
    'how many words should a 1 year old say',
    'how many words should an 18 month old say',
    'baby first words',
    'when do babies say mama',
    'when do babies say dada',
  ],
  quickAnswer:
    'First words typically appear between 10 and 14 months, but there\'s enormous variation in what\'s normal. What matters most at first is whether your baby is communicating  -  pointing, gesturing, making eye contact, and babbling with different sounds  -  even if actual words haven\'t arrived yet.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'Words aren\'t expected yet. At this age, you should be hearing babbling  -  repetitive consonant-vowel combinations like "bababa" or "mamama." Your baby should also be responding to their name and turning toward sounds. These are the building blocks of language, and they\'re more important right now than words.',
    },
    {
      ageRange: '10-12 months',
      context:
        'Many babies say their first word around 12 months, but "word" is a loose term at this age. It might be "dada" used consistently for dad, or "buh" for ball  -  it doesn\'t need to sound perfect. If your baby is babbling with variety, pointing at things, and clearly understanding some of what you say ("Where\'s the dog?"), language is developing even without clear words.',
    },
    {
      ageRange: '13-15 months',
      context:
        'Your baby might have a few words, or they might still be relying on gestures and babbling. Both can be fine. What matters is the trajectory: are they adding new sounds? Do they understand simple instructions? Are they pointing and sharing attention with you? Receptive language (what they understand) usually develops ahead of expressive language (what they say).',
    },
    {
      ageRange: '16-18 months',
      context:
        'By 18 months, most pediatricians expect at least a few meaningful words. If your baby has no words by 18 months, an evaluation is recommended. But context matters  -  babies in bilingual homes sometimes take a bit longer to produce words in either language (though they understand both), and this is a normal part of bilingual development, not a delay.',
    },
    {
      ageRange: '19-24 months',
      context:
        'Between 18 and 24 months, vocabulary typically explodes. If your toddler has fewer than 50 words by 24 months or isn\'t starting to combine two words ("more milk," "daddy go"), a speech-language evaluation is a good idea. Early intervention for speech is extremely effective, and many "late talkers" who get support catch up completely.',
    },
  ],
  whenNormal: [
    'Your baby is under 12 months and babbling with a variety of consonant sounds, even though no clear words have emerged.',
    'Your baby understands more than they can say  -  they follow simple directions, look at things you name, and clearly comprehend you.',
    'You\'re raising your baby with two or more languages  -  bilingual babies may say first words slightly later but typically catch up by age 2.',
    'Your baby uses gestures like pointing, waving, and reaching to communicate their needs effectively.',
    'Your baby has a few words but isn\'t as talkative as other babies you know  -  vocabulary size varies enormously within the normal range.',
  ],
  whenToMention: [
    'Your baby is over 12 months and isn\'t babbling with consonant sounds (like "ba," "da," "ma")  -  babbling variety is an important precursor to words.',
    'Your baby is 18 months with no meaningful words at all, even in a bilingual home.',
    'Your baby doesn\'t seem to understand simple language  -  they don\'t respond to "no," don\'t look where you point, and don\'t follow basic requests.',
    'Your baby used to babble more and seems to have become quieter over time.',
  ],
  whenToActNow: [
    'Your baby has lost words they were previously using  -  any loss of language is a reason for prompt evaluation.',
    'Your baby is over 12 months and doesn\'t respond to sounds, their name, or voices  -  a hearing evaluation should be the first step, as hearing issues are a common and treatable cause of speech delays.',
    'Your baby is over 18 months with no words AND doesn\'t point, gesture, or make eye contact to communicate.',
  ],
  relatedConcernSlugs: [
    'speech-delay',
    'late-talker',
    'baby-not-babbling',
    'not-babbling-at-9-months',
    'not-saying-mama-dada',
    'not-pointing',
    'not-responding-to-name',
    'bilingual-speech-delay',
    'echolalia',
    'hearing-loss-signs-baby',
    'early-signs-of-autism-baby',
    'not-using-gestures',
  ],
  relatedMilestones: [
    'language-babbling',
    'language-first-words',
    'language-two-word-phrases',
    'social-emotional-joint-attention',
    'language-receptive',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC Milestone Tracker  -  Important Milestones: Your Child By 12 Months and 18 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Language Delays in Toddlers: Information for Parents',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'WHO',
      citation:
        'WHO  -  Early childhood development and disability: A discussion paper',
      url: 'https://www.who.int/publications/i/item/early-childhood-development-and-disability-a-discussion-paper',
    },
  ],
};
