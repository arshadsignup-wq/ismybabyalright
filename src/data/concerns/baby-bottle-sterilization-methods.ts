import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-bottle-sterilization-methods',
  title: 'How to Sterilize Baby Bottles Safely',
  category: 'feeding',
  searchTerms: [
    'sterilize baby bottles',
    'baby bottle sterilization methods',
    'how to sterilize bottles',
    'microwave bottle sterilizer',
    'UV bottle sterilizer baby',
    'boiling bottles safe',
    'when to stop sterilizing bottles',
    'baby bottle cleaning vs sterilizing',
    'dishwasher sterilize bottles',
    'steam sterilizer baby bottles',
  ],
  quickAnswer:
    'The CDC recommends sterilizing baby bottles before first use and then sanitizing them at least once daily for babies under 3 months, premature infants, or immunocompromised babies. For healthy babies over 3 months, thorough washing with hot soapy water and a bottle brush after each use is generally sufficient. Sterilization methods include boiling, steam sterilizers, microwave steam bags, and UV sterilizers.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'For young babies, the CDC recommends daily sanitizing of bottles in addition to thorough cleaning after each use. This is because newborns have immature immune systems. Sterilization methods include boiling parts in water for 5 minutes, using an electric or microwave steam sterilizer, or using a dishwasher with a sanitize cycle and hot water. After sterilizing, allow parts to air dry on a clean surface. Avoid using dish towels to dry, as they can harbor bacteria.',
    },
    {
      ageRange: '3-12 months',
      context:
        'For healthy babies over 3 months, daily sterilization is generally not necessary as long as bottles are thoroughly cleaned after each use. Wash all parts (bottle, nipple, ring, cap) in hot soapy water with a dedicated bottle brush, then rinse well. A dishwasher with a hot water cycle and heated dry setting can be an effective alternative. Replace nipples regularly when they show signs of wear, discoloration, or thinning, as worn nipples can harbor bacteria and pose a choking risk.',
    },
    {
      ageRange: '12-36 months',
      context:
        'As your child transitions from bottles to cups, the same cleaning principles apply to sippy cups and straw cups - thorough washing after each use with attention to all parts where milk or formula can collect. This is a good age to transition away from bottles entirely (AAP recommends weaning from bottles by 12-18 months). Any cups with valves or straws should be disassembled and cleaned thoroughly, as trapped liquid can grow mold.',
    },
  ],
  whenNormal: [
    'You sterilize bottles before first use and then wash them thoroughly with hot soapy water after each feeding.',
    'You use a dishwasher with hot water and heated dry settings to clean bottles.',
    'Bottle nipples show some discoloration over time - replace them regularly (every 2-3 months or sooner if damaged).',
  ],
  whenToMention: [
    'Your baby seems to get frequent stomach bugs and you are wondering if bottle hygiene could be a factor.',
    'You notice mold or residue in bottles or sippy cups despite regular cleaning.',
    'Your baby has a weakened immune system and you need guidance on the most effective sterilization routine.',
  ],
  whenToActNow: [
    'Your baby develops symptoms of a gastrointestinal illness - persistent vomiting, diarrhea, fever, or signs of dehydration after feeds.',
    'You discover mold inside a bottle or sippy cup that your baby has been drinking from.',
    'Your baby has choked on or swallowed a piece of a deteriorated bottle nipple.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-bottle-warming-safety',
    'baby-bottle-to-cup-transition',
    'baby-cup-drinking-when-to-start',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. How to Clean, Sanitize, and Store Infant Feeding Items.',
      url: 'https://www.cdc.gov/infant-formula-preparation/about/cleaning-sanitizing-storing.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bottle Feeding Basics. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Bottle-Feeding-How-Its-Done.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Safe Preparation, Storage and Handling of Powdered Infant Formula Guidelines, 2007.',
      url: 'https://www.who.int/publications/i/item/9789241595414',
    },
  ],
};
