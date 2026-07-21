import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'duplex-kidney-baby',
  title: 'My Baby Has a Duplex Kidney (Duplicated Collecting System)',
  category: 'medical',
  searchTerms: [
    'baby duplex kidney',
    'duplicated collecting system baby',
    'baby two ureters',
    'duplex kidney ultrasound',
    'duplex kidney ureterocele',
    'duplex kidney ectopic ureter',
    'baby duplex kidney treatment',
    'duplex kidney reflux',
    'duplex kidney UTI',
    'duplex kidney surgery',
  ],
  quickAnswer:
    'A duplex kidney (duplicated collecting system) means a kidney has two ureters (tubes draining urine) instead of the usual one. This is one of the most common urinary tract variations, occurring in about 1 in 150 people. Many people with duplex kidneys never know they have one because it causes no problems. In complete duplication, the upper pole ureter may insert in an abnormal location (ectopic ureter), which can cause continuous dribbling of urine, or it may have a ureterocele (balloon-like swelling at the ureter opening). The lower pole ureter may have vesicoureteral reflux. Many cases need no treatment; symptomatic cases are managed surgically.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'A duplex kidney may be detected on prenatal ultrasound, often when hydronephrosis (dilation of the kidney) is seen in the upper or lower pole of one kidney, or when a ureterocele is identified in the bladder. In many cases, duplex kidneys are not detected prenatally at all because they cause no visible abnormality. If found, postnatal imaging is planned to better characterize the anatomy. The prenatal finding alone does not usually change pregnancy management.',
    },
    {
      ageRange: '0-1 month',
      context:
        'If a duplex kidney was suspected prenatally, postnatal renal ultrasound is performed to confirm the diagnosis and evaluate for hydronephrosis, ureterocele, or ectopic ureter insertion. A VCUG (voiding cystourethrogram) is often done to check for vesicoureteral reflux, which is common in the lower pole moiety. If a ureterocele is present, it may obstruct urine flow and need decompression (puncture or incision). Prophylactic antibiotics may be started to prevent UTIs until the anatomy is fully evaluated.',
    },
    {
      ageRange: '1-12 months',
      context:
        'Management depends on whether the duplex kidney is causing any problems. If there is no hydronephrosis, reflux, or obstruction, no treatment is needed beyond periodic monitoring. If vesicoureteral reflux is present, prophylactic antibiotics are typically prescribed to prevent UTIs, and the reflux is monitored as it may resolve with growth. If an ectopic ureter or ureterocele is causing recurrent UTIs or obstruction, surgical intervention may be planned during this period or later. Signs of UTI (fever, fussiness, foul-smelling urine) should be evaluated promptly.',
    },
    {
      ageRange: '1-5 years',
      context:
        'An ectopic ureter in girls may present as continuous dampness or dribbling between normal voidings, because the ureter bypasses the bladder sphincter and drains directly to the vagina or urethra. This becomes more apparent after toilet training. In boys, ectopic ureters always insert above the sphincter, so incontinence is not a feature, but recurrent UTIs or epididymitis may occur. Surgical options include reimplanting the ectopic ureter, removing the non-functioning upper pole of the duplex kidney (heminephrectomy), or ureteral reimplantation for reflux.',
    },
    {
      ageRange: '5 years+',
      context:
        'Long-term outcomes for duplex kidneys are excellent. Many children with incidental duplex kidneys need no intervention at all. Those who required surgery for ectopic ureter, ureterocele, or reflux generally do very well with good kidney function. Follow-up imaging may continue periodically to ensure the kidney is healthy. The main ongoing consideration is prompt treatment of any UTIs to protect kidney function. Most children with duplex kidneys live completely normal lives without restrictions.',
    },
  ],
  whenNormal: [
    'A duplex kidney was found incidentally on imaging with no hydronephrosis, reflux, or other complications',
    'Your baby has a duplex kidney with mild hydronephrosis that is stable or improving on follow-up ultrasounds',
    'Vesicoureteral reflux has resolved on its own with growth',
    'Your child had successful surgery for ectopic ureter or ureterocele and has no ongoing issues',
    'Your child has no urinary symptoms and normal kidney function',
  ],
  whenToMention: [
    'Your baby has been diagnosed with a duplex kidney and you want to understand what it means',
    'Your child seems to have recurrent UTIs',
    'You notice your toilet-trained child is consistently damp between voidings, which could suggest an ectopic ureter',
    'Follow-up imaging shows increasing hydronephrosis in the duplex kidney',
  ],
  whenToActNow: [
    'Your baby has a high fever with no clear source - UTIs need prompt treatment especially in babies with urinary tract anomalies',
    'Your baby has significantly decreased urine output, which may indicate obstruction from a ureterocele',
    'Your child has severe flank or abdominal pain with fever and vomiting, which could indicate a kidney infection (pyelonephritis)',
    'Your newborn has a large ureterocele causing bladder outlet obstruction (difficulty urinating, distended bladder, poor urine stream)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['uti-signs-baby', 'horseshoe-kidney-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'Urology Care Foundation. Duplex System (Duplicated Ureters). American Urological Association, 2024.',
      url: 'https://www.urologyhealth.org/urology-a-z/d/duplex-system',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Duplex Kidney. MedlinePlus, 2024.',
      url: 'https://medlineplus.gov/ency/article/000494.htm',
    },
    {
      org: "Children's Hospital",
      citation:
        "Children's Hospital of Philadelphia. Duplex Kidney and Collecting System.",
      url: 'https://www.chop.edu/conditions-diseases/duplex-kidney',
    },
  ],
};
