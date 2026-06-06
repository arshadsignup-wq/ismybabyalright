import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'marginal-cord-insertion', title: 'Marginal Cord Insertion Concern', category: 'maternal',
  searchTerms: ['marginal cord insertion', 'cord insertion placenta', 'umbilical cord insertion', 'marginal placenta cord', 'cord attached edge placenta', 'battledore placenta', 'cord insertion ultrasound'],
  quickAnswer: 'Marginal cord insertion occurs when the umbilical cord attaches at or near the edge of the placenta rather than centrally. It is found in about 7% of pregnancies. In most cases, it does not cause problems. Your provider may recommend growth monitoring to ensure the baby is receiving adequate nutrition, as marginal insertion can occasionally affect nutrient transfer.',
  byAge: [
    { ageRange: 'Second trimester', context: 'Marginal cord insertion is typically identified at the anatomy scan. When found in isolation (no other concerns), it usually has a good prognosis. Your provider may schedule additional growth ultrasounds. The main concern is a small increased risk of growth restriction or preterm birth, though most pregnancies progress normally.' },
    { ageRange: 'Third trimester', context: 'Growth monitoring will help ensure your baby is growing well. If growth is normal, marginal cord insertion does not change delivery recommendations. Vaginal delivery is generally safe. Your provider will watch for signs of growth restriction and adjust the care plan if needed.' },
  ],
  whenNormal: ['Marginal cord insertion found incidentally with normal baby growth', 'No other placental or cord abnormalities'],
  whenToMention: ['You want to understand what marginal cord insertion means', 'Baby appears to be growing slowly on ultrasound'],
  whenToActNow: ['Decreased fetal movement', 'Signs of preterm labor or heavy bleeding'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Placental Examination. ACOG, 2022.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/06/placental-examination-in-clinical-practice' },
    { org: 'NIH', citation: 'National Library of Medicine. Umbilical Cord Abnormalities. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK559169/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Umbilical Cord Conditions. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/complications/umbilical-cord-conditions.aspx' },
  ],
  relatedConcernSlugs: ['single-umbilical-artery', 'velamentous-cord-insertion', 'intrauterine-growth-restriction'],
};
