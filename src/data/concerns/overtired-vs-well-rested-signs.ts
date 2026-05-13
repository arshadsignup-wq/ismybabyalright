import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'overtired-vs-well-rested-signs',
  title: 'Overtired vs. Well-Rested: How to Tell',
  category: 'sleep',
  searchTerms: [
    'how to tell if baby is overtired',
    'signs baby is well rested',
    'overtired vs undertired baby',
    'baby getting enough sleep signs',
    'baby not sleeping enough',
    'overtired baby behavior',
    'well rested baby behavior',
    'is my baby overtired',
    'baby sleep deprived signs',
  ],
  quickAnswer:
    'A well-rested baby is generally calm, alert, and engaged during awake times, falls asleep relatively easily, and wakes in a good mood. An overtired baby may be clingy, hyperactive, clumsy, easily frustrated, and paradoxically harder to get to sleep. Learning to recognize these patterns helps you fine-tune your baby\'s schedule before chronic overtiredness builds up.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Well-rested newborns have periods of calm alertness where they engage with faces, track objects, and coo. They settle to sleep with moderate soothing. Overtired newborns may be inconsolable, arch their back, flail their limbs, and resist all attempts at soothing. Because newborn wake windows are so short (45-90 minutes), overtiredness can set in quickly and is one of the most common reasons for unexplained fussiness.',
    },
    {
      ageRange: '3-6 months',
      context:
        'A well-rested baby at this age is social, smiley, and engaged. They show clear sleepy cues (yawning, rubbing eyes, looking away) that you can respond to before overtiredness hits. An overtired baby becomes fussy, clingy, and may have a "wired" look  -  wide eyes, jerky movements, and difficulty focusing. They may take a long time to settle to sleep and then wake after a frustratingly short nap.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Well-rested babies eat well, play contentedly, and handle small frustrations with resilience. Overtired babies at this age often show increased clinginess, heightened separation anxiety, frequent falls and bumps (from clumsiness), and may become either very hyperactive or very whiny. Short naps and frequent night wakings often create a cycle of overtiredness that feeds on itself.',
    },
    {
      ageRange: '12-36 months',
      context:
        'A well-rested toddler can focus on play, handle transitions, and regulate emotions more effectively. An overtired toddler has more meltdowns, tantrums, and defiant behavior  -  these behavioral issues are often chalked up to the "terrible twos" when they may actually be sleep-related. If your toddler\'s behavior improves dramatically after a few days of extra sleep, overtiredness was likely a contributing factor.',
    },
  ],
  whenNormal: [
    'Your baby has some fussy periods but is generally content and alert during most of their awake time',
    'Your baby falls asleep within 10-20 minutes at naptime and bedtime without prolonged crying',
    'Your baby wakes from naps and in the morning in a generally good mood',
    'Occasional off days with more fussiness due to teething, illness, or a disrupted schedule  -  one rough day does not mean chronic overtiredness',
  ],
  whenToMention: [
    'Your baby seems chronically overtired despite following age-appropriate schedules  -  persistently irritable, difficult to settle, frequent short naps and night wakings',
    'Your baby or toddler is showing behavioral issues (aggression, excessive tantrums, difficulty concentrating) that may be related to poor sleep',
    'You are struggling to distinguish between normal developmental fussiness and sleep-related irritability',
  ],
  whenToActNow: [
    'Your baby is excessively lethargic, difficult to rouse, or does not have normal periods of alertness  -  this goes beyond overtiredness and may indicate illness',
    'Extreme irritability accompanied by fever, changes in feeding, unusual cry, or other symptoms suggesting a medical issue rather than a schedule problem',
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
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits: How Many Hours Does Your Child Need? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Signs Your Child Is Not Getting Enough Sleep. SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/children-and-sleep',
    },
  ],
};
