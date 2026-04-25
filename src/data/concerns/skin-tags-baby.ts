import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'skin-tags-baby',
  title: 'My Baby Has a Skin Tag',
  category: 'skin',
  searchTerms: [
    'skin tag baby',
    'baby born with skin tag',
    'skin tag in front of ear',
    'baby ear tag',
    'preauricular skin tag',
    'extra skin on baby',
    'remove skin tag baby',
    'baby skin tag near ear',
    'skin tag treatment newborn',
    'skin tab on infant',
  ],
  quickAnswer:
    'Skin tags are small, soft pieces of extra skin that can be present at birth or develop in early infancy. They are usually harmless and most commonly appear near the ears, on the neck, or in skin folds. Most pediatricians recommend simple observation, though some tags can be removed for cosmetic reasons if desired.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Many skin tags are present at birth, particularly preauricular tags (small skin growths in front of the ear). These are relatively common and usually isolated findings with no associated health issues. Your pediatrician will examine the tag and may check your baby\'s hearing to ensure normal ear development.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Skin tags in this age are typically stable and do not grow or change significantly. Tags in areas like the neck, armpits, or groin may become more noticeable as your baby gains weight and develops more skin folds. These tags are painless and do not bother your baby unless they are in a location that causes friction or irritation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If a skin tag is bothersome due to its location or if you have cosmetic concerns, this is an appropriate age to discuss removal options with your pediatrician or a pediatric dermatologist. Some small tags can be removed with a simple in-office procedure. Never attempt to tie off or remove a skin tag at home, as this can cause bleeding or infection.',
    },
    {
      ageRange: '24+ months',
      context:
        'Most skin tags remain stable throughout childhood. They do not become cancerous or lead to health problems. If a skin tag is large, located in a cosmetically sensitive area like the face, or causing irritation, elective removal can be considered. Your child\'s doctor can provide guidance on the best timing and approach.',
    },
  ],
  whenNormal: [
    'A small, soft, flesh-colored or slightly darker piece of extra skin present at birth or noticed in early infancy',
    'The tag is located near the ear, on the neck, in the armpit, or in other skin folds',
    'The tag is painless, does not bleed, and is not growing rapidly',
    'Your baby is otherwise healthy with normal growth, feeding, and development',
    'Hearing and ear development are normal (for tags near the ear)',
  ],
  whenToMention: [
    'The skin tag is located directly in front of the ear (preauricular), as this may warrant hearing assessment',
    'Your baby has multiple skin tags or other unusual skin growths',
    'The tag seems to be enlarging or changing in appearance',
    'You would like to discuss removal options for cosmetic or functional reasons',
  ],
  whenToActNow: [
    'A skin tag becomes red, swollen, painful, or starts bleeding, suggesting possible trauma or infection',
    'The tag is twisted or caught on clothing and causing pain or bleeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Birthmarks and Skin Conditions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Skin Tags: Diagnosis and Treatment.',
      url: 'https://www.aad.org/public/diseases/a-z/skin-tags-overview',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Preauricular Skin Tags. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003304.htm',
    },
  ],
};
