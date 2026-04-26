import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sleep-schedule-disrupted-by-travel',
  title: 'Baby Sleep Disrupted by Travel',
  category: 'sleep',
  searchTerms: [
    'baby sleep disrupted by travel',
    'baby won\'t sleep on vacation',
    'travel sleep regression baby',
    'baby jet lag',
    'baby sleep schedule after travel',
    'hotel sleep with baby',
    'time zone change baby sleep',
    'baby naps while traveling',
    'how to get baby back on sleep schedule after trip',
    'traveling with baby sleep tips',
  ],
  quickAnswer:
    'Travel disruptions to your baby\'s sleep are temporary and very common. Changes in environment, time zones, and routine can throw off even the best sleeper for a few days. Most babies readjust to their normal schedule within 3-7 days of returning home with consistent routines.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies are actually some of the easiest travelers because they can sleep almost anywhere. However, they are sensitive to overstimulation from new environments. Keep their sleep environment as consistent as possible - bring familiar sleep sacks, white noise machines, and try to maintain feeding schedules. Darkness and white noise are your best friends while traveling.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age are developing more regular sleep patterns, which makes disruptions more noticeable. Try to honor wake windows even if nap locations change. A portable blackout shade and portable sound machine can help recreate their sleep environment. For time zone changes, shift the schedule gradually by 15-30 minutes per day.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Separation anxiety may make sleeping in unfamiliar places harder. Bring a familiar crib sheet or lovey (if age-appropriate) that smells like home. Try to keep at least the bedtime routine consistent even if everything else is different. Your baby may need extra comfort during travel but will bounce back once home.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers thrive on routine, and travel upends it. They may resist sleep in new places or have trouble with nap transitions on the road. Maintain your bedtime routine as closely as possible, even in abbreviated form. When you return home, go back to your normal schedule immediately rather than letting travel habits linger.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Older toddlers can be prepared for travel with conversations about what to expect. Bringing their own pillow or blanket can provide comfort. They may be excited and resist sleep, but consistent boundaries help. After returning home, most toddlers readjust within a few days if you reestablish the routine right away.',
    },
  ],
  whenNormal: [
    'Baby has trouble falling asleep in unfamiliar surroundings for the first night or two',
    'Nap schedules are disrupted during the trip but normalize within a week of returning home',
    'Baby wakes more frequently at night while away from home',
    'Baby takes 3-7 days to readjust after crossing time zones',
    'More fussiness or clinginess around sleep times while traveling',
  ],
  whenToMention: [
    'Your baby\'s sleep does not return to normal within 2 weeks of returning home from travel',
    'Travel sleep disruptions seem to trigger a broader sleep regression that persists',
  ],
  whenToActNow: [
    'Your baby shows signs of illness after travel such as high fever, persistent vomiting, or extreme lethargy',
    'Your baby has difficulty breathing or seems unusually unwell after a flight or trip',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Flying with Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Flying-with-Baby.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Travel Safety Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Travel-Safety-Tips.aspx',
    },
  ],
};
