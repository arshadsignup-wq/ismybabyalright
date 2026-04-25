import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hard-pebble-poop',
  title: 'Baby Hard Pebble-Like Poop',
  category: 'digestive',
  searchTerms: [
    'baby hard pebble poop',
    'baby poop like little balls',
    'baby poop hard and round',
    'baby passing hard pellets',
    'baby rabbit poop',
    'baby stool hard like rocks',
    'baby small hard poops',
    'baby dry hard stool',
    'infant hard pebble stool',
    'baby poop looks like pellets',
  ],
  quickAnswer:
    'Hard, pebble-like stools in babies are a sign of constipation and usually mean your baby is not getting enough fluid or fiber. This is most common after starting solid foods or when transitioning from breast milk to formula. While uncomfortable for your baby, it is usually easily addressed with dietary changes and rarely indicates a serious problem.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Hard, pebble-like stools are uncommon in exclusively breastfed babies. If you see them in a breastfed baby, ensure they are feeding frequently and effectively. In formula-fed babies, hard stools can sometimes occur with certain formulas. Talk to your pediatrician before switching formulas or adding anything to bottles.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is when hard pebble poop most commonly first appears, right as babies start solid foods. Rice cereal, bananas, and dairy-based foods can contribute to firmer stools. Balancing these with high-fiber foods like prunes, pears, peaches, and peas, and offering sips of water with meals, can help soften stools.',
    },
    {
      ageRange: '9-18 months',
      context:
        'As your baby eats more solid food and potentially reduces milk intake, hard stools can become a recurring issue. Ensuring your baby drinks enough water throughout the day and eats a variety of fruits and vegetables is key. Avoid excessive dairy, as too much cow\'s milk after 12 months can contribute to constipation.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddlers who are picky eaters or who drink too much cow\'s milk (more than 16-24 ounces per day) are prone to hard, pebble stools. Potty training stress can also lead to stool withholding, which makes poop harder over time. A consistent routine with fiber-rich foods and adequate fluids usually resolves the issue.',
    },
  ],
  whenNormal: [
    'Your baby occasionally has a firmer stool but it passes without distress or pain',
    'Your baby had one hard stool after trying a new food but subsequent stools are softer',
    'Your toddler sometimes has pebble-like stool when they have not been drinking enough water',
    'Stool consistency improves after adding more fruits and vegetables to their diet',
  ],
  whenToMention: [
    'Your baby consistently passes hard, pebble-like stools that seem painful',
    'Hard stools are accompanied by small streaks of bright red blood from an anal fissure',
    'Your baby avoids pooping or seems to hold it in because of the discomfort',
    'Dietary changes have not improved stool consistency after 1-2 weeks',
  ],
  whenToActNow: [
    'Your baby has a distended, hard abdomen along with vomiting and has not passed stool in several days',
    'Your baby is in severe pain, is inconsolable, and is refusing all feeds and fluids',
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
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infant Food and Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
  ],
};
