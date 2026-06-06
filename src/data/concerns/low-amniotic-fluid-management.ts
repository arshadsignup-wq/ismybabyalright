import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'low-amniotic-fluid-management', title: 'Managing Low Amniotic Fluid (Oligohydramnios)', category: 'maternal',
  searchTerms: ['low amniotic fluid management', 'oligohydramnios treatment', 'low fluid pregnancy', 'amniotic fluid low what to do', 'drinking water amniotic fluid', 'low AFI management', 'amnioinfusion', 'low fluid baby'],
  quickAnswer: 'Managing oligohydramnios (low amniotic fluid) depends on the cause, severity, and gestational age. Mild cases may be managed with increased hydration, rest, and close monitoring. More severe cases may require amnioinfusion or early delivery. Staying well-hydrated, attending all monitoring appointments, and communicating with your provider are key.',
  byAge: [
    { ageRange: 'Second trimester', context: 'Low fluid in the second trimester is more concerning than in the third trimester and requires thorough evaluation for causes including membrane rupture, placental issues, or fetal kidney problems. Treatment depends on the cause. Increased oral hydration has been shown to temporarily increase fluid levels in some cases.' },
    { ageRange: 'Third trimester', context: 'Low amniotic fluid in the third trimester is more common and often managed with increased fluid intake, regular monitoring (non-stress tests and ultrasound), and delivery planning. If fluid levels are very low or the baby shows signs of distress, early delivery may be recommended. Near term, induction or cesarean may be planned.' },
  ],
  whenNormal: ['Amniotic fluid levels on the low end of normal range', 'Fluid levels stable on repeat measurements', 'Baby growing and moving normally despite lower fluid levels'],
  whenToMention: ['Your fluid was noted as low and you want to understand what this means', 'You are unsure about activity restrictions or how much to drink', 'You notice a change in baby\'s movement patterns'],
  whenToActNow: ['Sudden gush of fluid suggesting membrane rupture', 'Significant decrease in baby\'s movement', 'Signs of preterm labor'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Antepartum Fetal Surveillance. ACOG Practice Bulletin No. 229, 2021.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2021/06/antepartum-fetal-surveillance' },
    { org: 'NIH', citation: 'National Library of Medicine. Oligohydramnios. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK562326/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Amniotic Fluid. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/oligohydramnios.aspx' },
  ],
  relatedConcernSlugs: ['oligohydramnios-low-amniotic-fluid', 'decreased-fetal-movement'],
};
