import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'asthma-vs-reactive-airway',
  title: 'Asthma vs Reactive Airway Disease: Key Differences',
  description: 'Reactive airway disease (RAD) and asthma both cause wheezing and breathing difficulty in children. RAD is a descriptive term used when a child is too young for a formal asthma diagnosis, while asthma is a chronic condition with specific diagnostic criteria.',
  conditionA: { name: 'Asthma', illnessSlug: 'asthma' },
  conditionB: { name: 'Reactive Airway Disease (RAD)' },
  comparisonPoints: [
    { category: 'Definition', conditionA: 'Chronic inflammatory airway disease with specific diagnostic criteria', conditionB: 'Descriptive term for wheezing episodes in young children (not a formal diagnosis)' },
    { category: 'Age of diagnosis', conditionA: 'Usually diagnosed at age 5+ (when lung function testing is possible)', conditionB: 'Used for children under 5 who wheeze' },
    { category: 'Pattern', conditionA: 'Recurrent episodes; triggered by allergens, exercise, cold air, irritants', conditionB: 'Wheezing episodes, often only with viral infections' },
    { category: 'Triggers', conditionA: 'Multiple: allergens, exercise, cold air, smoke, stress', conditionB: 'Primarily viral respiratory infections' },
    { category: 'Between episodes', conditionA: 'May have symptoms between flares (nighttime cough, exercise intolerance)', conditionB: 'Typically completely normal between viral illnesses' },
    { category: 'Family history', conditionA: 'Strong association with family history of asthma, allergies, eczema', conditionB: 'May or may not have family history' },
    { category: 'Allergy connection', conditionA: 'Often associated with eczema, allergic rhinitis, food allergies (atopic triad)', conditionB: 'May not have allergic associations' },
    { category: 'Diagnosis method', conditionA: 'Spirometry (lung function test), clinical criteria, response to treatment', conditionB: 'Clinical observation only (too young for testing)' },
    { category: 'Treatment', conditionA: 'Long-term controller medications + rescue inhaler', conditionB: 'Rescue bronchodilator during episodes; may use preventive meds if frequent' },
    { category: 'Prognosis', conditionA: 'Lifelong chronic condition (may improve but rarely fully resolves)', conditionB: 'Many children outgrow it by school age; some develop true asthma' },
  ],
  keyDifferences: [
    'RAD is a temporary label used when a child is too young for formal asthma testing; asthma is a confirmed chronic diagnosis',
    'Many children with RAD outgrow wheezing by school age; asthma is typically lifelong',
    'RAD usually triggers only with viruses; asthma has multiple triggers including allergens and exercise',
    'Children with asthma often have allergies and eczema; children with RAD may not',
    'Between episodes, children with RAD are typically normal; children with asthma may have ongoing symptoms',
  ],
  whenToWorry: [
    'Wheezing or coughing that does not improve with rescue inhaler (albuterol)',
    'Visible chest retractions or belly breathing',
    'Blue or gray lips or fingernails',
    'Child cannot speak in full sentences due to breathlessness',
    'Three or more wheezing episodes in a year (may need preventive treatment)',
    'Nighttime coughing disrupting sleep more than twice per week',
    'Activity limitation — child unable to keep up with peers',
  ],
  sources: [
    { org: 'AAP', citation: 'AAP. Asthma in Children.', url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Asthma.aspx' },
    { org: 'NHLBI', citation: 'National Heart, Lung, and Blood Institute. Expert Panel Report: Guidelines for the Diagnosis and Management of Asthma.', url: 'https://www.nhlbi.nih.gov/health-topics/asthma' },
    { org: 'GINA', citation: 'Global Initiative for Asthma. Diagnosis and Management of Asthma in Children 5 Years and Younger.', url: 'https://ginasthma.org/' },
  ],
};
