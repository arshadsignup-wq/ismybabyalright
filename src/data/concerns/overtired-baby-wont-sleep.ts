import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'overtired-baby-wont-sleep',
  title: 'Overtired Baby Won\'t Sleep',
  category: 'sleep',
  searchTerms: [
    'overtired baby won\'t sleep',
    'baby too tired to sleep',
    'overtired baby how to get to sleep',
    'baby screaming won\'t sleep',
    'overtired newborn',
    'baby missed nap won\'t sleep',
    'second wind baby',
    'how to calm overtired baby',
    'cortisol and baby sleep',
    'baby hysterical at bedtime',
    'overtired cycle baby',
  ],
  quickAnswer:
    'When a baby becomes overtired, their body releases cortisol and adrenaline to fight the fatigue, making it paradoxically harder for them to fall asleep. This is very common and does not mean anything is wrong. The best approach is to create a calm, dark environment and use soothing techniques like gentle rocking, shushing, or skin-to-skin contact.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns become overtired very quickly - their wake windows are only 45-90 minutes. Watch for early sleepy cues like yawning, turning away, and jerky movements. Once a newborn becomes overtired, they often need more hands-on soothing: swaddling, white noise, gentle bouncing, and a dark room. It is okay to do whatever works to help an overtired newborn settle.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Wake windows are 1.5-2.5 hours. A baby who has pushed past their window may seem wired or hyperactive before crashing into a meltdown. Keep the environment calm and boring - dim lights, white noise, gentle rocking. It may take longer than usual to settle them, and that is okay. Tomorrow is a new day to catch the sleep window earlier.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With wake windows of 2-4 hours, overtiredness can happen when naps are short or skipped. Signs include rubbing eyes vigorously, clumsiness, and clingy behavior followed by sudden fussiness. An earlier bedtime (even 30-60 minutes earlier) is often the best rescue for an overtired day. One bad day will not ruin your baby\'s sleep long-term.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers who miss naps or stay up too late can become hyperactive and seem wide awake, fooling parents into thinking they are not tired. But the meltdown is coming. When your toddler is overtired, shorten the bedtime routine if needed and focus on calming activities. An emergency early bedtime can prevent the cycle from repeating the next day.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Overtired toddlers may fight sleep with everything they have. They may seem to get a "second wind" and act wild or silly. This is the cortisol talking. Keep boundaries gentle but firm, maintain the routine even in abbreviated form, and know that tomorrow you can adjust the schedule to prevent overtiredness from happening again.',
    },
  ],
  whenNormal: [
    'Your baby is harder to settle after missing a nap or staying up too long',
    'Baby seems wired or hyperactive before becoming very fussy',
    'It takes longer than usual to get your baby to fall asleep on overtired days',
    'Baby sleeps fine the next day once the overtired cycle is broken with an earlier bedtime',
    'Occasional overtired episodes after disruptions to the normal routine',
  ],
  whenToMention: [
    'Your baby seems chronically overtired - consistently difficult to settle, taking very short naps, and waking frequently at night for weeks',
    'You are unable to identify appropriate wake windows and feel stuck in a persistent overtired cycle',
  ],
  whenToActNow: [
    'Your baby is inconsolable for hours regardless of what you try, and you suspect illness or pain rather than simple overtiredness',
    'You are so exhausted and frustrated that you feel unsafe caring for your baby - put them in a safe place and take a break',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleeping Through the Night. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Sleeping-Through-the-Night.aspx',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. How Much Sleep Do Babies and Kids Need? SleepFoundation.org.',
      url: 'https://www.sleepfoundation.org/children-and-sleep/how-much-sleep-do-kids-need',
    },
  ],
};
