import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'sleep-regression-4-months',
  title: '4-Month Sleep Regression',
  category: 'sleep',
  searchTerms: [
    '4 month sleep regression',
    'baby sleep regression 4 months',
    'why is my 4 month old not sleeping',
    '4 month sleep regression how long',
    'baby suddenly not sleeping at 4 months',
    'sleep regression at 16 weeks',
    '4 month sleep regression signs',
    'when does 4 month sleep regression start',
    'how to survive 4 month sleep regression',
    'is there a 4 month sleep regression',
  ],
  quickAnswer:
    'The 4-month sleep regression is actually a permanent maturation of your baby\'s sleep architecture, not a temporary setback. As your baby\'s brain develops, their sleep cycles become more adult-like with distinct stages, which can temporarily cause more frequent waking. This is a sign of healthy neurological development.',
  byAge: [
    {
      ageRange: '3-4 months',
      context:
        'Around 12-16 weeks, your baby\'s sleep patterns fundamentally change. Newborn sleep is fairly simple with only two states, but now your baby develops the full spectrum of sleep stages including light sleep, deep sleep, and REM. These transitions create natural wake-up points every 45-90 minutes, and your baby is learning to navigate them.',
    },
    {
      ageRange: '4-5 months',
      context:
        'During this peak period, you may notice more frequent night wakings, shorter naps, increased fussiness at bedtime, and changes in feeding patterns. Your baby is also becoming more aware of their surroundings and may resist sleep simply because the world is so interesting. This developmental leap typically lasts 2-6 weeks, though some babies transition more smoothly.',
    },
    {
      ageRange: '5-6 months',
      context:
        'Most babies begin to adjust to their new sleep architecture by this age. While they won\'t return to newborn-style sleep, you should start seeing some consolidation of night sleep and more predictable nap patterns. This is an ideal time to establish gentle, consistent sleep routines that support your baby\'s emerging ability to link sleep cycles.',
    },
    {
      ageRange: '6-9 months',
      context:
        'If sleep difficulties persist beyond 6 months, they\'re usually related to new factors rather than the original 4-month regression: separation anxiety, teething, new motor skills, or schedule adjustments needed as wake windows lengthen. The brain changes that happened at 4 months are now permanent, but your baby is increasingly capable of longer consolidated sleep.',
    },
  ],
  whenNormal: [
    'Your baby suddenly starts waking every 1-2 hours after previously sleeping in longer stretches',
    'Naps become shorter, more difficult to settle for, or seem to disappear entirely',
    'Your baby seems more alert and fights sleep, even when clearly tired',
    'Changes started around 12-20 weeks of age and coincide with other developmental leaps like rolling or increased social engagement',
    'Your baby is otherwise healthy, eating well, and meeting developmental milestones',
  ],
  whenToMention: [
    'Sleep difficulties persist beyond 8 weeks with no improvement, and you\'re concerned about your baby\'s daytime function',
    'Your baby seems excessively tired during the day, has trouble staying awake for feeds, or seems to have lost developmental skills',
    'Night wakings are accompanied by inconsolable crying lasting more than 45 minutes, or your baby seems to be in pain',
    'You\'re experiencing symptoms of severe sleep deprivation affecting your mental health or ability to care for your baby safely',
  ],
  whenToActNow: [
    'Your baby has pauses in breathing, gasping, or choking during sleep',
    'Your baby is very difficult to wake, seems floppy, or has a bluish tinge to lips or skin',
    'Sleep disruption is accompanied by high fever, refusal to eat, or signs of dehydration',
  ],
  relatedMilestones: [
    'sleep-architecture-development',
    'gross-motor-rolling',
    'social-engagement',
    'cognitive-awareness',
  ],
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
        'National Sleep Foundation. Baby Sleep Patterns and Development. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones: 4 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-4-Months.aspx',
    },
  ],
};
