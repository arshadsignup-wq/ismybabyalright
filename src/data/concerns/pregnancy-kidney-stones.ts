import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-kidney-stones',
  title: 'Kidney Stones in Pregnancy',
  category: 'maternal',
  searchTerms: ['kidney stones pregnancy', 'kidney stone pain pregnant', 'renal colic pregnancy', 'kidney stones treatment pregnant', 'flank pain pregnancy', 'blood in urine kidney stones pregnant', 'passing kidney stone pregnant'],
  quickAnswer: 'Kidney stones occur in about 1 in 500-1,500 pregnancies. While pregnancy itself does not increase kidney stone formation, the stones can be harder to diagnose and manage during pregnancy. Symptoms include severe flank pain, blood in urine, and nausea. Most pregnancy kidney stones can be managed conservatively with hydration and pain relief.',
  byAge: [
    { ageRange: 'Second trimester', context: 'Kidney stones most commonly present in the second and third trimesters. Symptoms include sudden severe pain in the side or lower back that may radiate to the groin, blood in urine, nausea, and vomiting. Diagnosis typically uses ultrasound (avoiding CT scan radiation). Most stones pass on their own with IV fluids and safe pain management.' },
    { ageRange: 'Third trimester', context: 'Kidney stone symptoms can mimic other pregnancy complications like preterm labor or appendicitis. If you develop severe flank pain, seek medical evaluation promptly. If a stone does not pass, temporary stent placement or ureteroscopy can be performed safely during pregnancy.' },
  ],
  whenNormal: ['Mild back or flank discomfort that resolves with hydration'],
  whenToMention: ['Recurring or persistent flank or back pain', 'Blood in urine (hematuria)', 'Previous history of kidney stones'],
  whenToActNow: ['Severe sudden flank pain with nausea, vomiting, or blood in urine', 'Fever with flank pain, suggesting infected kidney stone - medical emergency', 'Unable to keep fluids down due to pain and nausea'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Nonobstetric Surgery During Pregnancy. ACOG, 2019.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/04/nonobstetric-surgery-during-pregnancy' },
    { org: 'NIH', citation: 'National Library of Medicine. Nephrolithiasis in Pregnancy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK564328/' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Kidney Stones - Diagnosis and Treatment. Mayo Clinic, 2023.', url: 'https://www.mayoclinic.org/diseases-conditions/kidney-stones/diagnosis-treatment/drc-20355759' },
  ],
  relatedConcernSlugs: ['pregnancy-urinary-tract-infection', 'pregnancy-back-pain'],
};
