import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'premature-rupture-membranes',
  title: 'Premature Rupture of Membranes (PROM/PPROM)',
  category: 'maternal',
  searchTerms: ['PROM pregnancy', 'PPROM', 'premature rupture membranes', 'water broke early', 'water breaking before labor', 'preterm water breaking', 'amniotic fluid leak early', 'PROM vs PPROM', 'water broke too soon', 'early membrane rupture'],
  quickAnswer: 'Premature rupture of membranes (PROM) occurs when the amniotic sac breaks before labor begins. When this happens before 37 weeks, it is called preterm premature rupture of membranes (PPROM) and requires immediate medical attention. PPROM affects about 3% of pregnancies and is a leading cause of preterm birth.',
  byAge: [
    { ageRange: 'Second trimester', context: 'PPROM before 24 weeks (previable PPROM) is rare but serious. Treatment depends on gestational age and individual circumstances. Your medical team will discuss all options with you compassionately. If you notice fluid leaking at any point in the second trimester, go to the hospital immediately for evaluation.' },
    { ageRange: 'Third trimester', context: 'PPROM between 24-37 weeks requires hospitalization. Management often includes antibiotics to prevent infection, corticosteroids to mature the baby\'s lungs, and close monitoring. The goal is to safely prolong pregnancy while balancing the risks of infection and prematurity. At or near 34 weeks, delivery may be recommended.' },
    { ageRange: 'Labor & delivery', context: 'PROM at term (after 37 weeks) occurs in about 8% of pregnancies. If labor does not begin within 12-24 hours, induction is usually recommended to reduce infection risk. Your provider will monitor for signs of infection and fetal well-being. Most babies do well after term PROM.' },
  ],
  whenNormal: ['At term (after 37 weeks), water breaking before contractions start is a normal variation of how labor can begin'],
  whenToMention: ['You think you may be leaking small amounts of fluid but are not sure'],
  whenToActNow: ['Any sudden gush or persistent trickle of fluid from the vagina before 37 weeks - go to the hospital immediately', 'Fluid leaking with fever, foul-smelling discharge, or abdominal tenderness', 'Water breaks and fluid is green, brown, or bloody', 'You feel the umbilical cord at the vaginal opening - call 911, get on hands and knees'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Premature Rupture of Membranes. ACOG Practice Bulletin No. 217, 2020.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/03/prelabor-rupture-of-membranes' },
    { org: 'NIH', citation: 'National Library of Medicine. Premature Rupture of Membranes. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK532888/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Premature Rupture of Membranes. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/complications/premature-rupture-of-the-membranes.aspx' },
  ],
  relatedConcernSlugs: ['water-breaking-signs', 'preterm-labor-signs'],
};
