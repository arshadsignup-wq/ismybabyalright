import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'altitude-sickness-baby',
  title: 'Altitude Sickness in Babies',
  category: 'medical',
  searchTerms: [
    'baby altitude sickness symptoms',
    'traveling to high altitude with baby',
    'mountain vacation with baby safe',
    'baby altitude Denver Colorado',
    'high altitude and infant health',
    'altitude sickness toddler ski trip',
    'baby sleeping at high altitude',
    'when can baby go to high altitude',
  ],
  quickAnswer:
    'Babies and toddlers can experience altitude sickness when traveling above 5,000-8,000 feet (1,500-2,500 meters). Symptoms are harder to recognize in infants because they cannot describe how they feel. Watch for unusual fussiness, poor feeding, disrupted sleep, vomiting, and fast breathing. Gradual ascent is the best prevention. Most pediatricians recommend avoiding sleeping at very high altitudes (above 8,000 feet) with infants when possible, and descending immediately if symptoms appear.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Very young babies are particularly vulnerable because their respiratory and cardiovascular systems are still immature. Avoid unnecessary travel to high altitudes with newborns. If you live at high altitude, your baby will acclimate naturally. If visiting high altitude, ascend gradually and watch for increased fussiness, poor feeding, or rapid breathing.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age can tolerate moderate altitudes (up to 5,000-6,000 feet) well with gradual ascent. Watch for changes in feeding patterns, sleep disruption, or unusual irritability. Keep the baby well hydrated with extra feedings. Avoid rapid ascent above 8,000 feet.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies can handle moderate altitude travel. Allow 1-2 days to acclimate before going higher. Increase fluid intake through extra breastfeeding or formula. Monitor closely at elevations above 6,000-8,000 feet. If your baby shows signs of distress, descend to a lower altitude.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers may show altitude sickness through vomiting, loss of appetite, excessive tiredness, or unusual crankiness. They may also have difficulty sleeping at altitude. Gradual ascent, staying well hydrated, and allowing rest periods are key. Toddlers are more communicative and may point to their head or tummy if feeling unwell.',
    },
  ],
  whenNormal: [
    'Your baby is slightly fussier than usual for the first 1-2 days at altitude but adjusts and returns to normal behavior',
    'Your baby or toddler has mildly disrupted sleep for the first night or two at altitude',
    'Your baby feeds slightly more or less than usual during altitude adjustment',
    'Your toddler seems a bit tired for the first day at high altitude',
  ],
  whenToMention: [
    'Your baby has persistent vomiting, significantly reduced feeding, or seems unusually lethargic at high altitude',
    'Your baby or toddler has noticeably fast or labored breathing at altitude that does not improve with rest',
    'Symptoms have not improved after 24-48 hours at the same altitude',
  ],
  whenToActNow: [
    'Your baby has severe breathing difficulty, blue-tinged lips or fingertips (cyanosis), extreme lethargy, or is unresponsive — descend immediately and seek emergency medical care',
    'Your baby shows signs of high-altitude pulmonary edema (HAPE) — persistent cough, rapid breathing at rest, chest congestion — this requires immediate descent and emergency treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'flying-with-baby-ear-pressure',
    'cold-weather-baby-outdoor-safety',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Section on Wilderness and Environmental Medicine. Pediatrics in Review.',
      url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Travel-Safety-Tips.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. High Altitude Travel & Altitude Illness. CDC Yellow Book.',
      url: 'https://wwwnc.cdc.gov/travel/yellowbook/2024/environmental-hazards-risks/high-altitude-travel-and-altitude-illness',
    },
  ],
};
