import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'air-quality-pollution-baby-health',
  title: 'Air Quality and Baby Health',
  category: 'medical',
  searchTerms: [
    'air quality bad for baby',
    'wildfire smoke baby safety',
    'air pollution effects on baby',
    'AQI safe for baby outdoors',
    'baby breathing in smoke',
    'indoor air quality for baby',
    'air purifier for baby room',
    'smog and baby health',
    'when is air quality too bad for baby outside',
  ],
  quickAnswer:
    'Babies and young children are more vulnerable to air pollution than adults because they breathe faster, their lungs are still developing, and they spend more time close to the ground where some pollutants concentrate. The EPA recommends keeping babies indoors when the Air Quality Index (AQI) exceeds 100 (orange level). During wildfire smoke events, keep windows closed, use air purifiers with HEPA filters, and monitor your child for coughing, wheezing, or difficulty breathing. Long-term exposure to air pollution can affect lung development.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn lungs are especially vulnerable. Keep babies indoors on poor air quality days. Use an air purifier with a HEPA filter in the nursery if you live in an area with frequent air quality concerns. Avoid incense, candles, and smoking inside the home. Even brief outdoor exposure during high-pollution events can irritate tiny airways.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue monitoring AQI before outdoor activities. At this age, babies may be more affected by pollutants because they breathe more rapidly than older children. If air quality is in the "unhealthy for sensitive groups" range (AQI 101-150), limit outdoor time. If AQI is above 150, stay indoors with windows closed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active and start crawling, indoor air quality becomes important too. Vacuum regularly, avoid harsh chemical cleaners, and ensure good ventilation when cooking. On poor air quality days, indoor play replaces outdoor time. Watch for any respiratory symptoms like coughing or wheezing.',
    },
    {
      ageRange: '12 months+',
      context:
        'Active toddlers breathe more heavily during play, increasing pollutant intake. Check AQI before outdoor play, especially during wildfire season. Face masks designed for adults and most children\'s masks are not effective or safe for toddlers. The best protection is staying indoors with clean filtered air during poor air quality events.',
    },
  ],
  whenNormal: [
    'You check AQI before spending extended time outdoors with your baby',
    'You use an air purifier in your home during poor air quality events',
    'Your baby has mild fussiness on smoky or polluted days — keeping them indoors with clean air helps',
    'You limit outdoor activities when AQI exceeds 100 for your young child',
  ],
  whenToMention: [
    'Your baby or toddler develops a persistent cough, wheezing, or nasal congestion that you think may be related to air quality',
    'You live in an area with chronically poor air quality and are concerned about long-term effects on your child\'s lung development',
    'Your child has asthma or a history of respiratory issues and you need guidance on managing air quality triggers',
  ],
  whenToActNow: [
    'Your baby or toddler is having difficulty breathing — rapid breathing, nostril flaring, chest retractions, or blue-tinged lips — regardless of air quality conditions',
    'Your child was exposed to heavy smoke or chemical fumes and develops severe coughing, vomiting, or altered consciousness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'secondhand-smoke-exposure-baby',
    'extreme-heat-baby-safety',
  ],
  sources: [
    {
      org: 'EPA',
      citation:
        'U.S. Environmental Protection Agency. Air Quality Guide for Particle Pollution.',
      url: 'https://www.epa.gov/pmcourse/patient-exposure-and-air-quality-index',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Air Pollution and Children\'s Health. Pediatrics. 2004.',
      url: 'https://publications.aap.org/pediatrics/article/114/6/1699/67502/Ambient-Air-Pollution-Health-Hazards-to-Children',
    },
  ],
};
