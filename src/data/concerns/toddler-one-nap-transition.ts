import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-one-nap-transition',
  title: 'Transitioning My Toddler to One Nap',
  category: 'sleep',
  searchTerms: [
    'toddler transition to one nap',
    'when to go to one nap',
    'toddler two naps to one',
    'one nap schedule toddler',
    'toddler fighting morning nap',
    'one nap transition age',
    'how to transition to one nap',
    'toddler ready for one nap',
    'one nap schedule 14 months',
    'toddler nap consolidation',
  ],
  quickAnswer:
    'Most toddlers transition from two naps to one nap between 14 and 18 months of age. The transition typically takes 2-4 weeks and can be bumpy — expect some overtired days. Signs your toddler is ready include consistently fighting the morning nap, taking so long to fall asleep for one nap that the other is affected, or napping well but fighting bedtime. The single nap usually lands around midday and lasts 1.5-3 hours.',
  byAge: [
    {
      ageRange: '12-14 months',
      context:
        'While some toddlers show signs of nap resistance around 12 months, most are not truly ready for one nap until 14-18 months. The 12-month sleep regression, developmental leaps, and new physical skills (walking) can cause temporary nap disruptions that resolve on their own. If your toddler fights one nap for a few days but still seems to need it (gets cranky and overtired without it), wait before making the switch. Dropping a nap too early often leads to chronic overtiredness and worse sleep overall.',
    },
    {
      ageRange: '14-18 months',
      context:
        'This is the most common window for the two-to-one nap transition. When you are ready to make the switch, gradually push the morning nap later by 15-30 minutes every few days until it lands around 12:00-1:00 PM. During the transition, temporarily move bedtime 30-60 minutes earlier to prevent overtiredness. Some parents use a "one nap / two nap" alternating schedule for a few weeks — offering two naps on days when their toddler wakes early or seems especially tired, and one nap on other days.',
    },
    {
      ageRange: '18-24 months',
      context:
        'By 18-24 months, most toddlers have fully settled into a one-nap schedule. The single nap typically lasts 1.5-3 hours and occurs in the early afternoon. If your toddler is still on two naps at 18+ months and is sleeping well, there is no need to force a change. Every child is different. If the transition has been rocky and your toddler seems chronically overtired (frequent tantrums, early morning waking, nighttime wake-ups), consider whether the nap timing or length needs adjustment.',
    },
  ],
  whenNormal: [
    'Your toddler is inconsistent during the transition — some days needing two naps, other days doing fine with one',
    'Your toddler is crankier than usual in the late afternoon during the first 2-4 weeks of the transition',
    'Your toddler\'s single nap varies in length from day to day as the schedule settles',
    'The transition takes several weeks to fully complete',
  ],
  whenToMention: [
    'Your toddler dropped to one nap before 12 months and seems chronically overtired',
    'Your toddler\'s total daily sleep has dropped significantly and they seem exhausted, irritable, and are having frequent meltdowns',
    'Your toddler cannot stay awake long enough to make it to a midday nap and falls asleep in the car or at meals',
  ],
  whenToActNow: [
    'Your toddler is excessively sleepy during the day despite adequate nighttime sleep, which could indicate an underlying medical issue',
    'Your toddler has new-onset snoring, gasping, or breathing pauses during sleep that are affecting sleep quality',
    'Your toddler is so overtired that they are having frequent injuries from impaired coordination',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'circadian-rhythm-development',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-nap-dropping-signs',
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
      org: 'NSF',
      citation:
        'National Sleep Foundation. Children and Sleep.',
      url: 'https://www.sleepfoundation.org/children-and-sleep',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Sleep in Toddlers: Napping Patterns. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4791548/',
    },
  ],
};
