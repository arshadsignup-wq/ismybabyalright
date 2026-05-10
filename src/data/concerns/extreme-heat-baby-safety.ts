import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'extreme-heat-baby-safety',
  title: 'Extreme Heat Safety for Babies',
  category: 'medical',
  searchTerms: [
    'how hot is too hot for baby outside',
    'baby overheating signs',
    'heat stroke baby symptoms',
    'keeping baby cool in hot weather',
    'baby heat rash',
    'summer heat safety baby',
    'baby dehydration hot weather',
    'hot car danger baby',
    'toddler playing outside heat wave',
  ],
  quickAnswer:
    'Babies are at higher risk of heat-related illness because they cannot regulate their body temperature as effectively as adults, they rely on caregivers to keep them hydrated, and they cannot remove their own clothing. The AAP recommends avoiding outdoor activities when the heat index exceeds 90°F (32°C) for prolonged periods. Keep babies hydrated with extra feedings, dress them in light clothing, and seek shade and air conditioning. Never leave a child unattended in a car — car interior temperatures can become lethal in minutes, even with windows cracked.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are especially vulnerable to heat because they cannot sweat effectively and rely entirely on their environment for temperature regulation. Keep room temperature comfortable (68-72°F / 20-22°C). In hot weather, dress in a single lightweight layer. Offer extra breast or bottle feedings for hydration. Do not give water to babies under 6 months.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Monitor for signs of overheating: flushed skin, rapid breathing, fussiness, and sweating (or conversely, hot but not sweating, which is more serious). Keep the baby in air-conditioned environments during extreme heat. If your home lacks AC, visit public cooling centers. Extra feedings provide needed hydration.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies over 6 months can have small amounts of water between feedings during hot weather. Use a stroller fan and sun shade for outdoor time. Avoid metal playground equipment, hot car seats, and pavement that can burn skin. Check the temperature of car seat straps and buckles before buckling in your baby.',
    },
    {
      ageRange: '12 months+',
      context:
        'Active toddlers may not want to stop playing in the heat. Watch for signs of heat exhaustion: excessive sweating, pale skin, nausea, dizziness, or fatigue. Enforce water breaks every 15-20 minutes during outdoor play in warm weather. Move activities to early morning or late afternoon during heat waves. Apply sunscreen and use shade structures.',
    },
  ],
  whenNormal: [
    'Your baby is slightly flushed after being outside in warm weather but cools down quickly in a climate-controlled environment',
    'Your baby develops a mild heat rash (small red bumps) in skin folds — keep the area cool and dry',
    'Your toddler is thirstier than usual during hot days — offer water and hydrating foods frequently',
    'You limit outdoor time during the hottest parts of the day',
  ],
  whenToMention: [
    'Your baby has persistent or widespread heat rash that does not improve with cooling measures',
    'Your baby seems excessively fussy, has reduced wet diapers, or has darker-than-usual urine in hot weather, suggesting dehydration',
    'You are concerned about maintaining safe temperatures in your home during a heat wave due to lack of air conditioning',
  ],
  whenToActNow: [
    'Your baby or toddler shows signs of heat stroke — hot dry skin (no longer sweating), confusion, lethargy, vomiting, or loss of consciousness — call 911 immediately and begin cooling the child with cool (not ice) water',
    'You discover a child has been left in a hot car — call 911 immediately, remove the child from the vehicle, and begin cooling them with cool water',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sunscreen-for-babies-under-6-months',
    'beach-safety-baby-toddler',
    'cold-weather-baby-outdoor-safety',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Warm Weather Tips to Keep Children Safe. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Sun-Safety.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Heat-Related Illness Prevention.',
      url: 'https://www.cdc.gov/extreme-heat/prevention/index.html',
    },
  ],
};
