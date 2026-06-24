import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-birthmark-concern',
  title: 'Should I Be Worried About My Baby\'s Birthmark?',
  category: 'skin',
  searchTerms: [
    'baby birthmark concern',
    'newborn birthmark types',
    'baby birthmark growing',
    'birthmark on baby face',
    'mongolian spot baby',
    'port wine stain baby',
    'cafe au lait spots baby',
    'birthmark or bruise newborn',
    'baby mole at birth',
    'birthmark changing shape baby',
    'is my baby\'s birthmark normal',
  ],
  quickAnswer:
    'Most birthmarks are harmless and do not require treatment. Common types include salmon patches (stork bites), Mongolian spots, and cafe au lait spots, which are all benign. Some birthmarks like port wine stains or large hemangiomas may need monitoring or treatment. Your pediatrician can evaluate any birthmark during routine well-child visits and determine whether further assessment is needed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Many birthmarks are visible at birth or appear within the first few weeks. Salmon patches (pink flat marks on the eyelids, forehead, or back of neck) are extremely common and usually fade within the first year or two. Mongolian spots (blue-gray flat areas on the back or buttocks, most common in babies with darker skin tones) are completely benign and typically fade by school age. Congenital moles present at birth should be documented by your pediatrician for monitoring over time.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Some birthmarks, particularly infantile hemangiomas (strawberry marks), may appear in the first few weeks and grow rapidly during the first 3-6 months before slowly shrinking. Most hemangiomas resolve on their own by age 5-10. However, hemangiomas near the eyes, nose, mouth, or diaper area, or very large hemangiomas, may need early treatment with propranolol or other interventions. Cafe au lait spots (light brown flat marks) are common; having one or two is normal, but six or more may warrant genetic evaluation.',
    },
    {
      ageRange: '12-36 months',
      context:
        'By the toddler years, most birthmarks have declared their pattern - either fading, stable, or (in the case of some hemangiomas) beginning to involute. Continue to monitor any birthmark for significant changes in size, color, shape, texture, or if it begins to bleed or ulcerate. Port wine stains (flat, pink-to-dark red marks) do not fade on their own and can be treated with pulsed dye laser therapy if desired. Regular dermatology follow-up is recommended for large congenital moles or unusual-appearing marks.',
    },
  ],
  whenNormal: [
    'Your baby has a salmon patch (stork bite) on the eyelids, forehead, or back of the neck - these are the most common birthmarks and are harmless.',
    'Your baby has a Mongolian spot - a flat blue-gray area, typically on the lower back or buttocks.',
    'Your baby has a small hemangioma that your pediatrician has evaluated and is monitoring over time.',
    'Your baby has one or two cafe au lait spots that are flat and evenly colored.',
  ],
  whenToMention: [
    'A birthmark is growing quickly, changing shape, or changing color.',
    'Your baby has a birthmark near the eye, nose, lip, or genital area that could interfere with function.',
    'Your baby has six or more cafe au lait spots, which can be associated with neurofibromatosis.',
    'A hemangioma appears to be ulcerating, bleeding, or causing your baby pain.',
  ],
  whenToActNow: [
    'A birthmark is actively bleeding and you cannot stop the bleeding with gentle pressure.',
    'A birthmark near the airway (nose, throat) appears to be affecting your baby\'s breathing or feeding.',
    'A large facial hemangioma is growing rapidly near the eye and could obstruct vision - early treatment is important to prevent amblyopia.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'strawberry-hemangioma',
    'hemangioma-growing',
    'hives',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birthmarks in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Birthmarks - Overview. MedlinePlus.',
      url: 'https://medlineplus.gov/birthmarks.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline for the Management of Infantile Hemangiomas. Pediatrics, 2019.',
      url: 'https://publications.aap.org/pediatrics/article/143/1/e20183475/37249',
    },
  ],
};
