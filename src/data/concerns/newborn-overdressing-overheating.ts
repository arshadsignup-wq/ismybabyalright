import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-overdressing-overheating',
  title: 'Overdressing and Overheating Baby',
  category: 'medical',
  searchTerms: ['baby overdressed too hot', 'newborn overheating signs', 'baby sweating during sleep', 'overdressing baby SIDS', 'how many layers baby', 'baby too warm signs', 'newborn heat rash overdressing', 'dressing baby for sleep', 'baby flushed cheeks hot', 'too many blankets baby'],
  quickAnswer: 'Overdressing and overheating are common concerns and a risk factor for SIDS. Dress your baby in one layer more than you would wear comfortably. Signs of overheating include sweating, damp hair, flushed cheeks, heat rash, and rapid breathing. Check your baby\'s chest or back of neck to gauge temperature.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborns cannot regulate their temperature efficiently. It is natural to want to keep your baby warm, but overdressing is more common than underdressing. A good rule of thumb is one layer more than what you would be comfortable wearing. For sleep, a onesie plus a light sleep sack is usually sufficient in a room at 68-72 degrees F. Signs of overheating: sweating, damp hair, flushed or red cheeks, heat rash (small red bumps), rapid breathing, and restlessness. Feel baby\'s chest or the back of the neck to check; these should be warm but not hot or sweaty. Hands and feet being cool is normal and not a sign of being cold.' },
    { ageRange: '1-3 months', context: 'Continue dressing baby appropriately for the room temperature. Avoid hats indoors, as the head is an important area for heat release. In warm weather, a single layer may be sufficient. In cold weather, layering is better than one thick garment, as you can adjust easily.' },
    { ageRange: '3-6 months', context: 'As baby becomes more active, they generate more body heat. You may need fewer layers than before. Continue monitoring for signs of overheating, especially during sleep. Remove extra layers when bringing baby indoors from cold weather.' },
    { ageRange: '6-12 months', context: 'Baby is more active and generates more heat through movement. Adjust clothing for activity level and environment. A sleep sack remains a safe option for nighttime warmth without loose blankets.' },
  ],
  whenNormal: ['Baby\'s hands and feet feel cool while the body is warm', 'Slight flushing of cheeks in a warm environment that resolves with a layer removed', 'Baby seems comfortable and sleeps well with appropriate layering'],
  whenToMention: ['You are unsure how to dress your baby for different weather conditions', 'Baby frequently seems too hot or develops heat rash', 'Baby sweats heavily during feeds or sleep despite reasonable clothing'],
  whenToActNow: ['Baby has a rectal temperature above 100.4 degrees F (38 degrees C) in the first 3 months: this could be fever and not just overheating', 'Baby is lethargic, difficult to wake, or not feeding due to overheating', 'Baby has signs of heat exhaustion: very hot skin, rapid breathing, lethargy'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Dressing Your Baby for Sleep. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. SIDS Risk Reduction: Overheating.', url: 'https://safetosleep.nichd.nih.gov/' },
  ],
  relatedConcernSlugs: ['newborn-room-temperature-ideal', 'newborn-safe-sleep-positioning', 'newborn-swaddling-safety'],
};
