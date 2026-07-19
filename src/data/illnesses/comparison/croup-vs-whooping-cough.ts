import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'croup-vs-whooping-cough',
  title: 'Croup vs Whooping Cough (Pertussis): Key Differences',
  description: 'Both croup and whooping cough cause distinctive coughing in children, but they have very different causes, durations, and treatments. Whooping cough is a bacterial infection that can be life-threatening in infants.',
  conditionA: { name: 'Croup', illnessSlug: 'croup' },
  conditionB: { name: 'Whooping Cough (Pertussis)', illnessSlug: 'whooping-cough' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Viral (parainfluenza virus most common)', conditionB: 'Bacterial (Bordetella pertussis)' },
    { category: 'Typical age', conditionA: '6 months to 3 years', conditionB: 'Any age, most dangerous under 6 months' },
    { category: 'Cough sound', conditionA: 'Barking, seal-like cough', conditionB: 'Rapid coughing fits followed by a "whoop" sound on inhale' },
    { category: 'Duration', conditionA: '2-5 days of barking cough', conditionB: 'Weeks to months ("100-day cough")' },
    { category: 'Onset', conditionA: 'Sudden, often at night', conditionB: 'Gradual; starts like a mild cold for 1-2 weeks before coughing fits begin' },
    { category: 'Fever', conditionA: 'Low-grade fever common', conditionB: 'Often no fever or very mild' },
    { category: 'Vomiting', conditionA: 'Uncommon', conditionB: 'Common after coughing fits (post-tussive vomiting)' },
    { category: 'Treatment', conditionA: 'Steroids (dexamethasone), cool mist', conditionB: 'Antibiotics (azithromycin); most effective if started early' },
    { category: 'Vaccine preventable', conditionA: 'No', conditionB: 'Yes (DTaP/Tdap vaccine)' },
    { category: 'Contagiousness', conditionA: 'Moderately contagious for a few days', conditionB: 'Highly contagious for 3+ weeks without treatment' },
  ],
  keyDifferences: [
    'Croup lasts days; whooping cough lasts weeks to months',
    'Croup produces a single barking cough; whooping cough causes rapid-fire coughing fits with a "whoop" on inhalation',
    'Croup is viral and self-limited; whooping cough is bacterial and requires antibiotics',
    'Whooping cough is vaccine-preventable with DTaP; croup has no vaccine',
    'Infants with whooping cough may not whoop but instead turn blue or stop breathing (apnea)',
  ],
  whenToWorry: [
    'Baby turns blue or stops breathing during or after a coughing fit',
    'Coughing fits that last longer than 1 minute or cause vomiting',
    'Any infant under 3 months with a persistent cough needs urgent evaluation',
    'Signs of dehydration from inability to keep fluids down',
    'Stridor (harsh breathing sound) at rest in a child with croup',
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Pertussis (Whooping Cough) — Signs and Symptoms.', url: 'https://www.cdc.gov/pertussis/about/signs-symptoms.html' },
    { org: 'AAP', citation: 'AAP. Clinical Practice Guideline: Management of Croup.', url: 'https://publications.aap.org/pediatrics' },
    { org: 'WHO', citation: 'WHO. Pertussis Fact Sheet.', url: 'https://www.who.int/news-room/fact-sheets/detail/pertussis' },
  ],
};
