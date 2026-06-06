import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-10-words-at-18-months',
  title: 'Toddler Only Has a Few Words at 18 Months',
  category: 'communication',
  searchTerms: [
    'toddler few words at 18 months',
    '18 month old limited vocabulary',
    'toddler 10 words at 18 months',
    'how many words at 18 months',
    '18 month old not talking much',
    'toddler behind on words',
    'late talker 18 months',
    'toddler vocabulary 18 months',
    'should toddler have 50 words at 18 months',
    'toddler only a few words',
  ],
  quickAnswer:
    'By 18 months, most toddlers have between 10 and 50 words, though there is wide variation. Having fewer than 10 words at 18 months may indicate a child is a "late talker." If your toddler understands language well, uses gestures, and is socially engaged, many late talkers catch up. However, a speech evaluation at this age can provide guidance and early support if needed.',
  byAge: [
    {
      ageRange: '12-14 months',
      context:
        'Most babies have 1 to 5 words at this age. Vocabulary growth is typically slow at first, with babies adding only a few words per month. Comprehension of words continues to outpace production.',
    },
    {
      ageRange: '14-16 months',
      context:
        'Vocabulary gradually increases. Some children begin to show the start of a vocabulary spurt while others continue to add words slowly. By 15 to 16 months, most children have at least 5 to 10 words.',
    },
    {
      ageRange: '16-18 months',
      context:
        'The expected range is 10 to 50 words, with significant individual variation. If your toddler has fewer than 10 words at 18 months, their pediatrician may recommend monitoring or a speech-language evaluation. Key factors include whether comprehension is strong and whether the child uses gestures.',
    },
    {
      ageRange: '18-21 months',
      context:
        'Many children experience a vocabulary explosion during this period, rapidly adding new words. Late talkers may begin catching up during these months. If vocabulary growth remains very slow, speech therapy can provide helpful strategies.',
    },
    {
      ageRange: '21-24 months',
      context:
        'By 2 years, most children have at least 50 words and are beginning to combine words. If your child\'s vocabulary has not grown significantly by 24 months, a speech-language evaluation is strongly recommended.',
    },
  ],
  whenNormal: [
    'Your 18-month-old has about 10 words and is steadily adding new ones every few weeks',
    'Your toddler understands far more words than they say and follows simple directions',
    'Your toddler uses gestures like pointing, showing, and leading you to what they want',
    'Your toddler is socially engaged, makes eye contact, and shows interest in communicating',
  ],
  whenToMention: [
    'Your 18-month-old has fewer than 10 words and is not adding new words regularly',
    'Your toddler has few words and limited gesture use',
    'Your toddler does not seem to understand simple words or follow basic directions',
  ],
  whenToActNow: [
    'Your toddler has lost words they previously used consistently',
    'Your toddler has almost no words, no gestures, and limited social engagement at 18 months',
  ],
  relatedMilestones: ['vocabulary-growth', 'first-words', 'gestures', 'language-comprehension'],
  showSelfReferral: true,
  relatedConcernSlugs: ['late-talker', 'limited-vocabulary', 'toddler-less-than-50-words-at-2'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: 1 to 2 Years. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Late Blooming or Language Problem?',
      url: 'https://www.asha.org/public/speech/disorders/late-blooming-or-language-problem/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By 18 Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-18mo.html',
    },
  ],
};
