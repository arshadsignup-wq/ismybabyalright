import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'signs-of-labor-starting',
  title: 'Signs That Labor Is Starting',
  category: 'maternal',
  searchTerms: [
    'signs of labor starting',
    'how to know labor starting',
    'early labor signs',
    'am I in labor',
    'labor contractions vs Braxton Hicks',
    'losing mucus plug labor',
    'water breaking signs',
    'bloody show labor',
    'when to go to hospital labor',
    'nesting sign of labor',
    'back labor signs',
  ],
  quickAnswer:
    'True labor is characterized by regular contractions that increase in frequency, duration, and intensity over time, and do not stop with rest, hydration, or position changes. Other signs that labor may be approaching include loss of the mucus plug (bloody show), water breaking (rupture of membranes), persistent lower back pain, and a feeling of increased pelvic pressure. First-time parents are generally advised to head to the hospital when contractions are about 5 minutes apart, lasting 1 minute each, for at least 1 hour (the 5-1-1 rule).',
  byAge: [
    {
      ageRange: '36-38 weeks',
      context:
        'In the weeks before labor, your body begins preparation through several changes. You may notice Braxton Hicks contractions becoming more frequent (these are irregular and stop with rest or position changes). The baby may "drop" lower into the pelvis (lightening), making breathing easier but increasing pelvic pressure and urinary frequency. You may lose your mucus plug, which looks like thick, sometimes blood-tinged discharge. Nesting urges (sudden bursts of energy and desire to organize) are common. None of these signs mean labor is imminent, but they indicate your body is getting ready.',
    },
    {
      ageRange: '38-40 weeks',
      context:
        'Distinguishing true labor from prodromal (false) labor is one of the most common challenges. True labor contractions follow a pattern: they come at regular intervals, get closer together over time, get longer and stronger, and do not go away with rest or hydration. They are typically felt in the lower back and wrap around to the front. Time your contractions from the start of one to the start of the next. If your water breaks (a gush or steady trickle of clear fluid), contact your provider even if you are not having contractions, as delivery typically needs to occur within 24 hours.',
    },
    {
      ageRange: '40+ weeks',
      context:
        'Many pregnancies go past their due date, and this is normal, especially for first-time parents. Your provider will typically discuss induction between 39 and 41 weeks depending on your circumstances. Signs that labor may start soon include increased vaginal discharge, bloody show, diarrhea, and more intense Braxton Hicks contractions. If you go past 41 weeks, your provider will recommend closer monitoring of baby\'s wellbeing through non-stress tests and fluid level checks. The decision about induction timing should be a shared discussion with your provider.',
    },
  ],
  whenNormal: [
    'Braxton Hicks contractions that are irregular and stop with rest or hydration',
    'Losing the mucus plug days or even weeks before labor begins',
    'Increased vaginal discharge in the weeks before labor',
    'Nesting urges and bursts of energy in the final weeks',
  ],
  whenToMention: [
    'You are having regular contractions before 37 weeks (could indicate preterm labor)',
    'You are unsure whether you are experiencing true labor or Braxton Hicks contractions',
    'You notice decreased fetal movement in addition to other signs of labor',
    'You are past your due date and want to discuss your options',
  ],
  whenToActNow: [
    'You are having regular contractions before 37 weeks - call your provider immediately as this may be preterm labor',
    'Your water breaks and the fluid is green, brown, or foul-smelling (possible meconium or infection)',
    'You are bleeding heavily (more than spotting or bloody show), which could indicate placental abruption',
    'You notice a sudden decrease or absence of fetal movement - go to your hospital immediately',
    'Contractions are 5 minutes apart, lasting 1 minute, for 1 hour in a full-term pregnancy (5-1-1 rule)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'third-trimester-preeclampsia-warning-signs',
    'preterm-birth-molecular-timer-research',
    'postpartum-bleeding-lochia',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. How to Tell When Labor Begins. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Signs of Labor. MedlinePlus, 2024.',
      url: 'https://medlineplus.gov/laboranddelivery.html',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Signs and Stages of Labor. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/signs-and-stages-of-labor.aspx',
    },
  ],
};
