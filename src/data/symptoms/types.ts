export type BodySystem = 'head' | 'eyes' | 'ears' | 'nose' | 'mouth-throat' | 'chest-breathing' | 'abdomen' | 'skin' | 'limbs-joints' | 'genitourinary' | 'fever-general' | 'neurological';

export interface SymptomGuide {
  slug: string;
  title: string;
  bodySystem: BodySystem;
  description: string;
  possibleCauses: { cause: string; likelihood: 'common' | 'uncommon' | 'rare' }[];
  byAge: { ageRange: string; normalVariation: string; whenToWorry: string }[];
  urgencyLevels: { emergency: string[]; urgent: string[]; sameDay: string[]; monitor: string[] };
  homeRemedies: string[];
  triageSlug?: string;
  relatedSymptomSlugs: string[];
  relatedIllnessSlugs: string[];
  relatedConcernSlugs: string[];
  sources: { org: string; citation: string; url: string }[];
}

export const bodySystemLabels: Record<BodySystem, string> = {
  'head': 'Head',
  'eyes': 'Eyes',
  'ears': 'Ears',
  'nose': 'Nose',
  'mouth-throat': 'Mouth & Throat',
  'chest-breathing': 'Breathing & Chest',
  'abdomen': 'Belly & Digestive',
  'skin': 'Skin',
  'limbs-joints': 'Limbs & Joints',
  'genitourinary': 'Genital & Urinary',
  'fever-general': 'Fever & Whole-Body',
  'neurological': 'Neurological',
};

export const bodySystemDescriptions: Record<BodySystem, string> = {
  'head': 'Fontanelle changes, head shape, head injuries, and hair concerns in babies.',
  'eyes': 'Eye discharge, alignment issues, swelling, and visual concerns in babies.',
  'ears': 'Ear pain, discharge, hearing concerns, and ear-related symptoms in babies.',
  'nose': 'Runny nose, congestion, nosebleeds, and nasal symptoms in babies.',
  'mouth-throat': 'Oral thrush, mouth sores, tongue issues, and throat symptoms in babies.',
  'chest-breathing': 'Coughs, wheezing, fast breathing, and respiratory distress in babies.',
  'abdomen': 'Vomiting, diarrhea, constipation, and digestive symptoms in babies.',
  'skin': 'Rashes, bumps, blisters, and skin changes in babies.',
  'limbs-joints': 'Limping, swelling, movement concerns, and joint issues in babies.',
  'genitourinary': 'Urine changes, genital concerns, and urinary symptoms in babies.',
  'fever-general': 'Fever, lethargy, poor feeding, and whole-body symptoms in babies.',
  'neurological': 'Seizures, stiffness, floppiness, and neurological symptoms in babies.',
};
