import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'delayed-receptive-language',
  title: 'Delayed Receptive Language',
  category: 'communication',
  searchTerms: [
    'delayed receptive language',
    'child not understanding words',
    'toddler doesn\'t understand what I say',
    'receptive language delay toddler',
    'child can\'t follow instructions',
    'toddler not understanding language',
    'baby doesn\'t understand words',
    'expressive vs receptive language delay',
    'child doesn\'t comprehend language',
    'toddler seems confused by words',
    'receptive language milestones',
  ],
  quickAnswer:
    'Receptive language is your child\'s ability to understand what they hear. Most children understand far more words than they can say. If your child seems to have trouble understanding language - not just speaking it - that\'s an important concern to address early. Receptive language delays can be harder to spot than expressive delays, but they respond well to speech therapy, especially when caught early.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'By 6 to 12 months, babies should understand some common words and phrases. They typically respond to "no," recognize their name, follow your gaze to look at things, and understand simple routines like "want up?" with arms raised. If your baby doesn\'t seem to understand any words or respond to simple verbal cues by 12 months, check their hearing first - this is the most common treatable cause.',
    },
    {
      ageRange: '12-18 months',
      context:
        'At this age, children should understand 50 or more words, follow simple one-step commands ("give me the cup"), and point to familiar objects or body parts when asked. If your toddler seems confused by simple requests that other children their age can follow, or doesn\'t seem to understand common words, a speech-language evaluation is a good idea.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Between 18 and 24 months, receptive language grows rapidly. Your child should understand simple questions, follow two-step directions, and identify many common objects and pictures. If your toddler consistently doesn\'t understand what you\'re saying - even when you simplify your language and use gestures - this is more concerning than just having few spoken words. Receptive delays need attention.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, children should understand concepts like "in," "on," "under," answer simple "what" and "where" questions, and follow two-step directions. If your child has trouble understanding age-appropriate language - often looking confused, not following directions that peers can handle, or needing everything repeated multiple times - a comprehensive speech and language evaluation is important.',
    },
    {
      ageRange: '3+ years',
      context:
        'After age 3, children should understand most of what is said to them in everyday situations, follow multi-step directions, and understand basic stories. Receptive language delays at this age can affect learning, social relationships, and behavior (children sometimes act out because they can\'t understand what\'s expected of them). Speech therapy can make a significant difference.',
    },
  ],
  whenNormal: [
    'Your child understands language well but doesn\'t speak much - this is an expressive delay, not a receptive one, and has a better prognosis.',
    'Your toddler ignores you when you ask them to do something they don\'t want to do - this is defiance, not a comprehension issue, and is age-appropriate.',
    'Your child follows directions at home where routines are familiar but struggles with new or unfamiliar instructions - context-dependent understanding is normal in young children.',
    'Your baby is under 9 months and doesn\'t follow verbal commands yet - receptive language is still emerging.',
  ],
  whenToMention: [
    'Your child is 12 months or older and doesn\'t seem to understand common words like "no," "bottle," "mama," or "bye-bye."',
    'Your child is 18 months or older and can\'t follow simple one-step directions, even with gestures.',
    'Your child has both limited understanding and limited speaking - combined receptive and expressive delays are more concerning than expressive delays alone.',
  ],
  whenToActNow: [
    'Your child seems to not understand any spoken language at any age past 12 months - even common words, their name, or "no" - hearing must be tested and a full evaluation started immediately.',
    'Your child previously understood language and has stopped comprehending - any loss of comprehension is an emergency and requires immediate evaluation.',
  ],
  relatedMilestones: [
    'language-responds-to-name',
    'language-follows-directions',
    'social-emotional-communicates-needs',
    'language-vocabulary-growth',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Delay in Toddlers: Information for Parents',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By Two Years',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
