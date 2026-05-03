import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'speech-delay',
  title: 'Speech Delay in My Child',
  category: 'communication',
  searchTerms: [
    'speech delay',
    'speech delay in toddler',
    'child speech delay',
    'speech delay in toddlers',
    'is my child speech delayed',
    'signs of speech delay',
    'speech delay causes',
    'speech delay vs autism',
    'late talker or speech delay',
    'when to worry about speech delay',
    'speech delay early intervention',
    'toddler behind on speech',
    'speech therapy for toddler',
    'how to help toddler talk',
    'toddler not talking but understands',
    'speech delay 2 year old',
    'speech delay 3 year old',
    'does bilingual cause speech delay',
  ],
  quickAnswer:
    'Speech delay means a child is developing speech and language skills in the expected order but at a slower pace than typical. It\'s one of the most common developmental concerns  -  affecting about 10-15% of toddlers  -  and early intervention through speech therapy is remarkably effective, with many children catching up fully by school age.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'During the first year, pre-speech milestones matter most: cooing by 2-3 months, babbling with consonants by 6-9 months, and responding to their name. Babies who are quiet but socially engaged  -  smiling, making eye contact, and responding to voices  -  are usually developing normally. A very quiet baby who also doesn\'t engage socially may benefit from early evaluation.',
    },
    {
      ageRange: '12-18 months',
      context:
        'By 12 months, most babies have at least one word and understand simple phrases. By 18 months, the expectation is about 5-20 words. If your child has no words by 18 months but is pointing, gesturing, and understanding language, they may be a "late talker"  -  a category with generally excellent outcomes, especially with support.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is when many speech delays become apparent. The CDC recommends evaluation if a child has fewer than 50 words by 24 months or isn\'t combining words. Importantly, hearing should always be tested as a first step  -  undiagnosed hearing loss is a common and very treatable cause of speech delay.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2, children typically use 2-word phrases, and by age 3, they\'re speaking in short sentences that strangers can understand about 75% of the time. If your child is significantly behind these benchmarks, speech-language therapy can help. Research consistently shows that earlier intervention leads to better outcomes.',
    },
  ],
  whenNormal: [
    'Your child is meeting pre-speech milestones (babbling, gesturing, pointing) even though words are slow to arrive.',
    'Your child understands far more than they can say  -  they follow directions, identify objects, and respond to questions with actions even if not with words.',
    'There\'s a family history of late talking with eventual catch-up, and your child is otherwise developing typically.',
    'Your child is in a bilingual or multilingual environment  -  these children may have fewer words in each individual language but a combined vocabulary that\'s on track.',
    'Your child is adding new words steadily, even if the total count is below average.',
  ],
  whenToMention: [
    'No words by 18 months, even if your child is communicating with gestures.',
    'Fewer than 50 words by 24 months, or no two-word combinations.',
    'Your child\'s speech progress seems to have stalled  -  no new words for several weeks.',
    'Strangers can\'t understand any of your 2-year-old\'s speech.',
  ],
  whenToActNow: [
    'Your child has lost words or language skills they previously had  -  regression is always a reason for prompt evaluation.',
    'Your child has no words AND limited comprehension, no gestures, no pointing, and limited social engagement  -  this pattern warrants comprehensive evaluation.',
    'You suspect your child may not be hearing well  -  they don\'t startle at loud sounds, don\'t turn toward voices, or need the TV unusually loud.',
  ],
  relatedConcernSlugs: [
    'not-talking',
    'late-talker',
    'baby-not-babbling',
    'not-using-gestures',
    'not-pointing',
    'bilingual-speech-delay',
    'hearing-loss-signs-baby',
    'early-signs-of-autism-baby',
    'echolalia',
    'toddler-not-using-two-word-phrases',
    'toddler-speech-not-understood-by-strangers',
    'limited-vocabulary',
  ],
  relatedMilestones: [
    'language-babbling',
    'language-first-words',
    'language-two-word-phrases',
    'language-receptive',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Language and Speech Disorders in Children.',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/language-disorders.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Delays in Toddlers: Information for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Late Language Emergence.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/',
    },
  ],
};
