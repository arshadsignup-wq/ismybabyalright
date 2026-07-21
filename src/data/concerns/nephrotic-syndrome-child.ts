import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nephrotic-syndrome-child',
  title: 'Nephrotic Syndrome in Children',
  category: 'medical',
  searchTerms: [
    'nephrotic syndrome child',
    'puffy eyes baby morning',
    'swollen face child kidney',
    'protein in urine child',
    'edema child swelling',
    'nephrotic syndrome relapse',
    'minimal change disease child',
    'foamy urine child',
    'swollen belly child fluid',
    'nephrotic syndrome steroid treatment',
  ],
  quickAnswer:
    'Nephrotic syndrome occurs when the kidneys leak large amounts of protein into the urine, leading to swelling (edema) around the eyes, feet, and belly. The most common type in children is minimal change disease, which responds to steroid treatment in about 90% of cases. While the condition often relapses, most children eventually outgrow it and retain normal kidney function long-term.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Nephrotic syndrome is rare in infants under 1 year. When it occurs in this age group, it is often called congenital or infantile nephrotic syndrome, which may be caused by genetic mutations (such as NPHS1 or NPHS2 genes). Congenital nephrotic syndrome is typically more resistant to steroid treatment than the childhood form and may require specialized management including albumin infusions, nutritional support, and sometimes kidney transplantation.',
    },
    {
      ageRange: '1-5 years',
      context:
        'This is the peak age for childhood nephrotic syndrome. Minimal change disease accounts for about 80-90% of cases in this age group. Parents typically notice puffy eyelids in the morning, swelling of the feet and ankles later in the day, and a swollen abdomen. The urine may appear foamy. Treatment with oral corticosteroids (prednisone/prednisolone) usually produces remission within 4 weeks. Relapses are common, occurring in about 60-80% of children.',
    },
    {
      ageRange: '5-12 years',
      context:
        'Nephrotic syndrome can present or continue relapsing in school-age children. Children in this age group may notice that their clothes or shoes feel tight, or that their face looks puffy in the morning. A kidney biopsy may be recommended if the child does not respond to initial steroid therapy or if the presentation is atypical (such as persistent blood in the urine or elevated blood pressure). Steroid-sparing agents like cyclophosphamide, mycophenolate, or calcineurin inhibitors may be used for frequently relapsing cases.',
    },
    {
      ageRange: '12 years+',
      context:
        'Adolescents with nephrotic syndrome are more likely to have forms other than minimal change disease, such as focal segmental glomerulosclerosis (FSGS). A kidney biopsy is more commonly performed in this age group. Medication adherence can be challenging in teenagers, and the psychosocial impact of steroid side effects (weight gain, mood changes, acne) should be discussed. Many children who had minimal change disease earlier will have outgrown their relapses by adolescence.',
    },
  ],
  whenNormal: [
    'Mild puffiness around the eyes in the morning that resolves quickly and is not associated with any other swelling or illness',
    'Your child had a normal urinalysis at a recent checkup with no protein detected',
    'Occasional swelling of the feet or ankles after a long day of activity that resolves with rest',
    'Your child is eating, growing, and urinating normally',
  ],
  whenToMention: [
    'Your child has persistent puffiness around the eyes, especially in the morning, that does not resolve by midday',
    'You notice swelling in your child\'s feet, ankles, or hands that seems to be worsening over days',
    'Your child\'s urine appears unusually foamy or bubbly',
    'Your child has had nephrotic syndrome before and you notice early signs of relapse such as returning facial puffiness or decreased urine output',
  ],
  whenToActNow: [
    'Your child develops rapid and significant swelling of the face, abdomen, or extremities over hours to days, as this may indicate new-onset or relapsing nephrotic syndrome requiring urgent evaluation',
    'Your child with known nephrotic syndrome develops fever, severe abdominal pain, or redness and warmth of the skin, which could indicate spontaneous bacterial peritonitis or cellulitis, both serious complications',
    'Your child has difficulty breathing or appears short of breath along with abdominal or body swelling, which may indicate significant fluid accumulation',
    'Your child has significantly decreased urine output or is producing very little urine despite drinking fluids',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-swollen-eye', 'baby-dehydration-hot-weather'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Nephrotic Syndrome in Children. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Nephrotic-Syndrome.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Childhood Nephrotic Syndrome. NIH, 2024.',
      url: 'https://www.niddk.nih.gov/health-information/kidney-disease/children/childhood-nephrotic-syndrome',
    },
    {
      org: 'ASN',
      citation:
        'Noone DG, Iijima K, Parekh R. Idiopathic Nephrotic Syndrome in Children. Lancet, 2018.',
      url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(18)30536-1/fulltext',
    },
  ],
};
