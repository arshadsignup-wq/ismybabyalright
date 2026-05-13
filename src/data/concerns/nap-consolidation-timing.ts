import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'nap-consolidation-timing',
  title: 'When Naps Consolidate: Is It Too Early?',
  category: 'sleep',
  searchTerms: [
    'when do baby naps consolidate',
    'baby short naps when do they lengthen',
    'baby naps only 30 minutes',
    'when do naps get longer',
    'baby nap consolidation age',
    'short naps normal baby',
    'when will baby nap longer',
    'nap extension baby',
    'baby catnaps when to worry',
  ],
  quickAnswer:
    'Nap consolidation  -  when short catnaps naturally lengthen into longer, more predictable sleep periods  -  typically happens between 5 and 7 months of age. Before this, many babies take short 30-45 minute naps because they have not yet developed the ability to connect sleep cycles during the day. This is a normal developmental process, not a problem that needs fixing.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Naps at this age are naturally irregular and often short  -  anywhere from 20 minutes to 2 hours. Some newborns are great nappers and some are chronic catnappers, and both are normal. The ability to link daytime sleep cycles has not yet developed. Focus on ensuring your baby gets enough total daytime sleep rather than trying to achieve specific nap lengths. Contact naps and motion naps are perfectly fine at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Between 4 and 6 months, some babies begin extending their naps as they develop the ability to transition between sleep cycles during the day. The morning nap often consolidates first. If your baby is still taking short naps at 5 months, this is still within the normal range. Practicing putting your baby down drowsy but awake and ensuring the sleep environment is conducive (dark, cool, white noise) can support the consolidation process.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 6-7 months, most babies are capable of taking at least one longer nap per day (1-2 hours). If naps are still consistently short at 7-8 months, reviewing wake windows, sleep environment, and how your baby falls asleep may help. As babies drop to 2 naps (around 7-9 months), each nap typically lengthens. A short third catnap may still be needed during the transition period.',
    },
    {
      ageRange: '12-24 months',
      context:
        'By 12 months, most babies are on 2 naps totaling 2-3 hours of daytime sleep. When they transition to 1 nap (typically 14-18 months), the single nap usually consolidates to 1.5-3 hours. If naps are consistently under 1 hour after the transition to a single nap, the timing of the nap or the sleep environment may need adjustment.',
    },
  ],
  whenNormal: [
    'Your baby under 5-6 months takes mostly 30-45 minute naps  -  this is developmentally normal and not a sign of a sleep problem',
    'Your baby takes one longer nap and one or two shorter naps  -  nap lengths naturally vary throughout the day',
    'Naps become more predictable and longer somewhere between 5 and 7 months',
    'There are occasional short naps even after consolidation  -  disruptions from teething, travel, illness, or developmental leaps are normal',
  ],
  whenToMention: [
    'Your baby is over 7-8 months old and all naps are still consistently 30 minutes or less despite appropriate wake windows',
    'Short naps are causing significant overtiredness that is affecting nighttime sleep and overall mood',
    'You have tried adjusting schedule, environment, and routine without improvement and want personalized guidance',
  ],
  whenToActNow: [
    'Your baby is excessively sleepy during the day, difficult to wake from naps, or seems lethargic rather than just normally drowsy  -  this warrants medical evaluation',
    'Sudden significant changes in nap patterns accompanied by other symptoms such as feeding difficulties, irritability, or developmental changes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Naps. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Naps.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Baby Nap Schedule by Age. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-nap-schedule',
    },
    {
      org: 'AAP',
      citation:
        'Mindell JA, Owens JA. A Clinical Guide to Pediatric Sleep: Diagnosis and Management of Sleep Problems. Lippincott Williams & Wilkins.',
      url: 'https://publications.aap.org/pediatrics/article/122/6/e1343/73048/A-Nightly-Bedtime-Routine-Its-Impact-on-Sleep-in',
    },
  ],
};
