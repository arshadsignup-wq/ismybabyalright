import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'donor-breast-milk-safety',
  title: 'Is Donor Breast Milk Safe for My Baby?',
  category: 'feeding',
  searchTerms: ['donor breast milk safe', 'donor milk baby', 'milk bank safety', 'pasteurized donor milk', 'informal milk sharing', 'breast milk donation', 'donor milk vs formula', 'breast milk bank', 'human milk banking', 'donated breast milk'],
  quickAnswer: 'Pasteurized donor breast milk from an accredited milk bank is safe and is the recommended alternative when mother\'s own milk is unavailable, especially for premature or sick babies. The Human Milk Banking Association of North America oversees screening and pasteurization. Informal milk sharing carries risks including transmission of infections and contamination. Always discuss donor milk with your pediatrician.',
  byAge: [
    { ageRange: '0-3 months', context: 'Pasteurized donor milk from a milk bank is often used in NICUs for premature or sick babies when mother\'s own milk is not available. It requires a prescription. Donors are screened for diseases and medications, and milk is pasteurized to eliminate pathogens.' },
    { ageRange: '4-6 months', context: 'If you are considering donor milk due to supply issues, discuss options with your pediatrician. Some families use milk bank milk while others consider informal sharing, which carries higher risks.' },
    { ageRange: '6-9 months', context: 'As baby starts solids, the need for donor milk may decrease. If still supplementing, continue using screened and pasteurized sources when possible.' },
    { ageRange: '9-12 months', context: 'Donor milk can continue to supplement baby\'s diet alongside solids and any mother\'s own milk available.' },
    { ageRange: '12-24 months', context: 'After 12 months, toddlers can transition to cow\'s milk or alternatives. Donor milk is less commonly used at this age but can still be appropriate in some situations.' },
  ],
  whenNormal: ['You use pasteurized donor milk from an accredited milk bank', 'Your doctor has recommended donor milk for your premature baby', 'You supplement with donor milk while working on your own supply'],
  whenToMention: ['You are considering informal milk sharing and want guidance on risks', 'You want to know how to access a milk bank', 'You are unsure whether donor milk or formula is better for your baby\'s situation'],
  whenToActNow: ['Baby becomes ill after receiving informally shared breast milk', 'You learn that a milk source may have been contaminated or the donor was taking medications'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['low-milk-supply-signs', 'breast-milk-storage-rules', 'formula-supplementing-guilt'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Donor Human Milk for the High-Risk Infant. Pediatrics, 2017.', url: 'https://publications.aap.org/pediatrics/article/139/1/e20163440/53609/' },
    { org: 'NIH', citation: 'National Institutes of Health. Safety of Donor Human Milk. Journal of Perinatology, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
