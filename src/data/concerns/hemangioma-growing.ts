import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'hemangioma-growing',
  title: 'My Baby\'s Hemangioma Is Getting Bigger',
  category: 'medical',
  searchTerms: [
    'baby hemangioma growing',
    'strawberry birthmark getting bigger',
    'baby red birthmark growing',
    'hemangioma treatment baby',
    'infantile hemangioma when to worry',
    'baby hemangioma on face',
    'hemangioma rapid growth',
    'will baby hemangioma go away',
    'propranolol for hemangioma',
    'hemangioma near eye baby',
  ],
  quickAnswer:
    'Infantile hemangiomas are the most common benign tumors in babies, appearing in about 5-10% of infants. They typically grow rapidly during the first 3-5 months, then gradually plateau and shrink over years. Most hemangiomas resolve on their own without treatment, but those near the eyes, nose, mouth, or airway may need early intervention.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Hemangiomas are not always visible at birth. They often first appear as a small red mark, pale spot, or area of fine blood vessels during the first 2-4 weeks of life. A precursor lesion may look like a flat red or blue patch. At this early stage, it can be difficult to predict how large the hemangioma will grow. If you notice a rapidly emerging red mark, bring it to your pediatrician\'s attention so they can monitor its location and growth trajectory.',
    },
    {
      ageRange: '1-5 months',
      context:
        'This is the proliferative (rapid growth) phase. Hemangiomas can double or triple in size during this period. Superficial hemangiomas appear bright red and raised (strawberry-like), while deeper ones may look blue or purple under the skin. The growth is most rapid during months 1-3. Most hemangiomas reach about 80% of their maximum size by 3-5 months. If the hemangioma is in a high-risk location (near the eye, nose, lips, airway, or diaper area) or is very large, your pediatrician may refer you to a specialist during this window for possible treatment with oral propranolol.',
    },
    {
      ageRange: '5-12 months',
      context:
        'Growth typically slows significantly and the hemangioma enters the plateau phase. The color may begin to dull slightly. Some hemangiomas may ulcerate (develop an open sore), which can be painful and prone to infection. Ulcerated hemangiomas need wound care and sometimes topical or oral medication. Most hemangiomas that do not require treatment will begin to show the first signs of involution (shrinking) toward the end of this period.',
    },
    {
      ageRange: '1-5 years',
      context:
        'This is the involution phase. The hemangioma gradually shrinks and fades, often turning from bright red to a dull grayish-purple, then becoming flatter and softer. About 50% of hemangiomas are significantly resolved by age 5, and 90% by age 9-10. Some may leave behind loose skin, a slight discoloration, or residual fatty tissue. If the cosmetic result is concerning, minor procedures can be considered later in childhood.',
    },
  ],
  whenNormal: [
    'A small hemangioma on the body or extremities that is growing during the first 3-5 months of life',
    'The hemangioma has stopped growing and is beginning to lighten in color after 6-12 months',
    'The surface skin is intact with no open sores or bleeding',
    'The hemangioma is not near the eyes, nose, mouth, ears, or diaper area',
  ],
  whenToMention: [
    'The hemangioma is growing rapidly or is larger than 2-3 centimeters',
    'The hemangioma is located on the face, scalp, neck, or diaper area where it could affect function or cause complications',
    'The surface has ulcerated (broken open) or is bleeding',
  ],
  whenToActNow: [
    'A hemangioma near the eye is affecting vision or causing the eyelid to droop, near the nose or mouth is obstructing breathing or feeding, or in the beard area (which may indicate airway involvement)',
    'Multiple hemangiomas (five or more) are present, as this may be associated with internal hemangiomas that need imaging to evaluate',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline for the Management of Infantile Hemangiomas. Pediatrics, 2019.',
      url: 'https://publications.aap.org/pediatrics/article/143/1/e20183475/37203/Clinical-Practice-Guideline-for-the-Management-of',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Infantile Hemangiomas: About Strawberry Baby Birthmarks.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Infantile-Hemangiomas-Baby-Birthmarks.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Hemangioma: Diagnosis and Treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/hemangioma/symptoms-causes/syc-20352334',
    },
  ],
};
