import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-understanding-but-not-talking',
  title: 'Toddler Understands Everything but Won\'t Talk',
  category: 'communication',
  searchTerms: [
    'toddler understands but won\'t talk',
    'toddler comprehends but not speaking',
    'expressive language delay only',
    'toddler follows directions but no words',
    'toddler understands everything silent',
    'expressive only language delay',
    'toddler receptive better than expressive',
    'toddler points but doesn\'t talk',
    'toddler understands not producing words',
    'why won\'t my toddler talk',
  ],
  quickAnswer:
    'An expressive-only language delay, where a child understands language well but produces few or no words, is the most common type of language delay. These children often have strong comprehension, use gestures effectively, and are socially engaged. Many catch up on their own, but a speech evaluation is recommended to determine whether your child would benefit from support.',
  byAge: [
    { ageRange: '12-15 months', context: 'It is common for comprehension to outpace production at this age. Your baby may follow simple directions and point to objects when named, even if they have few or no words. This gap between understanding and speaking is normal in early language development.' },
    { ageRange: '15-18 months', context: 'Children who understand many words but produce very few may be developing an expressive-only delay. If your child uses gestures like pointing, showing, and waving, these are positive signs. Monitor word growth and discuss with your pediatrician at the 18-month visit.' },
    { ageRange: '18-24 months', context: 'A child who understands 50 or more words but says fewer than 10 has a significant gap between receptive and expressive skills. Many of these children are "late talkers" who will catch up, but a speech-language evaluation can identify which children need support.' },
    { ageRange: '24-36 months', context: 'If the gap between understanding and speaking persists, speech therapy can help. Therapy focuses on turning comprehension into expression through play-based activities. Children with strong comprehension tend to respond very well to therapy.' },
    { ageRange: '3-5 years', context: 'Most children with expressive-only delays catch up with or without therapy by school age. However, some may continue to have subtle language weaknesses. Ongoing monitoring ensures any persistent difficulties are addressed.' },
  ],
  whenNormal: [
    'Your toddler follows directions, points to objects in books, and understands questions but has few words',
    'Your toddler uses gestures, facial expressions, and sounds to communicate effectively',
    'Your toddler\'s word count is growing, even if slowly, and comprehension remains strong',
    'Your toddler is under 18 months and the comprehension-production gap is typical for age',
  ],
  whenToMention: [
    'Your toddler is 18 months or older with very few words despite strong comprehension',
    'Your toddler\'s word production has not increased in the past 2 to 3 months',
    'Your toddler has strong comprehension but no gestures, which is an unusual combination',
  ],
  whenToActNow: [
    'Your toddler has lost words they previously used, suggesting regression',
    'Your toddler seems frustrated, aggressive, or withdrawn because they cannot express themselves',
  ],
  relatedMilestones: ['first-words', 'language-comprehension', 'gestures', 'vocabulary-growth'],
  showSelfReferral: true,
  relatedConcernSlugs: ['late-talker', 'speech-delay', 'toddler-mixed-receptive-expressive-delay'],
  sources: [
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Late Blooming or Language Problem?', url: 'https://www.asha.org/public/speech/disorders/late-blooming-or-language-problem/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development: 1 to 2 Years. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.', url: 'https://www.nidcd.nih.gov/health/speech-and-language' },
  ],
};
