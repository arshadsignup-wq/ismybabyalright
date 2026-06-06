import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'skin-to-skin-after-birth-concerns',
  title: 'Skin-to-Skin Contact After Birth',
  category: 'maternal',
  searchTerms: ['skin to skin after birth', 'kangaroo care newborn', 'golden hour birth', 'baby on chest after birth', 'skin to skin benefits', 'skin to skin c-section', 'missed skin to skin', 'skin to skin how long', 'skin to skin breastfeeding', 'immediate skin to skin'],
  quickAnswer: 'Skin-to-skin contact (placing the naked baby directly on the birthing parent\'s bare chest) immediately after birth is recommended by major medical organizations. It helps regulate the baby\'s temperature, heart rate, and breathing, promotes breastfeeding, supports bonding, and reduces stress for both parent and baby.',
  byAge: [
    { ageRange: 'Labor & delivery', context: 'Immediately after birth, the baby should be dried and placed skin-to-skin on the birthing parent\'s chest, covered with a warm blanket. Most newborn assessments can be done while the baby is on the chest. This "golden hour" of uninterrupted skin-to-skin is valuable for bonding and breastfeeding initiation. Skin-to-skin is also possible after cesarean delivery in many hospitals.' },
    { ageRange: 'Postpartum', context: 'If you were unable to have immediate skin-to-skin (due to medical complications, NICU admission, or cesarean delivery), do not worry - bonding is not a single moment but a process. Skin-to-skin contact is beneficial at any time, not just immediately after birth. Continue skin-to-skin as much as possible in the days and weeks after birth. Partners and other caregivers can also provide skin-to-skin contact.' },
  ],
  whenNormal: ['Baby rooting, nuzzling, or crawling toward the breast during skin-to-skin', 'Baby calming quickly when placed skin-to-skin', 'Feeling a surge of emotion during skin-to-skin contact', 'Not having immediate skin-to-skin and bonding well later'],
  whenToMention: ['You want to ensure skin-to-skin is part of your birth plan, including after a cesarean', 'You were unable to have immediate skin-to-skin and have concerns about bonding', 'You want to practice skin-to-skin but are unsure how or when'],
  whenToActNow: ['During skin-to-skin, if the baby appears blue, limp, or is not breathing normally, alert your nurse immediately', 'If you feel too drowsy to safely hold the baby skin-to-skin, ask for help'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'WHO', citation: 'World Health Organization. Skin-to-Skin Contact. WHO Recommendations on Newborn Health, 2017.', url: 'https://www.who.int/publications/i/item/WHO-MCA-17.07' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347' },
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Optimizing Support for Breastfeeding as Part of Obstetric Practice. ACOG Committee Opinion No. 756, 2018.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/10/optimizing-support-for-breastfeeding-as-part-of-obstetric-practice' },
  ],
  relatedConcernSlugs: ['breastfeeding-first-hour', 'delayed-cord-clamping'],
};
