import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-bedtime-too-late',
  title: 'Is My Baby\'s Bedtime Too Late?',
  category: 'sleep',
  searchTerms: ['baby bedtime too late', 'late bedtime baby', 'baby going to bed at 9pm', 'is 9pm too late for baby', 'baby staying up too late', 'late bedtime causing problems', 'what time should baby go to bed', 'baby up until 10pm', 'pushing bedtime later baby', 'baby won\'t go to bed early'],
  quickAnswer: 'For babies over 3-4 months, consistently going to bed after 8:30-9:00 PM may result in overtiredness, which paradoxically makes it harder to fall asleep and stay asleep. Cortisol rises when babies are overtired, leading to more night wakings and early mornings. Moving bedtime earlier, even by 15-30 minutes, often improves overnight sleep quality.',
  byAge: [
    { ageRange: '0-3 months', context: 'A late bedtime (9-11 PM) is completely normal for newborns. Their circadian rhythm is not yet established, and they tend to have a "witching hour" of fussiness in the evening. The natural bedtime will shift earlier around 3-4 months. Do not stress about enforcing an early bedtime at this age.' },
    { ageRange: '3-6 months', context: 'Most babies naturally shift to an earlier bedtime around 3-4 months. If your baby is still going to bed at 9-10 PM, you can try gradually moving bedtime earlier by 15 minutes every few days. Watch for sleepy cues starting around 6:30-7:30 PM. A common sign that bedtime is too late: your baby becomes hyper, wired, or increasingly fussy in the evening.' },
    { ageRange: '6-12 months', context: 'The ideal bedtime is typically 6:30-7:30 PM. If your baby consistently goes to bed after 8:30 PM, they may be overtired, which causes more cortisol production and makes sleep more fragmented. If an earlier bedtime is not possible due to your work schedule, maintain the best routine you can and focus on consistency rather than a specific time.' },
    { ageRange: '12-36 months', context: 'Toddler bedtime is typically 7:00-8:00 PM. If your toddler is going to bed at 9 PM or later and waking at a normal morning time, they may not be getting enough overnight sleep. Some families have late schedules that work well - if your toddler is sleeping late in the morning to compensate and getting enough total sleep, a later bedtime can be fine.' },
  ],
  whenNormal: ['Your newborn has a late bedtime - this is completely normal before 3-4 months', 'Your baby\'s late bedtime matches your family schedule and they sleep later in the morning to compensate', 'You are gradually shifting bedtime earlier and seeing improvement', 'Your baby occasionally has a late night due to schedule disruption'],
  whenToMention: ['Your baby over 4 months consistently goes to bed after 9 PM and seems overtired with frequent night wakings', 'A late bedtime is resulting in less than age-appropriate total sleep', 'You have tried moving bedtime earlier but your baby fights it intensely'],
  whenToActNow: ['Your baby seems excessively alert and wired late at night and cannot settle despite clear fatigue', 'Late bedtime is accompanied by excessive sleepiness during the day, poor feeding, or developmental concerns'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Healthy Sleep Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Baby Sleep Schedule by Age. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/baby-sleep/baby-sleep-schedule' },
    { org: 'NIH', citation: 'Mindell JA et al. Bedtime in preschool-aged children and night waking. Sleep. 2017;40(2).', url: 'https://pubmed.ncbi.nlm.nih.gov/28364489/' },
  ],
  relatedConcernSlugs: ['ideal-bedtime-by-age', 'baby-bedtime-too-early', 'overtired-baby-signs', 'baby-fighting-sleep'],
};
