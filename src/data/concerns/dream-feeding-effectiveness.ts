import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dream-feeding-effectiveness',
  title: 'Do Dream Feeds Actually Work?',
  category: 'feeding',
  searchTerms: [
    'dream feed baby',
    'dream feeding effective',
    'do dream feeds work',
    'dream feed schedule',
    'dream feeding before you sleep',
    'dream feed help baby sleep',
    'dream feeding pros cons',
    'how to dream feed',
    'dream feed disrupting sleep',
    'when to stop dream feed',
  ],
  quickAnswer:
    'A dream feed involves feeding your sleeping baby before you go to bed, typically around 10-11 PM, with the goal of helping them sleep longer into the night. Research is mixed on effectiveness. Some families find it extends their baby\'s longest sleep stretch, while others find it disrupts sleep cycles. It is worth trying for a week to see if it helps your baby.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Dream feeds are most commonly tried during this period. Gently lift baby without fully waking them and offer breast or bottle. Many newborns will eat while still drowsy. If it helps extend the next sleep stretch by an hour or more, it may be worthwhile for your family.',
    },
    {
      ageRange: '4-6 months',
      context: 'Dream feeds may still be helpful at this age. If baby consistently sleeps from 7 PM to 3 AM, a dream feed at 10-11 PM may extend that stretch to 5-6 AM. However, if it seems to disrupt sleep or cause more waking, it is fine to stop.',
    },
    {
      ageRange: '6-9 months',
      context: 'By this age, dream feeds become less necessary as many babies can sleep longer stretches. If your baby was benefiting from a dream feed, you can try dropping it to see if they sleep through anyway. If they start waking earlier again, you can reintroduce it temporarily.',
    },
    {
      ageRange: '9-12 months',
      context: 'Most babies no longer need a dream feed by this age. If you are still offering one, try gradually discontinuing it. Most babies will adjust within a few nights.',
    },
    {
      ageRange: '12-24 months',
      context: 'Dream feeds are not recommended at this age. If your toddler is still waking to eat at night, they likely do not need the calories and are waking out of habit. Discuss night weaning strategies with your pediatrician.',
    },
  ],
  whenNormal: [
    'Dream feed helps baby sleep an extra 1-2 hours',
    'Baby eats during the dream feed without fully waking',
    'You stop the dream feed and baby adjusts within a few nights',
  ],
  whenToMention: [
    'Baby wakes up more after you introduce a dream feed',
    'Baby is over 9 months and seems to depend on the dream feed to sleep through the night',
    'You are unsure when or if to discontinue the dream feed',
  ],
  whenToActNow: [
    'Baby chokes or has difficulty breathing during a dream feed',
    'Baby is not gaining weight and night feeds (including dream feeds) seem insufficient',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['night-weaning-readiness', 'excessive-night-feeding', 'baby-nursing-to-sleep-only'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Sleep and Night Feeding Patterns. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Infant Sleep Consolidation and Feeding Practices. Sleep Medicine Reviews, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
