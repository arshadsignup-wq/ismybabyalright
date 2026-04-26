import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'weaning-off-breastfeeding',
  title: 'Weaning Off Breastfeeding',
  category: 'feeding',
  searchTerms: [
    'weaning off breastfeeding',
    'how to stop breastfeeding',
    'when to wean baby from breast',
    'weaning toddler from breastfeeding',
    'gradual weaning breastfeeding',
    'stopping breastfeeding without pain',
    'weaning and engorgement',
    'baby won\'t stop breastfeeding',
    'ready to stop nursing',
    'how to dry up breast milk',
    'emotional about stopping breastfeeding',
  ],
  quickAnswer:
    'Weaning is a personal decision with no single "right" time. The AAP recommends breastfeeding for at least the first year and the WHO recommends continuing up to two years or beyond, but ultimately, the best time to wean is when it feels right for you and your baby. Gradual weaning over several weeks is gentlest on both your body and your baby\'s emotions. Whatever your reason for weaning, you have already given your baby an incredible gift.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'If you need or choose to wean before six months, your baby will transition to infant formula. Gradual weaning is important at this stage to prevent engorgement and reduce the risk of mastitis. Drop one nursing session every few days, replacing it with a bottle of formula. Start by dropping the feed your baby seems least interested in, usually a midday feed. Express just enough milk for comfort if you become engorged, as full pumping sessions will maintain supply.',
    },
    {
      ageRange: '6-9 months',
      context:
        'At this age, your baby is starting solids, which naturally begins to replace some breast milk. You can gradually replace breastfeeding sessions with formula bottles and solid food meals. Morning and bedtime nursing sessions are often the last to go because of the strong comfort association. There is no rush to drop these if they work for both of you.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Many families begin weaning around this age as they approach the transition to cow\'s milk at 12 months. Replace breastfeeding sessions one at a time with a cup of formula or, after 12 months, whole milk. Offer extra cuddles, reading time, and comfort during the transition, as nursing may have been a significant source of emotional comfort for your baby.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Weaning a toddler can be more emotionally complex because they are old enough to ask for and expect nursing. Strategies include not offering but not refusing, shortening nursing sessions, changing routines associated with nursing, and offering substitutes like a special snack or cup of milk. Many toddlers wean gradually when gently guided. It is okay if this process takes weeks or months.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Extended breastfeeding is normal and healthy, and weaning an older toddler is a valid choice whenever you are ready. You can talk to your child about the process, set gentle limits like only nursing at bedtime, and use distraction and redirection. Many children this age can understand simple explanations like "the milk is all done now" and adjust with a bit of extra comfort and attention.',
    },
  ],
  whenNormal: [
    'You and your baby gradually reduce nursing sessions over several weeks with some tearful moments but overall acceptance',
    'You experience some breast fullness or mild discomfort as you drop feeds, which resolves within a few days',
    'Your baby temporarily increases other comfort-seeking behaviors like thumb-sucking or wanting to be held more',
    'You feel emotional about the end of breastfeeding, which is completely natural',
    'Your milk supply gradually decreases and you may still express small amounts of milk for weeks or months after weaning',
  ],
  whenToMention: [
    'You develop a painful, hard lump in your breast during weaning that does not resolve with gentle massage and warmth',
    'You are feeling significant guilt, sadness, or anxiety about weaning and would benefit from emotional support',
    'Your baby is under 12 months and refusing both formula and breast, and you are unsure how to ensure adequate nutrition',
  ],
  whenToActNow: [
    'You develop mastitis symptoms during weaning, including fever, chills, and a red, painful area on your breast',
    'Your baby is not accepting any alternative food or milk source and is showing signs of dehydration or weight loss',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Wean Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/How-to-Wean-Your-Baby.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
  ],
};
