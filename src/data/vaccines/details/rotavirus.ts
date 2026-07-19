import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'rotavirus',
  name: 'Rotavirus Vaccine',
  abbreviation: 'RV',
  diseasePrevented: ['Rotavirus gastroenteritis', 'Severe diarrhea and dehydration in infants', 'Rotavirus-related hospitalizations'],
  howItWorks: 'The rotavirus vaccine is a live, attenuated (weakened) oral vaccine. It contains weakened strains of rotavirus that replicate in the small intestine without causing significant disease. This stimulates the immune system to produce antibodies and immune memory, so when the child encounters wild-type rotavirus, the immune system can quickly mount a defense and prevent severe illness.',
  schedule: [
    { dose: 1, age: '2 months' },
    { dose: 2, age: '4 months' },
    { dose: 3, age: '6 months (RotaTeq only; Rotarix is 2-dose series)' },
  ],
  ingredients: ['Live attenuated human rotavirus strains', 'Sucrose', 'Sodium citrate', 'Sodium phosphate monobasic', 'Polysorbate 80', 'Cell culture media (Vero cells for RotaTeq)'],
  brands: [
    { name: 'RotaTeq', manufacturer: 'Merck (pentavalent, 3 doses)' },
    { name: 'Rotarix', manufacturer: 'GlaxoSmithKline (monovalent, 2 doses)' },
  ],
  commonSideEffects: [
    'Mild fussiness or irritability',
    'Mild, temporary diarrhea',
    'Vomiting (less than 7%)',
    'Decreased appetite for 1-2 days',
    'Mild fever',
  ],
  seriousReactions: [
    'Intussusception (bowel obstruction) — approximately 1 in 20,000 to 1 in 100,000 vaccinated infants, most within 7 days of first dose',
    'Severe allergic reaction — extremely rare',
  ],
  contraindications: [
    'History of intussusception',
    'Severe combined immunodeficiency (SCID)',
    'Severe allergic reaction to a previous dose of rotavirus vaccine',
    'Age older than 15 weeks 0 days for the first dose (to minimize intussusception risk)',
    'Uncorrected congenital malformation of the gastrointestinal tract',
  ],
  effectivenessRate: 'Both vaccines are 85-98% effective against severe rotavirus disease and 74-87% effective against any rotavirus disease. Since introduction, rotavirus hospitalizations in the US have declined by approximately 85-95%.',
  commonMyths: [
    { myth: 'My baby doesn\'t need this because rotavirus isn\'t that serious', fact: 'Before the vaccine, rotavirus caused approximately 55,000-70,000 hospitalizations, 200,000 ER visits, and 20-60 deaths annually in the US alone. Worldwide it killed over 500,000 children per year. It is the leading cause of severe diarrhea in young children.' },
    { myth: 'The oral vaccine is less effective than injected vaccines', fact: 'Oral administration is actually ideal for rotavirus because it mimics natural infection through the gut, creating strong intestinal immunity right where the virus attacks. Clinical trials show 85-98% effectiveness against severe disease.' },
    { myth: 'The vaccine causes intussusception', fact: 'While there is a very small increased risk (approximately 1-1.5 additional cases per 100,000 infants), the benefit far outweighs the risk. Without the vaccine, the risk of rotavirus hospitalization is about 1 in 67 — far higher than the intussusception risk.' },
  ],
  faqItems: [
    { question: 'Why is the rotavirus vaccine given by mouth instead of injection?', answer: 'Rotavirus infects through the gut, so oral delivery stimulates strong intestinal immunity directly where it is needed. This approach mimics natural infection and provides more effective protection against the virus.' },
    { question: 'What if my baby spits up the vaccine?', answer: 'If the baby spits up or vomits within minutes of receiving the dose, a replacement dose may be given during the same visit. Studies show the vaccine is still effective even if a small amount is spit up.' },
    { question: 'Can a vaccinated baby spread the virus to others?', answer: 'Vaccinated babies can shed weakened vaccine virus in their stool for about 1-2 weeks. This is generally not dangerous to healthy household contacts but immunocompromised individuals should practice good hand hygiene around recently vaccinated infants.' },
    { question: 'Why is there an age limit for starting the vaccine?', answer: 'The first dose must be given before 15 weeks of age because the small risk of intussusception appears to be higher in older infants. The series must be completed by 8 months of age.' },
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Rotavirus Vaccine Information Statement.', url: 'https://www.cdc.gov/vaccines/hcp/vis/vis-statements/rotavirus.html' },
    { org: 'AAP', citation: 'AAP. Prevention of Rotavirus Disease: Updated Guidelines for Use of Rotavirus Vaccine. Pediatrics. 2009.', url: 'https://publications.aap.org/pediatrics/article/123/5/1412/71939' },
    { org: 'WHO', citation: 'WHO. Rotavirus vaccines: WHO position paper. 2021.', url: 'https://www.who.int/publications/i/item/WHO-WER9628' },
  ],
};
