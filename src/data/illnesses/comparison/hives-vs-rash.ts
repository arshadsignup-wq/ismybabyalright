import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'hives-vs-rash',
  title: 'Hives vs Other Rashes: Key Differences',
  description: 'Hives (urticaria) are a specific type of rash caused by allergic reactions or viral triggers. They look and behave differently from other common childhood rashes like viral exanthems, eczema, or contact dermatitis.',
  conditionA: { name: 'Hives (Urticaria)' },
  conditionB: { name: 'Other Common Rashes (Viral, Eczema, Contact)' },
  comparisonPoints: [
    { category: 'Appearance', conditionA: 'Raised, red or pink welts (wheals) with pale centers', conditionB: 'Varies: flat red spots (viral), dry scaly patches (eczema), blisters (contact)' },
    { category: 'Key feature', conditionA: 'Individual welts come and go within 24 hours; migratory', conditionB: 'Rash stays in same location and evolves over days' },
    { category: 'Shape', conditionA: 'Round, oval, or irregular; can merge into large patches', conditionB: 'Varies widely by type' },
    { category: 'Itch', conditionA: 'Intensely itchy', conditionB: 'Variable — eczema itches; many viral rashes do not' },
    { category: 'Blanching', conditionA: 'Blanches completely when pressed (turns white)', conditionB: 'Most blanch; petechiae/purpura do NOT blanch (emergency)' },
    { category: 'Duration', conditionA: 'Individual welts last minutes to hours; episode may last days', conditionB: 'Days to weeks depending on type' },
    { category: 'Cause', conditionA: 'Allergic reaction (food, medication) or viral trigger; often idiopathic', conditionB: 'Varies: viruses, irritants, immune conditions, infections' },
    { category: 'Treatment', conditionA: 'Antihistamines (cetirizine, diphenhydramine); epinephrine if anaphylaxis', conditionB: 'Depends on type — moisturizers, steroids, antivirals, or none' },
    { category: 'Swelling', conditionA: 'May have angioedema (swelling of lips, eyes, hands)', conditionB: 'Localized swelling uncommon except with contact dermatitis' },
  ],
  keyDifferences: [
    'Hives are migratory — individual welts disappear and reappear in new locations within hours',
    'Hives are always raised wheals; other rashes can be flat, bumpy, scaly, or blistered',
    'Hives respond rapidly to antihistamines; other rashes do not',
    'Hives can signal a serious allergic reaction; most other childhood rashes are benign',
    'Drawing a circle around a hive will show it disappears from that spot within hours',
  ],
  whenToWorry: [
    'Hives with difficulty breathing, throat tightness, or tongue swelling (anaphylaxis — use epinephrine and call 911)',
    'Hives with vomiting or dizziness after eating or medication (anaphylaxis)',
    'A rash that does NOT blanch when pressed (could be petechiae — seek emergency care)',
    'Hives lasting more than 6 weeks (chronic urticaria — needs medical evaluation)',
    'Widespread rash with high fever and ill appearance in a child',
  ],
  sources: [
    { org: 'AAP', citation: 'AAP. Hives (Urticaria) in Children.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Hives.aspx' },
    { org: 'ACAAI', citation: 'American College of Allergy, Asthma & Immunology. Hives (Urticaria).', url: 'https://acaai.org/allergies/allergic-conditions/skin-allergy/hives/' },
    { org: 'NHS', citation: 'NHS. Hives.', url: 'https://www.nhs.uk/conditions/hives/' },
  ],
};
