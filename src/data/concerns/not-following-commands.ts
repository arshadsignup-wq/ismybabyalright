import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-following-commands',
  title: 'Toddler Not Following Simple Commands',
  category: 'communication',
  searchTerms: [
    'toddler not following commands',
    'toddler not following directions',
    'toddler doesn\'t listen',
    'toddler ignores instructions',
    'toddler doesn\'t understand commands',
    'toddler not following simple instructions',
    'baby not following directions',
    'toddler won\'t do what I say',
    'child not listening to instructions',
    'toddler doesn\'t understand me',
    'receptive language delay toddler',
  ],
  quickAnswer:
    'Following simple commands  -  like "bring me the ball" or "put it in the box"  -  relies on receptive language, which is the ability to understand what\'s being said. Most babies begin following simple one-step commands around 12 months. Sometimes what looks like not following directions is actually normal toddler independence, but genuine difficulty understanding language should be evaluated.',
  byAge: [
    {
      ageRange: '8-12 months',
      context:
        'Babies begin to understand simple commands around 9-12 months, especially familiar routines. Your baby might respond to "wave bye-bye" or "give me that" when paired with gestures. At this age, understanding comes before following  -  your baby may clearly understand what you\'re saying but not consistently act on it yet.',
    },
    {
      ageRange: '12-18 months',
      context:
        'By 12-15 months, most babies can follow simple one-step commands without needing you to gesture along ("go get your shoes"). By 18 months, they should be following several routine commands. If your baby isn\'t following any simple directions by 18 months  -  especially if they also don\'t seem to understand words like "no" or their name  -  a hearing check and developmental evaluation are recommended.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers at this age should be able to follow one-step and some two-step commands ("pick up the ball and bring it to me"). Remember that choosing not to follow a command is very different from not understanding it  -  if your toddler clearly understands but asserts their independence by saying "no," that\'s actually a healthy sign of both language development and autonomy.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By age 2-3, children typically follow two-step commands and understand simple questions. If your child consistently can\'t follow simple directions, seems confused by basic instructions, or doesn\'t understand common words, a speech-language evaluation focusing on receptive language is important. Receptive language delays are less common than expressive delays but benefit greatly from early intervention.',
    },
  ],
  whenNormal: [
    'Your toddler clearly understands your commands but chooses not to follow them  -  defiance and independence are a healthy (if frustrating) part of toddler development.',
    'Your toddler follows commands in familiar contexts (like "time for bath") but not novel ones  -  they\'re relying on routine cues, which is age-appropriate.',
    'Your toddler is distracted or busy playing and doesn\'t respond to commands given from across the room  -  try getting their attention first with their name.',
    'Your toddler follows some commands but not multi-step ones yet  -  two-step commands are harder and develop later.',
  ],
  whenToMention: [
    'Your baby is over 12 months and doesn\'t seem to understand any words  -  they don\'t look at named objects or respond to familiar phrases.',
    'Your toddler is 18 months or older and can\'t follow any simple one-step commands, even in familiar routines.',
    'Your toddler seems to understand less than other children their age and frequently looks confused by simple language.',
    'Your toddler relies heavily on visual cues and gestures and can\'t follow verbal-only instructions.',
  ],
  whenToActNow: [
    'Your toddler doesn\'t respond to their name, doesn\'t seem to understand any language, and you suspect they may not be hearing well  -  a hearing evaluation should be the first step.',
    'Your toddler was following commands and has stopped understanding language they previously understood  -  any regression in comprehension warrants urgent evaluation.',
  ],
  relatedMilestones: [
    'language-receptive',
    'language-first-words',
    'hearing',
    'social-emotional-joint-attention',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Language Development: Understanding and Being Understood. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-2-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By 18 Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-18mo.html',
    },
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Receptive Language Disorders.',
      url: 'https://www.asha.org/public/speech/disorders/receptive-language-disorders/',
    },
  ],
};
