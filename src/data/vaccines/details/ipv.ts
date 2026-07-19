import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'ipv',
  name: 'Polio Vaccine (IPV)',
  abbreviation: 'IPV',
  diseasePrevented: ['Poliomyelitis (polio)', 'Paralytic polio', 'Post-polio syndrome'],
  howItWorks: 'The Inactivated Poliovirus Vaccine (IPV) contains killed (inactivated) poliovirus of all three serotypes (types 1, 2, and 3). Because the virus is completely inactivated, it cannot cause polio. When injected, the killed virus stimulates the immune system to produce antibodies against all three poliovirus types. These antibodies provide protection if the person is later exposed to wild poliovirus, preventing the virus from reaching the nervous system and causing paralysis.',
  schedule: [
    { dose: 1, age: '2 months' },
    { dose: 2, age: '4 months' },
    { dose: 3, age: '6-18 months' },
    { dose: 4, age: '4-6 years' },
  ],
  ingredients: ['Inactivated poliovirus types 1, 2, and 3', '2-phenoxyethanol (preservative)', 'Formaldehyde (trace, used for inactivation)', 'Neomycin (trace)', 'Streptomycin (trace)', 'Polymyxin B (trace)', 'Medium 199 (cell culture medium)'],
  brands: [
    { name: 'IPOL', manufacturer: 'Sanofi Pasteur' },
    { name: 'Pentacel', manufacturer: 'Sanofi Pasteur (combination DTaP-IPV/Hib)' },
    { name: 'Kinrix', manufacturer: 'GlaxoSmithKline (combination DTaP-IPV)' },
    { name: 'Vaxelis', manufacturer: 'MCM Vaccine Company (hexavalent combination)' },
  ],
  commonSideEffects: [
    'Redness, swelling, or soreness at injection site',
    'Mild fussiness',
    'Low-grade fever',
    'Decreased appetite',
    'Drowsiness',
  ],
  seriousReactions: [
    'Severe allergic reaction (anaphylaxis) — extremely rare',
    'IPV cannot cause polio (it contains only killed virus)',
    'No serious adverse effects have been confirmed in large-scale studies',
  ],
  contraindications: [
    'Severe allergic reaction (anaphylaxis) to a previous dose of IPV',
    'Severe allergy to neomycin, streptomycin, or polymyxin B',
    'Note: Mild illness, current antibiotic use, and prematurity are NOT contraindications',
  ],
  effectivenessRate: 'IPV is 99-100% effective against paralytic polio after the complete series of 4 doses. Two doses provide at least 90% protection, and three doses provide at least 99% protection against all three poliovirus types.',
  commonMyths: [
    { myth: 'Polio has been eradicated so the vaccine is no longer needed', fact: 'Polio has NOT been fully eradicated worldwide. Wild poliovirus still circulates in Afghanistan and Pakistan. Additionally, cases of vaccine-derived poliovirus (from oral polio vaccine used in other countries) have been detected in wastewater in several countries. As long as polio exists anywhere, unvaccinated children everywhere remain at risk.' },
    { myth: 'The polio vaccine can give my child polio', fact: 'The IPV used in the United States contains completely killed (inactivated) virus and CANNOT cause polio under any circumstances. The older oral polio vaccine (OPV), which used live attenuated virus, has not been used in the US since 2000.' },
    { myth: 'Polio wasn\'t really that bad', fact: 'At its peak in the US (1952), polio paralyzed or killed over 57,000 people in a single year, mostly children. Many survivors spent their lives in iron lungs or with permanent paralysis. Polio still has no cure — only prevention through vaccination.' },
  ],
  faqItems: [
    { question: 'Can my child get polio from the vaccine?', answer: 'No. The IPV used in the United States contains only killed virus and cannot cause polio infection. It is physically impossible to get polio from IPV.' },
    { question: 'Why do we still vaccinate against polio if it is rare?', answer: 'Polio still exists in parts of the world and could be reintroduced to any country through international travel. Without continued vaccination, polio could rapidly return. The virus can spread silently — for every case of paralysis, there are 200 people spreading the virus without symptoms.' },
    { question: 'What is the difference between IPV and OPV?', answer: 'IPV (used in the US) is an injected killed-virus vaccine that cannot cause disease. OPV (oral polio vaccine) uses live weakened virus and is still used in some other countries because it is cheaper and provides intestinal immunity. The US switched exclusively to IPV in 2000 to eliminate the tiny risk of vaccine-associated paralysis from OPV.' },
    { question: 'Is my child protected after the first dose?', answer: 'Partial protection begins after the first dose, but the full series of 4 doses is needed for maximum and long-lasting protection. After 2 doses, protection is approximately 90%, and after 3 doses it exceeds 99%.' },
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Polio Vaccine Information Statement.', url: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/ipv.html' },
    { org: 'AAP', citation: 'AAP. Poliovirus Infections. Red Book: Report of the Committee on Infectious Diseases.', url: 'https://publications.aap.org/redbook' },
    { org: 'WHO', citation: 'WHO. Polio vaccines: WHO position paper. 2022.', url: 'https://www.who.int/publications/i/item/WHO-WER9725' },
  ],
};
