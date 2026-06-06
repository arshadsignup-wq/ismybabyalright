import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-not-waking-to-feed',
  title: 'Baby Sleeping Through Feeds',
  category: 'feeding',
  searchTerms: ['newborn sleeping through feeds', 'baby not waking to eat', 'newborn won\'t wake up to feed', 'should I wake newborn to feed', 'baby sleeping too long between feeds', 'newborn skipping feeds sleeping', 'when to stop waking baby to feed', 'newborn 4 hours without eating', 'baby not hungry sleeping', 'newborn long sleep between feeds'],
  quickAnswer: 'In the first few weeks of life, newborns should be woken to feed if they sleep longer than 3-4 hours, especially if they have not regained their birth weight. Once birth weight is regained and weight gain is established, you can generally let your baby sleep and feed on demand. Excessive sleepiness in a newborn can sometimes indicate illness or jaundice.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborns need to eat 8-12 times per day (every 2-3 hours). In the first 2 weeks, you should wake your baby to feed if they sleep more than 3-4 hours, particularly if they have not regained birth weight. This ensures adequate calorie intake and helps establish milk supply for breastfeeding mothers. A baby with jaundice may be especially sleepy and needs regular feeding to help clear bilirubin. Once your baby has regained birth weight and is gaining well, you can begin to let them sleep longer stretches at night while still feeding on demand.' },
    { ageRange: '1-3 months', context: 'If weight gain is established, most pediatricians allow one longer sleep stretch (4-5 hours) at night. Daytime feeds should still occur every 2-3 hours. If your baby is consistently sleeping very long stretches and weight gain is a concern, continue waking for feeds.' },
    { ageRange: '3-6 months', context: 'Longer sleep stretches at night are developmentally normal. Most babies at this age do not need to be woken for night feeds if they are gaining weight well and feeding frequently during the day.' },
    { ageRange: '6-12 months', context: 'Sleeping through the night without feeding is appropriate for most babies at this age. Adequate nutrition should come from daytime feeds and solid foods.' },
  ],
  whenNormal: ['Sleeping 3-4 hours between feeds in the first 2 weeks (though waking is still recommended)', 'Longer sleep stretches developing after birth weight is regained and weight gain is established', 'Baby feeds actively when woken and is gaining weight well'],
  whenToMention: ['Baby consistently sleeps more than 4 hours between feeds in the first 2 weeks', 'You are having difficulty waking your baby for feeds', 'Weight gain seems slow despite regular feeding'],
  whenToActNow: ['A newborn who is very difficult to arouse, extremely lethargic, or not interested in feeding at all, which could indicate serious illness, dehydration, or infection', 'Fewer than 6 wet diapers per day after day 4, or no dirty diapers when expected'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. How Often and How Much Should Your Baby Eat. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Amount-and-Schedule-of-Feedings.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk' },
  ],
  relatedConcernSlugs: ['newborn-sleepy-feeder', 'newborn-sleeping-too-much', 'newborn-adequate-wet-diapers'],
};
