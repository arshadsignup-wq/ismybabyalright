import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-mold-exposure-symptoms',
  title: 'Mold Exposure Symptoms in Baby or Toddler',
  category: 'medical',
  searchTerms: ['baby mold exposure', 'toddler mold allergy', 'baby mold in house', 'toddler mold symptoms', 'baby breathing mold', 'mold baby health', 'black mold baby', 'baby mold allergy', 'toddler mold cough', 'baby mold in room'],
  quickAnswer: 'Mold is a common indoor allergen that can affect babies and toddlers, particularly those with a family history of allergies or asthma. Symptoms of mold sensitivity include chronic nasal congestion, sneezing, coughing, wheezing, itchy eyes, and worsening eczema. Babies with developing immune and respiratory systems may be more vulnerable to the effects of indoor mold. The most important treatment is removing the mold source and reducing indoor humidity. If you see or smell mold in your home, address it promptly, especially in your child\'s bedroom and play areas.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies are more vulnerable to indoor air quality issues because they breathe faster than adults (relative to their body size) and spend more time indoors. Signs that mold may be affecting your baby include: persistent congestion without a cold, wheezing, recurrent respiratory infections, and eczema that does not respond well to treatment. If you live in a damp or humid environment and your baby has chronic respiratory symptoms, consider mold as a potential contributor. Check for mold in the nursery, especially around windows, humidifiers, and air conditioning units.' },
    { ageRange: '1-3 years', context: 'Toddlers with mold sensitivity may have: chronic stuffy nose, frequent coughing (especially at night), recurrent upper respiratory infections, wheezing, and worsening allergy or asthma symptoms in damp environments. To reduce mold exposure: keep indoor humidity below 50% (use a dehumidifier if needed), fix water leaks promptly, ensure good ventilation in bathrooms and kitchens, clean visible mold with detergent and water, avoid humidifiers (or clean them daily), and remove carpet in damp areas. If symptoms improve when away from home (such as on vacation), indoor mold may be a contributing factor.' },
  ],
  whenNormal: ['No symptoms despite living in an area with some environmental mold', 'Mild congestion during humid seasons that is not persistent'],
  whenToMention: ['Your child has chronic respiratory symptoms and you have visible mold in your home', 'You want testing or evaluation for mold allergy', 'Your child\'s asthma or allergies seem worse at home than elsewhere', 'You have found mold in your home and want guidance on keeping your child safe'],
  whenToActNow: ['Your child has wheezing or difficulty breathing in a mold-contaminated environment', 'Extensive black mold in your home - seek professional remediation and consider temporary relocation for your child', 'Your child has recurrent pneumonia or serious respiratory infections that may be linked to mold exposure'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-seasonal-allergies', 'chronic-congestion', 'baby-wheezing', 'eczema'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Mold Allergy. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Mold-Allergy.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Mold and Your Health.', url: 'https://www.cdc.gov/mold/' },
    { org: 'NIH', citation: 'National Institute of Environmental Health Sciences. Mold.', url: 'https://www.niehs.nih.gov/health/topics/agents/mold/' },
  ],
};
