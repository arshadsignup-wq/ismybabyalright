import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-seborrheic-dermatitis-body',
  title: 'Seborrheic Dermatitis Beyond the Scalp',
  category: 'skin',
  searchTerms: [
    'baby seborrheic dermatitis body',
    'cradle cap on body',
    'baby greasy rash body folds',
    'seborrheic dermatitis diaper area baby',
    'baby scaly rash armpits',
    'baby seborrhea beyond scalp',
    'baby greasy rash neck armpits',
    'seborrheic dermatitis baby face body',
    'baby rash skin folds greasy',
    'infantile seborrheic dermatitis widespread',
  ],
  quickAnswer:
    'Seborrheic dermatitis can spread beyond the scalp to the face, behind the ears, neck folds, armpits, and diaper area. It appears as greasy, yellowish, scaly patches that are typically not itchy. This is different from eczema and usually resolves within the first year. Gentle cleaning and moisturizing are usually sufficient treatment.',
  byAge: [
    { ageRange: '0-3 months', context: 'Seborrheic dermatitis commonly starts on the scalp and may spread to the face, eyebrows, behind the ears, and skin folds during the first few months. When it appears in the diaper area, it can look like a severe diaper rash. The greasy, salmon-colored patches are characteristic. It is not painful or itchy for your baby.' },
    { ageRange: '3-6 months', context: 'Body seborrheic dermatitis may be at its most widespread at this age, affecting the scalp, face, neck, armpits, and groin creases. It can overlap with eczema, making diagnosis tricky. Your pediatrician can help distinguish between the two. Gentle cleansing with a mild soap and applying a light moisturizer usually helps.' },
    { ageRange: '6-12 months', context: 'Seborrheic dermatitis typically begins to improve during this period. The body patches usually clear before the scalp. If patches persist or worsen, your pediatrician may prescribe a mild antifungal cream or low-potency topical steroid for affected body areas.' },
    { ageRange: '12-24 months', context: 'Most infantile seborrheic dermatitis resolves by the first birthday. If it persists beyond this age, a dermatology evaluation may be helpful to confirm the diagnosis and rule out other conditions. Seborrheic dermatitis can recur later in life, typically during puberty and adulthood.' },
  ],
  whenNormal: [
    'Greasy, yellowish scales in skin folds that are not red, painful, or itchy',
    'Seborrheic dermatitis that remains mild and is slowly improving over weeks',
    'Patches in the diaper area that look different from typical diaper rash, with a greasy, salmon-pink appearance',
  ],
  whenToMention: [
    'The rash is spreading significantly or covering large areas of the body',
    'You are unsure whether the rash is seborrheic dermatitis or eczema',
    'The patches are becoming very red, inflamed, or are not improving with gentle care',
  ],
  whenToActNow: [
    'The affected areas become infected with oozing, pus, or increased warmth',
    'Your baby has widespread rash with poor feeding, fever, or failure to gain weight',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cradle Cap. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Cradle-Cap.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Seborrheic Dermatitis: Overview.', url: 'https://www.aad.org/public/diseases/a-z/seborrheic-dermatitis-overview' },
    { org: 'NIH', citation: 'National Library of Medicine. Infantile Seborrheic Dermatitis. Journal of Clinical Medicine.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK531461/' },
  ],
  relatedConcernSlugs: ['cradle-cap', 'baby-cradle-cap-eyebrows', 'baby-rash-in-skin-folds', 'yeast-diaper-rash'],
};
