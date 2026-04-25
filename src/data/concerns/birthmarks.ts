import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'birthmarks',
  title: 'Baby Birthmarks',
  category: 'skin',
  searchTerms: [
    'baby birthmark',
    'red mark on baby skin',
    'baby strawberry mark',
    'hemangioma baby',
    'mongolian spot baby',
    'baby port wine stain',
    'stork bite baby',
    'baby birthmark getting bigger',
    'are baby birthmarks dangerous',
    'salmon patch baby',
    'baby blue spot on back',
  ],
  quickAnswer:
    'Birthmarks are extremely common -- more than 80% of babies have at least one. Most birthmarks are completely harmless and many fade or disappear on their own over time. The type, location, and any changes over time help your pediatrician determine whether any follow-up is needed.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Many birthmarks are visible at birth or appear in the first few weeks. Salmon patches (also called stork bites or angel kisses) are flat pink-red marks on the eyelids, forehead, or back of the neck and are the most common birthmark. Mongolian spots are flat, blue-grey patches, usually on the lower back and buttocks, most common in babies with darker skin tones. Both types are completely harmless.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Infantile hemangiomas (strawberry marks) typically appear in the first few weeks and grow rapidly during months 1-3. They are raised, bright red, and can be alarming as they get bigger, but the vast majority are harmless and will shrink on their own. If a hemangioma is near the eye, nose, mouth, or in the diaper area, your pediatrician may recommend early treatment to prevent complications.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Hemangiomas usually reach their maximum size by around 5-6 months and then begin to slowly flatten and fade, a process called involution. Mongolian spots remain stable and typically begin fading in the toddler years. Port wine stains, which are flat, pink to dark red marks, do not fade on their own and may darken over time; they should be monitored by your pediatrician.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Most hemangiomas are well into their shrinking phase by this age, with about 50% significantly resolved by age 5 and 90% by age 9. Salmon patches on the eyelids and forehead usually fade by age 2, though those on the back of the neck may persist into adulthood. Mongolian spots continue to fade gradually.',
    },
  ],
  whenNormal: [
    'Flat pink or red patches on the eyelids, forehead, or back of the neck (salmon patches or stork bites)',
    'Flat blue-grey patches on the lower back or buttocks (Mongolian spots)',
    'A small hemangioma (strawberry mark) that is growing in the first few months but is not near the eyes, nose, or mouth',
    'Small, flat, light-brown spots (cafe-au-lait spots) -- one or two are very common',
    'Any birthmark that your pediatrician has examined and is monitoring at well visits',
  ],
  whenToMention: [
    'A hemangioma is near the eye, nose, mouth, lip, or diaper area where it could cause functional problems',
    'A hemangioma is growing very rapidly or is larger than a few centimeters',
    'You notice more than 5-6 cafe-au-lait spots, as this number can occasionally be associated with a genetic condition',
    'A birthmark is ulcerating, bleeding, or seems painful',
  ],
  whenToActNow: [
    'A hemangioma near the eye is affecting your baby\'s ability to open the eye, which could impact vision development',
    'A large hemangioma is bleeding heavily and you cannot stop it with gentle pressure after 10 minutes',
    'A birthmark changes dramatically in appearance, becomes tender, or your baby seems unwell',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birthmarks in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infantile Hemangiomas: About Strawberry Baby Birthmarks. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Infantile-Hemangiomas-Baby-Birthmarks.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Birthmarks - Red. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001440.htm',
    },
  ],
};
