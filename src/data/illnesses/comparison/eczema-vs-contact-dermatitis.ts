import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'eczema-vs-contact-dermatitis',
  title: 'Eczema (Atopic Dermatitis) vs Contact Dermatitis: Key Differences',
  description: 'Both eczema and contact dermatitis cause red, itchy, inflamed skin. Eczema is a chronic condition related to skin barrier dysfunction, while contact dermatitis is a reaction to a specific external substance.',
  conditionA: { name: 'Eczema (Atopic Dermatitis)', illnessSlug: 'eczema' },
  conditionB: { name: 'Contact Dermatitis' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Genetic skin barrier dysfunction + immune dysregulation', conditionB: 'Direct contact with irritant or allergen (diaper chemicals, nickel, poison ivy, detergent)' },
    { category: 'Pattern', conditionA: 'Chronic, relapsing-remitting (flares and calm periods)', conditionB: 'Occurs after specific exposure; resolves when trigger removed' },
    { category: 'Location', conditionA: 'Typical sites: cheeks (babies), elbow/knee creases (older children)', conditionB: 'Exactly where the substance touched the skin (sharp borders)' },
    { category: 'Borders', conditionA: 'Poorly defined, blending into surrounding skin', conditionB: 'Well-defined edges matching the shape of contact (e.g., watch band, diaper area)' },
    { category: 'Age of onset', conditionA: 'Usually before age 5 (often infancy)', conditionB: 'Any age, depending on exposure' },
    { category: 'Family history', conditionA: 'Strong genetic link (family history of eczema, asthma, allergies)', conditionB: 'Not genetically linked' },
    { category: 'Triggers', conditionA: 'Multiple: dry air, sweat, stress, certain fabrics, allergens', conditionB: 'Specific contactant (identifiable with patch testing)' },
    { category: 'Appearance', conditionA: 'Dry, scaly, thickened (lichenified) skin', conditionB: 'Red, possibly blistered, weepy, or scaly at contact site' },
    { category: 'Treatment', conditionA: 'Long-term: daily moisturizing, topical steroids for flares, trigger avoidance', conditionB: 'Remove the trigger; topical steroids; cool compresses; resolves fully' },
  ],
  keyDifferences: [
    'Contact dermatitis has sharp borders matching the shape of exposure; eczema has blurred edges',
    'Eczema is chronic and recurring; contact dermatitis resolves completely once the trigger is removed',
    'Eczema appears in typical age-related locations; contact dermatitis appears wherever the substance touched',
    'Eczema runs in families with allergies/asthma; contact dermatitis has no genetic component',
    'Contact dermatitis can be "cured" by avoiding the trigger; eczema requires ongoing management',
  ],
  whenToWorry: [
    'Signs of skin infection: increasing redness, warmth, swelling, pus, or honey-colored crusting',
    'Severe blistering or skin breakdown (severe contact reaction)',
    'Rash around eyes or genitals causing significant distress',
    'Widespread reaction that is not responding to over-the-counter treatment',
    'Contact dermatitis from a plant causing difficulty breathing (inhaled allergen)',
    'Eczema severely disrupting sleep or daily function despite treatment',
  ],
  sources: [
    { org: 'AAD', citation: 'American Academy of Dermatology. Atopic Dermatitis vs Contact Dermatitis.', url: 'https://www.aad.org/public/diseases/eczema/types' },
    { org: 'AAP', citation: 'AAP. Eczema in Children: What Parents Need to Know.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx' },
    { org: 'NICE', citation: 'NICE. Atopic Eczema in Under 12s: Diagnosis and Management.', url: 'https://www.nice.org.uk/guidance/cg57' },
  ],
};
