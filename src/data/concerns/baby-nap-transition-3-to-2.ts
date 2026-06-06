import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-nap-transition-3-to-2',
  title: 'Dropping from 3 Naps to 2 Naps',
  category: 'sleep',
  searchTerms: [
    'dropping third nap',
    'baby 3 to 2 naps',
    'when to drop third nap',
    'baby nap transition 3 to 2',
    'baby fighting third nap',
    'eliminating evening nap',
    'baby ready for 2 naps',
    'third nap too late',
    'when does baby go to 2 naps',
    'signs baby ready to drop nap',
  ],
  quickAnswer:
    'Most babies naturally transition from three naps to two between 6 and 9 months of age. Signs that your baby is ready include consistently fighting the third nap, taking longer to fall asleep, and being able to comfortably stay awake for longer stretches. This transition typically takes 1-2 weeks to fully settle.',
  byAge: [
    {
      ageRange: '0-5 months',
      context:
        'At this age, most babies still need three or more naps per day. Their wake windows are short (typically 1-2.5 hours), and they cannot comfortably stay awake long enough to manage on just two naps. If your baby under 5 months seems to be fighting a nap, it is more likely related to overtiredness or undertiredness rather than readiness to drop a nap.',
    },
    {
      ageRange: '6-7 months',
      context:
        'This is the most common window for the 3-to-2 nap transition. Your baby\'s wake windows are extending to about 2.5-3 hours, and you may notice the third nap becoming increasingly difficult. Some babies begin refusing it outright, while others take it but then struggle with bedtime. A good approach is to start capping the third nap at 20-30 minutes and gradually pushing it later before eliminating it.',
    },
    {
      ageRange: '7-9 months',
      context:
        'By this age, most babies have completed the transition to two naps. If your baby is still on three naps, they may be ready to drop one. Watch for signs like bedtime resistance, taking more than 20 minutes to fall asleep for the third nap, or waking earlier in the morning. During the transition, you may need to move bedtime earlier temporarily, sometimes as early as 6:00-6:30 PM, to prevent overtiredness.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By 9 months, virtually all babies are on a two-nap schedule. If your baby is still taking three naps at this age and nighttime sleep is suffering, it is time to make the transition. The ideal two-nap schedule at this age typically includes a morning nap about 2.5-3 hours after waking and an afternoon nap about 3-3.5 hours after the morning nap ends.',
    },
  ],
  whenNormal: [
    'Your baby is between 6-9 months and starts fighting or skipping the third nap consistently for more than a week',
    'The third nap gets shorter and shorter until it becomes just a brief catnap',
    'Your baby seems happy and alert during the longer wake window before bedtime even without the third nap',
    'Some days your baby needs three naps and other days manages on two during the transition period',
  ],
  whenToMention: [
    'Your baby seems excessively tired all day after dropping the third nap and cannot adjust after 2-3 weeks',
    'Nighttime sleep significantly worsens and does not improve within 2 weeks of the transition',
    'Your baby is under 5 months and refusing all naps or sleeping very little during the day',
  ],
  whenToActNow: [
    'Your baby is excessively sleepy, difficult to wake, or seems lethargic beyond normal tiredness',
    'Your baby has sudden changes in breathing, color, or responsiveness during sleep',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits: How Many Hours Does Your Child Need? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. How Much Sleep Do Babies and Kids Need? SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/children-and-sleep/how-much-sleep-do-kids-need',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
  ],
  relatedConcernSlugs: ['wake-windows-by-age', 'fighting-naps', 'short-naps', 'overtired-baby-signs'],
};
