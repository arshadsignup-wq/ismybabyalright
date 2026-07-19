import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'nasal-flaring',
  title: 'Nasal Flaring in Babies',
  bodySystem: 'nose',
  description: 'Nasal flaring—the widening of the nostrils with each breath—is a sign of increased work of breathing (respiratory distress) in babies and young children. It occurs because the baby is trying to take in more air by opening the nasal passages wider. While momentary flaring during crying or heavy exertion is normal, persistent nasal flaring at rest is an important warning sign that should be evaluated promptly, as it indicates the baby is working harder than normal to breathe.',
  possibleCauses: [
    { cause: 'Bronchiolitis (RSV or other viral)', likelihood: 'common' },
    { cause: 'Pneumonia', likelihood: 'common' },
    { cause: 'Severe nasal congestion in young infants', likelihood: 'common' },
    { cause: 'Croup (laryngotracheobronchitis)', likelihood: 'uncommon' },
    { cause: 'Asthma or reactive airway disease exacerbation', likelihood: 'uncommon' },
    { cause: 'Transient tachypnea of the newborn', likelihood: 'uncommon' },
    { cause: 'Foreign body aspiration', likelihood: 'rare' },
    { cause: 'Congenital heart disease with pulmonary overcirculation', likelihood: 'rare' },
    { cause: 'Respiratory distress syndrome (premature infants)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Very brief nasal flaring during crying or straining is normal. Newborns may have mild flaring during the first few hours of life as they transition to breathing air.', whenToWorry: 'Any persistent nasal flaring at rest or during feeding. Combined with grunting, chest retractions, or fast breathing, it indicates significant respiratory distress. In newborns, flaring persisting beyond the first few hours of life is concerning.' },
    { ageRange: '3-12 months', normalVariation: 'Brief flaring during vigorous crying or physical activity can be normal. Should resolve immediately when baby calms down.', whenToWorry: 'Nasal flaring at rest or during quiet breathing, flaring during or after feeding, flaring with chest retractions (skin pulling in around ribs), fast breathing, or any blue/gray discoloration.' },
    { ageRange: '1-3 years', normalVariation: 'Brief flaring during intense activity or crying is normal and resolves at rest.', whenToWorry: 'Persistent flaring at rest, flaring with intercostal or subcostal retractions, unable to speak in full sentences (for verbal toddlers), refusal to eat or drink, or worsening over hours.' },
  ],
  urgencyLevels: {
    emergency: [
      'Persistent nasal flaring at rest with grunting or head bobbing',
      'Nasal flaring with blue or gray color around lips or face',
      'Nasal flaring with severe chest retractions (skin pulling deeply between ribs)',
      'Nasal flaring in a baby who is becoming limp or less responsive',
      'Nasal flaring with inability to feed or drink anything',
    ],
    urgent: [
      'Nasal flaring at rest without immediate emergency signs but persistent',
      'Nasal flaring with fast breathing and mild retractions',
      'Nasal flaring that is new and worsening over hours',
      'Nasal flaring with high fever in a young infant',
    ],
    sameDay: [
      'Mild intermittent flaring during feeds only with congestion',
      'Flaring that resolves with nasal suctioning but recurs',
    ],
    monitor: [
      'Brief flaring only during crying that resolves completely at rest',
      'Very mild flaring in a congested baby who is feeding and breathing normally otherwise',
    ],
  },
  homeRemedies: [
    'Nasal flaring at rest is a sign of respiratory distress—seek medical evaluation, do not rely on home remedies alone',
    'While awaiting care: keep baby upright or at a 30-45 degree angle',
    'Use saline drops and gentle suction if nasal congestion is contributing',
    'Remove any tight clothing around baby\'s chest and neck',
    'Keep the environment cool and well-ventilated',
    'Offer small frequent feeds to maintain hydration without tiring baby',
    'Monitor and count the respiratory rate for 60 seconds to report to the doctor',
    'Do NOT give any cough or cold medications to babies under 2',
    'Record a video of the breathing pattern to show the healthcare provider',
  ],
  triageSlug: 'fast-breathing',
  relatedSymptomSlugs: ['fast-breathing', 'congestion', 'wheezing', 'chest-retractions'],
  relatedIllnessSlugs: ['bronchiolitis', 'rsv', 'pneumonia', 'croup'],
  relatedConcernSlugs: ['baby-breathing-hard', 'baby-nostrils-flaring', 'baby-respiratory-distress'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Signs of Respiratory Distress. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Signs-of-Respiratory-Distress.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Pocket Book of Hospital Care for Children: Guidelines for the Management of Common Childhood Illnesses. 2013.', url: 'https://www.who.int/publications/i/item/978-92-4-154837-3' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. RSV (Respiratory Syncytial Virus): Symptoms and Care.', url: 'https://www.cdc.gov/rsv/about/symptoms.html' },
  ],
};
