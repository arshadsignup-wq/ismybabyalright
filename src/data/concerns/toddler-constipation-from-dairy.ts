import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-constipation-from-dairy',
  title: 'Toddler Constipation from Dairy',
  category: 'digestive',
  searchTerms: [
    'toddler constipation from dairy',
    'milk causing constipation toddler',
    'cow\'s milk constipation',
    'cheese making toddler constipated',
    'too much dairy constipation',
    'dairy and constipation in children',
    'toddler hard poop from milk',
    'should I reduce dairy for constipation',
    'milk and toddler poop problems',
    'yogurt constipation toddler',
  ],
  quickAnswer:
    'Dairy, especially cow\'s milk, is one of the most common dietary causes of constipation in toddlers. Too much milk can displace fiber-rich foods and slow digestion. The AAP recommends limiting whole milk to 16-24 ounces per day for toddlers. If constipation persists, reducing dairy and increasing water, fruits, and vegetables often helps significantly.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Constipation can begin when cow\'s milk products are introduced through foods like yogurt and cheese. Small amounts are usually fine, but if your baby becomes constipated, consider temporarily reducing dairy foods and increasing high-fiber options like prunes, pears, and peas. Breast milk and formula do not typically cause constipation.',
    },
    {
      ageRange: '12-18 months',
      context:
        'The transition to whole cow\'s milk at 12 months is a very common trigger for constipation. Many toddlers love milk and will drink it all day if allowed, which fills them up and leaves less room for fiber-rich foods. Limit milk to 16-24 ounces per day and offer water with meals. If constipation is severe, try reducing milk to 16 ounces and see if it helps.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Some toddlers develop a true sensitivity to cow\'s milk protein that contributes to constipation. If limiting milk quantity does not resolve the problem, your pediatrician may suggest a trial period without cow\'s milk (using a calcium-fortified alternative) to see if constipation improves. This should be done with medical guidance to ensure adequate nutrition.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By this age, you can better assess the relationship between dairy and your child\'s bowel habits. Ensure a balanced diet with plenty of fiber (fruits, vegetables, whole grains), adequate water, and moderate dairy. If constipation is chronic, your pediatrician may recommend stool softeners alongside dietary changes. Cheese tends to be more constipating than yogurt for many children.',
    },
  ],
  whenNormal: [
    'Mild constipation when first transitioning to cow\'s milk that resolves with dietary adjustments',
    'Harder stools on days when your toddler drinks more milk than usual',
    'Constipation that responds to increasing water, fiber, and reducing dairy intake',
    'Occasional firm stools that pass without significant straining or pain',
  ],
  whenToMention: [
    'Your toddler is consistently constipated despite limiting dairy to recommended amounts and increasing fiber',
    'Bowel movements are painful, causing your child to cry or withhold stool',
    'You see blood on the stool or in the diaper from hard stools',
  ],
  whenToActNow: [
    'Your child has not had a bowel movement in several days and has a distended, hard, painful abdomen with vomiting',
    'There is significant rectal bleeding or your child is in severe pain with bowel movements',
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
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 & Younger. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
  ],
};
