import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hair-loss-patches',
  title: 'Patchy Hair Loss in Baby',
  category: 'skin',
  searchTerms: [
    'baby hair loss patches',
    'baby bald spot',
    'baby losing hair in patches',
    'baby patchy hair',
    'infant hair loss',
    'baby bald patch on head',
    'toddler hair loss',
    'baby hair falling out patches',
    'baby hair thinning spots',
    'baby rubbing head bald spot',
  ],
  quickAnswer:
    'Patchy hair loss in babies is usually caused by friction from lying on the back (positional alopecia), a very common and harmless condition. Other causes include alopecia areata, scalp ringworm, or cradle cap. Positional hair loss fills in naturally as the baby spends more time sitting up.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Many newborns lose their birth hair in the first few months, which is normal. Babies who sleep on their backs (as recommended for safe sleep) often develop a bald patch at the back of the head from friction. This is completely harmless and resolves as the baby grows.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The positional bald spot is often most noticeable at this age. Hair may also be thin if the baby rubs their head against the crib mattress. This is normal and not a sign of a nutritional problem. As tummy time and sitting increase, the friction-related hair loss will improve.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies sit up and spend less time on their backs, positional hair loss usually fills in. If new, well-defined round patches of hair loss appear without scaling or redness, alopecia areata should be considered and evaluated by your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may develop hair loss from alopecia areata, tinea capitis (scalp ringworm), or hair-pulling habits (trichotillomania). If you notice new patches of hair loss that are not related to friction, or if the scalp in the bald area looks scaly or has black dots, have your pediatrician evaluate it.',
    },
  ],
  whenNormal: [
    'A bald spot at the back of the head from sleeping on the back that gradually fills in',
    'Normal shedding of newborn hair in the first few months',
    'Thinning of the overall hair that resolves as new hair grows in',
  ],
  whenToMention: [
    'Well-defined round patches of complete hair loss appear',
    'Hair loss is accompanied by scaling, redness, or itching of the scalp',
    'Your child appears to be pulling out their own hair',
  ],
  whenToActNow: [
    'Hair loss with a swollen, boggy, tender scalp area suggesting a kerion from tinea capitis',
    'Widespread hair loss with other signs of illness such as fatigue or weight loss',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hair Loss in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Hair-Loss.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Hair Loss: Alopecia Areata.',
      url: 'https://www.aad.org/public/diseases/hair-loss/types/alopecia-areata',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Alopecia in Children. Pediatric Clinics of North America.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24636195/',
    },
  ],
  relatedConcernSlugs: ['baby-alopecia-areata', 'baby-tinea-capitis-scalp', 'baby-cradle-cap-hair-loss'],
};
