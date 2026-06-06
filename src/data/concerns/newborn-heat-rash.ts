import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-heat-rash',
  title: 'Heat Rash (Miliaria) in Newborns',
  category: 'skin',
  searchTerms: ['newborn heat rash', 'baby heat rash', 'miliaria baby', 'prickly heat newborn', 'baby rash from overheating', 'newborn tiny bumps heat', 'baby sweat rash', 'heat rash neck folds baby', 'miliaria rubra baby', 'newborn overheating rash'],
  quickAnswer:
    'Heat rash (miliaria) in newborns appears as tiny red bumps or clear blisters, usually in skin folds, on the face, neck, chest, or areas covered by clothing. It occurs when sweat glands become blocked from overheating or overdressing. It is harmless and resolves quickly once baby is cooled down.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborns are prone to heat rash because their sweat glands are immature. The rash appears as tiny red bumps (miliaria rubra) or tiny clear blisters (miliaria crystallina) in areas where sweat is trapped: neck folds, chest, back, diaper area, and anywhere clothing is tight. Treatment is simple: cool your baby down, remove excess clothing, and move to a cooler environment. Avoid heavy creams or lotions that can block pores. Dress your baby in one layer more than you would wear, not multiple extra layers.' },
    { ageRange: '1-3 months', context: 'Heat rash remains common during this period. As you learn your baby\'s temperature regulation needs, you will become better at dressing them appropriately. The rash resolves within hours to a day once overheating is addressed. Keep the nursery at a comfortable temperature (68-72F).' },
    { ageRange: '3-6 months', context: 'Heat rash may occur during warmer months or when babies are overdressed. The same cooling measures apply. Avoid direct sun exposure and dress your baby in light, breathable fabrics.' },
    { ageRange: '6-12 months', context: 'As your baby becomes more active, heat rash may occur in areas of increased friction or sweating. Continue to dress appropriately for the temperature and keep skin folds dry.' },
  ],
  whenNormal: ['Tiny red bumps or clear blisters in skin folds or under clothing that appear during warm weather or overdressing', 'Rash resolves quickly (within hours) after cooling down', 'Baby is not bothered by the rash', 'No spreading redness, pus, or fever'],
  whenToMention: ['Heat rash does not resolve within a day or two after cooling measures', 'The rash looks different from typical heat rash (spreading, raised, painful)', 'You are unsure whether the rash is heat rash or something else'],
  whenToActNow: ['Rash accompanied by fever, which could indicate infection rather than heat rash', 'Signs of overheating: hot to touch, rapid breathing, lethargy, or unresponsiveness'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Heat Rash. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx' },
    { org: 'Mayo Clinic', citation: 'Mayo Clinic. Heat Rash. Patient Care and Health Information.', url: 'https://www.mayoclinic.org/diseases-conditions/heat-rash/symptoms-causes/syc-20373276' },
  ],
  relatedConcernSlugs: ['newborn-overdressing-overheating', 'newborn-room-temperature-ideal', 'newborn-erythema-toxicum-timing'],
};
