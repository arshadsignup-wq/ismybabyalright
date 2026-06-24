import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-wake-window-guide-by-age',
  title: 'Baby Wake Windows: Guide by Age',
  category: 'sleep',
  searchTerms: [
    'baby wake windows by age',
    'how long should baby be awake',
    'baby awake time between naps',
    'wake window newborn',
    'overtired baby wake window',
    'baby nap schedule wake time',
    'baby awake too long',
    'wake window chart baby',
    'how long baby awake before nap',
    'baby sleep schedule wake windows',
  ],
  quickAnswer:
    'Wake windows are the periods of awake time between your baby\'s naps. Following age-appropriate wake windows helps prevent both overtiredness and undertiredness, which can make falling asleep harder. General guidelines: newborns 45-90 minutes, 3-month-olds 75-120 minutes, 6-month-olds 2-3 hours, 9-month-olds 2.5-3.5 hours, and 12-month-olds 3-4 hours. These are ranges, not exact numbers - watch your baby\'s sleepy cues as the best guide.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Newborn wake windows are very short - typically 45-90 minutes, including feeding time. Most newborns can only handle about 45-60 minutes of awake time before needing to sleep again. Sleepy cues at this age include yawning, turning away from stimulation, rubbing eyes, fussiness, and a glazed-over expression. If you miss the window, your baby may become overtired and harder to settle. At this age, babies may sleep 16-18 hours per day, and their schedule is driven primarily by feeding needs rather than wake windows.',
    },
    {
      ageRange: '2-4 months',
      context:
        'Wake windows gradually extend to about 75-120 minutes. Your baby is becoming more alert and interactive during awake time. The first wake window of the day is usually the shortest. Watch for sleepy cues rather than strict clock-watching. Around 3-4 months, sleep patterns begin to consolidate, and some babies start forming a more predictable nap schedule. An overtired baby may seem paradoxically wired or hyperactive - this is a sign they have been up too long.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Wake windows extend to approximately 1.5-2.5 hours. Most babies transition from 4 naps to 3 naps during this period. The last wake window before bedtime is often the longest. If your baby is fighting naps or taking very short naps, the wake window may need adjusting. The 4-month sleep regression is common and related to brain maturation, not just wake windows. Maintain consistent pre-nap and pre-bedtime routines to signal that sleep is coming.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At 6 months, wake windows are typically 2-3 hours, extending to 3-4 hours by 12 months. Most babies drop from 3 naps to 2 naps between 7-9 months. Signs your baby is ready for a nap transition include: consistently resisting the third nap, taking very long to fall asleep, or the last nap pushing bedtime too late. By 12 months, most babies take 2 naps per day with wake windows of 3-4 hours. The transition from 2 naps to 1 typically happens between 13-18 months.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler wake windows range from 3-5.5 hours. Most toddlers transition from 2 naps to 1 nap between 13-18 months. After this transition, the single nap is usually 2-3 hours long, with wake windows of about 5-5.5 hours before and after the nap. The transition period can be messy - some days your toddler may need 2 naps, other days just 1. This is normal and will settle within a few weeks. Consistent bedtime and wake time help regulate the schedule even when naps are unpredictable.',
    },
  ],
  whenNormal: [
    'Your baby falls asleep within 10-20 minutes of being put down when wake windows are appropriate.',
    'Your baby shows clear sleepy cues at roughly consistent intervals throughout the day.',
    'Wake windows vary slightly day to day depending on nap quality, activity level, and stimulation.',
  ],
  whenToMention: [
    'Your baby cannot fall asleep or stay asleep regardless of how you adjust wake windows.',
    'Your baby seems constantly overtired or chronically sleep-deprived.',
    'Your baby\'s sleep patterns are significantly outside the expected ranges for their age.',
  ],
  whenToActNow: [
    'Your baby is excessively sleepy (sleeping far more than expected for age) and is difficult to wake for feeds.',
    'Your baby has sudden changes in sleep patterns accompanied by fever, lethargy, or other signs of illness.',
    'Your baby is not sleeping enough (under 10 hours total in 24 hours for infants over 3 months) and seems unwell.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['overtired-baby-signs', 'sleep-regression-4-months', 'sleep-regression-18-months', 'baby-only-sleeps-being-held'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Healthy Sleep Habits. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation - How Much Sleep Do Babies and Kids Need?',
      url: 'https://www.sleepfoundation.org/children-and-sleep/how-much-sleep-do-kids-need',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Infant Sleep. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/002392.htm',
    },
  ],
};
