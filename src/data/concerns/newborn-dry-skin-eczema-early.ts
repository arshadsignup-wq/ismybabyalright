import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-dry-skin-eczema-early',
  title: 'Early Eczema Signs in Newborns',
  category: 'skin',
  searchTerms: ['newborn eczema', 'baby dry skin eczema', 'early eczema signs baby', 'atopic dermatitis newborn', 'baby eczema face', 'newborn dry itchy skin', 'infant eczema treatment', 'baby eczema cheeks', 'newborn eczema prevention', 'baby rough dry patches skin'],
  quickAnswer:
    'Eczema (atopic dermatitis) can appear in babies as early as 2-3 months of age, presenting as dry, red, rough, and sometimes itchy patches, most commonly on the cheeks, scalp, and outer surfaces of the arms and legs. It affects about 10-20% of children and is manageable with regular moisturizing and, when needed, medicated creams prescribed by your pediatrician.',
  byAge: [
    { ageRange: '0-1 month', context: 'True eczema is uncommon in the first month. Dry, peeling skin in newborns is usually normal skin transition rather than eczema. However, if you notice persistent red, rough, or scaly patches that are not improving with basic moisturizing, it could be early eczema. Babies with a family history of eczema, asthma, or allergies are at higher risk. Gentle skin care (fragrance-free products, minimal bathing, regular moisturizing) may help prevent eczema from developing.' },
    { ageRange: '1-3 months', context: 'Eczema most commonly first appears during this period, typically on the cheeks, forehead, and scalp. The affected areas may look red, rough, and dry. Babies may rub their face against bedding if the skin is itchy. Treatment involves frequent moisturizing with a thick, fragrance-free moisturizer (ointments and creams work better than lotions), short lukewarm baths, and avoiding known irritants. If the eczema is moderate to severe, your pediatrician may prescribe a mild topical corticosteroid.' },
    { ageRange: '3-6 months', context: 'Eczema may persist or spread to the arms, legs, and trunk. Keep up with regular moisturizing (at least twice daily and after baths). The "soak and seal" method (moisturizer applied within 3 minutes of bathing) can be particularly effective. Identifying and avoiding triggers (dry air, fragranced products, rough fabrics) helps manage flares.' },
    { ageRange: '6-12 months', context: 'As babies become more mobile, eczema may appear on the outer surfaces of the arms and legs and the extensor surfaces. As solid foods are introduced, watch for any connection between new foods and eczema flares, though food allergies cause eczema in only a minority of affected children. Continue daily moisturizing and prompt treatment of flares.' },
  ],
  whenNormal: ['Mild dry patches that respond well to regular moisturizing', 'Occasional flares during dry weather or after exposure to irritants', 'Baby is comfortable and not excessively itchy', 'Gradual improvement with consistent skin care'],
  whenToMention: ['Dry, rough, red patches that do not improve with regular moisturizing', 'Baby seems itchy and is rubbing face against bedding or scratching', 'Eczema covers large areas or is getting worse despite home care'],
  whenToActNow: ['Eczema patches become oozing, crusted, or appear infected (yellow crusting, spreading redness, warmth, or fever)', 'Baby is extremely uncomfortable, unable to sleep due to itching, or the rash is widespread and severe'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Atopic Dermatitis in Children. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK448071/' },
  ],
  relatedConcernSlugs: ['newborn-skin-peeling-normal', 'newborn-cradle-cap-spreading', 'baby-allergic-reaction-to-food'],
};
