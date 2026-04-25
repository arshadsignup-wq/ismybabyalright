import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'no-joint-attention',
  title: 'Baby Not Sharing Attention (No Joint Attention)',
  category: 'communication',
  searchTerms: [
    'baby not sharing attention',
    'no joint attention baby',
    'baby doesn\'t look where I point',
    'baby won\'t share interest',
    'baby doesn\'t show me things',
    'baby not following my gaze',
    'baby doesn\'t point to show me',
    'joint attention autism',
    'baby not engaging with me',
    'baby doesn\'t look at what I look at',
    'baby not sharing enjoyment',
  ],
  quickAnswer:
    'Joint attention  -  the ability to share focus on something with another person  -  is one of the most important social-communication skills that develops between 9 and 14 months. It includes following someone\'s point or gaze, pointing to show you something interesting, and looking back and forth between you and an object. This skill is the foundation for language learning and social development.',
  byAge: [
    {
      ageRange: '6-9 months',
      context:
        'Early joint attention skills begin developing during this period. Your baby may start following your gaze to look at what you\'re looking at, and they may begin to look back and forth between an interesting object and your face  -  as if to check that you\'re seeing it too. These skills are just emerging and may be inconsistent.',
    },
    {
      ageRange: '9-12 months',
      context:
        'This is when joint attention skills typically become clear. Your baby should be following your point (looking at what you\'re pointing at, not just at your finger), and they should be starting to point themselves  -  both to request things and to share interest. They may hold up a toy to show you or look at you and smile when something exciting happens. These shared moments are how children learn language.',
    },
    {
      ageRange: '12-15 months',
      context:
        'By 12 months, joint attention should be well established. Your baby should be pointing to show you things regularly, following your point and gaze reliably, and bringing objects to share with you. Limited joint attention at this age  -  especially if combined with limited eye contact and few gestures  -  is one of the earliest and most reliable indicators that a developmental evaluation may be beneficial.',
    },
    {
      ageRange: '15-18 months',
      context:
        'At this age, joint attention skills support rapid language learning  -  children learn new words fastest when a caregiver names what the child is already looking at. If your child rarely shares attention with you, doesn\'t point to show interest, and doesn\'t follow your point or gaze, a comprehensive developmental evaluation is strongly recommended.',
    },
  ],
  whenNormal: [
    'Your baby is under 9 months  -  joint attention skills are just beginning to emerge and may be subtle or inconsistent.',
    'Your baby follows your point sometimes but not always, especially in busy or distracting environments.',
    'Your baby shares attention with familiar people but is more reserved with strangers  -  this is a temperament difference, not a joint attention deficit.',
    'Your baby is more interested in exploring objects independently during focused play but readily shares attention during social games like peekaboo.',
  ],
  whenToMention: [
    'Your baby is over 12 months and doesn\'t follow your point  -  they look at your hand instead of where you\'re pointing, or don\'t look at all.',
    'Your baby doesn\'t point to show you things by 12-14 months  -  they may point to request but never to share interest.',
    'Your baby doesn\'t look back at you to share enjoyment  -  when something exciting happens, they don\'t check in with your face.',
    'Your baby rarely brings objects to show you or share with you.',
  ],
  whenToActNow: [
    'Your baby is over 12 months and shows limited joint attention combined with limited eye contact, no pointing, no gesturing, and doesn\'t respond to their name  -  this pattern should be evaluated promptly.',
    'Your baby previously shared attention and has stopped  -  regression in social-communication skills is always a reason for urgent evaluation.',
  ],
  relatedMilestones: [
    'social-emotional-joint-attention',
    'pointing',
    'language-first-words',
    'social-emotional-self-expression',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. What Are the Early Signs of Autism? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/Early-Signs-of-Autism-Spectrum-Disorders.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Twelve Months.',
      url: 'https://www.cdc.gov/ActEarly/Milestones/milestones-12mo.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Joint Attention and Language Development.',
      url: 'https://www.nichd.nih.gov/',
    },
  ],
};
