import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'swollen-tonsils',
  title: 'Swollen Tonsils in Babies & Toddlers',
  bodySystem: 'mouth-throat',
  description: 'Swollen tonsils (tonsillar hypertrophy) in babies and toddlers are most often caused by viral infections. Tonsils are part of the immune system and naturally grow larger between ages 2-6 as they are exposed to more infections. Some degree of tonsillar enlargement is normal in young children. However, significantly swollen tonsils can cause difficulty swallowing, snoring, sleep-disordered breathing, or obstructive sleep apnea, which may require medical intervention.',
  possibleCauses: [
    { cause: 'Viral upper respiratory infection', likelihood: 'common' },
    { cause: 'Normal physiological growth (ages 2-6)', likelihood: 'common' },
    { cause: 'Recurrent viral or bacterial tonsillitis', likelihood: 'common' },
    { cause: 'Mononucleosis (Epstein-Barr virus)', likelihood: 'uncommon' },
    { cause: 'Group A Streptococcus (strep throat)', likelihood: 'uncommon' },
    { cause: 'Peritonsillar abscess', likelihood: 'rare' },
    { cause: 'Lymphoma or other malignancy (asymmetric rapid enlargement)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-12 months', normalVariation: 'Tonsils are small in infancy and rarely cause problems. They may swell slightly during viral infections.', whenToWorry: 'Significantly enlarged tonsils in an infant causing noisy breathing or feeding difficulty. Any tonsil enlargement with stridor or respiratory distress.' },
    { ageRange: '1-3 years', normalVariation: 'Tonsils naturally enlarge as children encounter more infections. Mild snoring during colds or upper respiratory infections is common and temporary.', whenToWorry: 'Persistent loud snoring every night, observed pauses in breathing during sleep, mouth breathing at rest, difficulty swallowing solids, or failure to thrive. Asymmetric (one side much larger) rapid enlargement.' },
  ],
  urgencyLevels: {
    emergency: [
      'Severe difficulty breathing with swollen tonsils (stridor, retractions, cyanosis)',
      'Drooling with inability to swallow and neck extended (possible abscess or epiglottitis)',
      'Obstructive apnea episodes with color change in a young infant',
    ],
    urgent: [
      'Difficulty opening mouth (trismus) with high fever and muffled voice',
      'Unilateral tonsillar swelling with drooling and deviation of uvula',
      'Significant swallowing difficulty with dehydration',
      'Rapidly enlarging asymmetric tonsil over days to weeks',
    ],
    sameDay: [
      'Swollen tonsils with fever and possible strep exposure',
      'Persistent nightly snoring with observed apneic pauses',
      'Tonsil swelling with white exudate and neck lymph node enlargement',
    ],
    monitor: [
      'Mild tonsil enlargement during viral illness with normal breathing and eating',
      'Temporary snoring during a cold that resolves as illness clears',
      'Mild chronic tonsillar enlargement with no sleep or feeding impact',
    ],
  },
  homeRemedies: [
    'Offer cold fluids and soft foods to ease swallowing discomfort',
    'Use a cool-mist humidifier in the bedroom to reduce throat dryness',
    'Elevate the head of the bed slightly if child has sleep-related symptoms',
    'Use age-appropriate pain relief for sore throat (acetaminophen or ibuprofen)',
    'Honey (for children over 1 year) in warm water can soothe throat irritation',
    'Encourage adequate fluid intake to stay hydrated',
    'If snoring is chronic, record videos of sleep breathing to show the doctor',
    'Avoid irritants like smoke exposure which can worsen throat inflammation',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['sore-throat', 'snoring', 'mouth-breathing', 'refusing-to-eat'],
  relatedIllnessSlugs: ['tonsillitis', 'strep-throat', 'mononucleosis', 'peritonsillar-abscess'],
  relatedConcernSlugs: ['toddler-snoring', 'baby-swollen-tonsils'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Tonsillitis. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Tonsillitis.aspx' },
    { org: 'AAP', citation: 'Mitchell RB, et al. Clinical Practice Guideline: Tonsillectomy in Children (Update). Otolaryngology-Head and Neck Surgery. 2019;160(1_suppl):S1-S42.', url: 'https://journals.sagepub.com/doi/10.1177/0194599818801757' },
    { org: 'NIH', citation: 'National Institute on Deafness and Other Communication Disorders. Tonsils and Adenoids.', url: 'https://www.nidcd.nih.gov/' },
  ],
};
