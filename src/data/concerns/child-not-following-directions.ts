import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'child-not-following-directions',
  title: 'Child Not Following Simple Directions',
  category: 'communication',
  searchTerms: [
    'toddler not following directions',
    'child doesn\'t listen to instructions',
    'toddler ignoring commands',
    'toddler not understanding directions',
    'child won\'t follow simple instructions',
    'toddler doesn\'t do what I ask',
    'my toddler ignores me',
    'toddler not listening',
    'is my child not understanding or not listening',
    'receptive language delay toddler',
    'toddler can\'t follow one step direction',
  ],
  quickAnswer:
    'It can be hard to tell whether a toddler isn\'t following directions because they don\'t understand, or because they simply choose not to. Most toddlers can follow simple one-step directions like "give me the ball" by 12 to 15 months, and two-step directions by age 2. If your child consistently seems confused by simple instructions (rather than defiant), it may point to a receptive language concern worth exploring.',
  byAge: [
    {
      ageRange: '9-12 months',
      context:
        'Around 9 to 12 months, babies start understanding simple words and short commands, especially when paired with gestures. Your baby might hand you something when you hold out your hand and say "give me," or look at an object you name. If they don\'t respond to any verbal cues yet, but respond to gestures and tone of voice, they\'re likely still developing comprehension skills.',
    },
    {
      ageRange: '12-18 months',
      context:
        'By 12 to 18 months, most toddlers can follow simple one-step directions like "go get your shoes" or "put it in the box," especially with context cues. They should also understand common words like "no," "more," and the names of familiar objects. If your child seems to have no idea what you\'re saying at this age, consider a hearing check and a speech evaluation.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Toddlers at this age should follow one-step directions without gestures and begin handling two-step directions like "pick up the cup and put it on the table." They should also point to body parts and familiar objects when asked. If your toddler consistently can\'t follow simple requests - not won\'t, but genuinely can\'t - that\'s worth mentioning to your pediatrician.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2-3, children should understand and follow two-step directions, understand basic concepts like "in," "on," and "under," and respond to simple questions. If your child routinely seems lost when given instructions that peers can handle, a receptive language evaluation can help. Receptive language delays are just as important to address as expressive delays, and they respond well to therapy.',
    },
  ],
  whenNormal: [
    'Your toddler understands directions perfectly well but sometimes chooses not to follow them - especially when the answer is "no" or when they\'re absorbed in play.',
    'Your toddler follows directions that come with gestures (like pointing) but not purely verbal commands yet - gesture-supported comprehension comes before verbal-only comprehension.',
    'Your toddler follows familiar routines and instructions but gets confused by new or unfamiliar requests - routine-based understanding is typical at this age.',
    'Your toddler is under 15 months and doesn\'t follow verbal directions consistently yet - this skill is still developing.',
  ],
  whenToMention: [
    'Your child is 18 months or older and can\'t follow simple one-step directions even with gestures and context.',
    'Your child doesn\'t seem to understand common words like "no," names of family members, or names of everyday objects.',
    'Your child follows directions in one setting but never in another - inconsistency can sometimes point to hearing issues.',
  ],
  whenToActNow: [
    'Your child seems to not understand any language at all - doesn\'t respond to their name, familiar words, or simple directions at any age past 12 months - hearing and developmental evaluation are needed.',
    'Your child previously understood and followed directions but has stopped doing so - any loss of comprehension should be evaluated immediately.',
  ],
  relatedMilestones: [
    'language-responds-to-name',
    'language-follows-directions',
    'social-emotional-communicates-needs',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Development: 1 to 2 Year Olds',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Development-1-to-2-Year-Olds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 18 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Speech and Language Developmental Milestones',
      url: 'https://www.nidcd.nih.gov/health/speech-and-language',
    },
  ],
};
