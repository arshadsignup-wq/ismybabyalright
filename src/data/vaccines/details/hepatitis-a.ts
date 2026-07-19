import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'hepatitis-a',
  name: 'Hepatitis A Vaccine',
  abbreviation: 'HepA',
  diseasePrevented: ['Hepatitis A virus infection', 'Acute liver inflammation', 'Liver failure (rare but possible in adults)'],
  howItWorks: 'The hepatitis A vaccine contains inactivated (killed) hepatitis A virus. The virus is grown in human cell cultures, purified, and then inactivated with formalin so it cannot cause disease. When injected, the immune system recognizes the viral proteins and produces antibodies that provide long-lasting protection against future hepatitis A infection.',
  schedule: [
    { dose: 1, age: '12 months' },
    { dose: 2, age: '18 months (at least 6 months after dose 1)' },
  ],
  ingredients: ['Inactivated hepatitis A virus', 'Aluminum hydroxide (adjuvant)', 'Amino acid supplement', 'Phosphate-buffered saline', 'Neomycin sulfate (trace)', 'Formalin (trace from inactivation process)'],
  brands: [
    { name: 'Havrix', manufacturer: 'GlaxoSmithKline' },
    { name: 'Vaqta', manufacturer: 'Merck' },
  ],
  commonSideEffects: [
    'Soreness, redness, or swelling at injection site (20-50%)',
    'Loss of appetite',
    'Fussiness or irritability',
    'Mild headache',
    'Low-grade fever',
    'Fatigue or drowsiness',
  ],
  seriousReactions: [
    'Severe allergic reaction (anaphylaxis) — extremely rare, fewer than 1 per million doses',
    'No confirmed serious adverse events causally linked to the hepatitis A vaccine in large post-marketing surveillance studies',
  ],
  contraindications: [
    'Severe allergic reaction (anaphylaxis) to a previous dose of hepatitis A vaccine',
    'Known severe allergy to any vaccine component (including neomycin or alum)',
    'Children younger than 12 months of age (not approved for this age group in routine use)',
    'Moderate or severe acute illness (defer vaccination until recovery)',
  ],
  effectivenessRate: 'The hepatitis A vaccine is 94-100% effective after the full 2-dose series. Even a single dose provides 95% protection within 2-4 weeks. The 2-dose series provides protection lasting at least 25 years and likely lifelong.',
  commonMyths: [
    { myth: 'Hepatitis A only affects people in developing countries', fact: 'Hepatitis A outbreaks regularly occur in the United States. Between 2016-2022, the US experienced widespread outbreaks with over 44,000 cases, 27,000 hospitalizations, and more than 400 deaths. Children can be exposed through contaminated food, travel, or community spread.' },
    { myth: 'My child doesn\'t need this vaccine because hepatitis A isn\'t serious in children', fact: 'While hepatitis A is often milder in young children (many are asymptomatic), infected children can spread the virus to adults and older family members who may become seriously ill. Vaccination protects the child and the community.' },
    { myth: 'Good hygiene alone is enough to prevent hepatitis A', fact: 'While handwashing helps, hepatitis A is highly contagious and can spread before symptoms appear. The virus can survive on surfaces for months and is resistant to many common disinfectants. Vaccination is the most reliable protection.' },
  ],
  faqItems: [
    { question: 'Why isn\'t hepatitis A vaccine given before 12 months?', answer: 'Maternal antibodies passed during pregnancy can interfere with the vaccine response in infants under 12 months. By age 12 months, these antibodies have waned enough for the vaccine to work effectively. However, infants 6-11 months traveling to high-risk areas can receive an early dose (which does not count toward the routine series).' },
    { question: 'What if my child misses the second dose?', answer: 'The second dose can be given at any time after the minimum 6-month interval — there is no need to restart the series. Even a delayed second dose will provide excellent long-term protection.' },
    { question: 'Can hepatitis A vaccine be given with other vaccines?', answer: 'Yes. Hepatitis A vaccine can be safely given at the same visit as other childhood vaccines. Studies show no reduction in effectiveness or increase in side effects when co-administered with other vaccines.' },
    { question: 'Is my child protected after just one dose?', answer: 'A single dose provides approximately 95% protection within 2-4 weeks. The second dose is important for long-term protection lasting decades. Both doses are recommended to ensure lifelong immunity.' },
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Hepatitis A Vaccine Information Statement.', url: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/hep-a.html' },
    { org: 'AAP', citation: 'AAP. Hepatitis A. Red Book: Report of the Committee on Infectious Diseases.', url: 'https://publications.aap.org/redbook' },
    { org: 'WHO', citation: 'WHO. Hepatitis A vaccines: WHO position paper. 2022.', url: 'https://www.who.int/publications/i/item/who-wer9740-493-512' },
  ],
};
