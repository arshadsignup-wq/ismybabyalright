import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fluoride-toothpaste-baby-safety',
  title: 'Fluoride Toothpaste Safety for Babies',
  category: 'medical',
  searchTerms: [
    'fluoride toothpaste baby safe',
    'when to use fluoride toothpaste baby',
    'fluoride toothpaste for infants',
    'baby swallowing fluoride toothpaste',
    'is fluoride safe for babies',
    'how much fluoride toothpaste for baby',
    'fluoride free toothpaste baby',
    'fluoride toothpaste age recommendations',
    'fluorosis from toothpaste baby',
  ],
  quickAnswer:
    'Both the AAP and AAPD recommend using a rice-grain-sized smear of fluoride toothpaste starting with the eruption of the first tooth. Fluoride is safe and effective at preventing cavities in babies when used in the recommended amount. The small amount used (about 0.1 mg of fluoride) is safe even if swallowed. Fluoride-free toothpaste is not recommended because it does not provide cavity protection.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Before teeth erupt, toothpaste is not needed. Parents should gently wipe the baby\'s gums with a clean, damp cloth after feedings to remove bacteria and get the baby used to the sensation of oral care.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As soon as the first tooth appears, begin brushing twice daily with a soft-bristled infant toothbrush and a thin smear of fluoride toothpaste (about the size of a grain of rice). This tiny amount is safe if swallowed and provides important cavity protection.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue using a rice-grain-sized smear of fluoride toothpaste. Brush all surfaces of the erupted teeth, especially along the gumline. Babies at this age will swallow some toothpaste, which is expected and safe at this amount. There is no need to rinse after brushing.',
    },
    {
      ageRange: '12 months+',
      context:
        'Continue with a rice-grain-sized smear until age 3, when you can increase to a pea-sized amount. Supervise brushing until at least age 6 to ensure proper technique and prevent excessive swallowing. Your dentist may also apply fluoride varnish during checkups for additional protection.',
    },
  ],
  whenNormal: [
    'You are using a rice-grain-sized smear of fluoride toothpaste starting from the first tooth',
    'Your baby swallows the tiny amount of toothpaste during brushing, as this is expected and safe',
    'You are brushing your baby\'s teeth twice a day with a soft infant toothbrush',
    'Your pediatric dentist has confirmed your fluoride routine is appropriate',
  ],
  whenToMention: [
    'You are unsure about the right amount of fluoride toothpaste to use for your baby\'s age',
    'Your water supply is fluoridated and you want to understand total fluoride exposure',
    'You notice white spots or streaks on your child\'s teeth that could indicate fluorosis',
  ],
  whenToActNow: [
    'Your child has eaten a large amount of fluoride toothpaste from the tube, as ingesting very large quantities can cause nausea and vomiting and may require calling Poison Control (1-800-222-1222)',
    'Your child shows signs of distress after ingesting toothpaste, including vomiting or abdominal pain',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Fluoride Therapy. The Reference Manual of Pediatric Dentistry.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/fluoride-therapy/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. FAQ: Fluoride and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/oral-health/Pages/FAQ-Fluoride-and-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Dental and Craniofacial Research. Fluoride and Dental Health.',
      url: 'https://www.nidcr.nih.gov/health-info/fluoride',
    },
  ],
};
