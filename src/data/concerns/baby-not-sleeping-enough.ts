import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-sleeping-enough',
  title: 'Baby Not Sleeping Enough - Signs of Sleep Deprivation',
  category: 'sleep',
  searchTerms: ['baby not sleeping enough','baby sleep deprivation signs','how much sleep does baby need','baby overtired','toddler not getting enough sleep','baby short naps','baby total sleep hours','infant sleep requirements','baby sleeping less than recommended','baby only sleeping 10 hours','overtired baby signs','baby fighting sleep all day'],
  quickAnswer: 'Sleep needs vary between babies, but general guidelines exist: newborns need 14-17 hours, infants 4-12 months need 12-16 hours (including naps), and toddlers 1-3 years need 11-14 hours total. Signs your baby is not getting enough sleep include chronic fussiness, difficulty falling asleep (overtired babies actually sleep worse), frequent night waking, short naps, and excessive clinginess. An overtired baby enters a stress response that makes it even harder to fall and stay asleep, creating a vicious cycle.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns need 14-17 hours of sleep per 24 hours, but this comes in short bursts with no predictable pattern. Wake windows at this age are only 45-90 minutes. If your newborn is awake for longer stretches, they may be overtired. Signs include: eye rubbing, yawning, looking away, jerky movements, and fussing. An overtired newborn becomes harder to settle. Watch for sleepy cues within 60-90 minutes of waking and begin soothing.' },
    { ageRange: '3-6 months', context: 'Babies need 12-16 hours total, with 3-4 naps per day. Wake windows are roughly 1.5-2.5 hours. Short naps (30-45 minutes) are developmentally normal at this age but can lead to overtiredness if the awake time between naps is too long. Signs of insufficient sleep: rubbing eyes constantly, yawning excessively, difficulty settling for sleep, waking up crying from naps, and being fussy between naps. Keeping wake windows appropriate is the single most important factor.' },
    { ageRange: '6-12 months', context: 'Babies need 12-16 hours total with 2-3 naps. Wake windows are 2-3.5 hours depending on age. If your baby is sleeping significantly less than 12 hours total and is fussy, the schedule may need adjusting. Common culprits: bedtime too late, naps too short, wake windows too long, or too many night feeds disrupting sleep quality. Tracking sleep for a week can reveal patterns. If your baby sleeps less than peers but is happy, alert, and developing well, they may simply need less sleep.' },
    { ageRange: '12-36 months', context: 'Toddlers need 11-14 hours total with 1 nap. If your toddler is sleeping less than 11 hours, evaluate the schedule: bedtime should typically be 7-8 PM, nap around 12-2 PM. Signs of insufficient toddler sleep include: frequent tantrums and emotional dysregulation, difficulty focusing, hyperactivity (overtired toddlers often seem wired rather than sleepy), catching every illness, and difficulty waking in the morning. Consistent sleep schedules with a 30-minute variation window help the most.' },
  ],
  whenNormal: ['Your baby sleeps a bit less than the recommended range but is happy, alert, and developing normally - sleep needs are individual','Nap lengths vary from day to day','Your baby goes through brief periods of sleeping less during developmental milestones or illness','Your baby consistently sleeps at the lower end of the recommended range but shows no signs of sleep deprivation'],
  whenToMention: ['Your baby consistently sleeps 2+ hours less than the recommended total and shows signs of overtiredness','Short naps (under 30 minutes) and frequent night waking are creating a chronic cycle of poor sleep','Your baby seems exhausted but fights sleep intensely at every nap and bedtime','You have tried adjusting the schedule and environment and sleep is still poor'],
  whenToActNow: ['Your baby is excessively sleepy, difficult to wake, or sleeping far more than normal - this can indicate illness','Your baby snores loudly, gasps, or has pauses in breathing during sleep','Your baby has stopped meeting developmental milestones alongside chronic sleep deprivation'],
  relatedMilestones: ['sleep-consolidation'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-waking-every-hour','baby-sleep-training-when-to-start','toddler-dropping-nap'],
  sources: [
    { org: 'AAP', citation: 'Paruthi S, et al. Recommended Amount of Sleep for Pediatric Populations. Journal of Clinical Sleep Medicine. 2016.', url: 'https://pubmed.ncbi.nlm.nih.gov/27250809/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Healthy Sleep Habits: How Many Hours Does Your Child Need? HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx' },
    { org: 'NIH', citation: 'Hirshkowitz M, et al. National Sleep Foundation Sleep Time Duration Recommendations. Sleep Health. 2015.', url: 'https://pubmed.ncbi.nlm.nih.gov/29073412/' },
  ],
};
