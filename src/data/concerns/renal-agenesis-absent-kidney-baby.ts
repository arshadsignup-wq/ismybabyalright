import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'renal-agenesis-absent-kidney-baby',
  title: 'My Baby Has Renal Agenesis (Absent Kidney)',
  category: 'medical',
  searchTerms: [
    'baby missing kidney',
    'baby born with one kidney',
    'renal agenesis baby',
    'unilateral renal agenesis',
    'bilateral renal agenesis',
    'solitary kidney baby',
    'absent kidney baby',
    'baby single kidney',
    'renal agenesis prognosis',
    'renal agenesis diagnosis',
  ],
  quickAnswer:
    'Renal agenesis means one or both kidneys did not develop. Unilateral renal agenesis (one kidney missing) occurs in about 1 in 1,000 births and is usually found incidentally on imaging - the remaining kidney compensates by growing larger and typically provides completely normal kidney function. Bilateral renal agenesis (both kidneys missing) is fatal and results in Potter sequence due to absence of fetal urine and amniotic fluid. For unilateral renal agenesis, the prognosis is generally excellent, though the single kidney should be protected and monitored throughout life.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'Unilateral renal agenesis may be detected on prenatal ultrasound when only one kidney is visible, or it may be missed. The remaining kidney often undergoes compensatory hypertrophy (grows larger). Amniotic fluid levels are usually normal with one functioning kidney. Bilateral renal agenesis causes severe oligohydramnios (very low amniotic fluid) leading to Potter sequence: pulmonary hypoplasia (underdeveloped lungs), characteristic facial features, and limb abnormalities. Bilateral renal agenesis is not compatible with life.',
    },
    {
      ageRange: '0-1 month',
      context:
        'If unilateral renal agenesis is diagnosed or suspected, a renal ultrasound confirms the absence of one kidney and evaluates the remaining kidney. The solitary kidney is often already larger than expected (compensatory hypertrophy), which is a normal adaptive response. A VCUG (voiding cystourethrogram) may be recommended to check for vesicoureteral reflux in the remaining kidney. Kidney function tests (creatinine) are usually normal. Your baby will be referred to pediatric urology or nephrology for initial evaluation.',
    },
    {
      ageRange: '1-12 months',
      context:
        'Your baby with a single kidney should grow and develop completely normally. The remaining kidney provides adequate function for a healthy life. Follow-up imaging may be done to monitor the solitary kidney. Prompt evaluation of fevers is recommended since UTIs need to be treated quickly to protect the only kidney. Your pediatrician will monitor blood pressure at routine visits, as people with a solitary kidney have a slightly higher risk of developing hypertension later in life.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Most children with a solitary kidney live entirely normal lives. Your pediatrician will monitor blood pressure and kidney function periodically. It is important to treat any UTIs promptly to protect the single kidney. As your child grows, discuss with your doctor whether contact sports that could cause kidney injury (like football or martial arts) should be limited or played with protective equipment. Adequate hydration and a healthy diet support kidney health.',
    },
    {
      ageRange: '5 years+',
      context:
        'People with a single kidney generally have an excellent long-term prognosis. The main considerations are protecting the kidney from injury and monitoring kidney function and blood pressure over time. The American Academy of Pediatrics recommends individual risk assessment for contact sports rather than a blanket ban. Your child should know about their condition so they can inform future healthcare providers. Kidney donations from people with a solitary kidney are not possible, which is important for family planning purposes.',
    },
  ],
  whenNormal: [
    'Your baby has one functioning kidney that is working well and growing to compensate',
    'Kidney function tests are normal',
    'Blood pressure is normal at routine checks',
    'Your baby is growing and developing at expected rates',
    'You are following up with nephrology or urology as recommended',
  ],
  whenToMention: [
    'Your baby has an unexplained fever that could indicate a UTI - prompt evaluation protects the single kidney',
    'You have questions about activity restrictions or sports participation for your child',
    'You want to discuss long-term monitoring for your child\'s solitary kidney',
    'You are concerned about genetic implications for future pregnancies',
  ],
  whenToActNow: [
    'Your baby has a high fever with no clear source, which could be a UTI and requires urgent evaluation to protect the only kidney',
    'Your child has blood in the urine, especially after an injury',
    'Your child has signs of decreased kidney function: significant swelling, decreased urine output, nausea, or fatigue',
    'Your child sustained a significant abdominal or flank injury and has pain, swelling, or blood in urine',
    'Your child has persistently elevated blood pressure',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['anatomy-scan-findings', 'horseshoe-kidney-baby'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Unilateral Renal Agenesis. Genetic and Rare Diseases Information Center (GARD), 2024.',
      url: 'https://rarediseases.info.nih.gov/diseases/5437/unilateral-renal-agenesis',
    },
    {
      org: 'AAP',
      citation:
        'Urology Care Foundation. Solitary Kidney. American Urological Association, 2024.',
      url: 'https://www.urologyhealth.org/urology-a-z/s/solitary-kidney',
    },
    {
      org: "Children's Hospital",
      citation:
        "Boston Children's Hospital. Renal Agenesis.",
      url: 'https://www.childrenshospital.org/conditions/renal-agenesis',
    },
  ],
};
