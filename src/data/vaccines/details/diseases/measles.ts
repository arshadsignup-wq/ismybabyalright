import type { VaccineDisease } from '../../detail-types';

export const disease: VaccineDisease = {
  slug: 'measles',
  name: 'Measles',
  description: 'Measles is a highly contagious viral disease caused by the measles virus (a paramyxovirus). It is one of the most contagious infectious diseases known — an infected person can spread it to 9 out of 10 unvaccinated people nearby. Measles causes a characteristic high fever, cough, runny nose, red eyes, and a distinctive red blotchy rash that spreads from head to toe. While often dismissed as a routine childhood illness, measles can cause serious and even fatal complications, particularly in young children and immunocompromised individuals.',
  symptoms: [
    'High fever (often 104°F/40°C or higher)',
    'Cough',
    'Runny nose (coryza)',
    'Red, watery eyes (conjunctivitis)',
    'Koplik spots (tiny white spots inside the mouth, appearing 2-3 days before rash)',
    'Red, blotchy rash starting on the face and spreading downward (appears 3-5 days after symptom onset)',
    'Malaise and loss of appetite',
    'The rash lasts 5-6 days and fades in the order it appeared',
  ],
  complications: [
    'Ear infections (occurs in about 1 in 10 children with measles)',
    'Pneumonia (occurs in about 1 in 20 children — leading cause of measles death)',
    'Encephalitis/brain swelling (about 1 in 1,000 children — can cause permanent brain damage)',
    'Death (1-2 per 1,000 children in developed countries; higher in developing nations)',
    'Subacute sclerosing panencephalitis (SSPE) — always fatal degenerative brain disease that appears 7-10 years after measles infection',
    'Pregnancy complications including miscarriage, premature birth, and low birth weight',
    'Immune amnesia — measles destroys 20-70% of existing immune memory, leaving the child vulnerable to other infections for months or years',
  ],
  howItSpreads: 'Measles spreads through airborne respiratory droplets and aerosols when an infected person coughs, sneezes, or even breathes. The virus can remain suspended in the air and on surfaces for up to 2 hours after an infected person leaves an area. It is so contagious that 90% of non-immune people who are exposed will become infected. A person is contagious from 4 days before the rash appears until 4 days after.',
  whoIsAtRisk: [
    'Unvaccinated infants under 12 months (too young for the vaccine)',
    'Unvaccinated or under-vaccinated children and adults',
    'Immunocompromised individuals (cancer patients, organ transplant recipients, HIV/AIDS)',
    'Pregnant women',
    'Malnourished children (especially those with vitamin A deficiency)',
    'People traveling to or from countries where measles is endemic',
  ],
  vaccineSlug: 'mmr',
  historicalContext: 'Before the measles vaccine was introduced in 1963, approximately 3-4 million people in the US were infected annually, resulting in 48,000 hospitalizations, 1,000 cases of encephalitis, and 400-500 deaths each year. After widespread vaccination, measles was declared eliminated from the US in 2000. However, outbreaks still occur when unvaccinated communities are exposed to imported cases. Globally, measles still kills over 100,000 people annually, mostly children under 5 in developing countries.',
  sources: [
    { org: 'CDC', citation: 'CDC. Measles (Rubeola): For Healthcare Providers.', url: 'https://www.cdc.gov/measles/hcp/index.html' },
    { org: 'WHO', citation: 'WHO. Measles Fact Sheet.', url: 'https://www.who.int/news-room/fact-sheets/detail/measles' },
    { org: 'AAP', citation: 'AAP. Measles. Red Book: Report of the Committee on Infectious Diseases.', url: 'https://publications.aap.org/redbook' },
  ],
};
