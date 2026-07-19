import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'ringworm',
  title: 'Ringworm (Tinea) in Babies & Toddlers',
  bodySystem: 'skin',
  description: 'Ringworm is a common fungal skin infection (not caused by a worm) that creates ring-shaped, scaly, red patches with clearer centers. In babies and toddlers, it can affect the body (tinea corporis), scalp (tinea capitis), or feet (tinea pedis). It is contagious and spread through direct contact with infected people, animals, or contaminated surfaces. Treatment with antifungal medication is needed.',
  possibleCauses: [
    { cause: 'Tinea corporis (body ringworm — dermatophyte fungal infection)', likelihood: 'common' },
    { cause: 'Tinea capitis (scalp ringworm)', likelihood: 'common' },
    { cause: 'Contact with infected person or animal (cats, dogs, guinea pigs)', likelihood: 'common' },
    { cause: 'Contact with contaminated surfaces (shared towels, mats)', likelihood: 'common' },
    { cause: 'Nummular eczema (round patches mimicking ringworm)', likelihood: 'uncommon' },
    { cause: 'Granuloma annulare (ring-shaped lesion, not fungal)', likelihood: 'uncommon' },
    { cause: 'Pityriasis rosea (can mimic ringworm initially)', likelihood: 'uncommon' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Ringworm is uncommon in very young infants. Circular patches at this age are more likely eczema or other conditions.', whenToWorry: 'Expanding ring-shaped lesion with raised scaly border and central clearing. Scalp patches with hair loss or broken hairs. Any skin lesion not improving with standard moisturizing.' },
    { ageRange: '2-6 months', normalVariation: 'Ringworm is still relatively uncommon at this age but can occur from contact with family pets. Nummular eczema (coin-shaped) is more common and mimics ringworm.', whenToWorry: 'Ring-shaped patch that is enlarging over days. Patch with sharp, raised, scaly border. Scalp patch with broken hairs or black dots (tinea capitis). Patches not responding to eczema treatments.' },
    { ageRange: '6-12 months', normalVariation: 'As babies become more mobile and interact with pets and environments, ringworm becomes more possible. Single patches are typical.', whenToWorry: 'Multiple spreading ring-shaped patches. Scalp infection causing hair loss. Patches becoming very inflamed or boggy (kerion formation). Signs of secondary bacterial infection.' },
    { ageRange: '1-3 years', normalVariation: 'Ringworm is common in toddlers from daycare, playground, and pet contact. Single or few well-defined ring-shaped patches that respond to antifungal treatment.', whenToWorry: 'Scalp ringworm with painful swelling (kerion — needs oral treatment). Widespread body ringworm. Ringworm not responding to 2 weeks of topical antifungal treatment. Recurrent infections.' },
  ],
  urgencyLevels: {
    emergency: [
      'Severe allergic reaction to antifungal medication (rare)',
    ],
    urgent: [
      'Scalp ringworm with painful, boggy swelling and pus (kerion — needs urgent oral antifungals)',
      'Widespread ringworm in immunocompromised child',
      'Ringworm with significant secondary bacterial infection (fever, spreading redness, pus)',
    ],
    sameDay: [
      'Suspected ringworm needing diagnosis confirmation',
      'Scalp ringworm (always needs oral antifungal — topicals alone are insufficient)',
      'Ringworm not responding to 2-4 weeks of appropriate topical treatment',
      'Multiple patches appearing on the body',
    ],
    monitor: [
      'Single small body ringworm patch responding to antifungal cream',
      'Confirmed ringworm under appropriate treatment',
      'Mild patches without scalp involvement in otherwise well child',
    ],
  },
  homeRemedies: [
    'Apply over-the-counter antifungal cream (clotrimazole or miconazole) twice daily for 2-4 weeks',
    'Continue antifungal treatment for at least 1 week after the rash appears to have cleared',
    'Keep the area clean and dry',
    'Wash hands thoroughly after touching affected areas',
    'Do not share towels, clothing, hairbrushes, or bedding',
    'Wash clothing, towels, and bedding in hot water',
    'Check household pets for ringworm (bald patches, scaly skin) and treat if needed',
    'Keep child\'s nails short to prevent spreading from scratching',
    'Cover lesions with clothing or bandage at daycare to prevent transmission',
    'Note: scalp ringworm ALWAYS requires oral antifungal prescribed by a doctor — creams alone will not work',
  ],
  relatedSymptomSlugs: ['red-rash', 'bumpy-rash', 'peeling-skin'],
  relatedIllnessSlugs: ['tinea-corporis', 'tinea-capitis', 'eczema'],
  relatedConcernSlugs: ['baby-ring-shaped-rash', 'baby-scalp-patches', 'toddler-hair-loss'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Ringworm (Tinea). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Ringworm.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Ringworm Information.', url: 'https://www.cdc.gov/fungal/diseases/ringworm/index.html' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Ringworm (body) - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/ringworm-body/symptoms-causes/syc-20353780' },
  ],
};
