import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'reflux',
  title: 'Baby Reflux / GERD',
  category: 'feeding',
  searchTerms: [
    'baby reflux',
    'baby GERD',
    'infant acid reflux',
    'baby arching back during feeding',
    'baby crying after feeds',
    'silent reflux baby',
    'baby reflux symptoms',
    'how to help baby with reflux',
    'baby uncomfortable after eating',
    'baby reflux at night',
    'infant reflux treatment',
  ],
  quickAnswer:
    'Gastroesophageal reflux is very common in babies because the valve at the top of the stomach is still maturing. Most infant reflux is uncomplicated, meaning your baby spits up but is otherwise happy and growing well. True GERD, where reflux causes pain, feeding difficulties, or poor weight gain, affects a smaller number of babies and is very treatable.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Reflux typically begins in the first few weeks of life as feeding volumes increase. Newborns have short esophaguses and immature digestive systems, making reflux almost universal to some degree. Keeping your baby upright after feeds, offering smaller more frequent feeds, and gentle burping can significantly help. Silent reflux, where the stomach contents come up but are swallowed back down causing discomfort without visible spit-up, can be harder to spot.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Reflux often peaks around 4 months and may seem to worsen before it gets better. If your baby is consistently uncomfortable during or after feeds, arches their back, or has feeding aversions developing, talk to your pediatrician. Positional strategies and sometimes thickening feeds can help. Most pediatricians prefer to try lifestyle changes before medication.',
    },
    {
      ageRange: '6-9 months',
      context:
        'As babies learn to sit upright and begin eating solid foods, reflux often starts to improve naturally. Gravity and thicker food consistency both help keep stomach contents down. If reflux is worsening rather than improving after 6 months, your pediatrician may want to investigate further.',
    },
    {
      ageRange: '9-18 months',
      context:
        'The vast majority of babies outgrow reflux by 12 to 18 months as the esophageal sphincter matures. If your baby was on reflux medication, your doctor will likely try weaning off it around this time. Persistent severe reflux beyond 18 months may warrant referral to a pediatric gastroenterologist.',
    },
  ],
  whenNormal: [
    'Your baby spits up but is gaining weight well and seems happy between feeds',
    'Reflux episodes happen after feeds and your baby settles within a few minutes',
    'Your baby has brief episodes of arching or fussiness after large feeds but is otherwise content',
    'Symptoms gradually improve after 4 to 6 months of age',
  ],
  whenToMention: [
    'Your baby consistently cries or arches during or right after feeds, suggesting pain rather than simple spit-up',
    'Your baby is developing feeding aversion, turning away from the bottle or breast before finishing',
    'Your baby has persistent coughing, wheezing, or hoarse voice that may be related to reflux',
    'Weight gain is slower than expected despite adequate feeding opportunities',
  ],
  whenToActNow: [
    'Your baby is refusing to eat entirely and showing signs of dehydration such as fewer wet diapers or sunken fontanelle',
    'Vomit is green or bile-stained, which could indicate an intestinal obstruction',
    'There is blood in spit-up or vomit, or your baby is having difficulty breathing during reflux episodes',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
    'sitting',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. GERD (Reflux) in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/GERD-Reflux.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Babies Spit Up. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Spitting-Up-Reflux.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/index.html',
    },
  ],
};
