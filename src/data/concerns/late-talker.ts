import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'late-talker',
  title: 'My Child Is a Late Talker',
  category: 'communication',
  searchTerms: [
    'late talker',
    'late talker vs speech delay',
    'will my late talker catch up',
    'late bloomer speech',
    'toddler not talking much',
    'late talker 2 years old',
    'einstein syndrome late talker',
    'when to worry about late talker',
    'late talker intervention',
    'my child talks late',
  ],
  quickAnswer:
    'Late talkers are children who have fewer than 50 words or aren\'t combining words by age 2, but are developing normally in other areas. About half of late talkers catch up on their own by age 3, but the other half go on to have lasting language delays. Early evaluation and speech therapy can make a big difference, so it\'s worth acting even if you\'re told to "wait and see."',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'By 18 months, most toddlers have at least 10-20 words and are adding new ones regularly. By 24 months, they should have 50+ words and be combining two words ("more milk," "bye-bye dada"). If your child has fewer than 10 words at 18 months or fewer than 50 by age 2, they\'re considered a late talker. Even if they understand everything, expressive delays matter and should be evaluated.',
    },
    {
      ageRange: '25-30 months',
      context:
        'If your child is over 2 and still not combining words, don\'t wait for a "language explosion" that may or may not come. Research shows that early intervention significantly improves outcomes for late talkers. Some catch up quickly with just a little support; others need more intensive help. Either way, starting speech therapy now gives your child the best chance.',
    },
    {
      ageRange: '31-36 months',
      context:
        'By age 3, children should be using sentences, telling simple stories, and being understood by strangers most of the time. If your child is still using mostly single words or two-word phrases at 3, they\'re behind and need speech therapy. The "wait and see" window has closed  -  this is the time when language skills really take off, and falling further behind can affect social development and school readiness.',
    },
    {
      ageRange: '3-4 years',
      context:
        'If your child is 3 or older and still significantly behind in speech, consistent speech therapy is important. Some late talkers do catch up in preschool, but many need ongoing support. The good news is that speech therapy works  -  most children make excellent progress with the right help. Don\'t let anyone tell you it\'s "just a phase" if your child is struggling to communicate.',
    },
  ],
  whenNormal: [
    'Your child is 18 months with 10-15 words and is adding new ones every week  -  this is on the lower end of normal, but still progressing.',
    'Your child understands everything you say, follows complex instructions, and communicates well with gestures, but just hasn\'t started talking much yet.',
    'Your child is in a bilingual home and understands both languages well, but is slower to produce words in either  -  this can be normal for bilingual toddlers.',
    'Your child had a few words at 18 months and is now closer to 50 words at 2 years, even if they\'re not combining them yet.',
  ],
  whenToMention: [
    'Your child is 18 months with fewer than 10 words.',
    'Your child is 24 months with fewer than 50 words or isn\'t combining two words together.',
    'Your child\'s language growth has slowed or plateaued  -  they\'re not adding new words regularly.',
    'Your child is hard to understand, even for family members, by age 2-3.',
  ],
  whenToActNow: [
    'Your child is over 2 years old with fewer than 25 words and isn\'t combining any words  -  this needs a speech evaluation now.',
    'Your child has lost words they were previously using  -  regression is always urgent.',
    'Your child is 3 years old and still not using sentences or being understood by others.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-two-word-phrases',
    'language-vocabulary-growth',
    'language-sentence-use',
    'social-emotional-communicates-needs',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association  -  Late Talking in Toddlers',
      url: 'https://www.asha.org/public/speech/disorders/late-talking/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Language Delays in Toddlers: Information for Parents',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC  -  Important Milestones: Your Child By Two Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
