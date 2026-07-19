import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'covid-19',
  name: 'COVID-19 Vaccine',
  abbreviation: 'COVID-19',
  diseasePrevented: ['COVID-19 (SARS-CoV-2 infection)', 'Multisystem Inflammatory Syndrome in Children (MIS-C)', 'Severe respiratory illness from SARS-CoV-2'],
  howItWorks: 'The updated COVID-19 vaccines for children use mRNA technology (Pfizer-BioNTech or Moderna) to instruct cells to produce a harmless piece of the SARS-CoV-2 spike protein. The immune system recognizes this protein as foreign and builds antibodies and T-cells to fight the actual virus if encountered. The mRNA is quickly broken down by the body and does not alter DNA.',
  schedule: [
    { dose: 1, age: '6 months (primary series)' },
    { dose: 2, age: '3-8 weeks after dose 1 (depending on product)' },
    { dose: 3, age: 'Updated annual dose recommended each fall' },
  ],
  ingredients: ['mRNA (encoding spike protein)', 'Lipid nanoparticles (SM-102 or ALC-0315)', 'Cholesterol', 'Polyethylene glycol (PEG)', 'Tromethamine buffer', 'Sucrose (stabilizer)'],
  brands: [
    { name: 'Comirnaty / Pfizer-BioNTech COVID-19 Vaccine', manufacturer: 'Pfizer-BioNTech' },
    { name: 'Spikevax / Moderna COVID-19 Vaccine', manufacturer: 'Moderna' },
  ],
  commonSideEffects: [
    'Pain, redness, or swelling at injection site (most common)',
    'Irritability or crying (infants and toddlers)',
    'Sleepiness or fatigue',
    'Mild fever',
    'Loss of appetite',
    'Muscle aches (in older children)',
  ],
  seriousReactions: [
    'Myocarditis/pericarditis — extremely rare, primarily in adolescent males after dose 2 (approximately 1-5 per 100,000 in 12-17 year old males; even rarer in younger children)',
    'Severe allergic reaction (anaphylaxis) — approximately 2-5 per million doses',
    'Febrile seizures — very rare, similar rate to other childhood vaccines',
  ],
  contraindications: [
    'Severe allergic reaction (anaphylaxis) to a previous dose of COVID-19 vaccine',
    'Known allergy to any component of the vaccine (e.g., polyethylene glycol)',
    'Note: Children under 6 months are not currently authorized to receive COVID-19 vaccines',
  ],
  effectivenessRate: 'In children aged 6 months to 4 years, the primary series showed approximately 40-80% effectiveness against symptomatic infection (varies by variant) and over 75% effectiveness against hospitalization and severe disease including MIS-C. Updated formulations targeting current variants provide improved protection.',
  commonMyths: [
    { myth: 'The mRNA vaccine changes children\'s DNA', fact: 'mRNA cannot enter the cell nucleus where DNA is stored. It is read by ribosomes in the cytoplasm, produces the spike protein, and is then rapidly degraded by normal cellular enzymes — typically within 48-72 hours.' },
    { myth: 'Children don\'t need the vaccine because COVID is mild in kids', fact: 'While most children have mild illness, COVID-19 has hospitalized over 200,000 US children, caused over 1,800 pediatric deaths, and can trigger MIS-C — a serious inflammatory condition. The vaccine significantly reduces these risks.' },
    { myth: 'Natural immunity is better than vaccine immunity for children', fact: 'Natural infection carries risks of severe disease, long COVID, and MIS-C. Studies show that vaccination after infection provides the strongest "hybrid immunity," and vaccination alone provides robust protection without the risks of disease.' },
  ],
  faqItems: [
    { question: 'At what age can my baby get the COVID-19 vaccine?', answer: 'COVID-19 vaccines are authorized for children aged 6 months and older. Both Pfizer-BioNTech and Moderna offer pediatric formulations specifically dosed for young children.' },
    { question: 'Can my baby get the COVID-19 vaccine at the same time as other vaccines?', answer: 'Yes. The CDC confirms that COVID-19 vaccines can be given at the same visit as other childhood vaccines, including flu shots. There is no need to space them out.' },
    { question: 'How often does my child need an updated COVID-19 vaccine?', answer: 'The CDC recommends an updated COVID-19 vaccine annually (typically each fall) for everyone aged 6 months and older, similar to the annual flu vaccine. The formulation is updated to match circulating variants.' },
    { question: 'Is myocarditis a concern for babies and toddlers?', answer: 'Myocarditis after COVID-19 vaccination is extremely rare in children under 5. The risk is highest in adolescent males aged 12-17 after dose 2. In young children, the risk from COVID-19 infection causing myocarditis is higher than the vaccine risk.' },
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. COVID-19 Vaccines for Children and Teens.', url: 'https://www.cdc.gov/covid/vaccines/children-teens.html' },
    { org: 'AAP', citation: 'AAP. COVID-19 Vaccine for Children and Adolescents.', url: 'https://www.aap.org/en/pages/2019-novel-coronavirus-covid-19-infections/covid-19-vaccine-for-children/' },
    { org: 'WHO', citation: 'WHO. COVID-19 Vaccines: Safety Surveillance Manual.', url: 'https://www.who.int/publications/i/item/WHO-2019-nCoV-Vaccine-safety-surveillance-manual' },
  ],
};
