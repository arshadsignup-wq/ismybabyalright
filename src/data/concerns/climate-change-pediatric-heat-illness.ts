import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'climate-change-pediatric-heat-illness',
  title: 'Heat Illness in Children: A Growing Concern',
  category: 'medical',
  searchTerms: [
    'baby heat illness',
    'heat stroke baby',
    'overheating baby',
    'baby too hot',
    'heat exhaustion child',
    'baby heat rash vs heat stroke',
    'keeping baby cool in heat',
    'baby dehydration hot weather',
    'infant heat safety',
    'child heat illness prevention',
    'hot weather baby safety',
  ],
  quickAnswer:
    'Children, especially infants and toddlers, are more vulnerable to heat illness than adults because they produce more heat relative to body size, sweat less efficiently, and depend on caregivers for hydration and cooling. With rising temperatures, heat-related illness in children is increasing. Prevention includes keeping babies hydrated, avoiding direct sun during peak hours, never leaving a child in a parked car, and dressing them in lightweight clothing. Heat stroke is a medical emergency requiring immediate action.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Infants are extremely vulnerable to overheating because they cannot regulate their body temperature effectively. Signs of overheating include flushed skin, rapid breathing, irritability, and lethargy. Babies under 6 months should be kept out of direct sunlight. In hot weather, offer extra breastfeeds or formula feeds to prevent dehydration. Dress them in light, loose-fitting clothing. Room temperature should ideally be 68-72 degrees F (20-22 degrees C). Never cover a car seat or stroller with a blanket, as this creates a dangerous heat trap.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile, they may be spending more time outdoors. Apply sunscreen (SPF 30+) to exposed skin, provide shade, and offer water in addition to breast milk or formula in hot weather. Watch for signs of heat exhaustion: excessive sweating followed by no sweating, pale or cool skin, nausea, and fatigue. Limit outdoor play during the hottest parts of the day (10 AM to 4 PM). Allow babies to acclimatize gradually to warmer weather over 10-14 days.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Active toddlers may not recognize or communicate that they are overheated. Ensure frequent water breaks during outdoor play, as toddlers can become dehydrated quickly. Pool and water play can help with cooling but requires constant supervision. Recognize that concrete, asphalt, and playground equipment can become dangerously hot and burn small feet and hands. If your child stops sweating, becomes confused, or has a very high body temperature (104 degrees F or above), this is heat stroke -- a medical emergency.',
    },
  ],
  whenNormal: [
    'Your baby is slightly flushed in warm weather but is feeding well, has wet diapers, and is behaving normally.',
    'Your child develops mild heat rash (tiny red bumps) in skin folds during hot weather.',
    'Your toddler wants to drink more water than usual during hot weather and remains active and alert.',
  ],
  whenToMention: [
    'Your baby seems more lethargic or irritable than usual in hot weather despite staying hydrated.',
    'Your child has recurrent heat rash that does not clear with cooling measures.',
    'You are concerned about adequate hydration during hot weather, especially if your child is refusing fluids.',
  ],
  whenToActNow: [
    'Your child has a body temperature above 104 degrees F (40 degrees C), is not sweating, has hot and dry skin, or is confused or losing consciousness (signs of heat stroke).',
    'Your child was left in or found in a hot car -- call 911 immediately and begin cooling.',
    'Your child is showing signs of severe dehydration: no tears, no wet diapers for 6+ hours, sunken fontanelle, extreme sleepiness, or inability to drink.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['persistent-fever-baby', 'oral-rehydration-baby', 'hives'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Heat-Related Illness and Young Athletes. Pediatrics, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Heat-Related-Illnesses.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Heat-Related Illness Prevention. CDC.',
      url: 'https://www.cdc.gov/extreme-heat/prevention/index.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Climate Change and Health: Children. WHO.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health',
    },
  ],
};
