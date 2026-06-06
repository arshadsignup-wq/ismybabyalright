import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'soft-markers-ultrasound', title: 'Soft Markers on Ultrasound', category: 'maternal',
  searchTerms: ['soft markers ultrasound', 'echogenic intracardiac focus', 'choroid plexus cyst', 'echogenic bowel', 'pyelectasis', 'soft marker Down syndrome', 'ultrasound marker pregnancy', 'isolated soft marker', 'soft marker what does it mean'],
  quickAnswer: 'Soft markers are minor ultrasound findings that are usually variants of normal but may slightly increase the statistical risk of chromosomal conditions. Common soft markers include echogenic intracardiac focus (bright spot on heart), choroid plexus cysts (small cysts in the brain), and mild pyelectasis (slightly dilated kidneys). An isolated soft marker (one finding with no other concerns) is usually not significant.',
  byAge: [
    { ageRange: 'Second trimester', context: 'Soft markers are typically found during the anatomy scan. An isolated soft marker (single finding) in a low-risk patient with normal screening results has minimal clinical significance. Multiple soft markers or a soft marker combined with abnormal screening results may warrant further evaluation. Your provider may recommend genetic counseling to help interpret findings in the context of your overall risk.' },
    { ageRange: 'Third trimester', context: 'Follow-up ultrasounds may show that soft markers have resolved. Choroid plexus cysts, for example, almost always disappear by the third trimester. If prenatal screening was normal and the soft marker was isolated, the reassurance value is high. Most babies with isolated soft markers are completely healthy.' },
  ],
  whenNormal: ['An isolated soft marker with normal prenatal screening results', 'Soft markers that resolve on follow-up ultrasound', 'Anxiety about soft markers - this is a very normal reaction to unexpected news'],
  whenToMention: ['You want to understand what a specific soft marker means for your baby', 'Multiple soft markers were found', 'You want to discuss whether additional testing is recommended'],
  whenToActNow: ['Severe anxiety or distress that is affecting your daily functioning after learning about soft markers'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Screening for Fetal Chromosomal Abnormalities. ACOG Practice Bulletin No. 226, 2020.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/10/screening-for-fetal-chromosomal-abnormalities' },
    { org: 'NIH', citation: 'National Library of Medicine. Ultrasound Soft Markers in Prenatal Screening. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK557702/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Prenatal Tests. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/prenatal-tests.aspx' },
  ],
  relatedConcernSlugs: ['anatomy-scan-findings', 'abnormal-prenatal-screening', 'single-umbilical-artery'],
};
