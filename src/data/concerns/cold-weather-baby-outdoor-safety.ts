import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'cold-weather-baby-outdoor-safety',
  title: 'Cold Weather Outdoor Safety',
  category: 'medical',
  searchTerms: [
    'how cold is too cold for baby outside',
    'baby winter outdoor safety',
    'dressing baby for cold weather',
    'frostbite signs in baby',
    'hypothermia baby symptoms',
    'newborn cold weather exposure',
    'toddler playing outside in winter',
    'how many layers should baby wear outside',
    'baby red cheeks cold weather',
  ],
  quickAnswer:
    'Babies lose heat faster than adults because of their large head-to-body ratio and limited ability to shiver or regulate body temperature. The AAP recommends dressing babies in one more layer than an adult would wear in the same conditions. Avoid prolonged outdoor exposure when wind chill is below 0°F (-18°C). Cover extremities well (hands, feet, ears, head) and watch for signs of hypothermia or frostbite. Brief outdoor time in moderately cold weather is safe and healthy with proper clothing.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are particularly poor at regulating body temperature. In cold weather, limit outdoor time to brief periods (10-15 minutes in very cold conditions). Dress in layers with a warm inner layer and a wind-proof outer layer. Cover the head with a hat, as babies lose significant heat through their head. Avoid bulky coats in car seats — use a blanket over the buckled harness instead.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue to dress warmly in layers. Monitor for signs of being too cold: fussiness, pale skin, and cool extremities. Also watch for overheating: sweating, flushed skin, and rapid breathing. A good rule is to feel the back of their neck or chest — it should be warm but not sweaty.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more active, they generate more heat but still need adequate layers. Mittens and warm socks or booties protect extremities. For stroller rides, use a weather shield and warm bunting. Remove extra layers when going indoors to prevent overheating.',
    },
    {
      ageRange: '12 months+',
      context:
        'Active toddlers playing in snow need waterproof outer layers, warm boots, mittens (attached to jacket to prevent loss), and a hat covering ears. Take breaks indoors every 20-30 minutes in very cold weather. Check for cold, white, or waxy skin on fingers, toes, nose, and ears — signs of frostbite. Hot chocolate and warm snacks help maintain body temperature during outdoor play.',
    },
  ],
  whenNormal: [
    'Your baby\'s cheeks are rosy after time outdoors in cold weather — this is normal increased blood flow, not a problem',
    'Your baby\'s hands and feet feel slightly cool — as long as their chest and back are warm, this is normal',
    'Your toddler wants to play outside in winter and is dressed appropriately in layers',
    'Your baby is briefly fussy when first exposed to cold air but settles once bundled up',
  ],
  whenToMention: [
    'Your baby\'s skin is frequently cold to the touch on their trunk or back, suggesting they may not be maintaining adequate body temperature',
    'You are unsure about safe cold-weather clothing for your baby, especially regarding car seat safety and bulky clothing',
    'Your child develops dry, cracked, or irritated skin from cold and dry winter air',
  ],
  whenToActNow: [
    'Your baby shows signs of hypothermia — shivering (in older babies), lethargy, weak cry, cold to the touch on chest and back, or blue-tinged skin — warm the baby immediately and seek medical attention',
    'Your child has signs of frostbite — white, waxy, numb, or hard skin on fingers, toes, nose, or ears — do not rub the affected area; warm gradually with body heat and seek medical care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'extreme-heat-baby-safety',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Winter Safety Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Winter-Safety.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Cold Weather Safety.',
      url: 'https://www.cdc.gov/niosh/topics/coldstress/',
    },
  ],
};
