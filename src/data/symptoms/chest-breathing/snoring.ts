import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'snoring',
  title: 'Snoring in Babies & Toddlers',
  bodySystem: 'chest-breathing',
  description: 'Snoring in babies and toddlers occurs when airflow is partially obstructed during sleep, causing vibration of the soft tissues in the throat. Occasional or mild snoring is common in young children — approximately 10-12% of healthy children snore regularly. Snoring during upper respiratory infections is very common and temporary. However, habitual loud snoring (most nights) affects 1-3% of children and may indicate obstructive sleep apnea (OSA), particularly when accompanied by breathing pauses, gasping, restless sleep, or daytime symptoms.',
  possibleCauses: [
    { cause: 'Nasal congestion from viral illness or allergies', likelihood: 'common' },
    { cause: 'Enlarged adenoids and/or tonsils', likelihood: 'common' },
    { cause: 'Normal variation (primary snoring without apnea)', likelihood: 'common' },
    { cause: 'Obstructive sleep apnea', likelihood: 'uncommon' },
    { cause: 'Obesity contributing to airway narrowing', likelihood: 'uncommon' },
    { cause: 'Craniofacial differences (small jaw, midface hypoplasia)', likelihood: 'uncommon' },
    { cause: 'Laryngomalacia or tracheomalacia', likelihood: 'rare' },
    { cause: 'Neuromuscular conditions causing low muscle tone', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Snorting and snuffling during sleep is common in newborns due to narrow nasal passages. Mild noisy breathing that resolves with position change or nasal clearing is typical.', whenToWorry: 'Loud snoring every night from birth (possible laryngomalacia or structural issue). Snoring with observed pauses in breathing, gasping, or color changes. Snoring with poor feeding or weight gain.' },
    { ageRange: '6-12 months', normalVariation: 'Snoring during colds is very common and temporary. Brief positional snoring is not concerning.', whenToWorry: 'Habitual snoring most nights unrelated to illness. Snoring with mouth breathing, restless sleep, frequent waking, or sweating during sleep.' },
    { ageRange: '1-3 years', normalVariation: 'Occasional snoring is common. Snoring during upper respiratory infections in this age group is expected given frequent viral illnesses.', whenToWorry: 'Loud snoring most nights with parents hearing breathing pauses. Neck hyperextension during sleep. Daytime mouth breathing, behavioral changes, or excessive daytime sleepiness. Bedwetting in a previously dry child alongside snoring.' },
  ],
  urgencyLevels: {
    emergency: [
      'Snoring with observed prolonged breathing pauses and color change (blue or pale)',
      'Severe obstruction during sleep requiring intervention to restart breathing',
    ],
    urgent: [
      'Snoring with significant apnea episodes observed by parents (stops breathing for more than 10 seconds multiple times per hour)',
      'Snoring with failure to thrive or poor growth',
    ],
    sameDay: [
      'Habitual loud snoring most nights with daytime symptoms (sleepiness, behavior issues, mouth breathing)',
      'Snoring with witnessed gasping or choking arousals',
      'Snoring that is worsening or newly developed without illness',
    ],
    monitor: [
      'Snoring only during colds or congestion that resolves when well',
      'Mild occasional snoring without breathing pauses or daytime symptoms',
      'Primary snoring — regular snoring without apnea and child appears well-rested',
    ],
  },
  homeRemedies: [
    'Treat nasal congestion with saline drops and gentle suction before bed',
    'Use a cool-mist humidifier in the bedroom to reduce airway dryness',
    'Keep child at healthy weight — obesity worsens snoring and sleep apnea',
    'Try elevating head of mattress slightly',
    'Try sleeping on the side rather than back if child is old enough',
    'Remove potential allergens from bedroom (dust mites, pet dander)',
    'Avoid exposure to cigarette smoke which inflames airways',
    'Record videos of snoring and any pauses to show the pediatrician',
    'Maintain a regular sleep schedule with adequate sleep duration for age',
    'If adenoid/tonsil enlargement is suspected, see an ENT specialist',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['mouth-breathing', 'noisy-breathing', 'apnea', 'swollen-tonsils'],
  relatedIllnessSlugs: ['obstructive-sleep-apnea', 'adenoid-hypertrophy', 'allergic-rhinitis'],
  relatedConcernSlugs: ['baby-snoring', 'toddler-snoring-loudly', 'child-sleep-apnea'],
  sources: [
    { org: 'AAP', citation: 'Marcus CL, et al. Diagnosis and Management of Childhood Obstructive Sleep Apnea Syndrome. Pediatrics. 2012;130(3):e714-e755.', url: 'https://publications.aap.org/pediatrics/article/130/3/e714/30096' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Snoring. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Snoring.aspx' },
    { org: 'NIH', citation: 'National Heart, Lung, and Blood Institute. Sleep Apnea.', url: 'https://www.nhlbi.nih.gov/health/sleep-apnea' },
  ],
};
