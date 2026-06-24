import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-at-night-frequent',
  title: 'Frequent Nighttime Breastfeeding',
  category: 'feeding',
  searchTerms: [
    'baby breastfeeding all night',
    'baby wants to nurse all night',
    'frequent night nursing',
    'breastfed baby waking every hour',
    'cluster feeding at night',
    'baby comfort nursing at night',
    'when do breastfed babies sleep through the night',
    'night weaning breastfeeding',
    'is frequent night nursing normal',
    'baby feeding every 2 hours at night',
  ],
  quickAnswer:
    'Frequent nighttime breastfeeding is biologically normal, especially in the early months. Newborns need to feed every 2-3 hours around the clock to support rapid growth, and breast milk is digested more quickly than formula. Prolactin levels are highest at night, making nighttime feeds important for milk supply. While exhausting, most babies gradually reduce night feeds on their own as they grow.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have tiny stomachs and breast milk is digested quickly, so feeding every 1.5-3 hours overnight is completely normal and necessary. Cluster feeding in the evening (many short feeds close together) is common and helps boost milk supply. Night feeds are also important for maintaining adequate milk production, as prolactin levels peak during nighttime hours. Trying to stretch feeds at this age can compromise weight gain and milk supply.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some babies begin to consolidate sleep into longer stretches, but many exclusively breastfed babies still wake 2-3 times per night to feed. This is within the range of normal. Growth spurts around 3-4 months can temporarily increase night waking. If your baby was sleeping longer stretches and suddenly starts waking more, this is often related to the 4-month sleep regression, a normal change in sleep architecture.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While some babies naturally night-wean by this age, many breastfed babies continue to wake 1-2 times per night to nurse. With the introduction of solid foods around 6 months, caloric needs from nighttime breast milk may decrease, but night nursing often serves comfort and bonding purposes as well. If you wish to reduce night feeds, gentle approaches that maintain milk supply during the day are recommended.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who are still breastfeeding may continue to wake at night, though they no longer need nighttime calories for growth. Night nursing at this age is primarily for comfort, connection, and habit. If you are ready to night-wean, gradual approaches such as shortening feeds, offering water, or having a partner settle the child can be effective. There is no medical urgency to night-wean at any particular age.',
    },
  ],
  whenNormal: [
    'Your newborn wakes every 2-3 hours to feed at night and is gaining weight well.',
    'Your baby cluster feeds in the evening and then sleeps a slightly longer stretch at the start of the night.',
    'Your baby over 6 months wakes 1-2 times to nurse and settles back to sleep easily after feeding.',
  ],
  whenToMention: [
    'Your baby is waking hourly and seems unable to settle even with feeding, which may indicate reflux, discomfort, or a latch issue.',
    'You are experiencing severe sleep deprivation that is affecting your ability to function safely or your mental health.',
    'Your baby over 12 months is waking more frequently than before and seems restless or in pain.',
  ],
  whenToActNow: [
    'Your newborn is refusing to feed at night, is lethargic, or is not producing adequate wet diapers (fewer than 6 per day after day 4).',
    'You are so exhausted that you are falling asleep while holding or feeding your baby in an unsafe location such as a couch or chair.',
    'Your baby has sudden changes in feeding behavior along with fever, vomiting, or other signs of illness.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['breastfeeding-fatigue-exhaustion', 'wont-sleep-without-nursing', 'breastfeeding-latch-difficulty-ongoing'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How Often and How Much Should Your Baby Eat? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/How-Often-and-How-Much-Should-Your-Baby-Eat.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding. WHO Fact Sheet.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};
