import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'hib',
  name: 'Hib Vaccine (Haemophilus influenzae type b)',
  abbreviation: 'Hib',
  diseasePrevented: ['Hib meningitis (brain infection)', 'Hib pneumonia', 'Epiglottitis (severe throat swelling)', 'Septic arthritis', 'Bloodstream infections (bacteremia)'],
  howItWorks: 'The Hib vaccine is a conjugate vaccine that works by linking a sugar (polysaccharide) from the outer coating of the Haemophilus influenzae type b bacterium to a carrier protein. This conjugation technique is crucial for infants because their immature immune systems cannot mount a strong response to polysaccharides alone. The protein carrier helps the immune system recognize and remember the Hib sugar, producing long-lasting antibody protection.',
  schedule: [
    { dose: 1, age: '2 months' },
    { dose: 2, age: '4 months' },
    { dose: 3, age: '6 months (PRP-OMP brands only; PRP-T brands skip this dose)' },
    { dose: 4, age: '12-15 months (booster)' },
  ],
  ingredients: ['Hib capsular polysaccharide (PRP)', 'Carrier protein (tetanus toxoid or meningococcal outer membrane protein)', 'Aluminum phosphate (adjuvant, in some formulations)', 'Sodium chloride', 'Sucrose (stabilizer)'],
  brands: [
    { name: 'ActHIB', manufacturer: 'Sanofi Pasteur (PRP-T conjugate)' },
    { name: 'PedvaxHIB', manufacturer: 'Merck (PRP-OMP conjugate)' },
    { name: 'Pentacel', manufacturer: 'Sanofi Pasteur (combination DTaP-IPV/Hib)' },
    { name: 'Vaxelis', manufacturer: 'MCM Vaccine Company (hexavalent combination)' },
  ],
  commonSideEffects: [
    'Redness or swelling at injection site (5-30%)',
    'Mild fever (2-10%)',
    'Fussiness or irritability',
    'Decreased appetite',
    'Drowsiness',
  ],
  seriousReactions: [
    'Severe allergic reaction (anaphylaxis) — extremely rare, less than 1 in 1 million doses',
    'No confirmed serious long-term adverse effects associated with the Hib vaccine',
  ],
  contraindications: [
    'Severe allergic reaction (anaphylaxis) to a previous dose of Hib vaccine or any vaccine component',
    'Age less than 6 weeks (vaccine should not be given before 6 weeks of age)',
  ],
  effectivenessRate: 'The Hib conjugate vaccine is 95-100% effective at preventing invasive Hib disease after completion of the primary series. Since its introduction in the late 1980s, invasive Hib disease in children under 5 has decreased by more than 99% in the United States.',
  commonMyths: [
    { myth: 'Hib disease is the same as the flu', fact: 'Despite the confusing name "Haemophilus influenzae," Hib bacteria have nothing to do with influenza (the flu). The bacterium was misnamed in 1892 when it was incorrectly thought to cause influenza. Hib causes meningitis, pneumonia, and bloodstream infections — not the flu.' },
    { myth: 'Hib disease was already declining before the vaccine', fact: 'Before the vaccine, Hib was the leading cause of bacterial meningitis in children under 5, causing approximately 20,000 cases of invasive disease per year in the US. Rates dropped more than 99% specifically after the conjugate vaccine was introduced.' },
    { myth: 'My breastfed baby is already protected', fact: 'While breastfeeding provides some general immune support, it does not provide reliable specific protection against Hib disease. Studies show that breastfeeding alone is not a substitute for Hib vaccination.' },
  ],
  faqItems: [
    { question: 'Why are there different numbers of doses depending on the brand?', answer: 'The PRP-OMP type (PedvaxHIB) produces a stronger initial immune response, so it requires only 2 doses in the primary series plus a booster. The PRP-T type (ActHIB) requires 3 primary doses plus a booster. Both schedules provide equivalent long-term protection.' },
    { question: 'Does my child still need this vaccine if they are in daycare?', answer: 'Yes, absolutely. Children in group care settings are at higher risk for Hib transmission. Vaccination is especially important for children in daycare environments.' },
    { question: 'What if my child missed a dose?', answer: 'The catch-up schedule depends on the child\'s age and how many doses they\'ve received. Children who start the series late generally need fewer doses. Your pediatrician will determine the appropriate catch-up schedule.' },
    { question: 'Can Hib vaccine be given as part of a combination vaccine?', answer: 'Yes. Hib is commonly given as part of combination vaccines like Pentacel (DTaP-IPV/Hib) or Vaxelis (DTaP-IPV-Hib-HepB), which reduces the total number of injections your baby receives.' },
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Hib Vaccine Information Statement.', url: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/hib.html' },
    { org: 'AAP', citation: 'AAP. Haemophilus influenzae Infections. Red Book: Report of the Committee on Infectious Diseases.', url: 'https://publications.aap.org/redbook' },
    { org: 'WHO', citation: 'WHO. Haemophilus influenzae type b (Hib) vaccination position paper. 2013.', url: 'https://www.who.int/publications/i/item/WER8839' },
  ],
};
