import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-dehydration-hot-weather',
  title: 'Preventing Dehydration in Babies During Hot Weather',
  category: 'medical',
  searchTerms: [
    'baby dehydration signs',
    'baby overheating summer',
    'dehydration hot weather baby',
    'baby not enough wet diapers',
    'baby needs water hot day',
    'infant dehydration symptoms',
    'baby sunken fontanelle dehydration',
    'how to keep baby hydrated summer',
    'baby heat stroke signs',
    'water for baby under 6 months heat',
  ],
  quickAnswer:
    'Babies are more vulnerable to dehydration and heat-related illness because they have a higher metabolic rate and less efficient temperature regulation. For babies under 6 months, extra breast milk or formula feeds (not plain water) are the best way to maintain hydration in hot weather. Signs of dehydration include fewer than 4 wet diapers in 24 hours, dry mouth, no tears when crying, sunken fontanelle, and lethargy. Always keep babies out of direct sunlight and never leave them in a parked car.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under 6 months should not be given plain water, as it can cause dangerous electrolyte imbalances. In hot weather, offer more frequent breast or formula feeds to maintain hydration. Signs of adequate hydration include 6+ wet diapers per day and clear to pale yellow urine. Keep your baby in shade and air-conditioned spaces when possible. Dress them in light, breathable clothing. The AAP recommends avoiding direct sun exposure for babies under 6 months entirely.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once your baby is eating solids (around 6 months), you can offer small sips of water between feeds, especially in hot weather. Continue offering frequent breast milk or formula feeds as the primary hydration source. Water-rich foods like pureed fruit can also help with hydration. Watch for signs of overheating: flushed skin, rapid breathing, irritability, and excessive sweating or absence of sweating (which can indicate heat stroke). Apply baby-safe sunscreen (SPF 30+) if sun exposure is unavoidable.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are active and may not recognize or communicate thirst effectively. Offer water frequently throughout the day during hot weather, especially during outdoor play. Good hydration targets include about 4 cups (32 oz) of water and milk combined per day, with more in hot weather. Watch for early dehydration signs: dark urine, dry lips, irritability, and decreased activity. Schedule outdoor play for cooler morning and evening hours. Always provide shade and frequent water breaks.',
    },
  ],
  whenNormal: [
    'Your baby is producing 6 or more wet diapers per day with clear to pale yellow urine.',
    'Your baby is a bit fussier than usual in hot weather but calms with extra feeds and cooling measures.',
    'Your baby\'s skin returns to normal quickly when you gently pinch it (good skin turgor).',
  ],
  whenToMention: [
    'Your baby is producing fewer wet diapers than usual despite offering extra feeds.',
    'Your baby seems excessively thirsty or is not feeding well in the heat.',
    'Your baby has had diarrhea or vomiting in hot weather and you are concerned about fluid balance.',
  ],
  whenToActNow: [
    'Your baby has fewer than 4 wet diapers in 24 hours, has a sunken fontanelle, or has no tears when crying.',
    'Your baby is extremely lethargic, difficult to wake, or has dry, cool, mottled skin.',
    'Your baby has signs of heat stroke - very high body temperature (over 103 degrees F), hot red skin with no sweating, confusion, or loss of consciousness. Call 911 immediately.',
    'You have accidentally left a baby in a car in warm weather, even briefly.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-body-temperature-regulation',
    'baby-fever-when-to-go-to-er',
    'baby-diarrhea-when-to-worry',
    'oral-rehydration-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Signs of Dehydration in Infants and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/dehydration.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Heat-Related Illness Prevention.',
      url: 'https://www.cdc.gov/heat-health/prevention/index.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. The Treatment of Diarrhea: A Manual for Physicians and Senior Health Workers, 2005.',
      url: 'https://www.who.int/publications/i/item/9241593180',
    },
  ],
};
