import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-bedtime-too-early',
  title: 'Is My Baby\'s Bedtime Too Early?',
  category: 'sleep',
  searchTerms: ['baby bedtime too early', 'is 6pm too early for baby bedtime', 'early bedtime baby', 'baby going to bed too early', 'early bedtime causing early waking', 'what is too early for baby bedtime', 'baby bedtime 5pm', 'baby bedtime 6pm too early', 'earliest baby should go to bed', 'early bedtime problems'],
  quickAnswer: 'For most babies over 3 months, bedtime between 6:00-8:00 PM is appropriate. A bedtime that is too early can cause early morning wakings (before 6 AM) or long periods of wakefulness in the middle of the night. However, during nap transitions or on days when naps were short, an earlier-than-usual bedtime helps prevent overtiredness.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns do not have a set bedtime. Their sleep is spread across 24 hours. A "bedtime" of 9-11 PM is normal at this age. Trying to enforce a 7 PM bedtime on a newborn usually does not work and can lead to unnecessary frustration. The natural bedtime will shift earlier around 3-4 months as circadian rhythm develops.' },
    { ageRange: '3-6 months', context: 'As circadian rhythm develops, bedtime naturally shifts earlier, typically to the 6:30-8:00 PM range. A 6:00 PM bedtime may occasionally be appropriate if the last nap was skipped or very short, but consistently putting your baby down at 5:30-6:00 PM may lead to early morning wakings. If your baby is waking before 6:00 AM, try shifting bedtime 15-30 minutes later.' },
    { ageRange: '6-12 months', context: 'The ideal bedtime for most babies this age is 6:30-7:30 PM. If bedtime is consistently before 6:15 PM, it may be too early, especially if your baby is waking before 5:30 AM or having a long awake period in the middle of the night. However, temporary early bedtimes (even 6:00 PM) are helpful during nap transitions or when naps were poor.' },
    { ageRange: '12-36 months', context: 'Toddler bedtime is typically 7:00-8:00 PM. During the 2-to-1 nap transition, you may need to temporarily shift bedtime earlier. If your toddler consistently takes a long time to fall asleep (45+ minutes) at their current bedtime, it may be too early. Watch for signs: if they are playing happily in bed for a long time, bedtime may need to move later.' },
  ],
  whenNormal: ['You move bedtime earlier temporarily during nap transitions or after poor nap days', 'Your baby falls asleep within 10-20 minutes of being put down at their early bedtime', 'An early bedtime works well for your family\'s schedule and your baby sleeps until a reasonable morning time', 'Your baby sleeps 10-12 hours overnight with an early bedtime'],
  whenToMention: ['Your baby consistently wakes before 5 AM despite schedule adjustments', 'Your baby lies awake in the crib for long periods after being put down, suggesting they are not tired', 'You are unsure what bedtime is appropriate for your baby\'s age and schedule'],
  whenToActNow: ['Your baby seems excessively sleepy and needs an unusually early bedtime (before 5 PM) consistently', 'Your baby is difficult to keep awake and falls asleep hours before a normal bedtime'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Healthy Sleep Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Baby Sleep Schedule. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/baby-sleep/baby-sleep-schedule' },
    { org: 'NIH', citation: 'Mindell JA et al. Bedtime in preschool-aged children and sleep outcomes. Sleep. 2017;40(2).', url: 'https://pubmed.ncbi.nlm.nih.gov/28364489/' },
  ],
  relatedConcernSlugs: ['ideal-bedtime-by-age', 'early-morning-waking', 'baby-bedtime-too-late', 'baby-waking-at-5am'],
};
