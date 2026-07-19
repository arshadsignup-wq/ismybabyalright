import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'cradle-cap',
  title: 'Cradle Cap (Seborrheic Dermatitis) in Babies',
  bodySystem: 'skin',
  description: 'Cradle cap (infantile seborrheic dermatitis) is an extremely common, harmless condition causing thick, yellowish, greasy scales or crusts on the scalp. It typically appears in the first few weeks to months of life and usually resolves on its own by 6-12 months. It is not caused by poor hygiene or allergies, and it is not contagious.',
  possibleCauses: [
    { cause: 'Infantile seborrheic dermatitis (overactive sebaceous glands)', likelihood: 'common' },
    { cause: 'Malassezia yeast overgrowth on skin', likelihood: 'common' },
    { cause: 'Maternal hormonal influence on oil glands', likelihood: 'common' },
    { cause: 'Eczema (atopic dermatitis) overlap', likelihood: 'uncommon' },
    { cause: 'Psoriasis (rare in infancy, but can present similarly)', likelihood: 'rare' },
    { cause: 'Fungal infection (tinea capitis)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Very common onset age. Thick yellowish-white scales or flakes on the scalp are typical. Can extend to eyebrows, behind ears, and skin folds. Not itchy or uncomfortable for baby.', whenToWorry: 'Scales that are very red, oozing, or appear infected. Cradle cap spreading extensively to body with intense redness. Baby seems distressed or itchy (may be eczema instead). Scales with hair loss in patches (fungal concern).' },
    { ageRange: '2-6 months', normalVariation: 'Cradle cap typically peaks around 3 months and begins to improve. Scales may be thick but baby remains unbothered. Can spread mildly to face, neck folds, and behind ears.', whenToWorry: 'Cradle cap worsening significantly or spreading to large body areas. Red, weeping, or cracking skin beneath scales. Baby scratching or distressed (consider eczema overlap). Not improving at all by 6 months.' },
    { ageRange: '6-12 months', normalVariation: 'Most cases resolve spontaneously by this age. Mild residual flaking is normal. Some children have both cradle cap and eczema.', whenToWorry: 'Persistent or worsening cradle cap beyond 12 months. Hair loss in affected areas. Signs of secondary infection. Severe redness or discomfort.' },
    { ageRange: '1-3 years', normalVariation: 'Most cradle cap has resolved. Some children may have mild dandruff-like flaking.', whenToWorry: 'New onset or recurrence of thick scalp scales in toddler (consider other diagnoses like psoriasis or tinea). Scales with hair loss, itching, or broken hairs (ringworm concern).' },
  ],
  urgencyLevels: {
    emergency: [
      'Widespread redness and skin peeling beyond scalp with fever and baby appearing unwell (rare but consider other conditions)',
    ],
    urgent: [
      'Cradle cap with signs of bacterial infection: pus, spreading redness, warmth, fever',
      'Rapidly spreading seborrheic dermatitis covering most of the body (Leiner disease — very rare)',
    ],
    sameDay: [
      'Cradle cap with significant redness and oozing beneath scales',
      'Possible fungal infection (scaly patches with hair loss)',
      'Cradle cap extending extensively beyond scalp with baby appearing uncomfortable',
    ],
    monitor: [
      'Typical cradle cap (thick scales, not bothered) — can manage at home',
      'Mild cradle cap responding to oil and gentle brushing',
      'Cradle cap that is stable and gradually improving',
      'Light flaking on scalp without redness in well baby',
    ],
  },
  homeRemedies: [
    'Apply natural oil (coconut oil, olive oil, or mineral oil) to scalp 15-20 minutes before bath to soften scales',
    'Gently massage scalp with fingers or soft-bristled brush to loosen flakes after oil application',
    'Wash scalp daily with mild baby shampoo during active cradle cap',
    'Use a fine-toothed comb or soft cradle cap brush after shampooing to lift loosened scales',
    'Do NOT pick or scratch scales forcefully as this can cause irritation or bleeding',
    'If persistent, try a medicated shampoo with ketoconazole (ask pharmacist for age-appropriate product)',
    'After scales clear, reduce washing to every 2-3 days to prevent recurrence',
    'Keep scalp moisturized but not overly oily between washes',
  ],
  relatedSymptomSlugs: ['eczema', 'red-rash', 'peeling-skin'],
  relatedIllnessSlugs: ['seborrheic-dermatitis', 'eczema', 'tinea-capitis'],
  relatedConcernSlugs: ['cradle-cap-treatment', 'baby-flaky-scalp', 'eczema-vs-baby-acne'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cradle Cap (Seborrheic Dermatitis) in Infants. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Cradle-Cap.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Cradle cap - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/cradle-cap/symptoms-causes/syc-20350396' },
    { org: 'NHS', citation: 'NHS. Cradle cap.', url: 'https://www.nhs.uk/conditions/cradle-cap/' },
  ],
};
