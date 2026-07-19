import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'fifth-disease-vs-other-rashes',
  title: 'Fifth Disease vs Other Childhood Rashes: Key Differences',
  description: 'Fifth disease (slapped cheek syndrome) is often confused with other childhood rashes like allergic reactions, scarlet fever, or viral exanthems. Its distinctive facial rash pattern helps differentiate it.',
  conditionA: { name: 'Fifth Disease (Parvovirus B19)', illnessSlug: 'fifth-disease' },
  conditionB: { name: 'Other Childhood Rashes (Allergic, Viral, Scarlet Fever)' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Parvovirus B19', conditionB: 'Various: allergies, other viruses, Group A Strep (scarlet fever)' },
    { category: 'Facial rash', conditionA: 'Bright red "slapped cheeks" appearance (both cheeks, sparing nose)', conditionB: 'Allergic: may affect whole face; Scarlet fever: flushed but spares around mouth' },
    { category: 'Body rash', conditionA: 'Lacy, reticular (net-like) rash on trunk and limbs', conditionB: 'Allergic: hives/welts; Viral: various patterns; Scarlet fever: sandpaper texture' },
    { category: 'Fever', conditionA: 'Mild or absent when rash appears (fever may precede rash by 1-2 weeks)', conditionB: 'Variable: scarlet fever has high fever; viral exanthems variable' },
    { category: 'Child wellness at rash onset', conditionA: 'Child appears well and is no longer contagious', conditionB: 'Variable: may be ill (scarlet fever) or well (viral exanthem)' },
    { category: 'Itch', conditionA: 'Mild or absent; may itch slightly', conditionB: 'Allergic: intense itch; Scarlet fever: may itch; Viral: usually not itchy' },
    { category: 'Rash duration', conditionA: '1-3 weeks; may wax and wane with heat, sun, or bathing', conditionB: 'Allergic: hours to days; Scarlet fever: 3-5 days; Viral: few days' },
    { category: 'Associated sore throat', conditionA: 'No', conditionB: 'Yes in scarlet fever; no in most viral exanthems' },
    { category: 'Contagious period', conditionA: 'Contagious BEFORE rash appears; not contagious once rash is visible', conditionB: 'Variable depending on cause' },
  ],
  keyDifferences: [
    'Fifth disease has a unique "slapped cheek" facial appearance not seen in other rashes',
    'The body rash in fifth disease is lacy/net-like; other rashes are typically solid or bumpy',
    'Fifth disease rash waxes and wanes over 1-3 weeks, especially with heat or sun exposure',
    'By the time the fifth disease rash appears, the child is no longer contagious',
    'Unlike scarlet fever, fifth disease does NOT have sore throat or "strawberry tongue"',
  ],
  whenToWorry: [
    'Child with known blood disorder (sickle cell, thalassemia) exposed to fifth disease — can cause aplastic crisis',
    'Pregnant woman exposed to a child with fifth disease (risk to fetus)',
    'Joint swelling or pain (more common in adolescents and adults with fifth disease)',
    'Widespread rash with high fever, sore throat, and ill appearance (may be scarlet fever — needs antibiotics)',
    'Rash that does not blanch when pressed (seek emergency care)',
  ],
  sources: [
    { org: 'CDC', citation: 'CDC. Parvovirus B19 and Fifth Disease.', url: 'https://www.cdc.gov/parvovirusb19/index.html' },
    { org: 'AAP', citation: 'AAP. Fifth Disease (Parvovirus B19).', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Fifth-Disease.aspx' },
    { org: 'NHS', citation: 'NHS. Slapped Cheek Syndrome.', url: 'https://www.nhs.uk/conditions/slapped-cheek-syndrome/' },
  ],
};
