import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dad-sleep-deprivation-safety-risk',
  title: 'Dad Sleep Deprivation: Safety Risks for New Fathers',
  category: 'maternal',
  searchTerms: [
    'new dad sleep deprivation',
    'dad exhausted newborn',
    'father sleep deprivation dangerous',
    'dad drowsy driving baby',
    'new dad falling asleep with baby',
    'dad sleep deprivation safety',
    'father tired at work',
    'dad not sleeping enough newborn',
    'sleep deprivation driving risk new parent',
    'dad parenting exhaustion',
  ],
  quickAnswer:
    'Sleep deprivation in new fathers is a significant but often overlooked safety concern. Studies show that new fathers lose an average of 13 minutes of sleep per night in the first year, with many experiencing much greater losses during the newborn period. Sleep deprivation impairs judgment, reaction time, and emotional regulation at levels comparable to alcohol intoxication. This creates real safety risks including drowsy driving, workplace accidents, and falling asleep while holding the baby.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'The newborn period is the most sleep-deprived time for new parents. Fathers who work outside the home may be expected to function normally on drastically reduced sleep. Research shows that going 17-19 hours without sleep impairs performance to a level equivalent to a blood alcohol concentration of 0.05%. Drowsy driving is one of the most dangerous consequences. If possible, arrange to share nighttime duties with your partner, nap when the baby naps, and avoid driving when severely sleep-deprived. Never fall asleep on a couch or recliner with your baby.',
    },
    {
      ageRange: '6 weeks - 3 months',
      context:
        'Cumulative sleep debt can make this period feel even more challenging than the first weeks. Fathers may be reluctant to admit they are struggling due to societal expectations to "tough it out." Signs of dangerous sleep deprivation include microsleeps (brief involuntary episodes of sleep), difficulty focusing, impaired decision-making, and increased irritability or emotional outbursts. Communicate openly with your partner about your sleep needs and consider strategies like shift-sleeping (one parent sleeps while the other monitors the baby).',
    },
    {
      ageRange: '3-12 months',
      context:
        'While most babies begin sleeping longer stretches, many fathers continue to experience significant sleep disruption, especially if sharing nighttime duties. Chronic sleep deprivation is also associated with increased risk of depression, anxiety, and relationship conflict. If you are consistently getting less than 5-6 hours of sleep per night and it is affecting your ability to function safely, discuss options with your partner and healthcare provider. Your safety and your baby\'s safety depend on you being alert enough to provide safe care.',
    },
  ],
  whenNormal: [
    'You are tired from nighttime baby care but can manage your daily activities safely with some adjustments.',
    'You and your partner have worked out a system for sharing nighttime duties that allows each of you to get some consolidated sleep.',
    'Your sleep is gradually improving as your baby sleeps longer stretches.',
  ],
  whenToMention: [
    'You are regularly falling asleep unintentionally during the day, including while driving or at work.',
    'Your sleep deprivation is affecting your mood: persistent irritability, sadness, or emotional numbness.',
    'You and your partner are in significant conflict about nighttime responsibilities.',
  ],
  whenToActNow: [
    'You have fallen asleep or nearly fallen asleep while driving -- pull over immediately and find a safe alternative.',
    'You are so sleep-deprived that you fear for your ability to safely care for your baby.',
    'You are having thoughts of harming yourself or others due to extreme exhaustion and frustration.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: ['dad-bonding-with-newborn-difficulty', 'paternal-postpartum-depression', 'cosleeping-family-bed-safety-risk'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Parental Sleep Deprivation and Safe Infant Sleep. Pediatrics.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Sleep Deprivation and Deficiency. NHLBI.',
      url: 'https://www.nhlbi.nih.gov/health/sleep-deprivation',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Drowsy Driving. CDC.',
      url: 'https://www.cdc.gov/drowsy-driving/about/index.html',
    },
  ],
};
