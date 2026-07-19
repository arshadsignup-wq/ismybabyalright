import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'sneezing',
  title: 'Sneezing in Babies',
  bodySystem: 'nose',
  description: 'Sneezing in babies is extremely common and is usually a normal protective reflex. Newborns sneeze frequently to clear their nasal passages of amniotic fluid, mucus, lint, and other particles. Since babies cannot blow their noses, sneezing is their primary way of clearing nasal passages. Frequent sneezing without other symptoms is almost always normal, particularly in the first few months of life.',
  possibleCauses: [
    { cause: 'Normal newborn nasal clearing reflex', likelihood: 'common' },
    { cause: 'Dust, lint, or environmental particles in nasal passages', likelihood: 'common' },
    { cause: 'Viral upper respiratory infection (cold)', likelihood: 'common' },
    { cause: 'Dry air irritating nasal membranes', likelihood: 'common' },
    { cause: 'Bright light triggering photic sneeze reflex (genetic trait)', likelihood: 'uncommon' },
    { cause: 'Allergic rhinitis (uncommon before age 2)', likelihood: 'uncommon' },
    { cause: 'Irritants (perfume, cigarette smoke, cleaning products)', likelihood: 'uncommon' },
    { cause: 'Neonatal abstinence syndrome (if maternal substance use)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Newborns sneeze very frequently—sometimes dozens of times daily. This is their way of clearing tiny nasal passages. Sneezing in clusters is common and normal. Does NOT mean baby has a cold.', whenToWorry: 'Sneezing with thick nasal discharge, fever, poor feeding, or respiratory distress. Excessive sneezing, yawning, and irritability in a newborn (possible neonatal abstinence).' },
    { ageRange: '3-12 months', normalVariation: 'Sneezing continues to be a normal clearing mechanism. May increase during colds, in dusty environments, or when going from warm to cold air.', whenToWorry: 'Sneezing with persistent thick green discharge, fever, difficulty breathing, refusal to feed, or frequent sneezing combined with wheezing.' },
    { ageRange: '1-3 years', normalVariation: 'Sneezing remains normal, especially during colds (6-8 per year). Some children sneeze when going into bright sunlight (photic sneeze reflex—affects 18-35% of people).', whenToWorry: 'Chronic sneezing with itchy/watery eyes and nasal rubbing (allergies), sneezing with one-sided discharge (foreign body), or sneezing fits with difficulty breathing.' },
  ],
  urgencyLevels: {
    emergency: [
      'Sneezing with severe respiratory distress (nasal flaring, retractions, blue color)',
      'Sneezing with blood and difficulty breathing after nasal trauma',
    ],
    urgent: [
      'Frequent sneezing with fever in infant under 3 months',
      'Sneezing with signs of neonatal abstinence syndrome (tremors, high-pitched cry, poor feeding)',
    ],
    sameDay: [
      'Sneezing with thick colored discharge lasting more than 10-14 days',
      'Chronic sneezing with significant eye and nose symptoms suggesting allergies',
      'Sneezing after possible foreign body insertion in nose',
    ],
    monitor: [
      'Normal newborn sneezing without other symptoms',
      'Occasional sneezing in dry or dusty environments',
      'Sneezing during a mild cold with normal feeding and behavior',
      'Photic sneeze reflex (sneezing in bright light)',
    ],
  },
  homeRemedies: [
    'No treatment needed for normal newborn sneezing',
    'Use a cool-mist humidifier to add moisture to dry indoor air',
    'Avoid strong fragrances, smoke, and dusty environments near baby',
    'Use fragrance-free detergents and cleaning products',
    'Keep baby\'s environment clean but not overly sterile',
    'Use saline nasal drops if congestion accompanies sneezing',
    'Avoid putting blankets or stuffed animals near newborn face (lint in nose)',
    'Vacuum and dust regularly if environmental triggers are suspected',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['runny-nose-clear', 'congestion', 'runny-nose-colored'],
  relatedIllnessSlugs: ['common-cold', 'allergies'],
  relatedConcernSlugs: ['baby-sneezing-a-lot', 'newborn-sneezing', 'baby-allergies'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Common Conditions in Newborns. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Common-Conditions-in-Newborns.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Allergies and the Immune System. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/default.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Common cold in babies - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/common-cold-in-babies/symptoms-causes/syc-20351651' },
  ],
};
