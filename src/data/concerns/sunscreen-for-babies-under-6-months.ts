import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'sunscreen-for-babies-under-6-months',
  title: 'Sunscreen for Babies Under 6 Months',
  category: 'skin',
  searchTerms: [
    'sunscreen for baby under 6 months',
    'can you put sunscreen on a newborn',
    'baby sunscreen age',
    'mineral sunscreen baby safe',
    'zinc oxide sunscreen baby',
    'baby sunburn no sunscreen',
    'sun protection for newborn',
    'when can baby wear sunscreen',
  ],
  quickAnswer:
    'The AAP recommends avoiding sunscreen on babies under 6 months when possible, as their skin is thinner and absorbs chemicals more readily. The primary protection should be shade and protective clothing (long sleeves, wide-brimmed hat, UV-protective fabric). However, if shade and clothing are not available and sun exposure cannot be avoided, a small amount of mineral sunscreen (zinc oxide or titanium dioxide) on exposed areas is considered safe and is preferable to sunburn.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Keep newborns out of direct sunlight entirely. Their skin is extremely thin and burns easily. Use shade from stroller canopies, umbrellas, and trees. Dress them in lightweight, long-sleeved clothing and a hat. If brief unavoidable sun exposure occurs, apply a small amount of mineral sunscreen (zinc oxide) to the face and backs of hands.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue to prioritize shade and protective clothing. The AAP guidance remains to avoid regular sunscreen use before 6 months, but mineral sunscreen is acceptable when needed. Avoid the sun during peak UV hours (10 AM to 4 PM). If your baby gets pink or red skin from sun exposure, they have been sunburned and need immediate shade and cool compresses.',
    },
    {
      ageRange: '6-12 months',
      context:
        'From 6 months, sunscreen use is recommended for all sun exposure. Use a broad-spectrum SPF 30 or higher, preferably mineral-based (zinc oxide or titanium dioxide). Apply 15-30 minutes before sun exposure and reapply every 2 hours or after water exposure. Continue using shade, hats, and protective clothing as the primary defense.',
    },
    {
      ageRange: '12 months+',
      context:
        'Apply sunscreen generously to all exposed skin. Toddlers need about 1 ounce (shot glass full) for full body coverage. Use water-resistant formulas for pool or beach time. Reapply every 2 hours and after swimming or sweating. Rash guards and sun hats remain valuable supplements to sunscreen.',
    },
  ],
  whenNormal: [
    'You use shade and clothing as primary sun protection for your young baby and sunscreen only on unavoidable exposed areas',
    'Your baby\'s skin shows no reaction to mineral sunscreen application',
    'You apply sunscreen regularly to your 6+ month old baby before outdoor activities',
    'You avoid peak sun hours with your young baby',
  ],
  whenToMention: [
    'Your baby under 6 months got a sunburn — even mild sunburn in young babies should be evaluated by your pediatrician',
    'Your baby develops a rash or allergic reaction to sunscreen',
    'Your baby has very fair skin and you are concerned about adequate sun protection despite taking precautions',
  ],
  whenToActNow: [
    'Your baby has a severe sunburn with blistering, fever, or significant distress — seek medical attention immediately',
    'Your baby shows signs of heat-related illness (excessive fussiness, dry mouth, no tears, decreased wet diapers) after sun exposure — this may indicate dehydration or heat illness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'beach-safety-baby-toddler',
    'extreme-heat-baby-safety',
    'insect-repellent-safety-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sun Safety: Information for Parents About Sunburn & Sunscreen. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/sun-safety/Pages/Sun-Safety.aspx',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration. Should You Put Sunscreen on Infants?',
      url: 'https://www.fda.gov/consumers/consumer-updates/should-you-put-sunscreen-infants-not-usually',
    },
  ],
};
