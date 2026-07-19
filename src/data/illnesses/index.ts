import type { IllnessGuide, IllnessComparison } from './types';

// Respiratory
import { illness as adenovirus } from './respiratory/adenovirus';
import { illness as asthma } from './respiratory/asthma';
import { illness as bronchiolitis } from './respiratory/bronchiolitis';
import { illness as bronchitis } from './respiratory/bronchitis';
import { illness as commonCold } from './respiratory/common-cold';
import { illness as croup } from './respiratory/croup';
import { illness as flu } from './respiratory/flu';
import { illness as hmpv } from './respiratory/hmpv';
import { illness as pneumonia } from './respiratory/pneumonia';
import { illness as rsv } from './respiratory/rsv';
import { illness as whoopingCough } from './respiratory/whooping-cough';
// Gastrointestinal
import { illness as foodPoisoning } from './gastrointestinal/food-poisoning';
import { illness as gastroenteritis } from './gastrointestinal/gastroenteritis';
import { illness as intussusception } from './gastrointestinal/intussusception';
import { illness as norovirus } from './gastrointestinal/norovirus';
import { illness as pyloricStenosis } from './gastrointestinal/pyloric-stenosis';
import { illness as rotavirus } from './gastrointestinal/rotavirus';
// ENT
import { illness as earInfection } from './ent/ear-infection';
import { illness as gingivostomatitis } from './ent/gingivostomatitis';
import { illness as handFootMouth } from './ent/hand-foot-mouth';
import { illness as laryngitis } from './ent/laryngitis';
import { illness as peritonsillarAbscess } from './ent/peritonsillar-abscess';
import { illness as sinusitis } from './ent/sinusitis';
import { illness as strepThroat } from './ent/strep-throat';
import { illness as swimmersEar } from './ent/swimmers-ear';
import { illness as tonsillitis } from './ent/tonsillitis';
// Skin
import { illness as cellulitis } from './skin/cellulitis';
import { illness as fungalDiaperRash } from './skin/fungal-diaper-rash';
import { illness as headLice } from './skin/head-lice';
import { illness as impetigo } from './skin/impetigo';
import { illness as molluscum } from './skin/molluscum';
import { illness as ringworm } from './skin/ringworm';
import { illness as scabies } from './skin/scabies';
// Serious
import { illness as bacterialMeningitis } from './serious/bacterial-meningitis';
import { illness as kawasaki } from './serious/kawasaki';
import { illness as misC } from './serious/mis-c';
import { illness as sepsis } from './serious/sepsis';
// Chronic
import { illness as eczemaComprehensive } from './chronic/eczema-comprehensive';
import { illness as foodAllergies } from './chronic/food-allergies';
import { illness as gerd } from './chronic/gerd';
import { illness as ironDeficiencyAnemia } from './chronic/iron-deficiency-anemia';
// Urinary
import { illness as hydronephrosis } from './urinary/hydronephrosis';
import { illness as kidneyInfection } from './urinary/kidney-infection';
import { illness as uti } from './urinary/uti';
import { illness as vesicoureteralReflux } from './urinary/vesicoureteral-reflux';
// Viral Rash
import { illness as chickenpox } from './viral-rash/chickenpox';
import { illness as coxsackie } from './viral-rash/coxsackie';
import { illness as fifthDisease } from './viral-rash/fifth-disease';
import { illness as herpangina } from './viral-rash/herpangina';
import { illness as measles } from './viral-rash/measles';
import { illness as roseola } from './viral-rash/roseola';
import { illness as scarletFever } from './viral-rash/scarlet-fever';
import { illness as viralExanthem } from './viral-rash/viral-exanthem';

export const allIllnesses: IllnessGuide[] = [
  // Respiratory
  adenovirus, asthma, bronchiolitis, bronchitis, commonCold, croup, flu, hmpv, pneumonia, rsv, whoopingCough,
  // Gastrointestinal
  foodPoisoning, gastroenteritis, intussusception, norovirus, pyloricStenosis, rotavirus,
  // ENT
  earInfection, gingivostomatitis, handFootMouth, laryngitis, peritonsillarAbscess, sinusitis, strepThroat, swimmersEar, tonsillitis,
  // Skin
  cellulitis, fungalDiaperRash, headLice, impetigo, molluscum, ringworm, scabies,
  // Serious
  bacterialMeningitis, kawasaki, misC, sepsis,
  // Chronic
  eczemaComprehensive, foodAllergies, gerd, ironDeficiencyAnemia,
  // Urinary
  hydronephrosis, kidneyInfection, uti, vesicoureteralReflux,
  // Viral Rash
  chickenpox, coxsackie, fifthDisease, herpangina, measles, roseola, scarletFever, viralExanthem,
];

export function getIllnessBySlug(slug: string): IllnessGuide | undefined {
  return allIllnesses.find((i) => i.slug === slug);
}

export function getIllnessesByCategory(category: string): IllnessGuide[] {
  return allIllnesses.filter((i) => i.category === category);
}

// Comparisons
import { comparison as asthmaVsReactiveAirway } from './comparison/asthma-vs-reactive-airway';
import { comparison as bacterialVsViralMeningitis } from './comparison/bacterial-vs-viral-meningitis';
import { comparison as bronchiolitisVsPneumonia } from './comparison/bronchiolitis-vs-pneumonia';
import { comparison as coldVsAllergies } from './comparison/cold-vs-allergies';
import { comparison as coldVsCovid } from './comparison/cold-vs-covid';
import { comparison as coldVsFlu } from './comparison/cold-vs-flu';
import { comparison as colicVsReflux } from './comparison/colic-vs-reflux';
import { comparison as croupVsBronchiolitis } from './comparison/croup-vs-bronchiolitis';
import { comparison as croupVsWhoopingCough } from './comparison/croup-vs-whooping-cough';
import { comparison as earInfectionVsTeething } from './comparison/ear-infection-vs-teething';
import { comparison as eczemaVsContactDermatitis } from './comparison/eczema-vs-contact-dermatitis';
import { comparison as eczemaVsRingworm } from './comparison/eczema-vs-ringworm';
import { comparison as fifthDiseaseVsOtherRashes } from './comparison/fifth-disease-vs-other-rashes';
import { comparison as foodAllergyVsIntolerance } from './comparison/food-allergy-vs-intolerance';
import { comparison as gastroenteritisVsFoodPoisoning } from './comparison/gastroenteritis-vs-food-poisoning';
import { comparison as hfmVsHerpangina } from './comparison/hfm-vs-herpangina';
import { comparison as hivesVsRash } from './comparison/hives-vs-rash';
import { comparison as impetigoVsEczema } from './comparison/impetigo-vs-eczema';
import { comparison as refluxVsPyloricStenosis } from './comparison/reflux-vs-pyloric-stenosis';
import { comparison as roseolaVsMeasles } from './comparison/roseola-vs-measles';
import { comparison as rsvVsCold } from './comparison/rsv-vs-cold';
import { comparison as rsvVsFlu } from './comparison/rsv-vs-flu';
import { comparison as strepVsViral } from './comparison/strep-vs-viral';
import { comparison as viralRashVsAllergicRash } from './comparison/viral-rash-vs-allergic-rash';
import { comparison as viralVsBacterial } from './comparison/viral-vs-bacterial';

export const allIllnessComparisons: IllnessComparison[] = [
  asthmaVsReactiveAirway, bacterialVsViralMeningitis, bronchiolitisVsPneumonia,
  coldVsAllergies, coldVsCovid, coldVsFlu, colicVsReflux,
  croupVsBronchiolitis, croupVsWhoopingCough, earInfectionVsTeething,
  eczemaVsContactDermatitis, eczemaVsRingworm, fifthDiseaseVsOtherRashes,
  foodAllergyVsIntolerance, gastroenteritisVsFoodPoisoning, hfmVsHerpangina,
  hivesVsRash, impetigoVsEczema, refluxVsPyloricStenosis, roseolaVsMeasles,
  rsvVsCold, rsvVsFlu, strepVsViral, viralRashVsAllergicRash, viralVsBacterial,
];

export function getIllnessComparisonBySlug(slug: string): IllnessComparison | undefined {
  return allIllnessComparisons.find((c) => c.slug === slug);
}
