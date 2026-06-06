import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'braxton-hicks-vs-real-contractions',
  title: 'Braxton Hicks vs Real Contractions',
  category: 'maternal',
  searchTerms: [
    'braxton hicks contractions',
    'practice contractions',
    'false labor',
    'real contractions vs braxton hicks',
    'how to tell if contractions are real',
    'belly tightening pregnant',
    'braxton hicks or labor',
    'false labor signs',
    'prodromal labor',
    'when to go to hospital contractions',
    'timing contractions',
  ],
  quickAnswer:
    'Braxton Hicks contractions are irregular, usually painless "practice" contractions that help your uterus prepare for labor. Unlike real labor contractions, they do not increase in frequency, intensity, or duration over time, and they typically stop with rest, hydration, or a change in activity.',
  byAge: [
    {
      ageRange: 'Second trimester',
      context:
        'Braxton Hicks contractions can begin as early as the second trimester, though many people do not notice them until later. They feel like a tightening or hardening of the belly that lasts 30-60 seconds. They are irregular, infrequent, and usually not painful. Staying well-hydrated can help reduce their frequency.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Braxton Hicks become more noticeable and frequent in the third trimester. They may feel uncomfortable but are typically not painful. Key differences from real labor contractions: Braxton Hicks are irregular, do not get closer together, do not get stronger over time, and usually stop if you change position, walk, rest, or drink water. Real labor contractions follow a regular pattern, get progressively closer together, stronger, and longer.',
    },
    {
      ageRange: 'Labor & delivery',
      context:
        'As labor approaches, it can be hard to distinguish Braxton Hicks from early labor. Use the 5-1-1 rule as a general guide: contractions every 5 minutes, lasting 1 minute each, for at least 1 hour may indicate active labor. Real labor contractions do not stop with rest or hydration and progressively intensify. If you are unsure, it is always appropriate to call your provider.',
    },
  ],
  whenNormal: [
    'Irregular tightening of the belly that comes and goes without a pattern',
    'Contractions that stop when you change activity, rest, or drink water',
    'Tightening is uncomfortable but not painful and does not get stronger over time',
    'Contractions are felt mainly in the front of the belly',
  ],
  whenToMention: [
    'Braxton Hicks are becoming very frequent (more than 4-6 per hour) even after resting and hydrating',
    'You are having difficulty distinguishing Braxton Hicks from real contractions',
    'Contractions are accompanied by lower back pain or pelvic pressure',
  ],
  whenToActNow: [
    'Contractions are regular, getting closer together, and increasing in intensity - especially before 37 weeks, which could indicate preterm labor',
    'Contractions are accompanied by vaginal bleeding, fluid leaking, or severe pain',
    'You have more than 6 contractions per hour before 37 weeks, even if they are not painful',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
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
        'National Library of Medicine. Braxton Hicks Contractions. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470546/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Contractions and Signs of Labor. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/contractions-and-signs-of-labor.aspx',
    },
  ],
  relatedConcernSlugs: ['preterm-labor-signs', 'water-breaking-signs'],
};
