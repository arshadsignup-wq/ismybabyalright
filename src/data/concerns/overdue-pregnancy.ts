import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'overdue-pregnancy',
  title: 'Going Past Your Due Date',
  category: 'maternal',
  searchTerms: ['overdue pregnancy', 'past due date pregnant', 'post-term pregnancy', 'baby won\'t come', '41 weeks pregnant', '42 weeks pregnant', 'overdue induction', 'baby late arrival', 'waiting for labor to start', 'how long past due date safe'],
  quickAnswer: 'A pregnancy is considered full-term at 39-40 weeks, late-term at 41 weeks, and post-term at 42 weeks. About 5-10% of pregnancies go past 42 weeks. Going past your due date is common, especially in first pregnancies, but your provider will increase monitoring and discuss induction as risks gradually increase after 41 weeks.',
  byAge: [
    { ageRange: 'Third trimester', context: 'Due dates are estimates - only about 5% of babies are born on their exact due date. Most births occur between 39-41 weeks. As you approach your due date, your provider will assess your cervix and may discuss options for encouraging labor to start. Walking, staying active, and relaxation can help, though there is limited evidence that natural methods reliably induce labor.' },
    { ageRange: 'Labor & delivery', context: 'After 41 weeks, your provider will typically increase monitoring with non-stress tests and ultrasounds to check amniotic fluid levels and fetal well-being. Induction is usually recommended between 41-42 weeks because the risk of stillbirth, though still small, increases after this point. The placenta also becomes less efficient at post-term gestational ages. Discuss the timing and methods of induction with your provider.' },
  ],
  whenNormal: ['Being a few days to a week past your due date, especially in a first pregnancy', 'Baby is moving well and amniotic fluid levels are normal on monitoring', 'Your provider has assessed you and is comfortable continuing to wait with increased monitoring'],
  whenToMention: ['You are approaching 41 weeks and want to discuss induction options', 'You are feeling anxious about going past your due date', 'You want to discuss natural methods of encouraging labor'],
  whenToActNow: ['Decreased fetal movement at any point past your due date', 'Any vaginal bleeding, severe headache, or vision changes', 'Signs of labor (regular contractions, water breaking) - contact your provider as planned'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Management of Late-Term and Postterm Pregnancies. ACOG Practice Bulletin No. 146, 2014 (Reaffirmed 2021).', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2014/08/management-of-late-term-and-postterm-pregnancies' },
    { org: 'NIH', citation: 'National Library of Medicine. Postterm Pregnancy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK470618/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Overdue Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/overdue-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['labor-induction-concerns', 'decreased-fetal-movement'],
};
