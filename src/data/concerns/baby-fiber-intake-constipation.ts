import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-fiber-intake-constipation',
  title: 'Can More Fiber Help My Baby\'s Constipation?',
  category: 'feeding',
  searchTerms: [
    'baby fiber constipation',
    'fiber for baby',
    'high fiber foods baby',
    'baby constipation diet fiber',
    'how much fiber baby needs',
    'fiber rich baby food',
    'prunes for baby constipation',
    'pears for baby constipation',
    'baby constipation solids fiber',
    'too much fiber baby',
  ],
  quickAnswer:
    'Fiber can help with constipation in babies eating solid foods. Good high-fiber first foods include prunes, pears, peas, and whole grains. However, too much fiber can be counterproductive if baby is not drinking enough fluids. Balance fiber-rich foods with adequate hydration. Babies under 6 months who are constipated should be evaluated by their pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Fiber is not relevant for babies this age who drink only breast milk or formula. Constipation in young babies should be discussed with your pediatrician rather than managed through diet changes.',
    },
    {
      ageRange: '4-6 months',
      context: 'Constipation often begins when solids are introduced. High-fiber first foods like pureed prunes, pears, and peas can help. The "P fruits" (prunes, pears, peaches, plums) are particularly helpful for softening stools.',
    },
    {
      ageRange: '6-9 months',
      context: 'Offer a variety of high-fiber foods including cooked vegetables, fruits with skin (mashed), and whole grain cereals. Make sure baby is getting enough fluids. Small amounts of water with meals and continued breast milk or formula help fiber work effectively.',
    },
    {
      ageRange: '9-12 months',
      context: 'Continue offering high-fiber foods. Soft-cooked beans, lentils, whole grain bread, and a variety of fruits and vegetables all contribute fiber. If constipation persists despite a high-fiber diet, discuss with your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers need about 19 grams of fiber daily. Good sources include whole fruits, vegetables, beans, whole grain bread, and oatmeal. Too much dairy, especially milk over 16-20 ounces per day, can contribute to constipation. Balance dairy with fiber-rich foods and adequate water.',
    },
  ],
  whenNormal: [
    'Baby has softer stools after introducing high-fiber foods',
    'Baby has occasional hard stools that improve with dietary changes',
    'Baby tolerates fiber-rich foods without excess gas or bloating',
  ],
  whenToMention: [
    'Baby remains constipated despite a high-fiber diet with adequate fluids',
    'Baby has blood in stool from straining',
    'Baby cries in pain during bowel movements regularly',
  ],
  whenToActNow: [
    'Baby has not had a bowel movement in over a week and seems distressed',
    'Baby has a distended belly with vomiting and no stool passage',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['foods-that-cause-constipation', 'toddler-constipation-from-dairy', 'baby-excessive-gas-after-solids'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Constipation in Children. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Fiber in Infant and Child Nutrition. Journal of Pediatric Gastroenterology and Nutrition, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
