import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-bottle-rot-cavities',
  title: 'Baby Bottle Tooth Decay (Early Childhood Cavities)',
  category: 'physical',
  searchTerms: [
    'baby bottle tooth decay',
    'baby bottle rot',
    'baby cavities',
    'toddler cavities',
    'baby teeth brown spots',
    'baby teeth rotting',
    'baby teeth decay',
    'nursing caries',
    'baby teeth chalky white spots',
    'toddler tooth decay',
    'baby sleeping with bottle cavities',
  ],
  quickAnswer:
    'Baby bottle tooth decay (also called early childhood caries) happens when a baby\'s teeth are frequently exposed to sugary liquids - milk, formula, juice, or sweetened drinks - especially during sleep. The earliest sign is chalky white spots near the gumline of the front teeth. This is preventable and, if caught early, the damage can be stopped. The AAP recommends never putting a baby to bed with a bottle of anything other than water, and starting dental visits by age 1.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'As soon as teeth appear, they are susceptible to decay. The highest risk behavior is falling asleep with a bottle of milk or formula, which pools around the teeth during sleep when saliva production is low. Begin wiping teeth with a damp cloth or soft infant toothbrush after feeds. Use a rice-grain-sized smear of fluoride toothpaste as soon as the first tooth appears. Avoid putting juice in a bottle.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Bottle tooth decay most commonly affects the upper front teeth, which can develop white spots, brown discoloration, or visible holes. Prolonged bottle use (especially at bedtime) and frequent sipping on sugary drinks throughout the day increase risk. Transition from bottle to cup by 12-15 months. Brush teeth twice daily with a smear of fluoride toothpaste. The first dental visit should happen by age 1 or within 6 months of the first tooth.',
    },
  ],
  whenNormal: [
    'White, healthy-looking teeth with no spots or discoloration',
    'Slight yellowing at the gumline from thin enamel in baby teeth (not the same as decay)',
    'Staining from foods or iron supplements that can be brushed off',
  ],
  whenToMention: [
    'You notice chalky white spots near the gumline of the front teeth (earliest sign of decay)',
    'Brown or dark spots appear on any baby teeth',
    'Your child\'s teeth appear rough, pitted, or have visible holes',
    'You are concerned about your child\'s bottle or nursing habits and cavity risk',
  ],
  whenToActNow: [
    'A tooth has broken down significantly with visible cavities or brown-black areas',
    'Your child has facial swelling or a gum abscess (bump with pus) near a decayed tooth',
    'Your child is in pain from a damaged tooth and cannot eat',
    'Multiple teeth show signs of rapid decay',
  ],
  relatedMilestones: ['6-months', '12-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-teeth-discolored-gray', 'baby-dental-injury-chipped-tooth', 'late-teething'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. How to Prevent Tooth Decay in Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/How-to-Prevent-Tooth-Decay-in-Your-Baby.aspx',
    },
    {
      org: 'AAPD',
      citation: 'American Academy of Pediatric Dentistry. Early Childhood Caries.',
      url: 'https://www.aapd.org/resources/parent/faq/',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Children\'s Oral Health.',
      url: 'https://www.cdc.gov/oral-health/about/children.html',
    },
  ],
};
