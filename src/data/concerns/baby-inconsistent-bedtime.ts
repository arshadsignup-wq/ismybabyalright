import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-inconsistent-bedtime',
  title: 'Does My Baby Need a Consistent Bedtime?',
  category: 'sleep',
  searchTerms: ['inconsistent bedtime baby', 'baby bedtime varies every night', 'does baby need same bedtime', 'flexible bedtime baby', 'varying bedtime effects', 'bedtime different every night baby', 'how important is consistent bedtime', 'baby bedtime routine consistency', 'irregular bedtime baby problems', 'changing bedtime nightly baby'],
  quickAnswer: 'A consistent bedtime (within a 30-minute window) helps regulate your baby\'s internal clock and makes falling asleep easier. However, some flexibility is perfectly fine - bedtime may shift on days when naps were shorter or longer. What matters most is consistency in the bedtime routine itself and responding to your baby\'s sleep cues.',
  byAge: [
    { ageRange: '0-3 months', context: 'A consistent bedtime is not realistic or necessary for newborns. Their sleep is not yet governed by a circadian rhythm, and bedtime will naturally vary. Focus on following your baby\'s cues rather than the clock. A bedtime routine (even a brief one) can be introduced around 6-8 weeks.' },
    { ageRange: '3-6 months', context: 'As circadian rhythm develops, a more consistent bedtime becomes beneficial. Aim for the same time within a 30-minute window. Research shows that babies with consistent bedtimes fall asleep faster and sleep longer. However, rigidity is not necessary - adjusting by 15-30 minutes based on nap quality is smart sleep management.' },
    { ageRange: '6-12 months', context: 'Consistency becomes more important as your baby\'s internal clock matures. A regular bedtime helps melatonin production become predictable, making it easier for your baby to fall asleep. If bedtime varies by more than an hour night to night, your baby may struggle with sleep onset. Aim for the same general time but allow flexibility on days when the schedule has shifted.' },
    { ageRange: '12-36 months', context: 'Toddlers thrive on predictability. Research consistently shows that toddlers with regular bedtimes have better sleep quality, behavior, and cognitive performance. A consistent bedtime does not mean rigid - 15-30 minutes of variation is fine. What to avoid is a pattern where bedtime varies by 1-2 hours randomly from night to night.' },
  ],
  whenNormal: ['Your newborn has a different bedtime every night - no schedule is needed yet', 'Bedtime varies by 15-30 minutes based on nap quality and daily activities', 'Weekend bedtime shifts slightly from weekday bedtime', 'Occasional late nights for special events or disrupted schedules'],
  whenToMention: ['Your baby or toddler\'s bedtime varies by more than 1-2 hours nightly and sleep quality is poor', 'You are struggling to establish any consistent routine despite effort', 'Inconsistent bedtime is causing behavioral issues during the day'],
  whenToActNow: ['Your baby is not sleeping at predictable times and seems excessively sleepy or lethargic', 'Sleep patterns are chaotic alongside other developmental or health concerns'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bedtime Routines for Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Bedtime-Routines-for-Children.aspx' },
    { org: 'NIH', citation: 'Mindell JA et al. Bedtime routines for young children: a dose-dependent association with sleep outcomes. Sleep. 2015;38(5):717-722.', url: 'https://pubmed.ncbi.nlm.nih.gov/25325476/' },
    { org: 'NSF', citation: 'National Sleep Foundation. Consistent Bedtime for Children. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/children-and-sleep/bedtime-routine' },
  ],
  relatedConcernSlugs: ['ideal-bedtime-by-age', 'baby-bedtime-routine-length', 'baby-bedtime-too-late'],
};
