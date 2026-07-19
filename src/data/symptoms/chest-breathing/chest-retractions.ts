import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'chest-retractions',
  title: 'Chest Retractions (Breathing Difficulty) in Babies',
  bodySystem: 'chest-breathing',
  description: 'Chest retractions occur when the skin pulls in around the ribs, above the collarbone, or below the rib cage with each breath. They indicate that a baby is working harder than normal to breathe. Retractions are always a sign of respiratory distress and should be taken seriously, as they mean the body is using extra muscles to pull air into the lungs against resistance.',
  possibleCauses: [
    { cause: 'Bronchiolitis (RSV or other viral)', likelihood: 'common' },
    { cause: 'Croup (subglottic swelling)', likelihood: 'common' },
    { cause: 'Asthma or reactive airway disease', likelihood: 'common' },
    { cause: 'Pneumonia', likelihood: 'uncommon' },
    { cause: 'Foreign body aspiration', likelihood: 'uncommon' },
    { cause: 'Severe allergic reaction (anaphylaxis)', likelihood: 'uncommon' },
    { cause: 'Pertussis (whooping cough)', likelihood: 'uncommon' },
    { cause: 'Congenital heart disease', likelihood: 'rare' },
    { cause: 'Pneumothorax (collapsed lung)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Very mild intermittent subcostal retractions (below ribs) during active sleep can be seen in premature or small newborns. Breathing should be comfortable when baby is calm and awake.', whenToWorry: 'ANY visible retractions when baby is calm warrants urgent evaluation. Combined with grunting, nasal flaring, or fast breathing is a medical emergency. Premature infants are especially vulnerable.' },
    { ageRange: '2-12 months', normalVariation: 'No retractions should be visible during normal quiet breathing at this age.', whenToWorry: 'Intercostal retractions (between ribs), suprasternal retractions (above collarbone), or subcostal retractions (below ribs) during calm breathing. Especially concerning with fast breathing, poor feeding, or color change.' },
    { ageRange: '1-3 years', normalVariation: 'No retractions should be present during normal breathing. Mild retractions during active crying can be normal.', whenToWorry: 'Visible retractions with breathing at rest, inability to speak in sentences, refusing to lie flat, or worsening over hours. Severe retractions make the chest look like it is caving in.' },
    { ageRange: 'Any age', normalVariation: 'Brief mild retractions during heavy crying or exertion that resolve immediately when calm.', whenToWorry: 'Retractions at rest always require medical evaluation. The more locations (intercostal + subcostal + suprasternal), the more severe the distress.' },
  ],
  urgencyLevels: {
    emergency: [
      'Severe retractions visible in multiple areas (between ribs, above collarbone, below ribs simultaneously)',
      'Retractions with blue or gray color around lips or fingernails',
      'Retractions with grunting and nasal flaring (respiratory distress triad)',
      'Baby is lethargic or difficult to arouse with retractions',
      'Retractions following choking episode (possible foreign body)',
      'Retractions with drooling and inability to swallow',
    ],
    urgent: [
      'Mild to moderate retractions visible when baby is calm',
      'Retractions with fast breathing and poor feeding',
      'Retractions not improving after using prescribed rescue inhaler',
      'Retractions in a baby under 3 months with any respiratory illness',
      'Worsening retractions over several hours',
    ],
    sameDay: [
      'Very mild subcostal retractions with a viral illness but baby still feeding and alert',
      'Retractions present only with increased activity or crying in a mildly ill child',
    ],
    monitor: [
      'Brief mild retractions only during crying that resolve immediately when calm (can be normal)',
      'History of retractions that have completely resolved \u2014 monitor for return',
    ],
  },
  homeRemedies: [
    'Chest retractions require medical evaluation \u2014 do not delay seeking care',
    'While waiting for medical help: keep baby calm and upright',
    'Clear nasal congestion with saline and gentle suctioning',
    'If prescribed rescue inhaler (albuterol), administer with spacer and mask',
    'Remove tight clothing around chest and neck',
    'Run cool-mist humidifier',
    'Do not offer food or large volumes of fluid if baby is in significant distress (aspiration risk)',
    'Count respiratory rate and note all signs of distress to report to medical team',
  ],
  triageSlug: 'breathing-difficulty',
  relatedSymptomSlugs: ['fast-breathing', 'wheezing', 'barking-cough'],
  relatedIllnessSlugs: ['rsv', 'bronchiolitis', 'pneumonia', 'croup', 'asthma'],
  relatedConcernSlugs: ['baby-ribs-showing-breathing', 'baby-working-hard-to-breathe', 'baby-chest-caving-in'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Signs of Respiratory Distress. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Signs-of-Respiratory-Distress.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Emergency Triage, Assessment and Treatment (ETAT). Danger Signs in Children.', url: 'https://www.who.int/publications/i/item/9789241510219' },
    { org: 'Cincinnati Children\'s', citation: 'Cincinnati Children\'s Hospital. Respiratory Distress in Children: Assessment.', url: 'https://www.cincinnatichildrens.org/health/r/respiratory-distress' },
  ],
};
