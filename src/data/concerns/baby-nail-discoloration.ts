import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-nail-discoloration',
  title: 'Nail Color Changes in Baby',
  category: 'skin',
  searchTerms: [
    'baby nail discoloration',
    'baby nail color change',
    'baby nails turning yellow',
    'baby nail dark line',
    'baby green nail',
    'baby nail white spots',
    'infant nail color abnormal',
    'toddler nail discoloration',
    'baby nails turning brown',
    'baby dark spot under nail',
  ],
  quickAnswer:
    'Nail color changes in babies can have many causes. White spots are usually from minor trauma and are harmless. Yellow nails can result from nail polish or fungal infections (rare in babies). Green nails may indicate a bacterial infection. A dark line or spot under a nail that was not caused by injury should be evaluated by your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn nails are thin and soft and may have a slightly blue or purple tint, which is normal if circulation is still maturing. Nails may also have small white marks from normal minor trauma. If nails appear very blue along with blue lips, this could indicate a circulation problem and needs evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Baby nails are growing faster and minor trauma from grasping objects may cause white spots or tiny bruises under the nail. These grow out over weeks and are harmless. A green or yellow discoloration that does not grow out may need evaluation for infection.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active, minor nail injuries are common. A dark spot under the nail after a finger is caught in something is likely a small bruise (subungual hematoma) that will grow out. If a dark line appears without known injury, mention it to your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers frequently injure their nails and fingers. Bruises under the nail from door catches or dropping objects are common and resolve as the nail grows. Persistent nail discoloration without clear cause, especially a single dark longitudinal stripe, should be evaluated.',
    },
  ],
  whenNormal: [
    'Small white spots on nails from minor trauma',
    'A dark bruise under a nail after a known finger injury that is growing out gradually',
    'Slightly bluish nails in a newborn that improves with warming',
  ],
  whenToMention: [
    'Green, yellow, or brown nail discoloration that is persistent',
    'A dark line running along the length of a nail without known injury',
    'Nail changes accompanied by pain, swelling, or separation from the nail bed',
  ],
  whenToActNow: [
    'Blue nails with blue lips and poor feeding suggesting a circulation or oxygen problem',
    'A very painful, swollen nail bed with pus suggesting a paronychia (nail infection)',
    'A rapidly growing dark lesion under a nail',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fingernails and Toenails. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Nail-Problems.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Nail Conditions.',
      url: 'https://www.aad.org/public/diseases/nail-diseases',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Nail Disorders in Children. Pediatric Dermatology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25879514/',
    },
  ],
  relatedConcernSlugs: ['baby-nail-ridges-lines', 'baby-nail-peeling', 'baby-nail-fungus-onychomycosis'],
};
