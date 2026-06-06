import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-gallstones',
  title: 'Gallstones During Pregnancy',
  category: 'maternal',
  searchTerms: ['gallstones pregnancy', 'gallbladder pain pregnant', 'gallbladder attack pregnancy', 'cholecystitis pregnancy', 'upper right pain pregnancy', 'biliary colic pregnant', 'gallstones treatment pregnancy', 'gallbladder surgery pregnant'],
  quickAnswer: 'Gallstones are more common during pregnancy due to elevated estrogen and progesterone, which increase cholesterol in bile and slow gallbladder emptying. They affect 5-12% of pregnant people. Many gallstones cause no symptoms, but gallbladder attacks can cause severe pain in the upper right abdomen and may require treatment.',
  byAge: [
    { ageRange: 'Second trimester', context: 'Gallstone symptoms may develop as hormonal changes peak. Typical symptoms include sudden severe pain in the upper right abdomen or between the shoulder blades, often after eating fatty foods. Pain may last 30 minutes to several hours. If you develop these symptoms, contact your provider. Ultrasound can safely diagnose gallstones during pregnancy.' },
    { ageRange: 'Third trimester', context: 'Gallstone complications become more common in the third trimester. If conservative management (low-fat diet, pain management) is insufficient and you have recurrent attacks or complications, gallbladder surgery (laparoscopic cholecystectomy) can be safely performed during pregnancy, ideally in the second trimester but possible at any stage when medically necessary.' },
  ],
  whenNormal: ['Mild upper abdominal discomfort related to eating that resolves quickly', 'Known gallstones found incidentally on ultrasound without symptoms'],
  whenToMention: ['Episodes of upper right abdominal pain after eating, especially fatty foods', 'Recurring pain that lasts more than 30 minutes', 'Nausea and vomiting unrelated to morning sickness'],
  whenToActNow: ['Severe persistent upper right abdominal pain with fever and chills - possible gallbladder infection (cholecystitis)', 'Yellowing of skin or eyes (jaundice)', 'Severe pain that does not resolve within a few hours'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Nonobstetric Surgery During Pregnancy. ACOG Committee Opinion No. 775, 2019.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/04/nonobstetric-surgery-during-pregnancy' },
    { org: 'NIH', citation: 'National Library of Medicine. Gallstones in Pregnancy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459370/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Gallstones During Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/gallstones-during-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['pregnancy-heartburn-severe', 'pregnancy-rib-pain'],
};
