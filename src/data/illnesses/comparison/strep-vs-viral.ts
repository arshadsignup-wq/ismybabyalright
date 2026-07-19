import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'strep-vs-viral',
  title: 'Strep Throat vs Viral Sore Throat: Key Differences',
  description: 'Most sore throats in children are caused by viruses and resolve on their own. Strep throat is a bacterial infection that requires antibiotics to prevent complications. Knowing the differences helps guide when to see a doctor.',
  conditionA: { name: 'Strep Throat', illnessSlug: 'strep-throat' },
  conditionB: { name: 'Viral Sore Throat' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Group A Streptococcus bacteria', conditionB: 'Viruses (adenovirus, rhinovirus, EBV, etc.)' },
    { category: 'Typical age', conditionA: '5-15 years (rare under 3)', conditionB: 'Any age' },
    { category: 'Onset', conditionA: 'Sudden, severe sore throat', conditionB: 'Gradual, often starts with mild tickle' },
    { category: 'Fever', conditionA: 'High fever (often over 101°F/38.3°C)', conditionB: 'Variable; may be low-grade or absent' },
    { category: 'Cough/runny nose', conditionA: 'Typically ABSENT (key distinguishing feature)', conditionB: 'Usually present — cough, congestion, runny nose' },
    { category: 'Throat appearance', conditionA: 'Red with white patches or pus on tonsils; petechiae on palate', conditionB: 'Red; may have blisters (if coxsackievirus/herpangina)' },
    { category: 'Lymph nodes', conditionA: 'Tender, swollen anterior neck lymph nodes', conditionB: 'May be mildly swollen' },
    { category: 'Other symptoms', conditionA: 'Headache, stomachache, sometimes sandpaper rash (scarlet fever)', conditionB: 'Hoarseness, body aches, conjunctivitis possible' },
    { category: 'Diagnosis', conditionA: 'Rapid strep test or throat culture required', conditionB: 'Clinical (no test needed)' },
    { category: 'Treatment', conditionA: 'Antibiotics (penicillin or amoxicillin) for 10 days', conditionB: 'Supportive care only (fluids, pain relief)' },
  ],
  keyDifferences: [
    'Strep throat typically has NO cough or runny nose; viral sore throats usually do',
    'Strep rarely occurs in children under 3 years old; viral sore throats affect all ages',
    'Strep has sudden onset with high fever; viral sore throats develop more gradually',
    'Strep requires antibiotic treatment to prevent rheumatic fever and kidney complications',
    'A sandpaper-like rash with sore throat (scarlet fever) strongly suggests strep',
  ],
  whenToWorry: [
    'Difficulty swallowing or drooling (possible peritonsillar abscess)',
    'Inability to open mouth fully (trismus)',
    'Sore throat with joint pain or swelling 1-5 weeks later (rheumatic fever)',
    'Dark tea-colored urine 1-2 weeks after strep (post-streptococcal glomerulonephritis)',
    'Difficulty breathing or muffled "hot potato" voice',
    'Sore throat lasting more than 7 days without improvement',
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Group A Strep — Pharyngitis (Strep Throat).', url: 'https://www.cdc.gov/groupastrep/diseases-hcp/strep-throat.html' },
    { org: 'AAP', citation: 'AAP. Strep Throat: All You Need to Know.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Strep-Throat.aspx' },
    { org: 'IDSA', citation: 'IDSA Clinical Practice Guideline for Diagnosis and Management of Group A Streptococcal Pharyngitis.', url: 'https://academic.oup.com/cid/article/55/10/e86/321183' },
  ],
};
