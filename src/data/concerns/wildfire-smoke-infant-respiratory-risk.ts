import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'wildfire-smoke-infant-respiratory-risk',
  title: 'Wildfire Smoke and My Baby\'s Respiratory Health',
  category: 'medical',
  searchTerms: [
    'wildfire smoke baby',
    'wildfire smoke infant risk',
    'air quality baby health',
    'smoke exposure newborn',
    'baby breathing smoke outside',
    'AQI safe for baby',
    'wildfire smoke symptoms baby',
    'protecting baby from smoke',
    'poor air quality infant',
    'baby mask wildfire smoke',
  ],
  quickAnswer:
    'Infants and young children are especially vulnerable to wildfire smoke because they breathe more rapidly than adults, their lungs and immune systems are still developing, and they cannot communicate symptoms. The fine particles in smoke (PM2.5) can penetrate deep into the lungs and even enter the bloodstream. When the Air Quality Index (AQI) is above 100 (unhealthy for sensitive groups), keep babies indoors with windows closed. Standard masks do not fit infants and should not be used on children under 2.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Newborns and young infants are at the highest risk from wildfire smoke exposure. Their airways are smaller, they breathe faster (30-60 breaths per minute), and their lungs are still developing rapidly. During smoke events, stay indoors with windows and doors closed. Use a portable HEPA air purifier in the room where your baby sleeps. If your home does not have adequate air filtration, consider going to a clean air shelter (check local resources). Avoid using candles, gas stoves, or anything that adds to indoor air pollution. If you must go outside briefly, limit exposure time as much as possible.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in this age range are developing more robust immune systems but are still highly vulnerable to particulate matter. Monitor the AQI using apps or websites like AirNow.gov. When AQI is above 100, limit outdoor time. When AQI is above 150 (unhealthy), keep your baby indoors. When AQI is above 200 (very unhealthy), take maximum precautions including running a HEPA purifier continuously and sealing any drafts. Watch for symptoms of smoke irritation: increased coughing, wheezing, runny nose, eye irritation, or fussiness that may indicate respiratory discomfort.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are often harder to keep indoors during prolonged smoke events, but outdoor play should be restricted when air quality is poor. N95 masks do not fit toddlers properly and are not recommended for children under 2 (and are difficult to keep on older toddlers). Focus on indoor air quality: avoid vacuuming during smoke events (it stirs up particles), run a HEPA purifier, keep windows and doors closed, and use the recirculate setting on your car\'s air system when driving. After smoke events clear, children with asthma or other respiratory conditions may have flare-ups for days to weeks.',
    },
  ],
  whenNormal: [
    'Your baby has mild eye irritation or a slight runny nose during a smoke event that resolves when air quality improves',
    'Your baby is slightly fussier than usual during poor air quality days',
    'Your baby coughs occasionally but is eating, drinking, and breathing normally',
  ],
  whenToMention: [
    'Your baby has a persistent cough that developed during a smoke event and is not improving',
    'Your baby has a history of asthma, reactive airway disease, or chronic lung conditions and has been exposed to smoke',
    'You live in an area with prolonged smoke exposure and are concerned about your baby\'s cumulative exposure',
  ],
  whenToActNow: [
    'Your baby is having difficulty breathing: fast breathing, nasal flaring, rib retractions, grunting, or wheezing — seek medical care immediately',
    'Your baby\'s skin or lips appear blue or gray — call 911',
    'Your baby is excessively lethargic, refuses to eat or drink, or is difficult to wake during a smoke event',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'wheezing',
    'baby-breathing-fast',
    'rsv-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Protecting Children from Wildfire Smoke. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Protecting-Children-from-Wildfire-Smoke-and-Ash.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Protect Yourself from Wildfire Smoke.',
      url: 'https://www.cdc.gov/air-quality/wildfire-smoke/default.htm',
    },
    {
      org: 'EPA',
      citation:
        'U.S. Environmental Protection Agency. Wildfire Smoke and Children\'s Health.',
      url: 'https://www.epa.gov/wildfire-smoke-course/wildfire-smoke-and-children',
    },
  ],
};
