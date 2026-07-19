import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'hfm-vs-herpangina',
  title: 'Hand, Foot & Mouth Disease vs Herpangina: Key Differences',
  description: 'Hand, foot, and mouth disease (HFMD) and herpangina are both caused by the same family of viruses (enteroviruses/coxsackieviruses) and share overlapping features. However, they differ in where sores appear and their overall presentation.',
  conditionA: { name: 'Hand, Foot & Mouth Disease (HFMD)', illnessSlug: 'hand-foot-mouth' },
  conditionB: { name: 'Herpangina', illnessSlug: 'herpangina' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Coxsackievirus A16 (most common), enterovirus 71', conditionB: 'Coxsackievirus A (various serotypes), other enteroviruses' },
    { category: 'Typical age', conditionA: 'Under 5 years', conditionB: 'Under 5 years' },
    { category: 'Mouth sores location', conditionA: 'Tongue, gums, inside cheeks, palate — widespread in mouth', conditionB: 'Back of throat and soft palate only (more posterior)' },
    { category: 'Skin involvement', conditionA: 'Blisters/spots on hands, feet, buttocks, sometimes legs', conditionB: 'No skin blisters (mouth/throat only)' },
    { category: 'Fever', conditionA: 'Moderate fever (101-103°F) for 2-3 days', conditionB: 'Often higher fever (103-106°F), sudden onset' },
    { category: 'Sore throat pain', conditionA: 'Moderate; spread throughout mouth', conditionB: 'Severe throat pain (sores concentrated in back of throat)' },
    { category: 'Drooling/refusal to eat', conditionA: 'Common due to mouth sores', conditionB: 'Very common due to severe throat pain' },
    { category: 'Duration', conditionA: '7-10 days total', conditionB: '3-6 days (shorter duration)' },
    { category: 'Season', conditionA: 'Summer and fall', conditionB: 'Summer and fall' },
    { category: 'Nail changes', conditionA: 'Nail shedding may occur 3-6 weeks later (benign)', conditionB: 'Not typically associated with nail changes' },
  ],
  keyDifferences: [
    'HFMD causes blisters on hands, feet, and buttocks; herpangina is limited to the mouth/throat',
    'Herpangina sores are concentrated in the BACK of the throat; HFMD sores are widespread throughout the mouth',
    'Herpangina often causes higher fever with more abrupt onset',
    'HFMD may cause nail peeling weeks after recovery; herpangina does not',
    'Both are caused by related viruses and are treated the same way (supportive care)',
  ],
  whenToWorry: [
    'Unable to drink fluids for more than 12 hours or signs of dehydration (no tears, dry mouth, decreased urine)',
    'Fever lasting more than 5 days',
    'Headache with stiff neck and vomiting (rare complication: viral meningitis)',
    'Difficulty breathing or excessive drooling with inability to swallow',
    'Child is unusually lethargic, confused, or difficult to wake',
    'Widespread blistering beyond hands/feet/mouth (may be different condition)',
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Hand, Foot, and Mouth Disease (HFMD).', url: 'https://www.cdc.gov/hand-foot-mouth/index.html' },
    { org: 'AAP', citation: 'AAP. Hand, Foot, and Mouth Disease.', url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Hand-Foot-and-Mouth-Disease.aspx' },
    { org: 'UpToDate', citation: 'UpToDate. Herpangina: Clinical Features and Diagnosis.', url: 'https://www.uptodate.com/contents/herpangina' },
  ],
};
