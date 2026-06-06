import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-frequent-urination',
  title: 'Frequent Urination in Pregnancy',
  category: 'maternal',
  searchTerms: ['frequent urination pregnancy', 'peeing a lot pregnant', 'bathroom all the time pregnant', 'urinary frequency pregnancy', 'can\'t hold pee pregnant', 'waking up to pee pregnant', 'bladder pressure pregnancy', 'overactive bladder pregnant', 'urge incontinence pregnancy', 'leaking urine pregnant'],
  quickAnswer: 'Frequent urination is one of the most common symptoms of pregnancy, affecting nearly all pregnant people. It is caused by hormonal changes, increased blood flow to the kidneys, and the growing uterus pressing on the bladder. It is most noticeable in the first and third trimesters and is usually completely normal.',
  byAge: [
    { ageRange: 'First trimester', context: 'Frequent urination often begins early due to the hormone hCG increasing blood flow to the kidneys, which produce more urine. The growing uterus also begins to press on the bladder. Do not restrict fluids to manage frequency - staying hydrated is important. Limit fluids right before bed to reduce nighttime trips.' },
    { ageRange: 'Second trimester', context: 'Many people get some relief in the second trimester as the uterus rises out of the pelvis and temporarily relieves bladder pressure. This varies from person to person. Continue to stay well-hydrated and practice pelvic floor exercises (Kegels) to strengthen bladder support.' },
    { ageRange: 'Third trimester', context: 'Frequent urination typically returns and intensifies in the third trimester as the baby drops lower into the pelvis and puts direct pressure on the bladder. You may feel you need to urinate immediately after emptying your bladder. Leaning forward when urinating can help empty the bladder more completely. Some leaking (stress incontinence) with coughing, sneezing, or laughing is also common.' },
  ],
  whenNormal: ['Needing to urinate more often than before pregnancy', 'Waking 1-3 times per night to urinate', 'Small amounts of urine leaking when coughing, sneezing, or laughing', 'Urinary frequency without pain, burning, or blood'],
  whenToMention: ['Significant stress incontinence affecting daily activities', 'Urinary frequency with any burning, pain, or cloudy/foul-smelling urine suggesting UTI', 'Leaking large amounts of fluid that could be amniotic fluid rather than urine'],
  whenToActNow: ['Painful urination with fever, back pain, or blood in urine - suggesting kidney infection', 'Sudden gush of fluid that soaks your clothing - could be amniotic fluid leaking (PROM)'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Pregnancy FAQs. ACOG, 2022.', url: 'https://www.acog.org/womens-health/faqs' },
    { org: 'NIH', citation: 'National Library of Medicine. Urinary Frequency in Pregnancy. MedlinePlus, 2023.', url: 'https://medlineplus.gov/ency/article/003140.htm' },
    { org: 'March of Dimes', citation: 'March of Dimes. Common Discomforts of Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/common-discomforts-of-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['pregnancy-urinary-tract-infection', 'postpartum-incontinence'],
};
