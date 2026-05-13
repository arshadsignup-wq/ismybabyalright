import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'heat-rash-prickly-heat',
  title: 'Heat Rash (Prickly Heat) in Babies',
  category: 'skin',
  searchTerms: [
    'heat rash baby',
    'prickly heat baby',
    'miliaria baby',
    'baby rash hot weather',
    'tiny red bumps baby skin',
    'baby overheating rash',
    'heat rash on baby face',
    'heat rash on baby neck',
    'sweat rash baby',
  ],
  quickAnswer:
    'Heat rash, also called prickly heat or miliaria, occurs when sweat glands become blocked and sweat gets trapped under the skin. It appears as tiny red or pink bumps, often in skin folds and areas covered by clothing. Heat rash is very common in babies because their sweat glands are still maturing, and it typically clears up on its own once the baby is cooled down.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are especially prone to heat rash because their sweat glands are not fully developed. The rash often appears on the neck, face, chest, and diaper area. It can also occur in cooler weather if a baby is overdressed or swaddled too warmly. The general rule is to dress your baby in one layer more than you are comfortable in, but watch for signs of overheating like sweating, flushed skin, or fussiness.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Heat rash commonly appears in skin folds such as the neck creases, behind the ears, in the elbow creases, and in the groin area where moisture accumulates. Keeping these areas dry and exposed to air can help. Avoid heavy creams or lotions on affected areas, as these can further block sweat glands. A cool bath without soap and lightweight, breathable clothing are the best treatments.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active, they generate more body heat and are more likely to develop heat rash during warm weather or active play. The rash may appear on the back, chest, and areas under a car seat or carrier where airflow is restricted. Remove your baby from the heat source, cool the skin, and the rash should fade within hours to a day or two.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Active toddlers running and playing in warm weather may develop heat rash on the back, chest, and in skin folds. While the condition is less common as sweat glands mature, it can still occur when toddlers are overdressed or in hot, humid environments. Continue to dress your toddler in lightweight, breathable fabrics and ensure they have access to shade and cool water.',
    },
  ],
  whenNormal: [
    'Tiny red or pink bumps in skin folds, on the neck, chest, or areas covered by clothing that appear in warm conditions',
    'The rash fades and resolves within hours to a couple of days after cooling the baby down',
    'Your baby does not seem bothered by the rash or is only mildly fussy',
    'The bumps are small and uniform without any blisters, pus, or spreading redness',
  ],
  whenToMention: [
    'The rash does not improve after 2-3 days of cooling measures and keeping the area dry',
    'Your baby seems uncomfortable or is scratching at the rash persistently',
    'You are having difficulty distinguishing heat rash from eczema, a viral rash, or another skin condition',
    'The rash recurs frequently despite efforts to keep your baby cool and appropriately dressed',
  ],
  whenToActNow: [
    'The bumps develop pus, the surrounding skin becomes increasingly red and warm, or your baby develops a fever, which could indicate a secondary skin infection',
    'Your baby shows signs of heat exhaustion or heatstroke such as very hot skin, lethargy, vomiting, or decreased responsiveness -- seek emergency care immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Heat Rash. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Heat-Rash.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Miliaria. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537176/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dressing Baby for the Weather. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Dressing-Your-Child-for-the-Weather.aspx',
    },
  ],
};
