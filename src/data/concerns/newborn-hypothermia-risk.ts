import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'newborn-hypothermia-risk',
  title: 'Newborn Hypothermia Risk',
  category: 'medical',
  searchTerms: [
    'newborn hypothermia',
    'baby cold to touch',
    'newborn temperature low',
    'baby body temperature too low',
    'cold baby signs',
    'newborn not keeping warm',
    'baby temperature below normal',
    'neonatal hypothermia',
    'preemie cold stress',
  ],
  quickAnswer:
    'Newborns, especially premature and low birth weight babies, are at higher risk for hypothermia (low body temperature) because of their large surface area-to-weight ratio, limited fat stores, and immature temperature regulation. A normal newborn temperature is 36.5-37.5 degrees Celsius (97.7-99.5 degrees Fahrenheit). Temperatures below 36.5 degrees Celsius require intervention, and temperatures below 36.0 degrees Celsius (96.8 degrees Fahrenheit) are considered moderate hypothermia requiring urgent warming.',
  byAge: [
    {
      ageRange: '0-24 hours',
      context:
        'The first hours after birth are a critical period for temperature regulation. Babies lose heat rapidly through evaporation (wet skin), conduction (contact with cold surfaces), convection (cool air), and radiation (to cold nearby objects). Immediate skin-to-skin contact with the mother, drying the baby thoroughly, placing a hat, and covering with warm blankets are essential. The delivery room should be warm (at least 25 degrees Celsius or 77 degrees Fahrenheit). Premature babies may need a radiant warmer or incubator. Hypothermia at birth is associated with increased morbidity and can worsen respiratory distress, hypoglycemia, and acidosis.',
    },
    {
      ageRange: '1-3 days',
      context:
        'During the hospital stay, nurses will monitor the baby\'s temperature regularly (typically every 4-8 hours, more frequently for premature or at-risk babies). Skin-to-skin contact (kangaroo care) is one of the most effective ways to maintain newborn temperature. Dress the baby in layers and use a hat. The room should be warm but not overheated. If your baby\'s temperature drops, the medical team will use skin-to-skin contact, warm blankets, or an incubator to rewarm gradually. Rapid rewarming should be avoided as it can cause complications.',
    },
    {
      ageRange: '3-7 days',
      context:
        'After discharge, maintaining your baby\'s temperature at home is important. Keep the room temperature comfortable (68-72 degrees Fahrenheit or 20-22 degrees Celsius). Dress the baby in one more layer than you would wear. Avoid overdressing, as overheating carries its own risks (including SIDS). Check the baby\'s temperature by feeling the back of the neck or chest rather than the hands or feet (which are normally cooler in newborns). Use a rectal thermometer for the most accurate reading if you are concerned. Bathing should be brief, and the baby should be dried and dressed quickly.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'By this age, full-term healthy babies are generally better at regulating their temperature, though they still need appropriate clothing and room temperature. Premature babies or those with low birth weight may continue to have temperature instability for longer. Signs of hypothermia include cold skin, lethargy, poor feeding, weak cry, and in severe cases, a reddish or mottled skin color. If you suspect your baby is hypothermic, hold them skin-to-skin, cover with blankets, and check their temperature. If it does not normalize with warming efforts, seek medical attention.',
    },
  ],
  whenNormal: [
    'Your baby\'s temperature is consistently between 36.5-37.5 degrees Celsius (97.7-99.5 degrees Fahrenheit)',
    'The baby\'s hands and feet feel slightly cooler than the body but the chest and back are warm',
    'Your baby is alert, feeding well, and active despite cool extremities',
    'Your baby responds to being dressed in an extra layer and the temperature normalizes quickly',
  ],
  whenToMention: [
    'Your baby\'s temperature occasionally drops slightly below 36.5 degrees Celsius but recovers with skin-to-skin contact or an extra layer',
    'You are unsure about the right room temperature or how to dress your newborn appropriately',
    'Your premature or low birth weight baby seems to have ongoing difficulty maintaining temperature',
  ],
  whenToActNow: [
    'Your baby\'s rectal temperature is below 36.0 degrees Celsius (96.8 degrees Fahrenheit) and does not improve with warming measures, as moderate to severe hypothermia can cause serious complications including respiratory distress, low blood sugar, and organ dysfunction',
    'Your baby is cold, lethargic, not feeding, has a weak or absent cry, or has mottled or bluish skin, as these are signs of significant hypothermia requiring emergency medical care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'WHO',
      citation:
        'World Health Organization. Thermal Protection of the Newborn: A Practical Guide. WHO/RHT/MSM/97.2.',
      url: 'https://www.who.int/publications/i/item/WHO-RHT-MSM-97.2',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Swaddling: Is it Safe? American Academy of Pediatrics.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Swaddling-Is-it-Safe.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Lunze K, Bloom DE, Jamison DT, Hamer DH. The global burden of neonatal hypothermia: systematic review of a major challenge for newborn survival. BMC Med. 2013;11:24.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23369256/',
    },
  ],
};
