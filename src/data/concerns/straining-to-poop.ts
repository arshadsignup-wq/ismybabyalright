import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'straining-to-poop',
  title: 'Baby Straining and Grunting to Poop',
  category: 'digestive',
  searchTerms: [
    'baby straining to poop',
    'baby grunting to poop',
    'baby pushing to poop',
    'baby turns red pooping',
    'baby face red straining',
    'baby struggles to poop',
    'baby bearing down to poop',
    'newborn straining to poop',
    'baby crying while pooping',
    'baby hard time pooping',
    'baby screams when pooping',
  ],
  quickAnswer:
    'Babies straining, grunting, and turning red during bowel movements is extremely common and usually not a sign of constipation. Young babies are learning to coordinate the muscles needed to push out stool while simultaneously relaxing their pelvic floor, and this takes practice. If the stool that comes out is soft, your baby is not constipated regardless of how much effort it seems to take.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Straining and grunting during bowel movements is most pronounced in the first few months. This is often called infant dyschezia or grunting baby syndrome. Your baby\'s abdominal muscles are still developing and they have not yet learned the coordination needed to push out stool efficiently. As long as stool is soft, this will resolve on its own without any intervention.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, most babies have improved their coordination and straining decreases noticeably. If your baby is still straining significantly and producing hard stools, this may be true constipation rather than normal infant dyschezia. Talk to your pediatrician if the stools are hard or pellet-like.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Starting solid foods can change stool consistency and your baby may need to work a bit harder to pass firmer stools. Some straining is normal during this transition. However, if your baby is consistently very distressed during bowel movements and stools are hard, adjusting their diet with more water and fiber-rich foods can help.',
    },
    {
      ageRange: '12-36 months',
      context:
        'If your toddler is straining with hard stools, this is likely constipation that can be addressed with dietary changes. Some toddlers also begin withholding stool during potty training because of fear or discomfort, which creates a cycle of harder stools and more straining. Patience, adequate fluids, and a fiber-rich diet are key.',
    },
  ],
  whenNormal: [
    'Your baby grunts, turns red, and strains but produces soft stool afterward',
    'Your newborn seems to work very hard to poop but is otherwise content between bowel movements',
    'Straining episodes last a few minutes and your baby calms down once the stool passes',
    'Your baby draws up their legs and pushes during bowel movements but the stool is normal consistency',
  ],
  whenToMention: [
    'Straining consistently produces hard, pellet-like stools rather than soft ones',
    'Your baby cries in what appears to be pain during bowel movements and remains upset afterward',
    'You notice small streaks of blood after a particularly hard stool',
    'Straining and discomfort with bowel movements has persisted beyond 3-4 months of age',
  ],
  whenToActNow: [
    'Your baby has a distended, rigid abdomen and has not been able to pass stool or gas despite prolonged straining',
    'Your baby is inconsolable, refusing feeds, and appears to be in significant pain with straining',
    'There is a significant amount of blood with the stool',
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
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
  ],
};
