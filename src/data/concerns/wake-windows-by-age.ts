import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'wake-windows-by-age',
  title: 'Wake Windows by Age',
  category: 'sleep',
  searchTerms: [
    'wake windows by age',
    'how long should baby be awake between naps',
    'baby awake time between naps',
    'wake window too long baby',
    'wake window too short baby',
    'baby awake time chart',
    'toddler wake window',
    'newborn awake time',
    'optimal wake window baby',
  ],
  quickAnswer:
    'Wake windows are the periods of time your baby can comfortably stay awake between sleep periods. They naturally lengthen as your baby grows, from as short as 45 minutes in newborns to 5-6 hours in toddlers. Getting wake windows right is one of the most impactful things you can do for your baby\'s sleep  -  too short and they are not tired enough, too long and they become overtired.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn wake windows are very short: typically 45-90 minutes, including feeding time. By 3 months, most babies can handle about 75-120 minutes of awake time. These windows are easy to miss, so watch for early sleepy cues like staring off, quieting down, or losing interest in their surroundings. If your newborn has been awake for more than 90 minutes, they are likely overtired.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Wake windows gradually extend to about 1.5-2.5 hours. The first wake window of the day is usually the shortest, and they tend to lengthen throughout the day, with the longest window before bedtime. At this age, you can start combining time-based wake windows with sleepy cues to find the right timing. Most babies this age take 3-4 naps per day.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Wake windows range from about 2-3.5 hours, depending on the specific age and number of naps. As babies transition from 3 to 2 naps (around 7-9 months), wake windows need to stretch. A typical 2-nap schedule has wake windows of about 2.5-3 hours / 3 hours / 3-3.5 hours. The last wake window before bed is usually the longest.',
    },
    {
      ageRange: '12-36 months',
      context:
        'On a 2-nap schedule (12-14 months), wake windows are typically 3-3.5 hours / 3-3.5 hours / 3.5-4 hours. After transitioning to 1 nap (typically 14-18 months), the morning wake window stretches to 4.5-5.5 hours, and the afternoon window is similar. By age 2-3, wake windows of 5-6 hours before and after a single nap are typical, with total awake time of about 10-11 hours.',
    },
  ],
  whenNormal: [
    'Your baby falls asleep within 10-20 minutes when put down at the end of an age-appropriate wake window',
    'Your baby seems content and engaged during awake time and shows clear sleepy cues as the wake window ends',
    'Wake windows gradually lengthen as your baby grows, requiring periodic schedule adjustments',
    'Wake windows vary slightly from day to day based on nap quality, activity level, and whether your baby is fighting an illness',
  ],
  whenToMention: [
    'Your baby consistently fights sleep even with age-appropriate wake windows and a good routine',
    'You cannot find a wake window that works  -  your baby seems either undertired or overtired at every interval',
    'Your baby\'s sleep needs seem significantly different from typical ranges and you are struggling to build a workable schedule',
  ],
  whenToActNow: [
    'Your baby is extremely difficult to wake, excessively sleepy, or cannot maintain any reasonable period of alertness  -  this warrants prompt medical evaluation',
    'Sudden changes in sleep needs accompanied by other concerning symptoms like feeding difficulties, regression in skills, or persistent irritability',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits: How Many Hours Does Your Child Need? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Baby Sleep Schedule: A Guide by Age. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/baby-sleep',
    },
  ],
};
