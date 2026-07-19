import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'ear-infection-vs-teething',
  title: 'Ear Infection vs Teething: Key Differences',
  description: 'Ear pulling, fussiness, and disrupted sleep are common to both ear infections and teething. Parents often struggle to tell them apart. Understanding the key differences helps you know when to call the doctor.',
  conditionA: { name: 'Ear Infection (Otitis Media)', illnessSlug: 'ear-infection' },
  conditionB: { name: 'Teething' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Bacterial or viral infection of middle ear (often follows a cold)', conditionB: 'Normal eruption of teeth through gums' },
    { category: 'Fever', conditionA: 'Often present (can be high, over 102°F/38.9°C)', conditionB: 'May cause slight temperature rise (under 100.4°F/38°C); does NOT cause high fever' },
    { category: 'Ear pulling', conditionA: 'Persistent tugging due to pain', conditionB: 'May pull ears due to referred gum discomfort, but inconsistent' },
    { category: 'Cold symptoms', conditionA: 'Usually preceded by runny nose, congestion (3-5 days prior)', conditionB: 'No preceding cold symptoms' },
    { category: 'Pain pattern', conditionA: 'Worse lying down; persistent; wakes from sleep in pain', conditionB: 'Comes and goes; worse before tooth breaks through' },
    { category: 'Appetite', conditionA: 'May refuse bottle or breast (sucking increases ear pressure)', conditionB: 'Wants to chew on everything; may refuse spoon-feeding' },
    { category: 'Drooling', conditionA: 'Not specifically increased', conditionB: 'Significantly increased drooling' },
    { category: 'Duration', conditionA: 'Worsens without treatment; lasts 7-10 days', conditionB: 'Intermittent discomfort for a few days per tooth' },
    { category: 'Ear discharge', conditionA: 'Yellow or bloody fluid from ear if eardrum ruptures', conditionB: 'Never causes ear discharge' },
    { category: 'Treatment', conditionA: 'Antibiotics often needed; pain relief', conditionB: 'Teething rings, cold washcloths, age-appropriate pain relief' },
  ],
  keyDifferences: [
    'High fever (over 100.4°F) suggests ear infection, NOT teething',
    'Ear infections almost always follow a cold; teething does not',
    'Ear infection pain is persistent and worsens; teething pain comes and goes',
    'Significant increase in drooling with chewing behavior points to teething',
    'Ear discharge (pus or fluid) is always an ear infection, never teething',
  ],
  whenToWorry: [
    'Fever over 102°F (38.9°C) — this is not teething and needs evaluation',
    'Fluid or pus draining from the ear',
    'Baby inconsolable for more than a few hours',
    'Child not responding to sounds or seems to have hearing difficulty',
    'Symptoms worsen after 2-3 days despite comfort measures',
    'Any fever in an infant under 3 months needs immediate medical evaluation',
  ],
  sources: [
    { org: 'AAP', citation: 'AAP. Ear Infections in Children.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Information.aspx' },
    { org: 'AAP', citation: 'AAP. Teething Pain — What Parents Need to Know.', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Teething-Pain.aspx' },
    { org: 'NICE', citation: 'NICE. Otitis Media (Acute): Antimicrobial Prescribing Guideline.', url: 'https://www.nice.org.uk/guidance/ng91' },
  ],
};
