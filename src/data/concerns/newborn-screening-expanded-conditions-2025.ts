import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-screening-expanded-conditions-2025',
  title: 'Newborn Screening - Expanded Conditions and What Parents Should Know',
  category: 'medical',
  searchTerms: [
    'newborn screening test',
    'newborn heel prick test',
    'newborn screening conditions list',
    'RUSP newborn screening',
    'newborn metabolic screening',
    'baby screening results',
    'newborn screening false positive',
    'what does newborn screening test for',
    'expanded newborn screening 2025',
    'SMA newborn screening',
    'newborn screening abnormal results',
  ],
  quickAnswer:
    'Newborn screening is one of the most important public health programs, testing babies for over 35 serious but treatable conditions within the first 24-48 hours of life using a few drops of blood from the heel. The Recommended Uniform Screening Panel (RUSP) has expanded significantly, now including conditions like spinal muscular atrophy (SMA), X-linked adrenoleukodystrophy, and Pompe disease. Early detection through newborn screening can mean the difference between a normal life and severe disability or death for affected babies. Approximately 1 in 300 newborns has a detectable condition.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'The initial newborn screen is collected between 24-48 hours after birth. The test involves a heel prick to collect blood drops on a filter paper card. This blood is tested for metabolic disorders (PKU, galactosemia, MCAD deficiency), endocrine disorders (congenital hypothyroidism, congenital adrenal hyperplasia), hemoglobin disorders (sickle cell disease), cystic fibrosis, spinal muscular atrophy, and others. Hearing screening and pulse oximetry (to detect critical congenital heart defects) are also performed before discharge. Some states test for more conditions than others.',
    },
    {
      ageRange: '1-2 weeks',
      context:
        'If you receive a call about an abnormal newborn screening result, it is important to understand that most positive screens are false positives and will not result in a confirmed diagnosis. However, every positive screen requires prompt follow-up testing because the conditions being screened for can cause serious harm if treatment is delayed. Follow-up testing varies by condition but may include repeat blood tests, genetic testing, or specialist evaluation. Your pediatrician will coordinate the follow-up and explain next steps. Do not delay follow-up because you assume it is a false positive.',
    },
    {
      ageRange: '2 weeks - 3 months',
      context:
        'If a condition is confirmed through newborn screening, treatment typically begins immediately. For many conditions, early treatment can prevent intellectual disability, organ damage, or death. Examples include: dietary management for PKU, thyroid hormone replacement for congenital hypothyroidism, gene therapy for SMA, and enzyme replacement for Pompe disease. Families of babies with confirmed conditions should be connected with specialists, genetic counselors, and condition-specific support organizations. Some states require a second newborn screen at 1-2 weeks of age to catch conditions that may not be detectable at the initial screen.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening results came back normal, and your baby is feeding and growing well.',
    'You received the results within the expected timeframe (typically 1-2 weeks) and there were no abnormalities.',
    'Your baby passed hearing screening and pulse oximetry before hospital discharge.',
  ],
  whenToMention: [
    'You have not received your baby\'s newborn screening results within 2 weeks of the test.',
    'You were told a result is abnormal and have questions about what it means.',
    'Your baby was screened in a state with a limited panel and you want to discuss supplemental screening.',
    'You have a family history of a metabolic or genetic condition and want to understand whether it was included in the screening.',
  ],
  whenToActNow: [
    'You receive a call that your baby\'s newborn screen is abnormal and needs immediate follow-up testing - do not delay, as early treatment can be life-saving.',
    'Your baby is showing symptoms of a metabolic disorder: poor feeding, excessive vomiting, lethargy, seizures, or unusual body odor.',
    'Your baby was born outside a hospital or left the hospital before the screening was performed and has not been screened.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'infant-vision-screening-milestones',
    'neonatal-fever-sepsis-workup',
    'newborn-jaundice-kernicterus-prevention',
  ],
  sources: [
    {
      org: 'HRSA',
      citation:
        'Health Resources and Services Administration. Recommended Uniform Screening Panel (RUSP).',
      url: 'https://www.hrsa.gov/advisory-committees/heritable-disorders/rusp',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Screening. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Screening-Tests.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC. Newborn Screening Portal.',
      url: 'https://www.cdc.gov/newbornscreening/index.html',
    },
  ],
};
