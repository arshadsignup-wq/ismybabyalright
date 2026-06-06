import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-refusing-afternoon-nap',
  title: 'Baby Refusing the Afternoon Nap',
  category: 'sleep',
  searchTerms: [
    'baby refusing afternoon nap',
    'baby fighting afternoon nap',
    'baby won\'t nap in afternoon',
    'baby skipping second nap',
    'afternoon nap refusal',
    'baby crying afternoon nap',
    'toddler refusing afternoon nap',
    'baby too wired for afternoon nap',
    'second nap battle',
    'afternoon nap problems baby',
  ],
  quickAnswer:
    'The afternoon nap is often the harder nap to get because sleep drive is lower after the morning nap. Common reasons for refusal include an overly long or late morning nap, wake windows that are too short or too long, overstimulation, or readiness for a nap transition. Adjusting timing and sleep environment can usually help.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'At this age, afternoon nap refusal often means the wake window between the morning and afternoon nap needs adjusting. If the morning nap runs too long or the baby is put down too early or late for the afternoon nap, they may resist it. Try capping the morning nap at 1.5-2 hours and ensuring the wake window before the afternoon nap is around 2-2.5 hours. A calming pre-nap routine can also help signal that sleep time is coming.',
    },
    {
      ageRange: '6-9 months',
      context:
        'The afternoon nap becomes increasingly important as the third nap drops, since your baby needs it to bridge to bedtime. If your baby is fighting it, ensure the morning nap is not too long (cap at 1.5 hours) and the wake window is appropriate (2.5-3 hours). Sometimes moving the afternoon nap 15-30 minutes later makes a significant difference. A brief, consistent wind-down routine before placing your baby in the crib helps their body and mind prepare for sleep.',
    },
    {
      ageRange: '9-14 months',
      context:
        'Afternoon nap refusal at this age can be tricky because it may or may not signal readiness to drop to one nap. If your baby still consistently takes a good morning nap but refuses the afternoon one, try shortening the morning nap to 1 hour to preserve afternoon sleep drive. If refusal persists for 2-3 weeks and your baby manages well on one nap without becoming overtired, they may be transitioning to a single midday nap.',
    },
    {
      ageRange: '14-24 months',
      context:
        'Once your toddler is on one nap, the concept of a separate afternoon nap no longer applies. If your toddler is on two naps and consistently refusing the afternoon one at this age, it is very likely time to consolidate into one midday nap. Gradually shift the morning nap later until it sits around 12:00-1:00 PM. An earlier bedtime will help during the transition.',
    },
  ],
  whenNormal: [
    'Occasional afternoon nap refusal with an otherwise good sleep pattern - off days happen',
    'Your baby takes a great morning nap and the afternoon nap is shorter or harder to achieve',
    'Refusal coincides with a developmental leap, new skill, or change in routine',
    'Your baby is in the appropriate age range for a nap transition and refusal is consistent over 2+ weeks',
  ],
  whenToMention: [
    'Your baby consistently refuses all afternoon naps and becomes extremely overtired and inconsolable by evening',
    'Nap refusal does not respond to schedule adjustments over several weeks',
    'Your baby seems constantly exhausted but physically cannot settle for sleep',
  ],
  whenToActNow: [
    'Your baby is excessively lethargic, difficult to wake, or has sudden changes in alertness',
    'Nap refusal is accompanied by signs of illness, breathing difficulties, or behavioral regression',
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
      org: 'NSF',
      citation:
        'National Sleep Foundation. Baby Naps by Age. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep/baby-naps',
    },
    {
      org: 'NIH',
      citation:
        'Mindell JA et al. Development of infant and toddler sleep patterns. Sleep Med. 2016;23:5-11.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27544830/',
    },
  ],
  relatedConcernSlugs: ['fighting-naps', 'baby-nap-transition-2-to-1', 'wake-windows-by-age', 'overtired-baby-signs'],
};
