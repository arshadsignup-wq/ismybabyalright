import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'low-milk-supply-signs',
  title: 'Signs of Low Milk Supply',
  category: 'feeding',
  searchTerms: [
    'low milk supply symptoms',
    'signs baby not getting enough milk',
    'how to know if milk supply is low',
    'baby not getting enough breastmilk',
    'baby acting hungry after nursing',
    'low milk production',
    'baby losing weight breastfeeding',
    'signs of insufficient milk',
    'is my baby getting enough milk',
    'breast not filling up anymore',
  ],
  quickAnswer:
    'Many parents worry about low milk supply, but true low supply is uncommon. The most reliable signs your baby is getting enough milk are: adequate wet and dirty diapers (6+ wet diapers per day after day 5), steady weight gain, and your baby seeming satisfied after most feedings. Breast size, feeling "empty," baby wanting to nurse often, or pumping small amounts are NOT reliable indicators of low supply. If you are concerned, have your baby weighed and talk to a lactation consultant.',
  byAge: [
    {
      ageRange: '0-5 days',
      context:
        'In the first few days after birth, you produce colostrum, which is small in volume but perfectly matched to your newborn\'s tiny stomach. It is normal for babies to nurse very frequently (every 1-3 hours) and to lose up to 7-10% of their birth weight in the first few days. Your mature milk typically comes in around day 3-5. If your baby has lost more than 10% of birth weight, has fewer than 6 wet diapers by day 5, or is jaundiced and lethargic, contact your pediatrician right away.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'By the end of week 1, your baby should be back to their birth weight and should have 6+ wet diapers and 3+ dirty diapers per day. Frequent nursing (8-12+ times per day) is normal and does not indicate low supply - it is how babies build your supply. However, if your baby is not gaining weight, seems lethargic, has fewer than 6 wet diapers per day, or cries constantly and never seems satisfied, these are red flags. See a lactation consultant and pediatrician to assess latch, milk transfer, and weight gain.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Around 6-12 weeks, many parents notice their breasts feel softer and less full. This is normal - your body has regulated your supply to match your baby\'s needs. Softer breasts do NOT mean low supply. If your baby is gaining 4-7 ounces per week, having plenty of wet diapers, and meeting developmental milestones, your supply is fine. Growth spurts at 3 weeks, 6 weeks, and 3 months cause cluster feeding, which is normal and helps increase your supply to meet your baby\'s growing needs.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age may become more efficient at nursing and finish feeds quickly, which can make parents worry. Shorter feeds and more distractible babies are normal developmental changes, not signs of low supply. Continue monitoring weight gain and diaper output. If your baby has started sleeping longer stretches at night, your supply may dip slightly. Adding a dream feed or pumping session can help maintain supply if needed.',
    },
    {
      ageRange: '6 months+',
      context:
        'Once solids are introduced, your milk supply will naturally adjust as your baby takes in nutrition from food. Pumping output often decreases even if your baby is nursing well. If your baby is growing well, meeting milestones, and happily nursing, your supply is adequate. Some parents worry when their older baby suddenly nurses more frequently - this is often comfort nursing, a growth spurt, or teething, not a supply issue.',
    },
  ],
  whenNormal: [
    'Your breasts feel softer or less full than they did in the early weeks (this is normal after 6-12 weeks)',
    'Your baby nurses frequently, including cluster feeding in the evenings (this is normal hunger and soothing behavior)',
    'You pump only 1-2 ounces total but your baby is gaining well and happy (pump output does not equal supply)',
    'Your baby has days where they seem hungrier and nurse more often (growth spurts are normal)',
  ],
  whenToMention: [
    'Your baby is gaining less than 4 ounces per week after the first week of life',
    'Your baby has fewer than 6 wet diapers per day after day 5',
    'Your baby seems constantly hungry, cries a lot, and never seems satisfied after nursing',
    'You are exclusively pumping and your output has dropped significantly over several days despite pumping regularly',
    'Your baby\'s weight gain has slowed or stalled and they have dropped percentiles on their growth chart',
  ],
  whenToActNow: [
    'Your newborn (under 2 weeks) has not regained their birth weight or is losing weight and is lethargic',
    'Your baby has had no wet diapers in 8+ hours and shows signs of dehydration (sunken soft spot, no tears, dry mouth)',
    'Your baby is weak, not waking for feeds, and has poor muscle tone',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
    'growth',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Is My Baby Getting Enough Milk? 2024.',
      url: 'https://www.llli.org/breastfeeding-info/is-my-baby-getting-enough-milk/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and Milk Supply Concerns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Determining-if-Your-Baby-is-Getting-Enough-Milk.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. How to Know Your Baby is Getting Enough Milk.',
      url: 'https://www.cdc.gov/breastfeeding/breastfeeding-special-circumstances/diet-and-micronutrients/maternal-diet.html',
    },
  ],
};
