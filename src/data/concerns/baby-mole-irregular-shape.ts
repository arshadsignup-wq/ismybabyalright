import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-mole-irregular-shape',
  title: 'Unusual or Irregular-Looking Mole on Baby',
  category: 'skin',
  searchTerms: ['baby irregular mole', 'baby unusual mole', 'baby mole looks weird', 'baby mole multicolored', 'baby mole uneven edges', 'atypical mole baby', 'baby mole asymmetric', 'dysplastic nevus baby', 'baby mole abnormal', 'baby mole check'],
  quickAnswer: 'While melanoma is extremely rare in babies and young children, any mole that looks unusual, such as those with irregular borders, multiple colors, asymmetry, or rapid growth, should be evaluated by your pediatrician or a dermatologist. The ABCDE rule (Asymmetry, Border irregularity, Color variation, Diameter, Evolving) can help guide when to seek evaluation.',
  byAge: [
    { ageRange: '0-3 months', context: 'Congenital moles present at birth can sometimes look irregular, especially larger ones. Your pediatrician should assess all congenital moles. Very large congenital nevi (greater than 20 cm) have a higher risk of complications and should be followed by a dermatologist. Small irregular congenital moles usually need monitoring rather than immediate treatment.' },
    { ageRange: '3-6 months', context: 'New moles appearing at this age should be evenly colored and symmetrical. If a new mole appears that has multiple colors, uneven borders, or an unusual shape, bring it to your pediatrician\'s attention. Taking a photo to track changes over time can be very helpful.' },
    { ageRange: '6-12 months', context: 'Continue to monitor existing moles for changes. Use the ABCDE criteria as a guide. Most moles in babies are benign, but having your pediatrician check any that concern you provides peace of mind. Dermatoscopy, a painless magnified examination, can help evaluate concerning moles.' },
    { ageRange: '12-24 months', context: 'If a mole is changing shape, color, or size in a way that seems disproportionate to your child\'s growth, schedule an evaluation. While melanoma in toddlers is exceptionally rare, early evaluation of concerning moles is always the safest approach. Trust your instincts as a parent.' },
  ],
  whenNormal: ['Small, evenly colored, symmetrical moles with smooth borders', 'A congenital mole that has been evaluated and deemed benign by your pediatrician', 'Gradual, proportional growth of a mole as your child grows'],
  whenToMention: ['Any mole that has multiple colors, uneven borders, or asymmetric shape', 'A mole that appears to be growing faster than your child', 'You have a family history of melanoma or atypical moles and want your baby\'s moles assessed'],
  whenToActNow: ['A mole suddenly changes in appearance, bleeds, or becomes painful', 'A large congenital mole develops a new nodule or textural change within it', 'A rapidly growing, dark, irregularly shaped lesion appears on your baby\'s skin'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAD', citation: 'American Academy of Dermatology. Moles: When to See a Dermatologist.', url: 'https://www.aad.org/public/diseases/a-z/moles-when-to-see-dermatologist' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Moles. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Moles.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Pediatric Melanoma. Pediatric Clinics of North America.', url: 'https://pubmed.ncbi.nlm.nih.gov/26210624/' },
  ],
  relatedConcernSlugs: ['baby-mole-new-growing', 'birthmarks', 'cafe-au-lait-spots'],
};
