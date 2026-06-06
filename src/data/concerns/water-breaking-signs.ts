import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'water-breaking-signs',
  title: 'How to Know If Your Water Has Broken',
  category: 'maternal',
  searchTerms: ['water breaking signs', 'did my water break', 'amniotic fluid leaking', 'water broke pregnancy', 'gush of fluid pregnant', 'slow leak amniotic fluid', 'water breaking vs discharge', 'water breaking vs urine', 'amniotic fluid smell', 'rupture of membranes signs'],
  quickAnswer: 'When your water breaks, the amniotic sac surrounding your baby ruptures, releasing amniotic fluid. This can be a dramatic gush or a slow, steady trickle. Amniotic fluid is typically clear, pale yellow, or slightly pink, and is odorless or mildly sweet-smelling (not like urine). If you think your water may have broken, contact your provider.',
  byAge: [
    { ageRange: 'Third trimester', context: 'Your water usually breaks during or just before labor begins, typically at or near your due date. Only about 10-15% of labors begin with the water breaking before contractions start. Amniotic fluid differs from urine in that it is continuous (you cannot stop it by squeezing pelvic muscles), odorless, and clear. If you are unsure, wear a pad and note the color, amount, and smell, then call your provider.' },
    { ageRange: 'Labor & delivery', context: 'Once your water breaks at term, labor usually begins within 12-24 hours if it has not already started. Your provider will want to know the time it broke, the color of the fluid (green or brown fluid could indicate meconium), and whether you feel the baby moving. Avoid baths or inserting anything into the vagina after your water breaks to reduce infection risk.' },
  ],
  whenNormal: ['Clear or pale yellow fluid with no strong odor after 37 weeks', 'Water breaks and contractions follow within hours', 'Baby continues to move normally after water breaks'],
  whenToMention: ['You think your water may have broken but are not sure (slow trickle vs discharge)', 'Your water breaks but contractions have not started yet', 'You want guidance on when to go to the hospital'],
  whenToActNow: ['Water breaks before 37 weeks (preterm premature rupture of membranes)', 'Amniotic fluid is green, brown, or has a foul smell, suggesting meconium or infection', 'Water breaks and you feel the umbilical cord in your vagina (cord prolapse - call 911)', 'Baby is not moving normally after water breaks'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. How to Tell When Labor Begins. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins' },
    { org: 'NIH', citation: 'National Library of Medicine. Premature Rupture of Membranes. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK532888/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Water Breaking During Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/water-breaking-during-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['premature-rupture-membranes', 'bloody-show-mucus-plug', 'braxton-hicks-vs-real-contractions'],
};
