import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'amniocentesis-concerns', title: 'Amniocentesis Questions and Fears', category: 'maternal',
  searchTerms: ['amniocentesis', 'amnio test pregnancy', 'amniocentesis risks', 'amniocentesis pain', 'amniocentesis miscarriage risk', 'amniocentesis results', 'amnio needle', 'amniocentesis when', 'diagnostic testing pregnancy'],
  quickAnswer: 'Amniocentesis is a diagnostic test performed between 15-20 weeks that analyzes amniotic fluid to detect chromosomal conditions and genetic disorders with over 99% accuracy. The risk of pregnancy loss from the procedure is approximately 1 in 500-1,000 when performed by an experienced provider. Understanding the actual risks can help you make an informed decision.',
  byAge: [
    { ageRange: 'Second trimester', context: 'Amniocentesis is typically offered after an abnormal screening result or for other medical indications. A thin needle is guided by ultrasound to withdraw a small amount of amniotic fluid. The procedure takes about 15-20 minutes and most people describe it as uncomfortable pressure rather than sharp pain. Results are usually available within 1-2 weeks, with rapid results for common conditions within 1-3 days.' },
    { ageRange: 'Third trimester', context: 'Late amniocentesis may be performed in the third trimester to check fetal lung maturity before planned early delivery or to evaluate for infection. The procedure is similar but is less commonly needed.' },
  ],
  whenNormal: ['Mild cramping or spotting for a day or two after the procedure', 'Feeling anxious while waiting for results', 'Taking a day to rest after the procedure'],
  whenToMention: ['You want to discuss whether amniocentesis is right for your situation', 'You have questions about the risks and benefits specific to your case', 'You want to talk to a genetic counselor before deciding'],
  whenToActNow: ['Fluid leaking from the vagina after amniocentesis', 'Fever, chills, or severe abdominal pain after the procedure', 'Heavy bleeding after amniocentesis'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Amniocentesis. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/amniocentesis' },
    { org: 'NIH', citation: 'National Library of Medicine. Amniocentesis. MedlinePlus, 2023.', url: 'https://medlineplus.gov/ency/article/003921.htm' },
    { org: 'March of Dimes', citation: 'March of Dimes. Amniocentesis. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/amniocentesis.aspx' },
  ],
  relatedConcernSlugs: ['abnormal-prenatal-screening', 'cvs-chorionic-villus-sampling', 'prenatal-testing-anxiety'],
};
