import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'circadian-rhythm-baby',
  title: 'My Baby Has Day and Night Mixed Up',
  category: 'sleep',
  searchTerms: [
    'baby has day and night confused',
    'newborn day night reversed',
    'baby sleeps all day awake all night',
    'baby day night mixed up',
    'how to fix baby\'s day night confusion',
    'newborn awake at night sleeping during day',
    'baby circadian rhythm not developed',
    'baby nights and days mixed up',
    'newborn nocturnal won\'t sleep at night',
    'when do babies learn day from night',
  ],
  quickAnswer:
    'Day-night confusion is extremely common in newborns and happens because babies are not born with a developed circadian rhythm. In the womb, your baby was lulled to sleep by your daytime movement and was more active when you rested at night. It typically takes 6-8 weeks (sometimes up to 12 weeks) for a newborn\'s internal clock to align with the day-night cycle.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Day-night confusion is nearly universal in the first two weeks. Your newborn\'s melatonin production has not yet begun, and their sleep is driven by feeding needs rather than light-dark cycles. During this phase, focus on feeding on demand and basic survival. You can begin gently exposing your baby to natural daylight during waking periods and keeping nighttime feeds dim and quiet.',
    },
    {
      ageRange: '2-6 weeks',
      context:
        'Your baby\'s circadian system is beginning to develop. The most effective strategies during this period are bright natural light exposure during the day (especially in the morning), keeping daytime feeds social and stimulating, and making nighttime interactions boring  -  dim lights, minimal talking, no play, and back to bed quickly after feeds. These environmental cues help train the developing internal clock.',
    },
    {
      ageRange: '6-12 weeks',
      context:
        'Most babies begin producing their own melatonin around 6-8 weeks, and many start to consolidate their longest sleep stretch into the nighttime hours. If your baby is still significantly more awake at night than during the day at 10-12 weeks despite consistent light-dark environmental cues, it is worth mentioning to your pediatrician, though some babies simply take a bit longer.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 3-4 months, the circadian rhythm should be well-established and your baby should be sleeping their longest stretch at night. If day-night confusion persists beyond this age, consider whether your baby is getting enough light exposure during the day, whether the sleep environment is dark enough at night, or whether nap timing needs adjustment. Persistent reversal at this age warrants a conversation with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your newborn (under 8 weeks) is more alert at night and sleepier during the day',
    'Day-night confusion is gradually improving with consistent light and dark cues',
    'Your baby is feeding well, gaining weight, and has adequate wet and dirty diapers',
    'The confusion resolves by 2-3 months of age',
  ],
  whenToMention: [
    'Day-night confusion persists beyond 3-4 months despite consistent environmental cues',
    'Your baby seems excessively sleepy during the day and rarely has alert, engaged periods even when awake',
    'You are becoming severely sleep-deprived and need guidance on safe coping strategies',
  ],
  whenToActNow: [
    'Your newborn is excessively sleepy around the clock (not just reversed) and is difficult to rouse for feeds, which could indicate jaundice, infection, or another medical condition',
    'Your baby has yellowing of the skin or eyes, a fever, or poor feeding alongside excessive sleepiness',
  ],
  relatedMilestones: [
    'circadian-rhythm-development',
    'sleep-consolidation',
    'social-smile',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Baby Sleep Schedule: Newborn to 12 Months. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-sleep-schedule',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Newborn Sleep Patterns. ClevelandClinic.org.',
      url: 'https://my.clevelandclinic.org/health/articles/14300-newborns-sleep-patterns',
    },
  ],
};
