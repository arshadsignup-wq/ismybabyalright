import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-irregular-sleep-patterns',
  title: 'Irregular Newborn Sleep Patterns',
  category: 'sleep',
  searchTerms: ['newborn sleep pattern erratic', 'baby sleep schedule irregular', 'newborn day night confusion', 'baby wont sleep at night', 'newborn sleep unpredictable', 'baby sleeping too much day', 'newborn awake all night', 'baby sleep regression newborn', 'when do babies sleep through night', 'newborn circadian rhythm'],
  quickAnswer: 'Newborn sleep is naturally irregular and unpredictable. Babies are not born with a circadian rhythm and cannot distinguish day from night. Sleep gradually becomes more organized over the first 3-4 months. This is biologically normal and not something you are doing wrong.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborns sleep 14-17 hours per day in short bursts of 1-3 hours, around the clock. They do not yet have a circadian rhythm (internal clock) and cannot distinguish day from night. Day-night confusion is very common: baby may sleep long stretches during the day and be wide awake at night. This is because in the womb, your movements rocked baby to sleep during the day while baby was active at night. You can help establish day-night patterns by: keeping daytime bright with normal household noise, making nighttime dark and quiet with minimal stimulation during feeds, and exposing baby to natural light during the day. Newborns need to eat every 2-3 hours, so sleeping through the night is not expected or safe at this age.' },
    { ageRange: '1-3 months', context: 'Sleep patterns begin to organize slightly. Baby may start having one longer stretch of sleep (3-5 hours) often in the early night. The circadian rhythm begins to develop around 6-8 weeks. Continue day-night cues. Total sleep is around 14-16 hours. Some babies develop a predictable pattern; others remain erratic. Both are normal.' },
    { ageRange: '3-6 months', context: 'The circadian rhythm is more established. Many babies begin sleeping longer stretches at night (6-8 hours), though this varies widely. Daytime naps may become more predictable, typically 3-4 naps per day. A 4-month sleep regression is common as sleep architecture matures, causing temporary disruption in babies who were sleeping well.' },
    { ageRange: '6-12 months', context: 'Most babies are capable of longer nighttime sleep stretches. Naps consolidate to 2-3 per day. Night wakings can still occur, especially around developmental milestones, teething, or illness. By 12 months, most babies sleep 11-14 hours total with 1-2 naps.' },
  ],
  whenNormal: ['Sleeping in short bursts around the clock in the first weeks', 'Being more awake at night than during the day (day-night confusion)', 'No predictable schedule in the first 6-8 weeks', 'Needing to feed every 2-3 hours overnight'],
  whenToMention: ['Baby seems excessively sleepy and difficult to wake for feeds', 'Baby is not sleeping at all or sleeping much less than expected', 'You are struggling with exhaustion and need support or strategies'],
  whenToActNow: ['Baby is lethargic and difficult to rouse, which is different from normal sleepiness', 'Baby has stopped feeding due to excessive sleepiness', 'Baby has fever, vomiting, or other illness signs along with changes in sleep'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Healthy Sleep Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Brain Basics: Understanding Sleep. NINDS.', url: 'https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-understanding-sleep' },
  ],
  relatedConcernSlugs: ['newborn-sleep-sounds-noisy', 'newborn-eye-rolling-during-sleep', 'newborn-fussy-evening-witching-hour'],
};
