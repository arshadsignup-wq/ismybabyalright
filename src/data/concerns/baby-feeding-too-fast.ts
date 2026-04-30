import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-feeding-too-fast',
  title: 'Baby Feeding Too Fast or Gulping',
  category: 'feeding',
  searchTerms: ['baby feeding too fast', 'baby gulping milk', 'baby chugging bottle', 'baby eating too quickly', 'baby drinking too fast', 'baby choking on milk', 'baby gulping and gagging', 'fast letdown breastfeeding', 'baby overfeeding bottle', 'paced bottle feeding'],
  quickAnswer: 'Babies who feed too fast or gulp their milk may swallow excess air, leading to gas, fussiness, spitting up, and discomfort. Common causes include a bottle nipple with too fast a flow, an overactive letdown in breastfeeding, or the baby being very hungry. Paced bottle feeding (holding the bottle more horizontally and allowing the baby to control the pace) helps slow bottle feedings. For breastfeeding, if your letdown is strong, try expressing a little milk before latching or nursing in a reclined position so gravity helps slow the flow.',
  byAge: [
    { ageRange: '0-12 months', context: 'Young babies may gulp, choke, or sputter during feedings if the milk flow is too fast. For bottle-fed babies, ensure you are using the correct nipple size (most newborns need a slow-flow nipple). Practice paced bottle feeding: hold the baby upright, keep the bottle nearly horizontal, and allow pauses every few sucks. For breastfed babies, an overactive letdown can cause gulping - try laid-back breastfeeding positions and express some milk before latching. If your baby consistently finishes bottles in under 10 minutes, the nipple flow may be too fast.' },
    { ageRange: '1-3 years', context: 'Toddlers who eat or drink too quickly may choke, gag, or vomit. This is often a behavioral pattern - they are eager to get back to playing. Encourage your toddler to sit at the table (not eating while walking or playing), offer smaller portions and refill as needed, model slow eating, and offer water between bites. If your toddler consistently eats too fast and chokes or vomits frequently during meals, discuss it with your pediatrician to rule out oral motor concerns.' },
  ],
  whenNormal: ['A newborn gulping at the start of a breastfeed when the letdown occurs (usually settles after the first minute)', 'Occasional choking during a bottle feed when the nipple flow is appropriate', 'A hungry baby eating eagerly and then slowing down'],
  whenToMention: ['Your baby consistently chokes, gags, or coughs during most feedings', 'Your baby has excessive gas, spitting up, or discomfort that you suspect is from feeding too fast', 'You are struggling to slow down bottle feedings', 'Your breastfed baby is struggling with a fast letdown'],
  whenToActNow: ['Your baby turns blue, stops breathing, or goes limp during a feeding', 'Frequent choking during feeds combined with poor weight gain', 'Your baby appears to have difficulty coordinating sucking, swallowing, and breathing'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['spitting-up', 'gassy-baby', 'baby-choking-on-liquids', 'paced-bottle-feeding-concerns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bottle Feeding Basics. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Bottle-Feeding-How-Its-Done.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Amount and Schedule of Formula Feedings. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Amount-and-Schedule-of-Formula-Feedings.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Infant Feeding Practices.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
