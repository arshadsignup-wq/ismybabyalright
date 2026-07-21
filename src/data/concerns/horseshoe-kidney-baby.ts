import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'horseshoe-kidney-baby',
  title: 'My Baby Has a Horseshoe Kidney',
  category: 'medical',
  searchTerms: [
    'baby horseshoe kidney',
    'horseshoe kidney diagnosis',
    'horseshoe kidney ultrasound',
    'fused kidneys baby',
    'horseshoe kidney treatment',
    'horseshoe kidney problems',
    'renal fusion anomaly baby',
    'horseshoe kidney UTI',
    'horseshoe kidney complications',
    'horseshoe kidney prognosis',
  ],
  quickAnswer:
    'A horseshoe kidney is the most common kidney fusion anomaly, occurring in approximately 1 in 400-600 people. The lower portions of both kidneys are fused together by a bridge of tissue (isthmus), forming a U or horseshoe shape. Most horseshoe kidneys are found incidentally on imaging done for other reasons and cause no problems at all. People with horseshoe kidneys have a slightly higher risk of urinary tract infections, kidney stones, and hydronephrosis (urine backup), but many go through life without ever knowing they have this condition.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'A horseshoe kidney may be detected on a routine prenatal ultrasound, though it is more commonly found after birth. If detected prenatally, your doctor may recommend postnatal imaging to confirm the diagnosis and check for any associated urinary tract issues. In most cases, a prenatal finding of horseshoe kidney does not change pregnancy management. Rarely, it is associated with Turner syndrome or other chromosomal conditions, in which case additional evaluation may be recommended.',
    },
    {
      ageRange: '0-6 months',
      context:
        'If a horseshoe kidney is diagnosed after birth (often found incidentally during imaging for another condition), a renal ultrasound will evaluate the kidney structure and check for hydronephrosis or other issues. In most cases, kidney function is completely normal and no treatment is needed. Your pediatrician may refer you to a pediatric urologist or nephrologist for an initial evaluation to ensure everything looks healthy.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most babies with a horseshoe kidney are completely healthy and meet all milestones normally. If initial imaging showed mild hydronephrosis, follow-up ultrasounds may be done to monitor for changes. The main considerations are awareness of the slightly higher risk of UTIs. Signs of UTI in a baby (fever without other source, fussiness, foul-smelling urine) should be evaluated promptly by your pediatrician.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Your child with a horseshoe kidney should continue routine pediatric care. The slightly increased risk of UTI and kidney stones means any unexplained fevers or urinary symptoms should be brought to your pediatrician\'s attention. Most children need no ongoing specialist follow-up if initial imaging was normal. If hydronephrosis or reflux was present, periodic ultrasound monitoring may continue.',
    },
    {
      ageRange: '3 years+',
      context:
        'Long-term outlook for horseshoe kidney is excellent. Most people with this condition lead entirely normal lives. Your child should stay well-hydrated and any urinary symptoms should be evaluated. Rarely, surgical intervention is needed for complications like ureteropelvic junction obstruction (UPJ obstruction) or recurrent kidney stones. It is helpful to inform future healthcare providers about the horseshoe kidney diagnosis for reference during any abdominal imaging or procedures.',
    },
  ],
  whenNormal: [
    'A horseshoe kidney was found incidentally on imaging and your child has normal kidney function',
    'Initial evaluation shows no hydronephrosis, reflux, or other urinary tract issues',
    'Your child is growing and developing normally with no urinary symptoms',
    'Follow-up imaging shows stable findings with no progression of any mild abnormalities',
  ],
  whenToMention: [
    'Your child has recurrent urinary tract infections',
    'You are told your baby has hydronephrosis on ultrasound and a horseshoe kidney',
    'Your child has unexplained abdominal or flank pain',
    'You have questions about long-term monitoring or activity restrictions',
  ],
  whenToActNow: [
    'Your baby has a high fever with no clear source, which could indicate a UTI requiring prompt treatment',
    'Your child has severe abdominal or flank pain with blood in the urine, which may indicate a kidney stone or other urgent issue',
    'Your child has signs of a serious UTI: high fever, vomiting, lethargy, and back or belly pain',
    'Your baby has significantly decreased urine output or no urine output',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['uti-signs-baby'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Horseshoe Kidney. Genetic and Rare Diseases Information Center (GARD), 2024.',
      url: 'https://rarediseases.info.nih.gov/diseases/10753/horseshoe-kidney',
    },
    {
      org: 'AAP',
      citation:
        'Urology Care Foundation. Horseshoe Kidney. American Urological Association, 2024.',
      url: 'https://www.urologyhealth.org/urology-a-z/h/horseshoe-kidney',
    },
    {
      org: "Children's Hospital",
      citation:
        "Children's Hospital of Philadelphia. Horseshoe Kidney.",
      url: 'https://www.chop.edu/conditions-diseases/horseshoe-kidney',
    },
  ],
};
