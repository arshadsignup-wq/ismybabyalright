import type { VaccineDisease } from '../../detail-types';

export const disease: VaccineDisease = {
  slug: 'rotavirus-disease',
  name: 'Rotavirus Disease',
  description: 'Rotavirus is the leading cause of severe gastroenteritis (diarrhea and vomiting) in infants and young children worldwide. The virus infects the cells lining the small intestine, causing inflammation and disrupting the absorption of water and nutrients. This leads to watery diarrhea, vomiting, and dehydration that can become life-threatening in young children within hours. Almost every child will be infected with rotavirus at least once by age 5, with the most severe disease occurring between 3 months and 2 years of age.',
  symptoms: [
    'Severe watery diarrhea (often profuse, lasting 3-8 days)',
    'Vomiting (frequently precedes diarrhea by 1-2 days)',
    'Fever (often 101-104°F/38.3-40°C)',
    'Abdominal pain and cramping',
    'Loss of appetite',
    'Signs of dehydration: decreased urination, dry mouth, crying without tears, sunken eyes, lethargy',
    'Irritability and fussiness',
    'In severe cases: rapid heart rate, sunken fontanelle, skin tenting, extreme lethargy',
  ],
  complications: [
    'Severe dehydration (the primary danger — can be fatal without treatment)',
    'Electrolyte imbalances (can cause seizures or cardiac arrhythmias)',
    'Intussusception (bowel obstruction — rare but serious)',
    'Seizures (from dehydration, fever, or electrolyte disturbance)',
    'Necrotizing enterocolitis in premature infants',
    'Death (primarily from dehydration in settings without access to rehydration therapy)',
    'Prolonged illness in immunocompromised children',
    'Secondary lactose intolerance (temporary, lasting days to weeks after infection)',
  ],
  howItSpreads: 'Rotavirus is transmitted primarily through the fecal-oral route. The virus is shed in enormous quantities in the stool of infected individuals (up to 10 trillion viral particles per gram of feces, while only 10-100 particles are needed to cause infection). It spreads through contaminated hands, surfaces, objects (toys, diaper-changing areas), and occasionally through contaminated water or food. The virus is extremely hardy and can survive on surfaces for days to weeks. It is most common during winter and spring months in temperate climates.',
  whoIsAtRisk: [
    'Infants and toddlers between 3 months and 2 years of age (peak severity)',
    'Unvaccinated children under 5',
    'Children in daycare or group care settings',
    'Premature infants',
    'Immunocompromised children',
    'Children in developing countries without access to clean water and oral rehydration therapy',
    'Children with malnutrition',
  ],
  vaccineSlug: 'rotavirus',
  historicalContext: 'Before the rotavirus vaccine was introduced in 2006 in the US, rotavirus was responsible for approximately 55,000-70,000 hospitalizations, 200,000 emergency department visits, 400,000 doctor visits, and 20-60 deaths among children under 5 each year in the US alone. Globally, rotavirus killed an estimated 528,000 children per year (mostly in developing countries). Since the vaccine\'s introduction, rotavirus hospitalizations in the US have declined by 85-95%, and the disease now shows a dramatically different seasonal pattern. Worldwide, the WHO estimates that rotavirus vaccines have prevented over 100,000 deaths annually in countries that have introduced the vaccine into their national programs.',
  sources: [
    { org: 'CDC', citation: 'CDC. Rotavirus: Clinical Information.', url: 'https://www.cdc.gov/rotavirus/clinical.html' },
    { org: 'WHO', citation: 'WHO. Rotavirus Fact Sheet.', url: 'https://www.who.int/health-topics/rotavirus-infections' },
    { org: 'AAP', citation: 'AAP. Rotavirus Infections. Red Book: Report of the Committee on Infectious Diseases.', url: 'https://publications.aap.org/redbook' },
  ],
};
