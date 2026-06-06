import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-climbing-crib-rails',
  title: 'Baby Trying to Climb Out of the Crib',
  category: 'sleep',
  searchTerms: [
    'baby climbing out of crib',
    'baby climbing crib rails',
    'crib climbing safety',
    'baby trying to escape crib',
    'when baby climbs crib',
    'baby climbing over crib rail',
    'preventing baby from climbing crib',
    'baby fell out of crib climbing',
    'crib safety climbing',
    'is baby climbing crib dangerous',
  ],
  quickAnswer:
    'Climbing out of the crib is a safety concern that typically begins between 18-36 months. Once your child can get a leg over the top rail even with the mattress at its lowest setting, it is time to transition to a toddler bed. Until then, lower the mattress, remove objects that provide a step-up, and consider a sleep sack to limit leg movement.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Crib climbing at this age is uncommon but can happen with especially active or tall babies. Immediately lower the mattress to the lowest position. Remove bumpers, stuffed animals, or anything that could serve as a step. A wearable blanket can help limit the leg lift needed to climb. At this age, keep your baby in the crib if possible since they are not yet developmentally ready for the freedom of a toddler bed.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is when climbing attempts become more common. If your child can swing a leg over the rail even with the mattress at its lowest, transitioning to a toddler bed is safer than risking a fall. Some parents try turning the crib so the lower rail faces the wall, but this is a temporary solution. When you transition, place the mattress on the floor initially and childproof the entire room.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Most children transition out of the crib between 2-3 years. If your child has not attempted climbing, there is no rush to switch. Children generally do better in a toddler bed when they are closer to 3, as they have better impulse control. If climbing forces an early transition, expect some adjustment with your child getting out of bed repeatedly. Consistent, calm returns to bed are the most effective response.',
    },
    {
      ageRange: '3+ years',
      context:
        'If your child is still in a crib at age 3 and comfortable, that is perfectly fine. Most children transition to a bed by this age. If climbing continues in a toddler bed (climbing on furniture, attempting windows), ensure the room is fully childproofed with anchored furniture and window locks.',
    },
  ],
  whenNormal: [
    'Your toddler between 18 months and 3 years shows interest in climbing out of the crib',
    'Climbing attempts coincide with increased motor skills and desire for independence',
    'Your child attempts to climb but has not successfully gotten over the rail yet',
  ],
  whenToMention: [
    'Your child has fallen or nearly fallen out of the crib and you need guidance on safe transition timing',
    'Your child under 18 months is climbing out and you are unsure about transitioning to a bed so young',
    'After transitioning, your child gets out of bed excessively causing significant sleep disruption',
  ],
  whenToActNow: [
    'Your child falls out of the crib and hits their head or shows signs of injury such as vomiting, confusion, or excessive sleepiness',
    'Your child can climb out and the room is not childproofed, creating fall or entrapment risks',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Make Baby\'s Room Safe. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Make-Babys-Room-Safe.aspx',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Crib Safety Tips.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Cribs',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Transitioning to a Toddler Bed. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx',
    },
  ],
  relatedConcernSlugs: ['toddler-climbing-out-of-crib', 'crib-to-toddler-bed-transition'],
};
