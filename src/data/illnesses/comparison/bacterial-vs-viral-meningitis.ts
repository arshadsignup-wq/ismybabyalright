import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'bacterial-vs-viral-meningitis',
  title: 'Bacterial vs Viral Meningitis: Key Differences',
  description: 'Meningitis is inflammation of the membranes surrounding the brain and spinal cord. Bacterial meningitis is a life-threatening emergency requiring immediate treatment, while viral meningitis is usually self-limited.',
  conditionA: { name: 'Bacterial Meningitis', illnessSlug: 'bacterial-meningitis' },
  conditionB: { name: 'Viral Meningitis', illnessSlug: 'viral-meningitis' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Bacteria (Group B Strep in newborns; Strep pneumoniae, Neisseria meningitidis in older children)', conditionB: 'Viruses (enteroviruses most common; also HSV, mumps)' },
    { category: 'Severity', conditionA: 'Life-threatening emergency — can be fatal within hours', conditionB: 'Usually mild and self-limited' },
    { category: 'Onset', conditionA: 'Rapid deterioration over hours', conditionB: 'Gradual onset over 1-2 days' },
    { category: 'Fever', conditionA: 'High fever, often with rigors', conditionB: 'Moderate fever' },
    { category: 'Appearance', conditionA: 'Very ill, toxic-looking; may be confused or difficult to rouse', conditionB: 'Ill but usually alert and responsive' },
    { category: 'Headache/neck stiffness', conditionA: 'Severe headache, marked neck stiffness, photophobia', conditionB: 'Moderate headache, mild neck stiffness' },
    { category: 'Rash', conditionA: 'Petechial or purpuric rash (non-blanching) — medical emergency', conditionB: 'Usually no rash, or mild non-specific rash' },
    { category: 'In infants', conditionA: 'Bulging fontanelle, high-pitched cry, poor feeding, lethargy', conditionB: 'Irritability, poor feeding, but usually less dramatic' },
    { category: 'Treatment', conditionA: 'IV antibiotics immediately (before test results if suspected)', conditionB: 'Supportive care; HSV meningitis needs antivirals' },
    { category: 'Outcome', conditionA: 'Can cause permanent brain damage, hearing loss, or death if delayed', conditionB: 'Full recovery expected within 7-10 days' },
    { category: 'Vaccine prevention', conditionA: 'Partially: Hib, pneumococcal, meningococcal vaccines', conditionB: 'No vaccine for most causes' },
  ],
  keyDifferences: [
    'Bacterial meningitis causes rapid deterioration over hours; viral meningitis progresses more slowly',
    'A non-blanching petechial/purpuric rash with fever is a red flag for bacterial meningitis',
    'Children with bacterial meningitis appear "toxic" — lethargic, confused, or unresponsive',
    'Bacterial meningitis requires immediate IV antibiotics; viral meningitis needs only supportive care',
    'Bacterial meningitis can be fatal or cause permanent disability; viral meningitis almost always resolves fully',
  ],
  whenToWorry: [
    'Non-blanching rash (does not fade when glass pressed against it) with fever — call 911 immediately',
    'Infant with bulging fontanelle, high-pitched cry, or extreme lethargy',
    'Severe headache with neck stiffness, light sensitivity, and high fever',
    'Rapid deterioration — child becoming less responsive over hours',
    'Seizures with fever and neck stiffness',
    'Any concern for meningitis warrants IMMEDIATE emergency evaluation — do not wait',
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Bacterial Meningitis.', url: 'https://www.cdc.gov/meningitis/bacterial.html' },
    { org: 'CDC', citation: 'CDC. Viral Meningitis.', url: 'https://www.cdc.gov/meningitis/viral.html' },
    { org: 'AAP', citation: 'AAP. Meningitis in Children.', url: 'https://www.healthychildren.org/English/health-issues/conditions/head-neck-nervous-system/Pages/Meningitis.aspx' },
    { org: 'WHO', citation: 'WHO. Meningitis Fact Sheet.', url: 'https://www.who.int/news-room/fact-sheets/detail/meningitis' },
  ],
};
