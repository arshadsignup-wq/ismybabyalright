import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-sunburn-prevention',
  title: 'Baby Sunburn Prevention and Care',
  category: 'skin',
  searchTerms: [
    'baby sunburn prevention',
    'sunscreen for babies',
    'when can babies wear sunscreen',
    'baby got sunburned',
    'infant sun protection',
    'baby red skin from sun',
    'sunburn baby treatment',
    'baby sun hat',
    'protecting baby from sun',
    'baby skin sun damage',
    'SPF for babies',
  ],
  quickAnswer:
    'Babies under 6 months should be kept out of direct sunlight as much as possible, using shade, hats, and lightweight clothing for protection. After 6 months, a broad-spectrum SPF 30+ sunscreen can be used on exposed areas. If your baby does get a mild sunburn, cool compresses and gentle moisturizing help, but severe sunburn in an infant needs medical attention.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The AAP recommends avoiding sunscreen for babies under 6 months and instead using physical sun protection: shade, wide-brimmed hats, lightweight long-sleeved clothing, and stroller covers. Baby skin is thinner and absorbs chemicals more readily. If small areas like the backs of the hands cannot be covered, a small amount of mineral sunscreen (zinc oxide or titanium dioxide) is acceptable.',
    },
    {
      ageRange: '6-12 months',
      context:
        'After 6 months, you can apply broad-spectrum SPF 30 or higher sunscreen to all exposed skin. Mineral-based sunscreens (zinc oxide, titanium dioxide) are gentlest. Apply 15-30 minutes before sun exposure and reapply every 2 hours or after water or sweating. Continue using hats, shade, and protective clothing as the primary defense.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers are more active and harder to keep covered. Apply sunscreen liberally and do not forget easily missed areas: ears, tops of feet, back of neck, and hands. Seek shade during peak UV hours (10am-4pm). UV-protective swimwear (rash guards) reduces the surface area needing sunscreen and stays on during water play.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Make sun protection a normal part of outdoor routines. Let your toddler help apply their own sunscreen to build the habit. Choose sunscreen sticks for easy face application. Sunglasses with UV protection help protect developing eyes. One blistering sunburn in childhood doubles the lifetime risk of melanoma, so prevention is important.',
    },
  ],
  whenNormal: [
    'Slight pinkness that fades within a few hours after brief sun exposure',
    'Mild warmth to the skin that resolves overnight',
    'Your baby tolerates outdoor time well with appropriate sun protection',
  ],
  whenToMention: [
    'Your baby has a visible sunburn with redness that persists beyond a few hours',
    'Sunburned skin is peeling or your baby seems uncomfortable',
    'You need guidance on choosing safe sunscreen products for your baby\'s skin type',
  ],
  whenToActNow: [
    'Your baby under 12 months has a significant sunburn with blistering, swelling, or extreme redness',
    'Sunburn is accompanied by fever, chills, headache, or signs of heat exhaustion like vomiting or lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sun Safety for Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Sun-Safety.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Sun Safety for Children.',
      url: 'https://www.cdc.gov/skin-cancer/sun-safety/index.html',
    },
  ],
};
