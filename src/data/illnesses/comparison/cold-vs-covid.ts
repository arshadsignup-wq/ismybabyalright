import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'cold-vs-covid',
  title: 'Common Cold vs COVID-19 in Children: Key Differences',
  description: 'Colds and COVID-19 share many symptoms in children, making them difficult to distinguish without testing. Understanding key differences helps parents know when to test and when to seek care.',
  conditionA: { name: 'Common Cold', illnessSlug: 'common-cold' },
  conditionB: { name: 'COVID-19', illnessSlug: 'covid' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Rhinovirus (most common), 200+ viruses', conditionB: 'SARS-CoV-2 virus' },
    { category: 'Onset', conditionA: 'Gradual over 1-2 days', conditionB: 'Can be gradual or sudden' },
    { category: 'Fever', conditionA: 'Usually low-grade or absent', conditionB: 'Often higher fever, may persist 3-5 days' },
    { category: 'Loss of taste/smell', conditionA: 'Rare (only from nasal congestion)', conditionB: 'Possible though less common in young children than adults' },
    { category: 'GI symptoms', conditionA: 'Uncommon', conditionB: 'Diarrhea, vomiting, and abdominal pain more common' },
    { category: 'Duration', conditionA: '7-10 days', conditionB: '5-14 days; some have prolonged fatigue' },
    { category: 'Severity in children', conditionA: 'Usually mild', conditionB: 'Usually mild but can rarely cause MIS-C weeks later' },
    { category: 'Diagnosis', conditionA: 'Clinical (no testing needed)', conditionB: 'Rapid antigen or PCR test' },
    { category: 'Isolation needed', conditionA: 'No formal isolation (stay home if sick)', conditionB: 'Follow current public health guidance for isolation' },
    { category: 'Vaccine available', conditionA: 'No', conditionB: 'Yes (COVID vaccine available for children 6 months+)' },
  ],
  keyDifferences: [
    'COVID is more likely to cause GI symptoms (vomiting, diarrhea) than a common cold',
    'Loss of taste or smell is a distinguishing feature of COVID (though less common in kids)',
    'COVID can rarely lead to MIS-C (multi-system inflammatory syndrome) 2-6 weeks after infection',
    'A cold almost never causes significant fatigue; COVID may cause fatigue lasting beyond acute illness',
    'Testing is the only reliable way to distinguish them in children since symptoms overlap significantly',
  ],
  whenToWorry: [
    'Difficulty breathing, rapid breathing, or chest pain',
    'Persistent high fever (over 104°F/40°C) or fever beyond 5 days',
    'New rash, red eyes, swollen hands/feet, or abdominal pain 2-6 weeks after COVID (signs of MIS-C)',
    'Inability to keep fluids down or signs of dehydration',
    'Child is confused, excessively sleepy, or difficult to wake',
    'Any infant under 3 months with fever needs immediate medical evaluation regardless of suspected cause',
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. COVID-19 in Children and Teens.', url: 'https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/children.html' },
    { org: 'AAP', citation: 'AAP. COVID-19 Guidance for Pediatric Care.', url: 'https://www.aap.org/en/pages/2019-novel-coronavirus-covid-19-infections/' },
    { org: 'WHO', citation: 'WHO. Coronavirus Disease (COVID-19): Children and Adolescents.', url: 'https://www.who.int/news-room/questions-and-answers/item/coronavirus-disease-covid-19-children' },
  ],
};
