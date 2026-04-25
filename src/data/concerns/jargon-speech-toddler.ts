import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'jargon-speech-toddler',
  title: 'My Toddler Uses Jargon Instead of Words',
  category: 'communication',
  searchTerms: [
    'toddler speaking gibberish',
    'toddler jargon speech',
    'toddler babbling instead of talking',
    'toddler sounds like talking but no words',
    'toddler speaking nonsense',
    'toddler jargoning',
    'baby using jargon not words',
    'toddler talks but can\'t understand them',
    'toddler speaking own language',
    'when does jargon stop in toddlers',
  ],
  quickAnswer:
    'Jargon  -  those long strings of babble that sound like your toddler is speaking a foreign language  -  is a completely normal stage of speech development. It typically peaks between 12 and 18 months and shows that your child is practicing the rhythm, tone, and flow of conversation. Most toddlers gradually replace jargon with real words by 24 months.',
  byAge: [
    {
      ageRange: '10-14 months',
      context:
        'Jargon often first appears around 10-14 months when babies begin stringing together babble syllables with adult-like intonation. Your baby might sound like they\'re having a full conversation  -  complete with question-like rising tones and statement-like falling tones  -  even though no recognizable words are present. This is a positive sign that they\'re absorbing the patterns of your language.',
    },
    {
      ageRange: '14-18 months',
      context:
        'This is peak jargon time. Your toddler may produce long streams of expressive jargon, sometimes with a real word mixed in. You might hear "bababa BALL babadaba"  -  the real word embedded in jargon. This is exactly what you want to see: real words are beginning to break through. The jargon shows they understand conversational structure even before they have the vocabulary to fill it.',
    },
    {
      ageRange: '18-24 months',
      context:
        'During this period, the balance should start shifting from mostly jargon to mostly recognizable words. Your toddler should be using more and more real words, even if jargon still fills the gaps. By 24 months, the majority of what your child says should contain recognizable words. If your child is still primarily using jargon at 24 months with very few real words, a speech evaluation is recommended.',
    },
    {
      ageRange: '24-30 months',
      context:
        'By this age, jargon should be mostly gone, replaced by words and phrases. Some jargon during pretend play or when excited is fine, but it shouldn\'t be the dominant form of communication. If your child is still relying heavily on jargon at this point, it could indicate an expressive language delay, and a speech-language pathologist can help determine whether support is needed.',
    },
  ],
  whenNormal: [
    'Your toddler is between 10 and 18 months and jargoning enthusiastically  -  this is exactly what\'s expected at this stage.',
    'Your toddler mixes real words into their jargon, showing that vocabulary is developing alongside the babble.',
    'Your toddler uses jargon with appropriate conversational intonation  -  rising tones for questions, emphatic tones for demands  -  showing they understand how conversation works.',
    'The ratio of real words to jargon is gradually increasing over time, even if jargon is still present.',
  ],
  whenToMention: [
    'Your toddler is over 24 months and jargon still makes up the majority of their speech, with very few recognizable words.',
    'Your toddler\'s jargon lacks the varied intonation patterns of normal speech  -  it sounds flat or monotone rather than conversational.',
    'Your toddler doesn\'t seem frustrated by not being understood and doesn\'t try to clarify when you can\'t understand them.',
  ],
  whenToActNow: [
    'Your child is over 24 months with no recognizable words at all  -  only jargon  -  combined with limited gestures, pointing, or social engagement.',
    'Your child was using real words and has reverted to primarily jargon  -  any regression in language skills warrants prompt evaluation.',
  ],
  relatedMilestones: [
    'language-babbling',
    'language-first-words',
    'language-two-word-phrases',
    'social-emotional-joint-attention',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Typical Speech and Language Development.',
      url: 'https://www.asha.org/public/speech/development/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 1 Year Olds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-1-Year-Olds.aspx',
    },
    {
      org: 'NIDCD',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
