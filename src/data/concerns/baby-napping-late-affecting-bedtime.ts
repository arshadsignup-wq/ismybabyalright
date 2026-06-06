import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-napping-late-affecting-bedtime',
  title: 'Late Naps Are Pushing Bedtime Too Late',
  category: 'sleep',
  searchTerms: [
    'late nap pushing bedtime late',
    'baby napping too late in day',
    'late afternoon nap bedtime',
    'should I let baby nap at 5pm',
    'evening nap too late',
    'baby nap too close to bedtime',
    'last nap of the day timing',
    'late nap ruining bedtime',
    'baby napping at 4pm',
    'gap between last nap and bedtime',
  ],
  quickAnswer:
    'A late nap can push bedtime too late, but skipping it entirely may lead to overtiredness. The solution depends on your baby\'s age. For younger babies, a short catnap (15-20 minutes) in the late afternoon is perfectly fine. For older babies and toddlers, capping the last nap and ensuring enough wake time before bed usually resolves the issue.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Newborns and young babies often need a late afternoon or early evening nap, and this is completely normal. Bedtimes for young babies tend to be later (8-10 PM) anyway. There is no need to worry about a late nap interfering with bedtime at this age. Let your baby sleep when they need to and do not try to enforce an early bedtime that is not developmentally appropriate yet.',
    },
    {
      ageRange: '4-7 months',
      context:
        'As bedtime moves earlier (typically 6:30-8:00 PM), the third nap becomes a bridge to get there without overtiredness. Keep this nap short - ideally 20-30 minutes - and try to have it end by about 4:30-5:00 PM so there is enough wake time before bed (about 2-2.5 hours). If the nap runs too late, it is okay to gently wake your baby and push bedtime slightly later that evening.',
    },
    {
      ageRange: '7-12 months',
      context:
        'On a two-nap schedule, the second nap ideally ends by 3:00-3:30 PM to allow enough wake time before a 7:00-7:30 PM bedtime. If the second nap starts late, cap it so it ends by 3:30 PM at the latest. On days when naps run late, pushing bedtime back 15-30 minutes is better than dealing with a baby who is not tired enough to fall asleep. Conversely, if both naps are short and end early, move bedtime earlier.',
    },
    {
      ageRange: '12-24 months',
      context:
        'On a one-nap schedule, the nap usually runs from about 12:00-2:30 PM. If the nap extends past 3:00-3:30 PM, it may push bedtime too late. Cap the nap so it ends by 3:00-3:30 PM to preserve a reasonable bedtime. If your toddler is taking the nap very late (starting at 3 or 4 PM), the nap schedule likely needs restructuring - moving the nap earlier usually helps.',
    },
  ],
  whenNormal: [
    'Your young baby (under 6 months) takes a late afternoon nap - this is an expected part of their schedule',
    'Occasionally a nap runs late and bedtime shifts a little - this is a normal day-to-day variation',
    'Your baby takes a brief catnap in the late afternoon that helps them get to bedtime without becoming overtired',
    'During nap transitions, the schedule is temporarily off and the last nap encroaches on bedtime',
  ],
  whenToMention: [
    'Your baby consistently cannot fall asleep until 9-10 PM or later due to late napping, and this pattern persists',
    'Late bedtimes are causing chronic sleep deprivation with very early mornings',
    'You cannot get your baby on any reasonable daytime schedule despite consistent efforts',
  ],
  whenToActNow: [
    'Your baby seems excessively sleepy during the day, is difficult to wake, or seems lethargic',
    'Sleep disruption is accompanied by other symptoms like poor feeding, weight changes, or breathing difficulties',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bedtime Routines for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Bedtime-Routines-for-Children.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Baby Sleep Schedule. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-sleep-schedule',
    },
    {
      org: 'NIH',
      citation:
        'Mindell JA et al. Bedtime routines for young children: A dose-dependent association with sleep outcomes. Sleep. 2015;38(5):717-722.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25325476/',
    },
  ],
  relatedConcernSlugs: ['ideal-bedtime-by-age', 'toddler-napping-too-late-in-day', 'wake-windows-by-age', 'baby-bedtime-too-late'],
};
