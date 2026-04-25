import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cafe-au-lait-spots',
  title: 'My Baby Has Light Brown Spots',
  category: 'skin',
  searchTerms: [
    'cafe au lait spots',
    'light brown birthmark baby',
    'cafe au lait macules',
    'baby coffee colored spots',
    'brown patches on baby skin',
    'multiple brown birthmarks',
    'cafe au lait neurofibromatosis',
    'baby tan spots',
    'flat brown birthmark',
    'when to worry cafe au lait',
  ],
  quickAnswer:
    'Café-au-lait spots are flat, light brown birthmarks that are very common and usually harmless. One or two spots are present in about 20-30% of all babies. However, having six or more spots larger than 5mm may be a sign of neurofibromatosis, so your pediatrician will monitor the number and size of spots over time.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Café-au-lait spots are often present at birth or appear in the first few months of life. They are flat, well-defined, light brown patches that can appear anywhere on the body. A single spot or two is very common and usually has no significance. Your pediatrician will note the number and size of spots in your baby\'s chart.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Existing café-au-lait spots may become slightly darker or more noticeable as your baby\'s skin pigmentation develops. New spots can also appear during this time. If your baby has six or more spots, your pediatrician may monitor for other signs of neurofibromatosis, a genetic condition that requires long-term follow-up.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'By this age, most café-au-lait spots that will appear have done so. The spots remain stable and do not fade or disappear. If your child has multiple spots, regular pediatric visits help monitor for any associated conditions. The vast majority of children with a few café-au-lait spots are completely healthy.',
    },
    {
      ageRange: '3+ years',
      context:
        'Café-au-lait spots are permanent and do not change significantly after early childhood. They pose no health risk themselves but may serve as a marker for genetic conditions if numerous. If cosmetically bothersome, laser treatment is an option, though this is rarely necessary or recommended in childhood.',
    },
  ],
  whenNormal: [
    'One or two flat, light brown, well-defined spots on the skin, present at birth or appearing in early infancy',
    'The spots do not change in texture, do not raise above the skin surface, and are painless',
    'Your baby has fewer than six spots, each smaller than 5mm in size',
    'Your baby is otherwise healthy with normal growth, development, and no unusual lumps or bumps',
    'No family history of neurofibromatosis or other genetic skin conditions',
  ],
  whenToMention: [
    'Your baby has six or more café-au-lait spots, especially if they are larger than 5mm in diameter',
    'New spots continue to appear frequently over time',
    'You notice freckling in the armpits, groin, or other unusual locations',
    'There is a family history of neurofibromatosis or similar genetic conditions',
  ],
  whenToActNow: [
    'Your child develops multiple soft lumps or bumps under the skin along with café-au-lait spots',
    'You notice vision changes, bone deformities, or developmental concerns in a child with multiple spots',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Café-au-Lait Spots. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Café-au-Lait Spots: What Parents Should Know.',
      url: 'https://www.aad.org/public/diseases/a-z/cafe-au-lait-spots',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Café-au-Lait Spots. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003067.htm',
    },
  ],
};
