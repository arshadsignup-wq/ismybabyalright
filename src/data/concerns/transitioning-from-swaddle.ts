import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'transitioning-from-swaddle',
  title: 'Transitioning from Swaddle',
  category: 'sleep',
  searchTerms: [
    'transitioning from swaddle',
    'when to stop swaddling baby',
    'baby rolling in swaddle',
    'how to wean from swaddle',
    'swaddle transition',
    'baby won\'t sleep without swaddle',
    'stop swaddling cold turkey',
    'swaddle to sleep sack',
    'arms out swaddle',
    'swaddle weaning tips',
  ],
  quickAnswer:
    'Transitioning out of the swaddle is a necessary step once your baby starts showing signs of rolling, typically around 2-4 months. While the first few nights can be bumpy, most babies adjust within 1-2 weeks. Using a transitional sleep sack with arms free can make the change smoother.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Swaddling is generally safe and beneficial for newborns. The snug wrap mimics the womb and helps reduce the startle (Moro) reflex that can wake babies. There is usually no need to transition yet unless your baby consistently breaks free or shows signs of discomfort in the swaddle.',
    },
    {
      ageRange: '2-4 months',
      context:
        'This is the most common window for swaddle transition. Once your baby shows any sign of rolling - even just to the side - it is time to stop swaddling for safety. You can try a gradual approach (one arm out for a few nights, then both) or switch directly to a wearable blanket. Expect some disruption for 3-7 nights as your baby adjusts.',
    },
    {
      ageRange: '4-6 months',
      context:
        'If your baby is still swaddled at this age and rolling, transition immediately. Babies who are rolling must have their arms free to push up and reposition. A sleep sack without arm restraints is a safe alternative that still provides a cozy, secure feeling without restricting movement.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, most babies are well past the swaddle stage. If your baby still seems to need that contained feeling, a fitted sleep sack is a great option. These allow full arm and hip movement while providing warmth and comfort through the night.',
    },
  ],
  whenNormal: [
    'Baby sleeps a bit less or wakes more frequently for the first 3-7 nights after stopping the swaddle',
    'Baby startles and wakes themselves occasionally as they adjust to having arms free',
    'Baby takes slightly longer to settle at bedtime during the transition period',
    'Baby bats at their face a bit when first sleeping with arms free',
  ],
  whenToMention: [
    'Baby is still unable to sleep after 2 or more weeks without the swaddle and you are both severely sleep deprived',
    'Baby seems to have persistent difficulty with arm movements or positioning during sleep that concerns you',
  ],
  whenToActNow: [
    'Baby is rolling while still being swaddled with arms restrained - stop swaddling immediately',
    'Baby shows signs of respiratory distress, bluish skin, or overheating at any time during sleep',
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
        'American Academy of Pediatrics. Swaddling: Is It Safe? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Swaddling-Is-it-Safe.aspx',
    },
  ],
};
