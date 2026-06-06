import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'anatomy-scan-findings', title: '20-Week Anatomy Scan Unexpected Findings', category: 'maternal',
  searchTerms: ['anatomy scan findings', '20 week scan abnormal', 'anatomy ultrasound findings', 'anomaly scan results', 'structural abnormality ultrasound', '20 week scan worry', 'anatomy scan follow up', 'level 2 ultrasound', 'fetal anomaly ultrasound'],
  quickAnswer: 'The 20-week anatomy scan checks your baby\'s major organs, structures, and growth. Most scans are completely normal. When unexpected findings are identified, they range from minor variants that resolve on their own to conditions that need further evaluation. Many findings require nothing more than a follow-up ultrasound to confirm the baby is developing well.',
  byAge: [
    { ageRange: 'Second trimester', context: 'The anatomy scan (18-22 weeks) examines the brain, heart, spine, kidneys, limbs, and other structures. If something unexpected is found, your provider may recommend a detailed follow-up ultrasound with a maternal-fetal medicine specialist, genetic counseling, or additional testing. Many findings (like a slightly dilated kidney or choroid plexus cyst) are common and resolve on their own.' },
    { ageRange: 'Third trimester', context: 'Follow-up ultrasounds may be scheduled to recheck any findings. Many conditions that were uncertain at 20 weeks become clearer later in pregnancy. Your care team will guide you through any additional monitoring or planning needed based on confirmed findings.' },
  ],
  whenNormal: ['All structures appearing normal on the anatomy scan', 'Minor findings noted as "variants of normal" that require only follow-up', 'Feeling anxious about the scan - this is completely understandable'],
  whenToMention: ['You want to better understand findings from your anatomy scan', 'You would like a second opinion or detailed follow-up', 'You are struggling emotionally with unexpected findings'],
  whenToActNow: ['You are overwhelmed and need immediate emotional support after receiving unexpected news', 'You want to discuss diagnostic testing options urgently'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Ultrasound During Pregnancy. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/ultrasound-exams' },
    { org: 'NIH', citation: 'National Library of Medicine. Fetal Ultrasound. MedlinePlus, 2023.', url: 'https://medlineplus.gov/ency/article/003778.htm' },
    { org: 'March of Dimes', citation: 'March of Dimes. Ultrasound During Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/ultrasound-during-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['soft-markers-ultrasound', 'abnormal-prenatal-screening', 'prenatal-testing-anxiety'],
};
