import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-steam-room-humidifier-safety',
  title: 'Humidifier Safety and Steam for Babies',
  category: 'medical',
  searchTerms: [
    'humidifier baby safe',
    'steam room baby cold',
    'cool mist vs warm mist humidifier baby',
    'humidifier for baby congestion',
    'baby humidifier safety',
    'steam inhalation baby',
    'vaporizer safe for baby',
    'humidifier baby room',
    'baby stuffy nose humidifier',
    'humidifier SIDS risk',
    'humidifier mold baby',
  ],
  quickAnswer:
    'Cool-mist humidifiers are the recommended type for babies and young children because warm-mist humidifiers and vaporizers pose a burn risk. A humidifier can help ease congestion and dry skin by adding moisture to the air. Never take a baby into an actual steam room or sauna, as babies cannot regulate their body temperature well and are at risk of overheating and burns. Clean your humidifier daily to prevent mold and bacteria buildup.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Cool-mist humidifiers can be helpful during dry winter months or when your baby has a cold. Place the humidifier near but not directly next to the crib, out of baby\'s reach. Aim for 30-50% humidity in the room - a hygrometer can help measure this. Too much humidity promotes mold growth. The AAP recommends cool-mist over warm-mist to prevent burns. Never add essential oils, Vicks, or menthol products to a humidifier for a baby, as these can irritate their airways. Clean the humidifier daily with water and vinegar.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile, ensure the humidifier is placed where they cannot reach or pull it down. Running a humidifier during naps and nighttime can help congested babies breathe and sleep more comfortably. For acute congestion, running a hot shower and sitting in the steamy bathroom (not in the shower) for 10-15 minutes can provide temporary relief. Avoid directly exposing your baby to steam. After using a humidifier, open windows during the day to prevent excess moisture buildup in the room.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Continue using cool-mist humidifiers as needed, keeping them well out of reach of curious toddlers. Warm-mist humidifiers and vaporizers remain unsafe due to burn risk with active toddlers. If your toddler has croup, running a cool-mist humidifier and breathing cool night air can help reduce airway swelling. Actual steam rooms, saunas, and hot tubs are not safe for young children - babies and toddlers can overheat quickly and suffer burns. Monitor humidifier filters and replace them per manufacturer instructions.',
    },
  ],
  whenNormal: [
    'You use a cool-mist humidifier in your baby\'s room during dry weather or when they have a cold.',
    'You sit in a steamy bathroom (not in the shower) with your congested baby for brief relief.',
    'Your baby seems more comfortable breathing with a humidifier running.',
  ],
  whenToMention: [
    'You are unsure which type of humidifier is safest for your baby\'s room.',
    'You notice mold growing in or around the humidifier despite cleaning.',
    'Your baby seems to cough more when the humidifier is running.',
  ],
  whenToActNow: [
    'Your baby has been burned by a warm-mist humidifier or vaporizer.',
    'Your baby is showing signs of overheating: flushed skin, rapid breathing, lethargy.',
    'Your baby\'s congestion is severe enough that they are struggling to breathe, regardless of humidifier use.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-stuffy-nose-remedies', 'baby-room-temperature-sleep', 'wheezing'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Humidifiers and Indoor Allergies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Humidifiers-and-Indoor-Allergies.aspx',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration - Humidifier Safety Tips.',
      url: 'https://www.fda.gov/consumers/consumer-updates/humidifiers-safety-tips',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Treating Colds in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Colds.aspx',
    },
  ],
};
