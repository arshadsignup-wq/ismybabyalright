import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'excessive-night-feeding',
  title: 'My Baby Still Feeds Excessively at Night',
  category: 'feeding',
  searchTerms: [
    'baby feeding too much at night',
    'baby waking every hour to eat',
    'baby nursing all night',
    'excessive night feeding',
    'baby won\'t sleep without feeding',
    'baby reverse cycling',
    'night weaning',
    'baby eating more at night than day',
    'baby comfort nursing all night',
    'how to reduce night feeds',
  ],
  quickAnswer:
    'Frequent night feeding is biologically normal for young babies, as their small stomachs need regular refueling. However, by 6 months most healthy, full-term babies who are gaining weight well are developmentally capable of going longer stretches at night. If your baby is still feeding very frequently at night, it may be a habit pattern that can be gently adjusted.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns need to eat frequently, typically every 2 to 3 hours around the clock. Their small stomachs hold only a few ounces, and breast milk is digested quickly. Night feedings are essential for maintaining your milk supply and ensuring adequate caloric intake. This frequency is completely normal and expected. It is not recommended to try to reduce night feedings at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Many babies at this age begin to stretch one longer sleep period to 4 to 6 hours, often in the first part of the night. However, it is still normal to feed 1 to 3 times per night. Some babies reverse cycle, meaning they eat more at night and less during the day, especially if a parent has returned to work and the baby prefers nursing over a bottle. Encouraging full feeds during the day and offering a dream feed before you go to bed may help consolidate night sleep.',
    },
    {
      ageRange: '6-9 months',
      context:
        'By 6 months, many pediatricians agree that healthy babies who are gaining weight well can go longer stretches without feeding at night. If your baby is still waking every 1 to 2 hours, the feedings may have become a sleep association rather than a nutritional need. Gradually reducing the duration or volume of night feeds while ensuring adequate daytime calories can help. Discuss a night-weaning plan with your pediatrician if you are ready to make changes.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Most babies at this age are getting the majority of their calories during the day from both milk and solid foods. One night feed may still be appropriate, but if your baby is feeding 3 or more times per night, this is usually a habit rather than hunger. Night weaning at this age is generally safe for healthy, well-growing babies and can improve sleep quality for the whole family. Your pediatrician can help you create a plan that feels right for your situation.',
    },
  ],
  whenNormal: [
    'Your newborn under 3 months feeds every 2 to 3 hours at night',
    'Your baby between 3 and 6 months still wakes 1 to 2 times per night to feed',
    'Your baby feeds more at night during a growth spurt, illness, or developmental leap',
    'Your baby has increased night feeding temporarily after starting daycare or when teething',
  ],
  whenToMention: [
    'Your baby is older than 9 months and still waking every 1 to 2 hours to feed all night',
    'You suspect your baby is reverse cycling and eating very little during the day',
    'Frequent night feeding is significantly affecting your mental health or ability to function during the day',
  ],
  whenToActNow: [
    'Your baby seems to be in pain during night feeds, arching their back or screaming, which may indicate reflux or an ear infection',
    'Your baby is losing weight or not gaining appropriately despite seemingly frequent feeds',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
    'sleep',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. How Much and How Often to Breastfeed.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/breastfeeding/how-much-and-how-often.html',
    },
  ],
};
