import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'posterior-urethral-valves-baby',
  title: 'My Baby Has Posterior Urethral Valves (PUV)',
  category: 'medical',
  searchTerms: [
    'baby posterior urethral valves',
    'PUV baby',
    'baby weak urine stream',
    'baby dribbling urine',
    'baby urinary obstruction',
    'posterior urethral valves diagnosis',
    'posterior urethral valves surgery',
    'baby bilateral hydronephrosis',
    'baby distended bladder',
    'posterior urethral valves outcomes',
  ],
  quickAnswer:
    'Posterior urethral valves (PUV) are abnormal folds of tissue in the urethra of boys that block the flow of urine out of the bladder. PUV is the most common cause of lower urinary tract obstruction in male newborns. It is often detected on prenatal ultrasound when bilateral hydronephrosis (swelling of both kidneys) and a distended bladder are seen. After birth, boys may have a weak or dribbling urine stream. Treatment involves cystoscopic valve ablation (destroying the valves through a scope). Long-term kidney and bladder function monitoring is essential, as PUV can affect kidney development.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'PUV is often suspected on prenatal ultrasound when bilateral hydronephrosis (dilated kidneys), a thick-walled distended bladder, and a dilated posterior urethra ("keyhole sign") are seen. Oligohydramnios (low amniotic fluid) can occur in severe cases because fetal urine contributes to amniotic fluid. Severe cases may be associated with lung underdevelopment (pulmonary hypoplasia) due to reduced amniotic fluid. Fetal intervention (vesicoamniotic shunting) may be considered in severe cases. Delivery is planned at a center with pediatric urology and NICU capabilities.',
    },
    {
      ageRange: '0-1 week',
      context:
        'After birth, a catheter is placed in the bladder to drain urine and relieve the obstruction. Blood tests assess kidney function (creatinine). A voiding cystourethrogram (VCUG) and renal ultrasound confirm the diagnosis and evaluate the kidneys and bladder. Once the baby is stable, cystoscopic valve ablation is performed - a small scope is passed through the urethra to visualize and destroy the obstructing valves. In very small or premature babies, a vesicostomy (opening in the bladder to the skin) may be performed instead, with valve ablation done later.',
    },
    {
      ageRange: '1-6 months',
      context:
        'After valve ablation, follow-up ultrasounds monitor for improvement in hydronephrosis and kidney function. Blood tests track kidney function over time. Some degree of kidney damage may be irreversible, depending on how long and how severely the kidneys were affected before treatment. Vesicoureteral reflux (urine backing up to the kidneys) is common and may resolve on its own. Prophylactic antibiotics may be prescribed to prevent urinary tract infections.',
    },
    {
      ageRange: '6 months - 3 years',
      context:
        'Ongoing monitoring of kidney function, bladder function, and growth is essential. Some boys develop "valve bladder syndrome" where the bladder remains thick-walled and does not empty well, even after the valves are removed. This can require clean intermittent catheterization (CIC) to help empty the bladder. Urinary tract infections should be treated promptly to protect kidney function. Toilet training may be delayed compared to peers.',
    },
    {
      ageRange: '3 years+',
      context:
        'Long-term follow-up with pediatric urology and nephrology is important throughout childhood and into adulthood. About one-third of boys with PUV may develop chronic kidney disease over time. Bladder dysfunction may persist and require ongoing management. Regular monitoring of kidney function, blood pressure, and growth ensures any issues are caught early. With modern management, many boys with PUV live healthy, active lives.',
    },
  ],
  whenNormal: [
    'PUV was diagnosed and your baby has had successful valve ablation with good urine output',
    'Your baby\'s kidney function is stable and being monitored by pediatric urology and nephrology',
    'Hydronephrosis is improving on follow-up ultrasounds',
    'Your baby is growing well and making adequate wet diapers',
    'Your child is being followed long-term as recommended',
  ],
  whenToMention: [
    'Your baby boy has a persistently weak or dribbling urine stream',
    'You notice your baby strains or seems uncomfortable when urinating',
    'Your child has recurrent urinary tract infections',
    'You have concerns about your child\'s bladder habits or toilet training progress',
  ],
  whenToActNow: [
    'Your baby has significantly decreased urine output or no urine output, which may indicate obstruction',
    'Your baby has a fever with foul-smelling urine, which could indicate a urinary tract infection requiring urgent treatment to protect kidney function',
    'Your baby is irritable, not feeding well, and has a distended abdomen',
    'Your baby appears increasingly unwell with vomiting, lethargy, or poor feeding, which may indicate worsening kidney function',
    'A prenatal ultrasound shows severely dilated kidneys, distended bladder, and very low amniotic fluid - discuss urgently with your maternal-fetal medicine specialist',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-hydrocephalus-signs', 'uti-signs-baby'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Posterior Urethral Valves. MedlinePlus Medical Encyclopedia, 2024.',
      url: 'https://medlineplus.gov/ency/article/001271.htm',
    },
    {
      org: 'AAP',
      citation:
        'Urology Care Foundation. Posterior Urethral Valves. American Urological Association, 2024.',
      url: 'https://www.urologyhealth.org/urology-a-z/p/posterior-urethral-valves',
    },
    {
      org: "Children's Hospital",
      citation:
        "Children's Hospital of Philadelphia. Posterior Urethral Valves.",
      url: 'https://www.chop.edu/conditions-diseases/posterior-urethral-valves',
    },
  ],
};
