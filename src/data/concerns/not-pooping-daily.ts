import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-pooping-daily',
  title: 'Baby Not Pooping Every Day',
  category: 'digestive',
  searchTerms: [
    'baby not pooping every day',
    'baby skips days pooping',
    'baby hasn\'t pooped in 2 days',
    'baby hasn\'t pooped in a week',
    'breastfed baby not pooping',
    'is it normal for baby to not poop daily',
    'baby poops every other day',
    'baby poops once a week',
    'how long can baby go without pooping',
    'baby infrequent bowel movements',
  ],
  quickAnswer:
    'It is completely normal for many babies, especially breastfed ones, to not poop every day. After the first 6 weeks, breastfed babies can go anywhere from several times a day to once every 7-10 days and still be perfectly healthy. What matters most is that the stool is soft when it does come and your baby is comfortable, feeding well, and gaining weight.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'In the first 6 weeks, frequent pooping (at least 3-4 times per day for breastfed babies) is an important sign that your baby is getting enough milk. If a newborn under 6 weeks is not pooping at least once a day, contact your pediatrician, as this could indicate insufficient feeding.',
    },
    {
      ageRange: '6 weeks - 6 months',
      context:
        'After 6 weeks, it is very common for breastfed babies to dramatically reduce their pooping frequency. Some poop only once a week or even less often, and this is perfectly normal as long as the stool is soft. Breast milk is so well absorbed that there may be very little waste. Formula-fed babies typically continue to poop 1-3 times per day.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once solid foods are introduced, most babies settle into a more regular pattern of 1-2 stools per day. If your baby goes several days without pooping after starting solids, ensure they are getting enough water and fiber-rich foods. Going 3-4 days without a stool at this age is worth monitoring but not always a problem.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers vary in their pooping frequency, but most have at least one bowel movement per day. Going 2-3 days occasionally is not unusual, but consistently infrequent stools with hard consistency may indicate constipation that benefits from dietary adjustments like more water, fruits, and vegetables.',
    },
  ],
  whenNormal: [
    'Your breastfed baby over 6 weeks old poops only once every few days but the stool is soft and your baby is comfortable',
    'Your baby skips a day between stools but shows no signs of discomfort or straining',
    'Your baby\'s pooping frequency decreased after the first month but they are gaining weight well',
    'Your baby has an irregular pattern but stools are always soft and easy to pass',
    'Your breastfed baby goes up to a week without pooping but has a large, soft bowel movement when they finally do',
  ],
  whenToMention: [
    'Your formula-fed baby consistently goes more than 3-4 days without pooping',
    'Your baby seems uncomfortable or gassy between bowel movements even though stools are soft when they come',
    'Your baby who is eating solids regularly goes more than 4-5 days without pooping',
  ],
  whenToActNow: [
    'Your newborn under 6 weeks has not pooped in more than 24-48 hours and is feeding poorly',
    'Your baby of any age has a distended, firm abdomen with vomiting and has not passed stool or gas',
    'Your baby has not pooped in several days and is showing signs of severe discomfort, refusing feeds, or is lethargic',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Constipation in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/index.html',
    },
  ],
};
