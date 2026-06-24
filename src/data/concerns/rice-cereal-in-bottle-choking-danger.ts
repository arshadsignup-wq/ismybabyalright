import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'rice-cereal-in-bottle-choking-danger',
  title: 'Rice Cereal in Bottles: Choking Risks and Safety',
  category: 'feeding',
  searchTerms: [
    'rice cereal in bottle',
    'adding cereal to baby bottle',
    'rice cereal bottle choking',
    'cereal in bottle safe',
    'rice cereal bottle reflux',
    'putting cereal in baby bottle danger',
    'rice cereal bottle sleep longer',
    'rice in bottle SIDS risk',
    'baby cereal in formula',
    'thickening bottle with cereal',
  ],
  quickAnswer:
    'Adding rice cereal to a baby\'s bottle is not recommended by the AAP and major pediatric organizations due to choking risk, potential arsenic exposure, and lack of evidence that it helps babies sleep longer. The practice can cause babies to take in more calories than needed, contributes to overfeeding, and bypasses important developmental feeding milestones. The only exception is when a pediatrician specifically prescribes thickened feeds for severe reflux, and even then, oatmeal cereal is preferred over rice cereal due to lower arsenic content.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Babies under four months should receive only breast milk or formula. Adding cereal to a bottle at this age poses a choking risk because babies do not yet have the oral motor coordination to safely handle thickened liquids. Their extrusion reflex (tongue pushing food out) is still present, and their esophagus and swallowing coordination are not designed for anything other than liquid. The practice does not help babies sleep longer, according to research. If someone recommends this, it is outdated advice that contradicts current AAP guidelines.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Even as babies approach the age for starting solids, cereal should be offered by spoon, not in a bottle. Spoon-feeding allows babies to practice important oral motor skills including moving food to the back of the mouth and swallowing voluntarily. Adding cereal to a bottle bypasses these skills and teaches babies to consume more calories per feed than they need, potentially contributing to unhealthy weight gain. If your doctor has recommended thickened feeds for reflux, follow their specific instructions regarding which thickener to use and the ratio.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By six months, most babies are developmentally ready for solid foods offered by spoon or through baby-led weaning. There is no nutritional benefit to adding cereal to a bottle at this age. If your baby is eating solids by spoon and drinking from a bottle or breast, they are getting the appropriate textures for their developmental stage. The FDA has established action levels for arsenic in infant rice cereal, and oatmeal cereal is recommended as a lower-arsenic alternative for all uses.',
    },
  ],
  whenNormal: [
    'Feeding your baby only breast milk or formula from a bottle in the first 4-6 months',
    'Introducing cereal by spoon when your baby shows developmental readiness for solids',
    'Following your pediatrician\'s specific instructions if they prescribe thickened feeds for medically diagnosed reflux',
  ],
  whenToMention: [
    'Your baby has significant reflux and you are wondering about thickened feeds',
    'Someone has advised you to add cereal to the bottle and you want your pediatrician\'s guidance',
    'Your baby seems excessively hungry and you are considering supplementing with cereal',
    'You have concerns about arsenic content in rice-based infant foods',
  ],
  whenToActNow: [
    'Your baby is choking, gagging, or having difficulty breathing during or after a feeding',
    'Your baby is showing signs of aspiration: persistent cough during feeds, wet or gurgly voice after feeding, or recurrent respiratory infections',
    'Your baby is consistently vomiting forcefully after feeds, which could indicate pyloric stenosis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-choking-on-food',
    'baby-rice-cereal-arsenic',
    'seed-oils-baby-food-concern',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'FDA',
      citation:
        'US Food and Drug Administration. Arsenic in Rice and Rice Products. FDA, 2024.',
      url: 'https://www.fda.gov/food/metals-and-your-food/arsenic-in-rice-and-rice-products',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cereal in a Bottle: Solid Food Shortcuts to Avoid. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Cereal-in-a-Bottle-Solid-Food-Shortcuts-to-Avoid.aspx',
    },
  ],
};
