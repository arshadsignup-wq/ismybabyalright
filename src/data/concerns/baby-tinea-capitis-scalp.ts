import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-tinea-capitis-scalp',
  title: 'Scalp Ringworm (Tinea Capitis) in Baby',
  category: 'skin',
  searchTerms: ['baby scalp ringworm', 'tinea capitis baby', 'baby fungal infection scalp', 'baby hair loss ringworm', 'baby scalp patches bald', 'toddler scalp ringworm', 'baby scalp scaly patches hair loss', 'tinea capitis child', 'baby scalp fungus treatment', 'baby round bald spot scalp'],
  quickAnswer: 'Tinea capitis (scalp ringworm) is a fungal infection of the scalp that causes scaly patches, itching, and areas of hair loss. Unlike ringworm on the body, scalp ringworm requires oral antifungal medication because topical creams cannot penetrate the hair follicle adequately. The hair typically grows back fully after successful treatment.',
  byAge: [
    { ageRange: '0-3 months', context: 'Tinea capitis is rare in newborns but possible. Scaly scalp patches at this age are more commonly cradle cap. If scalp patches are accompanied by hair loss or the area looks inflamed, your pediatrician should evaluate to rule out a fungal infection. A fungal culture can confirm the diagnosis.' },
    { ageRange: '3-6 months', context: 'If tinea capitis is suspected, a culture of the affected scalp area confirms the diagnosis. Treatment with oral antifungal medication (usually griseofulvin) is necessary and is safe for infants under medical supervision. A medicated selenium sulfide or ketoconazole shampoo used 2 to 3 times weekly helps reduce contagiousness.' },
    { ageRange: '6-12 months', context: 'Tinea capitis becomes more common as babies have more social contact. Signs include round patches of hair loss with black dots (broken-off hairs), scaling, and sometimes swollen, boggy areas called kerions. Treatment typically lasts 6 to 8 weeks. All family members should use antifungal shampoo to prevent spread.' },
    { ageRange: '12-24 months', context: 'Toddlers in daycare are at higher risk. Do not share combs, brushes, hats, or hair accessories. A kerion (severely inflamed, swollen area) may need additional treatment with oral steroids alongside antifungals. Complete the full course of medication even if the scalp looks better before treatment ends.' },
  ],
  whenNormal: ['Cradle cap (seborrheic dermatitis) is often confused with tinea capitis but does not cause hair loss'],
  whenToMention: ['Scaly patches on the scalp with associated hair loss', 'A round bald spot on your baby\'s scalp', 'Scalp itching that is not responding to cradle cap treatments'],
  whenToActNow: ['A swollen, boggy, tender area on the scalp (kerion) that may ooze or be very painful', 'Scalp infection with fever and enlarged lymph nodes in the neck', 'Hair loss is rapidly progressing'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Tinea Capitis. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Ringworm.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Scalp Ringworm: Overview.', url: 'https://www.aad.org/public/diseases/a-z/ringworm-scalp-overview' },
    { org: 'NIH', citation: 'National Library of Medicine. Tinea Capitis. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK536909/' },
  ],
  relatedConcernSlugs: ['baby-ringworm-treatment', 'baby-hair-loss-patches', 'cradle-cap', 'baby-alopecia-areata'],
};
