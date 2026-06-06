import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sleep-sack-transition',
  title: 'Transitioning Out of a Sleep Sack',
  category: 'sleep',
  searchTerms: ['sleep sack transition','when to stop sleep sack','toddler outgrowing sleep sack','transitioning from sleep sack blanket','sleep sack too old','when to use blanket instead of sleep sack','stop using sleep sack','toddler sleep sack to blanket','weaning off sleep sack','sleep sack age limit'],
  quickAnswer: 'There is no specific age when you must stop using a sleep sack. Many toddlers use them until age 2-3 or beyond. When you are ready to transition, switch to a thin blanket (after age 1) or lightweight pajamas. If the sleep sack helps your toddler stay in bed, there is no rush to stop.',
  byAge: [
    { ageRange: '0-12 months', context: 'Sleep sacks are the safest option for warmth since loose blankets are not recommended in the first year. Use a TOG-rated sleep sack appropriate for your room temperature. There is no reason to transition away from a sleep sack before 12 months.' },
    { ageRange: '12-18 months', context: 'After 12 months, you can introduce a thin blanket if desired, but a sleep sack remains a great option. Sleep sacks can also discourage early crib climbing since they limit leg movement. If your child is walking, use a footed sleep sack or one with leg holes for safety.' },
    { ageRange: '18 months-3 years', context: 'Many toddlers continue using sleep sacks happily and they serve as a positive sleep cue. If your child is climbing out of the crib, a sleep sack with leg holes still works. To transition, try the blanket for naps first, then nighttime. Some children switch seamlessly while others resist - go at their pace.' },
    { ageRange: '3+ years', context: 'Some preschoolers still love their sleep sack. If it fits and they want it, there is no harm. When they are ready, the transition to a blanket is usually smooth. Let your child pick out a special blanket to build excitement about the change.' },
  ],
  whenNormal: ['Your toddler still uses a sleep sack and is happy with it','The transition to a blanket takes a few nights to adjust','Your child prefers one option over the other','You switch between sleep sack and blanket depending on temperature'],
  whenToMention: ['Your child seems too hot or too cold in their current sleep setup','Your child has restricted movement that concerns you','You are unsure about safe bedding options for your child\'s age'],
  whenToActNow: ['Your baby shows signs of overheating: flushed skin, excessive sweating, rapid breathing','Your child gets tangled in bedding and seems unable to free themselves'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'Moon RY et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics. 2022;150(1):e2022057990.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Swaddling: Is it Safe? HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Swaddling-Is-it-Safe.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Baby Sleep Sacks. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/baby-sleep' },
  ],
  relatedConcernSlugs: ['baby-swaddle-weaning-difficulty','baby-sleep-environment-optimal','sleep-safe-environment-checklist'],
};
