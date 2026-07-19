import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'hepatitis-b',
  name: 'Hepatitis B Vaccine',
  abbreviation: 'HepB',
  diseasePrevented: ['Hepatitis B virus infection', 'Chronic liver disease', 'Liver cancer'],
  howItWorks: 'The hepatitis B vaccine contains a small piece of the surface protein of the hepatitis B virus (HBsAg), produced using recombinant DNA technology in yeast cells. This protein is not infectious and cannot cause hepatitis B. When injected, it stimulates the immune system to produce antibodies that will recognize and fight the actual virus if exposed later.',
  schedule: [
    { dose: 1, age: 'Birth (within 24 hours)' },
    { dose: 2, age: '1 month' },
    { dose: 3, age: '6 months' },
  ],
  ingredients: ['Hepatitis B surface antigen (HBsAg)', 'Aluminum hydroxide (adjuvant)', 'Yeast protein', 'Sodium chloride', 'Phosphate buffers'],
  brands: [
    { name: 'Engerix-B', manufacturer: 'GlaxoSmithKline' },
    { name: 'Recombivax HB', manufacturer: 'Merck' },
  ],
  commonSideEffects: [
    'Soreness at injection site (25-30% of recipients)',
    'Mild fever (1-6%)',
    'Fussiness or irritability',
    'Fatigue',
    'Headache (in older children)',
  ],
  seriousReactions: [
    'Severe allergic reaction (anaphylaxis) — extremely rare, approximately 1 in 1.1 million doses',
    'No confirmed link to any chronic illness or neurological condition',
  ],
  contraindications: [
    'Severe allergic reaction (anaphylaxis) to a previous dose of hepatitis B vaccine',
    'Known allergy to yeast or any vaccine component',
    'Note: Premature infants weighing less than 2,000g may have the birth dose delayed until 1 month or hospital discharge, unless mother is HBsAg-positive',
  ],
  effectivenessRate: 'More than 95% of infants, children, and young adults develop protective antibodies after completing the 3-dose series. Protection lasts at least 30 years and likely lifelong.',
  commonMyths: [
    { myth: 'My newborn doesn\'t need this vaccine because they\'re not at risk', fact: 'Hepatitis B can be transmitted from mother to baby during birth even if the mother doesn\'t know she\'s infected. The birth dose provides critical protection. Additionally, chronic infection is most dangerous when acquired in infancy (90% become chronic vs 5% in adults).' },
    { myth: 'The vaccine contains mercury', fact: 'Single-dose vials of hepatitis B vaccine used for infants have NEVER contained thimerosal (the mercury-containing preservative). This was confirmed by the FDA and CDC.' },
    { myth: 'Too many vaccines too soon overwhelm the immune system', fact: 'Studies show babies\' immune systems can handle thousands of antigens simultaneously. The hepatitis B vaccine contains just one protein and does not overwhelm the immune system.' },
  ],
  faqItems: [
    { question: 'Why is hepatitis B vaccine given at birth?', answer: 'The birth dose provides a critical safety net for infants born to mothers with undetected hepatitis B infection. Chronic hepatitis B is most dangerous when acquired at birth (90% become chronically infected), so early protection is essential.' },
    { question: 'Can the hepatitis B vaccine cause hepatitis B?', answer: 'No. The vaccine contains only a small surface protein of the virus, not the virus itself. It is physically impossible to get hepatitis B from the vaccine.' },
    { question: 'What if my baby was premature?', answer: 'Premature babies weighing less than 2,000 grams at birth may have the first dose delayed to 1 month of age OR hospital discharge, whichever comes first — UNLESS the mother is hepatitis B positive, in which case the birth dose is still given immediately along with HBIG.' },
    { question: 'How long does protection last?', answer: 'Studies show that protection from the complete 3-dose series lasts at least 30 years and is believed to be lifelong for most people, even if antibody levels decline over time.' },
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Hepatitis B Vaccine Information Statement.', url: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/hep-b.html' },
    { org: 'AAP', citation: 'AAP. Elimination of Perinatal Hepatitis B. Pediatrics. 2017.', url: 'https://publications.aap.org/pediatrics/article/140/3/e20171870/38467' },
    { org: 'WHO', citation: 'WHO. Hepatitis B vaccines: WHO position paper. 2017.', url: 'https://www.who.int/publications/i/item/WER9227' },
  ],
};
