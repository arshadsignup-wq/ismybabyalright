import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-nail-ridges-lines',
  title: 'Lines and Ridges on Baby\'s Nails',
  category: 'skin',
  searchTerms: [
    'baby nail ridges',
    'baby nail lines',
    'baby ridged nails',
    'baby nail grooves',
    'baby horizontal nail lines',
    'baby vertical nail ridges',
    'beau lines baby nails',
    'infant nail ridges',
    'toddler nail lines',
    'baby nail texture rough',
  ],
  quickAnswer:
    'Ridges and lines on baby nails are usually harmless. Vertical ridges are normal variations. Horizontal ridges (Beau lines) can appear after illness, fever, or injury and grow out as the nail grows. Single deep horizontal grooves across multiple nails that appeared after a significant illness are a classic sign of temporary growth disruption and resolve completely.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn nails may have subtle ridges as they are very thin and soft. These are normal variations and do not indicate any nutritional deficiency. As nails mature and thicken over the first months, these variations typically become less noticeable.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby had a significant illness or high fever, you may notice a horizontal groove (Beau line) appearing across the nail weeks later, corresponding to the time of the illness. This grows out completely and is not harmful. It simply reflects a temporary pause in nail growth during the illness.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Nails may develop ridges or lines after hand-foot-and-mouth disease or other viral illnesses. Onychomadesis (nail shedding) can follow some viral infections. These changes are temporary and the nails grow back normally.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler nails may develop ridges from minor trauma to the nail matrix from finger injuries or nail biting. Vertical ridges are a normal finding at any age. Persistent, severe nail changes affecting multiple nails should be evaluated to rule out underlying conditions.',
    },
  ],
  whenNormal: [
    'Subtle vertical ridges on otherwise healthy nails',
    'A horizontal groove that appeared a few weeks after an illness and is growing out',
    'Minor nail texture variations in a healthy child',
  ],
  whenToMention: [
    'Deep grooves on multiple nails without a clear preceding illness',
    'Nail ridges accompanied by changes in nail color or shape',
    'You are concerned about a nutritional deficiency affecting nail growth',
  ],
  whenToActNow: [
    'Nail changes accompanied by joint pain, mouth sores, or skin rash that could suggest a systemic condition',
    'Nails that are severely deformed, painful, or showing signs of infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Nail Conditions.',
      url: 'https://www.aad.org/public/diseases/nail-diseases',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fingernails and Toenails. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Nail-Problems.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Beau Lines. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK557471/',
    },
  ],
  relatedConcernSlugs: ['baby-nail-discoloration', 'baby-nail-peeling', 'baby-nail-falling-off-onychomadesis'],
};
