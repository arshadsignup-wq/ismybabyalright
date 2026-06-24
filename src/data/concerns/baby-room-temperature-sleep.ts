import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-room-temperature-sleep',
  title: 'Ideal Room Temperature for Baby Sleep',
  category: 'sleep',
  searchTerms: [
    'baby room temperature sleep',
    'ideal temperature baby bedroom',
    'baby too hot sleeping',
    'baby too cold sleeping',
    'room temperature for newborn',
    'baby overheating sleep',
    'what temperature should baby room be',
    'baby sweating while sleeping',
    'baby cold hands sleeping',
    'thermostat setting baby room',
  ],
  quickAnswer:
    'The ideal room temperature for baby sleep is between 68-72F (20-22C). Overheating is a known risk factor for SIDS, so it is important to keep the room comfortably cool. Dress your baby in one layer more than you would wear, and avoid heavy blankets, hats, and excessive bundling. Feel the back of your baby\'s neck or chest to check if they are too warm or too cool.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Temperature regulation is especially important for newborns. Babies this young cannot regulate their body temperature as effectively as older children. Keep the room between 68-72F (20-22C) and dress your baby in a sleep sack or swaddle with one layer underneath. Avoid placing the crib near heating vents, radiators, or sunny windows. Signs of overheating include sweating, damp hair, flushed cheeks, heat rash, and rapid breathing. Cool hands and feet alone do not mean your baby is too cold - check the chest or back of neck instead.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Continue maintaining the same temperature range. As your baby becomes more mobile and transitions out of swaddling, a wearable blanket (sleep sack) is the safest option. Choose the TOG rating appropriate for your room temperature: 0.5 TOG for warmer rooms (75F+), 1.0 TOG for moderate rooms (69-73F), and 2.5 TOG for cooler rooms (64-68F). A room thermometer near the crib can help you monitor conditions. Fans can help circulate air and have been associated with reduced SIDS risk.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers regulate temperature better than infants, but the same room temperature guidelines apply. After 12 months, a thin blanket can be used if desired, though sleep sacks remain a good option. During summer months, a fan or air conditioning can help maintain a comfortable temperature. In winter, avoid space heaters near the crib and use a humidifier if the air is dry from heating. Toddlers may resist covers, so sleepwear with feet (footed pajamas) can help keep them warm.',
    },
  ],
  whenNormal: [
    'Your baby\'s room is between 68-72F (20-22C) and they seem comfortable and sleep well.',
    'Your baby has cool hands and feet but a warm chest and back of neck - this is normal circulation.',
    'Your baby occasionally sweats lightly during sleep in warmer months.',
  ],
  whenToMention: [
    'You are unable to maintain a comfortable room temperature and are unsure how to dress your baby safely.',
    'Your baby seems consistently too warm or too cold despite appropriate room temperature and clothing.',
    'Your baby has frequent heat rash or skin irritation that may be related to overheating during sleep.',
  ],
  whenToActNow: [
    'Your baby is limp, unresponsive, or has a very high body temperature - this could indicate heat stroke.',
    'Your baby\'s skin feels cold to the touch on the chest and torso, and they seem lethargic.',
    'Your baby has signs of hypothermia: skin turning blue or mottled, very cold body, weak cry, or shallow breathing.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-safe-sleep-position-back', 'baby-sids-risk-reduction-checklist', 'baby-swaddle-transition-age', 'baby-winter-hypothermia-prevention'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Safe Sleep: Recommendations. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Safe Sleep for Your Baby. Safe to Sleep Campaign.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Sudden Unexpected Infant Deaths.',
      url: 'https://www.cdc.gov/sids/data.htm',
    },
  ],
};
