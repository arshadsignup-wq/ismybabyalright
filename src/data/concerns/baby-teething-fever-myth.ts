import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-teething-fever-myth',
  title: 'Does Teething Really Cause Fever?',
  category: 'medical',
  searchTerms: ['teething fever baby', 'does teething cause fever', 'baby fever teething', 'teething fever myth', 'baby teething temperature', 'teething high fever', 'toddler teething fever', 'baby low grade fever teething', 'teething or sick', 'baby fever with teeth coming in'],
  quickAnswer: 'Research shows that teething may cause a slight increase in body temperature, but it does NOT cause true fever (temperature at or above 100.4 degrees F / 38 degrees C). A large systematic review of studies found that teething may cause temperatures up to about 100 degrees F (37.8 degrees C), along with drooling, gum irritation, and fussiness. If your baby has a temperature of 100.4 degrees F or higher, they likely have an illness that coincidentally timed with teething, and the fever should be evaluated by your pediatrician rather than dismissed as "just teething."',
  byAge: [
    { ageRange: '0-12 months', context: 'Teething typically begins around 6 months - the same age when maternal antibodies begin to wane and babies start getting more infections. This overlap is why teething is often blamed for fevers that are actually caused by illnesses. True teething symptoms include: drooling, gnawing and chewing on objects, mild gum irritation, slight fussiness, and possibly a very slight temperature elevation (but below 100.4 degrees F). Symptoms that are NOT caused by teething include: fever above 100.4 degrees F, diarrhea, rash on the body, congestion, and cough. These indicate illness and should be evaluated.' },
    { ageRange: '1-3 years', context: 'Toddlers continue to get new teeth through age 3 (molars and canines), and parents may attribute various symptoms to teething. Evidence-based teething symptoms are limited to: gum discomfort, drooling, irritability, and desire to chew. If your toddler has a fever over 100.4 degrees F during teething, look for other causes. Common illnesses in toddlers (ear infections, viral infections, roseola) frequently coincide with teething simply because children are teething for much of their first 3 years. Attributing a fever to teething can delay diagnosis and treatment of actual illness.' },
  ],
  whenNormal: ['Drooling and wanting to chew on things during teething', 'Mild fussiness around the time teeth are erupting', 'A very slight temperature elevation below 100.4 degrees F', 'Swollen, tender gums where a tooth is about to emerge'],
  whenToMention: ['You are unsure if symptoms are from teething or illness', 'Your baby has a temperature at or above 100.4 degrees F and you have been told it is "just teething" - it is worth confirming', 'Teething pain seems severe and you want guidance on pain relief'],
  whenToActNow: ['Any fever of 100.4 degrees F or above in a baby under 3 months (emergency regardless of suspected cause)', 'Fever above 102 degrees F - this is NOT teething and needs evaluation', 'Fever lasting more than 3 days (not caused by teething)', 'Fever with other illness symptoms: rash, diarrhea, vomiting, cough, congestion (not teething)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['teething-pain', 'baby-ear-infection-vs-teething', 'baby-high-fever-over-104', 'newborn-fever-under-3-months'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Teething: 4 to 7 Months. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-4-to-7-Months.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Teething Pain. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-Pain.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Teething Symptoms Systematic Review. Pediatrics.', url: 'https://pubmed.ncbi.nlm.nih.gov/26647375/' },
  ],
};
