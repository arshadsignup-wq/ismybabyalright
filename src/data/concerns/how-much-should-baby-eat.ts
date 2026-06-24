import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'how-much-should-baby-eat',
  title: 'How Much Should My Baby Eat?',
  category: 'feeding',
  searchTerms: [
    'how much should baby eat',
    'baby not eating enough',
    'baby eating too much',
    'how many ounces baby formula',
    'how often should newborn breastfeed',
    'baby feeding schedule by age',
    'overfeeding baby signs',
    'underfeeding baby signs',
    'baby still hungry after feeding',
    'how much formula by weight',
    'baby feeding chart',
    'is my baby getting enough milk',
  ],
  quickAnswer:
    'Feeding amounts vary by age, weight, and whether your baby is breastfed or formula-fed. As a general guide, newborns eat 1-3 ounces per feeding every 2-3 hours, increasing to 4-6 ounces by 4 months and 6-8 ounces by 6 months. Breastfed babies self-regulate intake and should be fed on demand, typically 8-12 times in 24 hours during the newborn period. The most reliable signs that your baby is eating enough are steady weight gain along their growth curve and producing 6 or more wet diapers per day.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns have tiny stomachs (about the size of a cherry at day 1, growing to a walnut by week 1). Breastfed newborns should nurse 8-12 times per 24 hours, including at night. Colostrum in the first few days is produced in small amounts but is nutrient-dense and sufficient. Formula-fed newborns typically take 1-2 ounces per feeding, increasing to 2-3 ounces by 2 weeks. Look for hunger cues (rooting, lip-smacking, fists to mouth) rather than watching the clock. Weight loss up to 7-10% in the first few days is normal, but baby should regain birth weight by 10-14 days.',
    },
    {
      ageRange: '1-4 months',
      context:
        'Feeding amounts increase as your baby grows. Formula-fed babies typically take 4-5 ounces every 3-4 hours. Breastfed babies may continue to nurse 8-10 times per day. Total daily intake for formula-fed babies is generally 24-32 ounces. Growth spurts around 3 weeks, 6 weeks, and 3 months may temporarily increase hunger. Trust your baby\'s hunger and fullness cues: turning away from the bottle or breast, closing the mouth, and decreased sucking are signs of fullness. Do not force your baby to finish a bottle.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Formula intake typically peaks at 32-36 ounces per day. Some babies show readiness for solid foods around 6 months (sitting with support, showing interest in food, loss of tongue-thrust reflex), but breast milk or formula remains the primary nutrition source. Do not reduce milk intake when introducing solids. Breastfed babies may seem more efficient at the breast and finish feedings more quickly, but this does not mean they are getting less milk.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Solid foods are introduced as a complement to breast milk or formula, not a replacement. Start with 1-2 tablespoons of pureed food once or twice daily, gradually increasing to 3 meals by 9 months. Formula intake typically decreases to 24-28 ounces per day as solids increase. Breastfed babies will naturally adjust their nursing frequency. By 12 months, babies should be getting about half their calories from solids and half from breast milk or formula.',
    },
  ],
  whenNormal: [
    'Your baby\'s weight follows a consistent curve on the growth chart, even if it is not the 50th percentile.',
    'Your baby has 6 or more wet diapers per day after the first week of life.',
    'Your baby seems satisfied after feedings and has periods of alert, happy wakefulness.',
    'Your baby\'s intake varies from feeding to feeding, as appetite fluctuations are normal.',
  ],
  whenToMention: [
    'Your baby is not regaining birth weight by 2 weeks of age.',
    'Your baby consistently falls below their growth curve or crosses two or more percentile lines downward.',
    'Your breastfed baby is feeding fewer than 8 times in 24 hours during the newborn period and seems lethargic.',
    'You are concerned about overfeeding, as your baby is consistently spitting up large amounts after every feeding.',
  ],
  whenToActNow: [
    'Your newborn has fewer than 3 wet diapers in 24 hours after day 3, has a dry mouth, or is not waking to feed.',
    'Your baby shows signs of dehydration: sunken fontanelle, no tears when crying, dry mouth, or fewer than 6 wet diapers per day.',
    'Your baby refuses all feeding (breast and bottle) for more than 4-6 hours and appears lethargic.',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'infant-feeding-habits-obesity-prevention',
    'nipple-confusion-bottle-breast',
    'refusing-breast',
    'bottle-preference',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Amount and Schedule of Baby Formula Feedings. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Amount-and-Schedule-of-Formula-Feedings.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC. How Much and How Often to Feed Infant Formula.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/how-much-how-often.html',
    },
    {
      org: 'WHO',
      citation:
        'WHO. Infant and Young Child Feeding: Model Chapter for Medical Students and Allied Health Professionals.',
      url: 'https://www.who.int/publications/i/item/9789241597494',
    },
  ],
};
