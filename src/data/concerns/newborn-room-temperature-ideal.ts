import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-room-temperature-ideal',
  title: 'Ideal Room Temperature for Baby',
  category: 'medical',
  searchTerms: ['baby room temperature', 'ideal nursery temperature', 'newborn room too hot', 'newborn room too cold', 'what temperature for baby room', 'baby sleeping temperature', 'nursery thermostat setting', 'overheating baby room', 'cold room baby sleep', 'room temperature SIDS'],
  quickAnswer: 'The ideal room temperature for a sleeping baby is between 68-72 degrees F (20-22 degrees C). A room that is too warm increases the risk of SIDS. Dress your baby in one layer more than you would wear comfortably, and check their chest or back of neck to assess temperature rather than hands or feet.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborns cannot regulate their body temperature well. Keep the room between 68-72 degrees F (20-22 degrees C). Dress baby in a onesie plus a sleep sack or one light layer more than what you would be comfortable in. Check baby\'s temperature by feeling their chest, back, or the back of their neck: these should feel warm but not hot or sweaty. Hands and feet are normally cooler and are not reliable indicators. Avoid placing the crib near windows, heaters, or air conditioning vents. Overheating is a risk factor for SIDS.' },
    { ageRange: '1-3 months', context: 'Continue maintaining a comfortable room temperature of 68-72 degrees F. Baby\'s temperature regulation is still immature. Watch for signs of overheating: sweating, damp hair, flushed cheeks, heat rash, or rapid breathing. Also watch for signs of being too cold: fussiness, cool chest, or mottled skin.' },
    { ageRange: '3-6 months', context: 'Baby\'s temperature regulation improves but remains immature. Continue maintaining the recommended room temperature. Adjust clothing layers with the seasons. A sleep sack is a safe alternative to blankets for warmth.' },
    { ageRange: '6-12 months', context: 'Temperature regulation continues to mature. The same room temperature guidelines apply. A sleep sack remains the safest option for warmth, as loose blankets should not be used until after age 1.' },
  ],
  whenNormal: ['Baby\'s hands and feet feel cool while the chest is warm', 'Mild skin mottling when exposed to slightly cooler temperatures that resolves when warmed', 'Baby sleeps comfortably in one layer plus a sleep sack'],
  whenToMention: ['You are unsure how to dress your baby appropriately for sleep', 'Baby seems persistently too warm or too cold despite adjustments', 'Baby frequently wakes seeming uncomfortable with temperature'],
  whenToActNow: ['Baby is overheating: very hot to touch, sweating heavily, lethargic, or unresponsive', 'Baby\'s body temperature is above 100.4 degrees F (38 degrees C) rectally, which may indicate fever rather than environmental overheating', 'Baby is hypothermic: cool chest, lethargic, or not feeding well'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleep Environment Safety. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Safe to Sleep: Reduce the Risk.', url: 'https://safetosleep.nichd.nih.gov/' },
  ],
  relatedConcernSlugs: ['newborn-overdressing-overheating', 'newborn-safe-sleep-positioning', 'newborn-swaddling-safety'],
};
