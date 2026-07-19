import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'viral-rash-vs-allergic-rash',
  title: 'Viral Rash vs Allergic Rash: Key Differences',
  description: 'Many childhood rashes are either viral (caused by an infection) or allergic (caused by an immune reaction to a substance). Distinguishing between them helps parents know whether their child needs monitoring, treatment, or urgent care.',
  conditionA: { name: 'Viral Rash (Viral Exanthem)' },
  conditionB: { name: 'Allergic Rash (Hives/Urticaria or Contact Dermatitis)' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Viral infection (roseola, measles, fifth disease, enterovirus, etc.)', conditionB: 'Immune reaction to allergen (food, medication, detergent, plants, etc.)' },
    { category: 'Timing', conditionA: 'Appears during or after a viral illness (often with/after fever)', conditionB: 'Appears minutes to hours after exposure to trigger' },
    { category: 'Appearance', conditionA: 'Flat or slightly raised red spots; often widespread and symmetrical', conditionB: 'Raised welts (hives) that migrate; or red, itchy patch at contact site' },
    { category: 'Itch', conditionA: 'Usually NOT itchy (or only mildly)', conditionB: 'Intensely itchy (hallmark feature)' },
    { category: 'Pattern', conditionA: 'Stays in place; evolves over days in a predictable pattern', conditionB: 'Hives: migratory (welts move around); Contact: stays at exposure site' },
    { category: 'Associated symptoms', conditionA: 'Fever, runny nose, cough, fatigue (viral illness symptoms)', conditionB: 'No fever; may have swelling, sneezing, watery eyes' },
    { category: 'Duration', conditionA: '3-7 days; resolves as illness clears', conditionB: 'Hives: hours to days (come and go); Contact: 1-3 weeks' },
    { category: 'Fever', conditionA: 'Often present (before or during rash)', conditionB: 'Absent (allergies do not cause fever)' },
    { category: 'Treatment', conditionA: 'None needed; resolves with the viral illness', conditionB: 'Antihistamines; remove allergen; topical steroids for contact; epinephrine if severe' },
  ],
  keyDifferences: [
    'Allergic rashes are intensely itchy; most viral rashes are not itchy',
    'Viral rashes are accompanied by other illness symptoms (fever, cough); allergic rashes have no fever',
    'Allergic hives are migratory (individual welts appear and disappear within hours); viral rashes stay in place',
    'Allergic rashes respond to antihistamines; viral rashes do not',
    'Viral rashes evolve in a predictable pattern over days; allergic rashes appear and resolve more quickly',
  ],
  whenToWorry: [
    'Rash with difficulty breathing, lip/tongue swelling, or drooling (anaphylaxis — call 911)',
    'Non-blanching rash (does not fade with pressure) — could be petechiae/meningococcemia (emergency)',
    'Widespread blistering or peeling skin (Stevens-Johnson syndrome — emergency)',
    'Rash with high fever and very ill-appearing child',
    'Target-shaped lesions (erythema multiforme) after medication use',
    'Rash in a child with known severe allergy after accidental exposure',
  ],
  sources: [
    { org: 'AAP', citation: 'AAP. Rashes and Skin Conditions in Children.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Hives: Overview.', url: 'https://www.aad.org/public/diseases/a-z/hives-overview' },
    { org: 'NHS', citation: 'NHS. Rashes in Babies and Children.', url: 'https://www.nhs.uk/conditions/rashes-babies-and-children/' },
  ],
};
