import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'croup-vs-bronchiolitis',
  title: 'Croup vs Bronchiolitis: Key Differences',
  description: 'Both croup and bronchiolitis are common respiratory illnesses in young children caused by viruses. However, they affect different parts of the airway and have distinct symptoms.',
  conditionA: { name: 'Croup', illnessSlug: 'croup' },
  conditionB: { name: 'Bronchiolitis', illnessSlug: 'bronchiolitis' },
  comparisonPoints: [
    { category: 'Location', conditionA: 'Upper airway (voice box & windpipe)', conditionB: 'Lower airway (small bronchioles in lungs)' },
    { category: 'Typical age', conditionA: '6 months to 3 years', conditionB: 'Under 12 months' },
    { category: 'Key sound', conditionA: 'Barking cough + stridor (harsh sound breathing in)', conditionB: 'Wheezing + crackles' },
    { category: 'Cough type', conditionA: 'Barking, seal-like', conditionB: 'Wet or productive' },
    { category: 'Worse at', conditionA: 'Night', conditionB: 'Any time, gradually worsens over days' },
    { category: 'Onset', conditionA: 'Often sudden (middle of the night)', conditionB: 'Gradual over 2-3 days' },
    { category: 'Duration', conditionA: '2-3 days of barking cough', conditionB: '7-10 days, peaks day 3-5' },
    { category: 'Treatment', conditionA: 'Steroids (dexamethasone), cool air', conditionB: 'Supportive only (suctioning, fluids)' },
    { category: 'Main concern', conditionA: 'Airway obstruction from swelling', conditionB: 'Breathing difficulty + dehydration from poor feeding' },
  ],
  keyDifferences: [
    'Croup causes a barking cough and stridor; bronchiolitis causes wheezing',
    'Croup affects the upper airway; bronchiolitis affects the lower airways',
    'Croup responds to steroids; bronchiolitis does not respond to any medication',
    'Croup is typically worst at night; bronchiolitis progressively worsens over days',
    'Croup often starts suddenly; bronchiolitis builds gradually from a cold',
  ],
  whenToWorry: [
    'Either condition: blue lips, severe retractions, very rapid breathing',
    'Croup: stridor at rest when child is calm',
    'Bronchiolitis: baby unable to feed, fewer than 3 wet diapers in 24 hours',
    'Any baby under 3 months with breathing difficulty needs immediate evaluation',
  ],
  sources: [
    { org: 'AAP', citation: 'AAP Clinical Guidelines on Croup and Bronchiolitis.', url: 'https://www.aap.org/en/clinical-guidance/' },
    { org: 'CDC', citation: 'CDC. Respiratory Illnesses in Children.', url: 'https://www.cdc.gov/rsv/index.html' },
  ],
};
