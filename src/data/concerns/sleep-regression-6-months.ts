import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sleep-regression-6-months',
  title: '6-Month Sleep Regression',
  category: 'sleep',
  searchTerms: [
    '6 month sleep regression',
    'baby sleep regression 6 months',
    'baby waking at night 6 months',
    'six month old not sleeping',
    'baby fighting sleep 6 months',
    'sleep regression half year',
    '6 month old nap regression',
    'baby suddenly not sleeping 6 months',
    'how long 6 month sleep regression',
    'baby waking every hour 6 months',
  ],
  quickAnswer:
    'The 6-month sleep regression coincides with major developmental milestones including learning to sit, increased awareness of surroundings, the beginning of separation anxiety, early teething, and potentially the introduction of solid foods. Your baby\'s brain is processing an enormous amount of new information, which can disrupt previously established sleep patterns. This regression typically lasts 2-4 weeks and resolves with consistent routines and patient support.',
  byAge: [
    {
      ageRange: '5-6 months',
      context:
        'Around this age, babies become much more aware of their environment and may find it harder to "shut off" for sleep. They are learning to roll, sit, and reach for objects, and may want to practice these skills at all hours. Some babies begin waking more frequently to nurse or bottle feed, which may reflect a growth spurt or simply increased caloric needs as they become more active. Establishing a consistent bedtime routine (bath, book, song, etc.) and putting your baby down drowsy but awake helps reinforce independent sleep skills.',
    },
    {
      ageRange: '6-7 months',
      context:
        'The peak of the 6-month regression often coincides with the introduction of solid foods, teething, and the emergence of separation anxiety. Your baby may cry when you leave the room at bedtime when they previously went down easily. Teeth coming in (typically lower central incisors appear around 6 months) can cause discomfort that disrupts sleep. If teething seems to be the primary issue, appropriate pain relief (infant acetaminophen or ibuprofen after 6 months, chilled teethers) can help. Avoid creating new sleep associations (like feeding to sleep) that you do not want to maintain long-term.',
    },
    {
      ageRange: '7-8 months',
      context:
        'Most babies settle back into better sleep patterns by 7-8 months, though the landscape may have shifted. Your baby may now need adjusted wake windows (2-3 hours between naps), and many transition to a 2-nap schedule during this period. If sleep remains very disrupted, evaluate the sleep environment (dark room, white noise, comfortable temperature), ensure age-appropriate wake windows, and consider whether your baby\'s caloric needs are being met during the day. Persistent night waking beyond the regression period may benefit from a gentle sleep training approach if you are comfortable with that.',
    },
  ],
  whenNormal: [
    'Your previously good sleeper suddenly wakes multiple times at night for 2-4 weeks',
    'Naps become shorter or your baby fights falling asleep for naps',
    'Sleep disruption coincides with learning to sit, roll, or reach for objects',
    'Your baby seems more alert and distracted during daytime feeds',
  ],
  whenToMention: [
    'Sleep disruption lasts more than 6 weeks with no improvement',
    'Your baby seems to be in pain during the night (pulling at ears, high-pitched crying)',
    'You notice snoring, mouth breathing, or pauses in breathing during sleep',
    'You are experiencing significant sleep deprivation that is affecting your health or safety',
  ],
  whenToActNow: [
    'Your baby has difficulty breathing, turns blue, or has periods of not breathing during sleep',
    'Your baby has a high fever (over 100.4 degrees F / 38 degrees C) combined with extreme lethargy',
    'Your baby is inconsolable for hours and nothing provides comfort',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sleep-regression-4-months',
    'sleep-regression-9-months',
    'overtired-baby-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Baby Sleep Regressions. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-sleep-regression',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones: 6 Months. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-6-Months.aspx',
    },
  ],
};
