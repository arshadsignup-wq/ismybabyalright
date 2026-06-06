import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-awake-time-between-naps',
  title: 'How Long Should Baby Be Awake Between Naps?',
  category: 'sleep',
  searchTerms: [
    'baby awake time between naps',
    'wake window by age',
    'how long baby stay awake between naps',
    'baby wake time too short',
    'baby wake time too long',
    'time between naps baby',
    'optimal wake window',
    'baby overtired from long wake window',
    'baby undertired short wake window',
    'how much awake time baby needs',
  ],
  quickAnswer:
    'The ideal awake time between naps (called a "wake window") increases as your baby grows. Newborns may only handle 45-90 minutes awake, while toddlers can manage 4-6 hours. Getting wake windows right is one of the most effective ways to improve nap quality, because both too-short and too-long wake times lead to poor sleep.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Wake windows are very short: typically 45-90 minutes, including feeding time. Many parents are surprised at how little time their newborn can be awake before needing sleep again. Watch for early sleepy cues like yawning, eye rubbing, and looking away. If your baby becomes fussy and hard to settle, you may have pushed past their ideal wake window. At this age, err on the side of shorter wake windows.',
    },
    {
      ageRange: '3-4 months',
      context:
        'Wake windows extend to about 1.5-2.5 hours. The first wake window of the day is usually the shortest (around 1.5 hours), and they gradually lengthen throughout the day. Pay attention to your individual baby\'s cues, as there is natural variation. Some babies handle 2 hours easily while others are ready for sleep after 1.5 hours. Sleep cues become more reliable at this age.',
    },
    {
      ageRange: '5-7 months',
      context:
        'Wake windows are typically 2-3 hours. The pattern of shorter morning wake windows and longer afternoon ones continues. If your baby is fighting naps, the wake window may be too short (undertired), and if they are melting down before nap time, it may be too long (overtired). Adjusting by just 15 minutes can sometimes make a significant difference in nap quality.',
    },
    {
      ageRange: '8-12 months',
      context:
        'Wake windows are usually 2.5-4 hours on a two-nap schedule. The longest wake window is typically before bedtime (3-4 hours). This is a period of significant change as your baby approaches the 2-to-1 nap transition. If naps are going well, do not feel pressure to change wake windows just because an app or chart says something different - your baby\'s behavior is the best guide.',
    },
    {
      ageRange: '12-24 months',
      context:
        'On two naps, wake windows are about 3-4 hours. Once on one nap, the morning wake window extends to 4.5-5.5 hours and the afternoon window (between nap and bedtime) is about 4-5.5 hours. During the transition, wake windows may feel uncomfortably long for both you and your toddler. Using active play in the morning helps your toddler stay awake until nap time.',
    },
  ],
  whenNormal: [
    'Your baby seems tired right on schedule according to age-appropriate wake windows',
    'Wake windows gradually increase as your baby gets older',
    'The first wake window of the day is shorter than the last one',
    'There is some day-to-day variation in how long your baby can stay awake comfortably',
  ],
  whenToMention: [
    'Your baby seems unable to stay awake for age-appropriate periods and is excessively sleepy',
    'Your baby can stay awake far longer than expected for their age and still seems wired and unable to fall asleep',
    'Despite adjusting wake windows, your baby cannot settle for naps or is chronically overtired',
  ],
  whenToActNow: [
    'Your baby is unusually lethargic, difficult to wake, or has sudden changes in alertness',
    'Your baby cannot stay awake during feeds or seems to have lost interest in their surroundings',
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
        'National Sleep Foundation. How Much Sleep Do Babies Need? SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep',
    },
    {
      org: 'NIH',
      citation:
        'Galland BC et al. Normal sleep patterns in infants and children. Sleep Med Rev. 2012;16(3):213-222.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21784676/',
    },
  ],
  relatedConcernSlugs: ['wake-windows-by-age', 'overtired-baby-signs', 'fighting-naps', 'short-naps'],
};
