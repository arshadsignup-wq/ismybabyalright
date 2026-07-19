import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'cough-at-night',
  title: 'Nighttime Cough in Babies & Toddlers',
  bodySystem: 'chest-breathing',
  description: 'Nighttime coughing (nocturnal cough) in babies and toddlers is a very common concern for parents. Coughing tends to worsen at night because lying down allows post-nasal drip to pool in the throat, and cool night air can trigger airway reactivity. The most common causes include upper respiratory infections with post-nasal drip, asthma/reactive airways, croup (which characteristically worsens at night), and gastroesophageal reflux. While disruptive to sleep, most nighttime coughs from viral illness are self-limiting.',
  possibleCauses: [
    { cause: 'Post-nasal drip from viral cold or allergies', likelihood: 'common' },
    { cause: 'Croup (barking cough worse at night)', likelihood: 'common' },
    { cause: 'Asthma or reactive airways (nighttime cough variant)', likelihood: 'common' },
    { cause: 'Dry air in bedroom irritating airways', likelihood: 'common' },
    { cause: 'Gastroesophageal reflux', likelihood: 'uncommon' },
    { cause: 'Sinusitis with post-nasal drip', likelihood: 'uncommon' },
    { cause: 'Enlarged adenoids', likelihood: 'uncommon' },
    { cause: 'Pertussis (paroxysmal cough worse at night)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-6 months', normalVariation: 'Occasional coughing at night from nasal congestion dripping into throat is common during colds. Babies breathe preferentially through the nose, so congestion is particularly bothersome.', whenToWorry: 'Frequent coughing spells disrupting all sleep and feeding. Cough with fast breathing or retractions. Choking or gagging episodes at night. Apnea following coughing fits.' },
    { ageRange: '6-12 months', normalVariation: 'Nighttime cough during viral illness is common and may last 2-3 weeks. Cough from post-nasal drip typically worsens shortly after lying down and on waking.', whenToWorry: 'Nightly cough for more than 4 weeks (beyond expected viral duration). Barking cough with stridor. Cough with wheezing heard without stethoscope. Cough causing repeated vomiting at night.' },
    { ageRange: '1-3 years', normalVariation: 'Toddlers frequently cough at night during colds (especially first 3-4 nights of illness). Some coughing on lying down from post-nasal drip is expected.', whenToWorry: 'Chronic nighttime cough every night for weeks suggesting asthma. Croup with stridor at rest. Cough causing significant sleep disruption every night with daytime tiredness. Whooping or machine-gun pattern cough fits.' },
  ],
  urgencyLevels: {
    emergency: [
      'Nighttime cough with severe breathing difficulty (retractions, cyanosis)',
      'Apnea episodes following coughing fits',
      'Croup with stridor at rest that does not improve with cool air exposure',
      'Child unable to lie down at all due to breathing difficulty',
    ],
    urgent: [
      'Barking cough with stridor at rest (moderate-severe croup)',
      'Nighttime coughing fits causing repeated vomiting with dehydration concern',
      'Suspected pertussis in young or unvaccinated infant',
      'Nighttime cough with wheezing not responding to prescribed bronchodilator',
    ],
    sameDay: [
      'Chronic nightly cough persisting more than 4 weeks',
      'Recurrent nighttime cough episodes suggesting undiagnosed asthma',
      'Nighttime cough with poor sleep significantly affecting daytime function',
    ],
    monitor: [
      'Nighttime cough during first week of a cold that is gradually improving',
      'Mild croup with occasional barking cough but no stridor at rest',
      'Cough from dry air that improves with humidifier use',
    ],
  },
  homeRemedies: [
    'Run a cool-mist humidifier in the child\'s bedroom all night',
    'Elevate the head of the mattress slightly (towel under mattress, not a pillow for babies)',
    'Clear nasal congestion with saline drops and gentle suction before bed',
    'Honey before bed for children over 1 year (evidence supports reducing nighttime cough)',
    'For croup: take child into cool night air or run a cool shower and sit nearby',
    'Offer a drink of water if child wakes coughing (for babies over 6 months)',
    'Keep bedroom temperature cool and comfortable (not overly heated)',
    'Avoid exposure to cigarette smoke which worsens nighttime cough',
    'Do NOT give over-the-counter cough suppressants to children under 6',
    'If reflux is suspected, avoid feeding within 30-60 minutes of lying down',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['dry-cough', 'wet-cough', 'stridor', 'snoring'],
  relatedIllnessSlugs: ['croup', 'asthma', 'reflux', 'pertussis'],
  relatedConcernSlugs: ['baby-coughing-at-night', 'toddler-cough-only-at-night'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Coughs and Colds: Medicines or Home Remedies? HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx' },
    { org: 'NIH', citation: 'Paul IM, et al. Effect of honey, dextromethorphan, and no treatment on nocturnal cough and sleep quality. Archives of Pediatrics & Adolescent Medicine. 2007;161(12):1140-1146.', url: 'https://pubmed.ncbi.nlm.nih.gov/18056558/' },
    { org: 'AAP', citation: 'Chang AB, et al. Cough in children: definitions and clinical evaluation. Medical Journal of Australia. 2006;184(8):398-403.', url: 'https://pubmed.ncbi.nlm.nih.gov/16618239/' },
  ],
};
