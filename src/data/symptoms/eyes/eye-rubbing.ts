import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'eye-rubbing',
  title: 'Eye Rubbing in Babies',
  bodySystem: 'eyes',
  description: 'Eye rubbing is extremely common in babies and is usually a sign of tiredness or self-soothing. However, persistent or frequent eye rubbing can occasionally indicate eye irritation, vision problems, allergies, or pain. Understanding the context and frequency helps determine whether it is normal behavior or warrants investigation.',
  possibleCauses: [
    { cause: 'Tiredness or sleepiness (self-soothing behavior)', likelihood: 'common' },
    { cause: 'Eye irritation from dust, dry air, or mild allergens', likelihood: 'common' },
    { cause: 'Self-discovery and exploration of face (developmental)', likelihood: 'common' },
    { cause: 'Blocked tear duct causing watery eyes', likelihood: 'uncommon' },
    { cause: 'Allergic conjunctivitis (itchy eyes)', likelihood: 'uncommon' },
    { cause: 'Refractive error causing eye strain', likelihood: 'uncommon' },
    { cause: 'Foreign body in eye', likelihood: 'rare' },
    { cause: 'Oculodigital sign (eye pressing in visually impaired children)', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-3 months', normalVariation: 'Babies begin discovering their hands and may accidentally rub their eyes. Rubbing when tired is common and develops as a sleep cue early on.', whenToWorry: 'Constant vigorous rubbing with crying, swollen or red eyelids, excessive tearing or discharge, or rubbing combined with no visual tracking by 6-8 weeks.' },
    { ageRange: '3-12 months', normalVariation: 'Eye rubbing when tired is a very reliable sleep cue at this age. Brief rubbing when waking up is normal. Exploring face and eyes is part of development.', whenToWorry: 'Rubbing so vigorously it causes bruising or scratches, rubbing specifically one eye constantly, rubbing accompanied by head shaking or pressing eyes into objects, or rubbing with persistent redness.' },
    { ageRange: '1-3 years', normalVariation: 'Toddlers rub their eyes when sleepy, when waking up, or when irritated. During allergy seasons, some rubbing is expected. Occasional habitual rubbing is usually benign.', whenToWorry: 'Rubbing with significant eye redness, swelling, or discharge; rubbing combined with squinting at objects or holding things very close; pressing eyes repeatedly (especially in children with developmental delays); or rubbing after potential chemical or object exposure.' },
  ],
  urgencyLevels: {
    emergency: [
      'Eye rubbing after exposure to chemicals or cleaning products',
      'Visible foreign body that cannot be flushed out',
      'Severe eye swelling preventing eye from opening after rubbing',
    ],
    urgent: [
      'Vigorous rubbing with significant eye swelling, redness, and pain',
      'Eye rubbing with purulent discharge and fever',
      'Rubbing with visible corneal cloudiness or white spot on eye',
    ],
    sameDay: [
      'Persistent rubbing of one eye with redness lasting more than 2 days',
      'Eye rubbing with allergic symptoms (sneezing, congestion, watery eyes)',
      'Rubbing combined with squinting or visual concerns',
    ],
    monitor: [
      'Rubbing eyes when tired or as a sleep cue',
      'Brief rubbing upon waking from sleep',
      'Occasional rubbing during cold or allergy season without other symptoms',
      'Exploring face and eyes as part of normal development',
    ],
  },
  homeRemedies: [
    'Keep baby\'s fingernails short and smooth to prevent scratching',
    'Respond to eye rubbing as a sleep cue and start the nap/bedtime routine',
    'Gently redirect hands away from eyes if rubbing is excessive',
    'Use a cool-mist humidifier in dry environments to reduce eye irritation',
    'Wipe eyes gently with a clean, damp cloth if discharge or crustiness is present',
    'Avoid exposing baby to smoke, strong fragrances, or known allergens',
    'If allergies are suspected, try washing baby\'s face and hands after outdoor play',
    'Use mittens on young infants who scratch their face while sleeping',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['red-eye', 'eye-not-tracking', 'eye-discharge'],
  relatedIllnessSlugs: ['conjunctivitis', 'allergies'],
  relatedConcernSlugs: ['baby-rubbing-eyes', 'baby-tired-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleep and Your 1- to 3-Month-Old. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Warning Signs of Vision Problems in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Warning-Signs-of-Vison-Problems-in-Children.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Pink eye (conjunctivitis) in babies.', url: 'https://www.mayoclinic.org/diseases-conditions/pink-eye/symptoms-causes/syc-20376355' },
  ],
};
