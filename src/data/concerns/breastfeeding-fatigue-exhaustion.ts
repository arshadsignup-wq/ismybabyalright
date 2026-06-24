import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-fatigue-exhaustion',
  title: 'Breastfeeding Fatigue and Exhaustion',
  category: 'maternal',
  searchTerms: [
    'breastfeeding exhaustion',
    'breastfeeding making me tired',
    'so tired from breastfeeding',
    'breastfeeding fatigue',
    'nursing exhaustion',
    'breastfeeding draining my energy',
    'is it normal to feel exhausted while breastfeeding',
    'breastfeeding and sleep deprivation',
    'breastfeeding burnout',
    'too tired to breastfeed',
    'breastfeeding taking all my energy',
  ],
  quickAnswer:
    'Breastfeeding fatigue is extremely common and has real physiological causes. Prolactin and oxytocin released during nursing promote relaxation and sleepiness, and producing breast milk requires an additional 300-500 calories per day. Combined with frequent nighttime feedings and the demands of postpartum recovery, exhaustion is a nearly universal experience. However, extreme fatigue can also signal postpartum depression, thyroid issues, or anemia.',
  byAge: [
    {
      ageRange: '0-6 weeks postpartum',
      context:
        'The first weeks are the most exhausting as you establish your milk supply while recovering from childbirth. Frequent feeding (8-12 times per day) is normal and necessary. Your body is adjusting to massive hormonal shifts, healing from delivery, and managing significant sleep disruption. Accepting help, sleeping when the baby sleeps, and ensuring adequate nutrition and hydration are essential. This level of exhaustion, while normal, should gradually improve.',
    },
    {
      ageRange: '6 weeks - 3 months postpartum',
      context:
        'While feeding frequency may start to stabilize, many mothers find the cumulative effect of weeks of sleep deprivation hits hardest during this period. Your milk supply is still calibrating, and growth spurts can temporarily increase feeding demands. If fatigue is worsening rather than improving, or if you feel persistently sad, anxious, or unable to enjoy your baby, talk to your healthcare provider about screening for postpartum depression or thyroid issues.',
    },
    {
      ageRange: '3-12 months postpartum',
      context:
        'By now, many mothers have found their rhythm with breastfeeding, and some babies begin sleeping longer stretches. However, the long-term caloric and emotional demands of breastfeeding, combined with returning to work or caring for other children, can maintain significant fatigue. Make sure you are eating enough, staying hydrated, and getting your iron and thyroid levels checked if fatigue seems disproportionate. This is a common time for breastfeeding burnout.',
    },
  ],
  whenNormal: [
    'You feel sleepy during or right after nursing sessions due to the normal hormonal effects of prolactin and oxytocin.',
    'You are tired from nighttime feedings but can function reasonably during the day.',
    'Your fatigue gradually improves as your baby begins sleeping longer stretches.',
  ],
  whenToMention: [
    'Your fatigue is not improving or is getting worse despite getting more sleep.',
    'You feel persistently sad, anxious, irritable, or unable to enjoy your baby alongside the exhaustion.',
    'You are experiencing other symptoms like hair loss, weight changes, feeling cold, or heart palpitations that may suggest thyroid dysfunction or anemia.',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or your baby.',
    'You are so exhausted that you are falling asleep in unsafe positions while holding or feeding your baby.',
    'You feel unable to care for your baby due to physical or emotional exhaustion.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: ['breastfeeding-at-night-frequent', 'breastfeeding-pressure-online-guilt', 'breastfeeding-feeling-inadequate-supply', 'postnatal-depletion-syndrome'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Breastfeeding Your Baby. ACOG Patient FAQ.',
      url: 'https://www.acog.org/womens-health/faqs/breastfeeding-your-baby',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Postpartum Depression Facts. NIMH.',
      url: 'https://www.nimh.nih.gov/health/publications/postpartum-depression-facts',
    },
  ],
};
