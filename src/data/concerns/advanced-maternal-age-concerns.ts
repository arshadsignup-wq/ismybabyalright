import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'advanced-maternal-age-concerns',
  title: 'Pregnancy Over 35 (Advanced Maternal Age)',
  category: 'maternal',
  searchTerms: ['pregnancy over 35', 'advanced maternal age', 'geriatric pregnancy', 'older pregnant', 'AMA pregnancy risks', 'pregnancy after 35', 'having a baby at 40', 'down syndrome risk age', 'egg quality age', 'fertility over 35'],
  quickAnswer: 'While pregnancy after 35 carries some increased risks (including chromosomal abnormalities, gestational diabetes, and hypertension), the vast majority of people over 35 have healthy pregnancies and healthy babies. The term "geriatric pregnancy" is outdated and does not reflect reality. With appropriate prenatal care and monitoring, outcomes are excellent.',
  byAge: [
    { ageRange: 'First trimester', context: 'Your provider may offer early genetic screening options including cell-free DNA (NIPT) testing, which can screen for common chromosomal conditions with high accuracy. First-trimester screening with blood work and nuchal translucency ultrasound is also available. These are screening tests - not diagnostic - and the results help inform whether diagnostic testing is desired.' },
    { ageRange: 'Second trimester', context: 'Prenatal care for people over 35 is largely similar to standard care, with some additional screening options. You may be offered more detailed ultrasounds. The risk of gestational diabetes and hypertension is somewhat higher, so your provider will monitor these closely.' },
    { ageRange: 'Third trimester', context: 'Some providers recommend additional fetal monitoring in the third trimester for people over 35. Discussion about delivery timing may occur, as some evidence suggests a slight increase in stillbirth risk after 39 weeks in this age group. Your provider will help you weigh the evidence and make decisions that are right for you.' },
  ],
  whenNormal: ['Having a healthy pregnancy over 35 - this is very common', 'Normal screening test results', 'Feeling anxious about age-related risks - this is understandable'],
  whenToMention: ['You want to discuss genetic screening options', 'You have additional risk factors beyond age', 'You have concerns about how your age affects your pregnancy'],
  whenToActNow: ['Any pregnancy warning signs (bleeding, severe pain, decreased movement) apply regardless of age', 'Signs of preeclampsia or gestational diabetes'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Having a Baby After Age 35. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/having-a-baby-after-age-35-how-aging-affects-fertility-and-pregnancy' },
    { org: 'NIH', citation: 'National Library of Medicine. Advanced Maternal Age. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK564305/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Pregnancy After Age 35. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/pregnancy-after-age-35.aspx' },
  ],
  relatedConcernSlugs: ['prenatal-testing-anxiety', 'high-risk-pregnancy-anxiety'],
};
