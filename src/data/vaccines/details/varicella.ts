import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'varicella',
  name: 'Varicella (Chickenpox) Vaccine',
  abbreviation: 'VAR',
  diseasePrevented: ['Varicella (chickenpox)', 'Complications of chickenpox (bacterial skin infections, pneumonia, encephalitis)', 'Shingles (herpes zoster) later in life'],
  howItWorks: 'The varicella vaccine contains a live, attenuated (weakened) strain of varicella-zoster virus (the Oka strain). This weakened virus replicates enough to stimulate a strong immune response — including both antibodies and cellular immunity — but is too weak to cause full-blown chickenpox. After vaccination, the immune system develops memory cells that can rapidly respond if exposed to wild varicella-zoster virus.',
  schedule: [
    { dose: 1, age: '12-15 months' },
    { dose: 2, age: '4-6 years' },
  ],
  ingredients: ['Live attenuated varicella-zoster virus (Oka/Merck strain)', 'Sucrose', 'Gelatin (stabilizer)', 'Sodium chloride', 'Monosodium L-glutamate', 'Sodium phosphate', 'Potassium phosphate', 'Potassium chloride', 'Neomycin (trace)', 'Bovine calf serum (trace from cell culture)', 'EDTA', 'Human diploid cell cultures (MRC-5)'],
  brands: [
    { name: 'Varivax', manufacturer: 'Merck' },
    { name: 'ProQuad', manufacturer: 'Merck (combination MMRV — MMR plus varicella)' },
  ],
  commonSideEffects: [
    'Soreness, redness, or swelling at injection site (20-30%)',
    'Mild fever (10-15%)',
    'Mild rash at injection site or generalized (3-5%, usually fewer than 10 spots)',
    'Fussiness or irritability',
    'Fatigue',
  ],
  seriousReactions: [
    'Febrile seizure — rare, slightly more common with MMRV (ProQuad) than separate MMR + varicella',
    'Pneumonia — extremely rare',
    'Severe allergic reaction (anaphylaxis) — approximately 1 in 1 million doses',
    'Disseminated vaccine-strain infection — extremely rare, almost exclusively in immunocompromised individuals',
  ],
  contraindications: [
    'Severe allergic reaction (anaphylaxis) to a previous dose or vaccine component (gelatin, neomycin)',
    'Severe immunodeficiency (HIV with severe immunosuppression, chemotherapy, high-dose immunosuppressive therapy)',
    'Pregnancy (wait 4 weeks after vaccination before becoming pregnant)',
    'Recent blood product or immunoglobulin (wait 3-11 months depending on product)',
    'Active untreated tuberculosis',
  ],
  effectivenessRate: 'One dose is 85% effective at preventing any chickenpox and 97-100% effective at preventing severe chickenpox. Two doses are 88-98% effective at preventing any chickenpox. Breakthrough cases after vaccination are typically very mild with fewer than 50 lesions and no fever.',
  commonMyths: [
    { myth: 'Chickenpox is a harmless childhood illness', fact: 'Before the vaccine, chickenpox caused approximately 10,600 hospitalizations, 100-150 deaths per year in the US, and serious complications including bacterial skin infections, pneumonia, encephalitis, and toxic shock syndrome. Even healthy children can develop severe complications.' },
    { myth: 'Natural chickenpox provides better immunity', fact: 'Natural chickenpox also establishes the virus permanently in nerve cells, creating a risk of shingles later in life. The vaccine provides strong immunity with a much lower risk of shingles. Children vaccinated against chickenpox are 78% less likely to develop shingles than those who had natural infection.' },
    { myth: 'It\'s better to have a chickenpox party', fact: 'Intentionally exposing children to chickenpox is dangerous. You cannot predict which children will develop serious complications. Before the vaccine, about 1 in 500 children required hospitalization, and some died. The vaccine provides safe, controlled immunity without these risks.' },
  ],
  faqItems: [
    { question: 'Can my child get chickenpox from the vaccine?', answer: 'About 3-5% of children develop a very mild rash with fewer than 10 spots after vaccination. This is much milder than natural chickenpox (which causes 250-500 spots) and is rarely contagious. True breakthrough chickenpox after exposure to wild virus is also typically very mild.' },
    { question: 'Should I choose MMRV or separate MMR + varicella?', answer: 'For the first dose at 12-15 months, the CDC notes a slightly higher risk of febrile seizures with MMRV (ProQuad) compared to separate injections (about 1 extra febrile seizure per 2,300 doses). Parents can discuss the preference with their pediatrician. For the second dose at 4-6 years, MMRV is preferred as the seizure risk difference disappears.' },
    { question: 'If my child was exposed to chickenpox, is it too late to vaccinate?', answer: 'No. Post-exposure vaccination within 3-5 days of exposure can prevent or significantly reduce the severity of chickenpox. If your unvaccinated child is exposed, contact your pediatrician immediately about emergency vaccination.' },
    { question: 'Will my child still get shingles later in life?', answer: 'The risk of shingles is significantly lower in vaccinated children compared to those who had natural chickenpox. Studies show a 78% lower risk. The weakened vaccine virus can establish latency in nerve cells but reactivates much less frequently than wild-type virus.' },
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Varicella Vaccine Information Statement.', url: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/varicella.html' },
    { org: 'AAP', citation: 'AAP. Varicella-Zoster Infections. Red Book: Report of the Committee on Infectious Diseases.', url: 'https://publications.aap.org/redbook' },
    { org: 'WHO', citation: 'WHO. Varicella and herpes zoster vaccines: WHO position paper. 2014.', url: 'https://www.who.int/publications/i/item/who-wer-8925' },
  ],
};
