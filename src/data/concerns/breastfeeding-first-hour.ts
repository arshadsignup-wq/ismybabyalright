import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-first-hour',
  title: 'Golden Hour Breastfeeding',
  category: 'maternal',
  searchTerms: ['breastfeeding first hour', 'golden hour breastfeeding', 'first breastfeed after birth', 'baby won\'t latch first feeding', 'colostrum first feed', 'breastfeeding initiation', 'newborn breast crawl', 'first breastfeed timing', 'early breastfeeding benefits', 'baby not interested in feeding after birth'],
  quickAnswer: 'Initiating breastfeeding within the first hour after birth (the "golden hour") is recommended by WHO and AAP. During this time, babies are often in a quiet alert state and may instinctively crawl toward the breast and latch. Early breastfeeding provides colostrum (nutrient-rich first milk), promotes uterine contractions, and supports long-term breastfeeding success.',
  byAge: [
    { ageRange: 'Labor & delivery', context: 'During skin-to-skin in the first hour, your baby may show feeding cues: rooting, hand-to-mouth movements, and crawling toward the breast. Let the baby lead the process. An imperfect first latch is normal - the goal is practice and skin-to-skin contact, not a perfect feed. Colostrum is produced in small amounts (teaspoons), which is exactly what your newborn\'s tiny stomach needs.' },
    { ageRange: 'Postpartum', context: 'If breastfeeding did not happen in the first hour (due to medical needs, cesarean recovery, or the baby not being ready), that is okay. Begin breastfeeding as soon as you and baby are able. Feed on demand (8-12 times in 24 hours for a newborn). Ask for a lactation consultant if you need help with latching or positioning. The first few days involve colostrum; mature milk typically comes in by days 3-5.' },
  ],
  whenNormal: ['Baby latching and unlatching multiple times during the first feeding', 'Very small amounts of colostrum - this is normal and sufficient', 'Baby being sleepy after the initial alert period and not wanting to feed again for a few hours', 'Breastfeeding being awkward or uncomfortable as you both learn'],
  whenToMention: ['Baby has not breastfed at all in the first 4-6 hours and you need guidance', 'You are having pain with latch beyond mild initial tenderness', 'You have concerns about your milk supply or whether baby is getting enough'],
  whenToActNow: ['Baby is unable to latch at all and is becoming lethargic or dehydrated', 'Your baby is not producing wet diapers as expected (at least 1 wet diaper per day of life in the first few days)'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'WHO', citation: 'World Health Organization. Early Initiation of Breastfeeding. WHO, 2018.', url: 'https://www.who.int/nutrition/publications/guidelines/breastfeeding-facilities-maternity-newborn-guideline/en/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347' },
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Optimizing Support for Breastfeeding. ACOG Committee Opinion No. 756, 2018.', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/10/optimizing-support-for-breastfeeding-as-part-of-obstetric-practice' },
  ],
  relatedConcernSlugs: ['skin-to-skin-after-birth-concerns', 'pumping-colostrum-before-birth'],
};
