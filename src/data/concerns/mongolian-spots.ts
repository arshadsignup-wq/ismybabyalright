import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'mongolian-spots',
  title: 'My Baby Has Blue-Gray Spots on Their Skin',
  category: 'skin',
  searchTerms: [
    'mongolian spots',
    'blue gray birthmark baby',
    'blue spot on baby back',
    'mongolian blue spot',
    'baby bruise looking birthmark',
    'dermal melanocytosis',
    'slate gray birthmark',
    'blue birthmark on buttocks',
    'do mongolian spots go away',
    'baby born with blue marks',
  ],
  quickAnswer:
    'Mongolian spots are flat, blue-gray birthmarks that commonly appear on the lower back, buttocks, or shoulders of babies with darker skin tones. They are completely harmless, caused by pigment cells deep in the skin, and usually fade by school age. They are not bruises and do not require any treatment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Mongolian spots are present at birth or appear in the first few weeks of life. They look like flat, blue-gray or bruise-like patches, most commonly on the lower back, buttocks, or shoulders. They are especially common in babies of Asian, Hispanic, Black, and Indigenous descent. These marks are entirely benign and not related to any health condition.',
    },
    {
      ageRange: '3-12 months',
      context:
        'The spots remain unchanged during this period. They may be quite prominent and are sometimes mistaken for bruises by caregivers unfamiliar with them. It is important to document mongolian spots at well-baby visits to distinguish them from injury. They do not hurt, itch, or bother your baby in any way.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Mongolian spots often begin to fade during the toddler years as the pigment cells migrate deeper into the skin. The blue-gray color may lighten, and the borders may become less distinct. Many spots will disappear completely by the time your child starts school, though some may persist into adulthood.',
    },
    {
      ageRange: '3+ years',
      context:
        'Most mongolian spots have faded significantly by preschool age. Occasionally, spots in unusual locations (face, arms, legs) or very extensive spots may persist longer. These are still harmless but can be discussed with a dermatologist if desired for cosmetic reasons. No medical treatment is needed.',
    },
  ],
  whenNormal: [
    'Flat, blue-gray, or slate-colored patches present at birth or appearing in the first weeks of life',
    'Spots located on the lower back, buttocks, shoulders, or occasionally the legs or arms',
    'The marks do not change in size, shape, or color over weeks to months',
    'Your baby is otherwise healthy and the marks do not seem to cause any discomfort',
    'One or both parents or extended family members had similar birthmarks as babies',
  ],
  whenToMention: [
    'You are unsure if the marks are mongolian spots or bruises, especially if they appear in unusual locations',
    'The spots seem to be darkening, growing, or changing rather than fading over time',
    'Your baby has many spots covering large areas of the body',
  ],
  whenToActNow: [
    'New bruise-like marks appear suddenly that were not present at birth, especially if accompanied by other signs of bleeding or bruising',
    'Your baby shows signs of illness, unusual fatigue, or other skin changes along with the marks',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Birthmarks and Rashes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Mongolian Spots (Dermal Melanocytosis).',
      url: 'https://www.aad.org/public/diseases/a-z/birthmarks-overview',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Mongolian Blue Spots. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001388.htm',
    },
  ],
};
