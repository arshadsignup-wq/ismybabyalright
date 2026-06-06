import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'cvs-chorionic-villus-sampling', title: 'CVS (Chorionic Villus Sampling) Concerns', category: 'maternal',
  searchTerms: ['CVS test pregnancy', 'chorionic villus sampling', 'CVS risks', 'CVS vs amniocentesis', 'CVS procedure', 'CVS results', 'CVS miscarriage risk', 'early genetic testing pregnancy', 'CVS when performed'],
  quickAnswer: 'Chorionic villus sampling (CVS) is a diagnostic test performed between 10-13 weeks that analyzes placental tissue to detect chromosomal conditions and genetic disorders. Like amniocentesis, it is over 99% accurate. The procedure carries a miscarriage risk of about 1 in 500. CVS offers the advantage of earlier results compared to amniocentesis.',
  byAge: [
    { ageRange: 'First trimester', context: 'CVS is performed between 10-13 weeks, making it available earlier than amniocentesis (15-20 weeks). A small sample of placental tissue (chorionic villi) is collected either through the cervix (transcervical) or through the abdomen (transabdominal), guided by ultrasound. Results are typically available within 1-2 weeks. CVS cannot test for neural tube defects, which amniocentesis can detect.' },
  ],
  whenNormal: ['Mild cramping or spotting after the procedure', 'Anxiety while waiting for results', 'Taking a day to rest afterward'],
  whenToMention: ['You want to discuss whether CVS or amniocentesis is more appropriate for your situation', 'You want earlier diagnostic results than amniocentesis can provide', 'You need genetic counseling to understand your options'],
  whenToActNow: ['Heavy bleeding or fluid leaking after CVS', 'Fever or severe abdominal pain after the procedure', 'Signs of infection after the procedure'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Chorionic Villus Sampling. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/chorionic-villus-sampling' },
    { org: 'NIH', citation: 'National Library of Medicine. Chorionic Villus Sampling. MedlinePlus, 2023.', url: 'https://medlineplus.gov/ency/article/003406.htm' },
    { org: 'March of Dimes', citation: 'March of Dimes. Chorionic Villus Sampling. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/chorionic-villus-sampling.aspx' },
  ],
  relatedConcernSlugs: ['amniocentesis-concerns', 'abnormal-prenatal-screening', 'prenatal-testing-anxiety'],
};
