import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'medication-safety-while-breastfeeding',
  title: 'Medication Safety While Breastfeeding',
  category: 'feeding',
  searchTerms: [
    'medication breastfeeding safe',
    'taking medicine while breastfeeding',
    'drugs and breastfeeding',
    'antibiotics while breastfeeding',
    'antidepressants breastfeeding',
    'pain medication nursing',
    'ibuprofen breastfeeding',
    'which medications are safe while breastfeeding',
    'breastfeeding and prescription drugs',
    'over the counter medicine breastfeeding',
  ],
  quickAnswer:
    'Most medications are compatible with breastfeeding, though many mothers are unnecessarily advised to stop nursing when taking common medications. Only a small number of drugs pose genuine risks to a breastfed baby. The amount of medication that passes into breast milk is usually a tiny fraction of the mother\'s dose. Resources like LactMed, a free database maintained by the National Institutes of Health, provide detailed information on the safety of specific medications during breastfeeding.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are most vulnerable to medication effects because their livers and kidneys are immature and they metabolize drugs more slowly. Even so, most common medications including acetaminophen, ibuprofen (after delivery), and many antibiotics are considered safe. If you need medication during this period, let your prescriber know you are breastfeeding so they can choose the most compatible option. Timing doses right after a feeding can further minimize your baby\'s exposure.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby\'s metabolism matures, they become better able to process the small amounts of medication that may pass through your milk. Many mothers at this stage face decisions about treatments for postpartum depression, allergies, or chronic conditions. In most cases, continuing to breastfeed while taking these medications is both possible and recommended. Do not stop breastfeeding without first consulting a lactation-knowledgeable healthcare provider.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, your baby is eating solid foods and the relative proportion of breast milk in their diet is decreasing. This further reduces any medication exposure through nursing. Older babies also have more mature drug-metabolizing systems. Nearly all commonly prescribed medications are compatible with breastfeeding an older infant.',
    },
  ],
  whenNormal: [
    'You take occasional over-the-counter pain relievers like acetaminophen or ibuprofen while breastfeeding',
    'Your doctor prescribed an antibiotic and confirmed it is breastfeeding-compatible',
    'You take a daily medication for a chronic condition that your provider has reviewed for lactation safety',
  ],
  whenToMention: [
    'You have been told to stop breastfeeding for a medication and want a second opinion or alternative',
    'You need to start a new medication and want to discuss the safest options for breastfeeding',
    'You are taking multiple medications and want to ensure the combination is safe during lactation',
    'You notice changes in your baby\'s behavior, feeding patterns, or stool after starting a new medication',
  ],
  whenToActNow: [
    'Your baby becomes unusually drowsy, difficult to wake, or stops feeding well after you start a new medication',
    'You accidentally took a medication known to be contraindicated during breastfeeding and need guidance on whether to temporarily interrupt nursing',
    'Your baby develops a rash, vomiting, or other new symptoms that coincide with your new medication',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. LactMed: Drugs and Lactation Database. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK501922/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Transfer of Drugs and Therapeutics Into Human Breast Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/132/3/e796/31630/The-Transfer-of-Drugs-and-Therapeutics-Into-Human',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Prescription Medication Use While Breastfeeding.',
      url: 'https://www.cdc.gov/breastfeeding/breastfeeding-special-circumstances/vaccinations-medications-drugs/prescription-medication-use.html',
    },
  ],
};
