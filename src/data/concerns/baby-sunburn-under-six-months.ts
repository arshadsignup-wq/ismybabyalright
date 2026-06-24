import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sunburn-under-six-months',
  title: 'Sun Exposure and Sunburn in Babies Under 6 Months',
  category: 'skin',
  searchTerms: [
    'sunburn baby under 6 months',
    'newborn sunburn',
    'baby too young for sunscreen',
    'sun protection newborn',
    'baby sun exposure risk',
    'can newborn get sunburn',
    'baby sunscreen age',
    'infant sun protection',
    'newborn direct sunlight',
    'baby under 6 months sun',
  ],
  quickAnswer:
    'Babies under 6 months should be kept out of direct sunlight because their skin is extremely thin and sensitive, making them highly susceptible to sunburn. Sunscreen is not recommended for babies under 6 months. Instead, protect your baby with shade, lightweight clothing that covers arms and legs, and a wide-brimmed hat. If your baby under 6 months gets any degree of sunburn, contact your pediatrician, as it is considered a medical concern at this age.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn skin is especially vulnerable to UV damage. Their skin has less melanin and is thinner than older babies, meaning UV radiation penetrates more deeply. Keep your baby in shade at all times when outdoors. Use a stroller canopy, umbrella, or shade structure. Dress your baby in lightweight, long-sleeved clothing and a hat with a brim. The AAP advises against sunscreen use under 6 months due to the immature skin barrier. If small areas like the hands or face will be exposed, the AAP says a minimal amount of sunscreen (SPF 30+) can be applied as a last resort if shade and clothing are not available.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue keeping your baby out of direct sunlight and using shade, clothing, and hats as primary protection. Avoid outdoor activities during peak UV hours (10 AM - 4 PM). Even on cloudy days, up to 80% of UV rays can penetrate clouds. Reflective surfaces like water, sand, and concrete increase UV exposure. If your baby gets sunburned, even a mild redness, call your pediatrician. Cool compresses can help while you wait for guidance. Signs of more severe sunburn include blistering, fever, and fussiness.',
    },
    {
      ageRange: '6-12 months',
      context:
        'After 6 months, you can use broad-spectrum, SPF 30+ sunscreen on all exposed skin. Apply 15-30 minutes before going outside and reapply every 2 hours or after water exposure. Continue using shade, sun-protective clothing, and hats as your primary defense. Sunglasses with UV protection help protect your baby\'s eyes. If your baby gets sunburned, use cool compresses, fragrance-free moisturizer, and offer extra fluids. Contact your pediatrician if the burn blisters or your baby seems unwell.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and you successfully keep them in shade and covered with appropriate clothing outdoors.',
    'Your baby over 6 months wears sunscreen and you reapply regularly.',
    'Brief incidental sun exposure (like walking to the car) that does not result in redness.',
  ],
  whenToMention: [
    'You need guidance on sun protection for an upcoming outdoor event or vacation with your young baby.',
    'Your baby under 6 months has mild pinkness after brief sun exposure.',
    'You are confused about conflicting advice about sunscreen use for babies.',
  ],
  whenToActNow: [
    'Your baby under 6 months has any visible sunburn, even if it appears mild.',
    'Your baby has sunburn with blisters, swelling, or fever at any age.',
    'Your baby shows signs of heat stroke after sun exposure: high body temperature, hot dry skin, rapid pulse, confusion, or unresponsiveness.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sunburn-treatment', 'baby-swimming-pool-safety-age', 'baby-winter-dry-skin-cracking'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Sun Safety: Information for Parents About Sunburn, Sunscreen, and Sun Exposure. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/sun-safety/Pages/Sun-Safety.aspx',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration - Should You Put Sunscreen on Infants? Not Usually.',
      url: 'https://www.fda.gov/consumers/consumer-updates/should-you-put-sunscreen-infants-not-usually',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention - Shade Planning for Sun Safety.',
      url: 'https://www.cdc.gov/skin-cancer/sun-safety/index.html',
    },
  ],
};
