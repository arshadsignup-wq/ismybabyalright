import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cradle-cap-hair-loss',
  title: 'Hair Loss with Cradle Cap',
  category: 'skin',
  searchTerms: [
    'cradle cap hair loss baby',
    'baby losing hair cradle cap',
    'cradle cap cause bald spots',
    'baby hair falling out with scales',
    'cradle cap treatment hair loss',
    'baby thin hair cradle cap',
    'will hair grow back cradle cap',
    'baby scalp scales hair loss',
    'seborrheic dermatitis hair loss baby',
    'cradle cap pulling hair out',
  ],
  quickAnswer:
    'Mild hair loss around cradle cap areas is common and temporary. The scales can trap hair as they flake off, making it look like hair is falling out. Gentle treatment of cradle cap preserves the hair follicles, and hair grows back fully once the condition resolves. Avoid picking at scales, as aggressive removal can pull out more hair.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Cradle cap often coincides with normal newborn hair shedding, which can make it seem like more hair is being lost. The combination of greasy scales and hair loss can look alarming but is temporary. Gently massaging oil into the scalp and using a soft brush loosens scales without damaging hair follicles.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If cradle cap scales are thick, hair may come off with the scales when they are removed. This is because the hair was already loose, not because the treatment caused hair loss. Be gentle when brushing and never pick or scratch at scales, which can irritate the scalp and worsen hair loss temporarily.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As cradle cap resolves, hair typically regrows in previously affected areas. If hair loss persists after cradle cap has cleared, or if the bald areas look different from cradle cap (smooth and round rather than scaly), have your pediatrician evaluate for other causes.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Persistent scalp scaling with hair loss beyond the first year should be evaluated to rule out tinea capitis (scalp ringworm) or other conditions. If your toddler\'s scalp has patches of scaling with broken hairs and black dots, this is more suggestive of a fungal infection than cradle cap.',
    },
  ],
  whenNormal: [
    'Mild hair loss around areas of cradle cap that resolves as the scales clear',
    'Hair coming off with scales during gentle treatment',
    'Full hair regrowth after cradle cap resolves',
  ],
  whenToMention: [
    'Significant hair loss accompanying cradle cap that is not improving',
    'Hair loss continues after cradle cap has cleared',
    'The scalp appears red, inflamed, or painful under the cradle cap scales',
  ],
  whenToActNow: [
    'A swollen, tender, boggy scalp area with hair loss that could indicate a kerion',
    'Widespread hair loss with other symptoms of illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cradle Cap. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Cradle-Cap.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Seborrheic Dermatitis: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/seborrheic-dermatitis-overview',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infantile Seborrheic Dermatitis. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK531461/',
    },
  ],
  relatedConcernSlugs: ['cradle-cap', 'baby-hair-loss-patches', 'baby-tinea-capitis-scalp'],
};
