import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'engorgement-relief-breastfeeding',
  title: 'Breast Engorgement Pain and Relief While Breastfeeding',
  category: 'feeding',
  searchTerms: ['breast engorgement', 'engorged breasts breastfeeding', 'breast engorgement relief', 'hard painful breasts breastfeeding', 'breast engorgement remedies', 'engorgement vs mastitis', 'breast engorgement newborn', 'engorged breast baby can\'t latch', 'breast too full for baby to latch', 'breast engorgement first week'],
  quickAnswer: 'Breast engorgement is swelling and hardness of the breasts that happens when milk production increases faster than milk removal. It is most common in the first week after birth when your milk "comes in" and can make breasts feel hard, hot, and painful. Engorgement is temporary and manageable. The key is to remove milk frequently through nursing or pumping. Cold compresses between feeds, gentle massage, and anti-inflammatory medication can help with discomfort.',
  byAge: [
    { ageRange: '0-1 week postpartum', context: 'When your milk transitions from colostrum to mature milk around days 3-5, your breasts may become very full, hard, and uncomfortable. This is the most common time for engorgement. Feed your baby frequently (8-12 times in 24 hours) to help regulate supply. If your baby has difficulty latching onto a very firm breast, hand express or pump just enough to soften the areola before latching. Reverse pressure softening (pressing around the areola with your fingertips for 1-2 minutes) can help.' },
    { ageRange: '1-6 weeks postpartum', context: 'Engorgement should improve within the first 1-2 weeks as your milk supply regulates to match your baby\'s demand. If you continue to feel very engorged, you may have oversupply. Avoid excessive pumping, which signals the body to make more milk. If one breast is significantly more engorged than the other, ensure your baby feeds from both sides. Cold cabbage leaves placed inside the bra between feeds are a traditional remedy that many mothers find soothing.' },
    { ageRange: '6+ weeks postpartum', context: 'Later engorgement episodes usually happen when feeds are missed or delayed - when you return to work, your baby sleeps a longer stretch, or during weaning. Gradual changes in feeding schedule help prevent engorgement. If you need to skip a feed, pump or hand express just enough for comfort without fully emptying the breast. Severe engorgement that is not relieved by feeding or pumping could progress to a clogged duct or mastitis.' },
  ],
  whenNormal: ['Breasts becoming firm, warm, and full around days 3-5 after birth', 'Mild discomfort that improves after feeding or pumping', 'One breast feeling more engorged than the other', 'Engorgement improving within 24-48 hours with frequent feeding'],
  whenToMention: ['Engorgement is so severe that your baby cannot latch', 'You are unable to express milk despite very full breasts', 'Engorgement is not improving after 48 hours of frequent feeding', 'You are developing recurrent engorgement and need help adjusting your feeding schedule'],
  whenToActNow: ['You develop a red, warm, painful area on the breast along with fever and flu-like symptoms (possible mastitis)', 'You have a hard, very tender lump that does not resolve with feeding and massage (could be an abscess)', 'You are in severe pain that is preventing you from feeding or caring for your baby'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['mastitis-warning-signs', 'baby-clogged-milk-duct', 'oversupply-symptoms', 'painful-breastfeeding'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breast Engorgement. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Breast-Engorgement.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Breastfeeding.', url: 'https://www.who.int/health-topics/breastfeeding' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding Support. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
  ],
};
