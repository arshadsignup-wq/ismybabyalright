import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'catch-up-growth-premature-baby',
  title: 'Catch-Up Growth in Premature Babies',
  category: 'physical',
  searchTerms: [
    'catch up growth premature baby',
    'preemie growth chart',
    'premature baby weight gain',
    'when do preemies catch up in size',
    'premature baby growth expectations',
    'preemie not catching up',
    'adjusted age growth premature baby',
    'premature baby small for age',
  ],
  quickAnswer:
    'Most premature babies experience "catch-up growth" during the first 2-3 years of life, gradually closing the size gap with full-term peers. Growth is assessed using adjusted (corrected) age  -  calculated from the due date rather than birth date  -  until age 2 for weight and age 3 for head circumference. The degree and timing of catch-up growth depends on the gestational age at birth, birth weight, and any complications experienced. Most preemies born after 32 weeks catch up by age 2, while very preterm babies may take longer.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the early months, premature babies are expected to be smaller than full-term peers. Growth is tracked using adjusted age and specialized preterm growth charts while still in the NICU, transitioning to standard WHO charts after discharge. Adequate caloric intake is critical  -  many preemies need fortified breast milk or specialized preterm formula to support catch-up growth. Weight gain of about 20-30 grams per day is typical for recovering preemies. Your neonatologist and pediatrician will closely monitor growth.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Many premature babies begin to show noticeable catch-up growth during this period (adjusted age). Head circumference typically catches up first, followed by length and then weight. If your baby was born very preterm (before 32 weeks) or had significant medical complications (NEC, BPD), catch-up may be slower. Continued high-calorie nutrition and addressing any feeding difficulties (such as oral aversion or reflux common in preemies) are important for supporting growth.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 6-12 months adjusted age, many preemies born after 32-34 weeks are approaching the growth curves of full-term babies. Introduction of solid foods (based on adjusted age and developmental readiness) provides additional nutritional opportunities. If your baby is not catching up, your pediatrician may investigate for underlying issues such as growth hormone deficiency, metabolic conditions, or ongoing feeding problems. Some preemies experience more rapid catch-up growth, which should also be monitored.',
    },
    {
      ageRange: '12 months+',
      context:
        'Most preemies have completed the majority of their catch-up growth by age 2 (adjusted). Some smaller preemies may remain at lower percentiles but should be following a stable growth curve. After age 2, adjusted age is typically no longer used for growth assessment. If your child remains significantly below expected growth curves despite adequate nutrition, further evaluation may be warranted. Some studies show very preterm babies may remain slightly shorter than peers into childhood, which is a variation of normal for this population.',
    },
  ],
  whenNormal: [
    'Your premature baby is smaller than full-term peers of the same age but is growing steadily along their own curve using adjusted age  -  this is the expected pattern.',
    'Head circumference caught up before weight and length  -  this head-sparing pattern is normal in preemie catch-up growth.',
    'Your preemie had a period of rapid weight gain that moved them upward on the growth chart  -  catch-up growth is often faster than typical growth.',
    'Your 2-year-old former preemie is at a lower but stable percentile  -  some preemies establish their growth trajectory at a lower percentile, which is acceptable if consistent.',
  ],
  whenToMention: [
    'Your premature baby is not showing any catch-up growth by 6 months adjusted age despite adequate feeding.',
    'Your preemie\'s weight or length is falling further behind expected curves rather than catching up.',
    'You have concerns about your preemie\'s nutrition or feeding ability  -  many preemies benefit from feeding therapy.',
  ],
  whenToActNow: [
    'Your premature baby is losing weight or has stopped gaining weight entirely  -  this requires urgent medical evaluation regardless of gestational history.',
    'Your preemie has significant feeding refusal, vomiting, or appears dehydrated  -  seek prompt medical attention.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Preemie Growth and Development. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/default.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Child Growth Standards.',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
  ],
};
