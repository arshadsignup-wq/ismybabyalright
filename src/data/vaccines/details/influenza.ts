import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'influenza',
  name: 'Influenza (Flu) Vaccine',
  abbreviation: 'IIV/LAIV',
  diseasePrevented: ['Seasonal influenza (flu)', 'Influenza-related pneumonia', 'Influenza-related hospitalizations and complications'],
  howItWorks: 'The inactivated influenza vaccine (IIV) contains killed influenza viruses or pieces of the virus (surface proteins hemagglutinin and neuraminidase). These cannot cause flu but stimulate the immune system to produce antibodies. The vaccine is reformulated each year to match the circulating strains predicted by global surveillance. For children 2 and older, a live attenuated intranasal spray (LAIV) may also be used, which contains weakened cold-adapted viruses that replicate only in the cooler temperatures of the nasal passages.',
  schedule: [
    { dose: 1, age: '6 months (annually, every flu season)' },
    { dose: 2, age: '4 weeks after first dose (first year only, if under 9 years and receiving flu vaccine for the first time)' },
  ],
  ingredients: ['Inactivated influenza virus antigens (varies by strain each year)', 'Egg protein (most formulations; cell-based and recombinant options available)', 'Formaldehyde (trace, used for inactivation)', 'Thimerosal (multi-dose vials only; single-dose vials and prefilled syringes are thimerosal-free)', 'Gelatin (some formulations)', 'Antibiotics (trace amounts, varies by manufacturer)'],
  brands: [
    { name: 'Fluzone Quadrivalent', manufacturer: 'Sanofi Pasteur' },
    { name: 'Fluarix Quadrivalent', manufacturer: 'GlaxoSmithKline' },
    { name: 'FluLaval Quadrivalent', manufacturer: 'GlaxoSmithKline' },
    { name: 'Flucelvax Quadrivalent', manufacturer: 'CSL Seqirus (cell-based, egg-free)' },
  ],
  commonSideEffects: [
    'Soreness, redness, or swelling at injection site (most common)',
    'Low-grade fever (10-35% of young children)',
    'Fussiness or irritability in infants',
    'Muscle aches',
    'Fatigue or malaise',
    'Runny nose or nasal congestion (LAIV nasal spray)',
  ],
  seriousReactions: [
    'Severe allergic reaction (anaphylaxis) — approximately 1.3 per million doses',
    'Guillain-Barre syndrome (GBS) — if there is an increased risk, it is very small, estimated at 1-2 additional cases per million doses',
    'Febrile seizure — rare, slightly increased when given simultaneously with PCV13 and DTaP',
  ],
  contraindications: [
    'Severe allergic reaction (anaphylaxis) to a previous dose of influenza vaccine',
    'Severe egg allergy with anaphylaxis (precaution; can still receive vaccine under medical supervision or use egg-free formulation)',
    'Children under 6 months of age (too young)',
    'LAIV (nasal spray) contraindications: children under 2, immunocompromised, aspirin/salicylate therapy, pregnancy',
  ],
  effectivenessRate: 'Flu vaccine effectiveness varies by season depending on how well the vaccine matches circulating strains. In seasons with good match, the vaccine reduces the risk of flu illness by 40-60% overall. In children, it is approximately 50-80% effective at preventing confirmed influenza and significantly reduces the risk of severe outcomes including hospitalization and death.',
  commonMyths: [
    { myth: 'The flu shot can give you the flu', fact: 'The injectable flu vaccine contains only killed virus or virus fragments — it is physically impossible for it to cause influenza infection. Some people experience mild immune response symptoms (low fever, fatigue) for 1-2 days, which is the immune system responding to the vaccine, not the flu.' },
    { myth: 'Healthy children don\'t need the flu vaccine', fact: 'Healthy children are frequently hospitalized with flu complications. Children under 5 (especially under 2) are at high risk for serious complications. During typical flu seasons, approximately 20,000 children under 5 are hospitalized and 100-200 children die from flu-related causes in the US.' },
    { myth: 'The flu vaccine isn\'t effective so why bother', fact: 'Even in seasons with lower effectiveness, the vaccine significantly reduces severe outcomes. A CDC study found that flu vaccination reduced children\'s risk of flu-related ICU admission by 74%. Partial protection is far better than no protection.' },
  ],
  faqItems: [
    { question: 'Why does my baby need the flu shot every year?', answer: 'Influenza viruses mutate rapidly, so the vaccine must be updated each year to match circulating strains. Additionally, immunity from the flu vaccine wanes over several months, so annual vaccination ensures your child maintains protection throughout each flu season.' },
    { question: 'When should my baby get the flu shot?', answer: 'The CDC recommends flu vaccination starting in September or October, before flu begins circulating. It takes about 2 weeks for full protection to develop. Vaccination can continue through January or later since flu season often peaks in February.' },
    { question: 'Can my 6-month-old get the nasal spray instead?', answer: 'No. The nasal spray (LAIV) is only approved for children 2 years and older. Babies 6 months through 23 months must receive the injectable (shot) form of the vaccine.' },
    { question: 'What if my child has an egg allergy?', answer: 'Children with egg allergy can still receive the flu vaccine. For mild egg allergy (only hives), any age-appropriate flu vaccine can be given. For severe egg allergy, egg-free vaccines (Flucelvax) are available, or the vaccine can be administered under medical observation.' },
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Influenza Vaccine Information Statement.', url: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/flu.html' },
    { org: 'AAP', citation: 'AAP. Recommendations for Prevention and Control of Influenza in Children. Pediatrics. 2023.', url: 'https://publications.aap.org/pediatrics/article/152/4/e2023063773/194082' },
    { org: 'WHO', citation: 'WHO. Influenza vaccines: WHO position paper. 2022.', url: 'https://www.who.int/publications/i/item/who-wer-9719-185-208' },
  ],
};
