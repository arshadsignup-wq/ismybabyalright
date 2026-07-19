import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'bad-breath',
  title: 'Bad Breath (Halitosis) in Babies & Toddlers',
  bodySystem: 'mouth-throat',
  description: 'Bad breath (halitosis) in babies and toddlers is usually caused by dry mouth (mouth breathing during sleep or illness), buildup of bacteria on the tongue, nasal congestion with post-nasal drip, or food debris. While concerning to parents, bad breath in young children is rarely a sign of serious illness. The most common causes are treatable with improved oral hygiene, addressing mouth breathing, or treating underlying nasal congestion.',
  possibleCauses: [
    { cause: 'Mouth breathing and dry mouth (during sleep or congestion)', likelihood: 'common' },
    { cause: 'Poor oral hygiene / bacteria on tongue', likelihood: 'common' },
    { cause: 'Post-nasal drip from allergies or chronic sinusitis', likelihood: 'common' },
    { cause: 'Foreign body in the nose (foul unilateral discharge)', likelihood: 'uncommon' },
    { cause: 'Enlarged adenoids causing chronic mouth breathing', likelihood: 'uncommon' },
    { cause: 'Tonsil stones (tonsillar crypts trapping debris)', likelihood: 'uncommon' },
    { cause: 'Gastroesophageal reflux', likelihood: 'uncommon' },
    { cause: 'Diabetic ketoacidosis (fruity breath) or metabolic disorder', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Mild sour-milk breath in breastfed or formula-fed babies is normal, especially after feeds. Morning breath from dry mouth during sleep is common.', whenToWorry: 'Persistently foul breath in a newborn not explained by feeding, sweet or fruity breath (possible metabolic issue), or bad breath with vomiting and poor feeding.' },
    { ageRange: '6-12 months', normalVariation: 'Introduction of solid foods may change breath odor. Morning breath is common. Mild odor during illness or congestion is expected.', whenToWorry: 'Persistent foul breath with unilateral nasal discharge (foreign body in nose). Bad breath with drooling and mouth sores suggesting infection.' },
    { ageRange: '1-3 years', normalVariation: 'Morning bad breath is very common in toddlers who mouth breathe during sleep. Odor after eating strong foods (garlic, onions) is temporary.', whenToWorry: 'Chronic bad breath despite good oral hygiene (may indicate enlarged adenoids or chronic sinusitis). Foul-smelling one-sided nasal discharge (foreign body). Sweet/fruity breath with excessive thirst and urination.' },
  ],
  urgencyLevels: {
    emergency: [
      'Fruity or acetone-like breath with lethargy, vomiting, and rapid breathing (possible diabetic ketoacidosis)',
      'Foul breath with severe difficulty breathing or drooling (possible abscess or airway issue)',
    ],
    urgent: [
      'Bad breath with unilateral foul nasal discharge and fever (nasal foreign body or sinusitis)',
      'Persistent bad breath with toxic appearance, high fever, and neck swelling',
    ],
    sameDay: [
      'Chronic bad breath not improving with oral hygiene measures',
      'Bad breath with chronic mouth breathing and snoring (possible adenoid hypertrophy)',
      'Foul breath with visible pus on tonsils or gums',
    ],
    monitor: [
      'Morning bad breath that resolves after drinking and oral care',
      'Temporary bad breath during a cold or congestion',
      'Mild odor from strong foods that resolves within hours',
    ],
  },
  homeRemedies: [
    'Brush teeth (or wipe gums in pre-teeth babies) twice daily including tongue surface',
    'Gently brush or scrape the tongue with a soft toothbrush to remove bacteria',
    'Ensure adequate fluid intake throughout the day to prevent dry mouth',
    'Use a cool-mist humidifier at night if child is a mouth breather',
    'Address nasal congestion with saline drops and gentle suction',
    'Offer water after milk feeds to rinse the mouth',
    'Schedule regular dental checkups starting at age 1',
    'For toddlers, encourage nose breathing and evaluate for enlarged adenoids if chronic mouth breather',
    'Avoid sugary drinks that feed oral bacteria',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['mouth-breathing', 'snoring', 'drooling', 'swollen-tonsils'],
  relatedIllnessSlugs: ['adenoid-hypertrophy', 'chronic-sinusitis', 'nasal-foreign-body'],
  relatedConcernSlugs: ['baby-bad-breath', 'toddler-breath-smells'],
  sources: [
    { org: 'AAPD', citation: 'American Academy of Pediatric Dentistry. Oral Health Policies and Recommendations.', url: 'https://www.aapd.org/research/oral-health-policies--recommendations/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bad Breath (Halitosis). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/default.aspx' },
    { org: 'NIH', citation: 'Tangerman A, Winkel EG. Intra- and extra-oral halitosis: finding of a new form of extra-oral blood-borne halitosis. Journal of Clinical Periodontology. 2007;34(9):748-755.', url: 'https://pubmed.ncbi.nlm.nih.gov/17716310/' },
  ],
};
