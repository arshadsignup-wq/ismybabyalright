import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-vocabulary-explosion-not-happening',
  title: 'Toddler\'s Vocabulary Explosion Not Happening',
  category: 'communication',
  searchTerms: [
    'vocabulary explosion not happening',
    'toddler word burst delayed',
    'toddler not learning new words',
    'no word spurt toddler',
    'vocabulary explosion age',
    'when does word explosion happen',
    'toddler slow word learning',
    'toddler not adding words',
    'vocabulary growth stalled toddler',
    'no vocabulary spurt at 18 months',
  ],
  quickAnswer:
    'The vocabulary explosion, where toddlers suddenly begin learning new words rapidly, typically occurs between 18 and 24 months. However, not all children experience a dramatic burst. Some children add words more gradually and steadily, which is also a normal pattern. If your toddler is not adding any new words by 18 to 21 months, a speech evaluation may be helpful.',
  byAge: [
    {
      ageRange: '12-15 months',
      context:
        'Early word learning is typically slow, with babies adding just a few words per month. A vocabulary explosion is not expected at this age. Focus on whether your child is gradually adding words and building comprehension.',
    },
    {
      ageRange: '15-18 months',
      context:
        'Some children begin their vocabulary spurt during this period, rapidly moving from 10 to 20 words up to 50 or more. Others are still in the gradual word-learning phase. Both patterns are normal as long as vocabulary is growing.',
    },
    {
      ageRange: '18-21 months',
      context:
        'This is the most common window for the vocabulary explosion. Children who have been slowly adding words may suddenly begin learning several new words per day. If no new words are being added at all during this period, discuss your concerns with your pediatrician.',
    },
    {
      ageRange: '21-24 months',
      context:
        'Most children have experienced some acceleration in word learning by now. If your child is still learning words very slowly, with no increase in learning rate, a speech-language evaluation can determine whether support would be helpful.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By age 2, children typically have 50 or more words. Continued slow word learning may indicate a language delay that would benefit from speech therapy. Some late talkers do catch up in this period, but professional guidance is valuable.',
    },
  ],
  whenNormal: [
    'Your toddler is under 18 months and adding words slowly but steadily',
    'Your toddler adds words gradually rather than in a dramatic burst, but vocabulary is still growing',
    'Your toddler has 50 or more words and is combining words, even without a noticeable explosion period',
    'Your toddler is bilingual and word learning may be distributed across two languages',
  ],
  whenToMention: [
    'Your toddler is over 18 months and has not added any new words in several weeks',
    'Your toddler has fewer than 20 words at 18 months with no sign of acceleration',
    'Your toddler seems to learn a word and then forget it, with vocabulary not reliably growing',
  ],
  whenToActNow: [
    'Your toddler has lost words they previously used, showing vocabulary regression',
    'Your toddler is over 21 months with fewer than 10 words and shows no interest in learning new words',
  ],
  relatedMilestones: ['vocabulary-growth', 'first-words', 'word-combinations', 'language-comprehension'],
  showSelfReferral: true,
  relatedConcernSlugs: ['late-talker', 'toddler-less-than-50-words-at-2', 'toddler-speech-plateau'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 2 Year Olds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. One to Two Years: Communication Development.',
      url: 'https://www.asha.org/public/speech/development/12/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
