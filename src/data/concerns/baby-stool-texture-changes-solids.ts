import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-stool-texture-changes-solids',
  title: 'Poop Texture Changes with Solid Foods',
  category: 'digestive',
  searchTerms: [
    'baby poop change starting solids',
    'baby poop texture change solids',
    'baby stool different after food',
    'baby poop consistency change food',
    'baby poop harder solids',
    'baby poop thicker after food',
    'baby poop chunky solids',
    'baby undigested food in poop solids',
    'baby stool change complementary foods',
    'baby poop smellier with solids',
  ],
  quickAnswer:
    'When babies start eating solid foods, their poop changes dramatically in color, consistency, smell, and frequency. Stools become thicker, smellier, and more varied in color based on what was eaten. Seeing undigested food pieces (especially corn, peas, raisins, and skins) is completely normal because baby digestive systems are still maturing.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Solids have not been introduced, so stool texture reflects the liquid diet. Breastfed stools are typically soft, seedy, and yellow. Formula-fed stools are thicker and tan-brown.',
    },
    {
      ageRange: '3-6 months',
      context:
        'When first solids are introduced, expect noticeable changes. Stools become thicker, darker, and smellier. The color will reflect the food eaten: orange from carrots, green from peas. These changes are normal and expected.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As the variety of solid foods expands, stool continues to change. Undigested food pieces are completely normal, especially with foods that have skins or tough fibers. Your baby\'s digestive enzymes are still developing. Stools should be soft and easy to pass; hard, pellet-like stools suggest more fiber and water are needed.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler stools on a full diet are more formed and adult-like. Food pieces may still appear in stool, especially corn, blueberry skins, and tomato skins. This is normal even in older children and adults. The stool should be soft, formed, and painless to pass.',
    },
  ],
  whenNormal: [
    'Stool becoming thicker, smellier, and more colorful when starting solids',
    'Visible pieces of undigested food in the stool',
    'Color changes reflecting the food recently eaten',
  ],
  whenToMention: [
    'Stools become very hard or painful after starting solids',
    'Persistent diarrhea with a specific food',
    'Mucus or blood in stool after introducing a new food',
  ],
  whenToActNow: [
    'Significant blood in stool when introducing a new food suggesting an allergic reaction',
    'White or very pale stool at any age',
    'Severe constipation or diarrhea causing dehydration after dietary changes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby Stool Changes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Poops-Many-Colors.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Your Digestive System.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works',
    },
  ],
  relatedConcernSlugs: ['undigested-food-in-poop', 'baby-poop-color-changes-with-solids', 'baby-stool-color-guide', 'baby-constipation-after-starting-solids'],
};
