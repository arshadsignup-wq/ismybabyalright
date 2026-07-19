import type { IllnessComparison } from '../types';

export const comparison: IllnessComparison = {
  slug: 'impetigo-vs-eczema',
  title: 'Impetigo vs Eczema: Key Differences',
  description: 'Impetigo and eczema can look similar — both cause red, crusty patches on the skin. However, impetigo is a contagious bacterial infection that needs antibiotics, while eczema is a chronic inflammatory condition. Eczema can also become infected with impetigo (impetiginized eczema).',
  conditionA: { name: 'Impetigo', illnessSlug: 'impetigo' },
  conditionB: { name: 'Eczema (Atopic Dermatitis)', illnessSlug: 'eczema' },
  comparisonPoints: [
    { category: 'Cause', conditionA: 'Bacterial infection (Staph aureus or Group A Strep)', conditionB: 'Chronic immune/skin barrier dysfunction (genetic + triggers)' },
    { category: 'Appearance', conditionA: 'Honey-colored or golden crusts on red base; may have fluid-filled blisters', conditionB: 'Dry, red, rough, scaly patches; may crack or weep when severe' },
    { category: 'Contagious', conditionA: 'Highly contagious via direct contact or shared items', conditionB: 'Never contagious' },
    { category: 'Location', conditionA: 'Face (around nose and mouth), hands, areas of broken skin', conditionB: 'Creases (elbows, knees, wrists); cheeks in babies' },
    { category: 'Itch', conditionA: 'Mildly itchy', conditionB: 'Intensely itchy, especially at night' },
    { category: 'Onset', conditionA: 'Develops over days; often starts at site of break in skin', conditionB: 'Chronic; flares triggered by irritants, allergens, stress, weather' },
    { category: 'Spread', conditionA: 'Spreads to new areas by touching/scratching (auto-inoculation)', conditionB: 'Does not spread by contact; patches appear in typical locations' },
    { category: 'Treatment', conditionA: 'Topical or oral antibiotics', conditionB: 'Moisturizers, topical steroids, avoiding triggers' },
    { category: 'Crust color', conditionA: 'Golden/honey-colored crust (classic sign)', conditionB: 'White/silver flaking or clear weeping (no golden crust unless infected)' },
  ],
  keyDifferences: [
    'Honey-colored (golden) crusting is the hallmark of impetigo; eczema has dry/silvery scaling',
    'Impetigo is contagious and spreads rapidly to others; eczema is never contagious',
    'Impetigo clears with antibiotics; eczema is chronic and managed long-term',
    'Impetigo often starts near the nose/mouth; eczema favors skin creases',
    'Eczema is a risk factor for impetigo — broken, scratched eczema skin is easily infected',
  ],
  whenToWorry: [
    'Golden/honey-colored crusting on eczema patches (likely secondary impetigo infection — needs antibiotics)',
    'Rapidly spreading red, warm, swollen area (possible cellulitis)',
    'Fever with skin infection (suggests deeper infection)',
    'Painful, pus-filled blisters (bullous impetigo)',
    'Eczema not improving with usual treatment (consider secondary infection)',
    'Dark or tea-colored urine 1-2 weeks after impetigo (rare kidney complication)',
  ],
  sources: [
    { org: 'AAP', citation: 'AAP. Impetigo in Children.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Impetigo.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Impetigo: Overview.', url: 'https://www.aad.org/public/diseases/a-z/impetigo-overview' },
    { org: 'NICE', citation: 'NICE. Impetigo: Antimicrobial Prescribing.', url: 'https://www.nice.org.uk/guidance/ng153' },
  ],
};
