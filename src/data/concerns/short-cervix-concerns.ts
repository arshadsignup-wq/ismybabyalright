import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'short-cervix-concerns',
  title: 'Short Cervix During Pregnancy',
  category: 'maternal',
  searchTerms: ['short cervix pregnancy', 'cervical length short', 'incompetent cervix', 'cervix measuring short', 'short cervix preterm labor', 'cervical length ultrasound', 'progesterone short cervix', 'cerclage short cervix', 'cervix shortening pregnancy'],
  quickAnswer: 'A short cervix (measuring less than 25mm before 24 weeks) increases the risk of preterm birth. It is detected through transvaginal ultrasound. Treatment options include vaginal progesterone, cervical cerclage (a stitch to hold the cervix closed), or a cervical pessary. With proper monitoring and treatment, many people with a short cervix carry to term or near-term.',
  byAge: [
    { ageRange: 'Second trimester', context: 'Cervical length may be measured at the anatomy scan or if you have risk factors for preterm birth. A cervix shorter than 25mm before 24 weeks is concerning. Vaginal progesterone is the first-line treatment and has been shown to reduce preterm birth risk by about 45%. A cerclage may be recommended if you have a history of second-trimester loss or very short cervix.' },
    { ageRange: 'Third trimester', context: 'If a short cervix was identified and treated, your provider will monitor you closely with regular cervical length checks and symptom awareness. After 24 weeks, treatment options change. Rest, activity modification, and close monitoring are common. Most cervical shortening is gradual and manageable with proper care.' },
  ],
  whenNormal: ['Cervical length above 25mm on mid-pregnancy ultrasound', 'Mild cervical shortening that remains stable'],
  whenToMention: ['You have a history of preterm birth or second-trimester pregnancy loss', 'You had a cervical procedure (LEEP, cone biopsy) that may have shortened your cervix', 'You are experiencing pelvic pressure or cramping'],
  whenToActNow: ['Regular contractions, pelvic pressure, or back pain before 37 weeks', 'Watery vaginal discharge that could be amniotic fluid', 'Bleeding with cramping in the second trimester'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Prediction and Prevention of Spontaneous Preterm Birth. ACOG Practice Bulletin No. 234, 2021.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2021/08/prediction-and-prevention-of-spontaneous-preterm-birth' },
    { org: 'NIH', citation: 'National Library of Medicine. Short Cervix. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK560551/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Cervical Insufficiency. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/complications/cervical-insufficiency.aspx' },
  ],
  relatedConcernSlugs: ['cervical-insufficiency', 'cerclage-recovery', 'preterm-labor-signs'],
};
