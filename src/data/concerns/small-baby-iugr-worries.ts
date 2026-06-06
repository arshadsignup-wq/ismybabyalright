import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'small-baby-iugr-worries',
  title: 'Worries About a Small Baby',
  category: 'maternal',
  searchTerms: ['small baby pregnancy', 'baby measuring small', 'IUGR', 'SGA baby', 'small for gestational age', 'baby not growing enough', 'fundal height low', 'baby growth restriction', 'small baby ultrasound worry', 'baby below percentile'],
  quickAnswer: 'When a baby measures smaller than expected, it can be due to simple factors like genetics and dates being slightly off, or it may indicate intrauterine growth restriction (IUGR/FGR). Your provider will use ultrasound monitoring to distinguish between a healthy small baby and one that needs closer attention. Many small babies are perfectly healthy.',
  byAge: [
    { ageRange: 'Second trimester', context: 'If the baby is measuring small at the anatomy scan, your provider may recommend additional ultrasounds to track growth over time. A single measurement is less meaningful than a growth trend. Factors like parent size, ethnicity, and dating accuracy all affect measurements. Try not to worry before seeing the growth trend.' },
    { ageRange: 'Third trimester', context: 'If growth restriction is identified (baby below the 10th percentile with abnormal Doppler blood flow), your provider will monitor closely with regular ultrasounds and non-stress tests. The placenta\'s function is the main concern. Early delivery may be recommended if the baby is safer outside the womb than inside. Many growth-restricted babies do well with proper monitoring and timely delivery.' },
  ],
  whenNormal: ['Baby consistently tracking along a lower percentile but growing at a normal rate', 'Small parents with a proportionally small baby', 'Fundal height slightly below average at one visit'],
  whenToMention: ['Baby measuring below the 10th percentile on ultrasound', 'Fundal height not increasing as expected at consecutive visits', 'You have risk factors for growth restriction (high blood pressure, smoking, preeclampsia)'],
  whenToActNow: ['Decreased fetal movement, especially if the baby has been identified as small', 'Sudden severe headache, vision changes, or upper abdominal pain (preeclampsia can cause growth restriction)'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Fetal Growth Restriction. ACOG Practice Bulletin No. 227, 2021.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2021/02/fetal-growth-restriction' },
    { org: 'NIH', citation: 'National Library of Medicine. Intrauterine Growth Restriction. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK562268/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Intrauterine Growth Restriction. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/complications/intrauterine-growth-restriction.aspx' },
  ],
  relatedConcernSlugs: ['intrauterine-growth-restriction', 'decreased-fetal-movement', 'preeclampsia-warning-signs'],
};
