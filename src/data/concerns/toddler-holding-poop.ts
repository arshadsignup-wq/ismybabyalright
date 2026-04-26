import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-holding-poop',
  title: 'Toddler Holding in Poop',
  category: 'digestive',
  searchTerms: [
    'toddler holding in poop',
    'toddler won\'t poop',
    'child withholding stool',
    'toddler afraid to poop',
    'stool withholding toddler',
    'toddler refuses to poop on toilet',
    'toddler clenches when needs to poop',
    'toddler holds poop for days',
    'functional constipation toddler',
    'toddler poop anxiety',
    'toddler stool retention',
  ],
  quickAnswer:
    'Stool withholding is very common in toddlers, often triggered by a painful bowel movement that makes them afraid to go again. The resulting cycle - holding leads to harder stool, which leads to more pain, which leads to more holding - can be frustrating but is very treatable. A combination of stool softeners (as recommended by your pediatrician), dietary changes, and a calm, pressure-free approach usually resolves it.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'True stool withholding is uncommon at this age, but the groundwork can be laid if a baby experiences painful bowel movements (often from dietary changes with solid food introduction). If your baby seems to stiffen and resist during bowel movements, ensure stools stay soft with adequate fluids, and foods like prunes, pears, and peas.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Stool withholding often begins in this age range, frequently triggered by a single painful bowel movement. Your toddler may stiffen their legs, stand on tiptoes, clench their buttocks, hide in a corner, and refuse to sit on the toilet or potty. They are not being stubborn - they are genuinely afraid. Do not force toilet sitting. Focus first on making stools soft and painless before addressing toilet use.',
    },
    {
      ageRange: '2-3 years',
      context:
        'The withholding cycle is most common during toilet training. The pressure of using the potty combined with fear of pain creates a perfect storm. If your toddler is withholding, consider pausing toilet training temporarily and going back to diapers without shame. Use stool softeners as directed by your pediatrician to keep stools painlessly soft for several weeks, rebuilding your child\'s confidence that pooping does not hurt.',
    },
    {
      ageRange: '3+ years',
      context:
        'Persistent withholding can lead to encopresis - where liquid stool leaks around a large, hard stool mass. This is not your child\'s fault and is not done on purpose. Treatment involves a "clean-out" phase followed by maintenance stool softeners, often for months. Work closely with your pediatrician. With patience and consistent treatment, nearly all children overcome this.',
    },
  ],
  whenNormal: [
    'Occasional reluctance to poop during toilet training that resolves with gentle encouragement',
    'Brief withholding after a single hard bowel movement that passes within a few days',
    'Preference for pooping in a diaper rather than the toilet during early training - this is very common',
  ],
  whenToMention: [
    'Your toddler is actively withholding stool for more than 2-3 days at a time',
    'Bowel movements are consistently painful and your child cries or screams when pooping',
    'You notice liquid stool leaking into the diaper or underwear between bowel movements (this can be overflow from withholding)',
  ],
  whenToActNow: [
    'Your child has not had a bowel movement in a week or more with abdominal distension, vomiting, or fever',
    'Your child is in severe abdominal pain, the belly is hard and swollen, and they are unable to eat or drink',
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
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Soiling (Encopresis). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Soiling-Encopresis.aspx',
    },
  ],
};
