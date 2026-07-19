import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'grunting',
  title: 'Grunting in Babies',
  bodySystem: 'chest-breathing',
  description: 'Grunting in babies can mean two very different things depending on context. Respiratory grunting is a concerning sign where a baby makes a short "uh" or "eh" sound with each exhale — it indicates the baby is trying to keep collapsing air sacs (alveoli) open by breathing against a partially closed glottis. This is a sign of respiratory distress. In contrast, "grunting baby syndrome" refers to normal straining sounds healthy babies make while learning to coordinate their abdominal muscles for bowel movements. The key distinction is whether grunting occurs with every breath (concerning) or only during straining efforts (usually normal).',
  possibleCauses: [
    { cause: 'Normal straining during bowel movements (grunting baby syndrome)', likelihood: 'common' },
    { cause: 'Normal newborn grunting during sleep (brief, intermittent)', likelihood: 'common' },
    { cause: 'Respiratory distress — pneumonia, bronchiolitis', likelihood: 'uncommon' },
    { cause: 'Respiratory distress syndrome (premature infants)', likelihood: 'uncommon' },
    { cause: 'Transient tachypnea of the newborn', likelihood: 'uncommon' },
    { cause: 'Sepsis or meningitis in newborns', likelihood: 'rare' },
    { cause: 'Congenital heart disease', likelihood: 'rare' },
    { cause: 'Pneumothorax (collapsed lung)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Newborns commonly grunt during sleep and while straining to pass stool. Brief grunts not associated with every breath, and baby is otherwise pink and feeding well.', whenToWorry: 'Grunting with EVERY breath is always concerning in a newborn. Associated nasal flaring, retractions, fast breathing (more than 60/minute), or poor feeding. Grunting that persists for more than a few minutes continuously.' },
    { ageRange: '2-6 months', normalVariation: 'Grunting during stooling efforts remains common. Some babies grunt while learning new physical movements. Intermittent grunts during sleep are normal.', whenToWorry: 'Continuous respiratory grunting with fever or lethargy. Grunting with poor color (pale, gray, or blue). Grunting with refusal to feed or decreased activity.' },
    { ageRange: '6-12 months', normalVariation: 'Occasional grunting during physical effort (sitting up, reaching, pushing) is normal. Brief grunts during stooling persist in some babies.', whenToWorry: 'New onset of continuous respiratory grunting. Grunting with intercostal or subcostal retractions. Grunting with high fever and rapid breathing.' },
    { ageRange: '1-3 years', normalVariation: 'Grunting during play or effort is normal. Brief grunting with stooling is less common but can persist.', whenToWorry: 'Grunting with every breath, especially if lying still. Respiratory grunting with fever, lethargy, or chest pain.' },
  ],
  urgencyLevels: {
    emergency: [
      'Grunting with every breath (expiratory grunting) in an infant — sign of respiratory distress',
      'Grunting with cyanosis (blue lips, face, or body)',
      'Grunting with lethargy and poor responsiveness in a newborn (possible sepsis)',
      'Grunting with severe retractions, nasal flaring, and head bobbing',
      'Continuous grunting in a premature infant',
    ],
    urgent: [
      'Grunting with fast breathing and fever in any infant',
      'Grunting with poor feeding and decreased wet diapers',
      'Intermittent respiratory grunting that is increasing in frequency',
      'Grunting with abdominal distension in a newborn',
    ],
    sameDay: [
      'Persistent grunting during stooling with apparent distress and no stool output (constipation evaluation)',
      'Parent uncertain whether grunting is respiratory or straining-related',
    ],
    monitor: [
      'Baby grunting only during bowel movements but stool is soft and baby is comfortable otherwise',
      'Brief sleep grunts with otherwise normal breathing pattern',
      'Grunting only during physical effort or straining activities',
    ],
  },
  homeRemedies: [
    'For grunting baby syndrome (straining): this is normal and resolves as baby learns to coordinate muscles — usually by 3-4 months',
    'Do NOT stimulate the rectum with thermometers or cotton buds — this can create dependence and delay natural learning',
    'Bicycle legs gently to help relieve gas and assist with stooling',
    'Tummy time during awake periods strengthens abdominal muscles needed for stooling',
    'Warm bath can relax baby and help with passing stool',
    'If baby is breastfed and straining, this is almost never constipation — breast milk stools can be infrequent',
    'For respiratory grunting: there are no home remedies — seek medical evaluation immediately',
    'Learn to distinguish respiratory grunting (with every exhale, rapid breathing) from effort grunting (only during straining, normal breathing between)',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['noisy-breathing', 'blue-lips', 'apnea'],
  relatedIllnessSlugs: ['pneumonia', 'bronchiolitis', 'respiratory-distress-syndrome', 'sepsis'],
  relatedConcernSlugs: ['newborn-grunting', 'baby-straining-to-poop', 'grunting-baby-syndrome'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breathing Problems. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/default.aspx' },
    { org: 'NIH', citation: 'Edwards MO, et al. Respiratory distress of the term newborn infant. Paediatric Respiratory Reviews. 2013;14(1):29-36.', url: 'https://pubmed.ncbi.nlm.nih.gov/23347658/' },
    { org: 'AAP', citation: 'Palpallatoc EM, Palpallatoc EM. Infantile dyschezia (grunting baby syndrome). American Family Physician. 2022.', url: 'https://www.aafp.org/pubs/afp.html' },
  ],
};
