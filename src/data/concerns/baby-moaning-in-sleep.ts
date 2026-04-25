import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-moaning-in-sleep',
  title: 'My Baby Moans in Their Sleep',
  category: 'sleep',
  searchTerms: [
    'baby moaning in sleep',
    'newborn moaning all night',
    'baby groaning while sleeping',
    'why does my baby moan in their sleep',
    'baby making moaning sounds at night',
    'infant groaning during sleep',
    'baby grunting and moaning in sleep',
    'is it normal for babies to moan in sleep',
    'baby whimpering in sleep',
    'newborn noisy sleeper moaning',
  ],
  quickAnswer:
    'Moaning, groaning, and grunting during sleep are extremely common in babies and are almost always harmless. Babies spend a large proportion of their sleep in active (REM) sleep, during which they naturally vocalize, twitch, and make facial expressions. These sounds typically decrease as your baby\'s nervous system matures over the first few months.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are famously noisy sleepers. They spend about 50% of their sleep time in active REM sleep  -  far more than adults  -  and during these phases they commonly moan, grunt, squeak, sigh, and even whimper without being awake or in distress. Their breathing patterns are also irregular during REM sleep, which can add to the overall noisiness. This is a normal part of neurological development and is not a sign of pain or discomfort.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby\'s sleep architecture matures, the proportion of active sleep decreases and sleep sounds usually become less frequent. Some babies continue to moan softly during transitions between sleep cycles, which occur roughly every 40-50 minutes. If the moaning is brief and your baby does not fully wake, there is no cause for concern.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Occasional moaning during sleep at this age is still within normal range, especially during periods of teething, illness, or developmental leaps. If your baby starts moaning more than usual, consider whether they might be uncomfortable from a stuffy nose, teething pain, or room temperature. A brief check is fine, but avoid picking them up immediately  -  they may resettle on their own.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may moan during deep sleep transitions or when processing new experiences from the day. If moaning is accompanied by teeth grinding (bruxism), this is also very common in toddlers and usually resolves on its own. Persistent, loud moaning every night that seems to disturb your toddler\'s sleep quality is worth mentioning at your next well-child visit.',
    },
  ],
  whenNormal: [
    'The moaning occurs during sleep and your baby does not fully wake up',
    'Your baby is otherwise sleeping well, gaining weight, and developing normally',
    'The sounds are intermittent and vary in type  -  moans mixed with sighs, grunts, and squeaks',
    'Your baby appears relaxed and comfortable, not tense or arching',
  ],
  whenToMention: [
    'The moaning is accompanied by consistent loud snoring or mouth breathing during sleep',
    'Your baby seems to strain or turn red while moaning, which could suggest reflux or grunting baby syndrome',
    'The moaning has increased significantly and your baby seems more tired or irritable during the day',
  ],
  whenToActNow: [
    'Your baby\'s moaning is accompanied by pauses in breathing, gasping, or color changes (blue or gray around the lips)',
    'Your baby is moaning with a high fever, stiff body, or seems to be in significant pain and cannot be consoled when woken',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'circadian-rhythm-development',
    'self-soothing',
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
        'National Sleep Foundation. Baby Sleep Noises: What\'s Normal? SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/baby-sleep',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Newborn Sleep Patterns. ClevelandClinic.org.',
      url: 'https://my.clevelandclinic.org/health/articles/14300-newborns-sleep-patterns',
    },
  ],
};
