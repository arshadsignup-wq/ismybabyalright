import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'gastroenteritis-vs-food-poisoning',
  title: 'Gastroenteritis (Stomach Flu) vs Food Poisoning: Key Differences',
  description: 'Both gastroenteritis and food poisoning cause vomiting and diarrhea in children. While they have similar symptoms, their causes, onset timing, and duration differ significantly.',
  conditionA: { name: 'Viral Gastroenteritis (Stomach Flu)', illnessSlug: 'gastroenteritis' },
  conditionB: { name: 'Food Poisoning (Foodborne Illness)' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Viruses (rotavirus, norovirus, adenovirus)', conditionB: 'Bacteria (Salmonella, E. coli, Staph aureus) or their toxins' },
    { category: 'Onset after exposure', conditionA: '24-72 hours incubation', conditionB: 'Rapid: 1-6 hours (toxin) or 12-48 hours (bacterial infection)' },
    { category: 'Vomiting', conditionA: 'Often starts with vomiting, then diarrhea follows', conditionB: 'Sudden, severe vomiting (especially with toxin-mediated)' },
    { category: 'Diarrhea', conditionA: 'Watery, non-bloody; may last 5-7 days', conditionB: 'May be bloody (Salmonella, E. coli); duration varies' },
    { category: 'Fever', conditionA: 'Low-grade fever common', conditionB: 'Variable; may be high with bacterial infections' },
    { category: 'Others affected', conditionA: 'Spreads through household over days (person-to-person)', conditionB: 'Multiple people sick at same time from same food source' },
    { category: 'Duration', conditionA: '3-7 days', conditionB: 'Toxin-mediated: 12-24 hours; bacterial: 3-7 days' },
    { category: 'Contagious', conditionA: 'Highly contagious via fecal-oral route', conditionB: 'Not typically contagious person-to-person' },
    { category: 'Treatment', conditionA: 'Oral rehydration; self-limited', conditionB: 'Oral rehydration; antibiotics rarely needed; self-limited in most cases' },
  ],
  keyDifferences: [
    'Food poisoning often affects multiple people who ate the same food simultaneously; gastroenteritis spreads through a household over days',
    'Toxin-mediated food poisoning starts within hours of eating; viral gastroenteritis takes 1-3 days to develop',
    'Bloody diarrhea is more suggestive of bacterial food poisoning than viral gastroenteritis',
    'Viral gastroenteritis is highly contagious person-to-person; food poisoning generally is not',
    'Toxin-mediated food poisoning resolves faster (12-24 hours) than viral gastroenteritis (3-7 days)',
  ],
  whenToWorry: [
    'Signs of dehydration: no wet diaper in 8+ hours, no tears, sunken eyes, dry mouth',
    'Bloody diarrhea or bloody vomit',
    'Severe abdominal pain (constant, not just cramping)',
    'High fever (over 102°F/38.9°C) with diarrhea',
    'Vomiting lasting more than 24 hours or unable to keep any fluids down',
    'Child is lethargic, inconsolable, or has a stiff neck',
    'Any infant under 3 months with vomiting and diarrhea needs prompt evaluation',
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Norovirus — Symptoms and Treatment.', url: 'https://www.cdc.gov/norovirus/index.html' },
    { org: 'AAP', citation: 'AAP. Treating Vomiting and Diarrhea in Children.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Treating-Vomiting.aspx' },
    { org: 'WHO', citation: 'WHO. Food Safety — Foodborne Diseases.', url: 'https://www.who.int/news-room/fact-sheets/detail/food-safety' },
  ],
};
