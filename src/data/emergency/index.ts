import type { EmergencyGuide } from './types';

// Medical
import { guide as chokingInfant } from './medical/choking-infant';
import { guide as chokingToddler } from './medical/choking-toddler';
import { guide as cprInfant } from './medical/cpr-infant';
import { guide as cprToddler } from './medical/cpr-toddler';
import { guide as anaphylaxis } from './medical/anaphylaxis';
import { guide as seizureResponse } from './medical/seizure-response';
import { guide as febrileSeizureResponse } from './medical/febrile-seizure-response';
import { guide as breathingEmergency } from './medical/breathing-emergency';
import { guide as newbornFeverEmergency } from './medical/newborn-fever-emergency';
import { guide as severeDehydration } from './medical/severe-dehydration';
import { guide as meningitisEmergency } from './medical/meningitis-emergency';
import { guide as unresponsiveBaby } from './medical/unresponsive-baby';
import { guide as blueBabyCyanosis } from './medical/blue-baby-cyanosis';
import { guide as diabeticEmergency } from './medical/diabetic-emergency';
// Injuries
import { guide as headInjuryFall } from './injuries/head-injury-fall';
import { guide as burnThermal } from './injuries/burn-thermal';
import { guide as burnChemical } from './injuries/burn-chemical';
import { guide as burnElectrical } from './injuries/burn-electrical';
import { guide as cutLaceration } from './injuries/cut-laceration';
import { guide as nursemaidsElbow } from './injuries/nursemaids-elbow';
import { guide as brokenBone } from './injuries/broken-bone';
import { guide as eyeInjury } from './injuries/eye-injury';
import { guide as dentalTrauma } from './injuries/dental-trauma';
import { guide as fingerCrush } from './injuries/finger-crush';
import { guide as noseInjury } from './injuries/nose-injury';
import { guide as animalBite } from './injuries/animal-bite';
// Ingestion
import { guide as buttonBattery } from './ingestion/button-battery';
import { guide as magnetIngestion } from './ingestion/magnet-ingestion';
import { guide as medicationOverdose } from './ingestion/medication-overdose';
import { guide as householdChemical } from './ingestion/household-chemical';
import { guide as plantPoisoning } from './ingestion/plant-poisoning';
import { guide as essentialOil } from './ingestion/essential-oil';
import { guide as laundryPod } from './ingestion/laundry-pod';
import { guide as alcoholIngestion } from './ingestion/alcohol-ingestion';
import { guide as cannabisEdible } from './ingestion/cannabis-edible';
import { guide as foreignObject } from './ingestion/foreign-object';
// Environmental
import { guide as drowningNear } from './environmental/drowning-near';
import { guide as heatStroke } from './environmental/heat-stroke';
import { guide as hypothermia } from './environmental/hypothermia';
import { guide as sunburnSevere } from './environmental/sunburn-severe';
import { guide as hotCar } from './environmental/hot-car';
import { guide as tickBite } from './environmental/tick-bite';
// Preparedness
import { guide as emergencyKit } from './preparedness/emergency-kit';
import { guide as emergencyPlan } from './preparedness/emergency-plan';
import { guide as cprTrainingGuide } from './preparedness/cpr-training-guide';

export const allEmergencyGuides: EmergencyGuide[] = [
  // Medical
  chokingInfant, chokingToddler, cprInfant, cprToddler, anaphylaxis,
  seizureResponse, febrileSeizureResponse, breathingEmergency,
  newbornFeverEmergency, severeDehydration, meningitisEmergency,
  unresponsiveBaby, blueBabyCyanosis, diabeticEmergency,
  // Injuries
  headInjuryFall, burnThermal, burnChemical, burnElectrical,
  cutLaceration, nursemaidsElbow, brokenBone, eyeInjury,
  dentalTrauma, fingerCrush, noseInjury, animalBite,
  // Ingestion
  buttonBattery, magnetIngestion, medicationOverdose,
  householdChemical, plantPoisoning, essentialOil,
  laundryPod, alcoholIngestion, cannabisEdible, foreignObject,
  // Environmental
  drowningNear, heatStroke, hypothermia, sunburnSevere, hotCar, tickBite,
  // Preparedness
  emergencyKit, emergencyPlan, cprTrainingGuide,
];

export function getEmergencyBySlug(slug: string): EmergencyGuide | undefined {
  return allEmergencyGuides.find((g) => g.slug === slug);
}

export function getEmergenciesByCategory(category: string): EmergencyGuide[] {
  return allEmergencyGuides.filter((g) => g.category === category);
}
