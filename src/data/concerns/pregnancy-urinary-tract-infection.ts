import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-urinary-tract-infection',
  title: 'UTI During Pregnancy',
  category: 'maternal',
  searchTerms: ['UTI pregnancy', 'urinary tract infection pregnant', 'burning when peeing pregnant', 'bladder infection pregnancy', 'kidney infection pregnant', 'painful urination pregnant', 'blood in urine pregnant', 'antibiotics UTI pregnancy safe', 'recurrent UTI pregnancy', 'bacteria in urine pregnant'],
  quickAnswer: 'Urinary tract infections (UTIs) are common during pregnancy, affecting 2-10% of pregnant people. Pregnancy increases UTI risk due to hormonal changes that relax the urinary tract and the growing uterus compressing the ureters. Untreated UTIs during pregnancy can lead to kidney infections and pregnancy complications, so prompt treatment with pregnancy-safe antibiotics is important.',
  byAge: [
    { ageRange: 'First trimester', context: 'Your provider will screen for bacteria in your urine at your first prenatal visit, even if you have no symptoms, because asymptomatic bacteriuria (bacteria without symptoms) is common and should be treated during pregnancy to prevent kidney infections. Drink plenty of water and urinate frequently.' },
    { ageRange: 'Second trimester', context: 'UTI risk continues throughout pregnancy. Symptoms include burning with urination, frequent urgent need to urinate, cloudy or strong-smelling urine, and pelvic discomfort. Wiping front to back, staying hydrated, emptying your bladder completely, and urinating after intercourse can help prevent UTIs.' },
    { ageRange: 'Third trimester', context: 'UTIs in the third trimester need prompt treatment as they can increase the risk of preterm labor. If you develop symptoms of a kidney infection - high fever, back pain, nausea, or vomiting - seek immediate medical care. Several antibiotics are safe and effective during pregnancy.' },
  ],
  whenNormal: ['Frequent urination without pain or burning is normal in pregnancy and not a UTI', 'Clear, pale yellow urine without unusual odor'],
  whenToMention: ['Burning or pain when urinating', 'Urgent frequent need to urinate small amounts with discomfort', 'Cloudy, dark, bloody, or foul-smelling urine', 'Mild lower abdominal or pelvic discomfort with urinary symptoms'],
  whenToActNow: ['Fever, chills, back pain (especially on one side), nausea, or vomiting with urinary symptoms - suggesting kidney infection (pyelonephritis)', 'Blood in urine with severe pain', 'UTI symptoms accompanied by contractions or pelvic pressure before 37 weeks'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Urinary Tract Infections. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/urinary-tract-infections' },
    { org: 'NIH', citation: 'National Library of Medicine. Urinary Tract Infection in Pregnancy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK537047/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Urinary Tract Infection. CDC, 2023.', url: 'https://www.cdc.gov/uti/about/index.html' },
  ],
  relatedConcernSlugs: ['pregnancy-frequent-urination', 'pregnancy-yeast-infection'],
};
