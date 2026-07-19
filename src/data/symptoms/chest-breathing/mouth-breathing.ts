import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'mouth-breathing',
  title: 'Mouth Breathing in Babies & Toddlers',
  bodySystem: 'chest-breathing',
  description: 'Newborns are obligate nasal breathers for the first several months of life, meaning they breathe primarily through their nose. Mouth breathing in a young infant is unusual and may indicate nasal obstruction. In older babies and toddlers, temporary mouth breathing during colds is common and expected. However, chronic mouth breathing (habitually breathing through the mouth when not congested) can indicate enlarged adenoids, allergic rhinitis, or other nasal obstruction and may affect facial development, dental alignment, and sleep quality if left unaddressed long-term.',
  possibleCauses: [
    { cause: 'Nasal congestion from viral illness (temporary)', likelihood: 'common' },
    { cause: 'Enlarged adenoids', likelihood: 'common' },
    { cause: 'Allergic rhinitis (nasal allergies)', likelihood: 'common' },
    { cause: 'Deviated nasal septum', likelihood: 'uncommon' },
    { cause: 'Nasal polyps', likelihood: 'uncommon' },
    { cause: 'Foreign body in the nose', likelihood: 'uncommon' },
    { cause: 'Choanal atresia (congenital nasal blockage — newborns)', likelihood: 'rare' },
    { cause: 'Craniofacial abnormalities affecting nasal passages', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Young infants should breathe through their nose. Temporary mouth breathing during vigorous crying is normal.', whenToWorry: 'Persistent mouth breathing in a newborn (may indicate choanal atresia or severe nasal obstruction). Inability to breathe while feeding (babies cannot nurse and mouth breathe simultaneously). Mouth breathing with retractions or distress.' },
    { ageRange: '3-12 months', normalVariation: 'Mouth breathing during colds is common as nasal passages become congested. Should resolve as congestion clears.', whenToWorry: 'Chronic mouth breathing when not sick. Mouth breathing interfering with feeding. Mouth breathing with snoring and observed apnea during sleep.' },
    { ageRange: '1-3 years', normalVariation: 'Temporary mouth breathing during upper respiratory infections is expected and common given frequency of illness in this age group.', whenToWorry: 'Habitual open-mouth posture when awake and not congested. Chronic mouth breathing with snoring, bad breath, dry lips, or dental problems. Mouth breathing with "adenoid facies" (long face, open mouth, high palate). Mouth breathing with speech abnormalities or feeding difficulties.' },
  ],
  urgencyLevels: {
    emergency: [
      'Newborn unable to breathe through nose and in distress (possible bilateral choanal atresia)',
      'Mouth breathing with severe respiratory distress, cyanosis, or inability to feed',
    ],
    urgent: [
      'Infant unable to breastfeed due to nasal obstruction not clearing with saline',
      'Sudden onset mouth breathing with unilateral foul nasal discharge (foreign body)',
    ],
    sameDay: [
      'Chronic mouth breathing with daytime sleepiness and loud snoring (sleep apnea evaluation)',
      'Mouth breathing with documented poor growth or failure to thrive',
      'Mouth breathing with suspected foreign body in nose',
    ],
    monitor: [
      'Temporary mouth breathing during a cold that resolves within 1-2 weeks',
      'Mild mouth breathing during sleep only with no snoring or apnea',
      'Occasional open-mouth posture in a toddler learning to breathe through congestion',
    ],
  },
  homeRemedies: [
    'Use saline nasal drops and gentle bulb suction to clear nasal congestion',
    'Run a cool-mist humidifier in the bedroom, especially during dry seasons',
    'Elevate head of mattress slightly for babies with congestion',
    'For allergic rhinitis: reduce allergen exposure (dust, pet dander, pollen)',
    'Keep nasal passages moisturized with saline spray in dry climates',
    'Encourage nose breathing during awake time (gentle reminders for older toddlers)',
    'For young infants: saline drops before feeds to clear nasal passages and allow nursing',
    'Avoid cigarette smoke and strong irritants that cause nasal swelling',
    'If chronic mouth breathing persists when well, consult pediatrician about adenoid evaluation',
    'Do NOT use over-the-counter decongestant sprays in children under 6 years',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['snoring', 'noisy-breathing', 'bad-breath', 'swollen-tonsils'],
  relatedIllnessSlugs: ['adenoid-hypertrophy', 'allergic-rhinitis', 'choanal-atresia', 'obstructive-sleep-apnea'],
  relatedConcernSlugs: ['baby-mouth-breathing', 'toddler-always-mouth-open', 'adenoid-face'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Nasal Congestion. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/default.aspx' },
    { org: 'NIH', citation: 'Harari D, et al. The effect of mouth breathing versus nasal breathing on dentofacial and craniofacial development in orthodontic patients. Laryngoscope. 2010;120(10):2089-2093.', url: 'https://pubmed.ncbi.nlm.nih.gov/20824738/' },
    { org: 'AAP', citation: 'Marcus CL, et al. Diagnosis and Management of Childhood Obstructive Sleep Apnea Syndrome. Pediatrics. 2012;130(3):e714-e755.', url: 'https://publications.aap.org/pediatrics/article/130/3/e714/30096' },
  ],
};
