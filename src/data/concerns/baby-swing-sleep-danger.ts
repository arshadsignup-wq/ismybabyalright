import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-swing-sleep-danger',
  title: 'Dangers of Letting Baby Sleep in a Swing',
  category: 'sleep',
  searchTerms: [
    'baby sleeping in swing danger',
    'baby swing sleep safe',
    'can baby sleep in swing',
    'swing sleep suffocation risk',
    'baby sleeps only in swing',
    'swing sleep SIDS risk',
    'baby swing positional asphyxia',
    'baby fell asleep in swing',
    'inclined sleeper danger',
    'baby swing overnight sleep',
  ],
  quickAnswer:
    'Letting your baby sleep in a swing is not recommended by the AAP. Swings position babies at an incline that can cause their chin to drop to their chest, restricting the airway (positional asphyxia). This risk is especially high for young infants with poor head control. If your baby falls asleep in a swing, transfer them to a firm, flat sleep surface as soon as possible. Swings are intended for supervised awake time only.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies are at the highest risk for positional asphyxia in swings because they lack the head and neck strength to reposition themselves if their airway becomes compromised. Never leave a baby sleeping unsupervised in a swing, bouncer, or any inclined device. If your baby consistently falls asleep in the swing, limit swing time and use it only during fully supervised periods. When your baby falls asleep, gently transfer them to their crib or bassinet. The risk of swing sleep is particularly dangerous when the baby is not properly buckled.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Even as head control improves, swings remain unsafe sleep environments. The inclined, semi-reclined position does not meet the AAP safe sleep standard of a firm, flat surface. Some parents use swings because their baby sleeps better in motion - if this is the case, work on gradually transitioning to the crib. Try rocking your baby to drowsiness in the swing and then placing them in the crib before they fall fully asleep. White noise can replicate some of the soothing effect of the swing\'s motion.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, babies are often more active and may try to climb or lean out of swings, adding a fall risk to the existing sleep safety concerns. Most babies have outgrown their swing\'s weight limit by 9-12 months. Continue keeping the swing for supervised, awake use only. If your baby has become dependent on the swing for sleep, gradually reduce swing time before naps and implement consistent crib-based sleep routines.',
    },
  ],
  whenNormal: [
    'Your baby enjoys awake time in the swing while you supervise, and you transfer them to a crib if they fall asleep.',
    'Your baby occasionally falls asleep in the swing during supervised play and you move them promptly.',
    'You use the swing as a soothing tool during fussy periods while staying within arm\'s reach.',
  ],
  whenToMention: [
    'Your baby will only sleep in the swing and resists the crib - you need strategies for transitioning.',
    'You are relying on the swing for nighttime sleep due to exhaustion and need safe alternatives.',
    'Your baby has reflux and you believe they sleep better at an incline.',
  ],
  whenToActNow: [
    'You find your baby slumped over in the swing with their chin on their chest, especially if they are difficult to rouse.',
    'Your baby has stopped breathing, turned blue, or become limp while in the swing.',
    'Your baby has fallen out of or become entangled in the swing.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sleep-positioner-danger', 'baby-safe-sleep-position-back', 'baby-stroller-nap-safety', 'baby-sids-risk-reduction-checklist'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission - Infant Sleep Products.',
      url: 'https://www.cpsc.gov/SafeSleep',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Make Baby\'s Room Safe: Parent Checklist. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Make-Babys-Room-Safe.aspx',
    },
  ],
};
