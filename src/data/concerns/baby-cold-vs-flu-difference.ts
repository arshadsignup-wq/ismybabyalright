import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cold-vs-flu-difference',
  title: 'Cold vs. Flu in Baby - How to Tell the Difference',
  category: 'medical',
  searchTerms: ['baby cold or flu', 'baby flu symptoms', 'toddler flu vs cold', 'baby influenza', 'toddler flu', 'baby cold vs flu difference', 'baby flu treatment', 'toddler flu symptoms', 'baby flu when to worry', 'baby influenza symptoms'],
  quickAnswer: 'Colds and flu are both respiratory illnesses but are caused by different viruses and differ in severity. A cold comes on gradually with runny nose, sneezing, and mild cough. The flu hits suddenly with high fever, body aches, extreme fatigue, and a dry cough. Babies and children under 5 are at higher risk for flu complications. The flu can be treated with antiviral medication (like oseltamivir/Tamiflu) if started within 48 hours of symptom onset, which is why early evaluation is important. The best prevention is the annual flu vaccine, recommended for all children 6 months and older.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies under 6 months cannot receive the flu vaccine, making them especially vulnerable. Their protection comes from vaccinating all household members and caregivers. Flu in babies presents with: sudden high fever, extreme fussiness, poor feeding, lethargy, and respiratory symptoms. Babies under 6 months with suspected flu should be evaluated promptly, as they are at the highest risk for complications (pneumonia, dehydration). Antiviral treatment (Tamiflu) is recommended for babies with confirmed or suspected flu, especially those under 6 months.' },
    { ageRange: '1-3 years', context: 'Cold vs. flu comparison: Colds cause gradual onset, low/no fever, runny nose, sneezing, mild cough, and your child may still play. Flu causes sudden onset, high fever (102-104 degrees F), chills, body aches, extreme fatigue, dry cough, headache, and your child will look and act sick. If you suspect flu (especially during flu season, October-March), call your pediatrician early - antivirals work best within 48 hours. Keep your child home, push fluids, and use acetaminophen or ibuprofen for fever and comfort. The flu typically lasts 5-7 days, with fatigue lingering up to 2 weeks.' },
  ],
  whenNormal: ['A cold with runny nose, sneezing, and low-grade fever that resolves within 7-10 days', 'Mild cough with a cold that may linger for 2-3 weeks', 'Your child has reduced appetite during a cold but is still drinking fluids'],
  whenToMention: ['Sudden high fever with your child appearing very sick (possible flu - call early for antivirals)', 'Cold symptoms lasting more than 10 days without improvement (possible secondary infection)', 'Your child is at high risk for flu complications (asthma, chronic conditions)'],
  whenToActNow: ['Difficulty breathing, rapid breathing, or chest retractions', 'Refusal to drink fluids with signs of dehydration', 'High fever in a baby under 3 months (any fever 100.4+ is an emergency in this age group)', 'Fever that returns after improving for a day or two (possible secondary infection)', 'Bluish lips or face', 'Your child is limp, unresponsive, or extremely lethargic', 'Flu symptoms in a baby under 6 months - seek medical evaluation'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-first-cold', 'baby-high-fever-over-104', 'baby-cough-types', 'baby-covid-symptoms'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. The Flu. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/The-Flu.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Flu and Young Children.', url: 'https://www.cdc.gov/flu/highrisk/children.htm' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cold vs Flu. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Flu-vs-Cold.aspx' },
  ],
};
