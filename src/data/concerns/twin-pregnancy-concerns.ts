import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'twin-pregnancy-concerns',
  title: 'Twin Pregnancy Specific Worries',
  category: 'maternal',
  searchTerms: ['twin pregnancy', 'twins pregnancy concerns', 'carrying twins', 'multiple pregnancy', 'twin pregnancy risks', 'identical twins pregnancy', 'fraternal twins pregnancy', 'mono/di twins', 'twin pregnancy monitoring', 'twin to twin transfusion'],
  quickAnswer: 'Twin pregnancies require more monitoring than singleton pregnancies but the vast majority result in healthy babies. Risks include preterm birth, preeclampsia, gestational diabetes, and growth differences between twins. The type of twinning (identical vs fraternal, shared vs separate placentas) determines the level of monitoring needed.',
  byAge: [
    { ageRange: 'First trimester', context: 'Early ultrasound determines whether twins share a placenta (monochorionic) or have separate placentas (dichorionic), which guides monitoring throughout pregnancy. Monochorionic twins require more frequent ultrasounds due to the risk of twin-to-twin transfusion syndrome (TTTS). First-trimester nausea and fatigue may be more pronounced with twins.' },
    { ageRange: 'Second trimester', context: 'Growth ultrasounds are performed more frequently for twins (typically every 2-4 weeks). Nutritional needs are higher - aim for about 300 extra calories per day beyond singleton pregnancy recommendations. Iron, folate, and protein intake are especially important. You may show and feel movement earlier than with a single baby.' },
    { ageRange: 'Third trimester', context: 'Preterm birth is common with twins - the average twin pregnancy delivers at 36 weeks. Your provider will discuss delivery timing based on your specific situation. Dichorionic twins are often delivered at 37-38 weeks, while monochorionic twins may be delivered at 36-37 weeks. Both vaginal delivery and cesarean are possible depending on the babies\' positions.' },
  ],
  whenNormal: ['Measuring larger than expected for gestational age', 'More frequent monitoring and ultrasounds', 'More intense pregnancy symptoms', 'Delivering earlier than 40 weeks'],
  whenToMention: ['Significant size difference between twins on ultrasound', 'You are concerned about preterm labor signs', 'You want to discuss delivery options for twins'],
  whenToActNow: ['Signs of preterm labor before 37 weeks (regular contractions, pelvic pressure, back pain)', 'Sudden severe swelling, headache, or vision changes (preeclampsia risk is higher)', 'Decreased movement from either twin'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Multifetal Gestations: Twin, Triplet, and Higher-Order Multifetal Pregnancies. ACOG Practice Bulletin No. 231, 2021.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2021/06/multifetal-gestations-twin-triplet-and-higher-order-multifetal-pregnancies' },
    { org: 'NIH', citation: 'National Library of Medicine. Twin Pregnancy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK535433/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Being Pregnant with Twins, Triplets, and Other Multiples. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/being-pregnant-with-twins-triplets-and-other-multiples.aspx' },
  ],
  relatedConcernSlugs: ['preterm-labor-signs', 'preeclampsia-warning-signs', 'high-risk-pregnancy-anxiety'],
};
