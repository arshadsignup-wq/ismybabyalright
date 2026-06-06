import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-after-infertility',
  title: 'Pregnancy After IVF or Fertility Treatment',
  category: 'maternal',
  searchTerms: ['pregnancy after IVF', 'IVF pregnancy concerns', 'pregnancy after fertility treatment', 'IUI pregnancy', 'infertility pregnancy anxiety', 'IVF pregnancy different', 'scared after IVF positive', 'fertility treatment pregnancy monitoring', 'IVF twin pregnancy'],
  quickAnswer: 'Pregnancy after infertility or fertility treatment is often filled with intense emotions - immense gratitude mixed with heightened anxiety. After working so hard to become pregnant, the fear of loss can be overwhelming. Most IVF and fertility-treatment pregnancies progress normally, though some may be considered higher risk depending on specific factors.',
  byAge: [
    { ageRange: 'First trimester', context: 'If you conceived through IVF, you will have early monitoring including blood tests for hCG levels and early ultrasounds. The transition from your fertility clinic to an OB can feel anxiety-provoking. It is okay to ask for additional reassurance. If you are on progesterone supplements, your provider will advise when to stop (usually around 10-12 weeks).' },
    { ageRange: 'Second trimester', context: 'Many IVF pregnancies are managed similarly to naturally conceived pregnancies at this point. If you have multiples (more common with fertility treatment), you will have additional monitoring. The anxiety from the infertility journey may persist - this is normal. You deserve to enjoy this pregnancy while also acknowledging the difficult path that brought you here.' },
    { ageRange: 'Third trimester', context: 'Delivery planning is based on your individual circumstances. IVF itself does not change delivery recommendations, but factors like multiples, age, or underlying conditions may influence your care plan. Continue to communicate openly with your provider about your concerns and emotional needs.' },
  ],
  whenNormal: ['Heightened anxiety after the long journey to conception', 'Difficulty believing the pregnancy is real', 'Feeling both grateful and terrified simultaneously', 'Needing extra reassurance from your care team'],
  whenToMention: ['You need help transitioning from fertility clinic to OB care', 'Anxiety is significantly impacting your quality of life', 'You are carrying multiples and want to understand the additional monitoring needed'],
  whenToActNow: ['Any bleeding or severe cramping, especially in the first trimester', 'Signs of ectopic pregnancy if not yet confirmed intrauterine (severe one-sided pain, dizziness)', 'Anxiety or depression that is overwhelming and impairing function'],
  relatedMilestones: [],
  showSelfReferral: true,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Perinatal Risks Associated with Assisted Reproductive Technology. ACOG Committee Opinion No. 671, 2016 (Reaffirmed 2022).', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2016/09/perinatal-risks-associated-with-assisted-reproductive-technology' },
    { org: 'NIH', citation: 'National Library of Medicine. Pregnancy Outcomes After Assisted Reproductive Technology. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK562176/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Fertility Treatments. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/fertility-treatments.aspx' },
  ],
  relatedConcernSlugs: ['pregnancy-anxiety', 'twin-pregnancy-concerns', 'secondary-infertility-emotional-impact'],
};
