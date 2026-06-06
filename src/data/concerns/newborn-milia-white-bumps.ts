import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-milia-white-bumps',
  title: 'Milia (Tiny White Bumps on Baby\'s Face)',
  category: 'skin',
  searchTerms: [
    'newborn white bumps face',
    'baby milia',
    'tiny white spots baby nose',
    'baby white pimples',
    'newborn white dots cheeks',
    'milia newborn treatment',
    'baby white bumps chin',
    'newborn white spots forehead',
    'baby white pearl bumps',
    'milia baby how long',
  ],
  quickAnswer:
    'Milia are tiny white or yellowish bumps (about 1-2mm) that appear on a newborn\'s nose, cheeks, chin, and forehead. They are caused by tiny keratin cysts trapped beneath the skin and are present in up to 40-50% of newborns. They are completely harmless and disappear on their own within a few weeks to months without any treatment.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Milia are very common at birth or in the first few days. They appear as tiny, firm white or yellow bumps, most often on the nose, cheeks, chin, and forehead. They can also appear on the gums and palate (called Epstein pearls) or on the midline of the palate (Bohn nodules). Do not try to squeeze, pop, or scrub them, as this can irritate the skin. Simply wash your baby\'s face gently with water. They will resolve on their own.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Most milia resolve spontaneously within the first one to three months of life. You may notice them gradually fading without any intervention. Continue gentle skin care and avoid using lotions, creams, or treatments on them. If the bumps look inflamed or your baby develops different-looking bumps, it may be baby acne rather than milia.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Milia should be resolved by this age. If white bumps persist or new ones appear, mention it to your pediatrician. Persistent milia can occasionally be associated with other skin conditions, but this is rare.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Milia from the newborn period should be completely resolved. Any new white bumps at this age are likely a different skin condition and should be evaluated by your doctor.',
    },
  ],
  whenNormal: [
    'Tiny white or yellowish firm bumps on the nose, cheeks, chin, and forehead in a newborn',
    'Similar bumps on the gums or roof of the mouth (Epstein pearls)',
    'The bumps are small (1-2mm), smooth, and not red or inflamed',
    'Baby is not bothered by them and they are not spreading rapidly',
  ],
  whenToMention: [
    'Milia persist beyond 3 months of age',
    'The bumps appear red, inflamed, or surrounded by redness',
    'You are unsure whether the bumps are milia or another condition',
  ],
  whenToActNow: [
    'Bumps that appear with fever, spreading redness, warmth, or pus, which could indicate a skin infection',
    'Widespread blistering or skin breakdown in a newborn',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Newborn\'s Skin. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Milia. Patient Care and Health Information.',
      url: 'https://www.mayoclinic.org/diseases-conditions/milia/symptoms-causes/syc-20375286',
    },
  ],
  relatedConcernSlugs: ['baby-acne', 'newborn-erythema-toxicum-timing', 'newborn-skin-peeling-normal'],
};
