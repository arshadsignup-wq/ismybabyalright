import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nursery-off-gassing-voc-safety',
  title: 'Nursery Off-Gassing and VOCs: Making Your Baby\'s Room Safe',
  category: 'medical',
  searchTerms: [
    'nursery off gassing how long',
    'new crib off gassing baby safe',
    'VOC in nursery harmful to baby',
    'new furniture smell baby room',
    'how long to air out nursery before baby',
    'crib mattress off gassing',
    'paint fumes baby room safe',
    'nursery air quality newborn',
    'is new carpet safe for baby room',
    'chemical smell baby nursery',
  ],
  quickAnswer:
    'Off-gassing is the release of volatile organic compounds (VOCs) from new furniture, paint, carpeting, mattresses, and other materials. Common VOCs include formaldehyde, benzene, and toluene, which can irritate the respiratory system and are classified as potential carcinogens at high levels by the EPA. Babies are more vulnerable to VOCs than adults because they breathe faster (30-60 breaths per minute vs. 12-20 for adults), have smaller airways, and spend more time in their nursery. The EPA recommends: finishing all painting and new flooring installation at least 2-4 weeks before baby arrives, using low-VOC or zero-VOC paints, ventilating the nursery by opening windows daily, allowing new furniture (especially cribs and mattresses) to off-gas in a well-ventilated area for at least 3-7 days before use, and choosing GREENGUARD Gold certified products when possible. Most off-gassing decreases by 80-90% within the first week, but some materials can release VOCs at lower levels for months.',
  byAge: [
    {
      ageRange: 'Before birth (3rd trimester)',
      context:
        'The ideal time to prepare the nursery is early in the third trimester, allowing maximum off-gassing time before baby arrives. Paint the room at least 2-4 weeks before the due date using zero-VOC paint. Set up new furniture (crib, dresser, changing table) and unwrap the crib mattress at least 1-2 weeks early. Open windows daily for cross-ventilation. If installing new flooring, choose low-VOC options and complete installation at least 4 weeks before the baby arrives. Avoid air fresheners and scented plug-ins, which add more VOCs to indoor air.',
    },
    {
      ageRange: '0-3 months',
      context:
        'Newborns spend 16-17 hours per day sleeping, much of it in their nursery. If you were unable to prepare the room in advance, prioritize these steps: remove the crib mattress from any plastic wrapping and air it in a ventilated area for several days, open the nursery window for at least 30 minutes daily (while maintaining safe room temperature of 68-72°F), and consider running a HEPA air purifier. Avoid placing baby\'s sleeping area near new painted walls or newly assembled pressed-wood furniture.',
    },
    {
      ageRange: '3-12 months',
      context:
        'By this age, most new-furniture off-gassing has diminished significantly. However, as babies become mobile (crawling on carpets, mouthing furniture), surface-level chemical exposure becomes more relevant. New carpets can contain formaldehyde and flame retardants — if carpet was recently installed, vacuum with a HEPA-filter vacuum regularly and keep windows open when possible. Choose solid wood furniture over pressed wood (MDF, particleboard) for future purchases, as pressed wood contains formaldehyde-based adhesives that off-gas over time.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are highly active and put everything in their mouths. Ensure any furniture, toys, or decor in their room meets CPSC safety standards. Flame retardant chemicals in foam products (mattresses, nursing pillows, play mats) are a separate concern — look for products labeled GREENGUARD Gold or CertiPUR-US certified, which limit harmful emissions. If you are moving or renovating, plan for adequate ventilation time before your toddler uses the space.',
    },
  ],
  whenNormal: [
    'A mild "new" smell from furniture that dissipates within a few days with ventilation',
    'Choosing to air out items before use — this is a smart precaution, not paranoia',
    'Using a HEPA air purifier in the nursery for added air quality assurance',
    'Not being able to afford all GREENGUARD-certified products — ventilation and airing out are effective free strategies',
  ],
  whenToMention: [
    'Your baby has persistent respiratory symptoms (coughing, wheezing, congestion) that worsen in the nursery and improve elsewhere',
    'You notice a strong chemical smell in the nursery that doesn\'t dissipate after 1-2 weeks of ventilation',
    'Your baby develops unexplained skin irritation, eye redness, or headache-like fussiness after being in a recently renovated room',
  ],
  whenToActNow: [
    'Your baby has difficulty breathing, persistent wheezing, or blue-tinged lips after exposure to paint, varnish, or strong chemical fumes — move to fresh air and seek emergency care',
    'Your baby accidentally ingests paint chips or other building materials — call Poison Control (1-800-222-1222)',
    'You suspect carbon monoxide or gas leak (odorless but can accompany renovation equipment) — evacuate and call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'air-quality-pollution-baby-health',
    'essential-oil-toxicity-baby',
    'baby-mold-exposure-symptoms',
  ],
  sources: [
    {
      org: 'EPA',
      citation:
        'U.S. Environmental Protection Agency. Volatile Organic Compounds\' Impact on Indoor Air Quality.',
      url: 'https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pediatric Environmental Health, 4th Edition. Council on Environmental Health.',
      url: 'https://publications.aap.org/aapbooks/book/522/Pediatric-Environmental-Health',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Indoor Air Pollution and Infant Health. Environmental Health Perspectives.',
      url: 'https://ehp.niehs.nih.gov/doi/full/10.1289/ehp.1104520',
    },
  ],
};
