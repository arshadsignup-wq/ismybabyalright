import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-heat-exhaustion-signs',
  title: 'Signs of Heat Exhaustion in My Baby',
  category: 'medical',
  searchTerms: [
    'baby heat exhaustion signs',
    'baby overheating symptoms',
    'baby heat stroke warning signs',
    'baby too hot outside',
    'infant heat illness',
    'baby overheated red face',
    'baby sweating excessively',
    'baby dehydrated hot weather',
    'baby heat exhaustion vs heat stroke',
    'infant overheating danger',
    'baby hot weather safety',
  ],
  quickAnswer:
    'Babies are especially vulnerable to heat-related illness because they cannot regulate body temperature as well as adults, have a higher surface-area-to-body-weight ratio, and cannot tell you when they are too hot. Signs of heat exhaustion include excessive fussiness, excessive sweating (or no sweating), flushed or red skin, rapid breathing, vomiting, and lethargy. Heat stroke is a medical emergency where the body temperature rises above 104 degrees F, and the child may become confused, stop sweating, or lose consciousness.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young infants are at the highest risk for heat-related illness because their sweat glands are immature and their ability to regulate body temperature is still developing. Never leave an infant in a parked car, even for a moment — interior temperatures can rise to dangerous levels within minutes. Dress your baby in one more layer than you would wear yourself. In hot weather, keep babies in shaded or air-conditioned environments. Signs of overheating in young infants include hot, red, or dry skin, rapid pulse, excessive sleepiness, irritability, and reduced wet diapers. Offer extra breast or bottle feedings in hot weather to prevent dehydration.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active, they generate more body heat but are still poor at temperature regulation. Avoid outdoor play during peak heat hours (10 AM to 4 PM) in hot weather. Use sunshade covers on strollers but avoid draping blankets over strollers, as this can trap heat and create a greenhouse effect. Offer frequent sips of water in addition to breast milk or formula once your baby is eating solids (after 6 months). Watch for warning signs: excessive sweating or sudden absence of sweating, lethargy, vomiting, rapid breathing, or skin that feels hot and dry.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Active toddlers playing outdoors in hot weather are at particular risk because they are often too engaged in play to notice they are overheating. Ensure they take frequent breaks in shade or air conditioning, offer water regularly, and dress them in lightweight, light-colored, loose-fitting clothing. Watch for signs of heat exhaustion: excessive thirst, fatigue, cool and clammy skin, muscle cramps, nausea, or dizziness. If untreated, heat exhaustion can progress to heat stroke — characterized by a temperature over 104 degrees F, hot and dry skin (no sweating), confusion, and loss of consciousness.',
    },
  ],
  whenNormal: [
    'Your baby is slightly flushed after being in a warm environment but cools down quickly after removing a layer of clothing or moving to a cooler space.',
    'Your baby sweats mildly in warm weather, which indicates their temperature regulation system is functioning.',
    'Your baby is slightly fussy in warm weather but settles with cooling measures, hydration, and rest.',
  ],
  whenToMention: [
    'Your baby seems more affected by heat than other children and becomes excessively fussy or sleepy in warm environments.',
    'Your baby has had a mild episode of heat-related illness and you want guidance on prevention.',
    'You are planning outdoor activities in hot weather and want advice on keeping your baby safe.',
  ],
  whenToActNow: [
    'Your baby has a rectal temperature above 104 degrees F (40 degrees C), hot and dry skin, is not sweating, or is confused and unresponsive — this is heat stroke. Call 911 immediately, move the baby to a cool area, and begin cooling with cool (not cold) water.',
    'Your baby shows signs of heat exhaustion: vomiting, extreme lethargy, rapid breathing, or pale/clammy skin — move to a cool area, remove excess clothing, offer fluids, and seek medical care immediately.',
    'Your baby was left in a hot car or enclosed hot space, even briefly — seek emergency medical care regardless of how they appear, as heat-related complications can develop rapidly.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-high-temperature-environment-risk', 'baby-heat-rash', 'persistent-fever-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Hot Weather Safety Tips for Families',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Hot-Weather-Safety.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Heat-Related Illness: Prevention',
      url: 'https://www.cdc.gov/extreme-heat/warning-signs/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Heat-Related Illness in Children',
      url: 'https://medlineplus.gov/heatillness.html',
    },
  ],
};
