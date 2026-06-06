import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'crib-to-toddler-bed-transition',
  title: 'When and How to Switch to a Toddler Bed',
  category: 'sleep',
  searchTerms: [
    'crib to toddler bed transition',
    'when to switch to toddler bed',
    'toddler bed transition tips',
    'moving from crib to bed',
    'toddler bed readiness signs',
    'crib to bed age',
    'transitioning out of crib',
    'toddler bed or twin bed',
    'crib to bed sleep problems',
    'when is child ready for bed',
  ],
  quickAnswer:
    'Most children transition from a crib to a toddler bed between ages 2 and 3.5. The main reasons to switch are safety (climbing out of the crib) or practical need (a new baby needs the crib). If your child is sleeping well and not climbing out, there is no rush. Children who transition closer to age 3 often adjust more easily due to better impulse control.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Most sleep experts recommend keeping children in a crib as long as safely possible, ideally until at least age 2. If climbing forces an early transition, keep the sleep environment as similar to the crib as possible. Childproof the room thoroughly. A mattress on the floor is the safest option for young toddlers who may roll off a raised bed.',
    },
    {
      ageRange: '2-2.5 years',
      context:
        'This is a common transition age. If you need to free the crib for a new baby, make the transition at least 2-3 months before or after the arrival so your toddler does not feel displaced. Let your toddler be involved in choosing new bedding to build excitement. Maintain the exact same bedtime routine to provide continuity.',
    },
    {
      ageRange: '2.5-3.5 years',
      context:
        'Many experts consider this the ideal age range because children have better impulse control and can understand rules like "stay in your bed until morning." Keep the bedtime routine identical. Some children transition smoothly while others test the new freedom extensively. Be patient and consistent - most children adjust within 1-3 weeks.',
    },
    {
      ageRange: '3.5+ years',
      context:
        'If your child is still in a crib and comfortable, waiting is fine. Some children prefer the crib until age 4. If potty training requires nighttime bathroom access, a bed transition may help. Your child is old enough to discuss the change and set expectations about staying in bed.',
    },
  ],
  whenNormal: [
    'Your child transitions smoothly with minimal sleep disruption',
    'Your child gets out of bed repeatedly in the first 1-3 weeks while testing new boundaries',
    'Your child initially resists and asks for the crib back - this is a normal adjustment reaction',
    'Sleep quality dips temporarily but returns to normal within a few weeks',
  ],
  whenToMention: [
    'The transition has caused severe sleep disruption lasting more than 4 weeks with no improvement',
    'Your child is getting out of bed and engaging in unsafe behaviors during the night',
    'Your child under 2 needs to transition due to climbing and you want guidance on the safest approach',
  ],
  whenToActNow: [
    'Your child is falling out of the bed and getting injured',
    'Your child is accessing dangerous areas of the home unsupervised at night',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Transitioning to a Toddler Bed. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Transitioning from Crib to Bed. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/children-and-sleep',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Make Baby\'s Room Safe. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Make-Babys-Room-Safe.aspx',
    },
  ],
  relatedConcernSlugs: ['baby-climbing-crib-rails', 'toddler-climbing-out-of-crib', 'toddler-getting-out-of-bed-repeatedly'],
};
