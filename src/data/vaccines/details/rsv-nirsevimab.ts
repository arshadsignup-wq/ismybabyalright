import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'rsv-nirsevimab',
  name: 'RSV Immunization (Nirsevimab)',
  abbreviation: 'RSV-mAb',
  diseasePrevented: ['Respiratory Syncytial Virus (RSV) lower respiratory tract infection', 'RSV bronchiolitis', 'RSV pneumonia in infants'],
  howItWorks: 'Nirsevimab (Beyfortus) is a long-acting monoclonal antibody, not a traditional vaccine. It provides passive immunization by directly supplying pre-formed antibodies that target the RSV F protein in its prefusion form. Unlike vaccines that stimulate the baby\'s immune system to produce its own antibodies, nirsevimab gives the baby ready-made protection that lasts approximately 5 months — covering one RSV season.',
  schedule: [
    { dose: 1, age: 'One dose for all infants under 8 months entering their first RSV season (typically October-March)' },
    { dose: 2, age: 'One dose for high-risk children 8-19 months entering their second RSV season' },
  ],
  ingredients: ['Nirsevimab (monoclonal antibody)', 'L-histidine', 'L-histidine hydrochloride monohydrate', 'L-arginine hydrochloride', 'Sucrose', 'Polysorbate 80', 'Water for injection'],
  brands: [
    { name: 'Beyfortus', manufacturer: 'Sanofi and AstraZeneca' },
  ],
  commonSideEffects: [
    'Injection site reactions (redness, swelling, or tenderness) — 0.3%',
    'Rash (0.9%)',
    'Mild fever (rare)',
    'Note: Side effects are less common than with traditional vaccines because monoclonal antibodies do not activate the immune system',
  ],
  seriousReactions: [
    'Severe allergic reaction (anaphylaxis) — extremely rare',
    'Thrombocytopenia — reported very rarely in clinical trials',
    'Clinical trials (over 3,000 infants) showed no significant difference in serious adverse events between nirsevimab and placebo groups',
  ],
  contraindications: [
    'Known serious hypersensitivity to nirsevimab or any component',
    'Note: Prematurity, congenital heart disease, chronic lung disease, and immunodeficiency are NOT contraindications — these are actually indications for nirsevimab',
    'Note: Can be given alongside routine childhood vaccines',
  ],
  effectivenessRate: 'In clinical trials, nirsevimab reduced RSV-associated lower respiratory tract infections requiring medical attention by approximately 79% and RSV hospitalizations by approximately 77-83% through the RSV season. Protection lasts approximately 5 months from the single injection.',
  commonMyths: [
    { myth: 'Nirsevimab is a vaccine that could overwhelm my baby\'s immune system', fact: 'Nirsevimab is NOT a vaccine — it is a monoclonal antibody (passive immunization). It does not stimulate the baby\'s immune system at all. It simply provides pre-made antibodies that neutralize RSV directly, similar to antibodies a mother passes to her baby during pregnancy.' },
    { myth: 'Only premature babies need RSV protection', fact: 'RSV hospitalizes approximately 58,000-80,000 US children under 5 each year. Most hospitalized infants were born full-term with no underlying conditions. The CDC recommends nirsevimab for ALL infants under 8 months entering their first RSV season.' },
    { myth: 'Nirsevimab replaces the need for other preventive measures', fact: 'While nirsevimab significantly reduces RSV risk, families should still practice hand hygiene, avoid exposing young infants to sick contacts, and keep infants away from cigarette smoke — all of which reduce respiratory infection risk.' },
  ],
  faqItems: [
    { question: 'What is the difference between nirsevimab and palivizumab (Synagis)?', answer: 'Palivizumab (Synagis) was the older RSV antibody that required monthly injections and was only available to high-risk premature infants. Nirsevimab (Beyfortus) is a newer long-acting antibody that provides 5 months of protection with a single injection and is recommended for ALL infants, not just high-risk ones.' },
    { question: 'When should my baby receive nirsevimab?', answer: 'Infants born shortly before or during RSV season (October-March in most of the US) should receive nirsevimab within 1 week of birth. Infants born outside RSV season should receive it just before the season starts. Your pediatrician will advise on timing based on your region.' },
    { question: 'Can my baby get nirsevimab along with other vaccines?', answer: 'Yes. Nirsevimab can be given at the same visit as routine childhood vaccines. Studies show no interference with other vaccines and no increase in adverse events when co-administered.' },
    { question: 'Does my baby still need nirsevimab if I received the RSV vaccine during pregnancy?', answer: 'If the mother received the maternal RSV vaccine (Abrysvo) during pregnancy at 32-36 weeks gestation, the infant generally does NOT also need nirsevimab. However, if the maternal vaccine was given less than 14 days before delivery, nirsevimab should be considered. Discuss with your pediatrician.' },
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. RSV Immunization for Infants and Young Children.', url: 'https://www.cdc.gov/rsv/vaccines/index.html' },
    { org: 'AAP', citation: 'AAP. Updated Guidance: Prevention of RSV Disease in Infants and Children. 2023.', url: 'https://publications.aap.org/pediatrics/article/152/1/e2023061803/192153' },
    { org: 'WHO', citation: 'WHO. Respiratory Syncytial Virus (RSV) Disease.', url: 'https://www.who.int/teams/health-product-policy-and-standards/standards-and-specifications/norms-and-standards/vaccine-standardization/respiratory-syncytial-virus-disease' },
  ],
};
