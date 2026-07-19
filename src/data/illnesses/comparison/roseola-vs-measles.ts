import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'roseola-vs-measles',
  title: 'Roseola vs Measles: Key Differences',
  description: 'Both roseola and measles cause high fever followed by a rash in children. However, measles is a serious, vaccine-preventable disease while roseola is a benign illness that nearly all children experience.',
  conditionA: { name: 'Roseola (Sixth Disease)', illnessSlug: 'roseola' },
  conditionB: { name: 'Measles (Rubeola)', illnessSlug: 'measles' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Human herpesvirus 6 (HHV-6)', conditionB: 'Measles virus (paramyxovirus)' },
    { category: 'Typical age', conditionA: '6 months to 2 years', conditionB: 'Any unvaccinated child (peak: 1-5 years)' },
    { category: 'Fever', conditionA: 'High (often 103-105°F) for 3-5 days, then fever breaks', conditionB: 'High fever that worsens as rash appears' },
    { category: 'Rash timing', conditionA: 'Rash appears AFTER fever breaks (child feels better)', conditionB: 'Rash appears ON DAY 3-5 of fever (child is still sick)' },
    { category: 'Rash appearance', conditionA: 'Pink, flat or slightly raised spots; starts on trunk', conditionB: 'Red, flat blotchy spots that merge; starts on face/hairline' },
    { category: 'Rash spread', conditionA: 'Starts on trunk, may spread to face/limbs; lasts 1-2 days', conditionB: 'Starts on face, spreads downward to trunk then limbs over 3 days' },
    { category: 'Child wellness when rash appears', conditionA: 'Child appears well and happy once rash appears', conditionB: 'Child appears very ill when rash appears' },
    { category: 'Other symptoms', conditionA: 'May have mild runny nose; otherwise well between fevers', conditionB: 'Cough, conjunctivitis (red eyes), coryza (runny nose) — the "3 Cs"' },
    { category: 'Koplik spots', conditionA: 'Absent', conditionB: 'White spots inside cheeks (pathognomonic for measles)' },
    { category: 'Severity', conditionA: 'Benign; self-limited', conditionB: 'Serious; can cause pneumonia, encephalitis, death' },
    { category: 'Vaccine', conditionA: 'No vaccine (not needed — benign illness)', conditionB: 'MMR vaccine (highly effective prevention)' },
  ],
  keyDifferences: [
    'In roseola, the child feels BETTER when the rash appears; in measles, the child is SICKER',
    'Measles has the "3 Cs" (cough, conjunctivitis, coryza); roseola typically does not',
    'Roseola rash starts on trunk; measles rash starts on face and spreads downward',
    'Measles causes Koplik spots (white dots inside cheeks); roseola does not',
    'Roseola is benign; measles can cause life-threatening complications',
  ],
  whenToWorry: [
    'Rash with persistent high fever and red/watery eyes, cough, runny nose (suspect measles — contact doctor immediately)',
    'Febrile seizure during high fever phase (common in roseola; usually benign but needs evaluation)',
    'Child appears very ill, lethargic, or has difficulty breathing',
    'Known exposure to measles in an unvaccinated child',
    'Rash that does not blanch (could indicate more serious condition)',
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Measles (Rubeola) — Signs and Symptoms.', url: 'https://www.cdc.gov/measles/symptoms/signs-symptoms.html' },
    { org: 'AAP', citation: 'AAP. Roseola (HHV-6).', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Roseola.aspx' },
    { org: 'WHO', citation: 'WHO. Measles Fact Sheet.', url: 'https://www.who.int/news-room/fact-sheets/detail/measles' },
  ],
};
