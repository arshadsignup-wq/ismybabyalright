import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'eczema',
  title: 'Eczema (Atopic Dermatitis) in Babies & Toddlers',
  bodySystem: 'skin',
  description: 'Eczema (atopic dermatitis) is the most common chronic skin condition in children, affecting up to 20% of infants. It causes dry, itchy, inflamed patches of skin. In babies, it typically appears on the face and scalp first, then spreads to body creases as the child grows. While eczema cannot be cured, it can be well managed and most children outgrow it by school age.',
  possibleCauses: [
    { cause: 'Atopic dermatitis (genetic/immune dysfunction of skin barrier)', likelihood: 'common' },
    { cause: 'Irritant contact dermatitis (soaps, detergents, saliva)', likelihood: 'common' },
    { cause: 'Food allergy triggering eczema flare', likelihood: 'uncommon' },
    { cause: 'Environmental triggers (dust mites, pollen, pet dander)', likelihood: 'common' },
    { cause: 'Seborrheic dermatitis (can overlap with eczema in infants)', likelihood: 'common' },
    { cause: 'Allergic contact dermatitis (nickel, fragrances)', likelihood: 'uncommon' },
    { cause: 'Dry environment/low humidity', likelihood: 'common' },
    { cause: 'Secondary bacterial infection (infected eczema)', likelihood: 'uncommon' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Mild dry patches on cheeks or scalp are very common. Some dryness and flaking is normal in newborns as skin adapts to outside environment. Seborrheic dermatitis (cradle cap) may overlap.', whenToWorry: 'Widespread eczema with oozing, crusting, or signs of infection. Eczema preventing comfortable feeding or sleep. Tiny clustered blisters on eczema patches (eczema herpeticum — needs urgent treatment).' },
    { ageRange: '2-6 months', normalVariation: 'This is the peak onset age for infant eczema. Red, dry, itchy patches on cheeks, forehead, and scalp are classic. Mild-moderate eczema responding to moisturizing is common.', whenToWorry: 'Severe eczema unresponsive to regular moisturizing. Eczema with punched-out blisters (eczema herpeticum). Weeping, yellow-crusted areas (bacterial superinfection). Baby unable to sleep due to itching.' },
    { ageRange: '6-12 months', normalVariation: 'Eczema may spread to arms, legs, and trunk. Patches in elbow and knee creases begin. Flares with teething, viral illnesses, or weather changes are common. Mild-moderate disease managed with emollients is typical.', whenToWorry: 'Eczema not responding to prescribed treatments. Signs of infection: increased redness, warmth, pus, fever. Widespread flare with baby extremely distressed. Failure to thrive alongside eczema (food allergy concern).' },
    { ageRange: '1-3 years', normalVariation: 'Classic flexural distribution (elbow creases, behind knees, wrists, ankles). Flares and remissions are normal. Many children begin to improve between ages 2-5.', whenToWorry: 'Eczema that is worsening despite good management. Widespread infection of eczema patches. Eczema severely impacting quality of life or sleep. Suspected eczema herpeticum (rapidly spreading vesicles on eczema).' },
  ],
  urgencyLevels: {
    emergency: [
      'Rapidly spreading clustered blisters/erosions on eczema (eczema herpeticum) with fever',
      'Widespread infected eczema with high fever and child very unwell',
      'Severe swelling of face or eyelids with eczema and fever',
    ],
    urgent: [
      'Suspected eczema herpeticum (punched-out blisters/erosions)',
      'Eczema with spreading bacterial infection (increasing redness, warmth, pus, red streaks)',
      'Severe eczema preventing sleep for multiple nights with extreme distress',
    ],
    sameDay: [
      'Eczema flare not responding to usual emollient treatment',
      'Possible infected eczema (weeping, yellow crusting)',
      'New severe eczema needing diagnosis and management plan',
      'Eczema significantly affecting feeding or daily activities',
    ],
    monitor: [
      'Mild eczema responding well to regular moisturizing',
      'Known eczema with mild seasonal flare',
      'Dry patches on cheeks in young infant without distress',
      'Well-managed eczema with routine follow-up due',
    ],
  },
  homeRemedies: [
    'Moisturize liberally and frequently — apply thick fragrance-free emollient at least twice daily and after every bath',
    'Use "soak and seal" method: bathe in lukewarm water for 5-10 minutes, pat skin damp (not dry), immediately apply emollient',
    'Avoid soap — use soap-free cleansers or emollient wash instead',
    'Keep baths lukewarm and brief (5-10 minutes)',
    'Dress baby in soft, 100% cotton clothing — avoid wool and synthetic fabrics',
    'Keep nails short and consider cotton scratch mittens for infants to prevent damage from scratching',
    'Use fragrance-free laundry detergent and skip fabric softener',
    'Apply prescribed topical corticosteroids as directed for flares (do not fear appropriate use)',
    'Maintain cool room temperature — overheating worsens itch',
    'Consider wet wrapping for severe flares (apply emollient, then damp layer, then dry layer)',
  ],
  triageSlug: 'rash',
  relatedSymptomSlugs: ['red-rash', 'bumpy-rash', 'cradle-cap'],
  relatedIllnessSlugs: ['eczema', 'food-allergy', 'seborrheic-dermatitis'],
  relatedConcernSlugs: ['baby-dry-skin', 'baby-eczema-treatment', 'eczema-vs-baby-acne'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Eczema (Atopic Dermatitis) in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx' },
    { org: 'NIH', citation: 'National Institute of Allergy and Infectious Diseases. Eczema (Atopic Dermatitis).', url: 'https://www.niaid.nih.gov/diseases-conditions/eczema-atopic-dermatitis' },
    { org: 'NHS', citation: 'NHS. Atopic eczema.', url: 'https://www.nhs.uk/conditions/atopic-eczema/' },
  ],
};
