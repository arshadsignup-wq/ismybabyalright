import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-hyperpigmentation-spots',
  title: 'Dark Spots (Hyperpigmentation) on Baby',
  category: 'skin',
  searchTerms: [
    'baby dark spots skin',
    'baby hyperpigmentation',
    'baby skin darkening spots',
    'baby brown patches',
    'baby dark marks on skin',
    'post inflammatory hyperpigmentation baby',
    'baby skin darker after rash',
    'toddler dark spots',
    'baby skin pigmentation changes',
    'dark marks after eczema baby',
  ],
  quickAnswer:
    'Dark spots or patches on baby skin are usually post-inflammatory hyperpigmentation, meaning the skin darkened after a rash, injury, or inflammation healed. This is especially common in babies with darker skin tones. These marks are temporary and fade over weeks to months without treatment. Consistent sun protection can help them fade faster.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns may have darker areas from birthmarks like Mongolian spots or cafe-au-lait spots. Post-inflammatory hyperpigmentation can occur after healing of common newborn rashes. These darkened areas are cosmetic only and gradually fade.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As eczema and other rashes develop, the healing skin may leave behind darker patches. This is more visible in babies with medium to dark skin tones. The pigment changes are temporary. Continued moisturizing and sun protection help the skin return to its normal color.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Any skin inflammation, from eczema flares to insect bites to diaper rash, can leave behind temporary dark marks. These typically take 1 to 6 months to fade. There is no need to apply bleaching creams; gentle skin care and time are the best approach.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with active eczema may have a cycle of rash and post-inflammatory darkening. Preventing eczema flares helps reduce new hyperpigmentation. If dark spots are not fading as expected or if new concerning pigmented lesions appear, have them evaluated by your pediatrician.',
    },
  ],
  whenNormal: [
    'Dark marks that appear where a rash, bite, or scratch previously healed',
    'Gradual fading of post-inflammatory hyperpigmentation over weeks to months',
    'Mongolian spots or cafe-au-lait spots present from birth or early infancy',
  ],
  whenToMention: [
    'Multiple cafe-au-lait spots that you want evaluated',
    'Dark spots that are raised, growing, or have irregular borders',
    'Post-inflammatory hyperpigmentation that is not fading after several months',
  ],
  whenToActNow: [
    'A rapidly growing, very dark, or irregularly shaped pigmented lesion',
    'Dark spots accompanied by other symptoms like café-au-lait spots numbering 6 or more, which should be evaluated for neurofibromatosis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Dark Spots: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/dark-spots',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birthmarks and Skin Color. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Post-Inflammatory Hyperpigmentation. Dermatologic Clinics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24891055/',
    },
  ],
  relatedConcernSlugs: ['cafe-au-lait-spots', 'baby-skin-color-uneven', 'mongolian-spots', 'eczema'],
};
