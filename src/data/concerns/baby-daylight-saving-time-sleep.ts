import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-daylight-saving-time-sleep',
  title: 'Adjusting Baby\'s Sleep for Daylight Saving Time',
  category: 'sleep',
  searchTerms: ['baby daylight saving time', 'toddler daylight saving sleep', 'baby time change sleep', 'toddler clock change sleep', 'baby spring forward sleep', 'baby fall back sleep', 'time change baby schedule', 'daylight saving baby adjustment', 'clock change toddler bedtime', 'baby sleep schedule time change'],
  quickAnswer: 'Daylight saving time can disrupt your baby\'s or toddler\'s sleep schedule, but most children adjust within 3-7 days. The "spring forward" (losing an hour) tends to be harder than "fall back" (gaining an hour). The gradual approach works best: shift your child\'s schedule by 15 minutes every 1-2 days in the week leading up to the time change. Adjust naps, meals, and bedtime together. Natural light exposure in the morning and dimming lights in the evening help reset the internal clock. Be patient - even with preparation, some temporary sleep disruption is normal.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies are especially sensitive to schedule changes because their sleep is tightly linked to their circadian rhythm. For the spring-forward transition, start putting your baby to bed 15 minutes earlier each day for 4 days before the change. For fall-back, shift bedtime 15 minutes later each day. Maintain your usual bedtime routine - the consistency of the routine matters more than the exact clock time. Expose your baby to natural morning light to help reset their internal clock. Most babies adjust within a week.' },
    { ageRange: '1-3 years', context: 'Toddlers may resist the schedule shift more vocally than babies. Use the gradual 15-minute approach for bedtime, nap time, and meal times. During the adjustment: keep the room dark for sleep (blackout curtains help in spring/summer when it\'s light late), get outside in the morning for natural light exposure, maintain the same bedtime routine, and be flexible with naps if your toddler seems unusually tired. If your toddler uses an "OK to wake" clock, adjust it gradually along with the schedule. Expect some crankiness for a few days - this is temporary.' },
  ],
  whenNormal: ['Difficulty falling asleep for a few nights after the time change', 'Waking earlier or later than usual for 3-7 days', 'Slightly off nap schedule for a week', 'Mild crankiness during the adjustment period'],
  whenToMention: ['Your child\'s sleep has not adjusted after 2 weeks', 'The time change revealed a pre-existing sleep issue you want to address', 'You are struggling with persistent early morning waking'],
  whenToActNow: ['Sleep disruption is severe and causing significant daytime behavioral issues beyond what is expected from a simple schedule adjustment'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-fighting-sleep', 'toddler-waking-too-early', 'sleep-regression', 'toddler-napping-too-late-in-day'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleep and Daylight Saving Time. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Sleep Foundation. Daylight Saving Time and Sleep.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Healthy Sleep Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx' },
  ],
};
