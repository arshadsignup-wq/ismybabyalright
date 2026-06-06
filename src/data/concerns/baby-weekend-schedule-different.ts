import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-weekend-schedule-different',
  title: 'Weekend vs Weekday Sleep Schedules',
  category: 'sleep',
  searchTerms: ['weekend weekday sleep baby','baby different schedule weekends','toddler sleep weekends','inconsistent weekend schedule','baby routine weekends','sleep schedule weekday vs weekend','weekend sleep changes baby','keeping schedule weekends','baby weekend nap different','toddler late bedtime weekends'],
  quickAnswer: 'Some variation between weekend and weekday sleep is normal. Try to keep bedtime and wake time within 30-60 minutes of the weekday schedule. Larger shifts can disrupt your baby\'s internal clock and cause a rough Monday.',
  byAge: [
    { ageRange: '0-6 months', context: 'Little distinction between weekdays and weekends for your baby. Follow their cues consistently.' },
    { ageRange: '6-12 months', context: 'Weekends may allow more flexibility. Try not to let bedtime shift more than 30 minutes later.' },
    { ageRange: '12-24 months', context: 'If toddler naps at daycare but skips at home, offer quiet time and move bedtime earlier on no-nap days.' },
    { ageRange: '2-3 years', context: 'Keep schedule as consistent as possible. A later Saturday bedtime is fine but may cause a cranky Sunday.' },
  ],
  whenNormal: ['Slight schedule differences on weekends are manageable','Baby adjusts to minor variations','Bedtime stays within 30-60 minute window','Occasional late nights compensated by earlier bedtime next day'],
  whenToMention: ['Large weekend shifts causing chronic Monday difficulty','Baby chronically overtired from inconsistency','Schedule inconsistency causing significant sleep problems'],
  whenToActNow: ['Baby seems excessively sleepy regardless of schedule','Schedule disruption with other concerning symptoms'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Healthy Sleep Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Sleep Schedule Consistency. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/sleep-hygiene/sleep-schedule' },
    { org: 'NIH', citation: 'Mindell JA et al. Bedtime routines for young children. Sleep. 2015;38(5):717-722.', url: 'https://pubmed.ncbi.nlm.nih.gov/25325476/' },
  ],
  relatedConcernSlugs: ['baby-inconsistent-bedtime','baby-daycare-nap-different','ideal-bedtime-by-age'],
};
