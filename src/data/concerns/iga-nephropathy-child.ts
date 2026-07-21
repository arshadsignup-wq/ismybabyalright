import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'iga-nephropathy-child',
  title: 'IgA Nephropathy (Berger\'s Disease) in Children',
  category: 'medical',
  searchTerms: [
    'IgA nephropathy child',
    'Berger disease child',
    'blood in urine after cold child',
    'cola colored urine child',
    'tea colored urine child',
    'hematuria with upper respiratory infection',
    'synpharyngitic hematuria',
    'glomerulonephritis child',
    'blood in urine child kidney',
    'IgA nephropathy treatment child',
  ],
  quickAnswer:
    'IgA nephropathy (Berger\'s disease) is the most common type of glomerulonephritis worldwide. It occurs when IgA antibodies deposit in the kidneys, causing inflammation. A hallmark feature in children is visible blood in the urine (hematuria) that appears during or shortly after an upper respiratory infection. Most children with IgA nephropathy do well long-term, though some may develop chronic kidney disease over years to decades.',
  byAge: [
    {
      ageRange: '0-2 years',
      context:
        'IgA nephropathy is extremely rare in infants and toddlers. Blood in the urine at this age is more likely related to urinary tract infections, structural abnormalities, or other conditions. Any visible blood in the urine in an infant or toddler should prompt immediate medical evaluation to determine the cause.',
    },
    {
      ageRange: '2-5 years',
      context:
        'IgA nephropathy is uncommon but can occasionally present in this age group. The classic presentation is tea or cola-colored urine that appears during or within 1-2 days of a sore throat or upper respiratory infection (called synpharyngitic hematuria). This differs from post-streptococcal glomerulonephritis, which occurs 1-3 weeks after infection. If your child has dark-colored urine during a cold or sore throat, seek medical evaluation.',
    },
    {
      ageRange: '5-12 years',
      context:
        'IgA nephropathy most commonly presents in older children and adolescents. Episodes of gross hematuria (visible blood in the urine) typically coincide with respiratory infections. Between episodes, microscopic hematuria (blood only visible on urine testing) may persist. A kidney biopsy is needed for definitive diagnosis. Treatment depends on severity: observation for mild disease, ACE inhibitors or ARBs if there is significant protein in the urine, and immunosuppressive therapy for more aggressive forms.',
    },
    {
      ageRange: '12 years+',
      context:
        'Adolescence is a common time for IgA nephropathy to be diagnosed, often after recurrent episodes of gross hematuria with infections. Long-term prognosis depends on the amount of protein in the urine, blood pressure control, and kidney biopsy findings. ACE inhibitors are a cornerstone of treatment for those with proteinuria, as they reduce protein loss and help protect the kidneys. Regular monitoring of kidney function and blood pressure is important throughout life.',
    },
  ],
  whenNormal: [
    'Your child\'s urine appears dark or concentrated due to mild dehydration, and it clears up after drinking more fluids',
    'A urine test done at a routine checkup was completely normal with no blood or protein',
    'Your child had a brief episode of pink-tinged urine related to eating beets, berries, or certain food dyes',
    'Your child is well, growing normally, and has normal blood pressure',
  ],
  whenToMention: [
    'Your child\'s urine looks tea-colored, cola-colored, or pink during or shortly after a cold or sore throat',
    'A routine urinalysis shows trace amounts of blood or protein even though your child seems well',
    'Your child has had more than one episode of dark or bloody-looking urine',
    'Your child has been diagnosed with IgA nephropathy and you have questions about monitoring or treatment',
  ],
  whenToActNow: [
    'Your child has visible blood in the urine along with significant swelling of the face or body, which could indicate a more aggressive form of glomerulonephritis',
    'Your child has dark or bloody urine with decreased urine output, high blood pressure, or severe headache',
    'Your child is producing very little urine or no urine, which may suggest acute kidney injury',
    'Your child with known IgA nephropathy develops sudden worsening of hematuria with new symptoms such as swelling, fatigue, or difficulty breathing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-blood-in-urine', 'uti-signs-baby'],
  sources: [
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. IgA Nephropathy. NIH, 2024.',
      url: 'https://www.niddk.nih.gov/health-information/kidney-disease/iga-nephropathy',
    },
    {
      org: 'ASN',
      citation:
        'Wyatt RJ, Julian BA. IgA Nephropathy. New England Journal of Medicine, 2013; 368:2402-2414.',
      url: 'https://www.nejm.org/doi/full/10.1056/NEJMra1206793',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Blood in Urine (Hematuria). HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Blood-in-Urine-Hematuria.aspx',
    },
  ],
};
