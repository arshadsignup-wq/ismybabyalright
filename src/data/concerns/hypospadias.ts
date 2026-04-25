import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hypospadias',
  title: 'My Baby Has Hypospadias',
  category: 'medical',
  searchTerms: [
    'baby hypospadias',
    'hypospadias symptoms',
    'hypospadias surgery',
    'urethra opening wrong place',
    'hypospadias repair',
    'baby penis abnormality',
    'hypospadias circumcision',
    'hypospadias treatment',
    'hypospadias outcomes',
    'baby urethral opening',
  ],
  quickAnswer:
    'Hypospadias is a condition where the opening of the urethra is on the underside of the penis rather than at the tip. It occurs in about 1 in 200 boys and ranges from mild to more complex. Most cases are repaired surgically between 6-18 months of age with excellent outcomes. If your baby has hypospadias, do not circumcise - the foreskin may be needed for surgical repair.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Hypospadias is usually diagnosed at birth during the newborn exam. Your pediatrician will note the location of the urethral opening and refer you to a pediatric urologist. It\'s very important NOT to circumcise your baby if hypospadias is present - the foreskin tissue is often used during surgical repair. Your urologist will examine your baby and discuss the timing of surgery.',
    },
    {
      ageRange: '3-6 months',
      context:
        'During this period, you\'ll likely see a pediatric urologist for evaluation and surgical planning. Mild hypospadias may not require surgery if the opening is close to the tip and your baby can urinate in a straight stream. More significant hypospadias will be repaired surgically, typically scheduled for 6-18 months of age.',
    },
    {
      ageRange: '6-18 months',
      context:
        'This is the most common age for hypospadias repair. The surgery is usually done as an outpatient procedure. Your surgeon will move the urethral opening to the tip of the penis and straighten any curvature. After surgery, your baby may have a catheter for a few days and will need careful wound care. Most boys heal well within a few weeks.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'If surgery was done earlier, your child will have follow-up visits to ensure proper healing and function. Occasionally, a second surgery is needed to address complications like fistula (small opening) or stricture (narrowing). If surgery hasn\'t been done yet, it can still be performed successfully at this age.',
    },
    {
      ageRange: '3 years+',
      context:
        'Most children who have had hypospadias repair have excellent long-term outcomes. Your child should be able to urinate normally and will have normal sexual function as they grow. Follow-up with urology may continue periodically through childhood to monitor development. Any concerns about urination or healing should be discussed with your urologist.',
    },
  ],
  whenNormal: [
    'Your baby was diagnosed with hypospadias and is being followed by a pediatric urologist',
    'Your baby can urinate without difficulty and is gaining weight normally',
    'Surgery has been scheduled and you understand the pre- and post-operative care',
    'Your baby has recovered well from hypospadias repair and is urinating normally',
    'You\'re following up with urology as recommended',
  ],
  whenToMention: [
    'You\'ve noticed the urethral opening seems to be in an unusual location',
    'Your baby has difficulty urinating or the stream is unusual',
    'You have questions about surgery timing or what to expect',
    'Your baby had hypospadias repair and you have concerns about healing',
  ],
  whenToActNow: [
    'Your baby is having difficulty urinating or seems in pain when urinating',
    'After hypospadias repair, you notice significant bleeding, swelling, or signs of infection (redness, warmth, pus)',
    'The catheter becomes dislodged before it\'s scheduled to be removed',
    'Your baby has a fever after hypospadias surgery',
    'You notice new openings, persistent leaking, or worsening of the repair site',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hypospadias. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Hypospadias.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Urological Association. Hypospadias. Urology Care Foundation, 2023.',
      url: 'https://www.urologyhealth.org/urology-a-z/h/hypospadias',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Management of Hypospadias. Pediatrics, 2020.',
      url: 'https://publications.aap.org/pediatrics/article/146/4/e2020016352/33463/Hypospadias',
    },
  ],
};
