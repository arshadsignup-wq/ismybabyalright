import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'caffeine-while-breastfeeding',
  title: 'Caffeine While Breastfeeding',
  category: 'feeding',
  searchTerms: [
    'caffeine while breastfeeding',
    'coffee breastfeeding safe',
    'caffeine in breast milk',
    'baby fussy after coffee',
    'how much caffeine breastfeeding',
    'caffeine and breastfed baby sleep',
    'energy drinks while breastfeeding',
    'tea while breastfeeding',
    'caffeine sensitivity baby',
  ],
  quickAnswer:
    'Moderate caffeine intake, generally up to 300 milligrams per day (about two to three cups of coffee), is considered safe while breastfeeding. Only about one percent of the caffeine you consume passes into your breast milk. However, newborns and premature babies metabolize caffeine more slowly, so they may be more sensitive to its effects.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns metabolize caffeine very slowly, with a half-life of up to 97 hours in the first weeks of life compared to about 5 hours in adults. This means caffeine can accumulate in your young baby\'s system if you consume large amounts. If you notice your newborn seems unusually jittery, wakeful, or fussy, consider reducing your caffeine intake and observing whether symptoms improve over several days.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By three to five months, your baby\'s ability to metabolize caffeine has improved significantly. Most babies at this age tolerate moderate maternal caffeine intake without any noticeable effects. If your baby was previously sensitive to caffeine, you may find you can gradually increase your intake without issues.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies metabolize caffeine nearly as efficiently as adults, so the small amount that passes through breast milk is unlikely to cause any problems. Most breastfeeding mothers can enjoy their usual caffeine intake without concern at this stage.',
    },
  ],
  whenNormal: [
    'You drink one to three cups of coffee per day and your baby sleeps and feeds normally',
    'Your baby occasionally has a fussy period that does not correlate with your caffeine intake',
    'You consume caffeine from various sources including tea, chocolate, and coffee without baby showing adverse effects',
  ],
  whenToMention: [
    'Your baby consistently seems jittery, unusually wakeful, or irritable and you consume significant amounts of caffeine',
    'You are unsure whether your total daily caffeine intake from all sources exceeds recommended levels',
    'Your premature baby seems more sensitive to caffeine and you need guidance on safe amounts',
    'You are taking caffeine supplements or energy drinks in addition to coffee and want to know the combined effect',
  ],
  whenToActNow: [
    'Your baby is showing signs of severe irritability, rapid heart rate, or inability to sleep and you have consumed very large amounts of caffeine',
    'Your baby has tremors or unusual movements that could be related to caffeine exposure',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Transfer of Drugs and Therapeutics Into Human Breast Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/132/3/e796/31630/The-Transfer-of-Drugs-and-Therapeutics-Into-Human',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Maternal Diet Considerations While Breastfeeding.',
      url: 'https://www.cdc.gov/breastfeeding/breastfeeding-special-circumstances/diet-and-micronutrients/maternal-diet.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. LactMed: Caffeine. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK501467/',
    },
  ],
};
