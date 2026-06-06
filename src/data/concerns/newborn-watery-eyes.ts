import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-watery-eyes',
  title: 'Excessive Tearing in Newborns (Watery Eyes)',
  category: 'medical',
  searchTerms: [
    'newborn watery eyes',
    'baby tearing excessively',
    'baby eyes watering',
    'newborn epiphora',
    'baby tear duct blocked',
    'newborn excessive tears',
    'baby eye watering one side',
    'infant watery eye',
    'newborn tearing constantly',
    'baby eye always wet',
  ],
  quickAnswer:
    'Watery or teary eyes in newborns are most commonly caused by a blocked tear duct (nasolacrimal duct obstruction), which affects up to 20% of babies. The condition is usually harmless and resolves on its own in the first year. Gentle massage of the tear duct area can help, and true tears typically do not appear until 1-3 months of age.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns typically do not produce tears when crying in the first few weeks. If you notice watery or teary eyes at this very early age, it is often due to a blocked tear duct. The tear duct, which normally drains tears from the eye into the nose, may not be fully open at birth. You may notice a pool of tears in the eye, tears spilling onto the cheek, or sticky yellowish discharge, especially after sleep. Gentle nasolacrimal massage (pressing gently at the inner corner of the eye and stroking downward toward the nose) 2-3 times per day can help open the duct.',
    },
    {
      ageRange: '1-3 months',
      context:
        'As your baby begins producing tears (around 1-3 months), a blocked tear duct becomes more noticeable. You may see persistent tearing, crusting on the eyelashes, or sticky discharge. Continue gentle tear duct massage. Keep the area clean with a warm, damp washcloth. The condition resolves without treatment in most babies by 6-12 months.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Blocked tear ducts continue to resolve spontaneously in the majority of cases. Continue tear duct massage as recommended by your pediatrician. If the discharge becomes thick, green, or the eye becomes significantly red or swollen, contact your doctor, as this could indicate a secondary infection (dacryocystitis).',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most blocked tear ducts resolve by 12 months. If the tearing and discharge persist beyond 12 months, your pediatrician may refer you to a pediatric ophthalmologist. A simple procedure called probing can be performed to open the blocked duct, which is successful in over 90% of cases.',
    },
  ],
  whenNormal: [
    'Tearing or watery eyes with clear or slightly yellowish discharge in one or both eyes',
    'Crusting on eyelashes after sleep that is easily cleaned',
    'The white part of the eye appears normal (not red)',
    'Baby is not bothered by the tearing and can open the eye fully',
  ],
  whenToMention: [
    'Tearing persists beyond 12 months of age',
    'You are unsure about proper tear duct massage technique',
    'Discharge is getting thicker or more frequent despite massage',
  ],
  whenToActNow: [
    'The area around the inner corner of the eye becomes red, swollen, and tender, which may indicate a tear duct infection (dacryocystitis) requiring antibiotics',
    'The eye itself appears red or swollen, or your baby has green/pus-like discharge along with fever',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Blocked Tear Ducts. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Blocked-Tear-Ducts.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Blocked Tear Duct. Patient Care and Health Information.',
      url: 'https://www.mayoclinic.org/diseases-conditions/blocked-tear-duct/symptoms-causes/syc-20351369',
    },
  ],
  relatedConcernSlugs: ['newborn-eye-discharge-blocked-duct', 'newborn-conjunctivitis-sticky-eye', 'newborn-crossed-eyes-normal'],
};
