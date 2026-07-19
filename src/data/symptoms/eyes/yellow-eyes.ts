import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'yellow-eyes',
  title: 'Yellow Eyes (Jaundice) in Babies',
  bodySystem: 'eyes',
  description: 'Yellowing of the whites of the eyes (scleral icterus) in babies indicates elevated bilirubin levels (jaundice). Physiological jaundice is extremely common in newborns, affecting about 60% of full-term and 80% of premature babies. It typically peaks between days 3-5 of life and resolves within 1-2 weeks. However, jaundice persisting beyond 2 weeks or appearing after 2 weeks of age may indicate a more serious condition.',
  possibleCauses: [
    { cause: 'Physiological newborn jaundice (immature liver)', likelihood: 'common' },
    { cause: 'Breast milk jaundice (benign, peaks 2 weeks)', likelihood: 'common' },
    { cause: 'Breastfeeding jaundice (inadequate intake in first days)', likelihood: 'common' },
    { cause: 'ABO or Rh blood group incompatibility', likelihood: 'uncommon' },
    { cause: 'G6PD deficiency', likelihood: 'uncommon' },
    { cause: 'Infection (sepsis, urinary tract infection)', likelihood: 'uncommon' },
    { cause: 'Biliary atresia (blocked bile ducts)', likelihood: 'rare' },
    { cause: 'Hypothyroidism', likelihood: 'rare' },
    { cause: 'Galactosemia or other metabolic disorders', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 weeks', normalVariation: 'Physiological jaundice peaks at days 3-5 and typically resolves by 2 weeks. Mild yellowing of skin and eyes is extremely common. Progresses head to toe as bilirubin rises.', whenToWorry: 'Jaundice appearing in first 24 hours of life, rapidly deepening yellow color, yellow extending to legs and feet, poor feeding or lethargy, high-pitched cry, or dark urine and pale stools.' },
    { ageRange: '2-8 weeks', normalVariation: 'Breast milk jaundice can persist up to 12 weeks in breastfed infants while baby feeds well and gains weight normally.', whenToWorry: 'Pale or white stools (acholic stools suggesting biliary atresia), dark tea-colored urine, poor weight gain, progressive yellowing, or jaundice appearing for the first time after 2 weeks.' },
    { ageRange: '2+ months', normalVariation: 'Jaundice should have resolved by this age in the vast majority of babies.', whenToWorry: 'Any yellow discoloration of eyes or skin at this age is abnormal and requires prompt medical evaluation. Could indicate liver disease, biliary atresia, or other serious conditions.' },
  ],
  urgencyLevels: {
    emergency: [
      'Jaundice appearing in the first 24 hours of life',
      'Very deep yellow or orange color with lethargy and poor feeding',
      'High-pitched crying, arching of back, or seizures with jaundice (possible kernicterus)',
      'Fever with jaundice in a newborn',
    ],
    urgent: [
      'Jaundice spreading to legs and feet rapidly',
      'Jaundice with pale/white stools and dark urine (possible biliary atresia)',
      'Jaundiced baby who is difficult to wake for feeds',
      'Jaundice worsening after initially improving',
      'New jaundice appearing after 2 weeks of age',
    ],
    sameDay: [
      'Jaundice persisting beyond 2 weeks in formula-fed baby',
      'Moderate jaundice in a breastfed baby under 2 weeks with good feeding',
      'Mild jaundice with parental concern about color progression',
    ],
    monitor: [
      'Mild physiological jaundice at days 3-5 with good feeding and wet diapers',
      'Known breast milk jaundice with confirmed normal stool color and weight gain',
      'Jaundice improving day by day with adequate intake',
    ],
  },
  homeRemedies: [
    'Feed baby frequently (8-12 times per day for breastfed infants) to help excrete bilirubin',
    'Do not supplement with water or sugar water—breast milk or formula only',
    'Expose baby to indirect sunlight near a window for short periods (not direct sunlight)',
    'Monitor stool color daily—normal is yellow/green/brown; pale or white stools need immediate evaluation',
    'Monitor urine output—at least 6 wet diapers per day indicates adequate hydration',
    'Check skin color by pressing gently on the forehead or chest and observing the color underneath',
    'Keep follow-up appointments for bilirubin checks as recommended by your pediatrician',
    'Do NOT stop breastfeeding unless specifically advised by your doctor',
  ],
  triageSlug: 'jaundice',
  relatedSymptomSlugs: ['red-eye', 'pale-stools', 'dark-urine'],
  relatedIllnessSlugs: ['newborn-jaundice', 'biliary-atresia'],
  relatedConcernSlugs: ['baby-jaundice', 'baby-yellow-skin', 'baby-yellow-eyes'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Clinical Practice Guideline: Management of Hyperbilirubinemia in the Newborn Infant 35 or More Weeks of Gestation. Pediatrics. 2004;114(1):297-316. Revised 2022.', url: 'https://publications.aap.org/pediatrics/article/150/3/e2022058859/188443/Clinical-Practice-Guideline-Revision-Management-of' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. What are Jaundice and Kernicterus?', url: 'https://www.cdc.gov/jaundice/about/' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Infant jaundice - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/infant-jaundice/symptoms-causes/syc-20373865' },
  ],
};
