import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'rsv-vs-flu',
  title: 'RSV vs Flu (Influenza): Key Differences',
  description: 'RSV and influenza are both common respiratory viruses in children, but they differ in their typical age groups, symptom patterns, and available treatments.',
  conditionA: { name: 'RSV (Respiratory Syncytial Virus)', illnessSlug: 'rsv' },
  conditionB: { name: 'Flu (Influenza)', illnessSlug: 'flu' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Respiratory syncytial virus', conditionB: 'Influenza A or B virus' },
    { category: 'Highest risk age', conditionA: 'Under 6 months (premature babies especially)', conditionB: 'Under 5 years; also those with chronic conditions' },
    { category: 'Onset', conditionA: 'Gradual, starts like a cold', conditionB: 'Sudden onset of high fever and body aches' },
    { category: 'Fever', conditionA: 'Low-grade or absent', conditionB: 'High fever (often 102-104°F / 39-40°C)' },
    { category: 'Key symptoms', conditionA: 'Wheezing, nasal congestion, poor feeding in infants', conditionB: 'High fever, body aches, fatigue, cough' },
    { category: 'Duration', conditionA: '7-14 days, peak at days 3-5', conditionB: '5-7 days, though cough may linger' },
    { category: 'Treatment', conditionA: 'Supportive care only (suctioning, fluids)', conditionB: 'Oseltamivir (Tamiflu) if started within 48 hours' },
    { category: 'Vaccine/prevention', conditionA: 'Nirsevimab (monoclonal antibody) for infants; maternal RSV vaccine', conditionB: 'Annual flu vaccine (available from 6 months)' },
    { category: 'Main complication', conditionA: 'Bronchiolitis, pneumonia in infants', conditionB: 'Pneumonia, dehydration, febrile seizures' },
  ],
  keyDifferences: [
    'Flu has sudden onset with high fever; RSV starts gradually like a cold',
    'RSV primarily causes lower respiratory symptoms (wheezing) in babies; flu causes systemic symptoms (fever, body aches)',
    'Flu has antiviral treatment (Tamiflu); RSV has no specific antiviral',
    'RSV is most dangerous for very young infants; flu is dangerous across all pediatric ages',
    'Flu tends to cause more muscle aches and fatigue; RSV causes more nasal congestion and breathing difficulty',
  ],
  whenToWorry: [
    'Rapid breathing or visible rib retractions',
    'Blue or gray color around lips or fingernails',
    'Baby under 3 months with fever over 100.4°F (38°C)',
    'Signs of dehydration: no wet diaper in 8+ hours, no tears when crying',
    'Child is lethargic, difficult to wake, or unresponsive',
    'Fever over 104°F (40°C) that does not respond to medication',
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. RSV in Infants and Young Children.', url: 'https://www.cdc.gov/rsv/index.html' },
    { org: 'CDC', citation: 'CDC. Flu in Children.', url: 'https://www.cdc.gov/flu/highrisk/children.htm' },
    { org: 'AAP', citation: 'AAP. Updated Guidance on Palivizumab and Nirsevimab for RSV Prevention.', url: 'https://publications.aap.org/pediatrics' },
  ],
};
