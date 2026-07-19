import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'eczema-vs-ringworm',
  title: 'Eczema vs Ringworm: Key Differences',
  description: 'Eczema and ringworm can both cause itchy, red, scaly patches on the skin. However, eczema is a chronic inflammatory condition while ringworm is a contagious fungal infection requiring antifungal treatment.',
  conditionA: { name: 'Eczema (Atopic Dermatitis)', illnessSlug: 'eczema' },
  conditionB: { name: 'Ringworm (Tinea)', illnessSlug: 'ringworm' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Chronic immune/skin barrier condition (genetic + environmental triggers)', conditionB: 'Fungal infection (dermatophytes)' },
    { category: 'Appearance', conditionA: 'Dry, rough, scaly patches; may weep or crust when flaring', conditionB: 'Ring-shaped patch with raised, scaly border and clearer center' },
    { category: 'Shape', conditionA: 'Irregular, poorly defined edges', conditionB: 'Circular or oval with distinct ring pattern' },
    { category: 'Location', conditionA: 'Creases (elbows, knees, neck); cheeks in babies', conditionB: 'Anywhere on body; scalp, trunk, and limbs common' },
    { category: 'Number of patches', conditionA: 'Usually multiple patches, often symmetrical', conditionB: 'Often starts as a single patch, may slowly spread' },
    { category: 'Contagious', conditionA: 'No — never contagious', conditionB: 'Yes — spreads via skin contact, shared items, or animals' },
    { category: 'Itch', conditionA: 'Intense, widespread itching (especially at night)', conditionB: 'Mildly to moderately itchy' },
    { category: 'Treatment', conditionA: 'Moisturizers, topical steroids, avoiding triggers', conditionB: 'Antifungal cream (clotrimazole, terbinafine) for 2-4 weeks' },
    { category: 'Age of onset', conditionA: 'Usually starts in infancy (before age 5)', conditionB: 'Common in school-age children' },
  ],
  keyDifferences: [
    'Ringworm has a distinctive ring shape with clear center; eczema patches are irregular',
    'Ringworm is contagious; eczema is never contagious',
    'Eczema is chronic and recurring; ringworm clears completely with antifungal treatment',
    'Eczema occurs in typical locations (creases, cheeks); ringworm can appear anywhere',
    'Applying steroid cream to ringworm (mistaking it for eczema) makes the fungal infection worse',
  ],
  whenToWorry: [
    'Ring-shaped rash spreading despite moisturizer use (likely ringworm, not eczema — needs antifungal)',
    'Signs of secondary bacterial infection: honey-colored crusting, pus, increasing redness or warmth',
    'Rash on the scalp with hair loss (scalp ringworm needs oral antifungal)',
    'Widespread rash that is not responding to treatment within 2 weeks',
    'Fever accompanying the skin rash',
  ],
  sources: [
    { org: 'AAP', citation: 'AAP. Eczema (Atopic Dermatitis) in Children.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Ringworm: Overview.', url: 'https://www.aad.org/public/diseases/a-z/ringworm-overview' },
    { org: 'CDC', citation: 'CDC. Ringworm Information for Healthcare Providers.', url: 'https://www.cdc.gov/fungal/diseases/ringworm/' },
  ],
};
