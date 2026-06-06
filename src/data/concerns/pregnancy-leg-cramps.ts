import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-leg-cramps',
  title: 'Leg Cramps During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'leg cramps pregnancy',
    'charley horse pregnant',
    'calf cramp pregnancy',
    'leg cramps at night pregnant',
    'muscle cramps pregnancy',
    'leg pain pregnancy',
    'cramping legs third trimester',
    'leg cramp relief pregnant',
    'magnesium for leg cramps pregnancy',
    'waking up leg cramp pregnant',
  ],
  quickAnswer:
    'Leg cramps, especially in the calves, are very common during pregnancy, affecting up to 50% of pregnant people. They are most frequent in the second and third trimesters and tend to occur at night. They may be caused by changes in blood circulation, extra weight on the legs, nerve compression, and possibly mineral imbalances.',
  byAge: [
    {
      ageRange: 'Second trimester',
      context:
        'Leg cramps may begin in the second trimester. Staying well-hydrated, stretching your calves before bed, and regular gentle exercise can help prevent them. If a cramp occurs, straighten your leg and gently flex your foot upward (toes toward your shin) to relieve it.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Leg cramps are most common in the third trimester. The increased weight and pressure on leg muscles and nerves contribute. Magnesium supplements may help (ask your provider). Avoid pointing your toes when stretching in bed, as this can trigger cramps. Warm baths before bed, calf stretches, and staying active during the day can reduce frequency.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Leg cramps typically resolve after delivery. If they persist, ensure adequate hydration and mineral intake. Continued stretching and gradual return to exercise will help.',
    },
  ],
  whenNormal: [
    'Painful muscle spasms in the calf that last seconds to minutes, usually at night',
    'Cramps that resolve with stretching, flexing the foot, or massage',
    'Occasional cramps that do not leave lasting pain',
    'Cramps in the second or third trimester without other symptoms',
  ],
  whenToMention: [
    'Leg cramps are very frequent and significantly disrupting your sleep',
    'Muscle soreness persists long after the cramp resolves',
    'You are having cramps in unusual locations or accompanied by numbness',
  ],
  whenToActNow: [
    'Persistent leg pain, swelling, warmth, or redness in one leg, which could indicate a blood clot (DVT)',
    'Severe muscle pain that does not resolve with stretching and is accompanied by swelling',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Common Discomforts of Pregnancy. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Leg Cramps in Pregnancy. Cochrane Database of Systematic Reviews, 2020.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8094578/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-restless-legs', 'pregnancy-blood-clot-risk'],
};
