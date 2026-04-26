import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-waking-at-5am',
  title: 'Baby Waking Too Early (5am)',
  category: 'sleep',
  searchTerms: [
    'baby waking at 5am',
    'baby waking too early',
    'toddler early morning waking',
    'baby up before 6am',
    'how to get baby to sleep later',
    'early morning wakeup baby',
    'baby wakes at dawn',
    'why does my baby wake so early',
    'baby early riser',
    'toddler waking at 5am every day',
  ],
  quickAnswer:
    'Early morning waking (before 6am) is one of the trickiest sleep challenges, but it is very common. It is often caused by too late or too early of a bedtime, too much daytime sleep, light exposure at dawn, or the natural drop in sleep pressure in the early morning hours. Small schedule adjustments can make a big difference.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Very early wake-ups are normal for newborns, as they do not yet have a mature circadian rhythm. Their day often starts between 5-7am regardless of bedtime. Focus on keeping the room dark and calm during early morning feeds and your baby may fall back to sleep. Do not worry about "fixing" early waking at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As circadian rhythms develop, early waking can be influenced by light exposure. Blackout curtains are very helpful. Make sure naps are not running too late in the day, as a too-late last nap can paradoxically lead to an early morning. Most babies this age do best with a bedtime between 6:30-7:30pm.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Early waking is often connected to the nap schedule. If your baby is getting too much daytime sleep, they may not have enough sleep pressure to make it to a reasonable morning time. Ensure wake windows are appropriate and the last nap is not too long or too late. A too-late bedtime can also cause overtiredness, which triggers early waking.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Nap transitions (especially dropping to one nap) can temporarily cause early morning waking. A single nap starting too early can also perpetuate the cycle. Try to hold the nap until at least 12:30-1pm if possible. Blackout curtains and white noise continue to be helpful tools.',
    },
    {
      ageRange: '2-3 years',
      context:
        'An "okay to wake" clock can teach your toddler to stay quietly in bed until an acceptable time. Some early waking at this age is caused by dropping the nap entirely - if your child no longer naps, bedtime may need to move earlier temporarily. Morning light and a consistent wake time help regulate the internal clock.',
    },
  ],
  whenNormal: [
    'Your baby consistently wakes between 6-7am regardless of bedtime',
    'Occasional 5am wake-ups that resolve on their own within a few days',
    'Early waking during a nap transition that settles within 2-3 weeks',
    'Waking a bit earlier during summer months when sunrise is early',
  ],
  whenToMention: [
    'Your baby consistently wakes before 5:30am and seems tired and cranky all day despite schedule adjustments',
    'Early waking is accompanied by loud snoring, mouth breathing, or restless sleep that could suggest a breathing issue',
  ],
  whenToActNow: [
    'Your baby wakes suddenly with screaming, stiffness, or unusual movements that could suggest a seizure or night terror',
    'Your baby seems ill with fever, vomiting, or extreme fussiness accompanying the early waking',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleeping Through the Night. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Sleeping-Through-the-Night.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. How Much Sleep Do Babies and Kids Need? SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/children-and-sleep/how-much-sleep-do-kids-need',
    },
  ],
};
