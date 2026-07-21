import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'alport-syndrome-baby',
  title: 'Alport Syndrome in Children',
  category: 'medical',
  searchTerms: [
    'Alport syndrome child',
    'Alport syndrome baby',
    'hereditary nephritis child',
    'blood in urine hearing loss child',
    'kidney disease hearing loss',
    'COL4A mutation child',
    'familial hematuria child',
    'progressive kidney disease child',
    'microscopic hematuria child',
    'Alport syndrome treatment',
  ],
  quickAnswer:
    'Alport syndrome is a genetic condition that affects the kidneys, hearing, and eyes due to mutations in genes (COL4A3, COL4A4, or COL4A5) that produce type IV collagen in basement membranes. Children typically have microscopic blood in the urine from early childhood, with progressive hearing loss developing over time. The X-linked form is most common and more severe in males, who may progress to kidney failure in their teens to thirties. Early treatment with ACE inhibitors can significantly delay kidney disease progression.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Alport syndrome is rarely diagnosed in infancy unless there is a known family history. Microscopic hematuria (blood visible only on urine testing) may be present from birth but is usually found incidentally. Newborn hearing screening is typically normal at this stage. If there is a family history of Alport syndrome, early genetic testing and baseline hearing evaluation can be arranged through a pediatric nephrologist.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Microscopic hematuria is often the earliest and sometimes only finding in young children with Alport syndrome. It may be discovered on routine urinalysis or during evaluation for another issue. Episodes of gross (visible) hematuria may occur with febrile illnesses or upper respiratory infections. Hearing is usually still normal at this age. If your child has persistent microscopic hematuria, especially with a family history of kidney disease or hearing loss, your pediatrician may refer to a nephrologist for evaluation.',
    },
    {
      ageRange: '5-12 years',
      context:
        'By school age, boys with X-linked Alport syndrome may begin to show proteinuria (protein in urine) in addition to hematuria. Sensorineural hearing loss typically develops during late childhood or early adolescence and initially affects high-frequency sounds. An audiogram should be performed regularly. Eye findings such as anterior lenticonus (cone-shaped lens) or retinal flecks may be detected on ophthalmologic exam. Starting ACE inhibitor therapy when proteinuria develops has been shown to significantly delay progression to kidney failure.',
    },
    {
      ageRange: '12 years+',
      context:
        'Adolescent males with X-linked Alport syndrome often have progressive proteinuria and may develop declining kidney function. Hearing loss becomes more noticeable and may affect conversational frequencies. Regular monitoring by a nephrologist with blood pressure control, ACE inhibitor therapy, and audiologic and ophthalmologic follow-up is essential. Females with X-linked Alport syndrome (carriers) usually have a milder course, often with only microscopic hematuria, though some develop significant kidney disease later in life.',
    },
  ],
  whenNormal: [
    'A single urinalysis showing trace blood that is not confirmed on repeat testing',
    'Your child\'s hearing screening at school or at the pediatrician was normal',
    'Your child has no family history of kidney disease, hearing loss, or Alport syndrome and has normal urine tests',
    'Transient pink or dark urine that is explained by food coloring, beets, or dehydration and does not recur',
  ],
  whenToMention: [
    'Your child has persistent microscopic hematuria found on two or more urine tests',
    'There is a family history of kidney failure, dialysis, kidney transplant, or unexplained hearing loss, especially in males',
    'Your child has been diagnosed with Alport syndrome and you have questions about treatment, monitoring, or genetic implications for family members',
    'Your child seems to have difficulty hearing or is not responding normally to sounds or speech',
  ],
  whenToActNow: [
    'Your child has visible blood in the urine that persists for more than a day or is accompanied by pain, swelling, or decreased urine output',
    'Your child with known Alport syndrome develops sudden worsening of symptoms such as significant swelling, high blood pressure, or severe fatigue indicating possible kidney function decline',
    'Your child has sudden hearing loss or a rapid change in hearing ability',
    'Your child develops vision changes, eye pain, or other eye symptoms that could relate to anterior lenticonus or other ocular findings of Alport syndrome',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['hearing-loss-signs-baby', 'baby-blood-in-urine'],
  sources: [
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Alport Syndrome. NIH, 2023.',
      url: 'https://www.niddk.nih.gov/health-information/kidney-disease/alport-syndrome',
    },
    {
      org: 'ASN',
      citation:
        'Kashtan CE. Alport Syndrome: An Inherited Disorder of Renal, Ocular, and Cochlear Basement Membranes. Journal of the American Society of Nephrology, 1999.',
      url: 'https://jasn.asnjournals.org/content/10/11/2450',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Evaluation of Hematuria in Children. Pediatrics in Review, 2021.',
      url: 'https://publications.aap.org/pediatricsinreview/article/42/8/440/179930/Hematuria-in-Children',
    },
  ],
};
