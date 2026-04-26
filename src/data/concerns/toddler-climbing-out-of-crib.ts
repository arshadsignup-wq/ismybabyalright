import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-climbing-out-of-crib',
  title: 'Toddler Climbing Out of Crib',
  category: 'sleep',
  searchTerms: [
    'toddler climbing out of crib',
    'baby escaping crib',
    'toddler jumping out of crib',
    'when to switch from crib to bed',
    'crib climbing dangerous',
    'how to keep toddler in crib',
    'toddler crib safety',
    'child fell out of crib',
    'toddler scaling crib rails',
    'crib tent safe',
  ],
  quickAnswer:
    'Once your toddler can climb out of the crib, it is a safety concern that needs addressing promptly. Most children start attempting this between 18-36 months. Lowering the mattress to the lowest setting is the first step, but if climbing continues, transitioning to a toddler bed or floor mattress is the safest option.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Crib climbing at this age is less common but possible in very active, physically advanced babies. Make sure the crib mattress is at the lowest setting and remove any bumpers, pillows, or stuffed animals that could be used as a step. A sleep sack can also limit climbing ability at this age since it restricts leg movement.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This is when many toddlers first attempt to climb out. Their growing leg strength and problem-solving skills make it an appealing challenge. Try turning the crib around if one side is higher, use a wearable blanket to limit leg lift, and keep the room safe in case they succeed. If climbing persists, it may be time to transition.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By 2-3 years, most persistent climbers need to move to a toddler bed or a mattress on the floor. This is normal and appropriate. Use a toddler rail for the first few weeks, childproof the entire room thoroughly, and use a doorknob cover or baby gate at the bedroom door to keep your child safely in their room at night.',
    },
  ],
  whenNormal: [
    'Your toddler tries to climb out once or twice and is deterred by a lower mattress setting',
    'Climbing attempts start during a developmental leap when your child is mastering new physical skills',
    'Your child adjusts to a toddler bed within 1-2 weeks with consistent boundaries',
    'Occasional out-of-bed wandering in the first weeks after the transition',
  ],
  whenToMention: [
    'Your toddler has fallen from the crib and you are concerned about injury even if they seem fine',
    'You are struggling with the transition to a toddler bed and your child is getting very little sleep as a result',
  ],
  whenToActNow: [
    'Your child falls from the crib and shows signs of a head injury such as vomiting, excessive sleepiness, unequal pupils, or loss of consciousness',
    'Your child has a visible injury like swelling, bruising, or inability to move a limb after a fall',
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
        'U.S. Consumer Product Safety Commission. Safe Sleep - Cribs and Infant Products.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/cribs',
    },
  ],
};
