import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-spitting-up-large-amounts',
  title: 'Baby Spitting Up Large Amounts',
  category: 'digestive',
  searchTerms: [
    'baby spitting up a lot',
    'baby spit up large volume',
    'baby spit up whole feed',
    'baby spitting up entire bottle',
    'how much spit up normal baby',
    'baby excessive spit up',
    'baby spit up too much',
    'baby spit up after every feed large',
    'projectile spit up baby',
    'baby spit up volume normal',
  ],
  quickAnswer:
    'Spit-up volumes often look larger than they actually are because liquid spreads out on clothing and surfaces. Even what appears to be a full feed coming back up is usually only 1 to 2 tablespoons. As long as your baby is gaining weight well, wetting enough diapers, and seems content, large-volume spit-up is messy but not dangerous.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies commonly spit up large amounts because their stomach is small and the esophageal sphincter is immature. Overfeeding is a common cause of large-volume spit-up. Try smaller, more frequent feeds and burp well during and after feeding. Paced bottle feeding helps prevent gulping air and overeating.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Spit-up volume may peak around 4 months. The key measure is your baby\'s weight gain, not the volume of spit-up. To visualize how much spit-up is normal, spill 1 to 2 tablespoons of liquid on a surface and see how large a puddle it makes. Most spit-up is less than it appears.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solids and sit upright, spit-up volume typically decreases. If large-volume spit-up continues or worsens after starting solids, mention it to your pediatrician. Thicker foods naturally stay down better than liquids.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Regular large-volume spit-up is uncommon at this age. If a toddler is still spitting up large amounts, this may indicate GERD or another condition requiring evaluation. Occasional vomiting during illnesses is normal, but regular large-volume spit-up is not.',
    },
  ],
  whenNormal: [
    'Your baby spits up after most feeds but is gaining weight along their growth curve',
    'Spit-up looks like a lot on your clothes but your baby seems comfortable afterward',
    'The classic "happy spitter" who spits up regularly but is thriving',
  ],
  whenToMention: [
    'Spit-up seems truly excessive and you are worried about your baby getting enough nutrition',
    'Your baby seems uncomfortable or distressed with the spitting up',
    'Weight gain has slowed or your baby is dropping on the growth chart',
  ],
  whenToActNow: [
    'True projectile vomiting that shoots across the room, especially in a baby 2 to 8 weeks old, which could indicate pyloric stenosis',
    'Vomit that is green (bilious) or contains blood',
    'Your baby appears dehydrated with dry mouth, sunken fontanelle, or fewer than 6 wet diapers in 24 hours',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Babies Spit Up. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Spitting-Up-Reflux.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. GER & GERD in Infants.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding Recommendations. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
  ],
  relatedConcernSlugs: ['spitting-up', 'reflux', 'spit-up-vs-vomit', 'projectile-vomiting-baby', 'pyloric-stenosis'],
};
