import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-anemia',
  title: 'Anemia During Pregnancy',
  category: 'maternal',
  searchTerms: ['anemia pregnancy', 'low iron pregnant', 'iron deficiency pregnancy', 'low hemoglobin pregnant', 'tired anemia pregnancy', 'iron supplements pregnancy', 'anemia symptoms pregnant', 'pale skin pregnancy', 'pregnancy anemia treatment', 'ferritin low pregnancy'],
  quickAnswer: 'Anemia during pregnancy is very common, affecting up to 40% of pregnant people worldwide. It is most often caused by iron deficiency due to the increased blood volume and iron demands of pregnancy. Symptoms include extreme fatigue, weakness, pale skin, dizziness, and shortness of breath. It is treatable with iron supplementation and dietary changes.',
  byAge: [
    { ageRange: 'First trimester', context: 'Your provider will check your hemoglobin at your first prenatal visit. Even if levels are normal initially, anemia can develop later. Take your prenatal vitamin (which contains iron) consistently. Iron-rich foods include lean red meat, spinach, beans, fortified cereals, and lentils. Vitamin C helps iron absorption.' },
    { ageRange: 'Second trimester', context: 'Blood volume expands significantly in the second trimester, naturally diluting red blood cells (physiologic anemia of pregnancy). Your provider will recheck hemoglobin levels, typically around 24-28 weeks. If anemia is detected, additional iron supplementation may be prescribed. Take iron supplements with vitamin C and away from calcium-rich foods for best absorption.' },
    { ageRange: 'Third trimester', context: 'Iron demands are highest in the third trimester as the baby builds iron stores for the first months of life. Severe anemia can increase risks of preterm birth, low birth weight, and postpartum hemorrhage. If oral iron is not sufficient, IV iron infusions are a safe and effective option during pregnancy.' },
  ],
  whenNormal: ['Mild anemia detected on routine blood work without significant symptoms', 'Fatigue that is typical of pregnancy and responds to rest', 'Hemoglobin levels that improve with iron supplementation'],
  whenToMention: ['Extreme fatigue beyond normal pregnancy tiredness', 'Persistent dizziness, weakness, or shortness of breath with minimal exertion', 'Pale skin, lips, or nail beds', 'Heart palpitations or racing heart'],
  whenToActNow: ['Severe dizziness or fainting', 'Chest pain or severe shortness of breath', 'Signs of severe anemia: extreme weakness, confusion, or rapid heartbeat at rest'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Anemia in Pregnancy. ACOG Practice Bulletin No. 233, 2021.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2021/08/anemia-in-pregnancy' },
    { org: 'WHO', citation: 'World Health Organization. Anaemia in Pregnancy. WHO, 2023.', url: 'https://www.who.int/data/nutrition/nlis/info/anaemia' },
    { org: 'NIH', citation: 'National Library of Medicine. Iron Deficiency Anemia in Pregnancy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK448065/' },
  ],
  relatedConcernSlugs: ['pregnancy-fatigue-extreme', 'pica-during-pregnancy', 'pregnancy-dizziness-fainting'],
};
