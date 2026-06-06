import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'abnormal-prenatal-screening',
  title: 'Dealing with Abnormal Prenatal Screening Results',
  category: 'maternal',
  searchTerms: ['abnormal prenatal screening', 'abnormal NIPT results', 'high risk screening pregnancy', 'abnormal quad screen', 'false positive prenatal test', 'abnormal genetic screening', 'positive prenatal screening', 'abnormal screening what now', 'prenatal screening follow up'],
  quickAnswer: 'An abnormal prenatal screening result can be terrifying, but it is important to understand that screening tests are designed to cast a wide net and have significant false-positive rates. Most people with abnormal screening results go on to have healthy babies after further testing confirms the baby is fine. An abnormal screening is a reason for more information, not a diagnosis.',
  byAge: [
    { ageRange: 'First trimester', context: 'If first-trimester screening (NIPT or combined screening) shows increased risk, your provider will discuss next steps, which may include additional ultrasounds or diagnostic testing (CVS or amniocentesis). NIPT has a high sensitivity but its positive predictive value depends on the condition and your age. Many "high-risk" results are false positives.' },
    { ageRange: 'Second trimester', context: 'If the anatomy scan identifies findings of concern, your provider may recommend a detailed ultrasound with a maternal-fetal medicine specialist, genetic counseling, or diagnostic testing. Many findings seen on ultrasound resolve on their own or turn out to be variants of normal. A genetic counselor can help you understand your results and options.' },
  ],
  whenNormal: ['Feeling shocked, scared, or devastated by abnormal results', 'Wanting more information and time to process', 'Seeking second opinions or additional testing'],
  whenToMention: ['You need help understanding what your results mean', 'You want to discuss whether diagnostic testing is right for you', 'You need referral to a genetic counselor', 'You are struggling emotionally with the results'],
  whenToActNow: ['You are overwhelmed and unable to function after receiving results', 'You are having thoughts of self-harm', 'You need immediate emotional support'],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Screening for Fetal Chromosomal Abnormalities. ACOG Practice Bulletin No. 226, 2020.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/10/screening-for-fetal-chromosomal-abnormalities' },
    { org: 'NIH', citation: 'National Library of Medicine. Prenatal Genetic Screening. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK557702/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Prenatal Tests. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/prenatal-tests.aspx' },
  ],
  relatedConcernSlugs: ['prenatal-testing-anxiety', 'amniocentesis-concerns', 'soft-markers-ultrasound', 'anatomy-scan-findings'],
};
