import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'psoriasis-baby',
  title: 'Psoriasis in Babies and Toddlers',
  category: 'skin',
  searchTerms: [
    'psoriasis baby',
    'psoriasis toddler',
    'baby thick scaly patches',
    'baby silvery scales on skin',
    'baby psoriasis vs eczema',
    'baby red thick patches',
    'infant psoriasis',
    'psoriasis diaper area baby',
    'baby scalp psoriasis',
    'is baby rash psoriasis',
    'plaque psoriasis child',
  ],
  quickAnswer:
    'Psoriasis is an autoimmune skin condition that causes thick, red, scaly patches on the skin. While it is less common in babies than eczema, it can appear in infancy and is sometimes initially misdiagnosed as eczema, cradle cap, or diaper rash. In babies, psoriasis most commonly appears in the diaper area or on the scalp. It is a chronic condition with flares and remissions, but treatments can effectively manage symptoms.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Psoriasis in very young babies is uncommon but not impossible. When it does appear, it often shows up in the diaper area as a well-defined, bright red rash that does not respond to typical diaper rash treatments. Unlike regular diaper rash, psoriasis in the diaper area tends to have sharper borders and may extend beyond the diaper region into the skin folds. It can also look like persistent cradle cap on the scalp that does not improve with typical treatments.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At this age, psoriasis may be confused with eczema. Key differences include: psoriasis patches tend to be thicker with well-defined borders and silvery-white scales, while eczema patches are usually less defined with weeping or crusting. Psoriasis is less itchy than eczema in many cases. A family history of psoriasis makes the diagnosis more likely. Your pediatrician or a dermatologist can help distinguish between the two.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with psoriasis may develop the condition after an illness, particularly strep throat, which can trigger a form called guttate psoriasis (small, drop-shaped patches). Psoriasis in toddlers most commonly appears on the scalp, behind the ears, on the elbows and knees, and in the diaper area. Treatment usually involves medicated creams prescribed by a dermatologist, along with regular moisturizing.',
    },
  ],
  whenNormal: [
    'Mild, well-defined scaly patches that respond to prescribed treatment',
    'Flares that come and go with triggers like illness, dry weather, or stress',
    'Scalp psoriasis that looks like persistent dandruff or cradle cap',
    'A family member also has psoriasis, confirming a genetic link',
  ],
  whenToMention: [
    'A persistent, thick, scaly rash that does not respond to eczema treatments or regular moisturizing',
    'A diaper rash that has well-defined borders and does not improve with standard diaper creams',
    'Scalp scaling that persists despite treating for cradle cap',
    'Your child has a rash that you think might be psoriasis and has not yet been formally diagnosed',
  ],
  whenToActNow: [
    'Psoriasis patches suddenly spread widely across the body after an illness',
    'Your child develops joint pain, swelling, or stiffness along with skin patches, which could indicate psoriatic arthritis (rare in very young children but possible)',
    'Skin patches become infected with signs of oozing, crusting, increased warmth, or fever',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['eczema', 'cradle-cap', 'diaper-rash-not-clearing', 'baby-dry-patches-on-cheeks'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Psoriasis in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Psoriasis.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Psoriasis Foundation. Psoriasis in Children.',
      url: 'https://www.psoriasis.org/psoriasis-in-children/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pediatric Dermatology. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview',
    },
  ],
};
