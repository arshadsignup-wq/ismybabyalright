import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'bronchiolitis-vs-pneumonia',
  title: 'Bronchiolitis vs Pneumonia: Key Differences',
  description: 'Both bronchiolitis and pneumonia affect the lungs and cause breathing difficulty in young children. However, they involve different parts of the lower respiratory system and may require different treatments.',
  conditionA: { name: 'Bronchiolitis', illnessSlug: 'bronchiolitis' },
  conditionB: { name: 'Pneumonia', illnessSlug: 'pneumonia' },
  comparisonPoints: [
    { category: 'Location', conditionA: 'Small airways (bronchioles)', conditionB: 'Lung tissue (alveoli)' },
    { category: 'Cause', conditionA: 'Almost always viral (RSV most common)', conditionB: 'Viral, bacterial, or mixed' },
    { category: 'Typical age', conditionA: 'Under 2 years (peak under 6 months)', conditionB: 'Any age' },
    { category: 'Onset', conditionA: 'Gradual, starts with runny nose for 2-3 days', conditionB: 'Can be sudden (bacterial) or follow a cold (viral)' },
    { category: 'Fever', conditionA: 'Low-grade or none', conditionB: 'Often high fever, especially bacterial pneumonia' },
    { category: 'Breathing sounds', conditionA: 'Widespread wheezing and crackles', conditionB: 'Localized crackles or decreased breath sounds on one side' },
    { category: 'Cough', conditionA: 'Wet cough with wheeze', conditionB: 'Productive or deep cough, may have chest pain' },
    { category: 'Diagnosis', conditionA: 'Clinical (history and exam)', conditionB: 'Chest X-ray often needed' },
    { category: 'Treatment', conditionA: 'Supportive only (suctioning, fluids, oxygen if needed)', conditionB: 'Antibiotics if bacterial; supportive care if viral' },
    { category: 'Duration', conditionA: '7-10 days, peaks day 3-5', conditionB: 'Bacterial: improves in 48-72 hours with antibiotics; Viral: 1-3 weeks' },
  ],
  keyDifferences: [
    'Bronchiolitis causes diffuse wheezing; pneumonia often has localized findings on one side',
    'Bronchiolitis is almost always viral; pneumonia can be bacterial and require antibiotics',
    'Bronchiolitis typically occurs in babies under 2; pneumonia can occur at any age',
    'Bronchiolitis usually has low or no fever; bacterial pneumonia often causes high fever',
    'Bronchiolitis has no effective medication; bacterial pneumonia responds to antibiotics',
  ],
  whenToWorry: [
    'Breathing rate over 60 breaths per minute in an infant',
    'Visible chest retractions (skin pulling in between ribs)',
    'Blue or dusky color around lips',
    'Unable to feed or drink, signs of dehydration',
    'Fever over 102°F (39°C) persisting more than 3 days',
    'Child appears very ill, lethargic, or difficult to rouse',
  ],
  sources: [
    { org: 'AAP', citation: 'AAP Clinical Practice Guideline: Management of Bronchiolitis in Infants and Children.', url: 'https://publications.aap.org/pediatrics' },
    { org: 'WHO', citation: 'WHO. Pneumonia in Children Fact Sheet.', url: 'https://www.who.int/news-room/fact-sheets/detail/pneumonia' },
    { org: 'CDC', citation: 'CDC. Pneumonia in Children.', url: 'https://www.cdc.gov/pneumonia/' },
  ],
};
