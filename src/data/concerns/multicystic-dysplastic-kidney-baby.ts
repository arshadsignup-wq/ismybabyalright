import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'multicystic-dysplastic-kidney-baby',
  title: 'My Baby Has a Multicystic Dysplastic Kidney (MCDK)',
  category: 'medical',
  searchTerms: [
    'baby multicystic dysplastic kidney',
    'MCDK baby',
    'multicystic kidney baby',
    'baby kidney with cysts',
    'non-functioning kidney baby',
    'multicystic dysplastic kidney ultrasound',
    'multicystic dysplastic kidney treatment',
    'MCDK prognosis',
    'baby kidney involutes',
    'multicystic dysplastic kidney vs polycystic',
  ],
  quickAnswer:
    'A multicystic dysplastic kidney (MCDK) is a non-functioning kidney that has been replaced by multiple cysts of varying sizes. It is usually found on prenatal ultrasound and is one of the most common kidney anomalies detected before birth. When only one kidney is affected (unilateral), the other kidney compensates and provides normal function. The MCDK typically shrinks (involutes) and may disappear entirely by age 5. No treatment is needed for unilateral MCDK beyond periodic monitoring with ultrasound. Bilateral MCDK is fatal. There is a small increased risk of problems in the normal opposite kidney, so both kidneys are monitored.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'MCDK is typically diagnosed on a routine prenatal ultrasound. The affected kidney appears as a cluster of cysts of various sizes with no normal kidney tissue visible between them, distinguishing it from hydronephrosis (which shows a central dilated collection). The opposite kidney should be evaluated carefully, as there is a 15-30% chance of associated anomalies (such as vesicoureteral reflux or UPJ obstruction) in the contralateral kidney. Amniotic fluid levels are usually normal when one kidney functions properly.',
    },
    {
      ageRange: '0-1 month',
      context:
        'After birth, a renal ultrasound confirms the diagnosis and evaluates the opposite kidney. A VCUG (voiding cystourethrogram) is often performed to check for vesicoureteral reflux in the contralateral kidney, since reflux is found in about 15-25% of cases. Kidney function tests are usually normal since the normal kidney compensates. Your baby will be referred to a pediatric urologist or nephrologist. Blood pressure monitoring begins at routine well-visits.',
    },
    {
      ageRange: '1-12 months',
      context:
        'Your baby with unilateral MCDK will grow and develop normally. The multicystic kidney is non-functioning and will gradually shrink over time. Follow-up ultrasounds are typically done periodically (every 6-12 months initially) to monitor both the involuting MCDK and the health of the opposite kidney. As with any child with a solitary functioning kidney, prompt evaluation of unexplained fevers is important to rule out UTI and protect the working kidney.',
    },
    {
      ageRange: '1-5 years',
      context:
        'By this age, the MCDK has often significantly decreased in size and may no longer be visible on ultrasound. The opposite kidney continues to compensate by growing larger. Follow-up ultrasounds are usually spaced further apart (every 1-2 years). Historically, nephrectomy (removal of the MCDK) was sometimes performed, but current practice is conservative since the MCDK involutes on its own and the risk of malignancy arising from an MCDK is extremely low.',
    },
    {
      ageRange: '5 years+',
      context:
        'Long-term outcomes for unilateral MCDK are excellent. Most children have completely normal kidney function using their single working kidney. The main considerations are the same as for any person with a solitary functioning kidney: monitoring blood pressure, protecting the kidney from injury, treating UTIs promptly, and staying well-hydrated. Follow-up imaging may continue periodically, but many children can be transitioned to routine pediatric care with periodic blood pressure checks.',
    },
  ],
  whenNormal: [
    'MCDK was diagnosed prenatally or postnatally, the opposite kidney is functioning normally, and your baby is growing well',
    'Follow-up ultrasounds show the MCDK is stable or shrinking (involuting) over time',
    'Kidney function tests are normal',
    'Blood pressure is normal at routine checks',
    'Your baby has no urinary symptoms and is meeting all developmental milestones',
  ],
  whenToMention: [
    'You have questions about the difference between MCDK and polycystic kidney disease',
    'You are concerned about the size of the MCDK or it appears to be growing rather than shrinking on ultrasound',
    'Your child has had a UTI and you want to discuss how to protect the functioning kidney',
    'You are wondering about activity restrictions or contact sports for your child',
  ],
  whenToActNow: [
    'Your baby has a fever with no obvious source - a UTI must be ruled out promptly to protect the single functioning kidney',
    'Your child has blood in the urine, abdominal pain, or signs of a kidney infection (high fever, back pain, vomiting)',
    'Your child has significantly decreased urine output, which may indicate a problem with the functioning kidney',
    'The MCDK appears to be growing significantly on follow-up ultrasound rather than involuting, which is rare but warrants further evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['anatomy-scan-findings', 'polycystic-kidney-disease-baby'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Multicystic Dysplastic Kidney. Genetic and Rare Diseases Information Center (GARD), 2024.',
      url: 'https://rarediseases.info.nih.gov/diseases/7018/multicystic-dysplastic-kidney',
    },
    {
      org: 'AAP',
      citation:
        'Urology Care Foundation. Multicystic Dysplastic Kidney. American Urological Association, 2024.',
      url: 'https://www.urologyhealth.org/urology-a-z/m/multicystic-dysplastic-kidney',
    },
    {
      org: "Children's Hospital",
      citation:
        "Children's Hospital of Philadelphia. Multicystic Dysplastic Kidney (MCDK).",
      url: 'https://www.chop.edu/conditions-diseases/multicystic-dysplastic-kidney',
    },
  ],
};
