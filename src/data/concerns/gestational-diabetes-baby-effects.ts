import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'gestational-diabetes-baby-effects',
  title: 'How Gestational Diabetes Affects Your Baby',
  category: 'maternal',
  searchTerms: ['gestational diabetes baby effects', 'GDM baby risks', 'gestational diabetes affect baby', 'big baby gestational diabetes', 'baby blood sugar after birth GDM', 'gestational diabetes complications baby', 'macrosomia gestational diabetes', 'neonatal hypoglycemia GDM'],
  quickAnswer: 'Well-managed gestational diabetes (GDM) typically results in healthy babies. When blood sugar is not well controlled, the baby may grow larger than expected (macrosomia), which can complicate delivery. After birth, babies of GDM mothers may have temporary low blood sugar. Good blood sugar management during pregnancy significantly reduces all these risks.',
  byAge: [
    { ageRange: 'Second trimester', context: 'After GDM diagnosis (usually 24-28 weeks), controlling blood sugar is the best way to reduce risks to your baby. Excess glucose crosses the placenta, causing the baby to produce extra insulin and store more fat. This is why blood sugar management is so important. With good control, your baby\'s growth will be monitored and risks are substantially reduced.' },
    { ageRange: 'Third trimester', context: 'Your provider will monitor the baby\'s growth with ultrasounds, particularly checking estimated weight. If the baby is growing larger than expected, adjustments to your diabetes management or delivery planning may be discussed. Non-stress tests may be recommended to check fetal well-being. Most babies of well-managed GDM parents are healthy.' },
    { ageRange: 'Labor & delivery', context: 'After birth, the baby\'s blood sugar will be monitored, as it may drop temporarily when the placental glucose supply stops but the baby\'s insulin production is still elevated. This usually resolves quickly with feeding. Breastfeeding early and often helps stabilize blood sugar. Rarely, babies may need IV glucose supplementation.' },
  ],
  whenNormal: ['Baby growing within normal range despite GDM diagnosis', 'Blood sugar well controlled and baby developing normally on ultrasound', 'Mild temporary low blood sugar in the newborn that resolves with feeding'],
  whenToMention: ['Ultrasound shows the baby is measuring larger than expected', 'You are struggling to manage blood sugar and worried about baby\'s health', 'You want to understand how delivery will be managed with GDM'],
  whenToActNow: ['Baby is not moving as expected (decreased fetal movement)', 'Very high blood sugar readings that cannot be controlled', 'Newborn showing signs of low blood sugar: jitteriness, poor feeding, lethargy'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Gestational Diabetes. ACOG Practice Bulletin No. 190, 2018.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/02/gestational-diabetes-mellitus' },
    { org: 'NIH', citation: 'National Library of Medicine. Gestational Diabetes. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK545196/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Gestational Diabetes. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/complications/gestational-diabetes.aspx' },
  ],
  relatedConcernSlugs: ['gestational-diabetes-risk', 'pregnancy-diabetes-diet-management', 'large-baby-macrosomia-concerns'],
};
