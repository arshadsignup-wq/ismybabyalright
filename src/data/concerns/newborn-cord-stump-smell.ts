import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-cord-stump-smell',
  title: 'Smelly Umbilical Cord Stump',
  category: 'medical',
  searchTerms: ['umbilical cord stump smells', 'baby belly button smelly', 'cord stump odor', 'newborn cord smells bad', 'belly button stink newborn', 'umbilical cord stump foul smell', 'cord stump infected smell', 'baby cord stump rotting smell', 'normal cord stump smell', 'belly button odor baby'],
  quickAnswer: 'A mild odor from the umbilical cord stump as it dries and separates is normal. However, a strong, foul, or unpleasant smell can be a sign of infection (omphalitis) and should be evaluated by your pediatrician. Other signs of infection include redness, swelling, warmth, or discharge from the base of the cord stump.',
  byAge: [
    { ageRange: '0-1 month', context: 'The umbilical cord stump dries and separates naturally within 1-3 weeks after birth. As it dries, it may develop a mild odor, similar to a scab drying. This is normal. Keep the stump clean and dry: fold the diaper below the stump, expose it to air, and avoid covering it. Do not apply alcohol, antiseptics, or any products. If the smell becomes strong, foul, or is accompanied by redness or swelling at the base of the stump, discharge (pus), or warmth, this could indicate omphalitis (cord stump infection), which needs prompt antibiotic treatment.' },
    { ageRange: '1-3 months', context: 'The cord stump should have fallen off and the area healed. Any persistent odor from the belly button could indicate an umbilical granuloma or incomplete healing. If the belly button continues to ooze or smell, contact your pediatrician.' },
    { ageRange: '3-6 months', context: 'The belly button should be fully healed with no odor. Persistent issues may warrant further evaluation.' },
    { ageRange: '6-12 months', context: 'No cord-related concerns at this age. Normal belly button hygiene during baths is sufficient.' },
  ],
  whenNormal: ['Mild odor as the cord stump dries and separates', 'Small amount of dried blood or clear fluid at the base as the stump separates', 'The skin around the stump looks normal (not red or swollen)', 'Stump separates cleanly within 1-3 weeks'],
  whenToMention: ['The odor seems stronger than a mild drying smell', 'You see discharge or oozing from the base of the stump', 'The stump has not fallen off after 3 weeks'],
  whenToActNow: ['Foul smell with redness, swelling, or warmth spreading from the belly button, which indicates infection requiring urgent treatment', 'Baby has a fever along with cord stump symptoms', 'Active bleeding from the cord stump that does not stop with gentle pressure'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Umbilical Cord Care. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Umbilical-Cord-Care.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Care of the Umbilical Cord.', url: 'https://www.who.int/publications/i/item/WHO-RHR-98.4' },
  ],
  relatedConcernSlugs: ['umbilical-cord-stump-infection', 'newborn-cord-stump-not-falling-off', 'newborn-belly-button-oozing'],
};
