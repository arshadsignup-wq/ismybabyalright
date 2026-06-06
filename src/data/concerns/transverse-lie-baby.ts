import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'transverse-lie-baby',
  title: 'Baby Lying Sideways (Transverse Lie)',
  category: 'maternal',
  searchTerms: ['transverse lie baby', 'baby lying sideways', 'baby horizontal position', 'oblique lie baby', 'transverse presentation', 'baby not vertical', 'baby across belly', 'transverse lie delivery'],
  quickAnswer: 'A transverse lie means the baby is lying sideways (horizontally) across the uterus rather than vertically. This is common earlier in pregnancy but occurs in less than 1% of pregnancies at term. If the baby remains transverse near your due date, your provider will discuss options including external cephalic version (ECV) or planned cesarean delivery, as vaginal birth is not possible in this position.',
  byAge: [
    { ageRange: 'Second trimester', context: 'Babies frequently change position throughout the second trimester, and a transverse lie at this stage is not a concern. There is still plenty of time and room for the baby to settle into a head-down position.' },
    { ageRange: 'Third trimester', context: 'If the baby is transverse after 36 weeks, your provider will evaluate the situation. Factors like placenta position, uterine shape, amniotic fluid volume, and multiple pregnancies can contribute. ECV may be attempted to rotate the baby. If the baby cannot be turned, a cesarean delivery will be planned, typically at 39 weeks.' },
  ],
  whenNormal: ['Transverse lie before 36 weeks is very common and usually self-corrects', 'Feeling the baby move into different positions throughout the day'],
  whenToMention: ['Baby appears to be transverse after 34-36 weeks', 'You have had a previous transverse lie and wonder if it will recur', 'You want to discuss options for encouraging the baby to turn'],
  whenToActNow: ['Water breaks with a transverse lie - go to the hospital immediately (high risk of cord prolapse)', 'Contractions begin with a known transverse lie', 'Sudden abdominal pain with a known transverse lie'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Fetal Malpresentation. ACOG, 2020.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/05/external-cephalic-version' },
    { org: 'NIH', citation: 'National Library of Medicine. Fetal Malpresentation. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459382/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Positions of the Baby in the Womb. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/positions-of-the-baby-in-the-womb.aspx' },
  ],
  relatedConcernSlugs: ['breech-baby-concerns', 'birth-plan-flexibility'],
};
