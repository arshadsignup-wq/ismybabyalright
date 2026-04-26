import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dropping-from-two-naps-to-one',
  title: 'Dropping from Two Naps to One',
  category: 'sleep',
  searchTerms: [
    'dropping from two naps to one',
    'when do babies drop to one nap',
    '2 to 1 nap transition',
    'toddler nap transition',
    'baby fighting second nap',
    'one nap schedule',
    'when to drop morning nap',
    'two to one nap transition age',
    'signs baby ready for one nap',
    'how to transition to one nap',
    'baby skipping second nap',
  ],
  quickAnswer:
    'Most babies transition from two naps to one between 12-18 months. Signs include consistently fighting or skipping the second nap, taking very long to fall asleep for naps, or bedtime becoming a battle. The transition usually takes 2-4 weeks and some crankiness is normal during the adjustment.',
  byAge: [
    {
      ageRange: '10-12 months',
      context:
        'Some babies flirt with dropping a nap around 10-12 months, but this is usually a false alarm caused by a developmental leap or the 12-month sleep regression. Most babies still need two naps at this age. If your baby occasionally refuses a nap, try offering it a bit later rather than dropping it entirely.',
    },
    {
      ageRange: '12-15 months',
      context:
        'This is the most common window for the 2-to-1 transition. Signs your baby is ready include: consistently fighting the second nap for 2 or more weeks, taking a long time to fall asleep at bedtime, or the second nap pushing bedtime too late. Start by gradually pushing the morning nap later by 15-30 minutes every few days until it lands around 12:30-1pm.',
    },
    {
      ageRange: '15-18 months',
      context:
        'If your baby is still on two naps and doing well, that is perfectly fine. Every child is different. However, if you are seeing consistent nap resistance, short second naps, or very late bedtimes, it is likely time to consolidate. The single nap should eventually land between 12:30-2:30pm for most toddlers.',
    },
    {
      ageRange: '18+ months',
      context:
        'By 18 months, most toddlers have fully transitioned to one nap. This single nap is usually 1.5-3 hours long. If your toddler is still struggling, ensure the nap is well-timed (not too early, not too late) and that bedtime moves earlier if needed. Some toddlers need a 6:30pm bedtime during the transition.',
    },
  ],
  whenNormal: [
    'Your toddler is cranky in the late afternoon during the transition and needs a slightly earlier bedtime',
    'Some days your child takes two naps and other days just one during the transition period',
    'The transition takes 2-4 weeks with some bumpy days',
    'Your child occasionally falls asleep in the car or stroller in the late afternoon during adjustment',
    'Bedtime moves temporarily earlier to compensate for lost daytime sleep',
  ],
  whenToMention: [
    'Your child seems chronically overtired for more than a month despite your best efforts to adjust the schedule',
    'Your toddler stops napping entirely before age 2 and seems exhausted',
  ],
  whenToActNow: [
    'Your child is so overtired they are having frequent accidents, falls, or are unable to eat or function normally',
    'Extreme mood changes or developmental regression that you suspect is related to severe sleep deprivation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Naps. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Naps.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Napping: Benefits and Tips. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/sleep-hygiene/napping',
    },
  ],
};
