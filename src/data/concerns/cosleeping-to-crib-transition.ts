import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cosleeping-to-crib-transition',
  title: 'Co-sleeping to Crib Transition',
  category: 'sleep',
  searchTerms: [
    'cosleeping to crib transition',
    'moving baby from bed to crib',
    'baby won\'t sleep in crib after co-sleeping',
    'how to stop co-sleeping',
    'transition from co-sleeping',
    'baby only sleeps in parents bed',
    'co-sleeping to own room',
    'bed sharing to crib',
    'when to move baby to own bed',
    'baby cries in crib after co-sleeping',
  ],
  quickAnswer:
    'Transitioning from co-sleeping to a crib is a common journey that many families navigate. Whether you are moving your baby for safety, sleep quality, or personal reasons, a gradual approach tends to work best. Most babies adjust within 1-3 weeks with patience and consistency, though some take a bit longer.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The AAP recommends room-sharing without bed-sharing for the first 6-12 months. If you have been co-sleeping and want to transition, place the crib or bassinet right next to your bed. Your baby can still hear and smell you, which provides comfort. Start with naps in the crib to build familiarity, then try nighttime.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is often a good window for transition because babies are old enough to sleep in longer stretches but have not yet developed strong separation anxiety. Try putting your baby down in the crib drowsy but awake. You can sit beside the crib and offer a reassuring hand on their chest. The crib should feel safe and familiar - use the same sleep sack and white noise.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Separation anxiety can make this transition trickier at this age. A very gradual approach works well - start by sleeping on a mattress beside the crib, then slowly move the mattress toward the door over several nights. Your baby will adjust to the crib as they feel your presence nearby. A lovey or comfort object (appropriate after 12 months) can help.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers who have co-slept may protest loudly, but they are also more capable of understanding changes. Involve them in setting up their sleep space - let them pick a stuffed animal or blanket. Stay in the room initially and gradually withdraw your presence. Be consistent even on tough nights, as going back to co-sleeping intermittently can make the transition harder.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Older toddlers can understand explanations about sleeping in their own bed. Use positive language and celebrate their bravery. Consider a sticker chart for motivation. It is okay to offer a "pass" that lets them come to your room one time per night if needed - this gives them a sense of control while maintaining boundaries.',
    },
  ],
  whenNormal: [
    'Your baby protests for several nights when first placed in the crib',
    'The transition takes 1-3 weeks with gradual improvement',
    'Your baby needs more comfort and reassurance during the transition period',
    'Some nights are better than others during the adjustment',
    'Your baby or toddler wakes more frequently at first but gradually adjusts',
  ],
  whenToMention: [
    'Your child has extreme, persistent distress about the crib that does not improve after 3-4 weeks of consistent effort',
    'The transition is causing significant stress for the whole family and you need support developing a plan',
  ],
  whenToActNow: [
    'If your baby is currently co-sleeping in an unsafe arrangement (soft bedding, couch, or with impaired adults) - transition to a safe sleep surface immediately',
    'Your child shows signs of severe anxiety like vomiting, hyperventilating, or self-harm when placed in the crib',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Keep Your Sleeping Baby Safe. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Room Sharing with Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Rooming-In-with-Your-Baby.aspx',
    },
  ],
};
