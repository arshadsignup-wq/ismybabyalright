import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-cradle-cap-spreading',
  title: 'Cradle Cap Spreading Beyond the Scalp',
  category: 'skin',
  searchTerms: [
    'cradle cap spreading',
    'cradle cap on face',
    'seborrheic dermatitis baby body',
    'cradle cap behind ears',
    'cradle cap eyebrows',
    'cradle cap neck folds',
    'baby seborrheic dermatitis spreading',
    'cradle cap on forehead',
    'cradle cap won\'t go away',
    'severe cradle cap baby',
  ],
  quickAnswer:
    'Cradle cap (infantile seborrheic dermatitis) can sometimes spread beyond the scalp to the eyebrows, behind the ears, neck folds, and other skin creases. This is still generally harmless and will resolve on its own. When it spreads to other areas, gentle cleansing and moisturizing can help, and your pediatrician may recommend a mild medicated cream if needed.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Cradle cap typically first appears on the scalp as thick, yellowish or white, greasy scales or crusts. It may start spreading to the eyebrows, behind the ears, and around the nose during the first month. This is a form of seborrheic dermatitis and is not caused by poor hygiene. It is not contagious and usually does not bother your baby. Gentle shampooing with a mild baby shampoo and using a soft brush to loosen scales can help manage scalp involvement.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Cradle cap may be at its most prominent during this period and can spread to skin folds including the neck, armpits, and diaper area. When it appears in these areas, it may look like red, scaly patches. A thin layer of petroleum jelly or mineral oil can help loosen thick scales on the scalp. For affected skin folds, keeping the area clean and dry is important. If the rash becomes red and irritated, your pediatrician may recommend a mild antifungal or hydrocortisone cream.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Many cases of cradle cap begin to improve by 3-4 months. If it persists or has spread significantly, your pediatrician can help distinguish between seborrheic dermatitis and eczema, as the treatment approach may differ. Persistent, widespread seborrheic dermatitis in infancy occasionally warrants further evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most cradle cap resolves by 6-12 months. If cradle cap persists or recurs beyond this age, it may be transitioning to or coexisting with eczema. Discuss persistent skin concerns with your pediatrician for appropriate management.',
    },
  ],
  whenNormal: [
    'Thick, greasy, yellowish scales on the scalp that may extend to the eyebrows and behind the ears',
    'Baby is not scratching or seeming bothered by the scales',
    'Scales improve with gentle shampooing and brushing',
    'No significant redness or inflammation of the underlying skin',
  ],
  whenToMention: [
    'Cradle cap spreads to the face, neck folds, armpits, or diaper area',
    'The affected skin appears red, inflamed, or weepy underneath the scales',
    'Cradle cap persists beyond 6 months despite home care measures',
  ],
  whenToActNow: [
    'The rash becomes severely inflamed, oozing, or appears infected with pus or crusting',
    'Widespread red, scaly rash covering large portions of the body, especially if baby seems uncomfortable or is feeding poorly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cradle Cap. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Cradle-Cap.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infantile Seborrheic Dermatitis. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK551707/',
    },
  ],
  relatedConcernSlugs: ['newborn-dry-skin-eczema-early', 'newborn-hair-loss-postpartum', 'newborn-yeast-diaper-rash'],
};
