import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'strawberry-hemangioma',
  title: 'My Baby Has a Strawberry Hemangioma',
  category: 'skin',
  searchTerms: [
    'strawberry hemangioma baby',
    'strawberry birthmark',
    'red raised birthmark',
    'infantile hemangioma',
    'baby has red bump growing',
    'strawberry mark treatment',
    'when do hemangiomas go away',
    'hemangioma on baby face',
    'vascular birthmark baby',
    'red birthmark getting bigger',
  ],
  quickAnswer:
    'A strawberry hemangioma is a bright red, raised birthmark made of extra blood vessels. It typically appears in the first few weeks of life, grows for several months, and then slowly shrinks and fades over several years. Most hemangiomas are harmless and do not require treatment, though your pediatrician will monitor growth and location.',
  byAge: [
    {
      ageRange: '0-4 weeks',
      context:
        'Hemangiomas are rarely present at birth but typically appear within the first 2-4 weeks of life as a small red spot or pale area that quickly turns bright red and raised. You may first notice a faint mark that rapidly becomes more prominent. Early evaluation by your pediatrician helps establish a baseline for monitoring growth.',
    },
    {
      ageRange: '1-5 months',
      context:
        'This is the rapid growth phase. The hemangioma may grow quickly, sometimes doubling in size over weeks. It becomes bright red, raised, and has a bumpy texture resembling a strawberry. While this growth can be alarming, it is expected behavior. Most hemangiomas complete the majority of their growth by 5 months of age.',
    },
    {
      ageRange: '5-12 months',
      context:
        'Growth typically slows and then stops during this period. The hemangioma reaches its maximum size and then enters a plateau phase. It remains bright red and raised but should not continue enlarging. If located near the eyes, nose, mouth, or diaper area, closer monitoring or treatment may be recommended to prevent functional problems.',
    },
    {
      ageRange: '12 months - 5 years',
      context:
        'The hemangioma begins to shrink and fade during this involution phase. The bright red color gradually dulls, and the raised texture flattens. This process is very slow, with about 50% of hemangiomas mostly gone by age 5 and 90% improved by age 9. No treatment is needed for this natural fading process.',
    },
    {
      ageRange: '5+ years',
      context:
        'Most hemangiomas have significantly faded by this age, leaving behind normal skin or sometimes a slight textural change or faint discoloration. If a residual mark is bothersome, dermatology consultation can discuss cosmetic treatment options. The vast majority of hemangiomas resolve without scarring or lasting issues.',
    },
  ],
  whenNormal: [
    'A bright red, raised, bumpy mark that appears within the first month of life',
    'The hemangioma grows steadily for the first few months and then plateaus',
    'The mark is located on an area of the body where it does not interfere with vision, breathing, or feeding',
    'Your baby is otherwise healthy, feeding well, and meeting developmental milestones',
    'The hemangioma is not ulcerated, bleeding, or showing signs of infection',
  ],
  whenToMention: [
    'The hemangioma is located near the eye, nose, mouth, or diaper area where it could interfere with function',
    'Your baby has multiple hemangiomas (five or more) scattered across the body',
    'The hemangioma continues to grow rapidly beyond 5-6 months of age',
    'The surface of the hemangioma becomes raw, develops a sore, or bleeds easily',
  ],
  whenToActNow: [
    'A hemangioma near the eye is growing and affecting your baby\'s vision or ability to open the eyelid',
    'A hemangioma in the airway or neck area is causing noisy breathing, stridor, or breathing difficulty',
    'The hemangioma develops a large, painful ulcer that will not stop bleeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infantile Hemangiomas. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Hemangioma: Diagnosis and Treatment.',
      url: 'https://www.aad.org/public/diseases/a-z/hemangioma-treatment',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infantile Hemangioma. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001459.htm',
    },
  ],
};
