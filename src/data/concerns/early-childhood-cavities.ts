import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'early-childhood-cavities',
  title: 'Early Childhood Cavities (ECC)',
  category: 'medical',
  searchTerms: [
    'baby cavities',
    'toddler tooth decay',
    'early childhood caries',
    'baby bottle tooth decay',
    'cavities in baby teeth',
    'toddler cavities treatment',
    'baby teeth rotting',
    'can babies get cavities',
    'holes in baby teeth',
  ],
  quickAnswer:
    'Early childhood caries (ECC) is one of the most common chronic diseases in young children, affecting about 23% of children under age 6 in the United States. ECC is caused by bacteria, primarily Streptococcus mutans, that produce acid when exposed to sugars. Baby teeth are especially vulnerable because their enamel is thinner. Early detection and treatment are critical because untreated cavities can cause pain, infection, and damage to developing permanent teeth.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Teeth have not yet erupted, but cavity-causing bacteria can be transmitted from caregivers to babies through saliva sharing (such as testing food temperature with your mouth or sharing utensils). Minimizing bacterial transmission and keeping your own oral health in good shape helps protect your baby\'s future teeth.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the first teeth emerge, they become susceptible to decay immediately. Avoid putting the baby to sleep with a bottle of milk or juice, as prolonged sugar contact is a leading cause of ECC. Begin wiping teeth with a soft cloth or using a baby toothbrush after feedings.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With more teeth present, the risk of cavities increases. Begin using a rice-grain-sized smear of fluoride toothpaste when brushing. Schedule the first dental visit by age 1. Watch for white spot lesions on the teeth near the gumline, which are the earliest visible sign of decay and can be reversed with proper care.',
    },
    {
      ageRange: '12 months+',
      context:
        'Wean from the bottle by 12-15 months to reduce cavity risk. Limit sugary snacks and juice. If cavities are found, treatment may include fluoride varnish, silver diamine fluoride, fillings, or crowns depending on severity. Untreated cavities in baby teeth can lead to painful abscesses and can affect the permanent teeth developing underneath.',
    },
  ],
  whenNormal: [
    'Your baby\'s teeth have no discoloration, spots, or rough patches',
    'Regular dental visits show no signs of decay',
    'You practice good oral hygiene including brushing with fluoride toothpaste twice daily',
    'White spot lesions were caught early and have been reversed with fluoride treatment',
  ],
  whenToMention: [
    'You notice white, chalky spots on your baby\'s teeth near the gumline',
    'Your baby or toddler has visible yellow or brown spots on their teeth',
    'Your child resists having a specific tooth or area brushed, which may indicate sensitivity from early decay',
  ],
  whenToActNow: [
    'Your child has visible holes, dark brown or black areas on their teeth, or teeth that appear to be crumbling, as these indicate advanced decay requiring prompt treatment',
    'Your child has facial swelling, fever, or severe pain near a tooth, which may indicate a dental abscess from untreated decay',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Policy on Early Childhood Caries (ECC): Classifications, Consequences, and Preventive Strategies.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/early-childhood-caries-classifications-consequences-and-preventive-strategies/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Prevent Tooth Decay in Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/How-to-Prevent-Tooth-Decay-in-Your-Baby.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Dental and Craniofacial Research. Dental Caries (Tooth Decay) in Children (Age 2 to 11).',
      url: 'https://www.nidcr.nih.gov/research/data-statistics/dental-caries/children',
    },
  ],
};
