import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-timezone-change-sleep',
  title: 'Adjusting Baby to a New Time Zone',
  category: 'sleep',
  searchTerms: ['baby timezone change','baby jet lag','adjusting baby new timezone','baby sleep different timezone','traveling timezones baby','time difference baby sleep','jet lag infant','baby adjust timezone tips','baby jet lag how long','baby clock change sleep'],
  quickAnswer: 'Babies typically need 2-5 days to adjust to a new time zone. Gradually shifting the schedule, exposing baby to natural light at appropriate times, and being flexible during the first few days help ease the adjustment.',
  byAge: [
    { ageRange: '0-6 months', context: 'Young babies may adjust more easily since circadian rhythm is not firmly established. Follow their cues initially, then gradually shift toward local time. Expose to daylight during local daytime.' },
    { ageRange: '6-12 months', context: 'Adjust by 30-60 minutes per day toward new timezone. Morning light and dim evening light help. Meals at local times reset the internal clock. Expect 3-5 days.' },
    { ageRange: '12-24 months', context: 'For 1-3 hour changes, many families switch cold turkey. For larger changes, shift gradually. Maintain routine at local time.' },
    { ageRange: '2-3 years', context: 'Maintain routine. Outdoor play in morning light helps. Most children adjust within 3-5 days.' },
  ],
  whenNormal: ['Baby needs 2-5 days to adjust','Sleep disrupted first few nights','Baby wakes at unusual hours initially','Adjustment faster for small time differences'],
  whenToMention: ['Baby cannot adjust after a full week','Persistent sleep problems after returning home','Frequent travel causes chronic disruption'],
  whenToActNow: ['Baby seems unusually lethargic or unwell','Baby has illness symptoms alongside jet lag'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'NSF', citation: 'National Sleep Foundation. Jet Lag and Sleep. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/travel-and-sleep/jet-lag' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Traveling with Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Jet Lag. MedlinePlus.', url: 'https://medlineplus.gov/jetlag.html' },
  ],
  relatedConcernSlugs: ['baby-travel-sleep-disruption','baby-daylight-saving-time-sleep'],
};
