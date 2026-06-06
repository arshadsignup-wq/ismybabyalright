import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-jargoning-no-real-words',
  title: 'Baby Using Jargon but No Real Words',
  category: 'communication',
  searchTerms: [
    'baby jargoning no real words',
    'baby babbling sounds like talking',
    'baby talks gibberish',
    'baby jargon speech',
    'baby sounds like talking but no words',
    'baby nonsense words',
    'jargon babbling',
    'baby conversational babbling no words',
    'baby pretend talking',
    'when does jargon become words',
  ],
  quickAnswer:
    'Jargon babbling, which sounds like your baby is having a conversation in a made-up language, typically appears between 10 and 14 months and is a positive sign that your baby is learning the rhythm and melody of speech. Real words usually emerge from jargon over the following months. If no real words appear by 16 to 18 months, a speech evaluation may be helpful.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'Babies are typically in the canonical babbling stage, repeating syllables like "bababa" or "mamama." Jargon has not usually appeared yet. Some babies begin producing more varied babbling toward the end of this period.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Jargon babbling often emerges as babies string together varied syllables with speech-like intonation. It sounds remarkably like real conversation, complete with rising and falling pitch. This is a healthy and important stage of language development. First words typically begin to emerge alongside jargon.',
    },
    {
      ageRange: '12-15 months',
      context:
        'Many babies use a mix of jargon and real words. You might hear a recognizable word embedded in a string of jargon. This is normal and shows your baby is transitioning from babbling to true language. By 12 to 15 months, most babies have at least 1 to 3 real words.',
    },
    {
      ageRange: '15-18 months',
      context:
        'Real words should be increasing alongside jargon. If your baby is still primarily using jargon with few or no recognizable words by 18 months, it is worth discussing with your pediatrician. Some late talkers are simply building comprehension before their words emerge.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Words should be replacing jargon as the primary means of communication. Persistent jargon with very few real words by age 2 may indicate a language delay that would benefit from speech therapy evaluation.',
    },
  ],
  whenNormal: [
    'Your baby is between 10 and 15 months and using lots of jargon with a few emerging real words',
    'Your baby uses jargon with clear conversational intent, including eye contact and gestures',
    'Your baby understands many words and follows simple directions even if they mostly use jargon to communicate',
    'Your baby is beginning to mix real words into their jargon strings',
  ],
  whenToMention: [
    'Your baby is 18 months or older and still primarily using jargon with very few real words',
    'Your baby uses jargon but does not seem to understand words spoken to them',
    'Your baby\'s jargon lacks the varied intonation patterns that mimic real speech',
  ],
  whenToActNow: [
    'Your baby was using real words and has stopped, reverting to only jargon or silence',
    'Your baby shows no comprehension of language, uses no gestures, and avoids social interaction alongside persistent jargon',
  ],
  relatedMilestones: ['babbling', 'first-words', 'vocabulary-growth', 'language-comprehension'],
  showSelfReferral: true,
  relatedConcernSlugs: ['late-talker', 'not-saying-mama-dada', 'baby-only-one-word-at-12-months'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. One to Two Years: Communication Development.',
      url: 'https://www.asha.org/public/speech/development/12/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-8-to-12-Months.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. From Babbling to Books: Building Language and Literacy Skills From Birth.',
      url: 'https://www.zerotothree.org/resource/from-babbling-to-books/',
    },
  ],
};
