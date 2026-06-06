import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-probiotics-benefits-evidence',
  title: 'Probiotic Evidence for Babies',
  category: 'digestive',
  searchTerms: [
    'baby probiotics',
    'probiotics for baby evidence',
    'do probiotics help baby',
    'baby probiotic benefits',
    'infant probiotics research',
    'baby probiotic colic',
    'probiotic drops baby',
    'are probiotics safe for baby',
    'which probiotic for baby',
    'lactobacillus reuteri baby',
  ],
  quickAnswer:
    'Evidence for probiotics in babies varies by condition. Lactobacillus reuteri has the strongest evidence for reducing colic in breastfed infants. Saccharomyces boulardii can help prevent antibiotic-associated diarrhea. For general "gut health," evidence is limited. Probiotics are generally safe for healthy term infants but should be discussed with your pediatrician before starting.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Lactobacillus reuteri DSM 17938 has shown benefit in reducing crying time in breastfed babies with colic when started early. Probiotics are generally safe for healthy full-term infants. Premature infants in the NICU may receive specific probiotics under medical supervision to reduce the risk of necrotizing enterocolitis.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby is taking antibiotics, your pediatrician may recommend Saccharomyces boulardii or Lactobacillus GG to reduce antibiotic-associated diarrhea. Give the probiotic 2 hours apart from the antibiotic dose. Evidence for probiotics preventing eczema or allergies is mixed and not conclusive.',
    },
    {
      ageRange: '6-12 months',
      context:
        'For acute viral gastroenteritis, Lactobacillus GG may slightly reduce the duration of diarrhea. Probiotics are not harmful but are not a substitute for oral rehydration. Fermented foods like yogurt with live cultures are natural sources of probiotics as solid foods expand.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers can get probiotics from yogurt, kefir, and other fermented foods. Supplemental probiotics may be considered during antibiotic courses or for recurrent digestive issues. The evidence for daily probiotic supplements in healthy toddlers is not strong enough to make a blanket recommendation.',
    },
  ],
  whenNormal: [
    'Using a well-studied probiotic strain under your pediatrician\'s guidance for a specific condition',
    'Offering yogurt with live cultures as part of a balanced diet',
  ],
  whenToMention: [
    'You want to discuss whether a probiotic would benefit your baby\'s specific condition',
    'Your baby has colic and you want to try Lactobacillus reuteri',
    'You need guidance on which probiotic strain and dose is appropriate',
  ],
  whenToActNow: [
    'Your baby develops a negative reaction (increased fussiness, rash, or worsening symptoms) after starting a probiotic',
    'An immunocompromised infant is being considered for probiotics, which requires careful medical guidance',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Probiotics for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Probiotics-in-Baby-Formula.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Probiotics for Prevention and Treatment of Diarrhea. Journal of Clinical Gastroenterology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25714681/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Report: Probiotics and Prebiotics in Pediatrics. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2018-3720/37784/',
    },
  ],
  relatedConcernSlugs: ['baby-diarrhea-after-antibiotics', 'baby-gas-drops-simethicone', 'baby-colic-drops-effectiveness'],
};
