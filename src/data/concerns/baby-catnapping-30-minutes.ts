import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-catnapping-30-minutes',
  title: 'Baby Only Napping 30 Minutes',
  category: 'sleep',
  searchTerms: [
    'baby catnapping 30 minutes',
    'baby short naps',
    'baby only naps 30 minutes',
    'why does baby wake after 30 minutes',
    'baby 45 minute intruder',
    'baby won\'t nap longer than 30 minutes',
    'how to extend baby naps',
    'short nap cycles baby',
    'baby one sleep cycle nap',
    'baby micro naps',
    'baby naps too short',
  ],
  quickAnswer:
    'Short naps of 30-45 minutes are extremely common in babies under 6 months. Your baby is waking at the end of a single sleep cycle and has not yet learned to link cycles together during the day. This is developmentally normal and typically improves on its own between 5-7 months as the brain matures.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Short, irregular naps are completely normal for newborns. Their sleep cycles are only about 30-45 minutes long, and they have not yet developed the ability to connect cycles during daytime sleep. Naps may happen frequently but be brief. Focus on getting enough total daytime sleep rather than worrying about individual nap length.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is the classic catnapping age. Many babies consistently wake at the 30-45 minute mark. The sleep pressure that helps them link cycles at night is lighter during the day, making it harder to transition between cycles. You can try resettling your baby when they stir (gentle patting, shushing) to help them learn to connect cycles, but short naps at this age are very common and not a sign of a problem.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Naps often start to lengthen naturally around 6-7 months. If your baby is still catnapping, ensure wake windows are long enough (2-3 hours at this age). An overtired or undertired baby is more likely to take short naps. The morning nap is usually the first to consolidate, with the afternoon nap following.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By 9 months, most babies are taking 2 naps of 45 minutes to 2 hours each. If naps are still consistently short, look at the overall schedule - adequate wake windows and a consistent nap routine can help. Some babies are simply shorter nappers and compensate with good nighttime sleep.',
    },
    {
      ageRange: '1-2 years',
      context:
        'With the transition to one nap, that single nap typically lengthens to 1.5-3 hours. If your toddler\'s single nap is still only 30-45 minutes, check that the nap is timed correctly (usually around 12:30-1pm) and that the sleep environment is dark and quiet. Some toddlers need a longer wind-down before naps.',
    },
  ],
  whenNormal: [
    'Your baby under 6 months consistently naps for 30-45 minutes and wakes happy',
    'Total daytime sleep adds up to an appropriate amount even through short naps',
    'Your baby is alert, feeds well, and is meeting developmental milestones',
    'Naps gradually lengthen as your baby approaches 6-7 months',
  ],
  whenToMention: [
    'Your baby over 6 months is still only napping 30 minutes and is chronically overtired and fussy',
    'Short naps are accompanied by very frequent night wakings and your baby seems unable to get enough restorative sleep overall',
  ],
  whenToActNow: [
    'Your baby is excessively sleepy, hard to wake, or has a dramatic change in sleep patterns along with signs of illness',
    'Short naps are accompanied by concerning symptoms like fever, refusal to eat, or unusual irritability that goes beyond normal overtiredness',
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
        'National Sleep Foundation. Baby Nap Schedule. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-nap-schedule',
    },
  ],
};
