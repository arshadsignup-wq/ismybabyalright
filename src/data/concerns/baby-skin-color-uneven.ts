import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-skin-color-uneven',
  title: 'Uneven Skin Coloring in Baby',
  category: 'skin',
  searchTerms: [
    'baby uneven skin color',
    'baby skin color different',
    'baby mottled skin',
    'baby skin patches different color',
    'baby skin lighter darker patches',
    'baby two tone skin',
    'infant skin pigment variation',
    'baby skin blotchy color',
    'baby skin changing color unevenly',
    'toddler uneven skin tone',
  ],
  quickAnswer:
    'Uneven skin coloring in babies is very common and usually harmless. Newborn skin naturally has variations in pigment as melanin production matures. Conditions like cutis marmorata (mottling), post-inflammatory pigment changes, and birthmarks can all cause uneven coloring. Most variations even out over time.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns commonly have mottled or blotchy skin, especially when cold. A harlequin color change (one half of the body turning red while the other stays pale) is harmless and temporary. Acrocyanosis (blue hands and feet) is normal in the first 24 to 48 hours. These are all normal newborn skin variations.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As baby\'s melanin production matures, skin color may become more even or you may notice areas that are lighter or darker. Post-inflammatory changes after eczema or rashes can leave temporary darker or lighter patches. These typically fade over weeks to months.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Skin color continues to evolve during the first year. Mongolian spots, cafe-au-lait spots, and other birthmarks may become more or less visible. Sun exposure can make pigment variations more noticeable. Consistent sun protection is important.',
    },
    {
      ageRange: '12-24 months',
      context:
        'By toddlerhood, most normal pigment variations have stabilized. If new areas of depigmentation (white patches) appear, conditions like vitiligo or pityriasis alba should be considered. If new areas of hyperpigmentation develop, have them evaluated by your pediatrician.',
    },
  ],
  whenNormal: [
    'Normal mottling of newborn skin when cold that resolves with warming',
    'Temporary darker or lighter patches where a rash previously healed',
    'Gradual evening out of skin color over the first year',
  ],
  whenToMention: [
    'New, well-defined white patches appearing that could indicate vitiligo',
    'Multiple cafe-au-lait spots that you want evaluated',
    'Persistent pigment changes that are not resolving over months',
  ],
  whenToActNow: [
    'Persistent mottling that does not resolve with warming and is associated with poor feeding or lethargy',
    'A rapidly changing pigmented lesion',
    'Blue or grey skin color that does not pink up, suggesting a circulation problem',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Skin Color. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Birthmarks.',
      url: 'https://www.aad.org/public/diseases/a-z/birthmarks-types',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Pigmentary Disorders in Children. Pediatric Clinics of North America.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24636195/',
    },
  ],
  relatedConcernSlugs: ['baby-vitiligo-signs', 'baby-hyperpigmentation-spots', 'mongolian-spots', 'cafe-au-lait-spots'],
};
