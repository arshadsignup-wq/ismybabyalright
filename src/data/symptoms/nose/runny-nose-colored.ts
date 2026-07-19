import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'runny-nose-colored',
  title: 'Colored Nasal Discharge (Yellow/Green Mucus) in Babies',
  bodySystem: 'nose',
  description: 'Yellow or green nasal discharge in babies is extremely common and does NOT automatically mean a bacterial infection requiring antibiotics. During a typical viral cold, mucus often progresses from clear to white to yellow or green over several days as the immune system fights the virus. This color change occurs because of white blood cells and enzymes in the mucus. Green or yellow mucus becomes concerning only when accompanied by prolonged symptoms (beyond 10 days), high fever, or worsening after initial improvement.',
  possibleCauses: [
    { cause: 'Normal progression of a viral cold (days 3-7 typically produce colored mucus)', likelihood: 'common' },
    { cause: 'Thick mucus from dehydration or dry air', likelihood: 'common' },
    { cause: 'Acute bacterial sinusitis (after prolonged cold symptoms)', likelihood: 'uncommon' },
    { cause: 'Adenoid hypertrophy with chronic post-nasal drip', likelihood: 'uncommon' },
    { cause: 'Foreign body in the nose (unilateral foul-smelling discharge)', likelihood: 'rare' },
    { cause: 'Nasal polyps or structural issue', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Young babies may have colored mucus during their first colds. The nasal passages are tiny, so even small amounts of thick mucus cause noticeable congestion.', whenToWorry: 'Colored discharge with fever over 100.4F (38C) in baby under 3 months, inability to feed due to congestion, fast breathing, or dehydration signs.' },
    { ageRange: '6-24 months', normalVariation: 'Frequent colds with colored mucus are normal, especially in daycare. Green or yellow mucus for a few days during a cold is typical and does not require antibiotics.', whenToWorry: 'Nasal symptoms lasting more than 10 days without improvement, high fever (over 102F/39C) with thick discharge for 3+ days, improvement followed by worsening (double sickening), or one-sided foul-smelling discharge.' },
    { ageRange: '2-3 years', normalVariation: 'Toddlers average 6-8 colds per year, many with colored discharge. Teaching nose-blowing begins at this age. Colored mucus during a cold is expected.', whenToWorry: 'Same criteria as above: beyond 10 days, fever over 102F for 3+ days with purulent discharge, double sickening pattern, facial pain/swelling, or persistent one-sided discharge.' },
  ],
  urgencyLevels: {
    emergency: [
      'Colored discharge with high fever, stiff neck, and severe headache signs (meningitis)',
      'Facial swelling with redness spreading from nose to cheek or eye (orbital cellulitis)',
      'Colored discharge with severe breathing difficulty',
    ],
    urgent: [
      'Swelling or redness around the eye with nasal discharge (possible periorbital cellulitis)',
      'High fever (over 104F/40C) with purulent nasal discharge',
      'Colored nasal discharge with severe headache, facial swelling, or vision changes',
    ],
    sameDay: [
      'Colored discharge lasting more than 10 days without any improvement',
      'Pattern of improvement then worsening (double sickening)',
      'High fever (over 102F/39C) for 3 or more consecutive days with thick discharge',
      'One-sided foul-smelling colored discharge (possible foreign body)',
    ],
    monitor: [
      'Yellow or green mucus during days 3-10 of a cold with baby otherwise well',
      'Colored mucus in the morning that improves during the day',
      'Mild colored discharge during teething or a mild cold',
      'Green mucus that is progressively improving day over day',
    ],
  },
  homeRemedies: [
    'Use saline nasal drops to thin thick mucus before suctioning',
    'Gently suction with a bulb syringe or NoseFrida (limit to 3-4 times daily to avoid irritation)',
    'Run a cool-mist humidifier in baby\'s room to keep mucus from thickening',
    'Keep baby well-hydrated with breast milk, formula, or water (over 6 months)',
    'Steamy bathroom: sit in bathroom with hot shower running for 10-15 minutes',
    'Wipe nose gently with soft tissues and apply barrier ointment to prevent skin irritation',
    'Elevate head of crib slightly to help drainage',
    'Green or yellow mucus does NOT automatically need antibiotics—observe the pattern and duration',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['runny-nose-clear', 'congestion', 'fever'],
  relatedIllnessSlugs: ['common-cold', 'sinusitis'],
  relatedConcernSlugs: ['baby-green-mucus', 'baby-yellow-mucus', 'baby-sinus-infection'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Wald ER, et al. Clinical Practice Guideline for the Diagnosis and Management of Acute Bacterial Sinusitis in Children Aged 1 to 18 Years. Pediatrics. 2013;132(1):e262-e280.', url: 'https://publications.aap.org/pediatrics/article/132/1/e262/31493/Clinical-Practice-Guideline-for-the-Diagnosis-and' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Green Mucus Does Not Always Mean Bacterial Infection. AAP News.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Colds.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Antibiotic Prescribing and Use: Sinus Infection (Sinusitis).', url: 'https://www.cdc.gov/antibiotic-use/sinus-infection.html' },
  ],
};
