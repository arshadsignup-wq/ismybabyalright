import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'split-night-baby-waking',
  title: 'Split Nights: Why Your Baby Is Wide Awake at 2 AM',
  category: 'sleep',
  searchTerms: [
    'split night baby',
    'baby awake middle of night',
    'baby wide awake 2am',
    'split night waking',
    'baby party at night',
    'baby up for hours middle night',
    'baby happy awake at night',
    'split night sleep schedule',
    'baby waking 1-3 hours at night',
    'baby playing at night won\'t sleep',
  ],
  quickAnswer:
    'A "split night" occurs when your baby wakes in the middle of the night and stays happily awake for an extended period (often 1-3 hours) before falling back asleep. Unlike hunger-driven or distress-driven waking, split-night babies are typically calm and playful. The most common cause is too much total daytime sleep or bedtime being too early, creating a schedule mismatch between the amount of sleep your baby needs and the time allotted for it. Adjusting the daytime sleep schedule usually resolves the issue within days.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'True split nights are less common in very young babies whose sleep patterns are still immature and irregular. If your newborn is awake for long periods at night, they may have day-night confusion, which is normal in the first few weeks. Expose your baby to natural light during the day and keep nighttime interactions dark and boring. If your baby is alert but not distressed at night, this is likely a circadian rhythm issue that resolves by 6-8 weeks. Do not restrict daytime sleep in babies under 4 months to try to fix nighttime patterns.',
    },
    {
      ageRange: '4-8 months',
      context:
        'Split nights in this age range are often caused by too much daytime sleep or a bedtime that is too early. If your baby is sleeping more than 3.5-4 hours during the day and then wide awake for an hour or two in the middle of the night, try gradually reducing total nap time by 15-30 minutes and/or shifting bedtime slightly later. Ensure age-appropriate wake windows (2-3 hours between naps). The total amount of sleep in 24 hours is relatively fixed for each baby, so sleep taken during the day comes out of nighttime sleep.',
    },
    {
      ageRange: '8-12 months',
      context:
        'As babies transition from 3 naps to 2, schedule mismatches are common and can trigger split nights. If your baby is fighting the third nap but you are putting them to bed early to compensate, the total sleep opportunity may be too high. Try a 2-nap schedule with appropriate wake windows (3-3.5 hours) and a bedtime that allows for the right amount of total nighttime sleep (typically 10-12 hours). If the split night persists despite schedule adjustments, keep the room dark and boring during the wake period to avoid reinforcing middle-of-the-night play.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler split nights are often triggered by the 2-to-1 nap transition, illness recovery, or a bedtime that has crept too early. If your toddler is on one nap, keep the nap to about 1.5-2.5 hours and ensure at least 5-6 hours of wake time before bed. A toddler who goes to bed at 6:30 PM and wakes at 1 AM for a "party" likely needs a later bedtime. Other contributors include developmental leaps, teething, and screen time too close to bed. Consistent, low-stimulation responses during nighttime waking help resolve the pattern.',
    },
  ],
  whenNormal: [
    'An occasional split night during a nap transition or schedule change',
    'Your baby is calm and playful during the wake period (not distressed)',
    'The problem resolves within a week of schedule adjustments',
  ],
  whenToMention: [
    'Split nights persist for more than 2-3 weeks despite schedule adjustments',
    'Your baby seems distressed, not just alert, during nighttime waking',
    'You notice snoring, mouth breathing, or restless movement during sleep',
    'Chronic sleep disruption is affecting your family\'s daytime functioning',
  ],
  whenToActNow: [
    'Your baby has breathing difficulties during sleep, including apnea episodes',
    'Your baby is extremely difficult to wake or seems lethargic during the day',
    'Sleep deprivation is creating safety concerns for you or your family',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sleep-regression-6-months',
    'sleep-regression-9-months',
    'circadian-rhythm-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits: How Many Hours Does Your Child Need? HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. How Much Sleep Do Babies Need? SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/children-and-sleep/how-much-sleep-do-kids-need',
    },
    {
      org: 'NIH',
      citation:
        'Galland BC, et al. Normal Sleep Patterns in Infants and Children: A Systematic Review. Sleep Medicine Reviews, 2012.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21636297/',
    },
  ],
};
