import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'split-night-sleep',
  title: 'Split Night Sleep: Waking Happy at 2 AM',
  category: 'sleep',
  searchTerms: [
    'baby awake in middle of night happy',
    'baby wide awake 2am',
    'split night baby',
    'baby wakes at night and plays',
    'toddler awake for hours at night',
    'baby alert middle of night',
    'baby up at night not crying',
    'night waking happy baby',
    'baby party at night',
  ],
  quickAnswer:
    'A "split night" is when your baby or toddler wakes in the middle of the night  -  often around 1-3 AM  -  fully alert, happy, and ready to play for 1-2 hours before falling back asleep. This is almost always a schedule issue rather than a medical problem. It typically means there is too much sleep pressure or not enough sleep pressure at the wrong times, and it is one of the most fixable sleep problems.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'True split nights are less common in newborns since their circadian rhythm is still developing. If your newborn is wide awake and content at night, they may have their days and nights confused, which is normal in the early weeks. Expose your baby to natural daylight during the day, keep nighttime interactions boring and dim, and this typically resolves by 6-8 weeks as the circadian rhythm matures.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Split nights at this age often occur when total daytime sleep is too high relative to the baby\'s sleep needs, or when bedtime is too early. If your baby is napping well during the day and going to bed by 6:30 PM but waking cheerfully at 2 AM for an hour, try capping total daytime nap time or shifting bedtime slightly later (by 15-30 minutes). The goal is to build enough sleep pressure for a consolidated overnight stretch.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a peak age for split nights, often triggered by too much daytime sleep, a bedtime that is too early for the amount of daytime sleep, or a nap transition in progress. If your baby sleeps 3.5 hours during the day and is in bed by 6:00 PM, there may simply be too many sleep hours in the 24-hour period. Try capping total nap time to 2.5-3 hours and ensure bedtime is not before 6:30-7:00 PM.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Split nights in toddlers often coincide with the 2-to-1 nap transition. If your toddler is still taking 2 naps and the single long nap has not yet consolidated, total daytime sleep may be too high. On one nap, if the nap runs longer than 2-2.5 hours and bedtime is early, a split night may result. Try capping the nap at 2 hours and keeping bedtime at 7:00-7:30 PM to balance the schedule.',
    },
  ],
  whenNormal: [
    'Your baby occasionally has a split night after a day with extra daytime sleep or an unusually early bedtime',
    'The split night resolves when you adjust the daytime sleep schedule or bedtime timing',
    'Your baby is content during the waking period, not distressed, and falls back asleep on their own after 30-90 minutes',
    'Split nights happen during a nap transition period and resolve as the new schedule stabilizes',
  ],
  whenToMention: [
    'Split nights are happening consistently (more than 3-4 times per week) for several weeks despite schedule adjustments',
    'You are unable to find a schedule that prevents split nights and need help analyzing total sleep needs',
    'The prolonged night waking is significantly affecting your own sleep and functioning',
  ],
  whenToActNow: [
    'Night wakings are accompanied by pain, distress, difficulty breathing, or unusual behavior rather than the happy alertness typical of a split night',
    'Your child seems excessively sleepy during the day despite long nighttime sleep, which could indicate a sleep quality issue such as obstructive sleep apnea',
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
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep Problems in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Sleep-Problems-in-Children.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Baby Sleep Patterns and Schedules. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/baby-sleep',
    },
  ],
};
