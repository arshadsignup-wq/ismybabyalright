import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'prenatal-testing-anxiety',
  title: 'Anxiety About Prenatal Tests',
  category: 'maternal',
  searchTerms: ['prenatal testing anxiety', 'scared of prenatal tests', 'worried about genetic testing', 'NIPT anxiety', 'first trimester screening anxiety', 'quad screen anxiety', 'prenatal screening fear', 'waiting for test results pregnant', 'should I do genetic testing'],
  quickAnswer: 'Anxiety about prenatal tests is extremely common. Many parents feel nervous about what tests might reveal. Remember that most screening tests have a high rate of reassuring results, and even abnormal screenings often turn out to be false positives. You have the right to choose which tests you want and to decline any test. Understanding what each test tells you can help reduce anxiety.',
  byAge: [
    { ageRange: 'First trimester', context: 'First-trimester screening options include NIPT (cell-free DNA screening), nuchal translucency ultrasound, and blood tests. These are screening tests (not diagnostic) - they assess probability, not certainty. A high-risk result does not mean the baby has a condition; it means further testing is recommended. You can choose which tests to have based on your values and what information would be helpful to you.' },
    { ageRange: 'Second trimester', context: 'The anatomy scan (around 18-22 weeks) is a detailed ultrasound that checks the baby\'s development. Most scans are completely normal. If something unexpected is found, your provider will explain what it means and any recommended follow-up. Waiting for results can be agonizing - lean on your support system during this time.' },
    { ageRange: 'Third trimester', context: 'Third-trimester tests (glucose tolerance test, Group B strep swab) are routine and generally straightforward. Non-stress tests may be ordered for high-risk pregnancies. Understanding why each test is done and what results mean can help manage anxiety around testing.' },
  ],
  whenNormal: ['Feeling nervous before and during prenatal tests', 'Anxiety while waiting for results', 'Wanting information about what each test entails before deciding', 'Choosing to decline certain tests - this is your right'],
  whenToMention: ['Anxiety about testing is preventing you from attending appointments', 'You want help understanding which tests are right for you', 'You are struggling with waiting for results'],
  whenToActNow: ['Anxiety is so severe that you are avoiding all prenatal care', 'You are having panic attacks related to testing', 'You need support processing unexpected results'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Prenatal Genetic Testing. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/prenatal-genetic-testing' },
    { org: 'NIH', citation: 'National Library of Medicine. Prenatal Screening. MedlinePlus, 2023.', url: 'https://medlineplus.gov/prenataltesting.html' },
    { org: 'March of Dimes', citation: 'March of Dimes. Prenatal Tests. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/prenatal-tests.aspx' },
  ],
  relatedConcernSlugs: ['abnormal-prenatal-screening', 'amniocentesis-concerns', 'pregnancy-anxiety'],
};
