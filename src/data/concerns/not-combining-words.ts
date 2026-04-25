import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-combining-words',
  title: 'Toddler Not Combining Words into Phrases',
  category: 'communication',
  searchTerms: [
    'toddler not combining words',
    'toddler not putting words together',
    'toddler only says single words',
    'when do toddlers make sentences',
    'toddler not making phrases',
    '2 year old not putting words together',
    'toddler no two word phrases',
    'when should toddler combine words',
    'toddler speech only one word at a time',
    'two word combinations toddler',
  ],
  quickAnswer:
    'Most toddlers begin combining two words  -  like "more milk," "daddy go," or "big truck"  -  between 18 and 24 months. If your child has a vocabulary of at least 50 words and is close to 2 years old but not yet combining them, word combinations are probably just around the corner. If there are no two-word combinations by 24 months, a speech evaluation is recommended.',
  byAge: [
    {
      ageRange: '15-18 months',
      context:
        'Two-word combinations aren\'t expected yet for most toddlers. At this age, focus on vocabulary building  -  is your toddler adding new single words? Are they pointing and naming things? The foundation of single words needs to be solid before combinations emerge. Most toddlers need about 50 words before they start putting them together.',
    },
    {
      ageRange: '18-21 months',
      context:
        'Some early combiners start around 18-20 months, but many typically developing toddlers don\'t combine words until closer to 2 years. Early combinations are often formulaic  -  "more + [thing]," "all gone," or "[name] + action." Your toddler may experiment briefly with combinations before using them consistently.',
    },
    {
      ageRange: '21-24 months',
      context:
        'This is the typical window for word combinations to become regular. If your toddler has at least 50 single words, two-word phrases usually follow shortly. If your toddler has a very limited vocabulary (fewer than 50 words by 24 months), they may not have enough word "building blocks" yet to combine. Both the vocabulary size and the absence of combinations should be discussed with your pediatrician.',
    },
    {
      ageRange: '24-30 months',
      context:
        'By 24-30 months, most toddlers are using two-word phrases regularly and beginning to use three-word phrases. If your child isn\'t combining any words by 24 months, the CDC recommends a developmental screening. Speech-language therapy at this age is highly effective and can help your child bridge the gap to phrase-level language.',
    },
  ],
  whenNormal: [
    'Your toddler is under 21 months and using single words with a growing vocabulary  -  combinations typically come after a critical mass of about 50 words.',
    'Your toddler occasionally puts two words together but doesn\'t do it consistently yet  -  they\'re in the transitional phase.',
    'Your toddler uses gestures combined with words ("points at cookie + says more")  -  this gesture-word combination is a precursor to word-word combinations.',
    'Your toddler is bilingual and uses single words from both languages  -  they may combine words slightly later but are building vocabulary across both languages.',
  ],
  whenToMention: [
    'Your toddler is 24 months old and not combining any two words together.',
    'Your toddler has fewer than 50 words at 24 months  -  limited vocabulary often explains why combinations haven\'t emerged.',
    'Your toddler\'s vocabulary seems to have stopped growing  -  no new words for several weeks.',
    'Your toddler understands two-word phrases you say to them but can\'t produce them.',
  ],
  whenToActNow: [
    'Your toddler was combining words and has stopped  -  losing the ability to combine words is a type of regression that needs prompt evaluation.',
    'Your child is over 24 months with very few single words, no word combinations, and difficulty understanding simple language  -  this pattern suggests a more significant language delay that benefits from early intervention.',
  ],
  relatedMilestones: [
    'language-first-words',
    'language-two-word-phrases',
    'language-sentences',
    'language-receptive',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-2yr.html',
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
