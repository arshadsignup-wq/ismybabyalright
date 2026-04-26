import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-excessive-gas-after-solids',
  title: 'Baby Excessive Gas After Starting Solids',
  category: 'digestive',
  searchTerms: [
    'baby gas after starting solids',
    'baby gassy after solid food',
    'baby farts more after solids',
    'gas pain baby solids',
    'baby bloated after food',
    'gassy baby after introducing solids',
    'which foods make baby gassy',
    'baby farting after eating',
    'baby uncomfortable after solid food',
    'baby gas and new foods',
  ],
  quickAnswer:
    'Increased gas after starting solid foods is completely normal and expected. Your baby\'s digestive system is encountering new proteins, fibers, and sugars for the first time and needs time to adapt. The gut bacteria are also diversifying, which naturally produces more gas. This typically improves within a few weeks as the digestive system adjusts to each new food.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'If your baby has just started solids, increased gas is one of the most common side effects. Start with single-ingredient, easy-to-digest foods and introduce new ones every 2-3 days. This way you can identify if a specific food is causing excessive gas. Rice cereal, oat cereal, sweet potato, and avocado are typically gentle starters.',
    },
    {
      ageRange: '6-9 months',
      context:
        'As you expand the variety of foods, some will naturally cause more gas than others. Common gassy foods include beans, lentils, broccoli, cauliflower, peas, and stone fruits. This does not mean you should avoid these nutritious foods - just introduce them gradually. Your baby\'s system will adapt over time with continued exposure.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Your baby is likely eating a wider variety now, and gas should be improving as the digestive system matures. Higher-fiber foods may still cause gas, which is normal. Make sure your baby is drinking enough water with meals (small sips) to help with digestion. If certain foods consistently cause significant discomfort, you can reduce them temporarily and try again later.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers eating a varied diet will naturally have some gas. This is a sign of a healthy, fiber-containing diet. If gas is accompanied by significant bloating, pain, or changes in stool, consider whether a food intolerance (like dairy or gluten) might be contributing and discuss with your pediatrician.',
    },
  ],
  whenNormal: [
    'More frequent gas in the days after trying a new food',
    'Smellier gas after starting solids compared to an all-milk diet',
    'Baby passes gas easily without significant distress',
    'Gas that improves as your baby continues eating the same food over several days',
    'Slight fussiness around mealtime that resolves after passing gas',
  ],
  whenToMention: [
    'Gas is accompanied by persistent bloating, hard abdomen, or visible discomfort that lasts for hours',
    'Your baby has diarrhea or vomiting along with excessive gas after specific foods consistently',
    'Gas and discomfort are severe enough that your baby is refusing solids',
  ],
  whenToActNow: [
    'Your baby\'s abdomen is very distended, hard, and painful to touch with crying that does not stop',
    'Gas is accompanied by bloody stools, projectile vomiting, or signs of allergic reaction like hives or swelling',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infant Food and Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
  ],
};
