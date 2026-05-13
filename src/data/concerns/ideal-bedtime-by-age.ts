import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'ideal-bedtime-by-age',
  title: 'Ideal Bedtime by Age',
  category: 'sleep',
  searchTerms: [
    'what time should baby go to bed',
    'ideal bedtime baby',
    'toddler bedtime too late',
    'best bedtime for baby by age',
    'baby bedtime schedule',
    'when should baby go to sleep',
    'early bedtime baby',
    'late bedtime toddler',
    'what time should toddler sleep',
  ],
  quickAnswer:
    'Most babies and toddlers do best with a bedtime between 6:00 and 8:00 PM, depending on their age, nap schedule, and morning wake time. An appropriately early bedtime aligns with the natural rise in melatonin and the circadian rhythm, leading to easier settling, longer nighttime sleep stretches, and less night waking. A bedtime that is too late often leads to overtiredness, not better sleep.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns do not have a set bedtime because their circadian rhythm has not yet developed. Sleep is spread throughout the day and night in irregular cycles. Around 6-8 weeks, a natural bedtime begins to emerge, typically between 7:00 and 10:00 PM. Follow your baby\'s cues rather than the clock at this stage  -  when they cluster feed and become drowsy in the evening, that is their natural bedtime forming.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the circadian rhythm matures, bedtime naturally moves earlier, usually settling between 6:30 and 7:30 PM. This may feel surprisingly early, but it aligns with the natural melatonin surge. If your baby is taking a late catnap (around 5:00 PM), bedtime can be closer to 7:30-8:00 PM. If the last nap ends by 3:30-4:00 PM, an earlier bedtime around 6:30-7:00 PM prevents overtiredness.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Ideal bedtime for most babies this age is between 6:00 and 7:30 PM. During nap transitions (such as dropping from 3 naps to 2 around 7-8 months), you may need to temporarily move bedtime earlier by 30-60 minutes to compensate for the lost nap. A good guideline is that bedtime should be 2.5-3.5 hours after the last nap ends, depending on your baby\'s age within this range.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Most toddlers do well with a bedtime between 7:00 and 8:00 PM. During the 2-to-1 nap transition (typically 14-18 months), bedtime may need to be as early as 6:00-6:30 PM on days when the second nap is skipped. Once fully on one nap, a bedtime of 7:00-7:30 PM is typical. If your toddler consistently takes over 30 minutes to fall asleep at bedtime, the timing may need adjustment.',
    },
  ],
  whenNormal: [
    'Your baby or toddler falls asleep within 10-20 minutes of being put to bed at their usual bedtime',
    'Your baby sleeps 10-12 hours overnight (with age-appropriate night feeds for younger babies)',
    'Your baby wakes in a generally good mood and can stay awake for age-appropriate windows',
    'Bedtime shifts slightly earlier or later during nap transitions and then stabilizes',
  ],
  whenToMention: [
    'Your baby consistently takes more than 30 minutes to fall asleep at bedtime despite seeming tired, which may indicate the timing is off',
    'Your baby has frequent early morning wakings (before 5:30 AM) that do not resolve with schedule adjustments',
    'Your toddler has bedtime resistance every night that causes significant family stress',
  ],
  whenToActNow: [
    'Your baby seems extremely overtired but cannot fall asleep despite your efforts, has an unusual cry, or appears to be in pain rather than having a schedule issue',
    'Excessive daytime sleepiness combined with very poor nighttime sleep, snoring, or pauses in breathing during sleep  -  this may indicate a sleep-related breathing issue',
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
        'National Sleep Foundation. How Much Sleep Do Babies and Kids Need? SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/children-and-sleep',
    },
    {
      org: 'AAP',
      citation:
        'Mindell JA, et al. Bedtime Routines for Young Children: A Dose-Dependent Association with Sleep Outcomes. Sleep, 2015.',
      url: 'https://publications.aap.org/pediatrics/article/122/6/e1343/73048/A-Nightly-Bedtime-Routine-Its-Impact-on-Sleep-in',
    },
  ],
};
