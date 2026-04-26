import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-drinking-enough-milk',
  title: 'Baby Not Drinking Enough Milk',
  category: 'feeding',
  searchTerms: [
    'baby not drinking enough milk',
    'baby eating less than usual',
    'baby refusing milk',
    'baby won\'t finish bottle',
    'baby drinking less formula',
    'how much milk should baby drink',
    'baby not eating enough breastmilk',
    'baby intake dropped suddenly',
    'baby taking less milk than before',
    'newborn not eating enough',
  ],
  quickAnswer:
    'Babies naturally vary how much milk they drink from day to day, and a temporary dip in intake is usually nothing to worry about. Common causes include growth pattern changes, distractibility, teething, mild illness, or simply not being as hungry on a particular day. As long as your baby is having plenty of wet diapers and continuing to gain weight along their growth curve, they are likely getting enough.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns typically eat one to three ounces per feed, gradually increasing to three to four ounces by the end of the first month. They should feed eight to twelve times in 24 hours. If your newborn is consistently taking less than the expected amount, seems very sleepy and hard to wake for feeds, or is not producing at least six wet diapers a day by day five, contact your pediatrician. Jaundice, tongue tie, and other newborn conditions can cause decreased intake.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Most babies consume 24 to 32 ounces of formula or an equivalent amount of breast milk per day at this age. Some babies are consistent drinkers while others vary widely from feed to feed. A temporary decrease in intake often coincides with becoming more alert and easily distracted. Try feeding in a quiet, dimly lit room if your baby seems distracted. If your baby has been sick, appetite usually returns as they recover.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Around four months, many babies become very interested in the world around them and may seem less interested in feeding. This is often called a "feeding strike" and is developmental, not medical. Breastfed babies may become very efficient feeders who can get a full feed in five to ten minutes, which parents sometimes mistake for not eating enough. If diaper output and weight gain are good, shorter feeds are not a problem.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once solid foods begin, it is normal for milk intake to gradually decrease as food intake increases. At six to eight months, milk should still be the primary nutrition source with solids as a complement. By 12 months, aim for about 16 to 24 ounces of breast milk or formula per day. If your baby refuses milk but eats solids eagerly, try offering milk first before solids and limit juice or water that might fill them up.',
    },
    {
      ageRange: '1-2 years',
      context:
        'After 12 months, toddlers need about 16 to 24 ounces of whole milk per day. Some toddlers go through phases of preferring food over milk or vice versa. If your toddler is getting dairy from other sources like yogurt and cheese, they may drink less milk. Do not force milk intake, but ensure they are getting adequate calcium and vitamin D from their overall diet.',
    },
  ],
  whenNormal: [
    'Your baby drinks different amounts at each feed but the overall daily intake is consistent',
    'Your baby has a day or two of decreased intake during a mild illness but resumes normal feeding as they recover',
    'Your baby is distracted during daytime feeds but makes up for it with longer nighttime nursing sessions',
    'Your baby is gaining weight well and has six or more wet diapers per day',
    'Milk intake decreases as solid food intake increases after six months',
  ],
  whenToMention: [
    'Your baby consistently takes less than expected for their age and weight, and weight gain has slowed',
    'Your baby seems interested in feeding but pulls away, cries, or arches their back during feeds, which may suggest reflux or discomfort',
    'Your baby has gone from an established pattern to significantly less intake for more than a few days without an obvious cause',
  ],
  whenToActNow: [
    'Your baby has fewer than six wet diapers per day, has a dry mouth, sunken eyes, or no tears when crying, suggesting dehydration',
    'Your newborn is not waking to eat, is increasingly lethargic, or has lost more than 10 percent of their birth weight',
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
        'American Academy of Pediatrics. How Often and How Much Should Your Baby Eat? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/How-Often-and-How-Much-Should-Your-Baby-Eat.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Amount and Schedule of Baby Formula Feedings. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Amount-and-Schedule-of-Formula-Feedings.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. How Much and How Often to Feed Infant Formula.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/how-much-how-often.html',
    },
  ],
};
