import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'posseting-baby',
  title: 'My Baby Possets After Every Feed',
  category: 'digestive',
  searchTerms: [
    'baby posseting after every feed',
    'what is posseting',
    'baby spits up small amounts constantly',
    'baby dribbles milk after feeding',
    'posseting vs reflux',
    'baby brings up milk hours later',
    'is posseting normal',
    'how to reduce posseting',
  ],
  quickAnswer: 'Posseting (also called "spitting up") is when small amounts of milk effortlessly flow back up after feeding. It\'s incredibly common in healthy babies because the valve at the top of the stomach is still developing. Most babies posset occasionally or even after every feed, and it\'s completely harmless as long as baby is gaining weight well and seems comfortable.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Posseting is very common in newborns and young babies. The lower esophageal sphincter (the valve between the esophagus and stomach) is immature, and baby\'s stomach is small and positioned horizontally. Small amounts of milk easily flow back up, especially if baby has eaten a lot, swallowed air, or is laid down too quickly after feeding. You might notice milk dribbling from baby\'s mouth even an hour after feeding  -  this is normal.',
    },
    {
      ageRange: '3-6 months',
      context: 'Posseting often continues or even peaks around 4 months. This doesn\'t mean something is wrong  -  it\'s just part of normal development. Some babies posset more during or after tummy time, when bounced or moved around, or when they\'re laughing or babbling. The amount may look like a lot but is usually just a tablespoon or two. As long as baby is gaining weight and seems happy, frequent posseting is not a concern.',
    },
    {
      ageRange: '6-12 months',
      context: 'Posseting typically decreases significantly as baby sits upright more, the esophageal valve matures, and baby starts solids. Some babies continue to posset occasionally, especially if they overeat or are very active after a feed. If your baby is still posseting frequently at this age but is growing well and happy, it\'s usually fine. If it seems to be getting worse or baby seems uncomfortable, mention it to your pediatrician.',
    },
    {
      ageRange: '12+ months',
      context: 'Most toddlers have outgrown frequent posseting by this age. Occasional spit-up might still happen if they eat too much, drink while lying down, or are very active right after eating. If your toddler suddenly starts posseting frequently after months without it, consider recent diet changes or illness.',
    },
  ],
  whenNormal: [
    'Small amounts of milk dribbling or flowing out after feeds',
    'Baby seems completely unbothered and continues to feed eagerly',
    'Posseting that happens shortly after feeding or even an hour later',
    'Baby is gaining weight according to growth curve',
    'At least 6 wet diapers per day',
  ],
  whenToMention: [
    'Posseting seems excessive (soaking multiple bibs per day) but baby is growing well',
    'Baby seems to be posseting more than before',
    'You\'re worried about the frequency or amount',
    'Baby occasionally seems uncomfortable but it\'s not a consistent pattern',
  ],
  whenToActNow: [
    'Posseting becomes forceful, projectile vomiting',
    'Baby isn\'t gaining weight or is losing weight',
    'Baby refuses feeds or seems to be in pain during or after feeding',
    'Posset is green (bile-colored), yellow, or contains blood',
    'Baby has fewer than 6 wet diapers in 24 hours',
    'Baby arches back severely during feeds, cries inconsolably, or has difficulty breathing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation: 'Spitting Up (Posseting) in Healthy Babies: What to Expect (2024)',
      url: 'https://www.aap.org',
    },
    {
      org: 'La Leche League International',
      citation: 'Normal Spitting Up vs. Reflux in Breastfed Babies (2024)',
      url: 'https://www.llli.org',
    },
    {
      org: 'Mayo Clinic',
      citation: 'Infant Reflux: When Spit-Up Is Normal and When to Worry (2024)',
      url: 'https://www.mayoclinic.org',
    },
  ],
};
