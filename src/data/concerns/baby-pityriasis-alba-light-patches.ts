import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-pityriasis-alba-light-patches',
  title: 'Pityriasis Alba (Light Patches on Face)',
  category: 'skin',
  searchTerms: [
    'baby light patches face',
    'baby pityriasis alba',
    'baby white patches on cheeks',
    'baby pale patches face',
    'toddler light spots face',
    'baby face lighter patches',
    'baby cheek white patch',
    'pityriasis alba child',
    'baby faded patches face',
    'toddler white round patch face',
  ],
  quickAnswer:
    'Pityriasis alba is a very common, harmless condition that causes slightly lighter, faintly scaly patches, most often on the cheeks of children. It is more noticeable in darker skin tones and after sun exposure. It is related to mild eczema and dry skin. The patches fade on their own over months and are not contagious. Regular moisturizing helps.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Pityriasis alba is uncommon at this age. Light patches on a newborn should be evaluated to rule out other causes like ash leaf spots (which can be associated with tuberous sclerosis). Your pediatrician can help distinguish between different causes of light patches in young infants.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Pityriasis alba may begin to appear. The patches are typically round or oval, slightly lighter than the surrounding skin, and may have fine scaling. They are most common on the face but can also appear on the arms and trunk. Gentle moisturizing is the main treatment.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Patches may become more noticeable after sun exposure because the surrounding skin tans while the pityriasis alba patches do not. This is purely cosmetic and not harmful. Sunscreen use helps make the patches less noticeable by preventing the surrounding skin from tanning more.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Pityriasis alba is very common in toddlers, especially those with a history of dry skin or eczema. The patches may persist for months to years but always resolve eventually. No bleaching or lightening treatments are needed or appropriate. Consistent moisturizing and mild steroid cream if prescribed by your doctor can help the patches fade.',
    },
  ],
  whenNormal: [
    'Slightly lighter, faintly scaly round patches on the cheeks of a child with a history of dry skin or eczema',
    'Patches that are more visible in summer when surrounding skin is tanned',
    'Gradual improvement with regular moisturizing',
  ],
  whenToMention: [
    'You want to confirm that the light patches are pityriasis alba',
    'Patches are spreading, becoming completely white, or showing no signs of improvement after months',
    'You are concerned the patches could be vitiligo',
  ],
  whenToActNow: [
    'Completely white (not just lighter) well-defined patches that could indicate vitiligo',
    'Light patches in a young infant that should be evaluated to rule out tuberous sclerosis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Pityriasis Alba.',
      url: 'https://www.aad.org/public/diseases/a-z/pityriasis-alba',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Skin Conditions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Pityriasis Alba. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK448163/',
    },
  ],
  relatedConcernSlugs: ['baby-white-patches-on-skin', 'baby-vitiligo-signs', 'eczema', 'dry-skin'],
};
