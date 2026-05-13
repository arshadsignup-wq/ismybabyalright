import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'constipation-causes-babies',
  title: 'Common Causes of Constipation in Babies',
  category: 'digestive',
  searchTerms: [
    'baby constipated',
    'baby not pooping',
    'constipation in baby causes',
    'baby hard poop',
    'baby straining to poop',
    'formula causing constipation',
    'constipation after starting solids',
    'baby hasn\'t pooped in days',
    'what causes baby constipation',
  ],
  quickAnswer:
    'Constipation in babies is defined by hard, difficult-to-pass stools rather than infrequent pooping. Common causes include the introduction of solid foods, switching from breast milk to formula, insufficient fluid intake, and certain foods like bananas, rice cereal, and dairy. True constipation is uncommon in exclusively breastfed babies. Most cases of infant constipation are easily resolved with dietary adjustments.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Exclusively breastfed newborns rarely become truly constipated because breast milk is so well absorbed. It is normal for breastfed babies over 6 weeks to go days or even a week without a bowel movement as long as the stool is soft when it comes. Formula-fed babies may be more prone to harder stools. If your newborn is straining and producing hard pellets, consult your pediatrician rather than using home remedies at this young age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Constipation may occur if formula is mixed incorrectly (too concentrated) or if there is a switch between formula brands. Some babies become constipated when transitioning from breast milk to formula. At this age, your pediatrician may recommend small amounts of water, prune juice, or pear juice to help soften stools. Never give laxatives or suppositories without medical guidance.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the most common time for constipation to first appear because of the introduction of solid foods. The digestive system needs time to adjust to new foods. Common constipation-causing foods include rice cereal, bananas, applesauce, and too much dairy. High-fiber foods like prunes, pears, peas, and oatmeal can help. Making sure your baby gets enough fluids alongside solids is also important.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler constipation is very common, affecting up to 30% of children at some point. Causes include a diet heavy in dairy and processed foods, insufficient fiber and fluid intake, and sometimes stool withholding due to a previous painful bowel movement. Cow\'s milk introduction at age 1 is a frequent trigger. Ensuring adequate water intake, offering high-fiber foods, and maintaining physical activity all help prevent constipation.',
    },
  ],
  whenNormal: [
    'Your breastfed baby goes several days between soft, easy-to-pass stools',
    'Your baby grunts, turns red, or strains during a bowel movement but produces soft stool, which is called infant dyschezia and is normal',
    'Stool consistency changes temporarily after introducing a new food and then returns to normal',
  ],
  whenToMention: [
    'Your baby consistently passes hard, pellet-like stools that seem painful or cause crying',
    'Your baby has not had a bowel movement in several days and seems uncomfortable, with a firm or distended belly',
    'Constipation keeps recurring despite dietary changes, and you are looking for additional strategies',
    'There are streaks of blood on hard stool or on the diaper, likely from a small anal fissure',
  ],
  whenToActNow: [
    'Your newborn under 4 weeks has not passed stool in more than 2-3 days, which could indicate a structural problem like Hirschsprung disease',
    'Your baby\'s abdomen is very distended and rigid, they are vomiting green bile, or they are in severe pain, which could indicate an obstruction',
    'You see large amounts of blood in the stool or your baby has a fever along with constipation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Constipation in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Constipation in Infants and Children. National Institute of Diabetes and Digestive and Kidney Diseases.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
  ],
};
