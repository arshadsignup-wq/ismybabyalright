import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'wet-cough',
  title: 'Wet (Productive) Cough in Babies & Toddlers',
  bodySystem: 'chest-breathing',
  description: 'A wet or productive cough sounds "phlegmy" or "rattly" and indicates mucus in the airways. In babies and toddlers, wet cough is most commonly caused by viral upper respiratory infections (colds), where mucus from the nose drips into the back of the throat (post-nasal drip). Young children cannot effectively expectorate (spit out) mucus, so they often swallow it or it triggers coughing. Most wet coughs from viral illness resolve within 2-3 weeks, but a chronic wet cough lasting more than 4 weeks warrants further evaluation.',
  possibleCauses: [
    { cause: 'Viral upper respiratory infection (common cold)', likelihood: 'common' },
    { cause: 'Post-nasal drip from nasal congestion', likelihood: 'common' },
    { cause: 'Bronchiolitis (RSV or other viruses in infants)', likelihood: 'common' },
    { cause: 'Bacterial chest infection (pneumonia)', likelihood: 'uncommon' },
    { cause: 'Protracted bacterial bronchitis', likelihood: 'uncommon' },
    { cause: 'Asthma with mucus hypersecretion', likelihood: 'uncommon' },
    { cause: 'Foreign body aspiration', likelihood: 'rare' },
    { cause: 'Cystic fibrosis', likelihood: 'rare' },
    { cause: 'Bronchiectasis', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Young infants rarely have a true productive cough. Gurgling or rattling sounds are usually from mucus in the upper airway (nose/throat), not the lungs.', whenToWorry: 'Any cough in a baby under 3 months warrants medical evaluation. Fast breathing (more than 60 breaths/minute), grunting, retractions, or poor feeding.' },
    { ageRange: '3-12 months', normalVariation: 'Wet cough during viral colds is common (6-8 colds per year in first year). Cough may last 2-3 weeks per episode. Baby should remain active and feed between coughing bouts.', whenToWorry: 'Wet cough with fast breathing, retractions, or wheezing. Cough with fever lasting more than 5 days. Cough causing vomiting at every feed. Wet cough persisting more than 4 weeks.' },
    { ageRange: '1-3 years', normalVariation: 'Frequent wet coughs from viral illnesses in daycare settings. Toddlers may cough for 2-3 weeks after each cold. Coughing that is worse when lying down due to post-nasal drip is common.', whenToWorry: 'Chronic daily wet cough lasting more than 4 weeks (possible protracted bacterial bronchitis). Wet cough with high persistent fever. Coughing up blood. Wet cough with poor weight gain or recurrent pneumonia.' },
  ],
  urgencyLevels: {
    emergency: [
      'Wet cough with severe respiratory distress (retractions, nasal flaring, unable to speak/cry)',
      'Coughing up significant blood',
      'Blue lips or face during coughing episodes',
      'Sudden onset wet cough with choking in previously well child (foreign body)',
    ],
    urgent: [
      'Wet cough with fast breathing and fever in infant under 6 months',
      'Wet cough with inability to keep fluids down (risk of dehydration)',
      'Worsening wet cough with high fever after initial improvement (secondary bacterial infection)',
      'Wet cough with wheezing and significant work of breathing',
    ],
    sameDay: [
      'Wet cough with fever lasting more than 5 days',
      'Chronic wet cough persisting more than 4 weeks',
      'Recurrent wet cough with multiple antibiotic courses needed',
    ],
    monitor: [
      'Wet cough with common cold symptoms (runny nose, mild fever) and child feeding well',
      'Post-viral cough that is gradually improving over 2-3 weeks',
      'Nighttime wet cough from post-nasal drip during a cold',
    ],
  },
  homeRemedies: [
    'Use saline nasal drops and gentle suction to clear nasal congestion (reduces post-nasal drip)',
    'Run a cool-mist humidifier in the bedroom at night',
    'Elevate head of crib mattress slightly (use a towel under the mattress, not a pillow)',
    'Offer plenty of fluids to help thin mucus secretions',
    'For children over 1 year: honey (half to one teaspoon) before bed can reduce coughing',
    'Steam from a hot shower (sit in bathroom) may help loosen mucus',
    'Encourage nose blowing in toddlers old enough to learn',
    'Do NOT give over-the-counter cough medicines to children under 6 years',
    'Do NOT give honey to babies under 12 months (botulism risk)',
    'Keep child away from cigarette smoke and other respiratory irritants',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['dry-cough', 'cough-at-night', 'noisy-breathing', 'grunting'],
  relatedIllnessSlugs: ['bronchiolitis', 'pneumonia', 'protracted-bacterial-bronchitis'],
  relatedConcernSlugs: ['baby-phlegmy-cough', 'toddler-wet-cough-wont-go-away'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Coughs and Colds: Medicines or Home Remedies? HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx' },
    { org: 'NIH', citation: 'Chang AB, et al. Chronic wet cough: Protracted bronchitis, chronic suppurative lung disease and bronchiectasis. Pediatric Pulmonology. 2008;43(6):519-531.', url: 'https://pubmed.ncbi.nlm.nih.gov/18435475/' },
    { org: 'AAP', citation: 'Chang AB, et al. Use of management pathways or algorithms in children with chronic cough. Cochrane Database of Systematic Reviews. 2014.', url: 'https://pubmed.ncbi.nlm.nih.gov/24482899/' },
  ],
};
