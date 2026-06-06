import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'high-amniotic-fluid-management', title: 'Managing Excess Amniotic Fluid (Polyhydramnios)', category: 'maternal',
  searchTerms: ['high amniotic fluid management', 'polyhydramnios treatment', 'too much amniotic fluid', 'excess fluid pregnancy', 'high AFI management', 'amnioreduction', 'polyhydramnios what to do'],
  quickAnswer: 'Polyhydramnios (excess amniotic fluid) is managed based on severity and cause. Mild polyhydramnios (the most common) often requires only monitoring. Moderate to severe cases may need further evaluation for causes like gestational diabetes or fetal conditions. Treatment options include managing underlying causes, amnioreduction, or planned delivery timing.',
  byAge: [
    { ageRange: 'Second trimester', context: 'If polyhydramnios is detected, your provider will evaluate potential causes. Gestational diabetes is a common cause, so a glucose test may be ordered. Detailed ultrasound evaluates for fetal conditions that might affect swallowing. In about 70% of cases, no specific cause is found (idiopathic polyhydramnios), and outcomes are usually good.' },
    { ageRange: 'Third trimester', context: 'Monitoring includes regular ultrasounds to track fluid levels and baby\'s position. Excess fluid can cause uncomfortable stretching of the uterus, shortness of breath, and increased risk of preterm labor or premature rupture of membranes. In severe cases, amnioreduction (draining excess fluid) may provide symptom relief. Your provider will discuss delivery timing based on severity.' },
  ],
  whenNormal: ['Mild polyhydramnios with no identified cause', 'Fluid levels stable on monitoring', 'Baby growing normally'],
  whenToMention: ['Increased abdominal discomfort, shortness of breath, or difficulty with daily activities', 'You want to understand why fluid levels are high', 'Fluid levels appear to be increasing'],
  whenToActNow: ['Regular contractions before 37 weeks', 'Sudden gush of fluid (water breaking) - especially important because high fluid increases cord prolapse risk', 'Severe shortness of breath or chest pain'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Antepartum Fetal Surveillance. ACOG Practice Bulletin, 2021.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2021/06/antepartum-fetal-surveillance' },
    { org: 'NIH', citation: 'National Library of Medicine. Polyhydramnios. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK562327/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Polyhydramnios. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/polyhydramnios.aspx' },
  ],
  relatedConcernSlugs: ['polyhydramnios-excess-amniotic-fluid', 'gestational-diabetes-risk'],
};
