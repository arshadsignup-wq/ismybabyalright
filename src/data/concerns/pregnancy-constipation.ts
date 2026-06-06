import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-constipation',
  title: 'Constipation During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'constipation pregnancy',
    'can\'t poop pregnant',
    'hard stool pregnancy',
    'constipation relief pregnancy',
    'straining to poop pregnant',
    'iron supplements constipation pregnant',
    'fiber pregnancy',
    'stool softener safe pregnancy',
    'bowel movements pregnancy',
    'pregnancy digestive issues',
  ],
  quickAnswer:
    'Constipation affects up to 40% of pregnant people and is caused by the hormone progesterone slowing digestive transit, iron supplements, a growing uterus pressing on the intestines, and reduced physical activity. It can be managed with increased fiber, fluids, and gentle exercise.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Constipation may begin early due to rising progesterone levels and prenatal vitamins containing iron. Eating high-fiber foods (fruits, vegetables, whole grains), drinking plenty of water, and staying active can help. If your prenatal vitamin seems to worsen constipation, ask your provider about switching to a different formula.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Constipation often continues or worsens as the uterus grows. Aim for 25-30 grams of fiber daily and at least 8-10 glasses of water. Prune juice and psyllium-based fiber supplements are generally safe. Stool softeners like docusate sodium may be recommended by your provider if diet changes are not enough.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'The growing uterus puts additional pressure on the intestines, potentially worsening constipation. Continuing fiber-rich foods, staying hydrated, and gentle daily exercise like walking can help. Avoid straining during bowel movements, as this can worsen hemorrhoids. Talk to your provider before using any laxative.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Constipation is common after delivery, especially after a cesarean section or if you took pain medications. Stool softeners are commonly recommended postpartum. Resume fiber and fluid intake as soon as you can. Your first postpartum bowel movement may be uncomfortable but is important - do not delay it.',
    },
  ],
  whenNormal: [
    'Having fewer bowel movements than usual but no significant pain',
    'Stools are harder than normal but you can still pass them',
    'Constipation improves with increased fiber, fluids, and activity',
    'Symptoms began with pregnancy or with starting iron supplements',
  ],
  whenToMention: [
    'You have not had a bowel movement in more than 3-4 days despite trying home remedies',
    'You have significant abdominal bloating or cramping from constipation',
    'You are developing hemorrhoids or anal fissures from straining',
  ],
  whenToActNow: [
    'You have severe abdominal pain, vomiting, or inability to pass gas, which could suggest a bowel obstruction',
    'You notice blood in your stool that is more than a small amount from hemorrhoids',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Problems of the Digestive System. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/problems-of-the-digestive-system',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Constipation in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK538524/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-hemorrhoids', 'pregnancy-heartburn-severe'],
};
