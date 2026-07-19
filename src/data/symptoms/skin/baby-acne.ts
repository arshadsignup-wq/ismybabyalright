import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'baby-acne',
  title: 'Baby Acne (Neonatal & Infantile Acne)',
  bodySystem: 'skin',
  description: 'Baby acne is a common skin condition that causes small red or white bumps on a newborn\'s face. Neonatal acne (also called neonatal cephalic pustulosis) appears in the first 6 weeks of life and affects up to 20% of newborns. It is caused by maternal hormones and/or Malassezia yeast and resolves without treatment. Infantile acne, appearing at 3-6 months, is less common and may need medical management.',
  possibleCauses: [
    { cause: 'Neonatal cephalic pustulosis (Malassezia yeast reaction)', likelihood: 'common' },
    { cause: 'Maternal hormone stimulation of sebaceous glands', likelihood: 'common' },
    { cause: 'Infantile acne (true comedonal acne in older infants)', likelihood: 'uncommon' },
    { cause: 'Milia (tiny white keratin cysts, not true acne)', likelihood: 'common' },
    { cause: 'Erythema toxicum (mimics acne in first week)', likelihood: 'common' },
    { cause: 'Miliaria (heat rash mistaken for acne)', likelihood: 'common' },
    { cause: 'Allergic reaction or contact irritation', likelihood: 'uncommon' },
    { cause: 'Congenital adrenal hyperplasia (if severe/persistent)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-2 months', normalVariation: 'Neonatal acne is extremely common, appearing as small red bumps and pustules on cheeks, nose, and forehead between 2-6 weeks of age. It peaks at 3-4 weeks and resolves by 3-4 months without scarring. Milia (tiny white bumps) are also normal.', whenToWorry: 'Severe widespread pustules (rule out neonatal herpes or bacterial infection). Acne-like lesions with fever or baby appearing unwell. Open sores or blistering rather than simple bumps. Lesions spreading to trunk and limbs in first week of life.' },
    { ageRange: '2-6 months', normalVariation: 'Neonatal acne typically resolves during this period. Some mild residual bumps may persist. Milia should be gone by 2-3 months of age.', whenToWorry: 'New onset of acne with comedones (blackheads/whiteheads) at 3-6 months — this is infantile acne and needs medical assessment. Nodular or cystic lesions. Acne with signs of virilization (excessive hair growth, genital changes).' },
    { ageRange: '6-12 months', normalVariation: 'Acne should have resolved by this age if it was neonatal type. Mild occasional pimples from drool or food irritation are common.', whenToWorry: 'Persistent or worsening acne beyond 6 months. True comedonal acne (blackheads and whiteheads) developing — needs dermatology referral. Cystic or nodular acne that could scar.' },
    { ageRange: '1-3 years', normalVariation: 'Acne is not expected at this age. Occasional pimples from irritation are normal.', whenToWorry: 'Any true acne in a toddler (mid-childhood acne) warrants evaluation for hormonal causes. Acne with rapid growth, body odor, or pubic hair (precocious puberty).' },
  ],
  urgencyLevels: {
    emergency: [
      'Widespread blistering or erosions on face in newborn under 4 weeks (rule out herpes)',
      'Pustular rash with fever, lethargy, or feeding difficulties in newborn',
    ],
    urgent: [
      'Severe nodular or cystic acne in any infant',
      'Acne with signs of virilization (unusual genital development, body hair)',
      'Acne-like rash with baby systemically unwell',
    ],
    sameDay: [
      'Infantile acne (onset 3-6 months) with comedones needing assessment',
      'Acne persisting beyond 4 months that parents want evaluated',
      'Lesions that appear infected (increasing redness, warmth, pus)',
    ],
    monitor: [
      'Typical neonatal acne (small bumps on face, baby well, 2-6 weeks old)',
      'Milia in newborn',
      'Mild baby acne that is stable or improving',
      'Erythema toxicum in first week of life',
    ],
  },
  homeRemedies: [
    'Leave it alone — neonatal acne resolves without treatment in most cases',
    'Gently wash face once daily with lukewarm water and mild baby cleanser',
    'Do NOT apply adult acne products (benzoyl peroxide, salicylic acid) to baby skin',
    'Avoid lotions, oils, or creams on acne areas as these can worsen it',
    'Do NOT squeeze, pick, or pop baby acne spots',
    'Pat face dry gently after washing — do not rub',
    'Place a soft cloth under baby\'s face during sleep to absorb drool/milk',
    'If breastfeeding, be aware that hormonal fluctuations may temporarily worsen it — this is normal',
    'Take comfort: baby acne does not scar and is not painful for the baby',
  ],
  relatedSymptomSlugs: ['bumpy-rash', 'red-rash', 'cradle-cap'],
  relatedIllnessSlugs: ['neonatal-acne', 'milia', 'eczema'],
  relatedConcernSlugs: ['eczema-vs-baby-acne', 'newborn-rash-normal', 'baby-bumps-on-face'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Baby Acne. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Baby-Acne.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Baby acne - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/baby-acne/symptoms-causes/syc-20369880' },
    { org: 'NIH', citation: 'National Library of Medicine. Neonatal and Infantile Acne Vulgaris. Journal of Clinical and Aesthetic Dermatology.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2923956/' },
  ],
};
