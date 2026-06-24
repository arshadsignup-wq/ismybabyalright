import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-understands-but-wont-speak',
  title: 'My Toddler Understands Everything but Won\'t Talk',
  category: 'communication',
  searchTerms: [
    'toddler understands but won\'t talk',
    'toddler receptive language good expressive bad',
    'toddler understands everything but doesn\'t speak',
    'toddler follows directions but won\'t talk',
    'toddler late talker understands',
    'toddler comprehends but no words',
    'toddler smart but won\'t talk',
    'expressive language delay toddler',
    'toddler communicates with gestures not words',
    'toddler points instead of talking',
  ],
  quickAnswer:
    'Having strong receptive language (understanding) with limited expressive language (speaking) is the most common pattern of language delay in toddlers. These children, often called "late talkers," typically understand instructions, point to objects when asked, and communicate effectively through gestures. While some late talkers catch up on their own (especially if they have a "word explosion" between 18-24 months), research shows that seeking evaluation early is advisable because about 50% of late talkers continue to have language difficulties without intervention.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'At this age, it is normal for comprehension to far exceed production. Your toddler may understand 50+ words but say only a handful. They may follow one-step directions ("get your shoes"), point to body parts when asked, and look at objects you name — all signs of strong receptive language. If your toddler is not yet saying words but is actively communicating through pointing, gesturing, and making eye contact, they may simply be building their "word bank" before their expressive language takes off.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is a critical window for speech emergence. If your toddler understands well, uses gestures effectively, and is clearly intelligent but is not saying at least 20-50 words by 18-24 months, they meet the definition of a "late talker." Request an evaluation through your state\'s early intervention program (free for children under 3) or through a speech-language pathologist. Even if your child eventually catches up, an evaluation can provide strategies to support language development and identify whether there are any underlying issues.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2, late talkers who will catch up typically show a rapid vocabulary increase and begin combining words. Those who do not show this "word explosion" are more likely to have persistent language difficulties. By age 3, your child should be using 3-4 word sentences and be mostly understood by familiar listeners. A toddler who still understands well but produces very little speech at age 2-3 should receive a formal speech-language evaluation and likely begin speech therapy, which is highly effective at this age.',
    },
  ],
  whenNormal: [
    'Your toddler is under 18 months, understands language well, and communicates through pointing and gesturing while their word count is still growing',
    'Your toddler recently had a "word explosion" and is rapidly adding new words to their vocabulary',
    'Your toddler says fewer words than peers but is progressing steadily and not losing skills',
  ],
  whenToMention: [
    'Your toddler has fewer than 50 words by age 2 despite understanding language well',
    'Your toddler is not combining two-word phrases by age 2 ("more juice," "daddy bye")',
    'Your toddler is becoming frustrated by their inability to communicate verbally and is having frequent meltdowns',
  ],
  whenToActNow: [
    'Your toddler has lost words or phrases they previously used — any regression requires urgent evaluation',
    'Your toddler does not seem to understand language either (both receptive AND expressive language are delayed)',
    'Your toddler is not communicating in any way — no words, no gestures, no pointing, no eye contact',
  ],
  relatedMilestones: [
    'language-expressive',
    'language-receptive',
    'social-emotional-communication',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-speech-delay-signs',
    'toddler-speech-delay-panic-when-to-worry',
    'limited-vocabulary',
    'not-saying-mama-dada',
  ],
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Late Language Emergence.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Delays in Toddlers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
