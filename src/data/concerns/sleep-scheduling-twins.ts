import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'sleep-scheduling-twins',
  title: 'Sleep Scheduling for Twins',
  category: 'sleep',
  searchTerms: [
    'twins sleep schedule',
    'getting twins to sleep at the same time',
    'one twin wakes the other',
    'twin sleep training',
    'twins sharing a room sleep',
    'synchronizing twin sleep',
    'newborn twins sleep routine',
    'twins nap schedule',
    'one twin sleeps better than the other',
  ],
  quickAnswer:
    'Getting twins on a synchronized sleep schedule is one of the most sought-after goals for parents of multiples  -  and one of the most challenging. The good news is that most twins can learn to sleep on a similar schedule with patience and consistency. It is also normal for twins to have different sleep temperaments, and flexibility is key.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn twins sleep in short bursts of 2-4 hours around the clock. Many parents find it helpful to wake the second twin for a feeding when the first wakes, which gradually synchronizes their schedules. Room-sharing is recommended by the AAP, but each twin should have their own separate sleep surface. Twins are often surprisingly good at sleeping through each other\'s crying, but if one consistently wakes the other, a temporary room separation during the adjustment period is reasonable.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is often when parents begin to see longer nighttime stretches and more predictable nap patterns. Working toward a consistent bedtime routine for both babies  -  even if the timing of individual steps varies slightly  -  helps signal sleep time. If one twin is sleeping through the night while the other is not, avoid comparing them. Each baby\'s sleep maturity develops on its own timeline.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By six months, many twins can be on a fairly synchronized schedule with two to three naps during the day and a longer stretch at night. If you choose to sleep train, you can train both twins at the same time  -  research suggests twins generally adjust to each other\'s crying within a few nights. Consistent wake times and nap times are the most powerful tools for keeping twins in sync.',
    },
    {
      ageRange: '12-24 months',
      context:
        'As twins transition from two naps to one, they may not make this shift at exactly the same time. One twin may need the morning nap dropped a few weeks before the other. During transitions, some flexibility is needed  -  the goal is to get them back on the same schedule once both have adjusted. Toddler twins often do well sharing a room, and their shared bedtime routine can become a comforting ritual for both.',
    },
  ],
  whenNormal: [
    'One twin is a "better sleeper" than the other  -  sleep temperament varies even between identical twins',
    'Your twins\' schedules are not perfectly aligned, especially in the first few months',
    'One twin wakes the other occasionally  -  most twins learn to sleep through their sibling\'s noise surprisingly quickly',
    'You feel exhausted and like you never get a break  -  sleep deprivation with multiples is intense and real',
  ],
  whenToMention: [
    'One twin consistently snores, gasps, or pauses breathing during sleep  -  this may indicate obstructive sleep apnea',
    'One twin is sleeping significantly less than expected for their age and seems overtired or irritable during the day',
    'You are so sleep-deprived that you feel unsafe driving, caring for your babies, or functioning during the day',
    'One twin has frequent night wakings well beyond what is expected for their age and nothing seems to help',
  ],
  whenToActNow: [
    'Either twin has an episode of paused breathing lasting more than 20 seconds, turns blue or pale, or becomes limp during sleep  -  call 911 immediately',
    'You are so exhausted that you are falling asleep while holding or feeding a baby  -  this is a safety emergency and you need immediate help from a partner, family member, or friend',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep: Back to Sleep for Every Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep Duration Recommendations for Infants and Toddlers. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/138/2/e20161601/52350/Recommended-Amount-of-Sleep-for-Pediatric',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Safe Sleep for Your Baby: Reduce the Risk of SIDS. NICHD.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
};
