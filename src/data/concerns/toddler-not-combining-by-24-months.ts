import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-not-combining-by-24-months',
  title: 'Toddler Not Combining Words by 24 Months',
  category: 'communication',
  searchTerms: [
    'toddler not combining words at 2',
    'no two word phrases at 24 months',
    'toddler not putting words together',
    'when do toddlers combine words',
    '2 year old single words only',
    'toddler not making sentences',
    'no word combinations at 2',
    'toddler only says single words',
    'when should toddler say two words together',
    'delayed word combinations',
  ],
  quickAnswer:
    'Most toddlers begin combining two words together between 18 and 24 months, such as "more milk" or "daddy go." Not combining words by 24 months is considered a developmental red flag and warrants a speech-language evaluation. Early intervention during this period can significantly support language development.',
  byAge: [
    {
      ageRange: '15-18 months',
      context:
        'Most children are still using single words at this stage. Word combinations are not expected yet. Focus is on whether your child is building vocabulary and using words with clear intent.',
    },
    {
      ageRange: '18-21 months',
      context:
        'Some early talkers begin combining words during this period, saying things like "more juice" or "no night-night." However, many children are still in the single-word stage and this is within the normal range.',
    },
    {
      ageRange: '21-24 months',
      context:
        'Two-word combinations should be emerging. This is a key milestone that signals your child is beginning to understand grammar and sentence structure. If your child has fewer than 50 words and no combinations by 24 months, a speech evaluation is recommended.',
    },
    {
      ageRange: '24-30 months',
      context:
        'Two-word phrases are expected by this age. Children who are not combining words by 24 months may benefit from speech therapy. Some late talkers do begin combining words during this period, but professional guidance helps determine the best course of action.',
    },
    {
      ageRange: '30-36 months',
      context:
        'Most children are using three-word or longer phrases by age 3. If your child is still not combining words, speech therapy is strongly recommended to support language development before the preschool years.',
    },
  ],
  whenNormal: [
    'Your toddler is under 21 months and using single words with good vocabulary growth',
    'Your toddler is 21 to 23 months and just beginning to put occasional two-word phrases together',
    'Your toddler uses some two-word combinations inconsistently alongside single words',
    'Your toddler combines words in one language but not the other in a bilingual household',
  ],
  whenToMention: [
    'Your toddler is 24 months and has never combined two words together',
    'Your toddler uses two-word phrases only as memorized chunks, not creative combinations',
    'Your toddler has fewer than 50 words at 24 months alongside absent word combinations',
  ],
  whenToActNow: [
    'Your toddler was combining words and has stopped, losing this skill',
    'Your toddler is 24 months with very few words, no combinations, and limited comprehension',
  ],
  relatedMilestones: ['word-combinations', 'vocabulary-growth', 'sentence-formation', 'language-comprehension'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-combining-words', 'toddler-less-than-50-words-at-2', 'toddler-telegraphic-speech-only'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By 2 Years.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-2yr.html',
    },
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
  ],
};
