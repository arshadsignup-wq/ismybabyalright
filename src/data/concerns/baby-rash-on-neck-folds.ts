import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-on-neck-folds',
  title: 'Baby Neck Fold Rash',
  category: 'skin',
  searchTerms: [
    'baby neck fold rash',
    'rash in baby neck creases',
    'baby red neck folds',
    'baby neck rash smell',
    'infant neck rash',
    'baby neck crease irritation',
    'baby neck rash from drool',
    'baby neck rash yeast',
    'neck fold dermatitis baby',
    'baby chubby neck rash',
  ],
  quickAnswer:
    'Neck fold rashes are extremely common in babies, especially in those with adorable chubby neck rolls. Moisture from drool, spit-up, and sweat gets trapped in the folds and can cause redness and irritation. Regular gentle cleaning and keeping the area dry usually clears it up.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns with neck folds are particularly prone to moisture-related rashes because they cannot hold their heads up yet, keeping the folds pressed together. Spit-up and milk dribbles collect in the creases and can cause significant redness. Gently lifting the chin to clean and dry the area several times a day is the most effective approach.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is often the peak time for neck fold rashes because babies are drooling more with teething and still have limited neck control. The warm, moist environment can sometimes lead to yeast overgrowth, which appears as a bright red, well-defined rash that may have satellite spots. If a yeast infection is suspected, your pediatrician may recommend an antifungal cream.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies gain better head control and begin sitting up, neck fold rashes often improve naturally because the area gets more air circulation. However, active babies who sweat more may still develop irritation. Continue to check and clean the folds daily, especially in warm weather.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers generally have less trouble with neck fold rashes as they are more mobile and the skin folds are less pronounced. If a neck rash persists at this age, it may be eczema or contact dermatitis from clothing, lotions, or laundry detergent, and should be evaluated by your pediatrician.',
    },
  ],
  whenNormal: [
    'Mild redness in neck folds that improves when the area is cleaned and dried',
    'A slight smell in the neck creases from trapped moisture that resolves with regular cleaning',
    'Rash that comes and goes and responds to keeping the area dry',
  ],
  whenToMention: [
    'The rash is bright red, well-defined, or has satellite spots suggesting a yeast infection',
    'The area is persistently raw, weeping, or cracked despite good hygiene',
    'Your baby seems bothered by pain or discomfort in the neck area',
  ],
  whenToActNow: [
    'The neck fold area becomes very swollen, hot, or shows pus-like drainage suggesting a bacterial infection',
    'Your baby develops a fever along with a worsening, spreading neck rash',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rashes and Skin Conditions in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Rashes-and-Skin-Conditions.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diaper Rash and Yeast Infections. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Diaper-Rash.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Intertrigo and Common Secondary Skin Infections. American Family Physician.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24695508/',
    },
  ],
  relatedConcernSlugs: ['baby-rash-in-skin-folds', 'yeast-diaper-rash', 'baby-chin-rash-from-drool'],
};
