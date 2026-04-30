import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-high-fever-over-104',
  title: 'Baby Has a High Fever Over 104 Degrees F',
  category: 'medical',
  searchTerms: ['baby high fever', 'baby fever 104', 'toddler high fever', 'baby fever 105', 'baby fever dangerous', 'toddler fever 104', 'baby high fever what to do', 'baby fever not going down', 'baby fever emergency', 'toddler high temperature'],
  quickAnswer: 'A fever above 104 degrees F (40 degrees C) in a baby or toddler can be alarming, but the height of the fever alone does not necessarily indicate a more serious illness. Many common childhood viral infections (like roseola) can cause high fevers. What matters more than the number is how your child looks and behaves. A child with a 104 degree F fever who is still alert, making eye contact, and drinking fluids is less concerning than a child with a 102 degree F fever who is limp and unresponsive. However, fevers above 104 degrees F should always be discussed with your pediatrician.',
  byAge: [
    { ageRange: '0-12 months', context: 'For babies under 3 months, ANY fever of 100.4 degrees F or higher is a medical emergency - go to the ER immediately regardless of how the baby looks (see our newborn fever page). For babies 3-12 months, a fever above 104 degrees F should prompt a call to your pediatrician or an ER visit. Give appropriately dosed acetaminophen (age 2 months+) or ibuprofen (age 6 months+). Keep your baby hydrated with frequent breast milk or formula. Dress in light clothing. Do NOT give ice baths or cold water baths - lukewarm baths are OK. If the fever does not respond to medication at all, seek medical attention.' },
    { ageRange: '1-3 years', context: 'A fever above 104 degrees F in a toddler should be managed and monitored carefully. Give acetaminophen or ibuprofen at the correct weight-based dose. Ensure your child is drinking fluids. Focus on how your child looks and acts: are they making eye contact? Can they be comforted? Are they taking fluids? A child who is playing and interactive between fever spikes is less concerning than one who is persistently lethargic. Call your pediatrician if: fever above 104 degrees F lasts more than 24 hours, your child looks very ill, fever is accompanied by a stiff neck, severe headache, or rash, or the fever does not come down at all with medication.' },
  ],
  whenNormal: ['A fever up to 104 degrees F during a common viral illness with a child who is still alert and drinking', 'Fever that comes down with medication even if it returns when the medication wears off', 'Mild irritability and decreased appetite with a fever'],
  whenToMention: ['Any fever above 104 degrees F - call your pediatrician for guidance', 'Fever above 102 degrees F lasting more than 2-3 days', 'You are unsure about medication dosing for fever', 'Your child has a fever and you are concerned about their behavior'],
  whenToActNow: ['ANY fever in a baby under 3 months (100.4 degrees F or higher) - go to the ER', 'Fever above 104 degrees F that does not respond to medication at all', 'Fever with a stiff neck, severe headache, or persistent vomiting (possible meningitis)', 'Fever with a purple or dark red rash that does not blanch (petechiae/purpura)', 'Your child is limp, unresponsive, or very difficult to wake', 'Fever with difficulty breathing', 'Febrile seizure (convulsion with fever) - call 911', 'Fever above 106 degrees F - emergency'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['newborn-fever-under-3-months', 'baby-ibuprofen-dosing-safety', 'febrile-seizures', 'baby-cold-vs-flu-difference'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fever. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/default.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. When to Call the Pediatrician: Fever. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/When-to-Call-the-Pediatrician.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Fever in Children. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK534793/' },
  ],
};
