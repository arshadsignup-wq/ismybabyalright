import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'dropped-nap-too-early',
  title: 'Dropped a Nap Too Early: How to Fix It',
  category: 'sleep',
  searchTerms: [
    'baby dropped nap too early',
    'toddler dropped nap too soon',
    'baby refusing nap too early',
    'how to get nap back baby',
    'toddler won\'t nap anymore too young',
    'baby skipping nap overtired',
    'nap transition too soon',
    'baby fighting naps too early',
    'bring back dropped nap',
  ],
  quickAnswer:
    'If your baby or toddler dropped a nap and is now showing signs of overtiredness  -  crankiness, night waking, early morning wakings, or shorter remaining naps  -  the nap may have been dropped too soon. Nap refusal for 1-2 weeks does not necessarily mean it is time to drop the nap; it may be a developmental phase, sleep regression, or schedule issue. You can often reintroduce the nap with some adjustments.',
  byAge: [
    {
      ageRange: '3-6 months',
      context:
        'Babies this age typically need 3-4 naps. If your baby suddenly refuses the late afternoon catnap, try shortening earlier naps slightly or adjusting wake windows before assuming it should be dropped. A 4th nap is often just a brief 20-30 minute catnap to bridge the gap to bedtime. If the nap is truly gone, temporarily move bedtime 30-60 minutes earlier to compensate.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The transition from 3 naps to 2 typically happens around 7-9 months. If your baby drops the third nap before 6 months and is showing signs of overtiredness, the transition may be premature. To bring back the third nap, try offering it in motion (stroller, car) or as a brief contact nap. If it truly will not happen, move bedtime significantly earlier  -  as early as 5:30-6:00 PM temporarily  -  to prevent a cycle of overtiredness.',
    },
    {
      ageRange: '12-24 months',
      context:
        'The 2-to-1 nap transition is one of the trickiest and typically happens between 14 and 18 months. Many toddlers start refusing one nap around 12-13 months, but most are not truly ready to drop it until 14-18 months. Signs a toddler dropped a nap too early include increased night wakings, early morning wakings before 6 AM, melting down in the late afternoon, and falling asleep in the car or stroller. Try alternating 1-nap and 2-nap days or capping the morning nap to preserve the afternoon nap.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Most children need their single remaining nap until age 3 or later. If your 2-year-old starts refusing naps, try implementing quiet time in a dim room even if they do not sleep  -  many will drift off after a few days. If the nap is truly gone before age 3, move bedtime to 6:30-7:00 PM and do not be surprised if your toddler is extra cranky in the late afternoon for a few weeks during the adjustment.',
    },
  ],
  whenNormal: [
    'Your baby fights a nap for a few days during a developmental leap or illness but then accepts it again',
    'Nap transitions are a bit bumpy with some good days and some challenging days over a 2-4 week period',
    'Your toddler occasionally skips a nap but handles it well with an earlier bedtime',
    'After dropping a nap, your child adjusts within 2-4 weeks and nighttime sleep is consolidated',
  ],
  whenToMention: [
    'Your baby seems chronically overtired after a nap transition  -  cranky, extra clingy, night waking increased  -  and it has been more than 3-4 weeks without improvement',
    'You cannot figure out an appropriate schedule that balances naps and nighttime sleep for your child\'s age',
    'Sleep problems are affecting your child\'s mood, feeding, or your family\'s well-being significantly',
  ],
  whenToActNow: [
    'Your child is excessively sleepy during the day, falling asleep at unusual times (during meals, during play), or is very difficult to keep awake  -  this may indicate a medical issue rather than a schedule problem',
    'Sudden loss of all daytime sleep combined with extreme nighttime restlessness, snoring, or gasping during sleep',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Naps. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Naps.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits: How Many Hours Does Your Child Need? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. When Do Kids Stop Napping? SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/children-and-sleep/when-do-kids-stop-napping',
    },
  ],
};
