import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'polycystic-kidney-disease-baby',
  title: 'My Baby Has Polycystic Kidney Disease (PKD)',
  category: 'medical',
  searchTerms: [
    'baby polycystic kidney disease',
    'PKD baby',
    'ARPKD infant',
    'autosomal recessive polycystic kidney disease',
    'autosomal dominant polycystic kidney disease baby',
    'enlarged kidneys baby',
    'polycystic kidney disease prenatal',
    'PKD symptoms baby',
    'polycystic kidney disease treatment',
    'baby kidney cysts',
  ],
  quickAnswer:
    'Polycystic kidney disease (PKD) in children comes in two main forms. Autosomal recessive PKD (ARPKD) typically presents in infancy with greatly enlarged kidneys, hypertension, and liver fibrosis, and can cause respiratory distress at birth from the large kidneys compressing the lungs. Autosomal dominant PKD (ADPKD) is more common overall but usually does not cause symptoms until adulthood, though it can occasionally be detected prenatally or in childhood. Treatment focuses on managing symptoms, controlling blood pressure, and preserving kidney function for as long as possible.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'PKD may be detected on prenatal ultrasound. ARPKD classically shows very large, bright (echogenic) kidneys bilaterally, sometimes with oligohydramnios (low amniotic fluid) in severe cases. ADPKD may show kidney cysts or enlargement but is less commonly detected prenatally. If severely enlarged kidneys are seen, you will be counseled about the possible diagnoses and prognosis. Genetic testing can help distinguish the type. Delivery should be planned at a center equipped to manage respiratory and renal complications.',
    },
    {
      ageRange: '0-1 month',
      context:
        'Newborns with ARPKD may have very large kidneys that are palpable on exam. In severe cases, the large kidneys can compress the lungs, causing respiratory distress that requires ventilatory support. Blood pressure is monitored closely, as hypertension is common and may need treatment. Kidney function (creatinine, electrolytes) is assessed. Ultrasound confirms the diagnosis. Genetic testing is performed to confirm the type of PKD and guide counseling. Some mildly affected babies may have no symptoms at birth.',
    },
    {
      ageRange: '1-12 months',
      context:
        'Management focuses on controlling blood pressure (often with ACE inhibitors or ARBs), monitoring kidney function, and supporting adequate nutrition and growth. Liver involvement in ARPKD may cause hepatic fibrosis and portal hypertension, which is monitored with imaging and blood tests. Some babies may need treatment for electrolyte imbalances or acidosis. Feeding difficulties are common in babies with significantly enlarged kidneys. Regular follow-up with pediatric nephrology and hepatology is essential.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Children with ARPKD continue to need close monitoring of kidney function, blood pressure, and liver health. Growth may be slower than peers. Some children develop chronic kidney disease that progresses at variable rates. UTIs should be treated promptly. For ADPKD detected in childhood, kidney cysts may be monitored with periodic imaging. Blood pressure monitoring is important even in ADPKD. Genetic counseling helps families understand inheritance patterns and risks for future pregnancies.',
    },
    {
      ageRange: '5 years+',
      context:
        'Long-term outcomes vary significantly. Some children with ARPKD maintain stable kidney function for years, while others progress to end-stage kidney disease requiring dialysis or transplantation. Liver complications may also progress and occasionally require liver transplant. Advances in treatment are improving outcomes. Children with ADPKD detected in childhood are generally monitored with periodic imaging and blood pressure management, with most maintaining good kidney function through childhood. Tolvaptan and other emerging therapies may play a role in the future.',
    },
  ],
  whenNormal: [
    'Your child has been diagnosed with PKD and is being followed by pediatric nephrology',
    'Blood pressure is well controlled with or without medication',
    'Kidney function remains stable on blood tests',
    'Your child is growing and developing appropriately for age',
    'You have received genetic counseling and understand the inheritance pattern',
  ],
  whenToMention: [
    'You notice your baby\'s abdomen seems unusually large or firm',
    'Your child has recurrent urinary tract infections',
    'You are concerned about your child\'s growth or appetite',
    'You have questions about genetic testing or risks for other family members',
  ],
  whenToActNow: [
    'Your newborn is having difficulty breathing, which may be caused by very large kidneys compressing the lungs',
    'Your child has a high fever with back pain or foul-smelling urine, which could indicate a kidney infection',
    'Your child has blood in the urine (hematuria), especially if painful',
    'Your child shows signs of severe hypertension: headache, vomiting, visual changes, or seizures',
    'Your child has signs of worsening kidney function: decreased urine output, swelling, nausea, or fatigue',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['anatomy-scan-findings', 'baby-high-fever-over-104'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Polycystic Kidney Disease in Children. NIDDK, 2024.',
      url: 'https://www.niddk.nih.gov/health-information/kidney-disease/polycystic-kidney-disease',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Autosomal Recessive Polycystic Kidney Disease. Genetic and Rare Diseases Information Center (GARD), 2024.',
      url: 'https://rarediseases.info.nih.gov/diseases/851/autosomal-recessive-polycystic-kidney-disease',
    },
    {
      org: "Children's Hospital",
      citation:
        "Children's Hospital of Philadelphia. Polycystic Kidney Disease in Children.",
      url: 'https://www.chop.edu/conditions-diseases/polycystic-kidney-disease',
    },
  ],
};
