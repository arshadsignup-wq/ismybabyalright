import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-nap-schedule-unpredictable',
  title: 'My Baby Has No Nap Routine',
  category: 'sleep',
  searchTerms: [
    'baby no nap routine',
    'unpredictable nap schedule',
    'baby nap schedule random',
    'baby naps at different times',
    'how to get baby on nap schedule',
    'baby nap times change every day',
    'inconsistent nap schedule',
    'when do baby naps become regular',
    'baby nap schedule all over the place',
    'no nap pattern baby',
  ],
  quickAnswer:
    'Most babies do not develop a predictable nap schedule until around 5-6 months of age. Before that, following your baby\'s sleepy cues and using age-appropriate wake windows is more effective than trying to enforce a clock-based schedule. By 6-8 months, most babies settle into a more reliable nap routine.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'An unpredictable nap schedule is completely normal at this age. Your newborn\'s circadian rhythm is still developing, and their sleep is driven more by homeostatic sleep pressure than by the clock. Follow your baby\'s cues - yawning, eye rubbing, fussing, looking away - and offer sleep when you see them. Trying to force a strict schedule on a newborn is rarely effective and can create unnecessary stress for everyone.',
    },
    {
      ageRange: '3-5 months',
      context:
        'Naps may begin to organize somewhat, with a morning nap emerging as the most consistent. Rather than following a clock-based schedule, use wake windows as your guide: the time your baby can comfortably stay awake between sleeps. At this age, wake windows are typically 1.5-2.5 hours. Some days will still be more predictable than others, and that is okay.',
    },
    {
      ageRange: '5-8 months',
      context:
        'This is when most babies develop a more predictable nap pattern. You can begin to combine wake windows with a loose clock-based schedule. Many babies settle into a rhythm of a morning nap around 9-10 AM and an afternoon nap around 1-2 PM, with possibly a brief third nap. Consistency in your pre-nap routine helps signal to your baby that sleep is coming.',
    },
    {
      ageRange: '8-18 months',
      context:
        'By 8 months, most babies are on a fairly predictable two-nap schedule. If naps are still very random at this age, consider whether sleep environment, wake windows, or sleep associations might be contributing. A consistent pre-nap routine of 5-10 minutes, a dark room, and age-appropriate wake windows usually help naps become more regular. Some day-to-day variation is always normal.',
    },
  ],
  whenNormal: [
    'Your baby is under 5 months and naps are unpredictable from day to day - this is completely expected',
    'Your baby naps at slightly different times each day but follows a general pattern (morning nap, afternoon nap)',
    'Nap times shift temporarily during developmental leaps, illness, or transitions',
    'Your baby seems well-rested and content despite the variable schedule',
  ],
  whenToMention: [
    'Your baby is over 8 months and naps are completely random with no emerging pattern despite consistent routines',
    'Unpredictable naps are accompanied by very poor nighttime sleep and chronic overtiredness',
    'Your baby seems unable to fall asleep during the day without extreme intervention (hours of rocking, driving)',
  ],
  whenToActNow: [
    'Your baby is excessively sleepy, lethargic, or very difficult to wake',
    'Your baby has signs of sleep-disordered breathing including snoring, gasping, or pauses in breathing',
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
      org: 'NSF',
      citation:
        'National Sleep Foundation. Baby Naps: Daytime Sleep Tips. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-naps',
    },
    {
      org: 'NIH',
      citation:
        'Galland BC et al. Normal sleep patterns in infants and children. Sleep Med Rev. 2012;16(3):213-222.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21784676/',
    },
  ],
  relatedConcernSlugs: ['wake-windows-by-age', 'baby-nap-length-inconsistent', 'fighting-naps'],
};
