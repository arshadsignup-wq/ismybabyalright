import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-understanding-simple-words',
  title: 'Baby Not Understanding Simple Words',
  category: 'communication',
  searchTerms: [
    'baby not understanding words',
    'baby doesn\'t understand no',
    'baby not comprehending speech',
    'baby receptive language delay',
    'baby doesn\'t understand mama',
    'when do babies understand words',
    'baby not recognizing words',
    'baby doesn\'t respond to simple words',
    'early receptive language delay',
    'baby not understanding bye bye',
  ],
  quickAnswer:
    'Babies begin understanding simple words like "no," "bye-bye," and "mama" between 8 and 10 months. Comprehension develops before spoken language, so a baby who understands words but is not yet saying them is progressing normally. If your baby shows no understanding of any words by 12 months, a hearing and language evaluation is recommended.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Babies at this age respond to tone of voice rather than specific words. They may calm to a soothing voice or startle at a sharp tone, but they do not yet understand the meaning of individual words. This is completely normal and expected.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Babies begin to recognize the sound patterns of frequently heard words, especially their own name. They may respond to their name or look at familiar people when named. True word comprehension is still developing.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Receptive language grows rapidly. Babies start to understand "no," may look at familiar objects when named, and respond to simple phrases like "Where\'s daddy?" This understanding may be inconsistent at first and depends on context and tone.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Most babies understand several common words and simple phrases. They may follow simple directions with gestures like "give me the ball" or point to familiar objects when asked. If your baby shows no word comprehension by 12 months, discuss this with your pediatrician.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Toddlers understand far more words than they can say. They should be able to follow simple one-step directions and identify familiar objects. If your child does not seem to understand any words by this age, a comprehensive speech and language evaluation is important.',
    },
  ],
  whenNormal: [
    'Your baby is under 8 months and responds to tone of voice but not specific word meaning',
    'Your baby understands some words inconsistently, depending on context and how they are feeling',
    'Your baby understands words when accompanied by gestures but not the words alone',
    'Your baby is bilingual and may take slightly longer to show clear word comprehension in either language',
  ],
  whenToMention: [
    'Your baby is 12 months or older and does not seem to understand any common words like "no" or "bye-bye"',
    'Your baby does not look at familiar objects or people when you name them by 12 months',
    'Your baby does not follow any simple directions, even with gestures, by 12 to 15 months',
  ],
  whenToActNow: [
    'Your baby shows no response to any speech or sounds, which may indicate a hearing problem',
    'Your toddler previously understood words and has suddenly stopped responding to language',
  ],
  relatedMilestones: ['responds-to-name', 'follows-directions', 'first-words', 'hearing'],
  showSelfReferral: true,
  relatedConcernSlugs: ['delayed-receptive-language', 'not-understanding-no', 'not-following-commands'],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Birth to One Year: Communication Development.',
      url: 'https://www.asha.org/public/speech/development/01/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 8 to 12 Months. HealthyChildren.org.',
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
