import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'birthmark-changes-concerns',
  title: 'When Birthmarks Change: What to Watch For',
  category: 'skin',
  searchTerms: [
    'birthmark changing baby',
    'birthmark getting bigger',
    'mole changing baby',
    'birthmark darker baby',
    'congenital nevus growing',
    'port wine stain growing',
    'birthmark raised bumpy',
    'cafe au lait spots baby',
    'mongolian spots fading',
  ],
  quickAnswer:
    'Most birthmarks are harmless and many change naturally as your child grows -- some fade, some darken, and some grow proportionally with the child. However, certain changes in birthmarks warrant medical attention, particularly rapid growth, ulceration, or the appearance of multiple cafe-au-lait spots. Your pediatrician monitors birthmarks at well-child visits and can determine whether any changes need further evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Some birthmarks are present at birth, while others appear in the first weeks of life. Infantile hemangiomas typically appear in the first few weeks and grow rapidly during the first 3-5 months, which can be alarming. Mongolian spots (dermal melanocytosis), which are flat, blue-gray patches commonly on the lower back and buttocks, are present at birth and are completely harmless. Stork bites (salmon patches) on the forehead, eyelids, or back of the neck are very common and usually fade within the first year.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Hemangiomas are in their most active growth phase during this period. While most are superficial and harmless, hemangiomas near the eyes, nose, mouth, or diaper area may require treatment. Port wine stains, which are flat, pink to deep purple marks caused by blood vessel malformations, do not fade on their own and grow proportionally with the child. These should be evaluated early, as treatment is most effective when started young.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By around 6-9 months, most hemangiomas begin to stop growing and will eventually start to shrink (involute), a process that can take several years. Congenital melanocytic nevi (brown or dark moles present at birth) should be monitored for changes in size, color, or texture. Cafe-au-lait spots -- flat, light brown patches -- are common and usually harmless, but having six or more may warrant discussion with your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Mongolian spots typically begin to fade during toddlerhood and most disappear by school age. Hemangiomas continue their slow involution phase, gradually becoming lighter and flatter. Congenital moles grow proportionally with your child, and any sudden change in color, shape, or texture should be mentioned to your pediatrician. New moles may also begin to appear, which is normal for toddlers with sun exposure.',
    },
  ],
  whenNormal: [
    'A hemangioma grows during the first 3-5 months of life and then gradually begins to shrink and lighten',
    'Mongolian spots gradually fade over the first few years of life',
    'Salmon patches (stork bites) on the forehead and eyelids become less noticeable and fade by age 1-2',
    'A congenital mole grows proportionally as your child grows, maintaining the same color and texture',
  ],
  whenToMention: [
    'A hemangioma is growing rapidly, is near the eyes, nose, mouth, or airway, or is ulcerating and painful',
    'Your child has six or more cafe-au-lait spots, which could be associated with neurofibromatosis',
    'A mole or birthmark changes color, develops irregular borders, or has an uneven texture',
    'A port wine stain is present on the face, particularly around the eye, which may be associated with Sturge-Weber syndrome',
  ],
  whenToActNow: [
    'A hemangioma near the airway, eye, or ear is growing rapidly and could impair breathing, vision, or hearing -- seek urgent evaluation',
    'A birthmark or mole suddenly becomes very dark, bleeds without trauma, or develops a sore that does not heal',
    'A large hemangioma is ulcerating, bleeding significantly, or appears infected with increasing redness, warmth, and pain',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birthmarks in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Birthmarks.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Infantile Hemangiomas: Current Knowledge, Future Directions. Pediatrics, 2015.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26416931/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline for the Management of Infantile Hemangiomas. Pediatrics, 2019.',
      url: 'https://publications.aap.org/pediatrics/article/143/1/e20183475/37048/Clinical-Practice-Guideline-for-the-Management-of',
    },
  ],
};
