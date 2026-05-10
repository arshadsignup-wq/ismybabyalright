import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'growth-spurt-fussiness-baby',
  title: 'Growth Spurt Fussiness',
  category: 'physical',
  searchTerms: [
    'growth spurt baby fussy',
    'baby growth spurt signs',
    'baby wanting to eat all the time growth spurt',
    'growth spurt clingy baby',
    'baby fussy and hungry growth spurt',
    'when do babies have growth spurts',
    'growth spurt sleep changes baby',
    'baby cluster feeding growth spurt',
  ],
  quickAnswer:
    'Growth spurts are periods of rapid growth that typically occur at predictable intervals  -  around 2-3 weeks, 6 weeks, 3 months, 6 months, and 9 months, though they can happen at any time. During a growth spurt, your baby may be fussier than usual, want to eat more frequently (cluster feeding), sleep more or less than normal, and seem generally unsettled. Growth spurts usually last 2-7 days. They are a normal part of development and do not require any medical intervention  -  simply feeding your baby on demand and providing extra comfort is the best approach.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Growth spurts at 2-3 weeks and 6 weeks are among the most noticeable. Your baby may suddenly want to nurse every 1-2 hours (cluster feeding), be unusually fussy, and seem insatiable. This is particularly common and noticeable in breastfed babies. The increased feeding signals your body to produce more milk. It does NOT mean your milk supply is inadequate. Formula-fed babies may also want more frequent or larger bottles during these periods. These spurts typically resolve within a few days.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The 3-month growth spurt is common and may coincide with the "4-month sleep regression," creating a perfect storm of fussiness and disrupted sleep. Your baby may wake more at night, seem extra hungry during the day, and be clingier than usual. You may notice your baby\'s clothes suddenly feeling tight. During this time, feed on demand and offer extra comfort. Some babies sleep more during growth spurts as growth hormone is primarily released during sleep.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Growth spurts around 6 and 9 months may be accompanied by increased appetite for both breast milk/formula and solid foods. Your baby may seem restless, want to be held more, and have disrupted sleep. These spurts often coincide with major developmental leaps (sitting, crawling, pulling up), which can add to the fussiness. The combination of physical growth and new skills can make this a particularly challenging period, but it is temporary.',
    },
    {
      ageRange: '12 months+',
      context:
        'Growth spurts continue in toddlerhood but may be less dramatic and predictable. Your toddler may have periods of increased appetite, extra sleepiness, or moodiness. You may notice growth spurts when pants suddenly seem too short or shoes no longer fit. Growing pains  -  aching in the legs, often at night  -  may begin in toddlerhood and can be associated with rapid growth periods. These are benign and respond to comfort measures like gentle massage and reassurance.',
    },
  ],
  whenNormal: [
    'Your baby is suddenly much fussier and hungrier than usual for 2-7 days around a typical growth spurt age  -  this is the classic pattern.',
    'Your breastfed baby wants to nurse constantly during a growth spurt but is producing plenty of wet diapers  -  your supply is keeping up.',
    'Your baby sleeps more (or less) than usual during the spurt but returns to normal sleep patterns after a few days.',
    'You notice your baby\'s clothes fitting differently after a period of increased fussiness and feeding  -  the growth spurt was real.',
  ],
  whenToMention: [
    'Your baby\'s fussiness and increased feeding lasts more than a week with no improvement  -  other causes should be considered.',
    'Your baby seems to have a growth spurt but is not gaining weight appropriately  -  the increased hunger may reflect inadequate intake rather than a growth spurt.',
    'Your baby is increasingly fussy but also has fever, vomiting, diarrhea, or rash  -  these suggest illness rather than a growth spurt.',
  ],
  whenToActNow: [
    'Your baby is inconsolable for hours, refuses to feed entirely, or has signs of dehydration (few wet diapers, dry mouth, no tears)  -  this goes beyond normal growth spurt fussiness.',
    'Your baby has sudden behavioral changes accompanied by fever over 100.4F (38C) in babies under 3 months  -  always seek medical evaluation for fever in young infants.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Baby\'s Growth Spurts. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Growth-Spurts-and-Baby-Development.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Child Growth Standards.',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
  ],
};
