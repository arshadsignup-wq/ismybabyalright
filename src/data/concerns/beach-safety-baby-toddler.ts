import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'beach-safety-baby-toddler',
  title: 'Beach Safety for Babies and Toddlers',
  category: 'medical',
  searchTerms: [
    'baby at the beach safety tips',
    'when can baby go to the beach',
    'toddler beach safety',
    'baby eating sand',
    'baby sunburn at beach',
    'ocean water safe for baby',
    'beach with infant tips',
    'toddler ocean waves safety',
    'sand in baby eyes',
  ],
  quickAnswer:
    'Beaches can be wonderful for families but present several hazards for babies and toddlers including sun exposure, heat, water dangers, sand ingestion, and jellyfish or shells. Babies under 6 months should be kept out of direct sunlight entirely. All children need shade, hydration, and constant supervision near water. Even shallow water and small waves can be dangerous for babies and toddlers. Sand-eating in small amounts is not harmful but should be discouraged.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Beach visits should be brief and focused on shade. Newborn skin is extremely sensitive — keep the baby under an umbrella or tent at all times. Avoid sunscreen on babies under 6 months; use shade and protective clothing instead. Keep the baby hydrated with extra feedings. Avoid the hottest part of the day (10 AM to 2 PM).',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue prioritizing shade and protective clothing. Brief exposure to sand and ocean breezes is fine but avoid direct sun. If any sun exposure is unavoidable, a small amount of mineral sunscreen (zinc oxide) on exposed areas is considered safe by the AAP. Stay well hydrated and watch for signs of overheating.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies can enjoy supervised time in wet sand and very shallow calm water (ankles only) while being held. Apply broad-spectrum SPF 30+ sunscreen 15-30 minutes before sun exposure and reapply every 2 hours. Babies will put sand in their mouths — a small amount is not harmful but discourage it. Bring plenty of fresh water and shaded areas.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers love the beach but need constant supervision, especially near water. Never turn your back, even in very shallow water — drowning can happen silently in inches of water. Apply sunscreen liberally and reapply after water play. Use a rash guard and sun hat. Watch for sharp shells, jellyfish, and hot sand. Rinse sand out of swimsuit regularly to prevent irritation.',
    },
  ],
  whenNormal: [
    'Your baby or toddler gets a bit of sand in their mouth — small amounts pass through the digestive system harmlessly',
    'Your child\'s skin looks slightly pink after beach exposure despite sun protection — apply aloe and increase shade next time',
    'Your toddler is cautious around waves — this is a healthy and appropriate fear response',
    'Your baby is fussy at the beach due to wind, sand, or unfamiliar environment — take breaks in a shaded, sheltered area',
  ],
  whenToMention: [
    'Your baby got a sunburn — even mild sunburn in babies under 1 year should be discussed with your pediatrician',
    'Your child swallowed a large amount of sand or saltwater and is vomiting or has diarrhea',
    'Your child was stung by a jellyfish and the area is swelling significantly, or they seem to be having a systemic reaction',
  ],
  whenToActNow: [
    'Your child was submerged in water even briefly — even if they seem fine afterward, secondary drowning can occur hours later and requires medical evaluation',
    'Your baby shows signs of heatstroke — hot dry skin, confusion, lethargy, or loss of consciousness — call 911 immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sunscreen-for-babies-under-6-months',
    'water-safety-drowning-prevention',
    'extreme-heat-baby-safety',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sun Safety: Information for Parents About Sunburn & Sunscreen. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/sun-safety/Pages/Sun-Safety.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Water Safety for Children.',
      url: 'https://www.cdc.gov/drowning/prevention/index.html',
    },
  ],
};
