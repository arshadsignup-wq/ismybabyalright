import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-napping-too-long',
  title: 'Is My Baby Napping Too Long?',
  category: 'sleep',
  searchTerms: [
    'baby napping too long',
    'should I wake baby from nap',
    'baby long naps short night sleep',
    'baby naps 3 hours',
    'how long should baby nap',
    'baby sleeping too much during day',
    'long naps affecting bedtime',
    'cap baby nap length',
    'baby napping all day',
    'when to wake baby from nap',
  ],
  quickAnswer:
    'While long naps are usually a good sign that your baby is getting needed rest, very long daytime naps can sometimes interfere with nighttime sleep. Generally, individual naps over 2-2.5 hours for babies over 4 months may be worth capping, and total daytime sleep should not significantly exceed age-appropriate recommendations. However, newborns under 3 months should generally be allowed to sleep as long as they need.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns need a lot of sleep (14-17 hours per day), and long naps are normal and healthy. The main exception is if your baby is not yet back to birth weight or is having feeding difficulties, in which case your pediatrician may recommend waking to feed every 2-3 hours during the day. Otherwise, let your newborn sleep. Long naps at this age do not typically interfere with nighttime sleep because the circadian rhythm is not yet established.',
    },
    {
      ageRange: '4-6 months',
      context:
        'As circadian rhythm develops, the balance between day and night sleep becomes more important. If your baby is napping more than 4-5 hours total during the day and struggling with nighttime sleep, you may want to cap individual naps at 2 hours and gently wake your baby. The goal is not to reduce total sleep but to redistribute it so more occurs at night. If nighttime sleep is going well, long naps are not a problem.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At this age, total daytime sleep is typically 2-3.5 hours split between two naps. If one nap is very long (over 2.5 hours) and the other is very short, you might consider capping the longer nap to preserve the second nap. If a single nap runs very long and pushes bedtime too late, a gentle wake-up is reasonable. However, if your baby is sleeping well at night and seems well-rested, there is no need to fix what is working.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Once on one nap, the midday nap is typically 1.5-3 hours. Naps over 3 hours may occasionally happen (especially during illness or growth spurts) but if they regularly cause bedtime difficulties or very early mornings, capping at 2-2.5 hours can help. Always ensure there is enough wake time (4-5 hours) between the nap ending and bedtime.',
    },
  ],
  whenNormal: [
    'Your newborn takes long naps and is feeding well and gaining weight normally',
    'Your older baby occasionally takes an extra-long nap after a busy day, illness, or growth spurt',
    'Long naps do not interfere with nighttime sleep - your baby still falls asleep at a reasonable bedtime and sleeps well',
    'Your baby seems well-rested and happy when awake',
  ],
  whenToMention: [
    'Your baby over 4 months is napping excessively (more than 5 hours during the day) and nighttime sleep is significantly disrupted',
    'Long naps seem excessive even for their age and your baby is hard to wake or seems groggy',
    'Your baby has recently started sleeping much more than usual with no obvious cause like illness or growth spurt',
  ],
  whenToActNow: [
    'Your baby is very difficult to wake from naps, seems lethargic when awake, or is not alert and responsive',
    'Excessive sleep is accompanied by poor feeding, weight loss, fever, or other signs of illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
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
        'National Sleep Foundation. Baby Nap Guide. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-naps',
    },
    {
      org: 'NIH',
      citation:
        'Hirshkowitz M et al. National Sleep Foundation sleep time duration recommendations. Sleep Health. 2015;1(1):40-43.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29073412/',
    },
  ],
  relatedConcernSlugs: ['baby-sleeping-too-much-older', 'baby-sleep-total-hours-concern', 'baby-napping-late-affecting-bedtime'],
};
