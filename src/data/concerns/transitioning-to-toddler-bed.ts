import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'transitioning-to-toddler-bed',
  title: 'Transitioning to Toddler Bed',
  category: 'sleep',
  searchTerms: [
    'transitioning to toddler bed',
    'when to move toddler to bed',
    'crib to bed transition',
    'toddler bed age',
    'toddler won\'t stay in bed',
    'toddler bed transition tips',
    'how to switch from crib to bed',
    'toddler keeps getting out of bed',
    'best age for toddler bed',
    'toddler bed safety',
  ],
  quickAnswer:
    'Most children transition from crib to toddler bed between 18 months and 3 years. There is no rush unless safety demands it (like climbing out). Keeping the bedtime routine the same and childproofing the room thoroughly will help your toddler adjust, usually within 1-3 weeks.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Transitioning this early is usually prompted by crib climbing or the arrival of a new sibling. At this age, toddlers may not fully understand the concept of staying in bed, so room safety is paramount. Use a bed rail, put the mattress low or on the floor, and use a baby gate at the door. Keep the bedtime routine identical to what they had in the crib.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is the most common and often smoothest age for the transition. Your child can better understand rules like "stay in your bed." Involve them in the process by letting them pick out new sheets or a special stuffed animal for their "big kid bed." Use positive reinforcement and be patient with the inevitable test nights where they get out repeatedly.',
    },
    {
      ageRange: '3+ years',
      context:
        'If your child is still happy and safe in the crib at 3, there is no problem with that. When you do transition, older toddlers often adapt quickly because they understand the expectations. Sticker charts and small rewards for staying in bed can be effective motivators at this age.',
    },
  ],
  whenNormal: [
    'Your toddler gets out of bed multiple times in the first 1-2 weeks',
    'Bedtime takes a bit longer during the transition period',
    'Your child seems excited or anxious about the new bed for a few nights',
    'Occasional middle-of-the-night wandering to your room during the adjustment',
    'Your toddler naps less well in the new bed at first but adjusts within a week or two',
  ],
  whenToMention: [
    'Your toddler has persistent sleep difficulties lasting more than 3-4 weeks after the transition with no improvement',
    'Your child shows significant anxiety or fear about the new sleeping arrangement that does not lessen with reassurance',
  ],
  whenToActNow: [
    'Your toddler falls from the bed and has signs of a head injury such as vomiting, confusion, or excessive sleepiness',
    'Your child is getting into dangerous areas of the house at night because they can now leave their room freely',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Transitioning Your Toddler from a Crib to a Bed. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Transitioning-To-A-Toddler-Bed.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Make Baby\'s Room Safe. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Make-Babys-Room-Safe.aspx',
    },
  ],
};
