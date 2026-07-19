import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'cold-vs-allergies',
  title: 'Cold vs Allergies: Key Differences',
  description: 'Colds and allergies can look very similar in children — both cause runny noses, sneezing, and congestion. Knowing the difference helps avoid unnecessary treatment and identify when allergy management is needed.',
  conditionA: { name: 'Common Cold', illnessSlug: 'common-cold' },
  conditionB: { name: 'Allergies (Allergic Rhinitis)' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Viral infection (200+ viruses, rhinovirus most common)', conditionB: 'Immune reaction to allergens (pollen, dust mites, pet dander)' },
    { category: 'Onset', conditionA: 'Gradual over 1-2 days', conditionB: 'Sudden when exposed to allergen' },
    { category: 'Duration', conditionA: '7-10 days', conditionB: 'Weeks to months (as long as exposure continues)' },
    { category: 'Nasal discharge', conditionA: 'Starts clear, may turn yellow/green', conditionB: 'Always clear and watery' },
    { category: 'Itching', conditionA: 'Uncommon', conditionB: 'Very common — itchy nose, eyes, throat, roof of mouth' },
    { category: 'Fever', conditionA: 'Low-grade fever possible', conditionB: 'Never causes fever' },
    { category: 'Eyes', conditionA: 'May be watery', conditionB: 'Red, itchy, watery (allergic conjunctivitis) very common' },
    { category: 'Sneezing pattern', conditionA: 'Occasional', conditionB: 'Frequent, often in rapid bursts' },
    { category: 'Time pattern', conditionA: 'Any time of year, resolves in 7-10 days', conditionB: 'Seasonal pattern or triggered by specific environments' },
    { category: 'Contagious', conditionA: 'Yes — spreads through contact and droplets', conditionB: 'No — not contagious' },
  ],
  keyDifferences: [
    'Allergies never cause fever; colds sometimes do',
    'Allergies cause significant itching (nose, eyes, throat); colds rarely itch',
    'Cold symptoms resolve in 7-10 days; allergy symptoms persist as long as exposure continues',
    'Allergy nasal discharge stays clear; cold discharge often turns colored',
    'Allergies often show a seasonal or environmental pattern; colds occur randomly',
  ],
  whenToWorry: [
    'Symptoms lasting more than 10-14 days without improvement (may be sinusitis or allergies, not just a cold)',
    'Wheezing or difficulty breathing (allergies can trigger asthma)',
    'Persistent ear pain or hearing difficulty',
    'Allergies significantly affecting sleep, feeding, or daily activities',
    'Facial swelling or difficulty breathing after exposure (possible anaphylaxis — call 911)',
  ],
  sources: [
    { org: 'AAP', citation: 'AAP. Is It a Cold or Allergies?', url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/' },
    { org: 'ACAAI', citation: 'American College of Allergy, Asthma & Immunology. Childrens Allergies.', url: 'https://acaai.org/allergies/allergies-101/who-gets-allergies/children/' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Cold or Allergy: Which Is It?', url: 'https://www.mayoclinic.org/diseases-conditions/common-cold/expert-answers/common-cold/faq-20057857' },
  ],
};
