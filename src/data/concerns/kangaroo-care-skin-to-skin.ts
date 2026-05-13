import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'kangaroo-care-skin-to-skin',
  title: 'Kangaroo Care and Skin-to-Skin Benefits',
  category: 'medical',
  searchTerms: [
    'kangaroo care benefits',
    'skin to skin contact baby',
    'skin to skin newborn benefits',
    'kangaroo care preemie',
    'how long to do skin to skin',
    'skin to skin with dad',
    'kangaroo care NICU',
    'chest to chest baby',
    'skin to skin bonding',
  ],
  quickAnswer:
    'Kangaroo care, or skin-to-skin contact, involves placing your baby bare-chested directly against your bare chest. It is one of the most powerful and evidence-based interventions for newborn health, shown to regulate body temperature, stabilize heart rate and breathing, promote breastfeeding, reduce stress hormones in both parent and baby, and support brain development. It benefits all newborns but is especially important for premature and medically fragile babies.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Skin-to-skin contact is most impactful in the first hours, days, and weeks of life. For full-term babies, immediate skin-to-skin after delivery promotes the first breastfeeding session and helps regulate the baby\'s transition to life outside the womb. For NICU babies, kangaroo care can begin as soon as the baby is medically stable, even with monitors and IV lines in place. Research shows that preemies who receive regular kangaroo care have better weight gain, fewer infections, and shorter hospital stays.',
    },
    {
      ageRange: '3-6 months',
      context:
        'While the term "kangaroo care" is most associated with newborns and NICU stays, skin-to-skin contact continues to provide benefits well into infancy. At this age, it helps soothe a fussy baby, supports continued breastfeeding success, and strengthens the parent-child bond. Both parents and other caregivers can practice skin-to-skin, and babies benefit equally from contact with any consistent caregiver. Even 20-30 minutes a day can make a meaningful difference.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby grows, formal kangaroo care sessions may become less frequent, but the principles of close physical contact remain important. Holding, cuddling, and babywearing provide similar regulatory and bonding benefits. Babies who received consistent skin-to-skin contact in their early months often show more secure attachment, better sleep patterns, and improved stress regulation as they grow. The benefits extend to parents too, with reduced rates of postpartum depression and anxiety.',
    },
  ],
  whenNormal: [
    'Your baby calms down immediately when placed skin-to-skin, which demonstrates the powerful regulatory effect of close contact',
    'Your baby\'s breathing and heart rate become more regular during kangaroo care, which is a well-documented physiological response',
    'You feel a rush of calm or emotional connection during skin-to-skin, which is related to the release of oxytocin in both you and your baby',
    'Your baby roots or attempts to breastfeed during skin-to-skin contact, which is a natural feeding cue',
  ],
  whenToMention: [
    'You are having difficulty initiating skin-to-skin in the NICU and want guidance from your care team on how and when to start',
    'You feel emotionally disconnected during kangaroo care, which may be a sign of postpartum depression or NICU-related trauma that deserves support',
    'Your baby seems to become more agitated rather than calmer during skin-to-skin, which may indicate overstimulation or discomfort that can be addressed',
  ],
  whenToActNow: [
    'Your baby has a significant change in skin color, breathing pattern, or heart rate during kangaroo care, especially in the NICU setting',
    'Your baby becomes limp, unresponsive, or has an apnea episode during skin-to-skin contact',
    'You notice a concerning skin rash, unusual warmth, or signs of infection at the site of skin contact',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'WHO',
      citation:
        'World Health Organization. Kangaroo Mother Care: A Practical Guide.',
      url: 'https://www.who.int/publications/i/item/9241590351',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Skin-to-Skin Care for Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/About-Skin-to-Skin-Care.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Kangaroo Mother Care and Neonatal Outcomes: A Meta-analysis. Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26884166/',
    },
  ],
};
