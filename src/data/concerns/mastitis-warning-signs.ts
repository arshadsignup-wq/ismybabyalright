import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'mastitis-warning-signs',
  title: 'Mastitis Warning Signs While Breastfeeding',
  category: 'feeding',
  searchTerms: [
    'mastitis breastfeeding',
    'breast infection breastfeeding',
    'red hot breast breastfeeding',
    'mastitis symptoms nursing',
    'breast lump pain breastfeeding',
    'plugged duct vs mastitis',
    'clogged milk duct',
    'breast abscess breastfeeding',
    'flu-like symptoms breastfeeding',
    'mastitis treatment nursing mom',
    'breast pain fever breastfeeding',
    'engorgement vs mastitis',
  ],
  quickAnswer:
    'Mastitis is a breast infection that can develop during breastfeeding, usually when milk is not draining well from part of the breast. It causes a painful, red, swollen area on the breast, often with flu-like symptoms including fever, chills, and body aches. Mastitis affects about 1 in 10 breastfeeding mothers. It is important to continue breastfeeding or pumping through mastitis, as emptying the breast helps resolve the infection. Most cases improve with continued nursing and sometimes antibiotics.',
  byAge: [
    {
      ageRange: '0-6 weeks postpartum',
      context:
        'Mastitis is most common in the first 6 weeks of breastfeeding as your milk supply is establishing and you and your baby are learning proper latch technique. Engorgement, cracked nipples, and an inconsistent feeding schedule can increase risk. A clogged duct (a firm, tender lump without fever or redness) can progress to mastitis if not resolved. Frequent nursing, warm compresses before feeding, and gentle massage toward the nipple can help clear a clog before it becomes infected.',
    },
    {
      ageRange: '6 weeks - 6 months postpartum',
      context:
        'Mastitis can happen at any point during breastfeeding. Common triggers include a sudden change in feeding frequency (such as returning to work or baby sleeping longer stretches), a tight bra or carrier strap pressing on the breast, or stress and fatigue. If you feel a hard, warm, red area developing, increase nursing or pumping on that side and apply warm compresses. Rest and hydration are important.',
    },
    {
      ageRange: '6+ months postpartum',
      context:
        'Later-onset mastitis often occurs during weaning, when feeds are dropped quickly and the breast becomes overfull. Gradual weaning (dropping one feed every few days) reduces the risk significantly. If you need to drop feeds quickly for medical reasons, hand expressing or pumping just enough to relieve pressure (without fully emptying) can help prevent mastitis.',
    },
  ],
  whenNormal: [
    'Mild breast fullness or engorgement in the first week of breastfeeding',
    'A small, movable lump that goes away after a feeding (likely a plugged duct that resolved)',
    'Mild tenderness in the breast at the start of a feeding that resolves as milk flows',
    'Temporary redness from a tight bra or baby pressing on the breast',
  ],
  whenToMention: [
    'You have a firm, tender lump in the breast that has not resolved after 24-48 hours of frequent nursing and warm compresses',
    'A red, warm area on your breast is not improving with home care',
    'You have recurrent episodes of plugged ducts or mastitis',
    'You are unsure whether to continue breastfeeding through the infection',
  ],
  whenToActNow: [
    'You have breast redness, swelling, and warmth along with a fever over 101F (38.3C) and flu-like symptoms (chills, body aches)',
    'Your symptoms are getting rapidly worse despite frequent nursing and rest',
    'There is a fluctuant (soft, squishy) area in your breast that may indicate an abscess forming',
    'You see pus draining from the nipple or from a red area of the breast',
    'You have red streaking extending from the infected area',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['painful-breastfeeding', 'low-milk-supply-signs', 'weaning-off-breastfeeding', 'pumping-output-concerns'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Mastitis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Mastitis.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Mastitis: Causes and Management.',
      url: 'https://www.who.int/publications/i/item/WHO-FCH-CAH-00.13',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Breastfeeding: Frequently Asked Questions.',
      url: 'https://www.cdc.gov/breastfeeding/faq/index.htm',
    },
  ],
};
