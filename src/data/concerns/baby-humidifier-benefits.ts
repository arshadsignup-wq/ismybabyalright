import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-humidifier-benefits',
  title: 'Should I Use a Humidifier for My Congested Baby?',
  category: 'medical',
  searchTerms: [
    'humidifier for baby congestion',
    'cool mist humidifier baby',
    'warm mist vs cool mist baby',
    'humidifier in baby room',
    'baby humidifier benefits',
    'humidifier help baby breathe',
    'humidifier baby cold',
    'best humidifier for baby',
    'humidifier mold concern baby',
    'when to use humidifier baby',
  ],
  quickAnswer:
    'A cool-mist humidifier can help ease your baby\'s congestion by adding moisture to the air, which keeps nasal passages from drying out and helps loosen mucus. The AAP recommends cool-mist humidifiers (not warm-mist) for children to prevent burn injuries. Clean the humidifier daily to prevent mold and bacteria growth, and use distilled water when possible.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A cool-mist humidifier placed near (but not directly next to) your baby\'s sleep area can help ease breathing during colds. Place it on a stable surface 3-4 feet from the crib. Empty, rinse, and dry the humidifier daily to prevent mold and bacterial buildup. Never add essential oils, Vicks, or other products to the humidifier water for young babies.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue using a cool-mist humidifier during illness and in dry winter months. Aim for a room humidity level of 30-50%. Excessive humidity (above 60%) can promote mold and dust mite growth, which can worsen congestion and allergies. A simple hygrometer can help you monitor room humidity levels.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby becomes mobile, ensure the humidifier is placed safely out of reach. Cord management is important to prevent pulling hazards. Continue the daily cleaning routine. Some parents find it helpful to run the humidifier during all sleep times during cold and flu season, even when their baby is not actively sick.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Active toddlers may try to reach or knock over a humidifier. Place it on a high, stable surface away from the crib or bed. Never use a warm-mist or steam humidifier in a toddler\'s room as the hot water poses a burn risk. Replace humidifier filters as recommended by the manufacturer.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Continue using a cool-mist humidifier as needed for congestion and dry air. Teach your child not to touch the humidifier. If your home has central humidity control, you may not need a separate unit. Watch for signs that humidity is too high, such as condensation on windows or a musty smell.',
    },
  ],
  whenNormal: [
    'Your baby breathes more easily with the humidifier running during a cold',
    'You notice your baby sleeps better with a humidifier in dry weather or winter months',
    'Mild, temporary increase in nasal drainage as the humidifier loosens dried mucus',
  ],
  whenToMention: [
    'Your baby\'s congestion seems to worsen with the humidifier, which could indicate humidity is too high or the unit needs cleaning',
    'You notice mold growth in the humidifier despite regular cleaning',
    'Your baby seems to have chronic congestion that correlates with humidifier use',
  ],
  whenToActNow: [
    'Your baby develops wheezing, coughing, or worsening respiratory symptoms after starting humidifier use, which could indicate mold exposure',
    'Your baby has respiratory distress that is not improved by any comfort measures including humidifier, saline, and suctioning',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-nasal-congestion-relief-methods',
    'baby-saline-drops-usage',
    'baby-mold-exposure-symptoms',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Humidifiers and Indoor Allergies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Indoor-Allergies.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Humidifiers: Ease skin, breathing symptoms.',
      url: 'https://www.mayoclinic.org/diseases-conditions/common-cold/in-depth/humidifiers/art-20048335',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Indoor humidity and child health. Environmental Health Perspectives.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/16882524/',
    },
  ],
};
