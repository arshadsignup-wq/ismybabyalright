import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-clogged-milk-duct',
  title: 'Clogged Milk Duct While Breastfeeding',
  category: 'feeding',
  searchTerms: ['clogged milk duct', 'plugged duct breastfeeding', 'breast lump breastfeeding', 'hard lump in breast nursing', 'blocked duct breastfeeding', 'clogged duct remedy', 'plugged duct won\'t clear', 'milk blister bleb', 'clogged duct vs mastitis', 'breast lump painful breastfeeding'],
  quickAnswer: 'A clogged (plugged) milk duct is a common breastfeeding problem where milk flow is blocked in part of the breast, causing a tender, firm lump. It often happens when feeds are missed, the breast is not fully drained, or there is pressure on the breast from a tight bra or carrier. Most clogged ducts clear within 24-48 hours with frequent nursing, warm compresses, and gentle massage. If a clog does not clear or is accompanied by fever, it may progress to mastitis.',
  byAge: [
    { ageRange: '0-6 weeks postpartum', context: 'Clogged ducts are common in the early weeks as milk supply is establishing. Frequent feeding on demand, ensuring a good latch, and avoiding tight bras or underwire help prevent them. To clear a clog: apply a warm compress for a few minutes before feeding, nurse with your baby\'s chin pointing toward the clog, massage firmly from behind the lump toward the nipple during feeding, and continue nursing frequently from the affected side.' },
    { ageRange: '6 weeks - 6 months', context: 'Clogs at this stage often happen when feeding patterns change - sleeping longer stretches, returning to work, or missed pump sessions. A milk blister (bleb) - a tiny white dot on the nipple - can also block flow. You can gently clear a bleb by soaking in warm water and rubbing with a washcloth. Lecithin supplements (1200mg, 3-4 times daily) may help prevent recurrent clogs by reducing milk viscosity.' },
    { ageRange: '6+ months postpartum', context: 'Clogs during later breastfeeding often relate to weaning too quickly, changes in nursing schedule, or pressure from new activities. The same treatment applies: warmth, massage, frequent nursing, and positioning the baby\'s chin toward the lump. If you get frequent clogs, review your bra fit, nursing schedule consistency, and consider lecithin supplementation.' },
  ],
  whenNormal: ['A firm, tender lump in the breast that clears after nursing or pumping', 'Mild discomfort on one side that resolves within 24-48 hours', 'A small white dot (milk blister) on the nipple that clears with warm soaking', 'Occasional clogs when schedules change or feeds are missed'],
  whenToMention: ['A clog that has not cleared after 48 hours of frequent nursing and warm compresses', 'Recurrent clogs in the same area of the breast', 'Pain that is worsening despite treatment efforts', 'A clog accompanied by a milk blister that will not clear with warm soaking'],
  whenToActNow: ['You develop a fever over 101F (38.3C) along with a breast lump (progressing to mastitis)', 'The area becomes increasingly red, hot, and painful', 'You feel a fluctuant (squishy) mass that could indicate an abscess', 'You have red streaking radiating from the lump'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['mastitis-warning-signs', 'engorgement-relief-breastfeeding', 'painful-breastfeeding', 'oversupply-symptoms'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Plugged Ducts. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Mastitis: Causes and Management.', url: 'https://www.who.int/publications/i/item/WHO-FCH-CAH-00.13' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding Challenges.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx' },
  ],
};
