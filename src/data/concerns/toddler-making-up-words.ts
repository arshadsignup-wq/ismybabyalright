import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-making-up-words',
  title: 'Toddler Making Up Words - Jargon and Invented Language',
  category: 'communication',
  searchTerms: ['toddler making up words','toddler jargon','toddler babbling not words','toddler speaks gibberish','toddler invented words','toddler speech sounds like foreign language','toddler jargoning','toddler babbles but no real words','toddler talks but can\'t understand','toddler expressive jargon','toddler sounds like talking but isn\'t','toddler unintelligible speech'],
  quickAnswer: 'Toddler jargon - strings of sounds that have the rhythm and intonation of real speech but contain no recognizable words - is a normal stage of language development. It typically peaks between 12-18 months and gradually gives way to real words. Your toddler sounds like they are speaking a foreign language because they have learned the "music" of speech (rhythm, intonation, turn-taking) before mastering the actual words. Jargon mixed with real words is a positive sign. Jargon with no real words by 18 months warrants a speech evaluation.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babbling evolves from simple syllable repetition (ba-ba-ba) to variegated babbling (ba-da-go) to early jargon. Your baby may "have conversations" with you using babble that has the rise and fall of real speech. They may even pause and wait for your response. This is not concerning - it is the foundation of language. Your baby is practicing the sounds, rhythm, and social rules of conversation. Respond to their babble as if it were real speech to encourage communication.' },
    { ageRange: '12-18 months', context: 'Peak jargon phase. Your toddler may produce long strings of jargon with a few real words mixed in. They use pointing and gestures alongside jargon to communicate. The combination of jargon + gestures + a few real words is very typical at this age. If your toddler has several clear words (even if most of their "speech" is jargon) and is communicating through gestures, eye contact, and pointing, language development is progressing normally. First words should be appearing and increasing.' },
    { ageRange: '18-24 months', context: 'Jargon should be decreasing as real words increase. By 18 months, your toddler should have at least 10-20 recognizable words, and by 24 months around 50+ words and beginning to combine two words. If your toddler at 18-24 months is still mostly jargoning with very few (under 10) real words, a speech-language evaluation is recommended. They may be a "late talker" who will catch up, or they may benefit from early speech therapy. Do not "wait and see" past 18 months if words are very limited.' },
    { ageRange: '2-3 years', context: 'By age 2, jargon should be mostly replaced by real words and short phrases. Strangers should understand about 50% of what your child says at age 2 and about 75% at age 3. Made-up words for specific things (like calling water "wa-wa" or a blanket "boppie") are normal and charming - these are not jargon but idiosyncratic words that show your child is trying to name things. If your child at 2-3 is still primarily using jargon with few real words, speech therapy is indicated.' },
  ],
  whenNormal: ['Your toddler mixes jargon with real words and the proportion of real words is increasing over time','Your toddler uses jargon with clear communicative intent - pointing, gesturing, and making eye contact','Your child has invented specific "words" for things (idiosyncratic words) alongside growing real vocabulary','Jargon is decreasing month by month as real words take over'],
  whenToMention: ['Your toddler at 18 months has fewer than 10 real words despite lots of jargon','Your toddler at 24 months is not combining any real words into two-word phrases','Jargon is not decreasing - it remains the primary form of expression past 18 months','Your child seems frustrated that you cannot understand them despite their jargon'],
  whenToActNow: ['Your child over 2 has very few recognizable words and no word combinations','Your child was using real words and has regressed to only jargon','Your child over 18 months does not seem to understand what you say (receptive language is also delayed)'],
  relatedMilestones: ['language-expressive','language-receptive'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-nonverbal-at-2','toddler-talking-but-not-communicating','baby-raspberries-but-no-words'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Late Language Emergence.', url: 'https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
