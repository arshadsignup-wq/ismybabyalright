import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'sore-throat',
  title: 'Sore Throat in Babies & Toddlers',
  bodySystem: 'mouth-throat',
  description: 'Sore throat (pharyngitis) in babies and toddlers is most commonly caused by viral infections such as the common cold. Babies cannot verbalize throat pain, so parents may notice feeding refusal, fussiness, drooling, or crying during swallowing. Strep throat (Group A Streptococcus) is rare in children under 3 years but becomes more common in preschool and school-age children. Most sore throats resolve within 5-7 days without specific treatment.',
  possibleCauses: [
    { cause: 'Viral upper respiratory infection (common cold)', likelihood: 'common' },
    { cause: 'Hand-foot-and-mouth disease or herpangina', likelihood: 'common' },
    { cause: 'Croup (laryngotracheitis)', likelihood: 'common' },
    { cause: 'Strep throat (Group A Streptococcus) — rare under age 3', likelihood: 'uncommon' },
    { cause: 'Mononucleosis (Epstein-Barr virus)', likelihood: 'uncommon' },
    { cause: 'Peritonsillar abscess', likelihood: 'rare' },
    { cause: 'Retropharyngeal abscess', likelihood: 'rare' },
    { cause: 'Epiglottitis', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'True sore throat is uncommon in this age group. Fussiness during feeding may be due to nasal congestion rather than throat pain.', whenToWorry: 'Complete feeding refusal with signs of dehydration. High fever (over 38°C/100.4°F) in baby under 3 months always requires evaluation regardless of cause.' },
    { ageRange: '6-12 months', normalVariation: 'Mild throat discomfort with viral colds is common. Baby may briefly fuss at start of feeds but continues eating.', whenToWorry: 'Drooling with inability to swallow, stridor or noisy breathing, neck swelling, or fever with complete feeding refusal lasting more than 12 hours.' },
    { ageRange: '1-3 years', normalVariation: 'Frequent sore throats with viral illnesses, especially in daycare settings (6-8 viral infections per year is normal). Toddlers may point to throat or refuse certain foods.', whenToWorry: 'Muffled "hot potato" voice, trismus (difficulty opening mouth), unilateral neck swelling, drooling with high fever, or sore throat with sandpaper-like rash (possible scarlet fever).' },
  ],
  urgencyLevels: {
    emergency: [
      'Drooling with inability to swallow and neck extended forward (possible epiglottitis)',
      'Severe difficulty breathing with sore throat',
      'Significant neck swelling with fever and toxic appearance (possible deep space infection)',
    ],
    urgent: [
      'Difficulty opening mouth (trismus) or muffled voice with fever',
      'Unilateral neck swelling with high fever (possible peritonsillar abscess)',
      'Complete inability to swallow liquids for more than 8 hours',
      'Sore throat with drooling and stridor',
    ],
    sameDay: [
      'Sore throat with fever lasting more than 3 days',
      'Sore throat with sandpaper rash (possible strep/scarlet fever)',
      'Throat pain with significant feeding reduction but still taking some fluids',
      'Sore throat in child with known strep exposure',
    ],
    monitor: [
      'Mild sore throat with cold symptoms (runny nose, cough) and adequate fluid intake',
      'Brief feeding fussiness during a viral illness that resolves in 2-3 days',
      'Sore throat improving day by day with symptomatic care',
    ],
  },
  homeRemedies: [
    'Offer cold or room temperature fluids frequently in small amounts',
    'Cold foods like yogurt, applesauce, or ice pops can soothe throat',
    'Use age-appropriate pain relief (acetaminophen; ibuprofen for babies over 6 months)',
    'Run a cool-mist humidifier in the bedroom',
    'For toddlers over 1 year, honey (half to one teaspoon) can soothe throat pain',
    'Avoid acidic or rough-textured foods that may irritate',
    'Offer soft, easy-to-swallow foods when baby is ready to eat',
    'Do NOT give cough drops or hard candy to children under 4 (choking risk)',
    'Warm (not hot) broth or soup for toddlers may provide comfort',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['swollen-tonsils', 'mouth-sores', 'refusing-to-eat', 'drooling'],
  relatedIllnessSlugs: ['strep-throat', 'hand-foot-mouth', 'croup', 'peritonsillar-abscess'],
  relatedConcernSlugs: ['baby-sore-throat', 'toddler-wont-eat-sore-throat'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sore Throat (Pharyngitis). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Sore-Throat-Pharyngitis.aspx' },
    { org: 'AAP', citation: 'Shulman ST, et al. Clinical practice guideline for the diagnosis and management of group A streptococcal pharyngitis. Clinical Infectious Diseases. 2012;55(10):e86-e102.', url: 'https://academic.oup.com/cid/article/55/10/e86/321183' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Pharyngitis (Strep Throat).', url: 'https://www.cdc.gov/group-a-strep/about/pharyngitis.html' },
  ],
};
