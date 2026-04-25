import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'spit-up-vs-vomit',
  title: 'Spit-Up vs. Vomit: How to Tell the Difference',
  category: 'digestive',
  searchTerms: [
    'spit up vs vomit baby',
    'difference between spit up and vomit',
    'baby spitting up a lot',
    'is my baby vomiting or spitting up',
    'when is spit up concerning',
    'projectile vomit vs spit up',
    'baby throws up after every feeding',
    'normal spit up amount',
  ],
  quickAnswer: 'Spit-up flows or dribbles out effortlessly, happens shortly after feeding, and baby seems unbothered. Vomiting is forceful, involves stomach muscle contractions, may happen anytime, and often leaves baby uncomfortable or upset. Most babies spit up frequently in the first year  -  it\'s messy but harmless as long as baby is gaining weight and seems comfortable.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Spit-up is extremely common in newborns  -  some babies spit up after almost every feed. The valve between the esophagus and stomach (lower esophageal sphincter) is still immature, and baby\'s stomach is small. Spit-up usually looks like slightly curdled milk and flows out without much effort. It may seem like a lot but is usually just 1-2 tablespoons. True vomiting at this age is more forceful, may shoot out (projectile), and baby usually cries before or after.',
    },
    {
      ageRange: '3-6 months',
      context: 'Spit-up often peaks around 4 months, then gradually improves. Baby may spit up when bounced, during tummy time, or when laid down after eating. This is normal. Vomiting is different: it involves visible abdominal contractions, may happen an hour or more after feeding, and is usually more forceful. The content may look different too  -  vomit is often partially digested, while spit-up looks more like regular milk.',
    },
    {
      ageRange: '6-12 months',
      context: 'As baby sits up more and starts solids, spit-up typically decreases. If your older baby suddenly starts vomiting, consider whether it\'s illness-related (stomach bug, cold), food-related, or caused by something else. Vomiting that persists beyond a day, contains bile (green/yellow), or is projectile needs evaluation. Occasional spit-up is still normal, especially if baby ate too much or is bouncing around after eating.',
    },
    {
      ageRange: '12+ months',
      context: 'Most toddlers have outgrown frequent spit-up. If vomiting occurs now, it\'s usually due to illness (stomach virus, food poisoning), motion sickness, or eating too much. Persistent vomiting or vomiting without other signs of illness should be discussed with your pediatrician.',
    },
  ],
  whenNormal: [
    'Spit-up that flows or dribbles out without force, usually within an hour of feeding',
    'Baby seems happy and comfortable, continues feeding well',
    'Spit-up that looks like slightly curdled milk (may smell sour)',
    'Baby is gaining weight appropriately',
    'Happens less when baby is held upright after feeding',
  ],
  whenToMention: [
    'Spit-up seems to be increasing rather than decreasing over time',
    'Baby seems uncomfortable or arches back during/after feeds',
    'You\'re concerned about the amount or frequency',
    'Weight gain has slowed (but not stopped)',
  ],
  whenToActNow: [
    'Projectile vomiting (shoots several feet across the room) after most feeds',
    'Vomit is green, yellow (bile), or contains blood (red or coffee-ground appearance)',
    'Baby isn\'t gaining weight or is losing weight',
    'Fewer than 6 wet diapers per day or signs of dehydration',
    'Baby refuses to eat or seems lethargic',
    'Vomiting accompanied by fever, diarrhea, or severe belly pain',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation: 'Spitting Up in Babies: What\'s Normal and What\'s Not (2024)',
      url: 'https://www.aap.org',
    },
    {
      org: 'Mayo Clinic',
      citation: 'Infant Reflux vs. GERD: Understanding the Difference (2024)',
      url: 'https://www.mayoclinic.org',
    },
    {
      org: 'Children\'s Hospital of Philadelphia',
      citation: 'Vomiting in Infants: When to Seek Medical Care (2024)',
      url: 'https://www.chop.edu',
    },
  ],
};
