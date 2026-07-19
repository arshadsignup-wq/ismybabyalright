import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'hair-loss',
  title: 'Hair Loss in Babies',
  bodySystem: 'head',
  description: 'Hair loss in babies is extremely common and usually benign. Most newborns lose some or all of their birth hair in the first 6 months as it transitions from fine lanugo to mature hair. Friction from lying on their backs (positional hair loss) is also very common. True pathological hair loss in infants is rare.',
  possibleCauses: [
    { cause: 'Normal newborn hair shedding (telogen effluvium of newborn)', likelihood: 'common' },
    { cause: 'Positional/friction hair loss from lying on back', likelihood: 'common' },
    { cause: 'Cradle cap (seborrheic dermatitis) causing flaking and hair loss', likelihood: 'common' },
    { cause: 'Hair pulling or rubbing (self-soothing behavior)', likelihood: 'uncommon' },
    { cause: 'Ringworm (tinea capitis) fungal infection', likelihood: 'uncommon' },
    { cause: 'Alopecia areata (autoimmune)', likelihood: 'rare' },
    { cause: 'Nutritional deficiency (iron, zinc, biotin)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Most babies lose their birth hair gradually. The new hair may be a completely different color or texture. Bald patches on the back of the head from sleeping position are extremely common.', whenToWorry: 'Complete hair loss with scaly or red patches, hair loss with skin lesions or blisters, or hair loss associated with poor feeding and failure to thrive.' },
    { ageRange: '3-12 months', normalVariation: 'New hair grows in gradually and may look patchy or thin during the transition. Friction alopecia from lying on back typically resolves when baby sits up more.', whenToWorry: 'Circular bald patches with broken hair stubs or scaling (possible ringworm), hair loss with widespread rash, or no hair regrowth by 12 months.' },
    { ageRange: '1-3 years', normalVariation: 'Hair continues thickening through toddlerhood. Some toddlers develop a habit of twisting or pulling their own hair.', whenToWorry: 'Well-defined round patches of complete hair loss (alopecia areata), black dots on scalp with scaling and itching (ringworm), hair pulling causing noticeable bald areas, or hair loss with other symptoms like fatigue.' },
  ],
  urgencyLevels: {
    emergency: [
      'Hair loss is almost never an emergency on its own',
      'Seek emergency care only if hair loss accompanies high fever, widespread rash, or signs of serious illness',
    ],
    urgent: [
      'Rapidly spreading scaly bald patches suggesting ringworm (contagious)',
      'Hair loss with pus-filled sores on scalp (kerion)',
    ],
    sameDay: [
      'Circular bald patches with scaling or redness',
      'Hair loss with irritated or inflamed scalp',
      'Concern about hair pulling behavior in toddler',
    ],
    monitor: [
      'Normal newborn hair shedding in first 6 months',
      'Flat spot of thin hair on back of head from sleep position',
      'Mild cradle cap with some hair loss',
      'Gradual thinning during newborn-to-infant hair transition',
    ],
  },
  homeRemedies: [
    'Provide regular tummy time to reduce pressure on the back of the head',
    'Alternate the direction baby faces in the crib to reduce positional rubbing',
    'Avoid tight headbands, hats, or hair accessories that pull on hair',
    'For cradle cap, gently massage scalp with baby oil before bath, then brush with soft bristle brush',
    'Use a gentle, fragrance-free baby shampoo',
    'Do not pick at or scrape cradle cap flakes aggressively',
    'Ensure adequate nutrition; breastfed babies and formula-fed babies typically get sufficient nutrients',
    'Never apply adult hair products, essential oils, or strong treatments to baby scalp',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['cradle-cap', 'scalp-rash'],
  relatedIllnessSlugs: ['ringworm', 'cradle-cap'],
  relatedConcernSlugs: ['baby-losing-hair', 'baby-bald-spot'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Hair Loss in Babies. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Hair-Loss.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Cradle cap - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/cradle-cap/symptoms-causes/syc-20350396' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Ringworm (Tinea). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Ringworm.aspx' },
  ],
};
