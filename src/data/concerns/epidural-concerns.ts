import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'epidural-concerns',
  title: 'Epidural Questions and Fears',
  category: 'maternal',
  searchTerms: ['epidural concerns', 'epidural risks', 'epidural side effects', 'scared of epidural', 'epidural pain relief labor', 'epidural back pain long term', 'epidural paralysis risk', 'when to get epidural', 'epidural pros cons', 'epidural and breastfeeding', 'walking epidural'],
  quickAnswer: 'An epidural is the most effective form of pain relief during labor, used by about 70% of birthing people in the United States. It involves placing a small catheter near the spinal nerves in the lower back to deliver continuous pain medication. Modern epidurals are very safe, and serious complications are extremely rare.',
  byAge: [
    { ageRange: 'Third trimester', context: 'This is a great time to learn about epidurals if you are considering one. Epidurals are administered by anesthesiologists and typically take 10-20 minutes to place and another 10-15 minutes to take full effect. They significantly reduce or eliminate labor pain while allowing you to remain awake and alert. You can request an epidural at any time during labor.' },
    { ageRange: 'Labor & delivery', context: 'Common temporary side effects include low blood pressure (managed with IV fluids), itching, shivering, and difficulty urinating (a catheter may be placed). Epidurals do not increase the risk of cesarean section. They may slightly prolong the pushing stage. The risk of serious complications like nerve damage is extremely rare (roughly 1 in 100,000). The epidural does not go into the spinal cord itself.' },
  ],
  whenNormal: ['Having questions and concerns about epidurals is completely understandable', 'Feeling uncertain about whether you want an epidural', 'Wanting to understand all pain management options', 'Changing your mind about an epidural during labor - either deciding to get one or deciding not to'],
  whenToMention: ['You have specific medical conditions that might affect epidural safety', 'You have had a previous bad experience with anesthesia', 'You are taking blood thinners or have a bleeding disorder', 'You want to discuss your pain management plan before labor'],
  whenToActNow: ['After receiving an epidural: severe headache that worsens when upright (possible post-dural puncture headache)', 'Numbness or weakness that does not resolve as expected after the epidural wears off', 'High fever, severe back pain at the epidural site, or signs of infection after delivery'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Medications for Pain Relief During Labor and Delivery. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/medications-for-pain-relief-during-labor-and-delivery' },
    { org: 'NIH', citation: 'National Library of Medicine. Epidural Analgesia in Labor. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK532948/' },
    { org: 'NICE', citation: 'National Institute for Health and Care Excellence. Intrapartum Care. NICE CG190, 2023.', url: 'https://www.nice.org.uk/guidance/cg190' },
  ],
  relatedConcernSlugs: ['unmedicated-birth-preparation', 'birth-plan-flexibility', 'back-labor'],
};
