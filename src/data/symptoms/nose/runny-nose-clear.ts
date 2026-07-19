import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'runny-nose-clear',
  title: 'Clear Runny Nose (Rhinorrhea) in Babies',
  bodySystem: 'nose',
  description: 'A clear runny nose is one of the most common symptoms in infants and toddlers. Babies average 6-8 colds per year, and a clear runny nose is typically the first sign. Clear nasal discharge is usually viral in origin, though it can also result from allergies, teething, cold air exposure, or crying. A clear runny nose alone without other concerning symptoms is generally not worrisome and resolves on its own.',
  possibleCauses: [
    { cause: 'Viral upper respiratory infection (common cold)', likelihood: 'common' },
    { cause: 'Teething-related nasal congestion', likelihood: 'common' },
    { cause: 'Cold or dry air irritation', likelihood: 'common' },
    { cause: 'Crying (excess tears drain through nasolacrimal duct)', likelihood: 'common' },
    { cause: 'Allergic rhinitis (more common after age 2)', likelihood: 'uncommon' },
    { cause: 'Exposure to irritants (smoke, strong smells)', likelihood: 'uncommon' },
    { cause: 'Cerebrospinal fluid leak (unilateral clear watery, after trauma)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Newborns are obligate nose breathers and any nasal congestion is noticeable. Small amounts of clear mucus are normal. Occasional sneezing with clear drainage helps clear the nasal passages.', whenToWorry: 'Clear runny nose with fever in a baby under 3 months, difficulty feeding due to congestion, fast breathing or chest retractions, or signs of dehydration.' },
    { ageRange: '3-12 months', normalVariation: 'Babies in daycare or with siblings may have a nearly constant clear runny nose during cold season. Teething can also increase nasal secretions. As long as baby feeds well and is happy, this is normal.', whenToWorry: 'Runny nose lasting more than 10-14 days without improvement, accompanied by high fever, significant cough, or ear-pulling with fever.' },
    { ageRange: '1-3 years', normalVariation: 'Toddlers frequently have colds. Clear runny nose for 7-10 days with a cold is typical. May run clear for 2-3 days before becoming thicker.', whenToWorry: 'Persistent one-sided clear runny nose (possible foreign body or CSF leak), facial pain or swelling, high or prolonged fever, or symptoms worsening after initial improvement (secondary bacterial infection).' },
  ],
  urgencyLevels: {
    emergency: [
      'Clear runny nose with severe breathing difficulty or blue color',
      'Persistent unilateral clear watery discharge after head injury (possible CSF leak)',
      'Clear runny nose with high fever and stiff neck in any age (possible meningitis)',
    ],
    urgent: [
      'Clear runny nose with fever in infant under 3 months',
      'Clear runny nose with significant respiratory distress',
      'Persistent unilateral discharge with foul smell (possible foreign body)',
    ],
    sameDay: [
      'Clear runny nose lasting more than 14 days without improvement',
      'Clear runny nose with ear pain or fever developing',
      'Significant congestion interfering with feeding in young infant',
    ],
    monitor: [
      'Clear runny nose with typical cold symptoms and normal feeding',
      'Clear discharge with sneezing in cold weather',
      'Mild clear runny nose during teething',
      'Brief clear discharge after crying',
    ],
  },
  homeRemedies: [
    'Use saline nasal drops (2-3 drops per nostril) before feeds and sleep to loosen mucus',
    'Gently suction with a bulb syringe or NoseFrida after saline drops',
    'Run a cool-mist humidifier in baby\'s room to add moisture to the air',
    'Elevate the head of the crib slightly (by placing a towel under the mattress)',
    'Offer extra fluids (breast milk, formula, or water if over 6 months) to stay hydrated',
    'Wipe nose gently with soft tissues; apply a thin layer of petroleum jelly to prevent chapping',
    'Keep baby upright during and after feeding to reduce nasal congestion',
    'Do NOT use decongestants or cold medicines in children under 2 years',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['runny-nose-colored', 'congestion', 'sneezing'],
  relatedIllnessSlugs: ['common-cold', 'allergies'],
  relatedConcernSlugs: ['baby-runny-nose', 'baby-cold', 'newborn-congestion'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Caring for Your Child\'s Cold or Flu. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Colds.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Over-the-Counter Cough and Cold Medicines Are Not for Infants and Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Common cold in babies - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/common-cold-in-babies/symptoms-causes/syc-20351651' },
  ],
};
