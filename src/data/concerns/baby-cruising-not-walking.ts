import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-cruising-not-walking',
  title: 'My Baby Cruises but Won\'t Let Go and Walk',
  category: 'physical',
  searchTerms: [
    'baby cruising but not walking',
    'baby won\'t let go of furniture',
    'baby cruises but won\'t walk',
    'how long between cruising and walking',
    'baby holds onto everything won\'t walk',
    'cruising to walking timeline',
    'baby afraid to let go and walk',
    'encouraging baby to walk from cruising',
    'baby cruises for months',
    'baby won\'t take independent steps',
  ],
  quickAnswer:
    'The time between cruising and independent walking varies enormously, from a few days to several months. Most babies cruise for 1-3 months before walking independently. Cruising shows your baby has the strength and balance foundations for walking - they just need to build the confidence to let go. This transition period is completely normal.',
  byAge: [
    {
      ageRange: '9-11 months',
      context:
        'If your baby just started cruising, independent walking may still be weeks or months away, and that is perfectly normal. Your baby is building leg strength, balance, and confidence. Enjoy this stage and let your baby develop at their own pace. Most babies who start cruising at this age walk independently by 12-15 months.',
    },
    {
      ageRange: '11-13 months',
      context:
        'Many babies cruise for several months before taking independent steps. If your baby is confidently cruising, transferring between furniture, and perhaps standing independently for a few seconds, walking is likely coming soon. Some babies need more time to build confidence, especially if they have had a fall that scared them.',
    },
    {
      ageRange: '13-15 months',
      context:
        'If your baby has been cruising for a while but still will not let go, they may simply be cautious. Some babies are more risk-averse and want to be very sure of their balance before letting go. Try creating opportunities by placing furniture close together so your baby can take one or two steps between pieces. This builds confidence gradually.',
    },
    {
      ageRange: '15-18 months',
      context:
        'Most babies are walking independently by 15-18 months. If your baby is still exclusively cruising at this age, mention it to your pediatrician. They may want to observe your baby\'s movement patterns and check that there are no issues with balance, muscle tone, or foot alignment. Most babies in this situation just need a little more time or encouragement.',
    },
  ],
  whenNormal: [
    'Your baby is under 15 months and actively cruising along furniture.',
    'Your baby can stand independently for a few seconds at a time.',
    'Your baby sometimes lets go and takes one or two steps before grabbing onto something.',
    'Your baby is confident in their cruising and can transfer between furniture pieces.',
  ],
  whenToMention: [
    'Your baby is over 15 months and will not take any independent steps.',
    'Your baby seems to have balance difficulties even while cruising.',
    'Your baby will only cruise in one direction or seems unsteady on one side.',
  ],
  whenToActNow: [
    'Your baby was walking independently and has gone back to only cruising.',
    'Your baby seems to have leg weakness or pain when standing or cruising.',
  ],
  relatedMilestones: [
    'gross-motor-cruising',
    'gross-motor-walking',
    'gross-motor-standing',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-walking', 'not-cruising', 'baby-walking-late-18-months'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Baby\'s First Steps',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Steps.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Child By 18 Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
    {
      org: 'WHO',
      citation:
        'WHO Motor Development Study: Walking alone achieved between 8.2 and 17.6 months',
      url: 'https://www.who.int/publications/i/item/WHO-TRS-2006-450',
    },
  ],
};
