import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'newborn-screening-abnormal-results',
  title: 'Abnormal Newborn Screening Results',
  category: 'medical',
  searchTerms: [
    'abnormal newborn screening',
    'newborn screening failed',
    'heel prick test abnormal results',
    'baby blood spot test results',
    'newborn metabolic screening positive',
    'NBS positive result baby',
    'newborn screening follow up',
    'baby screening test callback',
    'false positive newborn screening',
    'PKU test results baby',
  ],
  quickAnswer:
    'An abnormal or positive newborn screening result means that further testing is needed, not that your baby definitely has a condition. Most positive screens turn out to be false positives after confirmatory testing. Newborn screening tests are intentionally sensitive to avoid missing any affected babies, so follow-up testing is essential to determine whether the result is a true positive.',
  byAge: [
    {
      ageRange: '0-48 hours',
      context:
        'The newborn screening blood test (heel prick) is typically performed between 24-48 hours after birth. It screens for a panel of conditions including metabolic disorders, endocrine disorders (such as congenital hypothyroidism and congenital adrenal hyperplasia), hemoglobin disorders (such as sickle cell disease), and cystic fibrosis. A hearing screen and pulse oximetry screening for critical congenital heart defects are also performed. Samples collected too early (before 24 hours) may need to be repeated because some conditions are not detectable until the baby has been feeding for a sufficient time.',
    },
    {
      ageRange: '2-7 days',
      context:
        'Results from the newborn screen typically come back within 3-7 days, though timing varies by state. If you are contacted about an abnormal result, try not to panic. The majority of abnormal newborn screening results are false positives, meaning the baby does not actually have the condition. However, it is crucial to follow up promptly with the recommended confirmatory testing. Your pediatrician or a specialist will coordinate the next steps, which may include repeat blood tests, genetic testing, or specialist evaluation.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'Confirmatory testing is usually completed during this period. For metabolic disorders, this may involve specialized blood and urine tests. For congenital hypothyroidism, thyroid function tests will be checked. For cystic fibrosis, a sweat chloride test is the gold standard confirmatory test but is typically performed after 2 weeks of age when the baby is large enough to produce sufficient sweat. If a condition is confirmed, early treatment can begin, which is the entire purpose of newborn screening. Most screened conditions have much better outcomes when caught and treated early.',
    },
    {
      ageRange: '1-3 months',
      context:
        'If a condition was confirmed, your baby will likely be connected with a specialist (such as a geneticist, endocrinologist, or pulmonologist) and a treatment plan will be in place. For conditions like congenital hypothyroidism, medication started early leads to normal development. For metabolic disorders, dietary management may be required. Regular follow-up visits will monitor your baby\'s growth, development, and response to treatment. If confirmatory testing was negative, you can be reassured that the initial screen was a false positive.',
    },
  ],
  whenNormal: [
    'You received a callback about a positive newborn screen but confirmatory testing came back normal (false positive)',
    'Your baby needed a repeat heel prick because the first sample was collected too early (before 24 hours of age)',
    'Your baby\'s screen was borderline, a repeat test was normal, and no further follow-up is needed',
    'All newborn screening results came back normal and no further action is required',
  ],
  whenToMention: [
    'You received an abnormal newborn screening result and have not yet scheduled follow-up testing',
    'You are unsure about the results or have not received your baby\'s newborn screening results',
    'Your baby has a confirmed condition from newborn screening and you have questions about long-term management',
  ],
  whenToActNow: [
    'You were told your baby\'s newborn screening showed a critical result that requires immediate follow-up (such as galactosemia or congenital adrenal hyperplasia), as delays in treatment can be life-threatening',
    'Your baby is showing symptoms such as poor feeding, vomiting, lethargy, seizures, or unusual odor, which could indicate a metabolic emergency, especially if an abnormal screen result is pending',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Screening. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Purpose-of-Newborn-Screening-Tests.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Newborn Screening. MedlinePlus.',
      url: 'https://medlineplus.gov/newbornscreening.html',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Newborn Screening Tests for Your Baby.',
      url: 'https://www.marchofdimes.org/find-support/topics/planning-baby/newborn-screening-tests-your-baby',
    },
  ],
};
