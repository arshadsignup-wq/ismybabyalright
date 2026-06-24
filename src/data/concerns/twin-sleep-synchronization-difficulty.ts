import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'twin-sleep-synchronization-difficulty',
  title: 'Getting My Twins on the Same Sleep Schedule',
  category: 'sleep',
  searchTerms: [
    'twin sleep schedule synchronization',
    'twins different sleep schedules',
    'how to sync twin sleep',
    'twins waking at different times',
    'twin sleep training',
    'one twin sleeping other not',
    'twins nap schedule',
    'twin bedtime routine',
    'twins same room sleep',
    'twin sleep tips newborn',
  ],
  quickAnswer:
    'Getting twins on a synchronized sleep schedule is one of the biggest challenges of raising multiples, but it is achievable and essential for parental survival. The key strategy is to wake both babies at the same time for feeds and put them down for naps and bedtime at the same time, even if one seems less tired. Most twins can and do share a room successfully — they often learn to sleep through each other\'s noises. It may take several weeks for a synchronized schedule to feel established.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the newborn phase, prioritize establishing a synchronized feeding schedule, which naturally leads to a synchronized sleep schedule. When one baby wakes to eat, wake the other. This feels counterintuitive (why wake a sleeping baby?) but it is the foundation of twin schedule management. Twins can safely room-share in separate bassinets or cribs in the same room — the AAP recommends room-sharing with parents for at least the first 6 months. Some parents notice that twins sleep better near each other, having been together in the womb.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 3-6 months, you can begin establishing more structured sleep routines. Put both babies down for naps and bedtime at the same time with a consistent routine. If one twin is a better sleeper than the other, resist the urge to create separate schedules — keeping them synchronized saves your sanity long-term. One twin crying rarely wakes the other as much as parents expect. If you are considering sleep training, many methods can be adapted for twins. Some parents find it easier to sleep train one twin at a time, moving the other temporarily.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As naps consolidate (from 3 to 2 naps around 6-8 months), keep twins on the same nap schedule. When one twin drops a nap before the other, continue with the lower number of naps for both — the twin who is not ready may need an earlier bedtime temporarily. Twins often have different temperaments and different sleep needs, which is normal. Aim for synchronized timing even if the exact duration differs. If one twin consistently sleeps much less than the other and seems overtired, discuss individually with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your twins have slightly different sleep needs — one may nap longer or fall asleep faster than the other',
    'One twin is a naturally better sleeper than the other — temperament differences are normal',
    'Your twins wake each other occasionally but generally settle back to sleep — they learn to sleep through each other\'s sounds',
    'Synchronizing sleep takes several weeks of consistency before it feels reliable',
  ],
  whenToMention: [
    'One twin is sleeping significantly more or less than the other despite being on the same schedule',
    'One twin snores loudly or has breathing pauses during sleep while the other does not',
    'You are so sleep-deprived from managing two different sleep schedules that your own health and functioning are suffering',
  ],
  whenToActNow: [
    'One twin is excessively sleepy or difficult to wake for feeds, especially in the newborn period',
    'One twin has new-onset breathing difficulties during sleep',
    'You are so exhausted that you are concerned about your ability to safely care for both babies — reach out for help immediately',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'circadian-rhythm-development',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'twin-feeding-schedule-overwhelm',
    'sleep-regression-4-months',
    'overtired-baby-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep for Multiples. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Sleep Tips for Twins.',
      url: 'https://www.sleepfoundation.org/children-and-sleep',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Sleep Patterns in Twins. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4791548/',
    },
  ],
};
