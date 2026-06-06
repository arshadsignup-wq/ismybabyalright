import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-nap-transition-1-to-0',
  title: 'When Toddlers Stop Napping Entirely',
  category: 'sleep',
  searchTerms: [
    'toddler dropping all naps',
    'when do toddlers stop napping',
    'toddler no nap',
    'preschooler stopped napping',
    'toddler refusing nap completely',
    'when do kids stop napping',
    'quiet time instead of nap',
    'toddler outgrowing nap',
    'does my toddler still need a nap',
    'toddler nap to no nap transition',
  ],
  quickAnswer:
    'Most children stop napping between ages 3 and 5, with the average being around age 3.5. However, there is wide variation - some children drop their nap by 2.5 while others still benefit from napping at 5. Replacing the nap with quiet time helps your child still get the rest they need during this transition.',
  byAge: [
    {
      ageRange: '2-2.5 years',
      context:
        'Most 2-year-olds still need their daily nap. If your child is refusing naps at this age, it is more likely a phase related to the 2-year sleep regression or increasing independence rather than genuine readiness to stop napping. Try adjusting the timing, keeping the routine consistent, and ensuring the sleep environment is conducive to rest. Most toddlers who skip naps at this age still clearly need them based on their behavior by late afternoon.',
    },
    {
      ageRange: '2.5-3 years',
      context:
        'Some children begin showing signs of genuine readiness to drop their nap around 2.5-3 years. Key indicators include lying quietly in bed but not sleeping for 30+ minutes consistently, napping well but then struggling with bedtime (taking over 45 minutes to fall asleep), or seeming well-rested and happy even on days without a nap. If this happens, you might try alternating nap and no-nap days.',
    },
    {
      ageRange: '3-4 years',
      context:
        'This is the most common window for dropping the last nap. Your child may transition gradually, napping some days and skipping others. On no-nap days, implement a quiet time of 45-90 minutes where your child can look at books, do puzzles, or rest quietly in their room. Move bedtime earlier on no-nap days, sometimes 30-60 minutes earlier, to prevent overtiredness and make up some of the lost sleep.',
    },
    {
      ageRange: '4-5 years',
      context:
        'By age 4-5, most children have fully dropped their nap. Some preschools still have rest time, which is fine even if your child does not actually sleep. If your child is 5 and still consistently napping for long periods during the day and sleeping well at night too, mention it at their well-child visit to ensure there are no underlying reasons for the excessive daytime sleepiness.',
    },
  ],
  whenNormal: [
    'Your child is between 3-5 years old and gradually needs the nap less and less',
    'Your child skips the nap and remains in a generally good mood until bedtime with only mild crankiness in the late afternoon',
    'Your child lies quietly during nap time but does not fall asleep for 2+ weeks consistently',
    'On nap days, your child has significant difficulty falling asleep at bedtime or wakes very early the next morning',
  ],
  whenToMention: [
    'Your child under 2.5 has completely stopped napping and seems chronically overtired with frequent meltdowns',
    'After dropping the nap, your child seems excessively sleepy during the day, falls asleep during meals or activities, or has difficulty staying alert',
    'Your child over 5 still requires long daily naps and seems excessively tired without them',
  ],
  whenToActNow: [
    'Your child has sudden excessive sleepiness, is difficult to wake, or falls asleep in unusual situations (during eating, mid-play)',
    'Extreme fatigue is accompanied by snoring, gasping during sleep, behavioral changes, or signs of illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits: How Many Hours Does Your Child Need? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. When Do Kids Stop Napping? SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/children-and-sleep/when-do-kids-stop-napping',
    },
    {
      org: 'NIH',
      citation:
        'Thorpe K et al. Napping, development and health from 0 to 5 years: a systematic review. Arch Dis Child. 2015;100(7):615-622.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25691291/',
    },
  ],
  relatedConcernSlugs: ['toddler-dropping-nap', 'toddler-refusing-nap', 'ideal-bedtime-by-age'],
};
