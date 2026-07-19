import type { SymptomGuide } from '../types';

export const symptom: SymptomGuide = {
  slug: 'ear-pulling',
  title: 'Ear Pulling in Babies',
  bodySystem: 'ears',
  description: 'Ear pulling, tugging, or grabbing is extremely common in babies and is usually a normal self-discovery behavior or a sign of teething, tiredness, or self-soothing. While parents often worry about ear infections, ear pulling alone without other symptoms (fever, fussiness, cold symptoms) is rarely caused by an ear infection. Most babies discover their ears between 4-8 months and pull on them out of curiosity.',
  possibleCauses: [
    { cause: 'Self-discovery and exploration (developmental)', likelihood: 'common' },
    { cause: 'Tiredness or self-soothing behavior', likelihood: 'common' },
    { cause: 'Teething (referred pain to the ear area)', likelihood: 'common' },
    { cause: 'Acute otitis media (ear infection) with other symptoms', likelihood: 'uncommon' },
    { cause: 'Earwax buildup causing mild discomfort', likelihood: 'uncommon' },
    { cause: 'Skin irritation behind or around the ear (eczema, cradle cap)', likelihood: 'uncommon' },
    { cause: 'Foreign object in the ear canal', likelihood: 'rare' },
  ],
  byAge: [
    { ageRange: '0-4 months', normalVariation: 'Babies have limited hand control and rarely pull ears deliberately. Accidental touching of ears while moving hands is normal.', whenToWorry: 'Ear pulling with fever, inconsolable crying, refusing to feed, or ear discharge. In this age group, any fever with ear pulling warrants medical evaluation.' },
    { ageRange: '4-12 months', normalVariation: 'Peak age for ear-pulling as a discovery behavior. Babies love the feel of their ears. Often seen when tired, teething, or during feeding. Completely normal without other symptoms.', whenToWorry: 'Ear pulling combined with fever, waking at night crying, refusing to lie flat, thick discharge from ear, or persistent fussiness especially after a cold.' },
    { ageRange: '1-3 years', normalVariation: 'Ear pulling may continue as a comfort habit, especially during tiredness or stress. Some toddlers pull ears while falling asleep.', whenToWorry: 'Pulling with complaints of ear pain, fever, discharge, hearing concerns, odor from ear, or pulling that started after putting something in the ear.' },
  ],
  urgencyLevels: {
    emergency: [
      'Ear pulling with high fever, stiff neck, and lethargy (possible meningitis)',
      'Severe swelling or redness spreading from the ear to face or scalp',
      'Ear pulling with blood or clear fluid draining after head injury',
    ],
    urgent: [
      'Ear pulling with fever above 102.2F (39C) and significant pain/crying',
      'Thick pus or bloody discharge from the ear',
      'Sudden hearing loss with ear pulling in one ear',
      'Swelling and redness behind the ear (possible mastoiditis)',
    ],
    sameDay: [
      'Ear pulling with fever and cold symptoms (likely ear infection)',
      'Ear pulling with foul-smelling discharge',
      'Ear pulling with significant fussiness for more than 24 hours',
    ],
    monitor: [
      'Ear pulling without fever, discharge, or significant fussiness',
      'Ear pulling when tired or as a sleep cue',
      'Ear pulling during teething with drooling and chewing',
      'Playful ear exploration in a happy baby',
    ],
  },
  homeRemedies: [
    'Observe for accompanying symptoms before assuming an ear infection',
    'If teething is suspected, offer a cold teething ring or washcloth to chew',
    'Respond to ear pulling as a potential sleep cue and offer a nap',
    'Keep ears dry—tilt baby\'s head to drain water after baths',
    'Do not insert anything into the ear canal (cotton swabs, fingers)',
    'If a cold is present, keep nasal passages clear with saline and suction',
    'For comfort during suspected ear pain, hold baby upright or elevate the head of the crib slightly',
    'Acetaminophen (Tylenol) can help with pain if baby seems uncomfortable and is of appropriate age',
  ],
  triageSlug: undefined,
  relatedSymptomSlugs: ['ear-pain', 'ear-discharge', 'ear-smell'],
  relatedIllnessSlugs: ['ear-infection', 'teething'],
  relatedConcernSlugs: ['baby-pulling-ears', 'baby-ear-infection-signs'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Ear Infections in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Information.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Lieberthal AS, et al. The Diagnosis and Management of Acute Otitis Media. Pediatrics. 2013;131(3):e964-e999.', url: 'https://publications.aap.org/pediatrics/article/131/3/e964/30912/The-Diagnosis-and-Management-of-Acute-Otitis-Media' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Ear infection (middle ear) - Symptoms and causes.', url: 'https://www.mayoclinic.org/diseases-conditions/ear-infections/symptoms-causes/syc-20351616' },
  ],
};
