import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-wont-sleep-in-crib',
  title: 'My Baby Won\'t Sleep in the Crib',
  category: 'sleep',
  searchTerms: [
    'baby won\'t sleep in crib',
    'baby cries when put in crib',
    'baby only sleeps on me not in crib',
    'how to get baby to sleep in crib',
    'baby wakes up as soon as put in crib',
    'newborn hates crib',
    'baby screams when put down in crib',
    'baby won\'t sleep flat',
    'baby refuses crib',
    'transitioning baby to crib',
  ],
  quickAnswer:
    'Many babies resist sleeping in their crib, especially in the early months. This is a normal preference rooted in biology  -  babies are wired to seek closeness with their caregiver. While safe sleep guidelines recommend a firm, flat sleep surface, the transition can take time and patience. Gradual approaches tend to work better than sudden changes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have just spent nine months in the warm, snug, and constantly moving environment of the womb. A flat, still, open crib can feel overwhelming by comparison. Swaddling (until your baby shows signs of rolling), white noise, and warming the crib sheet briefly before placing your baby down can help bridge the gap. The "drowsy but awake" approach can be introduced, though many newborns are not yet developmentally ready for it.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is often the most effective window for practicing crib sleep. Your baby\'s startle reflex is fading, circadian rhythms are maturing, and sleep cycles are becoming more organized. A consistent bedtime routine  -  the same 3-4 steps in the same order every night  -  signals to your baby that the crib means sleep. If your baby was previously sleeping in a bassinet, swing, or your arms, transitioning gradually (starting with one nap per day in the crib) can help.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Separation anxiety often peaks around 8-10 months, which can make crib sleeping harder even for babies who previously accepted it. At this age, object permanence is developing  -  your baby now understands you exist when you leave the room, and they may protest. Brief, consistent check-ins can reassure your baby while reinforcing that the crib is a safe place to sleep.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who resist the crib may be experiencing separation anxiety, boundary testing, or fear of missing out. Maintaining a firm and loving bedtime routine is key. If your toddler is climbing out of the crib, it may be time to transition to a toddler bed for safety. A visual bedtime routine chart and an "OK-to-wake" clock can be helpful tools at this stage.',
    },
  ],
  whenNormal: [
    'Your baby fusses for a few minutes when placed in the crib but eventually settles',
    'Your baby prefers being held but will sleep in the crib after a consistent bedtime routine',
    'Crib resistance increases around developmental milestones or when your baby is teething or ill',
    'Your baby is otherwise healthy, feeding well, and gaining weight appropriately',
  ],
  whenToMention: [
    'Your baby consistently screams inconsolably in the crib and only calms in an upright position, which could suggest reflux or another source of discomfort',
    'You are so exhausted from holding your baby during sleep that you are falling asleep in an unsafe position (on a couch, recliner, or with pillows and blankets)',
    'Your baby seems to have difficulty breathing when lying flat in the crib',
  ],
  whenToActNow: [
    'Your baby is in respiratory distress  -  flared nostrils, rib retractions, or blue-tinged skin  -  when placed flat',
    'You find yourself falling asleep while holding your baby on a sofa or armchair, which is a significant suffocation risk and requires an immediate safe sleep plan',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'self-soothing',
    'cognitive-object-permanence',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep: Recommendations. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. How to Get Your Baby to Sleep in the Crib. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/baby-sleep/how-to-get-baby-to-sleep-in-crib',
    },
  ],
};
