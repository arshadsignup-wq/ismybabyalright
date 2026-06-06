import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-bed-falling-out',
  title: 'Toddler Keeps Falling Out of Bed',
  category: 'sleep',
  searchTerms: [
    'toddler falling out of bed',
    'child falls out of bed at night',
    'toddler rolls off bed',
    'bed rail toddler',
    'toddler bed guard',
    'child fell out of bed',
    'preventing toddler from falling out of bed',
    'toddler bed safety',
    'toddler rolling off mattress',
    'when to use bed rails',
  ],
  quickAnswer:
    'Falling out of bed is common when toddlers first transition from a crib and can continue into preschool age. Most falls result in a startled, crying child but no injury. Using bed rails, placing the mattress on the floor, or adding cushioning beside the bed can prevent falls while your child adjusts.',
  byAge: [
    {
      ageRange: '18-24 months',
      context:
        'Falls are most common at this age because body awareness during sleep is still developing. The safest option is placing the mattress directly on the floor. If using a bed frame, mesh bed rails on both sides provide the most protection. Keep the floor beside the bed clear of hard toys and consider placing a soft rug alongside the bed as extra cushioning.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Bed falls are still common, especially during active sleep or when children are overtired and sleep more restlessly. Pool noodles placed under the fitted sheet along the bed edges can create a subtle bumper. Continue using bed rails if needed - there is no age at which your child must outgrow them.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Most children have fewer falls by this age as body awareness during sleep improves. If falls are still frequent, ensure your child is not overtired (which causes more restless sleep) and that the bed is not too high. A body pillow along the edge can serve as a gentle barrier.',
    },
    {
      ageRange: '4-5 years',
      context:
        'Occasional falls may happen but should be infrequent. If your child is falling out regularly, consider whether sleep quality could be a factor. Children with sleep-disordered breathing often have more restless sleep and may fall more often. Mention frequent falls to your pediatrician.',
    },
  ],
  whenNormal: [
    'Your toddler falls out of bed occasionally, especially in the first months after leaving the crib',
    'Falls happen during restless nights, illness, or overtired nights',
    'Your child wakes up, cries briefly, and returns to sleep without injury',
    'Falls decrease over time as your child adjusts to sleeping in a bed',
  ],
  whenToMention: [
    'Your child falls out of bed more than once a week despite using safety measures',
    'Falls are accompanied by unusual movements, twitching, or behaviors suggesting a sleep disturbance',
    'Your child over 5 regularly falls out of bed',
  ],
  whenToActNow: [
    'Your child falls and hits their head, showing signs of concussion such as vomiting, confusion, or excessive sleepiness',
    'Your child is injured and you are concerned about broken bones or significant bruising',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bed Safety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/default.aspx',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Toddler Bed Safety.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Toddler-Beds',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Transitioning to a Toddler Bed. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx',
    },
  ],
  relatedConcernSlugs: ['crib-to-toddler-bed-transition', 'baby-restless-sleep-tossing'],
};
