import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-refusing-nap',
  title: 'Toddler Refusing Afternoon Nap',
  category: 'sleep',
  searchTerms: [
    'toddler refusing nap',
    'toddler won\'t nap',
    'toddler nap strike',
    'when do toddlers stop napping',
    'toddler skipping nap',
    '2 year old won\'t nap',
    'toddler fights afternoon nap',
    'is my toddler done with naps',
    'toddler nap regression',
    'how to get toddler to nap',
    'toddler quiet time instead of nap',
  ],
  quickAnswer:
    'Many toddlers go through phases of refusing naps, especially around 2 years old. This is often a nap strike rather than a true readiness to drop the nap. Most children still need a nap until age 3-4. Stay consistent with offering quiet time, and the nap usually returns within 1-2 weeks.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Nap refusal at this age is often a false alarm related to the 2-to-1 nap transition or a developmental leap. If your toddler suddenly refuses their afternoon nap, check whether the morning nap needs to drop or shift. Most 12-18 month-olds still need 2-3 hours of daytime sleep.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Nap resistance around 18-24 months is extremely common and usually temporary. Your toddler\'s growing independence means they may protest nap time. The 18-month sleep regression can also play a role. Stay consistent with the routine, keep the room dark and calm, and most toddlers return to napping within a week or two.',
    },
    {
      ageRange: '2-3 years',
      context:
        'The 2-year nap strike is notorious. Many parents worry their child is done with naps, but most 2-year-olds still need one. Try adjusting the nap time slightly later, increasing morning activity, and keeping the pre-nap routine calming. If your child truly will not sleep, offer quiet time in their room instead - they may surprise you by falling asleep.',
    },
    {
      ageRange: '3+ years',
      context:
        'Between 3-5 years, most children genuinely drop their nap. Signs your child is truly ready include: they lie quietly during nap time but do not fall asleep for 2 or more weeks straight, they are not cranky in the late afternoon, and bedtime goes smoothly without excessive overtiredness. When naps drop, bedtime should move 30-60 minutes earlier.',
    },
  ],
  whenNormal: [
    'Your toddler refuses the nap for a few days but then starts napping again',
    'Nap resistance coincides with a new skill, schedule change, or illness',
    'Your child lies quietly during nap time even if they do not always sleep',
    'Occasional skip days mixed in with regular nap days',
    'Your 3-4 year old gradually takes longer to fall asleep at nap time and eventually stops sleeping',
  ],
  whenToMention: [
    'Your child under age 3 has stopped napping entirely and is consistently overtired, cranky, and struggling through the afternoon',
    'Dropping naps seems to coincide with behavioral changes, appetite loss, or developmental regression',
  ],
  whenToActNow: [
    'Your child is so exhausted from lack of napping that they fall asleep in unsafe situations like during meals or car rides and cannot be roused easily',
    'Severe irritability or behavioral deterioration that makes you concerned about your child\'s overall health',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Naps. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Naps.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Toddler Sleep. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/toddler-sleep',
    },
  ],
};
