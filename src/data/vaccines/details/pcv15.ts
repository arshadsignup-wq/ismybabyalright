import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'pcv15',
  name: 'Pneumococcal Conjugate Vaccine (PCV15)',
  abbreviation: 'PCV15',
  diseasePrevented: ['Pneumococcal meningitis', 'Pneumococcal pneumonia', 'Bacteremia (bloodstream infection)', 'Ear infections caused by pneumococcus', 'Sinus infections caused by pneumococcus'],
  howItWorks: 'PCV15 is a conjugate vaccine that contains purified capsular polysaccharides from 15 different strains (serotypes) of Streptococcus pneumoniae, each chemically linked to a carrier protein (CRM197, a nontoxic diphtheria protein). This conjugation allows infants\' immature immune systems to recognize and respond to the bacterial sugars, producing protective antibodies and immune memory against the most common disease-causing pneumococcal strains.',
  schedule: [
    { dose: 1, age: '2 months' },
    { dose: 2, age: '4 months' },
    { dose: 3, age: '6 months' },
    { dose: 4, age: '12-15 months (booster)' },
  ],
  ingredients: ['Capsular polysaccharides from 15 pneumococcal serotypes', 'CRM197 carrier protein', 'Aluminum phosphate (adjuvant)', 'Sodium chloride', 'L-histidine', 'Polysorbate 20'],
  brands: [
    { name: 'Vaxneuvance', manufacturer: 'Merck' },
    { name: 'Prevnar 20 (PCV20)', manufacturer: 'Pfizer (alternative covering 20 serotypes)' },
  ],
  commonSideEffects: [
    'Pain, redness, or swelling at injection site (40-50%)',
    'Irritability or fussiness (up to 70%)',
    'Drowsiness or decreased activity',
    'Fever (up to 40% may have mild fever)',
    'Decreased appetite',
    'Muscle aches or joint pain',
  ],
  seriousReactions: [
    'Severe allergic reaction (anaphylaxis) — extremely rare',
    'Febrile seizure — very rare, related to fever rather than vaccine components directly',
    'No confirmed link to any chronic conditions',
  ],
  contraindications: [
    'Severe allergic reaction (anaphylaxis) to a previous dose of any pneumococcal vaccine',
    'Severe allergic reaction to diphtheria toxoid or CRM197 protein',
    'Known allergy to any vaccine component',
  ],
  effectivenessRate: 'PCV15 is approximately 90-97% effective against invasive pneumococcal disease caused by the serotypes included in the vaccine. Since pneumococcal conjugate vaccines were introduced (starting with PCV7 in 2000), invasive pneumococcal disease in children under 5 has declined by approximately 90%.',
  commonMyths: [
    { myth: 'Pneumococcal disease only affects the elderly', fact: 'Children under 2 years old are actually at the highest risk for invasive pneumococcal disease. Before vaccination, pneumococcus was the leading cause of bacterial meningitis in children under 5 in the US, causing approximately 700 cases of meningitis, 13,000 bloodstream infections, and 5 million ear infections annually in children.' },
    { myth: 'The vaccine causes more ear infections', fact: 'The opposite is true. PCV vaccines have significantly reduced ear infections caused by pneumococcus. While other bacteria can still cause ear infections, studies show a 6-7% reduction in total ear infections and a 20% reduction in ear tube placements since PCV introduction.' },
    { myth: 'My child doesn\'t need this if they\'re healthy', fact: 'Healthy children are absolutely at risk. Before the vaccine, even healthy children without risk factors frequently developed severe pneumococcal infections. The bacteria spread through respiratory droplets and can rapidly cause life-threatening illness in any young child.' },
  ],
  faqItems: [
    { question: 'What is the difference between PCV15 and PCV20?', answer: 'PCV15 (Vaxneuvance) covers 15 pneumococcal serotypes, while PCV20 (Prevnar 20) covers 20 serotypes. Both are approved for infants and provide excellent protection. Your pediatrician may use either one. If PCV15 is used, a supplemental dose of PPSV23 may be recommended for high-risk children.' },
    { question: 'Why does my baby need 4 doses?', answer: 'Infants\' immune systems are immature and need multiple exposures to build strong, lasting protection. The first three doses build the primary immune response, and the booster at 12-15 months reinforces immune memory for long-term protection.' },
    { question: 'Can this vaccine prevent ear infections?', answer: 'Yes, partially. PCV vaccines prevent ear infections caused by the specific pneumococcal strains in the vaccine. Studies show a meaningful reduction in overall ear infections and a significant decrease in ear tube surgeries.' },
    { question: 'Is my child at higher risk if they are in daycare?', answer: 'Yes. Pneumococcal bacteria spread easily in group care settings through coughing, sneezing, and close contact. Children in daycare have 2-3 times the risk of pneumococcal disease compared to those cared for at home, making vaccination especially important.' },
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Pneumococcal Vaccine Information Statement.', url: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/pcv.html' },
    { org: 'AAP', citation: 'AAP. Policy Statement: Recommendations for the Prevention of Streptococcus pneumoniae Infections in Infants and Children.', url: 'https://publications.aap.org/pediatrics' },
    { org: 'WHO', citation: 'WHO. Pneumococcal conjugate vaccines: WHO position paper. 2019.', url: 'https://www.who.int/publications/i/item/WER9408' },
  ],
};
