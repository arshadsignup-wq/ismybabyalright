import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-temperature-regulation-immature',
  title: 'My Baby Can\'t Seem to Regulate Their Temperature',
  category: 'medical',
  searchTerms: [
    'baby temperature regulation',
    'baby can\'t regulate body temperature',
    'newborn thermoregulation',
    'baby overheating easily',
    'baby gets cold easily',
    'baby temperature fluctuating',
    'immature thermoregulation baby',
    'baby sweating hot cold',
    'newborn temperature control',
    'premature baby temperature regulation',
    'baby temperature unstable',
  ],
  quickAnswer:
    'Newborns and young infants have immature thermoregulation, meaning they cannot control their body temperature as efficiently as older children and adults. They lose heat quickly through their large head surface area and have limited ability to shiver or sweat effectively. This is normal and improves over the first few months of life. Dressing your baby in one more layer than you are comfortable in and keeping the room at 68-72°F helps maintain stable temperature.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are most vulnerable to temperature instability. They rely heavily on their environment to maintain body temperature. Premature babies are even more susceptible due to less body fat and thinner skin. Dress your baby in one more layer than you would wear, use sleep sacks instead of loose blankets, and keep the room between 68-72°F (20-22°C). Check your baby\'s temperature by feeling the back of the neck or tummy rather than hands and feet, which are normally cooler.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Temperature regulation improves as your baby gains body fat and their nervous system matures. However, they still need help maintaining comfortable body temperature. Watch for signs of overheating (sweating, flushed cheeks, rapid breathing, damp hair) and being too cold (cool torso, mottled skin, fussiness). Adjust layers as needed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, most babies regulate temperature much better, though they still benefit from appropriate layering. Babies who are mobile and crawling generate more body heat through activity. You may notice they need fewer layers during active play. Continue to avoid over-bundling during sleep as overheating is a SIDS risk factor.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers have much better thermoregulation but may resist wearing appropriate clothing. They are better at generating heat through activity but still need appropriate clothing for weather conditions. Watch for signs of overheating during active play, especially in warm weather.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By this age, temperature regulation is well developed. Most concerns about thermoregulation at this age relate to environmental exposure (too long in the cold or heat) rather than immature body systems. Teach your child to communicate when they feel too hot or cold.',
    },
  ],
  whenNormal: [
    'Your newborn\'s hands and feet feel cool while their torso is warm, which is normal circulation pattern',
    'Your baby\'s temperature fluctuates slightly with environmental changes but stays within normal range',
    'Your premature baby needs extra warmth support in the first few months',
    'Your baby sweats lightly on the head during feeding or sleep, which is a normal way to release excess heat',
  ],
  whenToMention: [
    'Your baby seems to struggle with temperature more than expected for their age',
    'Your baby frequently has temperature readings above 99°F without illness or excessive bundling',
    'Your premature baby seems to need significantly more warmth support than peers',
  ],
  whenToActNow: [
    'Your baby\'s core body temperature drops below 97°F (36.1°C) or rises above 100.4°F (38°C) without an obvious environmental cause',
    'Your baby shows signs of heat stroke (hot dry skin, rapid pulse, lethargy) or hypothermia (cold skin, weak cry, slow breathing, not feeding)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-hypothermia-signs',
    'baby-sweating-a-lot',
    'baby-cold-hands-and-feet',
    'sids-risk-factors',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Swaddling: Is it Safe? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Swaddling-Is-it-Safe.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Thermal Protection of the Newborn: A Practical Guide.',
      url: 'https://www.who.int/publications/i/item/WHO_RHT_MSM_97.2',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Neonatal Thermoregulation. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK499913/',
    },
  ],
};
