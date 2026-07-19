import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'peeling-skin',
  title: 'Peeling Skin in Babies & Toddlers',
  bodySystem: 'skin',
  description: 'Peeling skin in newborns is extremely common and usually normal as the skin adjusts from the amniotic fluid environment to the outside air. It is especially common in post-term babies. In older infants and toddlers, peeling can result from sunburn, eczema, fungal infections, or recovering from certain infections. Widespread rapid peeling with redness may indicate a serious condition requiring urgent care.',
  possibleCauses: [
    { cause: 'Normal newborn skin desquamation (especially post-term babies)', likelihood: 'common' },
    { cause: 'Dry skin from low humidity or over-bathing', likelihood: 'common' },
    { cause: 'Eczema (atopic dermatitis) flare', likelihood: 'common' },
    { cause: 'Post-viral peeling (e.g., after scarlet fever or Kawasaki disease)', likelihood: 'uncommon' },
    { cause: 'Sunburn', likelihood: 'uncommon' },
    { cause: 'Fungal infection (tinea/ringworm)', likelihood: 'uncommon' },
    { cause: 'Ichthyosis (genetic dry skin condition)', likelihood: 'rare' },
    { cause: 'Staphylococcal scalded skin syndrome (SSSS)', likelihood: 'rare' },
    { cause: 'Kawasaki disease (peeling of fingertips/toes in recovery phase)', likelihood: 'rare' },
    { cause: 'Nutritional deficiency (zinc, biotin)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Peeling skin in the first 2-3 weeks of life is extremely normal, especially on hands, feet, and wrists. Post-term babies (born after 42 weeks) often have significant peeling. This resolves without treatment.', whenToWorry: 'Red, raw skin under peeling areas (SSSS concern). Widespread peeling with blistering and fever. Peeling with skin that separates when gently rubbed (Nikolsky sign). Collodion membrane at birth (tight shiny skin — genetic condition).' },
    { ageRange: '2-6 months', normalVariation: 'Mild dry peeling on cheeks or limbs, especially in dry weather. Some peeling associated with eczema patches. Cradle cap peeling on scalp.', whenToWorry: 'Peeling with deep red raw areas, fever, or irritability. Thick peeling involving large body areas. Peeling concentrated around mouth, hands, and diaper area (zinc deficiency pattern).' },
    { ageRange: '6-12 months', normalVariation: 'Mild peeling from dry skin, especially in winter. Peeling after minor sunburn (which should be prevented). Post-illness peeling (e.g., after hand-foot-mouth disease).', whenToWorry: 'Peeling of fingertips and toes after prolonged fever (Kawasaki disease). Widespread peeling sheets of skin with redness. Circular peeling patches with raised borders (ringworm).' },
    { ageRange: '1-3 years', normalVariation: 'Seasonal dry skin peeling. Peeling after resolved sunburn. Mild peeling of palms/soles after viral hand-foot-mouth disease.', whenToWorry: 'Peeling after 5+ days of fever (Kawasaki late sign). Peeling with weight loss or poor growth (nutritional concern). Severe widespread peeling with skin tenderness.' },
  ],
  urgencyLevels: {
    emergency: [
      'Widespread red peeling skin with fever and pain — child appears very unwell (SSSS or TEN)',
      'Peeling skin with blistering and skin separating in sheets',
      'Peeling with signs of dehydration (no wet diapers, lethargy, sunken fontanelle)',
    ],
    urgent: [
      'Peeling skin following 5+ days of fever with red eyes and swollen lips/hands (Kawasaki disease)',
      'Red raw areas under peeling skin with fever',
      'Peeling with signs of secondary infection',
    ],
    sameDay: [
      'Unexplained peeling beyond normal newborn desquamation',
      'Peeling with significant itching or discomfort',
      'Circular peeling patches (possible ringworm)',
      'Peeling skin in unusual pattern around mouth and diaper area',
    ],
    monitor: [
      'Normal newborn peeling in first 2-3 weeks (no redness underneath)',
      'Mild dry skin peeling responding to moisturizing',
      'Post-viral mild peeling of hands/feet in well child',
      'Known eczema with mild peeling managed with emollients',
    ],
  },
  homeRemedies: [
    'For newborn peeling: leave it alone — it resolves naturally and does not need treatment',
    'Moisturize with thick fragrance-free cream or ointment (petroleum jelly works well)',
    'Avoid over-bathing — every 2-3 days is sufficient for most babies',
    'Use lukewarm water (not hot) and soap-free cleansers',
    'Run a cool-mist humidifier in dry environments',
    'Do NOT peel or pull off flaking skin — let it come off naturally',
    'Protect baby skin from sun (shade, protective clothing, sunscreen for 6+ months)',
    'Pat skin dry rather than rubbing after baths',
    'For eczema-related peeling: apply emollient immediately after bath while skin is still damp',
  ],
  relatedSymptomSlugs: ['eczema', 'red-rash', 'cradle-cap'],
  relatedIllnessSlugs: ['eczema', 'kawasaki-disease', 'ichthyosis', 'scarlet-fever'],
  relatedConcernSlugs: ['newborn-peeling-skin', 'baby-dry-skin', 'baby-skin-peeling-hands'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Skin Peeling in Newborns. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/default.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Peeling skin in children — When to see a doctor.', url: 'https://www.mayoclinic.org/symptoms/peeling-skin/basics/when-to-see-doctor/sym-20050672' },
    { org: 'NHS', citation: 'NHS. Your baby\'s skin.', url: 'https://www.nhs.uk/conditions/baby/caring-for-a-newborn/your-babys-skin/' },
  ],
};
