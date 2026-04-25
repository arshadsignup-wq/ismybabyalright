import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-drinking-enough',
  title: 'Baby Not Drinking Enough Milk or Formula',
  category: 'feeding',
  searchTerms: [
    'baby not drinking enough milk',
    'baby not eating enough formula',
    'baby drinking less milk than usual',
    'baby only drinking 2 oz',
    'newborn not eating enough',
    'baby eating less suddenly',
    'how much milk should baby drink',
    'baby not finishing bottle',
    'baby feeding less than normal',
    'baby won\'t drink formula',
  ],
  quickAnswer:
    'Babies naturally vary in how much they drink from day to day, and a temporary dip in intake is usually not concerning as long as your baby has adequate wet diapers and continues to gain weight. Babies are remarkably good at self-regulating their intake. However, a significant and sustained drop in feeding, especially in a newborn, deserves prompt attention from your pediatrician.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Newborns need to eat frequently, typically 8 to 12 times per day. In the first few days, volumes are tiny (colostrum comes in teaspoons), but intake increases rapidly. By day 4 or 5, most babies should be having at least 6 wet diapers and 3 to 4 stools per day. If your newborn is excessively sleepy and not waking to eat, or is feeding fewer than 8 times in 24 hours, contact your pediatrician promptly.',
    },
    {
      ageRange: '2 weeks - 3 months',
      context:
        'Babies at this age typically consume 24 to 32 ounces of formula per day or nurse 8 to 12 times daily. There is wide normal variation. Some babies eat larger amounts less frequently, while others prefer smaller more frequent feeds. As long as your baby produces 6 or more wet diapers daily, has regular bowel movements, and gains weight steadily, they are likely getting enough.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Many babies become more efficient feeders and may nurse for shorter periods or take bottles more quickly, which can make parents worry they are not getting enough. Some babies also go through distracted phases where they are too interested in the world to focus on feeding. Offering feeds in a quiet, dimly lit room can help. Intake typically ranges from 24 to 36 ounces of formula daily.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solid foods are introduced, it is normal for milk or formula intake to gradually decrease. Babies do not need the same volume of milk at 10 months as they did at 4 months if they are eating a variety of solids. Breast milk or formula should remain the primary source of nutrition until 12 months, but a reduction in volume is expected and healthy as solids increase.',
    },
  ],
  whenNormal: [
    'Your baby drinks slightly less on some days and more on others while maintaining consistent diaper output',
    'Your baby\'s intake decreases temporarily during a minor illness like a cold',
    'Your older baby drinks less milk as they eat more solid foods',
    'Your baby feeds efficiently in 10 to 15 minutes rather than the 30 to 40 minutes they took as a newborn',
    'Your baby is following their growth curve despite some daily variation in intake',
  ],
  whenToMention: [
    'Your baby\'s intake has dropped noticeably for more than 2 to 3 days and you are concerned about weight gain',
    'Your baby seems hungry and fussy but then refuses the breast or bottle when offered',
    'Your baby is consistently below the expected intake for their age and has slowed weight gain',
    'Your baby seems to be in pain or discomfort during feeds, which may indicate reflux, ear infection, or oral thrush',
  ],
  whenToActNow: [
    'Your newborn under 1 month is feeding fewer than 6 times in 24 hours or producing fewer than 6 wet diapers daily',
    'Your baby shows signs of dehydration: sunken fontanelle, no tears, dry mouth, or very concentrated dark urine',
    'Your baby is lethargic, unusually difficult to wake for feeds, or has a high fever alongside reduced feeding',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Amount and Schedule of Baby Feedings. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Amount-and-Schedule-of-Formula-Feedings.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Signs Your Baby is Getting Enough Milk. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Making-Sure-Your-Baby-is-Getting-Enough-Milk.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. How Much and How Often to Feed Infant Formula.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/how-much-how-often.html',
    },
  ],
};
