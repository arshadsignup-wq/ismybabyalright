import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'red-eye',
  title: 'Red Eye (Conjunctivitis) in Babies',
  bodySystem: 'eyes',
  description: 'Red or pink eye in babies can result from infection (bacterial or viral conjunctivitis), blocked tear ducts, irritation, or allergies. In newborns, eye redness in the first month of life requires prompt evaluation as it may indicate a serious infection acquired during birth. In older infants and toddlers, viral conjunctivitis is the most common cause.',
  possibleCauses: [
    { cause: 'Viral conjunctivitis (often with a cold)', likelihood: 'common' },
    { cause: 'Blocked tear duct (dacryostenosis) with secondary irritation', likelihood: 'common' },
    { cause: 'Bacterial conjunctivitis', likelihood: 'common' },
    { cause: 'Irritation from smoke, chlorine, or wind', likelihood: 'uncommon' },
    { cause: 'Allergic conjunctivitis (more common after 2 years)', likelihood: 'uncommon' },
    { cause: 'Neonatal conjunctivitis (ophthalmia neonatorum) from chlamydia or gonorrhea', likelihood: 'rare' },
    { cause: 'Herpes simplex virus eye infection', likelihood: 'rare' },
    { cause: 'Kawasaki disease (with other symptoms)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-4 weeks', normalVariation: 'Mild chemical conjunctivitis from prophylactic eye drops at birth can cause redness in first 1-2 days and resolves spontaneously.', whenToWorry: 'Purulent (thick yellow/green) discharge, significant eyelid swelling, onset between day 2-14 of life (possible gonococcal or chlamydial infection), or redness with inability to open the eye.' },
    { ageRange: '1-12 months', normalVariation: 'Mild redness from a blocked tear duct is common and often improves by 12 months. Watery eyes without significant redness are usually a blocked duct.', whenToWorry: 'Thick green or yellow discharge matting eyes shut, redness around the eye (not just in it), fever with eye redness, significant swelling of the eyelids, or redness after eye injury.' },
    { ageRange: '1-3 years', normalVariation: 'Pink eye from daycare exposure is very common. Viral conjunctivitis causes watery discharge and often accompanies a cold. Usually self-limited.', whenToWorry: 'Severe pain (constant crying, won\'t open eye), vision changes (not tracking or reaching), redness only around the iris (iritis), redness after eye trauma, or redness with blisters near the eye.' },
  ],
  urgencyLevels: {
    emergency: [
      'Red eye with significant eyelid swelling that prevents eye from opening',
      'Red eye following penetrating eye injury or chemical splash',
      'Red eye with proptosis (eye bulging forward)',
      'Newborn (under 4 weeks) with purulent eye discharge and eyelid swelling',
    ],
    urgent: [
      'Red eye with fever and eyelid swelling (possible periorbital cellulitis)',
      'Red eye after trauma or foreign body that won\'t flush out',
      'Severe pain with light sensitivity in a toddler',
      'Blisters near the eye with redness (possible herpes)',
    ],
    sameDay: [
      'Thick yellow or green discharge from one or both eyes',
      'Red eye in a newborn (any redness in first month needs same-day evaluation)',
      'Red eye with moderate discharge lasting more than 3 days',
    ],
    monitor: [
      'Mild pink eye with watery discharge and cold symptoms',
      'Mild redness with blocked tear duct and no thick discharge',
      'Brief redness after crying that resolves quickly',
      'Mild irritation from identifiable cause (wind, soap)',
    ],
  },
  homeRemedies: [
    'Gently clean discharge with a warm, wet cotton ball, wiping from inner to outer corner',
    'Use a clean cotton ball for each wipe and for each eye',
    'Apply warm compresses for 5-10 minutes several times daily to loosen crusted discharge',
    'For blocked tear duct: gently massage the inner corner of the eye (lacrimal sac) 2-3 times daily',
    'Wash hands thoroughly before and after touching baby\'s eyes',
    'Do not share towels or washcloths with other family members',
    'Avoid touching or rubbing the baby\'s eyes',
    'Do NOT use over-the-counter eye drops without physician guidance in babies',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['eye-discharge', 'yellow-eyes', 'eye-rubbing'],
  relatedIllnessSlugs: ['conjunctivitis', 'blocked-tear-duct'],
  relatedConcernSlugs: ['baby-pink-eye', 'baby-eye-discharge', 'baby-red-eye'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pinkeye (Conjunctivitis). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Pinkeye-Conjunctivitis.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Conjunctivitis (Pink Eye): Treatment.', url: 'https://www.cdc.gov/conjunctivitis/about/treatment.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Red Book: Report of the Committee on Infectious Diseases. Ophthalmia Neonatorum. 2021.', url: 'https://publications.aap.org/redbook' },
  ],
};
