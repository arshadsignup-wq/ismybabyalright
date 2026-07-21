import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bladder-exstrophy-baby',
  title: 'My Baby Has Bladder Exstrophy',
  category: 'medical',
  searchTerms: [
    'baby bladder exstrophy',
    'bladder outside baby abdomen',
    'bladder exstrophy surgery',
    'bladder exstrophy treatment',
    'bladder exstrophy epispadias',
    'bladder exstrophy diagnosis',
    'bladder exstrophy outcomes',
    'bladder exstrophy repair',
    'baby exposed bladder',
    'bladder exstrophy prognosis',
  ],
  quickAnswer:
    'Bladder exstrophy is a rare birth defect (occurring in about 1 in 30,000-50,000 births, more common in boys) where the bladder is open and exposed on the outside of the abdomen rather than being enclosed inside the body. It is typically associated with epispadias (malformation of the urethra) and a widened pubic bone. Surgical repair begins in the first days of life and may require multiple staged procedures. The goal of treatment is to achieve a functional bladder with continence, good kidney function, and acceptable cosmetic appearance. Outcomes have improved significantly with experienced surgical centers.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'Bladder exstrophy may be suspected on prenatal ultrasound when the bladder is not visualized in its normal position, or it may not be detected until birth. If diagnosed prenatally, you will be referred to a pediatric urology center with expertise in exstrophy repair. Delivery should be planned at or near this center. Vaginal delivery is generally safe. Connecting with the Association for the Bladder Exstrophy Community (A-BE-C) or similar organizations can provide invaluable peer support and information before your baby arrives.',
    },
    {
      ageRange: '0-72 hours',
      context:
        'At birth, the exposed bladder plate is visible on the lower abdomen. The bladder is kept moist with plastic wrap or moist dressings. Two main surgical approaches exist: modern staged repair of exstrophy (MSRE), where initial closure is done within the first 72 hours, or complete primary repair of exstrophy (CPRE), where the entire reconstruction is attempted in a single early operation. Initial closure involves placing the bladder back inside the pelvis and closing the abdominal wall, often with pelvic osteotomies (cuts in the pelvic bones) to bring the pubic bones together. Your baby will be cared for in the NICU.',
    },
    {
      ageRange: '1-6 months',
      context:
        'After initial closure, your baby recovers in the hospital for several weeks. The legs may be immobilized temporarily to protect the pelvic repair. A catheter drains urine while the bladder heals. After discharge, your baby is monitored for bladder growth and kidney health with regular ultrasounds. Urine cultures are checked if there are signs of UTI. The goal during this phase is for the closed bladder to gradually increase in capacity. Your baby will be followed closely by the pediatric urology team.',
    },
    {
      ageRange: '6 months - 5 years',
      context:
        'In the staged repair approach, additional surgeries are performed during this period. Epispadias repair is typically done around 6-12 months to reconstruct the urethra and penis (in boys) or urethra (in girls). Bladder neck reconstruction (to achieve urinary continence) is usually done later, typically when the child is 4-5 years old and developmentally ready for toilet training, and when the bladder has grown to adequate capacity. Regular follow-up monitors bladder capacity, kidney function, and overall development.',
    },
    {
      ageRange: '5 years+',
      context:
        'After bladder neck reconstruction, many children achieve daytime continence, though this can take time and patience. Some children need additional procedures such as bladder augmentation (using a segment of bowel to increase bladder size) or continent diversion procedures (like a Mitrofanoff) if continence is not achieved. Clean intermittent catheterization may be needed to empty the bladder. Long-term follow-up with urology continues through adolescence and into adulthood. Sexual and reproductive function is addressed as children mature. Experienced exstrophy centers achieve the best outcomes.',
    },
  ],
  whenNormal: [
    'Your baby\'s bladder closure was successful and the wound is healing well',
    'Follow-up ultrasounds show good bladder growth and normal kidney function',
    'Your child is progressing through the staged surgical plan as expected',
    'Your child is achieving continence (even if slowly) after bladder neck reconstruction',
    'You are being followed at a center experienced in exstrophy management',
  ],
  whenToMention: [
    'You are uncertain about the surgical plan or timing of the next procedure',
    'Your child is having difficulty achieving urinary continence after reconstruction',
    'You have questions about your child\'s long-term urinary, sexual, or reproductive function',
    'You want to connect with other families affected by bladder exstrophy',
  ],
  whenToActNow: [
    'Your baby develops wound separation (dehiscence) or prolapse of the bladder through the closure site - this is a surgical emergency',
    'Your baby has signs of UTI: fever, foul-smelling urine, irritability, or poor feeding - UTIs need prompt treatment to protect the kidneys',
    'Your baby has significantly decreased urine output or no urine output, which may indicate obstruction',
    'You notice signs of infection at the surgical site: increasing redness, swelling, warmth, drainage, or fever',
    'Your child has sudden inability to urinate, severe abdominal pain, or distension',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['hypospadias'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Bladder Exstrophy. Genetic and Rare Diseases Information Center (GARD), 2024.',
      url: 'https://rarediseases.info.nih.gov/diseases/5972/bladder-exstrophy',
    },
    {
      org: 'AAP',
      citation:
        'Urology Care Foundation. Bladder Exstrophy. American Urological Association, 2024.',
      url: 'https://www.urologyhealth.org/urology-a-z/b/bladder-exstrophy',
    },
    {
      org: "Children's Hospital",
      citation:
        "Johns Hopkins Medicine. Bladder Exstrophy.",
      url: 'https://www.hopkinsmedicine.org/health/conditions-and-diseases/bladder-exstrophy',
    },
  ],
};
