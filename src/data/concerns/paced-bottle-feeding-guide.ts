import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'paced-bottle-feeding-guide',
  title: 'What Is Paced Bottle Feeding and Should I Be Doing It?',
  category: 'feeding',
  searchTerms: [
    'paced bottle feeding',
    'how to pace bottle feed',
    'paced feeding breastfed baby',
    'slow bottle feeding technique',
    'baby eating too fast from bottle',
    'overfeeding bottle baby',
    'baby gulping bottle',
    'paced feeding position',
    'bottle feeding like breastfeeding',
    'responsive bottle feeding',
  ],
  quickAnswer:
    'Paced bottle feeding (also called responsive bottle feeding) is a technique that slows down the flow of milk from a bottle to more closely mimic the pace of breastfeeding. The baby is held upright, the bottle is held horizontally, and frequent pauses are built in to allow the baby to regulate their intake. This approach reduces overfeeding, decreases gas and spit-up, supports the breastfeeding relationship for combo-fed babies, and helps all babies develop healthy hunger-fullness cues. Paced feeding is recommended by most lactation professionals for all bottle-fed babies.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the early months, paced feeding helps prevent overfeeding, which is common with bottles because gravity-assisted flow can cause babies to drink more than they need. Hold your baby at about 45 degrees (not lying flat), keep the bottle horizontal so milk just fills the nipple, and let the baby draw the milk in with their own effort. Every few minutes (or when baby pauses), tip the bottle down or remove it briefly to give the baby a rest. A feeding should take 15-20 minutes, similar to a breastfeed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby gets more efficient at bottle feeding, the temptation to let them chug fast increases. Continue pacing feeds. Watch for hunger and fullness cues: turning away, slowing down, or releasing the nipple means the baby is done — do not encourage them to finish the bottle. Use slow-flow nipples even as the baby gets older (there is no need to "upgrade" nipple speed unless feeding takes excessively long and baby is frustrated).',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solid foods are introduced, bottle volumes typically decrease naturally. Continue paced feeding for any bottle feeds. As your baby approaches 12 months, begin transitioning to cups. The skills learned through paced feeding — eating to satisfaction rather than emptying a container — support healthy eating habits as your child transitions to table foods.',
    },
  ],
  whenNormal: [
    'Your baby takes 15-20 minutes to finish a bottle with paced feeding and seems content after',
    'Your baby sometimes does not finish a bottle — this means they are responding to fullness cues, which is healthy',
    'Your baby pauses during feeding and resumes when ready',
  ],
  whenToMention: [
    'Your baby chokes, gags, or gulps excessively during bottle feeding even with paced technique and slow-flow nipples',
    'Your baby is excessively spitting up or seems uncomfortable after feeds despite paced feeding',
    'Your baby seems unable to coordinate sucking, swallowing, and breathing during bottle feeding',
    'Your baby is consistently refusing the bottle or screaming during feeds',
  ],
  whenToActNow: [
    'Your baby turns blue or stops breathing during a feeding — call 911',
    'Your baby chokes during feeding and cannot clear it on their own — begin infant choking first aid',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'nipple-confusion-vs-flow-preference',
    'high-lipase-breast-milk',
    'silent-reflux-vs-colic',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Bottle-Feed Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Practical-Bottle-Feeding-Tips.aspx',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Paced Bottle-Feeding.',
      url: 'https://llli.org/breastfeeding-info/paced-bottle-feeding/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Responsive Feeding and Infant Appetite Regulation. Nutrients, 2021.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/33562100/',
    },
  ],
};
