import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-nail-fungus-onychomycosis',
  title: 'Fungal Nail Infection in Baby',
  category: 'skin',
  searchTerms: [
    'baby nail fungus',
    'baby onychomycosis',
    'baby thick yellow nail',
    'infant nail fungal infection',
    'toddler toenail fungus',
    'baby toenail thick crumbly',
    'fungal nail baby treatment',
    'baby nail turning thick',
    'toddler nail fungus',
    'baby toenail changing color thick',
  ],
  quickAnswer:
    'Fungal nail infections (onychomycosis) are rare in babies and toddlers but can occasionally occur. The nail may become thick, yellow, crumbly, or lifted from the nail bed. Many conditions can mimic fungal nails in children, so proper diagnosis with a nail clipping culture is important before starting treatment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Fungal nail infections are extremely rare in newborns. If a newborn\'s nail appears abnormal, it is more likely a congenital variation or related to a skin condition. Have your pediatrician evaluate any nail abnormalities in this age group.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Nail changes at this age are rarely fungal. Conditions like eczema, psoriasis, or trauma can cause nail thickening or discoloration. If a nail looks thickened or discolored, your pediatrician can help determine the cause.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While still uncommon, toenail fungus may begin in babies who are standing and walking if they are exposed to warm, moist environments. The toenails are affected more commonly than fingernails. A thick, discolored nail should be evaluated before assuming it is fungal.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who attend swim classes or walk barefoot in communal areas have a slightly higher risk. Treatment of confirmed onychomycosis in young children typically involves oral antifungal medication and takes several months. Topical antifungal nail lacquers may be tried first for mild cases.',
    },
  ],
  whenNormal: [
    'Mild nail thickening from repeated minor trauma to the toe from shoes that is not actually fungal',
  ],
  whenToMention: [
    'A nail becomes persistently thick, yellow, crumbly, or separated from the nail bed',
    'You suspect a fungal nail infection and want it properly diagnosed',
    'A confirmed fungal nail is not improving with treatment',
  ],
  whenToActNow: [
    'A thick, discolored nail becomes red, swollen, and painful suggesting an associated bacterial infection',
    'Rapid changes in multiple nails along with skin or other symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Nail Fungus: Diagnosis and Treatment.',
      url: 'https://www.aad.org/public/diseases/a-z/nail-fungus-treatment',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Nail Problems. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Nail-Problems.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Onychomycosis in Children. Pediatric Dermatology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25879514/',
    },
  ],
  relatedConcernSlugs: ['baby-nail-discoloration', 'baby-nail-ridges-lines', 'baby-athletes-foot-toddler'],
};
