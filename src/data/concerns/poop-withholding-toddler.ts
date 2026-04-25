import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'poop-withholding-toddler',
  title: 'My Toddler Holds In Their Poop',
  category: 'digestive',
  searchTerms: [
    'toddler holding poop in',
    'toddler won\'t poop',
    'toddler stool withholding',
    'child afraid to poop',
    'toddler refuses to poop on toilet',
    'toddler holds poop potty training',
    'stool withholding toddler',
    'child scared to poop',
    'toddler only poops in diaper',
    'toddler constipated from holding poop',
  ],
  quickAnswer:
    'Stool withholding is very common in toddlers and is often triggered by a painful bowel movement that makes the child afraid to poop again. It can also emerge during potty training when children feel pressure or anxiety about using the toilet. The resulting cycle of withholding, harder stools, and pain can be frustrating, but it is highly treatable with a combination of stool softeners, dietary changes, and patient, pressure-free encouragement.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'Stool withholding can begin at this age, usually triggered by a single painful bowel movement that frightens the child. You may notice your toddler stiffening their legs, clenching their buttocks, crossing their legs, or hiding in a corner when they feel the urge to poop. They are not trying to be difficult  -  they are genuinely trying to avoid pain. Talk to your pediatrician about using a stool softener to break the cycle and make bowel movements comfortable again.',
    },
    {
      ageRange: '18-24 months',
      context:
        'This age marks the beginning of potty training readiness for some children, and introducing the toilet too early or with too much pressure can trigger stool withholding. If your child is withholding, it is best to pause potty training and focus first on making pooping comfortable and painless. Continue using diapers or pull-ups without shame, soften stools with medication if recommended by your pediatrician, and offer high-fiber foods and plenty of water.',
    },
    {
      ageRange: '24-30 months',
      context:
        'Stool withholding is most common during active potty training. Many toddlers will urinate on the toilet successfully but insist on a diaper for bowel movements. This is a normal transitional stage. Allowing your child to poop in a diaper while continuing to work on comfort and confidence is far better than forcing toilet use and worsening the withholding cycle. Reading books about pooping, using a step stool for proper posture, and celebrating small steps all help.',
    },
    {
      ageRange: '30-36 months',
      context:
        'If stool withholding has been ongoing, your child may have developed a pattern of chronic constipation where the rectum has stretched to accommodate large, hard stools. This can reduce the urge to go and may lead to soiling accidents (encopresis). Your pediatrician may recommend a longer course of stool softeners to allow the rectum to return to its normal size, along with a consistent toileting routine. Resolution takes time but is very achievable with patience and medical support.',
    },
  ],
  whenNormal: [
    'Your toddler occasionally resists pooping for a day but eventually goes without significant distress',
    'Your child prefers to poop in a diaper rather than on the toilet during potty training but is pooping regularly',
    'Your child briefly stiffens or hides when they feel the urge but then has a normal bowel movement',
    'Your child\'s withholding behavior is improving with dietary changes and encouragement',
  ],
  whenToMention: [
    'Your toddler is regularly withholding stool for three or more days at a time, resulting in large, painful bowel movements',
    'Stool withholding is significantly interfering with potty training progress or causing your child distress',
    'Your child has developed a pattern of soiling accidents (small amounts of stool leaking into underwear) between large bowel movements',
  ],
  whenToActNow: [
    'Your child has not had a bowel movement in over a week and has abdominal pain, distension, or vomiting',
    'Your child is in severe pain, has blood in the stool, or is refusing to eat due to discomfort from stool withholding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Constipation and Your Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Encopresis - Symptoms and causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/encopresis/symptoms-causes/syc-20354494',
    },
  ],
};
