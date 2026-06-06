import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-blood-pressure-low',
  title: 'Low Blood Pressure in Pregnancy',
  category: 'maternal',
  searchTerms: ['low blood pressure pregnancy', 'hypotension pregnant', 'dizzy low blood pressure pregnant', 'blood pressure too low pregnancy', 'fainting low blood pressure pregnant', 'blood pressure drops pregnancy', 'lightheaded low BP pregnant', 'supine hypotension pregnancy'],
  quickAnswer: 'Low blood pressure (hypotension) is common during pregnancy, especially in the first and second trimesters. It is caused by hormonal changes that relax blood vessel walls and the expanding circulatory system. Most low blood pressure in pregnancy is harmless, though it can cause dizziness and fainting.',
  byAge: [
    { ageRange: 'First trimester', context: 'Blood pressure typically begins to drop in the first trimester as progesterone relaxes blood vessel walls. This is a normal physiologic change. Stay hydrated, rise slowly from sitting or lying positions, and eat regular small meals to prevent blood sugar drops that compound lightheadedness.' },
    { ageRange: 'Second trimester', context: 'Blood pressure usually reaches its lowest point in the mid-second trimester, often dropping 5-10 points below your pre-pregnancy baseline. Avoid standing for prolonged periods, stay hydrated, and lie on your left side when resting. Compression stockings may help if you are prone to dizziness.' },
    { ageRange: 'Third trimester', context: 'Blood pressure gradually returns toward pre-pregnancy levels in the third trimester. Lying flat on your back can cause supine hypotensive syndrome, where the uterus compresses the inferior vena cava and drops blood pressure. Sleep on your side and avoid lying flat for extended periods.' },
  ],
  whenNormal: ['Blood pressure readings between 90/60 and 120/80 without significant symptoms', 'Mild lightheadedness when standing up quickly that resolves in seconds', 'Blood pressure lower than your pre-pregnancy baseline without symptoms'],
  whenToMention: ['Frequent episodes of dizziness or near-fainting', 'Blood pressure consistently below 90/60 with symptoms', 'Lightheadedness that interferes with daily activities'],
  whenToActNow: ['Fainting (loss of consciousness), especially if you fell or hit your belly', 'Severe dizziness with blurred vision, confusion, or rapid heartbeat', 'Signs of shock: cold clammy skin, rapid shallow breathing, confusion'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Pregnancy FAQs. ACOG, 2022.', url: 'https://www.acog.org/womens-health/faqs' },
    { org: 'NIH', citation: 'National Library of Medicine. Hypotension in Pregnancy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK526089/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['pregnancy-dizziness-fainting', 'pregnancy-swelling-edema'],
};
