import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'large-baby-macrosomia-concerns',
  title: 'Concerns About a Large Baby (Macrosomia)',
  category: 'maternal',
  searchTerms: ['large baby pregnancy', 'macrosomia', 'big baby concerns', 'baby too big delivery', 'estimated fetal weight high', 'LGA baby', 'large for gestational age', 'big baby c-section', 'shoulder dystocia risk', 'baby measuring big ultrasound'],
  quickAnswer: 'Macrosomia means a baby estimated to weigh more than 8 pounds 13 ounces (4,000 grams) at birth. It occurs in about 9% of pregnancies. Risk factors include gestational diabetes, post-term pregnancy, obesity, and genetics. While most large babies are born safely, macrosomia increases the risk of delivery complications, so your provider will discuss the safest delivery approach.',
  byAge: [
    { ageRange: 'Third trimester', context: 'If ultrasound estimates suggest a large baby, keep in mind that ultrasound weight estimates can be off by 15-20% in either direction. Your provider will consider the estimated weight alongside other factors like your pelvis size, diabetes status, and birth history. A large baby does not automatically mean cesarean delivery is needed.' },
    { ageRange: 'Labor & delivery', context: 'The main concern with macrosomia is shoulder dystocia (the baby\'s shoulder getting stuck behind the pubic bone). Your provider is trained to manage this. Delivery planning may include induction at 39 weeks for certain high-risk situations or cesarean delivery if the estimated weight is very high (usually above 5,000 grams or 4,500 grams with diabetes).' },
  ],
  whenNormal: ['Baby measuring slightly above average on ultrasound', 'Family history of larger babies', 'Growth tracking consistently along a higher percentile curve'],
  whenToMention: ['Ultrasound estimates suggest baby is above the 90th percentile', 'You have gestational diabetes and baby is measuring large', 'You want to discuss delivery options given baby\'s estimated size'],
  whenToActNow: ['Signs of preterm labor or other pregnancy complications regardless of baby size', 'Decreased fetal movement'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Macrosomia. ACOG Practice Bulletin No. 216, 2020.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/01/macrosomia' },
    { org: 'NIH', citation: 'National Library of Medicine. Fetal Macrosomia. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK557577/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Baby\'s Growth and Development. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/your-babys-growth-and-development.aspx' },
  ],
  relatedConcernSlugs: ['gestational-diabetes-baby-effects', 'gestational-diabetes-risk'],
};
