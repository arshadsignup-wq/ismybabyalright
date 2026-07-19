import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'congestion',
  title: 'Nasal Congestion (Stuffy Nose) in Babies',
  bodySystem: 'nose',
  description: 'Nasal congestion is one of the most common complaints in infancy because babies are obligate nose breathers for the first few months of life and their nasal passages are very narrow. Even small amounts of mucus or swelling can cause noticeable stuffiness and noisy breathing. Most congestion in babies is caused by viral upper respiratory infections or normal nasal physiology and resolves without intervention.',
  possibleCauses: [
    { cause: 'Viral upper respiratory infection (common cold)', likelihood: 'common' },
    { cause: 'Normal newborn nasal congestion (small passages, residual amniotic fluid)', likelihood: 'common' },
    { cause: 'Dry air causing mucous membrane swelling', likelihood: 'common' },
    { cause: 'Irritants (smoke, perfumes, cleaning products)', likelihood: 'uncommon' },
    { cause: 'Allergic rhinitis (more common after age 2)', likelihood: 'uncommon' },
    { cause: 'Adenoid hypertrophy', likelihood: 'uncommon' },
    { cause: 'Choanal atresia or stenosis (congenital nasal blockage)', likelihood: 'rare' },
    { cause: 'Nasal polyps or deviated septum', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Newborns often sound congested due to tiny nasal passages. Noisy breathing without other symptoms is usually normal. Snorting and grunting during feeding is common. Newborns breathe primarily through their nose.', whenToWorry: 'Inability to feed due to congestion, nasal flaring, chest retractions, complete nasal obstruction (baby cannot breathe at all through nose and struggles at breast/bottle), or congestion with fever under 3 months.' },
    { ageRange: '3-12 months', normalVariation: 'Frequent mild congestion during colds is normal (6-8 colds per year). Congestion is often worse at night and when lying flat. May improve when upright.', whenToWorry: 'Congestion with fast breathing or labored breathing, refusal to eat due to inability to breathe while feeding, persistent congestion without any cold symptoms, or congestion with apnea episodes.' },
    { ageRange: '1-3 years', normalVariation: 'Toddlers still get frequent colds with congestion. They begin mouth-breathing when congested. Night-time congestion and snoring during colds is common.', whenToWorry: 'Chronic congestion with snoring and mouth-breathing (possible adenoid hypertrophy), congestion only on one side (possible foreign body), or congestion not improving after 2 weeks.' },
  ],
  urgencyLevels: {
    emergency: [
      'Complete nasal obstruction in a young infant who cannot breathe through mouth',
      'Congestion with severe respiratory distress (nasal flaring, retractions, blue color)',
      'Congestion with apnea episodes (breathing stops for more than 20 seconds)',
    ],
    urgent: [
      'Congestion with fever in baby under 3 months',
      'Congestion causing inability to feed with signs of dehydration',
      'Congestion with fast breathing or significant work of breathing',
    ],
    sameDay: [
      'Congestion lasting more than 2 weeks without improvement',
      'Congestion with persistent foul-smelling discharge from one side',
      'Chronic congestion with snoring and sleep disruption',
    ],
    monitor: [
      'Mild congestion with a cold and normal feeding',
      'Normal newborn nasal congestion without other symptoms',
      'Congestion worse at night but manageable with saline and suction',
      'Congestion during dry winter months that improves with humidity',
    ],
  },
  homeRemedies: [
    'Use saline nasal drops (2-3 drops per nostril) 15 minutes before feeds and sleep',
    'Gently suction nasal passages with a bulb syringe or NoseFrida after saline',
    'Run a cool-mist humidifier in baby\'s room (clean it daily to prevent mold)',
    'Offer extra fluids to thin mucus secretions',
    'Hold baby upright for 20-30 minutes after feeds',
    'Elevate the head of the crib slightly by placing a folded towel under the mattress',
    'Steam from a hot shower in a closed bathroom can temporarily relieve congestion (sit with baby, not under the water)',
    'Do NOT use mentholated rubs (like Vicks) on babies under 2 years—it can irritate airways',
    'Do NOT use decongestant drops or oral cold medicines in infants or toddlers',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['runny-nose-clear', 'runny-nose-colored', 'sneezing', 'nasal-flaring'],
  relatedIllnessSlugs: ['common-cold', 'rsv', 'sinusitis'],
  relatedConcernSlugs: ['baby-stuffy-nose', 'newborn-congestion', 'baby-cant-breathe-nose'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Nasal Congestion. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Congestion.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Coughs and Colds: Medicines or Home Remedies? HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Common cold in babies - Diagnosis and treatment.', url: 'https://www.mayoclinic.org/diseases-conditions/common-cold-in-babies/diagnosis-treatment/drc-20351657' },
  ],
};
