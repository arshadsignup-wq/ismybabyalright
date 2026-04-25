import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'newborn-sleeping-too-much',
  title: 'My Newborn Sleeps Too Much',
  category: 'sleep',
  searchTerms: [
    'newborn sleeping too much',
    'is my newborn sleeping too much',
    'newborn sleeps all day and night',
    'baby sleeping too much first week',
    'newborn won\'t wake up to eat',
    'should I wake sleeping newborn',
    'newborn sleeps through feedings',
    'baby sleeping more than 18 hours',
    'sleepy newborn not eating enough',
    'lethargic newborn sleeping a lot',
  ],
  quickAnswer:
    'Newborns normally sleep 14-17 hours per day, and some healthy newborns sleep even more. However, in the first few weeks of life, it is important that your baby wakes to feed at least every 2-3 hours. A newborn who consistently sleeps through feedings and is not gaining weight appropriately may need to be evaluated by your pediatrician.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'In the first two weeks, many newborns are very sleepy, especially if the birth was long or difficult, or if there is mild jaundice. It is important to wake your baby every 2-3 hours to feed until they have regained their birth weight (typically by 10-14 days of age). Once your baby is gaining weight well and your pediatrician gives the green light, you can generally let them sleep in longer stretches.',
    },
    {
      ageRange: '2-6 weeks',
      context:
        'Your newborn should be becoming more alert during some wake periods by now. While 16-17 hours of sleep per day is still normal, you should see at least a few periods of alertness where your baby is interested in looking at faces, feeding actively, and making eye contact. If your baby remains excessively sleepy with no alert periods, mention this to your pediatrician.',
    },
    {
      ageRange: '6-12 weeks',
      context:
        'By this age, most babies begin to develop longer awake windows (60-90 minutes) and show more social engagement during alert periods. Total sleep is typically 14-16 hours. If your baby is sleeping significantly more than this and seems disinterested in feeding or interacting, it is worth discussing with your doctor. However, many babies at this age still sleep a lot and are perfectly healthy.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the circadian rhythm matures, daytime alertness increases and nighttime sleep consolidates. Total sleep averages 12-16 hours. A baby who is suddenly sleeping much more than usual at this age  -  especially if they were previously more alert  -  may be fighting an illness, recovering from vaccinations, or going through a growth spurt. Temporary increases in sleep around these events are normal.',
    },
  ],
  whenNormal: [
    'Your newborn sleeps 14-17 hours per day but wakes regularly to feed and has adequate wet and dirty diapers',
    'Your baby is gaining weight on track at pediatrician visits',
    'Your baby has alert periods where they are interested in faces and feeding actively',
    'Increased sleepiness follows vaccinations, a growth spurt, or a minor illness and resolves within a day or two',
  ],
  whenToMention: [
    'Your newborn is consistently sleeping through feeding times and needs to be woken for every feed beyond the first two weeks',
    'Your baby has very few alert periods and seems disinterested in feeding even when awake',
    'Weight gain has slowed or your baby is not producing enough wet diapers (fewer than 6 per day after day 5)',
  ],
  whenToActNow: [
    'Your newborn is very difficult to rouse, floppy, or limp when picked up, with poor feeding and a weak cry',
    'Excessive sleepiness is accompanied by fever, yellowing of the skin or eyes (jaundice), vomiting, or a change in skin color',
  ],
  relatedMilestones: [
    'circadian-rhythm-development',
    'feeding-schedule-establishment',
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
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How Often and How Much Should Your Baby Eat? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/How-Often-and-How-Much-Should-Your-Baby-Eat.aspx',
    },
    {
      org: 'Cleveland Clinic',
      citation:
        'Cleveland Clinic. Newborn Sleep Patterns. ClevelandClinic.org.',
      url: 'https://my.clevelandclinic.org/health/articles/14300-newborns-sleep-patterns',
    },
  ],
};
