import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-nap-refusal',
  title: 'My Baby Refuses to Nap',
  category: 'sleep',
  searchTerms: [
    'baby wont nap',
    'baby refuses nap',
    'baby fighting naps',
    'baby skipping naps',
    'baby nap resistance',
    'baby wont sleep during day',
    'toddler nap strike',
    'baby overtired wont nap',
    'baby nap schedule help',
    'baby nap regression',
    'how to get baby to nap',
  ],
  quickAnswer:
    'Nap refusal is one of the most common sleep challenges parents face. Babies and toddlers may resist naps because they are overtired, undertired (wake windows are too short), going through a developmental leap, experiencing a schedule transition, or simply learning that they can protest. Most nap refusal phases are temporary. Maintaining consistent pre-nap routines, watching for sleepy cues, and ensuring age-appropriate wake windows can help resolve nap struggles.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Newborns typically nap frequently throughout the day (3-5 naps), but their sleep patterns are irregular. "Nap refusal" at this age is often the baby being overtired — once past the point of drowsiness, babies can become wired and fight sleep. Watch for early sleepy cues (yawning, rubbing eyes, staring, turning away from stimulation) and begin soothing before your baby becomes overtired. At this age, wake windows are typically only 45-90 minutes. Swaddling, white noise, dimming lights, and gentle rocking can help. Some nap resistance around 3-4 months may signal the 4-month sleep regression.',
    },
    {
      ageRange: '4-12 months',
      context:
        'This period involves several nap transitions: from 3-4 naps to 2 naps (around 6-8 months). Nap refusal often occurs during these transitions. If your baby consistently refuses the third nap, it may be time to transition to 2 naps with longer wake windows. Establishing a brief, consistent pre-nap routine (diaper change, sleep sack, brief book, song) helps signal that sleep is coming. Ensure the sleep environment is dark and quiet. If your baby fights naps but is clearly tired, try not to give up too quickly — sometimes a calm, dark room and 15-20 minutes of opportunity to fall asleep are all that is needed.',
    },
    {
      ageRange: '12-36 months',
      context:
        'The transition from 2 naps to 1 nap typically happens around 13-18 months and can cause weeks of nap disruption. During this transition, some days your toddler may need 2 naps and other days just 1. The final nap transition — dropping the nap entirely — typically occurs between 2.5-4 years. Toddler nap strikes around 18-24 months are common but usually temporary; most toddlers still need a nap until at least age 2.5-3. If your toddler skips a nap, offer an earlier bedtime (by 30-60 minutes) to prevent overtiredness. Consistency is key — even if your toddler does not fall asleep, quiet rest time in their crib or room is beneficial.',
    },
  ],
  whenNormal: [
    'Your baby occasionally fights a nap but still naps most days and seems well-rested overall.',
    'Nap refusal occurs during a developmental milestone (learning to crawl, walk, or talk) and resolves within 1-2 weeks.',
    'Your toddler is transitioning between nap schedules and has inconsistent napping for a few weeks.',
  ],
  whenToMention: [
    'Your baby consistently refuses all naps and is extremely overtired, resulting in frequent meltdowns and poor nighttime sleep.',
    'You have tried adjusting schedules and routines and nap refusal persists for more than 2-3 weeks.',
    'Your baby seems unable to nap rather than unwilling — they seem tired but cannot fall asleep.',
  ],
  whenToActNow: [
    'Your baby is excessively sleepy during the day but cannot stay asleep — combined with other symptoms like breathing difficulties, this may indicate a medical condition.',
    'Sudden change in sleep patterns is accompanied by fever, irritability, ear pulling, or other signs of illness.',
    'Your baby appears to have episodes during sleep (like gasping, color changes, or stiffening) that concern you — seek medical evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['overtired-baby-signs', 'sleep-regression-4-months', 'baby-needs-motion-to-sleep-swing'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Healthy Sleep Habits',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health — Infant Sleep and Development',
      url: 'https://pubmed.ncbi.nlm.nih.gov/32553167/',
    },
    {
      org: 'Sleep Foundation',
      citation:
        'National Sleep Foundation — Baby Nap Schedules by Age',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-nap-schedule',
    },
  ],
};
