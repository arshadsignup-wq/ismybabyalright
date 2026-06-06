import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-vitiligo-signs',
  title: 'Vitiligo Signs in Baby',
  category: 'skin',
  searchTerms: [
    'baby vitiligo',
    'baby white patches skin vitiligo',
    'baby losing skin color patches',
    'infant vitiligo',
    'baby depigmentation patches',
    'toddler vitiligo',
    'baby skin turning white patches',
    'vitiligo in children signs',
    'baby vitiligo treatment',
    'baby white spots spreading',
  ],
  quickAnswer:
    'Vitiligo is an autoimmune condition that causes well-defined white patches where the skin loses its pigment. It can occur at any age, including in babies. While it is not painful or dangerous, it can be emotionally significant. Early evaluation and treatment may help manage the condition. Other causes of white patches, like pityriasis alba and tinea versicolor, are more common and less concerning.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Vitiligo is uncommon in very young infants. White patches in newborns may be nevus depigmentosus (a type of birthmark), piebaldism, or tuberous sclerosis-associated ash leaf spots. Any well-defined white patch in a newborn should be evaluated by your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Vitiligo may begin to appear. The patches are typically well-defined, milky white, and may appear anywhere on the body. Vitiligo often develops in areas prone to friction or injury. A Wood lamp exam in your pediatrician\'s or dermatologist\'s office can help confirm the diagnosis.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If vitiligo patches are identified, treatment options for young children include topical calcineurin inhibitors or mild topical steroids. Early treatment may improve response. Sun protection for affected areas is important because depigmented skin burns more easily.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Vitiligo in toddlers may be stable or slowly progressive. Segmental vitiligo (affecting only one area of the body) often stabilizes after a period of spread. Non-segmental vitiligo may continue to develop new patches over time. Working with a dermatologist helps develop an appropriate management plan.',
    },
  ],
  whenNormal: [
    'Light patches that are slightly lighter than surrounding skin, irregular in border, and slightly scaly are more likely pityriasis alba than vitiligo',
  ],
  whenToMention: [
    'Well-defined, completely white patches appear on your baby\'s skin',
    'White patches are spreading or increasing in number',
    'You want to discuss treatment options for confirmed vitiligo',
  ],
  whenToActNow: [
    'White patches in a very young infant that could be associated with other conditions like tuberous sclerosis',
    'Rapid widespread depigmentation along with other health changes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Vitiligo: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/vitiligo-overview',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Vitiligo.',
      url: 'https://www.niams.nih.gov/health-topics/vitiligo',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Skin Conditions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx',
    },
  ],
  relatedConcernSlugs: ['baby-white-patches-on-skin', 'baby-pityriasis-alba-light-patches', 'baby-skin-color-uneven'],
};
