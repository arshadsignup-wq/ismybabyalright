import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-nap-dropping-signs',
  title: 'Signs My Toddler Is Ready to Drop a Nap',
  category: 'sleep',
  searchTerms: [
    'toddler dropping nap signs',
    'when do toddlers stop napping',
    'toddler ready to drop nap',
    'toddler fighting nap',
    'toddler nap refusal',
    'toddler skipping nap',
    'when to stop nap toddler',
    'toddler nap transition signs',
    'toddler not tired for nap',
    'toddler outgrowing nap',
  ],
  quickAnswer:
    'Most toddlers transition from two naps to one between 12-18 months, and many drop their final nap between ages 3-4, though some children nap until age 5. Signs that your toddler is ready to drop a nap include consistently taking a long time to fall asleep for naps, napping well but then fighting bedtime, or skipping naps without becoming overtired. Nap transitions are gradual and often take 2-4 weeks to settle.',
  byAge: [
    {
      ageRange: '12-15 months',
      context:
        'Many parents think their toddler is ready to drop to one nap around 12 months when nap resistance starts, but most children are not truly ready until 14-18 months. One or two days of nap refusal is not a sign to drop a nap — it is often just developmental disruption from learning to walk or talk. If your toddler is consistently fighting one of their two naps for two or more weeks, sleeping well at the other nap, and not becoming overtired, they may be ready. The morning nap is typically the one to drop.',
    },
    {
      ageRange: '15-24 months',
      context:
        'The transition from two naps to one is one of the hardest nap transitions. During the adjustment period, your toddler may be overtired in the afternoon. Temporarily moving bedtime earlier (by 30-60 minutes) can help bridge the gap. The single nap usually settles at around 12:30-1:00 PM and lasts 1.5-3 hours. If your toddler transitions to one nap and becomes consistently cranky, irritable, and overtired by late afternoon, they may not have been ready and you can try reintroducing the second nap temporarily.',
    },
    {
      ageRange: '2.5-4 years',
      context:
        'Most children drop their final nap between ages 3-4. Signs include consistently not falling asleep during nap time (lying quietly but awake for 30+ minutes), napping well but then being unable to fall asleep at bedtime until very late, or being fine without a nap and not becoming overtired by evening. When dropping the last nap, many children benefit from a "quiet time" period in the afternoon where they rest, look at books, or engage in calm activities. Move bedtime earlier temporarily to prevent overtiredness.',
    },
  ],
  whenNormal: [
    'Your toddler fights a nap for several days but then returns to napping normally — this is often a temporary phase, not a sign to drop the nap',
    'Your toddler has good days and bad days during a nap transition — inconsistency is expected',
    'Your toddler is cranky in the late afternoon during a nap transition but adjusts within 2-4 weeks',
    'Your 3-4 year old no longer falls asleep during nap time but is generally in a good mood until bedtime',
  ],
  whenToMention: [
    'Your toddler has dropped all naps before age 2 and seems chronically overtired, irritable, or is having behavioral issues',
    'Your toddler\'s sleep has been disrupted for more than a month and you cannot identify a pattern',
    'Your toddler seems excessively sleepy during the day despite adequate nighttime sleep',
  ],
  whenToActNow: [
    'Your toddler is suddenly sleeping much more than usual or is difficult to wake, which could indicate illness',
    'Your toddler is so overtired that they are having frequent injuries or accidents due to poor coordination and attention',
    'Your toddler snores loudly, gasps, or pauses breathing during sleep, which may indicate sleep apnea affecting sleep quality',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'circadian-rhythm-development',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-one-nap-transition',
    'sleep-regression-18-months',
    'overtired-baby-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits: How Many Hours Does Your Child Need? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Napping in Children: A Review. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4791548/',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. How Much Sleep Do Babies and Kids Need?',
      url: 'https://www.sleepfoundation.org/children-and-sleep/how-much-sleep-do-kids-need',
    },
  ],
};
