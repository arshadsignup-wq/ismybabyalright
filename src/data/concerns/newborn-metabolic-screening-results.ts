import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-metabolic-screening-results',
  title: 'Newborn Metabolic Screening Results',
  category: 'medical',
  searchTerms: ['newborn screening results', 'metabolic screening baby', 'heel prick test results', 'newborn screen abnormal', 'baby blood spot test', 'PKU test results', 'newborn screening follow-up', 'heel stick test baby', 'newborn screen what does it test', 'metabolic disorder screening baby'],
  quickAnswer: 'The newborn metabolic screen (heel prick blood test) checks for dozens of rare but treatable conditions including metabolic disorders, endocrine disorders, and hemoglobinopathies. Most babies have normal results. An abnormal result requires follow-up testing but does not mean your baby definitely has a condition. Many initial abnormal results turn out to be false positives.',
  byAge: [
    { ageRange: '0-1 month', context: 'The newborn screening blood test is done 24-48 hours after birth via a heel prick. It screens for 30-50+ conditions (varies by state) including phenylketonuria (PKU), congenital hypothyroidism, sickle cell disease, cystic fibrosis, galactosemia, and many more. Results typically come back within 1-2 weeks. If results are normal, you may not even be contacted. If a result is abnormal, you will be contacted for follow-up testing. An abnormal result does not confirm a diagnosis; it means additional testing is needed. Many abnormal results are false positives. If a condition is confirmed, early treatment can prevent serious complications.' },
    { ageRange: '1-3 months', context: 'Follow-up testing for any abnormal screening results should be completed promptly. If a condition is confirmed (such as congenital hypothyroidism, which is the most commonly confirmed condition), treatment is started immediately. Early treatment for most screened conditions leads to normal or near-normal development.' },
    { ageRange: '3-6 months', context: 'If a condition was diagnosed and treatment started, your baby will be monitored by a specialist. If follow-up testing was normal, no further action is needed. Some states require a second screening at 1-2 weeks of age.' },
    { ageRange: '6-12 months', context: 'Ongoing monitoring and treatment for any confirmed conditions. Babies with conditions detected early through newborn screening generally have excellent outcomes with appropriate treatment.' },
  ],
  whenNormal: ['Normal newborn screening results', 'Baby is feeding well, gaining weight, and developing normally', 'No follow-up needed for normal results'],
  whenToMention: ['You received notification of an abnormal screening result and want to understand next steps', 'You are unsure whether your baby\'s newborn screen has been completed or results received', 'Family history of genetic or metabolic conditions'],
  whenToActNow: ['You receive an urgent callback about newborn screening results and are asked to bring baby in immediately', 'Baby develops poor feeding, excessive sleepiness, vomiting, or unusual odor before screening results are known'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Newborn Screening. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Purpose-of-Newborn-Screening-Tests.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Newborn Screening. MedlinePlus.', url: 'https://medlineplus.gov/newbornscreening.html' },
  ],
  relatedConcernSlugs: ['newborn-screening-abnormal-results', 'congenital-hypothyroidism'],
};
