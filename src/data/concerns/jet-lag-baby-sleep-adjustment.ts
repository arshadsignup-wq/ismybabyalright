import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'jet-lag-baby-sleep-adjustment',
  title: 'Jet Lag Sleep Adjustment for Babies',
  category: 'sleep',
  searchTerms: [
    'baby jet lag how long to adjust',
    'toddler jet lag not sleeping',
    'time zone change baby sleep schedule',
    'baby wide awake at night jet lag',
    'how to adjust baby to new time zone',
    'traveling with baby different time zone',
    'baby nap schedule after travel',
    'jet lag tips for toddler',
  ],
  quickAnswer:
    'Jet lag in babies and toddlers is temporary but can be challenging. Babies typically adjust to a new time zone at a rate of about 1 hour per day, so a 5-hour time change may take up to 5 days for full adjustment. Exposure to natural light at the right times, maintaining consistent bedtime routines, and gradually shifting schedules are the most effective strategies. Most children adjust more quickly than adults because their circadian rhythms are still flexible.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns do not have established circadian rhythms, so jet lag is less of an issue. They may actually be easier travelers at this age because they sleep in short cycles regardless of time zone. Continue feeding on demand and following their cues for sleep.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies are beginning to develop circadian rhythms, and jet lag may disrupt their emerging sleep patterns. Expose your baby to bright light during the new daytime and keep things dark during the new nighttime. A consistent bedtime routine (bath, feeding, songs) signals sleep time regardless of the clock.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies with established nap and bedtime routines will feel the effects of time zone changes more. Gradually shift their schedule — move bedtime by 30-60 minutes each day toward the new time zone. Do not skip naps entirely, as overtired babies sleep worse. Get outside in morning light to help reset the internal clock.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with strong circadian rhythms may struggle more with jet lag. They may be wide awake at 2 AM and exhausted by noon. Resist the temptation to let them sleep excessively during the new daytime. Keep wake windows active with outdoor play in natural light, and maintain a consistent bedtime routine. Full adjustment usually takes 3-7 days.',
    },
  ],
  whenNormal: [
    'Your baby or toddler wakes frequently at night and naps irregularly for the first 3-5 days after a time zone change',
    'Your child is fussier and more clingy than usual during jet lag adjustment',
    'Sleep gradually improves day by day as your child adjusts to the new time zone',
    'Your child is hungrier or has less appetite than usual during adjustment',
  ],
  whenToMention: [
    'Your baby\'s sleep has not returned to a reasonable pattern after 2 weeks in the new time zone',
    'Jet lag has unmasked underlying sleep issues that persist after the adjustment period',
    'Your child becomes significantly distressed, stops eating, or shows behavioral changes beyond what jet lag would explain',
  ],
  whenToActNow: [
    'Your baby develops a fever, vomiting, or diarrhea during travel — these symptoms are not caused by jet lag and suggest illness',
    'Your baby or toddler is excessively sleepy and difficult to wake, or shows significant changes in alertness that do not improve — this is not typical jet lag',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'flying-with-baby-ear-pressure',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Travel Safety Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Travel-Safety-Tips.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of General Medical Sciences. Circadian Rhythms.',
      url: 'https://nigms.nih.gov/education/fact-sheets/Pages/circadian-rhythms.aspx',
    },
  ],
};
