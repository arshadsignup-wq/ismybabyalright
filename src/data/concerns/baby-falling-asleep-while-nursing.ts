import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-falling-asleep-while-nursing',
  title: 'Baby Falling Asleep While Nursing',
  category: 'feeding',
  searchTerms: [
    'baby falls asleep while breastfeeding',
    'baby sleeping at the breast',
    'baby dozes off during nursing',
    'newborn falls asleep while eating',
    'baby not finishing feeds falling asleep',
    'baby sleepy during breastfeeding',
    'how to keep baby awake while nursing',
    'baby only comfort nursing not eating',
    'lazy eater baby breastfeeding',
    'baby snacking at breast and sleeping',
  ],
  quickAnswer:
    'It is very common for babies to fall asleep while nursing, especially in the newborn period. Breastfeeding releases hormones that make both you and your baby feel relaxed and sleepy. In most cases this is completely normal, but if your baby is not gaining weight well or consistently falls asleep within a minute or two of latching, it may be worth trying some gentle techniques to keep them feeding longer.',
  byAge: [
    {
      ageRange: '0-4 weeks',
      context:
        'Newborns are naturally very sleepy and it is extremely common for them to doze off at the breast. The warmth and comfort of nursing, combined with the hormone cholecystokinin released during feeding, makes them drowsy. To encourage a full feed, try skin-to-skin contact, gently tickling their feet or rubbing their back, switching breasts when they slow down, and using breast compressions to keep the milk flowing. Undressing them to just a diaper can also help, as a slightly cooler baby tends to stay more alert.',
    },
    {
      ageRange: '1-3 months',
      context:
        'By this age, some babies become very efficient feeders and may genuinely finish a feed in 10 to 15 minutes, while others continue to be sleepy eaters. Watch for active swallowing rather than just flutter sucking. If your baby is having plenty of wet and dirty diapers and gaining weight well, they may simply be an efficient feeder who gets what they need quickly before drifting off.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age are usually more alert and interactive during feeds. If your baby suddenly starts falling asleep during nursing after being a more active feeder, they may be going through a growth spurt and need extra rest, or they may be using nursing primarily for comfort. If weight gain is on track, this is not a concern. If your baby seems excessively sleepy at every feed, mention it to your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies who fall asleep nursing may be using the breast as a sleep association. This is normal and not harmful, though some parents eventually wish to separate nursing from sleep. If your baby is eating solids well and gaining weight, falling asleep at the breast is a comfort behavior rather than a feeding concern.',
    },
  ],
  whenNormal: [
    'Your newborn drifts off after 10 to 20 minutes of active nursing with audible swallowing',
    'Your baby wakes to nurse frequently and gains weight well despite falling asleep during some feeds',
    'Your baby has six or more wet diapers per day and regular bowel movements',
    'Your baby falls asleep at the end of a feed but has clearly been actively eating',
    'The sleepy feeding happens mostly during nighttime or early morning sessions',
  ],
  whenToMention: [
    'Your baby falls asleep within one to two minutes of latching at almost every feed and is not gaining weight well',
    'Your baby is excessively sleepy throughout the day, difficult to wake for feeds, and seems lethargic rather than just drowsy',
    'Your baby is not producing enough wet diapers (fewer than six per day after day four)',
  ],
  whenToActNow: [
    'Your newborn is very difficult to wake, feeds very briefly, and shows signs of dehydration such as a sunken fontanelle, dry mouth, or no wet diapers for 6 or more hours',
    'Your baby has a yellowish skin color (jaundice) and is increasingly sleepy and difficult to rouse for feeds',
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
        'American Academy of Pediatrics. Breastfeeding Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How Often and How Much Should Your Baby Eat? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/How-Often-and-How-Much-Should-Your-Baby-Eat.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
  ],
};
