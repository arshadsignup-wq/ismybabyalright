import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-travel-sleep-disruption',
  title: 'Sleep While Traveling with Baby',
  category: 'sleep',
  searchTerms: ['baby travel sleep','baby sleep disrupted travel','traveling baby sleep tips','baby sleep hotel','baby sleep away from home','travel affecting baby sleep','baby naps traveling','baby portable crib travel','baby wont sleep vacation','sleeping travel baby'],
  quickAnswer: 'Travel commonly disrupts baby sleep due to environment changes, routine disruption, and excitement. Most babies readjust within 2-5 days of returning home. Bringing familiar sleep items, maintaining routine, and being flexible help minimize impact.',
  byAge: [
    { ageRange: '0-6 months', context: 'Young babies are often adaptable travelers. Bring familiar items (sleep sack, white noise). Recreate dark sleep environment. Follow baby cues rather than forcing the home schedule.' },
    { ageRange: '6-12 months', context: 'Separation anxiety may make new environments harder. Spend time in the sleep space before bedtime. Bring familiar sheets. Maintain bedtime routine exactly.' },
    { ageRange: '12-24 months', context: 'Toddlers may resist unfamiliar places. Consider a floor mattress if safe. Bring comfort objects and maintain routine.' },
    { ageRange: '2-3 years', context: 'Talk about sleeping arrangements before the trip. Maintain routine and bring comfort items. Sleep usually normalizes within days of returning home.' },
  ],
  whenNormal: ['Sleep disrupted during travel but returns to normal within days','Baby takes longer to fall asleep in unfamiliar environments','Naps shorter or skipped on travel days','Baby clingier at bedtime while away'],
  whenToMention: ['Disruption persists 1-2 weeks after returning home','Travel caused significant regression','Baby refuses to sleep anywhere except one specific location'],
  whenToActNow: ['Baby has signs of illness during travel','Sleep disruption with concerning symptoms'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Traveling with Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/default.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Travel and Sleep. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/travel-and-sleep' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleep Tips. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/default.aspx' },
  ],
  relatedConcernSlugs: ['baby-timezone-change-sleep','baby-sleep-schedule-disrupted-by-travel'],
};
