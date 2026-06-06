import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-appendicitis',
  title: 'Appendicitis Signs During Pregnancy',
  category: 'maternal',
  searchTerms: ['appendicitis pregnancy', 'appendix pain pregnant', 'right side pain pregnant appendicitis', 'appendicitis symptoms pregnancy', 'appendix surgery pregnant', 'acute abdomen pregnancy', 'appendectomy pregnant'],
  quickAnswer: 'Appendicitis is the most common non-obstetric surgical emergency during pregnancy, occurring in about 1 in 1,500 pregnancies. Diagnosis can be challenging because the growing uterus shifts the appendix upward. Prompt surgical treatment is safe during pregnancy and prevents the serious complication of appendix rupture.',
  byAge: [
    { ageRange: 'First trimester', context: 'Appendicitis symptoms in early pregnancy are similar to non-pregnant presentation: pain beginning around the navel and migrating to the lower right abdomen, loss of appetite, nausea, and sometimes fever. However, these symptoms can mimic ectopic pregnancy or ovarian cyst torsion, making careful evaluation important.' },
    { ageRange: 'Second trimester', context: 'As the uterus grows, the appendix is displaced upward and laterally. This means appendicitis pain may be felt higher than the typical lower-right location - sometimes in the mid-right abdomen or even the right flank. Ultrasound and MRI (without contrast) are safe diagnostic tools during pregnancy.' },
    { ageRange: 'Third trimester', context: 'Diagnosis is most challenging in the third trimester as the appendix may be near the rib area. The risk of appendix perforation is higher during pregnancy, partly because diagnosis may be delayed. Laparoscopic appendectomy can be performed safely during pregnancy. Delay in treatment increases risks for both parent and baby.' },
  ],
  whenNormal: ['Mild abdominal discomfort related to normal pregnancy changes (round ligament pain, gas, constipation)'],
  whenToMention: ['Persistent right-sided abdominal pain that is new and different from pregnancy-related discomfort', 'Abdominal pain with loss of appetite or nausea unrelated to morning sickness'],
  whenToActNow: ['Severe abdominal pain, especially on the right side, with fever, nausea, and vomiting', 'Pain that started near the navel and moved to the right side', 'Abdominal pain that worsens with movement, coughing, or pressing on the area'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Nonobstetric Surgery During Pregnancy. ACOG Committee Opinion No. 775, 2019.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/04/nonobstetric-surgery-during-pregnancy' },
    { org: 'NIH', citation: 'National Library of Medicine. Appendicitis in Pregnancy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK546683/' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Appendicitis. Mayo Clinic, 2023.', url: 'https://www.mayoclinic.org/diseases-conditions/appendicitis/symptoms-causes/syc-20369543' },
  ],
  relatedConcernSlugs: ['pregnancy-gallstones', 'round-ligament-pain'],
};
