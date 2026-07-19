import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'mmr',
  name: 'MMR Vaccine (Measles, Mumps, Rubella)',
  abbreviation: 'MMR',
  diseasePrevented: ['Measles', 'Mumps', 'Rubella (German measles)'],
  howItWorks: 'The MMR vaccine contains live but weakened (attenuated) versions of measles, mumps, and rubella viruses. These weakened viruses cannot cause the full disease but are strong enough to stimulate the immune system to produce antibodies. After vaccination, the immune system "remembers" these viruses and can fight them if exposed later.',
  schedule: [
    { dose: 1, age: '12-15 months' },
    { dose: 2, age: '4-6 years' },
  ],
  ingredients: ['Live attenuated measles virus (Enders\' Edmonston strain)', 'Live attenuated mumps virus (Jeryl Lynn strain)', 'Live attenuated rubella virus (Wistar RA 27/3 strain)', 'Gelatin (stabilizer)', 'Sorbitol', 'Sodium phosphate', 'Sucrose', 'Neomycin (trace amounts)', 'Recombinant human albumin', 'Fetal bovine serum'],
  brands: [
    { name: 'M-M-R II', manufacturer: 'Merck' },
    { name: 'Priorix', manufacturer: 'GlaxoSmithKline' },
  ],
  commonSideEffects: [
    'Sore arm or leg (injection site reaction)',
    'Fever (up to 1 in 6 children)',
    'Mild rash (about 5% of recipients, 7-12 days after vaccination)',
    'Swelling of glands in cheeks or neck',
    'Joint pain or stiffness (mainly in adolescent/adult females)',
    'Fussiness or mild irritability',
  ],
  seriousReactions: [
    'Febrile seizure (about 1 in 3,000 doses — caused by the fever, not the vaccine itself)',
    'Temporary low platelet count (ITP) — about 1 in 25,000 doses, usually resolves on its own',
    'Severe allergic reaction (anaphylaxis) — approximately 1 in 1 million doses',
    'Encephalitis — approximately 1 in 1 million doses (vs 1 in 1,000 with actual measles)',
  ],
  contraindications: [
    'Severe allergic reaction to a previous dose or vaccine component (gelatin, neomycin)',
    'Severe immunodeficiency (e.g., untreated HIV with severe immunosuppression, chemotherapy, high-dose steroids)',
    'Pregnancy (wait 4 weeks after vaccination before becoming pregnant)',
    'Recent blood product or immunoglobulin (may need to wait 3-11 months depending on product)',
  ],
  effectivenessRate: 'One dose is 93% effective against measles, 78% against mumps, and 97% against rubella. Two doses are 97% effective against measles and 88% against mumps.',
  commonMyths: [
    { myth: 'The MMR vaccine causes autism', fact: 'This claim originated from a fraudulent 1998 study by Andrew Wakefield, which was retracted and Wakefield lost his medical license. Over 20 large studies involving millions of children across multiple countries have found NO link between MMR and autism. The timing of MMR (12-15 months) coincides with when autism signs first become apparent, creating a coincidental association.' },
    { myth: 'It\'s safer to get measles naturally', fact: 'Measles kills 1-2 of every 1,000 infected children and causes brain damage in 1 of every 1,000. The vaccine carries a risk of serious reaction of about 1 in 1 million. Natural measles is approximately 1,000 times more dangerous than the vaccine.' },
    { myth: 'You can split the MMR into separate shots to reduce risk', fact: 'There is no scientific evidence that separating the vaccines is safer. Delaying vaccination leaves children unprotected longer. The UK experienced measles outbreaks when parents chose to separate vaccines and then didn\'t complete the series.' },
  ],
  faqItems: [
    { question: 'Can my child get measles from the MMR vaccine?', answer: 'No. While about 5% of children develop a mild rash 7-12 days after vaccination, this is not measles and is not contagious. The attenuated virus in the vaccine is too weak to cause actual measles disease.' },
    { question: 'Should I delay MMR until my child is older?', answer: 'No. The CDC recommends the first dose at 12-15 months because this is when maternal antibodies wane and the child becomes vulnerable. Delaying leaves your child unprotected during a period when measles can be very serious.' },
    { question: 'What about the egg allergy concern?', answer: 'The MMR vaccine is grown in chick embryo cell culture, but contains such negligible amounts of egg protein that it is safe for children with egg allergies. The AAP and ACAAI confirm that egg allergy is NOT a contraindication to MMR.' },
    { question: 'My child had a febrile seizure after the first dose — should they get the second?', answer: 'Usually yes. Febrile seizures are caused by fever, not the vaccine itself, and do not cause lasting harm. Discuss with your pediatrician, who may recommend acetaminophen before the second dose.' },
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. MMR Vaccine Information Statement.', url: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/mmr.html' },
    { org: 'AAP', citation: 'AAP. Measles Prevention: Recommendations of the Advisory Committee on Immunization Practices.', url: 'https://www.aap.org/en/pages/2019-novel-coronavirus-covid-19-infections/clinical-guidance/covid-19-vaccine-and-children/' },
    { org: 'WHO', citation: 'WHO. Measles vaccines: WHO position paper. 2017.', url: 'https://www.who.int/publications/i/item/WER9217' },
  ],
};
