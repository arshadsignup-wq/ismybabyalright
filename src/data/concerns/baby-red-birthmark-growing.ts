import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-red-birthmark-growing',
  title: 'Baby Red Birthmark Growing',
  category: 'skin',
  searchTerms: [
    'baby red birthmark growing',
    'baby hemangioma getting bigger',
    'red mark on baby getting larger',
    'strawberry birthmark growing',
    'baby red spot expanding',
    'infantile hemangioma growth',
    'when do hemangiomas stop growing',
    'red birthmark baby face',
    'should I worry about baby birthmark',
    'hemangioma treatment baby',
  ],
  quickAnswer:
    'Infantile hemangiomas (red birthmarks) are the most common benign tumors of infancy, appearing in up to 5% of babies. They typically grow rapidly in the first 3-5 months, then growth slows, and most begin to shrink on their own by 12 months. While watching them grow can be alarming, the majority resolve without treatment by age 5-7.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Hemangiomas may be present at birth as a faint red mark or pale spot, or they may appear in the first 2-4 weeks. They start small and begin a rapid growth phase. Early identification is helpful because if the hemangioma is in a concerning location (near eyes, nose, mouth, or in the diaper area), early treatment can prevent complications.',
    },
    {
      ageRange: '1-5 months',
      context:
        'This is the rapid growth phase. The hemangioma may grow quickly, becoming raised, bright red, and larger. This is the most worrying time for parents, but rapid growth is the typical pattern. If the hemangioma is on the face (especially near the eye, nose, or lip), growing very large, or ulcerating (developing open sores), your pediatrician should evaluate it promptly.',
    },
    {
      ageRange: '5-12 months',
      context:
        'Growth typically slows significantly after 5 months. By 9-12 months, most hemangiomas have reached their maximum size and some begin to show early signs of involution (shrinking). The bright red color may start to fade to a purplish-gray, beginning from the center outward.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Most hemangiomas are in the involution phase by now, slowly shrinking and fading. About 50% resolve significantly by age 5, and 70% by age 7. Some may leave behind residual skin changes like loose skin, a faint mark, or tiny blood vessels. If your child\'s hemangioma has not started to shrink by 18 months, discuss it with your pediatrician.',
    },
  ],
  whenNormal: [
    'A small red birthmark that appears in the first few weeks and grows during the first 3-5 months',
    'The hemangioma is bright red, raised, and spongy to the touch',
    'Growth slows after 5-6 months and the color begins to fade toward the end of the first year',
    'The hemangioma is in a location that does not interfere with function (not near eyes, airway, or in the diaper area)',
  ],
  whenToMention: [
    'The hemangioma is on the face, especially near the eye, nose, lip, or ear',
    'The birthmark is growing very rapidly or is larger than expected',
    'The hemangioma has developed an ulcer (open sore) or seems painful',
  ],
  whenToActNow: [
    'A hemangioma near the eye is interfering with vision or near the nose or mouth is affecting breathing or feeding',
    'The hemangioma is bleeding heavily and you cannot stop the bleeding with firm pressure for 15 minutes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infantile Hemangiomas: About Strawberry Baby Birthmarks. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Infantile-Hemangiomas.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline for the Management of Infantile Hemangiomas. Pediatrics, 2019.',
      url: 'https://publications.aap.org/pediatrics/article/143/1/e20183475/37026',
    },
  ],
};
