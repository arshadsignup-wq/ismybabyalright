import type { SymptomGuide } from './types';

// Head symptoms
import { symptom as bulgingFontanelle } from './head/bulging-fontanelle';
import { symptom as flatHead } from './head/flat-head';
import { symptom as hairLoss } from './head/hair-loss';
import { symptom as headBanging } from './head/head-banging';
import { symptom as headInjury } from './head/head-injury';
import { symptom as largeHead } from './head/large-head';
import { symptom as smallHead } from './head/small-head';
import { symptom as sunkenFontanelle } from './head/sunken-fontanelle';
// Eyes symptoms
import { symptom as crossedEyes } from './eyes/crossed-eyes';
import { symptom as eyeDischarge } from './eyes/eye-discharge';
import { symptom as eyeNotTracking } from './eyes/eye-not-tracking';
import { symptom as eyeRubbing } from './eyes/eye-rubbing';
import { symptom as redEye } from './eyes/red-eye';
import { symptom as swollenEyelid } from './eyes/swollen-eyelid';
import { symptom as unequalPupils } from './eyes/unequal-pupils';
import { symptom as wateryEyes } from './eyes/watery-eyes';
import { symptom as whitePupilReflex } from './eyes/white-pupil-reflex';
import { symptom as yellowEyes } from './eyes/yellow-eyes';
// Ears symptoms
import { symptom as earDischarge } from './ears/ear-discharge';
import { symptom as earPain } from './ears/ear-pain';
import { symptom as earPulling } from './ears/ear-pulling';
import { symptom as earSmell } from './ears/ear-smell';
import { symptom as earWax } from './ears/ear-wax';
import { symptom as foreignObjectEar } from './ears/foreign-object-ear';
import { symptom as notRespondingSounds } from './ears/not-responding-sounds';
// Nose symptoms
import { symptom as congestion } from './nose/congestion';
import { symptom as foreignObjectNose } from './nose/foreign-object-nose';
import { symptom as nasalFlaring } from './nose/nasal-flaring';
import { symptom as nosebleed } from './nose/nosebleed';
import { symptom as runnyNoseClear } from './nose/runny-nose-clear';
import { symptom as runnyNoseColored } from './nose/runny-nose-colored';
import { symptom as sneezing } from './nose/sneezing';
// Mouth/Throat symptoms
import { symptom as badBreath } from './mouth-throat/bad-breath';
import { symptom as bleedingGums } from './mouth-throat/bleeding-gums';
import { symptom as drooling } from './mouth-throat/drooling';
import { symptom as geographicTongue } from './mouth-throat/geographic-tongue';
import { symptom as lipTie } from './mouth-throat/lip-tie';
import { symptom as mouthSores } from './mouth-throat/mouth-sores';
import { symptom as soreThroat } from './mouth-throat/sore-throat';
import { symptom as swollenTonsils } from './mouth-throat/swollen-tonsils';
import { symptom as thrush } from './mouth-throat/thrush';
import { symptom as tongueTie } from './mouth-throat/tongue-tie';
// Chest/Breathing symptoms
import { symptom as apnea } from './chest-breathing/apnea';
import { symptom as barkingCough } from './chest-breathing/barking-cough';
import { symptom as blueLips } from './chest-breathing/blue-lips';
import { symptom as chestRetractions } from './chest-breathing/chest-retractions';
import { symptom as coughAtNight } from './chest-breathing/cough-at-night';
import { symptom as dryCough } from './chest-breathing/dry-cough';
import { symptom as fastBreathing } from './chest-breathing/fast-breathing';
import { symptom as grunting } from './chest-breathing/grunting';
import { symptom as mouthBreathing } from './chest-breathing/mouth-breathing';
import { symptom as noisyBreathing } from './chest-breathing/noisy-breathing';
import { symptom as snoring } from './chest-breathing/snoring';
import { symptom as stridor } from './chest-breathing/stridor';
import { symptom as wetCough } from './chest-breathing/wet-cough';
import { symptom as wheezing } from './chest-breathing/wheezing';
// Abdomen symptoms
import { symptom as abdominalPain } from './abdomen/abdominal-pain';
import { symptom as blackStool } from './abdomen/black-stool';
import { symptom as bloodInStool } from './abdomen/blood-in-stool';
import { symptom as constipation } from './abdomen/constipation';
import { symptom as diarrhea } from './abdomen/diarrhea';
import { symptom as gasBloating } from './abdomen/gas-bloating';
import { symptom as greenPoop } from './abdomen/green-poop';
import { symptom as hiccups } from './abdomen/hiccups';
import { symptom as mucusInStool } from './abdomen/mucus-in-stool';
import { symptom as projectileVomiting } from './abdomen/projectile-vomiting';
import { symptom as rectalBleeding } from './abdomen/rectal-bleeding';
import { symptom as refusingToEat } from './abdomen/refusing-to-eat';
import { symptom as spitUp } from './abdomen/spit-up';
import { symptom as vomiting } from './abdomen/vomiting';
// Skin symptoms
import { symptom as babyAcne } from './skin/baby-acne';
import { symptom as birthmarks } from './skin/birthmarks';
import { symptom as blisteringRash } from './skin/blistering-rash';
import { symptom as bruising } from './skin/bruising';
import { symptom as bumpyRash } from './skin/bumpy-rash';
import { symptom as cradleCap } from './skin/cradle-cap';
import { symptom as diaperRash } from './skin/diaper-rash';
import { symptom as eczema } from './skin/eczema';
import { symptom as hives } from './skin/hives';
import { symptom as jaundice } from './skin/jaundice';
import { symptom as mottling } from './skin/mottling';
import { symptom as paleSkin } from './skin/pale-skin';
import { symptom as peelingSkin } from './skin/peeling-skin';
import { symptom as petechiae } from './skin/petechiae';
import { symptom as redRash } from './skin/red-rash';
import { symptom as ringworm } from './skin/ringworm';
// Limbs/Joints symptoms
import { symptom as bowedLegs } from './limbs-joints/bowed-legs';
import { symptom as clickingHips } from './limbs-joints/clicking-hips';
import { symptom as growingPains } from './limbs-joints/growing-pains';
import { symptom as inToeing } from './limbs-joints/in-toeing';
import { symptom as limping } from './limbs-joints/limping';
import { symptom as notUsingArm } from './limbs-joints/not-using-arm';
import { symptom as swollenJoint } from './limbs-joints/swollen-joint';
import { symptom as toeWalking } from './limbs-joints/toe-walking';
// Genitourinary symptoms
import { symptom as bloodInUrine } from './genitourinary/blood-in-urine';
import { symptom as darkUrine } from './genitourinary/dark-urine';
import { symptom as diaperCrystals } from './genitourinary/diaper-crystals';
import { symptom as genitalSwelling } from './genitourinary/genital-swelling';
import { symptom as labialAdhesion } from './genitourinary/labial-adhesion';
import { symptom as penileConcerns } from './genitourinary/penile-concerns';
import { symptom as strongSmellingUrine } from './genitourinary/strong-smelling-urine';
import { symptom as undescendedTesticle } from './genitourinary/undescended-testicle';
// Fever/General symptoms
import { symptom as dehydration } from './fever-general/dehydration';
import { symptom as fever } from './fever-general/fever';
import { symptom as feverNoSymptoms } from './fever-general/fever-no-symptoms';
import { symptom as feverWithRash } from './fever-general/fever-with-rash';
import { symptom as irritability } from './fever-general/irritability';
import { symptom as lethargy } from './fever-general/lethargy';
import { symptom as nightSweats } from './fever-general/night-sweats';
import { symptom as persistentLowFever } from './fever-general/persistent-low-fever';
import { symptom as poorFeeding } from './fever-general/poor-feeding';
import { symptom as weightLoss } from './fever-general/weight-loss';
// Neurological symptoms
import { symptom as archingBack } from './neurological/arching-back';
import { symptom as febrileSeizure } from './neurological/febrile-seizure';
import { symptom as floppiness } from './neurological/floppiness';
import { symptom as regression } from './neurological/regression';
import { symptom as seizure } from './neurological/seizure';
import { symptom as staringSpells } from './neurological/staring-spells';
import { symptom as stiffness } from './neurological/stiffness';
import { symptom as tremors } from './neurological/tremors';

export const allSymptomGuides: SymptomGuide[] = [
  // Head
  bulgingFontanelle, flatHead, hairLoss, headBanging, headInjury, largeHead, smallHead, sunkenFontanelle,
  // Eyes
  crossedEyes, eyeDischarge, eyeNotTracking, eyeRubbing, redEye, swollenEyelid, unequalPupils, wateryEyes, whitePupilReflex, yellowEyes,
  // Ears
  earDischarge, earPain, earPulling, earSmell, earWax, foreignObjectEar, notRespondingSounds,
  // Nose
  congestion, foreignObjectNose, nasalFlaring, nosebleed, runnyNoseClear, runnyNoseColored, sneezing,
  // Mouth/Throat
  badBreath, bleedingGums, drooling, geographicTongue, lipTie, mouthSores, soreThroat, swollenTonsils, thrush, tongueTie,
  // Chest/Breathing
  apnea, barkingCough, blueLips, chestRetractions, coughAtNight, dryCough, fastBreathing, grunting, mouthBreathing, noisyBreathing, snoring, stridor, wetCough, wheezing,
  // Abdomen
  abdominalPain, blackStool, bloodInStool, constipation, diarrhea, gasBloating, greenPoop, hiccups, mucusInStool, projectileVomiting, rectalBleeding, refusingToEat, spitUp, vomiting,
  // Skin
  babyAcne, birthmarks, blisteringRash, bruising, bumpyRash, cradleCap, diaperRash, eczema, hives, jaundice, mottling, paleSkin, peelingSkin, petechiae, redRash, ringworm,
  // Limbs/Joints
  bowedLegs, clickingHips, growingPains, inToeing, limping, notUsingArm, swollenJoint, toeWalking,
  // Genitourinary
  bloodInUrine, darkUrine, diaperCrystals, genitalSwelling, labialAdhesion, penileConcerns, strongSmellingUrine, undescendedTesticle,
  // Fever/General
  dehydration, fever, feverNoSymptoms, feverWithRash, irritability, lethargy, nightSweats, persistentLowFever, poorFeeding, weightLoss,
  // Neurological
  archingBack, febrileSeizure, floppiness, regression, seizure, staringSpells, stiffness, tremors,
];

export function getSymptomBySlug(slug: string): SymptomGuide | undefined {
  return allSymptomGuides.find((s) => s.slug === slug);
}

export function getSymptomsByBodySystem(system: string): SymptomGuide[] {
  return allSymptomGuides.filter((s) => s.bodySystem === system);
}
