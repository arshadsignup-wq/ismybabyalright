import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-nap-length-inconsistent',
  title: 'Why Do My Baby\'s Naps Vary So Much?',
  category: 'sleep',
  searchTerms: [
    'baby nap length varies',
    'inconsistent nap length baby',
    'baby naps different every day',
    'baby naps unpredictable',
    'one long nap one short nap',
    'baby nap length all over the place',
    'why are my baby naps so inconsistent',
    'baby naps different lengths each day',
    'irregular nap length baby',
    'baby nap duration varies wildly',
  ],
  quickAnswer:
    'Inconsistent nap lengths are extremely common, especially in the first 6 months. Babies are still developing their circadian rhythm and sleep cycle maturation, which means nap lengths can vary from 20 minutes to 2 hours on any given day. By 6-9 months, naps typically become more predictable, though some variability is always normal.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn naps are naturally irregular. Your baby has not yet developed a mature circadian rhythm, so nap lengths of anywhere from 15 minutes to 3 hours are completely normal. Naps may also happen at different times each day. This is not a problem to solve - it is simply how newborn sleep works. Focus on following your baby\'s sleepy cues rather than trying to enforce a strict schedule.',
    },
    {
      ageRange: '4-6 months',
      context:
        'As your baby\'s sleep architecture matures around 4 months, you may notice naps starting to organize, but inconsistency is still very common. One nap may be 40 minutes and the next may be 90 minutes. This often depends on sleep pressure, activity level, feeding, and where your baby is in their sleep cycle. Naps in the morning tend to consolidate and lengthen first.',
    },
    {
      ageRange: '6-9 months',
      context:
        'By this age, many babies settle into a more predictable pattern with a longer morning nap and a moderate afternoon nap, though day-to-day variation is still normal. Factors like teething, developmental leaps, illness, and schedule disruptions can all cause temporary inconsistency. If your baby is generally happy and sleeping well at night, varying nap lengths are rarely a concern.',
    },
    {
      ageRange: '9-18 months',
      context:
        'Naps should be fairly predictable by now, though you will still have off days. The morning nap tends to be the most consistent, while the afternoon nap may vary more. During nap transitions (2-to-1 nap), you can expect a period of significant inconsistency as your baby adjusts to new wake windows. This is temporary and will settle.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and nap lengths vary from day to day - this is completely developmentally appropriate',
    'Your baby has some short naps and some long naps but is generally well-rested and happy between sleep times',
    'Nap inconsistency coincides with developmental milestones, teething, or schedule changes',
    'Your baby naps differently in different environments (stroller vs crib vs car) - this is very common',
  ],
  whenToMention: [
    'Your baby over 6 months consistently takes very short naps (under 30 minutes) and seems chronically overtired',
    'Your baby seems unable to connect sleep cycles during any nap and is irritable and fussy all day',
    'Nap inconsistency is accompanied by loud snoring, pauses in breathing, or excessive mouth breathing',
  ],
  whenToActNow: [
    'Your baby is excessively sleepy, difficult to wake, or has a significant change in alertness',
    'Your baby has breathing difficulties, color changes, or unusual lethargy during or after naps',
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
        'National Sleep Foundation. Baby Nap Guide: Schedules and Tips. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-naps',
    },
    {
      org: 'NIH',
      citation:
        'Galland BC et al. Normal sleep patterns in infants and children: a systematic review. Sleep Med Rev. 2012;16(3):213-222.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21784676/',
    },
  ],
  relatedConcernSlugs: ['short-naps', 'baby-catnapping-30-minutes', 'wake-windows-by-age', 'baby-nap-schedule-unpredictable'],
};
