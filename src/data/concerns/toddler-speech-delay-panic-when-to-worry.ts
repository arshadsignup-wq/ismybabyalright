import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-speech-delay-panic-when-to-worry',
  title: 'When Should I Actually Worry About My Toddler\'s Speech?',
  category: 'communication',
  searchTerms: [
    'when to worry about toddler speech',
    'toddler speech delay panic',
    'should I worry about late talker',
    'toddler not talking when to worry',
    'late talker toddler concern',
    'toddler speech anxiety parent',
    'is my toddler\'s speech delayed',
    'toddler speech late bloomer or delay',
    'when is speech delay serious',
    'toddler not talking 2 years old worry',
  ],
  quickAnswer:
    'While some toddlers are genuinely "late bloomers" who catch up on their own, research shows that earlier evaluation leads to better outcomes when a true delay exists. The key is not to panic but to act. You should be concerned if your toddler has no words by 18 months, fewer than 50 words by age 2, or is not combining two words by age 2. A speech evaluation does not mean something is wrong — it either gives you peace of mind or gets your child the help they need.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'By 12 months, most babies say at least 1-2 words (often "mama" or "dada" used intentionally) and understand simple commands like "give me the ball." By 18 months, most toddlers have at least 10-20 words. Red flags at this stage include: no babbling by 12 months, no words by 16 months, not following simple directions, not pointing to show you things, and not responding to their name. If you notice these signs, contact your state\'s early intervention program — you do not need a referral, and evaluation is free.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is a critical window. A "word explosion" typically happens between 18-24 months. By age 2, most children have about 50 words and are beginning to combine two words ("more milk," "daddy go"). A "late talker" who understands language well, communicates through gestures, and is developing normally in other areas may catch up — but there is no guaranteed way to predict this. Research shows that about 50% of late talkers catch up by age 3, but the other 50% continue to have language difficulties. Getting an evaluation now rather than "waiting and seeing" is the recommended approach.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2, your toddler should be combining two-word phrases regularly. By age 3, most children use 3-4 word sentences, and their speech should be understandable to familiar adults at least 50-75% of the time. If your child\'s speech is very difficult to understand, they are not combining words, or they seem frustrated by their inability to communicate, a speech-language evaluation is strongly recommended. Speech therapy at this age is highly effective and is often play-based, which children enjoy.',
    },
  ],
  whenNormal: [
    'Your toddler understands language well, follows directions, and communicates through gestures even if they are not saying many words yet',
    'Your toddler\'s vocabulary is expanding steadily, even if it is on the slower side compared to peers',
    'Your toddler went through a quiet period and then had a "word explosion" — this is a common pattern',
  ],
  whenToMention: [
    'Your toddler has fewer than 50 words by age 2 or is not combining two-word phrases',
    'Your toddler does not seem to understand what you say to them, not just that they do not speak',
    'Your toddler has lost words they previously used — any regression in speech should be evaluated',
  ],
  whenToActNow: [
    'Your toddler has lost multiple words or phrases they previously used — speech regression requires urgent evaluation',
    'Your toddler has no words at all by 18 months and does not communicate through gestures or pointing',
    'Your toddler does not respond to their name or seem to understand any language, which may indicate a hearing problem or other issue requiring immediate assessment',
  ],
  relatedMilestones: [
    'language-expressive',
    'language-receptive',
    'social-emotional-communication',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-speech-delay-signs',
    'toddler-understands-but-wont-speak',
    'limited-vocabulary',
    'not-saying-mama-dada',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Delays in Toddlers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Late Blooming or Language Problem?',
      url: 'https://www.asha.org/public/speech/disorders/late-blooming-or-language-problem/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Speech and Language Developmental Milestones.',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
