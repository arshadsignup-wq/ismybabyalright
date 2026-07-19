import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'viral-vs-bacterial',
  title: 'Viral vs Bacterial Infections: Key Differences',
  description: 'Understanding whether an illness is viral or bacterial helps determine treatment. Viral infections are far more common in children and resolve on their own, while bacterial infections may require antibiotics.',
  conditionA: { name: 'Viral Infection' },
  conditionB: { name: 'Bacterial Infection' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Viruses (rhinovirus, influenza, RSV, etc.)', conditionB: 'Bacteria (Strep, Staph, E. coli, etc.)' },
    { category: 'Onset', conditionA: 'Usually gradual, worsens over 2-3 days', conditionB: 'Can be sudden or follow a viral illness' },
    { category: 'Fever pattern', conditionA: 'Lower-grade, often fluctuates', conditionB: 'Often higher (over 102°F/39°C), may persist or worsen' },
    { category: 'Nasal discharge', conditionA: 'Clear initially, may turn yellow/green (normal)', conditionB: 'Thick, colored discharge persisting beyond 10 days may suggest sinusitis' },
    { category: 'Duration', conditionA: '7-10 days, gradual improvement', conditionB: 'Worsens without treatment; improves within 48-72 hours with antibiotics' },
    { category: 'Treatment', conditionA: 'Supportive care only (rest, fluids, fever management)', conditionB: 'Antibiotics needed; supportive care as well' },
    { category: 'Response to antibiotics', conditionA: 'No benefit; antibiotics do not work against viruses', conditionB: 'Significant improvement within 48-72 hours' },
    { category: 'Common examples', conditionA: 'Common cold, flu, croup, bronchiolitis, most sore throats', conditionB: 'Strep throat, bacterial ear infections, UTIs, bacterial pneumonia' },
    { category: 'Contagion', conditionA: 'Highly contagious via respiratory droplets and contact', conditionB: 'Variable; some spread person-to-person, others do not' },
  ],
  keyDifferences: [
    'Viral infections are far more common (80-90% of childhood illnesses) than bacterial ones',
    'Antibiotics only work for bacterial infections and are useless (and harmful) for viral ones',
    'Bacterial infections tend to cause higher, persistent fevers and more localized symptoms',
    'Viral infections usually improve on their own within 7-10 days',
    'A secondary bacterial infection can develop after a viral illness (e.g., ear infection after a cold)',
  ],
  whenToWorry: [
    'Fever lasting more than 5 days or getting worse after initial improvement',
    'Child appears very ill — lethargic, inconsolable, or not making eye contact',
    'Symptoms improve then suddenly worsen (may indicate secondary bacterial infection)',
    'Localized pain (ear, throat, abdomen) that is severe or worsening',
    'Any fever in an infant under 3 months requires immediate medical evaluation',
  ],
  sources: [
    { org: 'AAP', citation: 'AAP. Antibiotic Prescribing and Use — When Antibiotics Are and Are Not Needed.', url: 'https://www.aap.org/en/patient-care/antibiotic-resistance-and-stewardship/' },
    { org: 'CDC', citation: 'CDC. Antibiotic Use — Be Antibiotics Aware.', url: 'https://www.cdc.gov/antibiotic-use/index.html' },
    { org: 'NHS', citation: 'NHS. Antibiotics — When They Are and Are Not Needed.', url: 'https://www.nhs.uk/conditions/antibiotics/' },
  ],
};
