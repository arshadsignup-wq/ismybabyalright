import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'paced-bottle-feeding-concerns',
  title: 'Paced Bottle Feeding Concerns',
  category: 'feeding',
  searchTerms: [
    'paced bottle feeding',
    'baby drinking bottle too fast',
    'baby gulping bottle',
    'baby overeating bottle',
    'baby choking on bottle',
    'baby fussy during bottle feeding',
    'paced feeding breastfed baby',
    'bottle feeding position baby',
    'baby spitting up after bottle',
    'how to pace bottle feed',
    'slow flow nipple baby',
    'baby bottle feeding problems',
  ],
  quickAnswer:
    'Paced bottle feeding is a technique that slows down the flow of milk to more closely match the natural pace of breastfeeding. It helps prevent overfeeding, reduces gas and spit-up, and supports babies who are both breast and bottle fed. If your baby seems to gulp, choke, or finish bottles extremely quickly, paced feeding can help. It involves holding the baby more upright, keeping the bottle horizontal, and pausing every few minutes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies have a strong sucking reflex and will keep swallowing even if milk flows faster than they want. This can lead to overfeeding, excessive spit-up, and gas. Use a slow-flow nipple and hold your baby at about a 45-degree angle. Keep the bottle horizontal rather than tipped up so milk does not pour into the nipple too fast. Pause every 1-2 minutes by tipping the bottle down or removing it briefly. A feeding should take about 15-20 minutes.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies grow, they develop better feeding coordination but may still benefit from paced feeding, especially if they are receiving both breast and bottle. If your baby finishes 4-6 ounce bottles in under 5 minutes, they are likely drinking too fast. Move up nipple flow sizes gradually and only when your baby shows signs of frustration with the slower flow, like pulling off, fussing, or taking much longer than 20 minutes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies can usually regulate their intake better, but paced feeding remains helpful if your baby tends to overeat and then spit up, or if you are transitioning between breast and bottle. By this age, babies start to show clearer hunger and fullness cues. Following their lead and stopping when they turn away or close their mouth is more important than finishing a set amount.',
    },
  ],
  whenNormal: [
    'Your baby takes 15-20 minutes to finish a bottle',
    'Your baby pauses during feeding and seems relaxed',
    'Some fussiness when transitioning from a fast-flow to a slower-flow nipple',
    'Occasional spit-up after feeding, especially if baby was very hungry',
    'Your baby taking different amounts at different feeds throughout the day',
  ],
  whenToMention: [
    'Your baby consistently finishes bottles in under 5 minutes despite using an appropriate nipple size',
    'Your baby frequently chokes, gags, or coughs during bottle feeds',
    'Your baby is gaining weight excessively fast and seems uncomfortable after feeds',
    'Your breastfed baby has started refusing the breast after being given a bottle',
  ],
  whenToActNow: [
    'Your baby chokes and turns blue or stops breathing during a feeding',
    'Your baby has projectile vomiting (not just spit-up) after most feeds',
    'Your baby is not gaining weight or is losing weight despite taking bottles',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['bottle-preference', 'spitting-up', 'baby-gulping-air', 'baby-choking-vs-gagging-difference'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bottle Feeding Basics. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Bottle-Feeding.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Safely Prepare Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/How-to-Safely-Prepare-Formula-with-Water.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
  ],
};
