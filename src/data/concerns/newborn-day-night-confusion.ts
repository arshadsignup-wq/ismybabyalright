import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-day-night-confusion',
  title: 'Newborn Day-Night Confusion',
  category: 'sleep',
  searchTerms: [
    'newborn day night confusion',
    'baby sleeps all day awake all night',
    'newborn has days and nights mixed up',
    'baby awake at night sleeping during day',
    'how to fix day night confusion',
    'newborn circadian rhythm',
    'baby nocturnal',
    'newborn reversed schedule',
    'when do babies learn day from night',
    'baby night owl',
  ],
  quickAnswer:
    'Day-night confusion is completely normal in the first few weeks of life. In the womb, your baby was lulled to sleep by your daytime movement and became more active at night. It typically resolves on its own by 6-8 weeks as your baby\'s circadian rhythm develops. Exposure to natural light during the day and keeping nighttime dim and calm helps speed the adjustment.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Brand new babies have no circadian rhythm yet and sleep in short bursts around the clock. They may have their longest sleep stretches during the day and be most wakeful at night. This is a carryover from life in the womb and is completely expected. Focus on your own rest when possible and know this will pass.',
    },
    {
      ageRange: '2-6 weeks',
      context:
        'Your baby\'s internal clock is starting to develop. Help it along by exposing baby to natural daylight during awake periods, keeping daytime feeds social and stimulating, and making nighttime feeds dim, quiet, and boring. Do not try to keep baby awake during the day to tire them out - this usually backfires and creates an overtired baby.',
    },
    {
      ageRange: '6-12 weeks',
      context:
        'By 6-8 weeks, most babies begin to sort out day from night. You should notice longer sleep stretches starting to shift to nighttime. If day-night confusion persists beyond 8 weeks, ensure your daytime routine includes plenty of light exposure and activity, and that the sleep environment is very dark at night.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Day-night confusion should be resolved by this age. If your baby still seems to have their schedule reversed, talk with your pediatrician. By 3-4 months, babies produce their own melatonin and their circadian rhythm should be reasonably established, with the longest sleep stretch happening at night.',
    },
  ],
  whenNormal: [
    'Your newborn sleeps for long stretches during the day and has alert periods at night in the first 6 weeks',
    'Baby gradually shifts toward longer nighttime sleep by 6-8 weeks',
    'Your baby is feeding well, gaining weight, and having adequate wet and dirty diapers regardless of sleep timing',
    'Day-night patterns improve gradually rather than overnight',
  ],
  whenToMention: [
    'Day-night confusion persists beyond 8-10 weeks with no improvement despite implementing daytime light exposure and nighttime darkness',
    'Your baby seems excessively sleepy during the day to the point where they are difficult to wake for feeds',
  ],
  whenToActNow: [
    'Your newborn is extremely difficult to wake, seems floppy or unresponsive, or has a weak cry',
    'Your baby is not feeding well, losing weight, or has fewer than 6 wet diapers per day after the first week',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Infant Sleep and Development. Eunice Kennedy Shriver National Institute of Child Health and Human Development.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
};
