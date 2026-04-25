import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'rolling-in-sleep',
  title: 'Baby Rolling Over in Sleep',
  category: 'sleep',
  searchTerms: [
    'baby rolling over in sleep',
    'baby rolls onto tummy at night',
    'is it safe for baby to sleep on stomach',
    'baby sleeping face down',
    'should I flip baby back over at night',
    'baby rolls in crib',
    'baby rolls to tummy and wakes up crying',
    'when is it safe for baby to sleep on stomach',
    'baby rolling in sleep SIDS risk',
    'baby started rolling at night',
  ],
  quickAnswer:
    'Once your baby can roll from back to tummy and tummy to back on their own, it is safe to let them sleep in whatever position they choose. You should always place your baby on their back to start sleep, but you do not need to reposition them if they roll over during the night.',
  byAge: [
    {
      ageRange: '2-4 months',
      context:
        'Some babies begin rolling as early as 2-3 months. If your baby has started rolling back to tummy but cannot yet roll tummy to back, continue placing them on their back. If they roll to their tummy during sleep, the AAP advises you can leave them if they got there on their own, but make sure the sleep surface is firm and clear of any loose bedding, bumpers, or soft objects.',
    },
    {
      ageRange: '4-6 months',
      context:
        'This is when most babies master rolling in both directions. Once your baby can roll both ways, the risk of positional problems during sleep decreases significantly. This is also the time to stop swaddling (once any signs of rolling appear), because having free arms is essential for your baby to reposition and lift their head if they end up face down.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Rolling, spinning, and scooting around the crib are all normal at this age. Many babies are active sleepers and may end up in every corner of the crib during the night. As long as the crib is bare (no blankets, pillows, or bumpers) and the mattress is firm, this movement is safe and actually shows good motor development.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By now, your baby has strong head and neck control and can reposition freely. You may find your baby prefers to sleep on their tummy or side  -  this is perfectly fine at this stage. Continue to start each sleep on their back, and let them find their preferred position on their own.',
    },
  ],
  whenNormal: [
    'Your baby rolls to their tummy during sleep and seems comfortable and is breathing normally',
    'Your baby can lift and turn their head freely while on their tummy',
    'Your baby rolls in both directions (back to tummy and tummy to back)',
    'Your baby wakes briefly after rolling but settles back to sleep',
    'Your baby moves around the crib but sleeps soundly in various positions',
  ],
  whenToMention: [
    'Your baby rolls to their tummy but cannot yet roll back, and consistently wakes up crying and unable to reposition',
    'Your baby seems to prefer sleeping face-down pressed into the mattress rather than turning their head to the side',
    'You notice your baby seems to have difficulty breathing or makes unusual sounds when on their tummy',
    'Your baby has low muscle tone or a neuromuscular condition that may affect their ability to reposition',
  ],
  whenToActNow: [
    'Your baby is in a sleep space with soft bedding, pillows, bumpers, or stuffed animals that could obstruct breathing when they roll  -  remove these items immediately',
    'Your baby is still being swaddled with arms restrained and has started showing signs of rolling  -  stop swaddling immediately, as free arms are critical for safety',
    'Your baby rolls to their tummy and appears to have difficulty breathing, turns blue or pale, or becomes limp',
  ],
  relatedMilestones: [
    'gross-motor-rolling',
    'head-control',
    'gross-motor-tummy-time',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep: Recommendations for Reducing Infant Deaths. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Keep Your Sleeping Baby Safe. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Safe Sleep for Babies.',
      url: 'https://www.cdc.gov/sids/about/index.html',
    },
  ],
};
