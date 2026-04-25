import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'frequent-night-wakings',
  title: 'Baby Waking Up Frequently at Night',
  category: 'sleep',
  searchTerms: [
    'baby waking every hour at night',
    'baby waking every 2 hours',
    'baby frequent night wakings',
    'why does my baby wake up so much at night',
    'baby won\'t stay asleep at night',
    'baby waking up every hour 4 months',
    'baby waking up constantly at night',
    'baby sleep regression waking every hour',
    'frequent night waking 6 month old',
    'baby wakes up multiple times at night',
    'baby restless at night',
  ],
  quickAnswer:
    'Frequent night waking is one of the most exhausting parts of early parenthood, but it is also one of the most common and usually the most normal. Babies cycle through light and deep sleep every 40-50 minutes, and briefly surfacing between cycles is biologically built in. The key question is whether your baby can resettle or needs significant help each time.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Waking every 2-3 hours is the norm for newborns and is necessary for feeding and growth. Newborns have short sleep cycles and spend a large proportion of sleep in active (REM) sleep, which means they wake easily. This frequency is not a problem to solve  -  it is your baby\'s body doing exactly what it needs to do.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The 4-month sleep regression (really a sleep maturation) often causes a sudden increase in night waking. Your baby\'s sleep cycles are reorganizing to resemble adult sleep architecture, and they have not yet learned to link cycles independently. Waking 2-4 times per night is common. This period is temporary, though it can last several weeks.',
    },
    {
      ageRange: '6-9 months',
      context:
        'By this age, many babies are capable of longer stretches but may still wake 1-3 times. Teething, learning to sit, crawl, or pull up, and the emergence of separation anxiety can all drive increased waking. If your baby was sleeping longer stretches and suddenly starts waking hourly, it is almost always developmental rather than medical.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Night waking at this age is often linked to standing in the crib, separation anxiety, or dropping the third nap. If your baby wakes and stands but cannot get back down, practicing sitting from standing during the day can help. One to two wakings per night is still within normal range.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who wake frequently may be affected by the 12-month or 18-month sleep regressions, nap transitions, teething (molars), or new fears. If frequent waking is a persistent pattern and your toddler seems overtired during the day, it is worth discussing with your pediatrician to rule out contributing factors like ear infections, reflux, or obstructive sleep apnea.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and wakes to feed every 2-4 hours',
    'Night waking increased suddenly around a developmental milestone and your baby seems otherwise well',
    'Your baby wakes but resettles quickly with minimal intervention',
    'Frequent waking coincides with teething, illness, travel, or a schedule disruption',
    'Your baby is growing well, eating well, and alert during the day despite frequent night waking',
  ],
  whenToMention: [
    'Your baby is over 9 months and waking every 1-2 hours consistently for more than 2-3 weeks with no clear cause',
    'Night waking is accompanied by persistent crying that seems pain-related  -  arching, pulling at ears, or refusing to lie flat',
    'You or your partner are so sleep-deprived that it is affecting your ability to function safely during the day',
    'Your baby seems excessively tired during the day despite spending adequate time in bed at night',
  ],
  whenToActNow: [
    'Your baby wakes with pauses in breathing, gasping, choking, or color changes',
    'Night waking is accompanied by a high fever, vomiting, extreme irritability, or other signs of acute illness',
    'Your baby is inconsolable for more than an hour and nothing provides relief  -  this could indicate a serious issue like intussusception or a hair tourniquet',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'self-soothing',
    'gross-motor-rolling',
    'cognitive-object-permanence',
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
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Sleep Habits: How Many Hours Does Your Child Need? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. How Much Sleep Do I Need?',
      url: 'https://www.cdc.gov/sleep/about/how-much-sleep.html',
    },
  ],
};
