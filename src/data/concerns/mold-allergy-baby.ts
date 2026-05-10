import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'mold-allergy-baby',
  title: 'Mold Allergy in Babies',
  category: 'medical',
  searchTerms: [
    'mold allergy baby',
    'baby allergic to mold',
    'mold allergy symptoms infant',
    'baby congestion mold exposure',
    'mold in house baby health',
    'mold spores baby allergy',
    'baby wheezing mold',
    'black mold baby symptoms',
  ],
  quickAnswer:
    'Mold allergy occurs when a baby\'s immune system overreacts to inhaled mold spores. Symptoms include nasal congestion, sneezing, runny nose, coughing, and wheezing. Mold grows in damp environments like bathrooms, basements, and areas with water damage. While mold allergy itself is manageable, exposure to high levels of mold can worsen asthma and eczema. Reducing indoor moisture and removing visible mold are the most effective prevention strategies.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'True mold allergy is very uncommon in newborns because allergic sensitization takes time. However, exposure to high levels of indoor mold may irritate a baby\'s airways and contribute to respiratory symptoms. If your home has visible mold or a musty smell, address the moisture problem promptly. Newborn congestion is usually caused by small nasal passages or viral infections rather than mold allergy.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Mold sensitization can begin in infancy, especially in homes with significant mold exposure. Babies with a family history of allergies or those with eczema are at higher risk. If your baby has persistent respiratory symptoms that do not seem related to viral infections, consider whether there is a mold source in your home. Good ventilation and controlling humidity below 50% can help.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Crawling babies may have increased mold exposure at floor level, particularly on carpeting in damp areas. Symptoms of mold allergy include chronic congestion, coughing, sneezing, and watery eyes that worsen in damp conditions or certain rooms. If your baby\'s symptoms improve when away from home for extended periods, environmental allergens like mold may be a factor.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with mold allergy may have chronic nasal congestion, frequent sinus symptoms, worsening asthma, or persistent cough. An allergist can confirm mold allergy through skin prick testing or blood tests. Treatment includes environmental control (fixing leaks, using dehumidifiers, cleaning mold with proper solutions), antihistamines for symptom management, and possibly allergy immunotherapy for older children.',
    },
  ],
  whenNormal: [
    'Baby has occasional sneezing or mild congestion that resolves quickly',
    'Baby has congestion only during obvious viral colds that follow a typical course',
    'Baby is exposed to normal outdoor mold levels without persistent symptoms',
    'Baby has seasonal congestion that improves indoors',
  ],
  whenToMention: [
    'Baby has chronic congestion or cough that seems worse in damp environments or certain rooms',
    'Baby has respiratory symptoms that improve significantly when away from home',
    'Your home has visible mold or water damage and your baby has persistent respiratory symptoms',
  ],
  whenToActNow: [
    'Baby develops significant wheezing or difficulty breathing',
    'Baby has severe respiratory distress with chest retractions, rapid breathing, or blue lips -- call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Mold: Basic Facts. CDC.',
      url: 'https://www.cdc.gov/mold/basics.htm',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma & Immunology. Mold Allergy. ACAAI.',
      url: 'https://acaai.org/allergies/allergic-conditions/mold-allergy/',
    },
  ],
};
