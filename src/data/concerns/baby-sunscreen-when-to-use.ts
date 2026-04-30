import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sunscreen-when-to-use',
  title: 'Sunscreen for Babies - When and How to Use It',
  category: 'medical',
  searchTerms: ['baby sunscreen', 'when can baby use sunscreen', 'baby sunscreen age', 'toddler sunscreen', 'baby sun protection', 'sunscreen safe for babies', 'baby SPF', 'mineral sunscreen baby', 'baby sunburn prevention', 'baby sun exposure'],
  quickAnswer: 'The AAP recommends keeping babies under 6 months out of direct sunlight entirely and using protective clothing and shade instead of sunscreen. For babies 6 months and older, use a broad-spectrum, SPF 30+ mineral (zinc oxide or titanium dioxide) sunscreen on all exposed skin. Apply 15-30 minutes before sun exposure and reapply every 2 hours or after swimming/sweating. For babies under 6 months, if sun exposure cannot be avoided (no shade available), a small amount of mineral sunscreen on exposed areas (face, backs of hands) is acceptable as an exception.',
  byAge: [
    { ageRange: '0-12 months', context: 'For babies under 6 months, the primary sun protection strategy is avoidance and clothing: keep babies in the shade, use a stroller canopy or umbrella, dress in lightweight long sleeves and pants, use a wide-brimmed hat, and avoid the peak sun hours (10 AM - 2 PM). If you cannot keep your baby in the shade, it is acceptable to apply a small amount of mineral sunscreen (zinc oxide or titanium dioxide) to exposed areas like the face and backs of hands. After 6 months, apply mineral sunscreen liberally to all exposed skin. Choose fragrance-free, mineral-based formulas designed for babies. Test a small patch first if your baby has sensitive skin or eczema.' },
    { ageRange: '1-3 years', context: 'Apply broad-spectrum SPF 30+ mineral sunscreen to all exposed skin 15-30 minutes before going outside. Reapply every 2 hours and immediately after swimming, sweating, or toweling off. Do not forget commonly missed areas: ears, back of neck, tops of feet, and around the eyes. Stick-type sunscreens work well for the face. Continue to use protective clothing and hats as the primary defense, with sunscreen as an additional layer. Avoid spray sunscreens for the face (inhaling the spray is a concern) - spray on hands first, then apply to the face. Choose "water-resistant" formulas for swimming (no sunscreen is truly waterproof).' },
  ],
  whenNormal: ['Mild white residue from mineral sunscreen on the skin', 'Your baby not enjoying the sunscreen application process (common in toddlers)', 'Needing to reapply frequently during outdoor activities'],
  whenToMention: ['Your baby had a reaction (rash, redness, or irritation) to a sunscreen product', 'You want guidance on sun protection for a baby with eczema or very sensitive skin', 'Your child got sunburned despite sunscreen use and you want guidance on treatment and prevention'],
  whenToActNow: ['Severe sunburn with blistering on a baby or toddler', 'Signs of sun poisoning: severe sunburn with fever, chills, nausea, or headache', 'Sunburn on a baby under 6 months (their skin is more vulnerable to damage)', 'An allergic reaction to sunscreen with hives or facial swelling'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sunburn', 'baby-first-aid-kit-essentials', 'eczema', 'heat-rash'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sun Safety for Babies. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/sun-safety/Pages/Sun-Safety.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sunburn Treatment and Prevention. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/sun-safety/Pages/Sunburn-Treatment-and-Prevention.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Sun Safety.', url: 'https://www.cdc.gov/skin-cancer/sun-safety/' },
  ],
};
