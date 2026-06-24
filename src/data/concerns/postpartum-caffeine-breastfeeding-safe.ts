import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-caffeine-breastfeeding-safe',
  title: 'Caffeine While Breastfeeding: How Much Is Safe',
  category: 'maternal',
  searchTerms: [
    'caffeine while breastfeeding',
    'coffee and breastfeeding',
    'is caffeine safe for breastfeeding',
    'how much coffee can I drink breastfeeding',
    'caffeine in breast milk',
    'baby fussy from caffeine',
    'energy drinks while breastfeeding',
    'breastfeeding caffeine limit',
    'does caffeine affect breast milk',
    'tea while breastfeeding',
  ],
  quickAnswer:
    'Moderate caffeine intake of up to 300 mg per day (about two to three 8-ounce cups of coffee) is generally considered safe while breastfeeding. Only about 1% of consumed caffeine transfers into breast milk, peaking one to two hours after intake. Newborns and preterm infants metabolize caffeine more slowly, so extra caution is warranted in the early weeks.',
  byAge: [
    {
      ageRange: '0-4 weeks postpartum',
      context:
        'Newborns have very immature livers and cannot process caffeine efficiently. The half-life of caffeine in a newborn can be as long as 80-100 hours compared to about 5 hours in adults. During this period, it is wise to keep caffeine intake on the lower end, around 200 mg per day or less. If your baby seems unusually jittery, wakeful, or fussy, consider reducing your intake further and note whether symptoms improve.',
    },
    {
      ageRange: '1-3 months postpartum',
      context:
        'By one month, your baby\'s ability to metabolize caffeine begins to improve but is still significantly slower than an adult. Most breastfeeding parents can safely consume up to 300 mg of caffeine daily without noticeable effects on their baby. Time your coffee for right after a feeding rather than right before, so caffeine levels in your milk are lower at the next feed. Watch for signs of sensitivity including fussiness, poor sleep, and jitteriness.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'By three to six months, infants metabolize caffeine much more efficiently, and the risk of caffeine sensitivity decreases. Most parents can comfortably enjoy up to 300 mg daily with minimal impact on their baby. However, every baby is different, and some may remain more sensitive than others. If your baby sleeps well and feeds normally, your current caffeine intake is likely fine.',
    },
    {
      ageRange: '6+ months postpartum',
      context:
        'Older infants process caffeine at rates much closer to adults, and the amount transferred through breast milk is unlikely to cause any noticeable effects. The standard guidance of up to 300 mg per day remains a reasonable limit. If you are consuming significantly more than this and notice sleep disruption in your baby, consider moderating your intake. Remember that caffeine is found not only in coffee but also in tea, chocolate, energy drinks, and some medications.',
    },
  ],
  whenNormal: [
    'You drink one to three cups of coffee per day and your baby feeds and sleeps normally',
    'Your baby shows no signs of fussiness or wakefulness related to your caffeine intake',
    'You occasionally have an extra cup and notice no change in your baby\'s behavior',
  ],
  whenToMention: [
    'Your baby seems unusually jittery, wide-eyed, or has difficulty settling after feedings',
    'Your baby has persistent sleep difficulties and you consume more than 300 mg of caffeine daily',
    'Your baby was premature or has a heart condition, and you want personalized guidance on caffeine limits',
  ],
  whenToActNow: [
    'Your baby is trembling, has a rapid heart rate, or seems to be in distress after breastfeeding',
    'Your baby is refusing to feed and is showing signs of dehydration (fewer wet diapers, dry mouth, lethargy)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-nutrition-breastfeeding-diet',
    'postpartum-water-intake-breastfeeding',
    'postpartum-medication-breastfeeding-safe',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Maternal Diet: Caffeine. Breastfeeding, 2024.',
      url: 'https://www.cdc.gov/breastfeeding/breastfeeding-special-circumstances/diet-and-micronutrients/maternal-diet.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. LactMed: Caffeine. Drugs and Lactation Database, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK501467/',
    },
  ],
};
