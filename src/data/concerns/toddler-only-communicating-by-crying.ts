import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-only-communicating-by-crying',
  title: 'Toddler Only Communicating by Crying or Screaming',
  category: 'communication',
  searchTerms: [
    'toddler only cries to communicate',
    'toddler screams instead of talking',
    'toddler cries for everything',
    'toddler no words just screaming',
    'toddler frustrated can\'t communicate',
    'toddler not using words to ask',
    'toddler screaming instead of using words',
    'toddler communication frustration',
    'toddler tantrums instead of talking',
    'toddler only screams when wants something',
  ],
  quickAnswer:
    'Toddlers who rely heavily on crying and screaming to communicate are usually frustrated because their language skills have not caught up with their desires. They know what they want but do not have the words to express it. This is a very common phase between 12-24 months. Teaching simple sign language, acknowledging their frustration, and modeling short phrases can help bridge the gap. If your toddler has very few or no words by 18 months and relies entirely on crying, a speech evaluation may be helpful.',
  byAge: [
    { ageRange: '12-18 months', context: 'At this age, many toddlers have only a handful of words and rely heavily on pointing, grunting, and crying to communicate. This is within normal range. Teaching 5-10 basic signs (more, all done, milk, help, eat) can dramatically reduce frustration while verbal language catches up. Respond to their attempts to communicate by naming what they want: "You want the ball! Ball!"' },
    { ageRange: '18-24 months', context: 'By 18 months, toddlers typically have at least 10-20 words and should be starting to use them to request things. If your child still relies primarily on crying or screaming to communicate needs at this age, consider a speech-language evaluation. Some children benefit from early intervention speech therapy, which focuses on functional communication skills.' },
    { ageRange: '2-3 years', context: 'By age 2, most toddlers use words and short phrases to express needs. Continued heavy reliance on crying and screaming at this age - especially if your child has fewer than 50 words or is not combining words - warrants speech therapy evaluation. Frustration-based tantrums are still normal at this age, but your child should also be using words for basic requests like food, drink, help, and comfort.' },
  ],
  whenNormal: [
    'A 12-15 month old who has a few words but still mostly cries or points to communicate',
    'Crying from frustration when a toddler cannot find the right word in the moment',
    'Screaming during tantrums even when the child has good language skills at other times',
    'Increased frustration and crying during illness, teething, or overtiredness',
  ],
  whenToMention: [
    'Your toddler has fewer than 10 words by 18 months and relies on crying for most communication',
    'Your child does not point or use gestures to supplement crying',
    'Frustration from communication difficulties is causing frequent intense tantrums',
    'Your child seems to understand what you say but cannot express themselves verbally',
  ],
  whenToActNow: [
    'Your child has lost words they previously used (language regression)',
    'Your child does not respond to their name, does not point, and does not use any gestures by 15 months',
    'Your child has no words at all by 18 months',
  ],
  relatedMilestones: ['12-months', '18-months', '24-months'],
  showSelfReferral: true,
  relatedConcernSlugs: ['speech-delay', 'late-talker', 'not-using-gestures', 'tantrums'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Language Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-1-Year-Olds.aspx' },
    { org: 'ASHA', citation: 'American Speech-Language-Hearing Association. Late Language Emergence.', url: 'https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Communication Milestones.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
  ],
};
