import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'congenital-heart-defect-signs',
  title: 'Congenital Heart Defect Signs in Babies',
  category: 'medical',
  searchTerms: [
    'congenital heart defect baby',
    'baby heart murmur',
    'baby blue around lips',
    'baby breathing fast sweating feeding',
    'CHD signs baby',
    'baby heart defect symptoms',
    'baby poor weight gain heart problem',
    'baby born with heart defect',
    'critical congenital heart disease newborn',
  ],
  quickAnswer:
    'Congenital heart defects (CHDs) are the most common type of birth defect, affecting about 1 in 100 babies. They range from small holes in the heart that may close on their own to complex defects requiring multiple surgeries. Early detection through pulse oximetry screening and recognizing key signs — such as blue skin, rapid breathing, poor feeding, and failure to gain weight — is critical. Advances in surgery have dramatically improved survival and quality of life.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Critical CHDs are often detected in the first days of life through newborn pulse oximetry screening, a heart murmur, or symptoms like cyanosis (blue skin), rapid breathing, and poor feeding. Some defects are diagnosed prenatally by fetal echocardiography. Less severe defects may present more subtly with a murmur detected at a well-child visit. Babies with critical CHDs may need surgery or catheter intervention within the first weeks of life.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some heart defects become more apparent as the baby grows and the body\'s demands on the heart increase. Signs of heart failure in infants include rapid breathing (especially during feeding), sweating on the forehead during feeds, falling asleep before finishing bottles, poor weight gain despite adequate calorie intake, and increased fussiness. A heart murmur may become louder or change character.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies with unrepaired significant heart defects may show failure to thrive, frequent respiratory infections, and developmental delays related to poor oxygenation and chronic illness. Babies who have had successful heart surgery should be gaining weight and developing well. Post-surgical monitoring and follow-up echocardiograms are standard care.',
    },
    {
      ageRange: '12 months+',
      context:
        'Many babies who had heart surgery in infancy go on to live normal, active lives with regular cardiac follow-up. Some complex defects require staged surgeries over several years. Children with repaired or mild heart defects often have no activity restrictions. Developmental follow-up is recommended, as children who had open-heart surgery in infancy may benefit from early intervention for motor, speech, or learning support.',
    },
  ],
  whenNormal: [
    'Your baby has an "innocent" or "functional" heart murmur that your pediatrician is monitoring — these are very common and harmless',
    'Your baby had a normal newborn pulse oximetry screen and echocardiogram',
    'Your baby had a small heart defect (like a tiny VSD) that is being monitored and is expected to close on its own',
    'Your baby had heart surgery and is now feeding well, gaining weight, and meeting milestones',
  ],
  whenToMention: [
    'Your baby sweats excessively during feedings, tires quickly while eating, or is not gaining weight adequately',
    'Your baby breathes faster than 60 breaths per minute at rest on a regular basis',
    'A new heart murmur is detected or you notice your baby\'s lips or fingertips look bluish in certain situations',
  ],
  whenToActNow: [
    'Your baby has a persistent blue or gray color to the skin, lips, or nailbeds — this may indicate a critical heart defect or decompensation',
    'Your baby is suddenly breathing very rapidly, is limp or unresponsive, or is refusing to feed entirely — seek emergency care immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Congenital Heart Defects (CHDs). CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/heartdefects/facts.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Endorsement of HHS Recommendation for Pulse Oximetry Screening for Critical Congenital Heart Disease. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/129/1/190/31777/Endorsement-of-Health-and-Human-Services',
    },
  ],
};
