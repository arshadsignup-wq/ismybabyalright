import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'dtap',
  name: 'DTaP Vaccine (Diphtheria, Tetanus, Pertussis)',
  abbreviation: 'DTaP',
  diseasePrevented: ['Diphtheria', 'Tetanus (lockjaw)', 'Pertussis (whooping cough)'],
  howItWorks: 'DTaP is an inactivated vaccine containing purified, inactivated toxins (toxoids) from diphtheria and tetanus bacteria, plus inactivated components of the pertussis (whooping cough) bacterium. The "a" in DTaP stands for "acellular," meaning only specific purified proteins from the pertussis bacterium are used rather than the whole killed cell. This stimulates the immune system to produce antibodies against all three diseases without risk of infection.',
  schedule: [
    { dose: 1, age: '2 months' },
    { dose: 2, age: '4 months' },
    { dose: 3, age: '6 months' },
    { dose: 4, age: '15-18 months' },
    { dose: 5, age: '4-6 years' },
  ],
  ingredients: ['Diphtheria toxoid', 'Tetanus toxoid', 'Acellular pertussis antigens (PT, FHA, pertactin, fimbriae)', 'Aluminum salts (adjuvant)', 'Formaldehyde (trace, used in manufacturing)', 'Polysorbate 80'],
  brands: [
    { name: 'Daptacel', manufacturer: 'Sanofi Pasteur' },
    { name: 'Infanrix', manufacturer: 'GlaxoSmithKline' },
    { name: 'Pentacel', manufacturer: 'Sanofi Pasteur (combination with IPV and Hib)' },
    { name: 'Vaxelis', manufacturer: 'MCM Vaccine Company (hexavalent combination)' },
  ],
  commonSideEffects: [
    'Redness, swelling, or soreness at injection site (20-40%)',
    'Fever (up to 25% after dose 4 or 5)',
    'Fussiness or irritability (up to 50%)',
    'Drowsiness or decreased appetite',
    'Vomiting (less than 5%)',
    'Mild swelling of entire limb after 4th or 5th dose (up to 30%)',
  ],
  seriousReactions: [
    'High fever (over 105°F) — rare, about 1 in 16,000 doses',
    'Nonstop crying for 3+ hours — about 1 in 1,000 doses',
    'Seizure caused by fever — about 1 in 14,000 doses',
    'Hypotonic-hyporesponsive episode (temporary limpness/unresponsiveness) — rare, resolves without lasting effects',
    'Severe allergic reaction (anaphylaxis) — approximately 1 in 1 million doses',
  ],
  contraindications: [
    'Severe allergic reaction (anaphylaxis) to a previous dose or vaccine component',
    'Encephalopathy within 7 days of a prior dose not attributable to another cause',
    'Progressive neurological disorder (until stabilized) — pertussis component may be withheld',
    'History of Guillain-Barre syndrome within 6 weeks of a prior tetanus-containing vaccine (precaution)',
  ],
  effectivenessRate: 'The DTaP vaccine is approximately 80-90% effective against whooping cough in the first few years after vaccination, with immunity gradually declining over time. It is approximately 95% effective against diphtheria and nearly 100% effective against tetanus when the series is completed.',
  commonMyths: [
    { myth: 'Pertussis isn\'t dangerous for babies', fact: 'Whooping cough is most dangerous and most deadly in babies under 12 months. About 1 in 100 infants with pertussis dies, and about 1 in 4 is hospitalized. Babies can cough so forcefully they stop breathing.' },
    { myth: 'The vaccine has too many doses', fact: 'Five doses are needed because the acellular pertussis vaccine provides protection that wanes over time. Each dose boosts and extends immunity. The 5-dose schedule was designed to maintain protection through early childhood when the diseases are most dangerous.' },
    { myth: 'Formaldehyde in vaccines is dangerous', fact: 'Formaldehyde is used during manufacturing to inactivate the toxins and is present only in trace amounts in the final vaccine. The human body naturally produces formaldehyde — a baby\'s blood contains approximately 50-70 times more formaldehyde than is present in any vaccine.' },
  ],
  faqItems: [
    { question: 'Why does my baby need 5 doses?', answer: 'The acellular pertussis component requires multiple doses to build and maintain adequate immunity. The first three doses (at 2, 4, and 6 months) build the initial immune response, the 4th dose at 15-18 months provides a booster, and the 5th dose before kindergarten extends protection through early school years.' },
    { question: 'What is the difference between DTaP and Tdap?', answer: 'DTaP (capital D, T, lowercase a, P) is for children under 7 and contains full-strength diphtheria and pertussis components. Tdap (lowercase d, capital T, lowercase a, P) is for older children and adults and contains reduced amounts of diphtheria and pertussis antigens.' },
    { question: 'Should grandparents get a booster before meeting my baby?', answer: 'Yes. The CDC recommends that all adults who will be in close contact with a baby (especially those under 12 months) receive a Tdap booster if they haven\'t had one recently. This "cocooning" strategy helps protect babies who are too young to be fully vaccinated.' },
    { question: 'What if my baby has a high fever after the vaccine?', answer: 'Fever after DTaP is common and usually resolves within 24-48 hours. You can give acetaminophen (Tylenol) for comfort. Contact your pediatrician if fever exceeds 105°F, lasts more than 3 days, or is accompanied by other concerning symptoms.' },
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. DTaP Vaccine Information Statement.', url: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/dtap.html' },
    { org: 'AAP', citation: 'AAP. Pertussis (Whooping Cough). Red Book: Report of the Committee on Infectious Diseases.', url: 'https://publications.aap.org/redbook' },
    { org: 'WHO', citation: 'WHO. Pertussis vaccines: WHO position paper. 2015.', url: 'https://www.who.int/publications/i/item/WHO-WER9035' },
  ],
};
