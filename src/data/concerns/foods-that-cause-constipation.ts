import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'foods-that-cause-constipation',
  title: 'Foods That Can Cause Constipation in Babies',
  category: 'feeding',
  searchTerms: [
    'foods that cause constipation in babies',
    'baby constipated after starting solids',
    'which foods constipate babies',
    'banana constipation baby',
    'rice cereal constipation',
    'baby constipated from solid food',
    'foods to avoid constipation baby',
    'iron fortified cereal constipation',
    'dairy constipation toddler',
  ],
  quickAnswer:
    'It is very common for babies to experience constipation when they begin eating solid foods. Certain foods, including rice cereal, bananas, dairy products, and low-fiber processed foods, are more likely to slow digestion. Balancing these with high-fiber foods like prunes, pears, peas, and oats can help keep your baby regular.',
  byAge: [
    {
      ageRange: '3-6 months',
      context:
        'If your baby is exclusively breastfed, constipation is rare since breastmilk is easily digested. Formula-fed babies may experience firmer stools. If you are just beginning solids around six months, the introduction of new foods can change stool consistency. Rice cereal, a traditional first food, is a common culprit for constipation. Consider starting with oat cereal or pureed fruits and vegetables instead.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby eats a wider variety of solids, you may notice certain foods consistently cause harder stools. Common constipating foods include bananas, white rice, white bread, applesauce, and excessive dairy. Counter these with high-fiber options such as pureed prunes, pears, peaches, peas, beans, and oatmeal. Offering small amounts of water with meals can also help once your baby is eating solids regularly.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who drink a lot of cow\'s milk often become constipated, as excessive dairy can slow digestion and reduce appetite for fiber-rich foods. Limit cow\'s milk to 16 to 24 ounces per day and prioritize whole grains, fruits, and vegetables. Common toddler favorites like cheese, crackers, and white pasta can also contribute to constipation when eaten in excess. Ensure adequate fluid intake throughout the day.',
    },
    {
      ageRange: '24-36 months',
      context:
        'A diet heavy in processed snack foods and low in fruits, vegetables, and whole grains is a common cause of toddler constipation. Encouraging your child to eat a variety of fiber-rich foods and drink plenty of water is the best prevention strategy. If constipation becomes chronic despite dietary changes, your pediatrician may recommend a gentle stool softener.',
    },
  ],
  whenNormal: [
    'Your baby\'s stool consistency changes when you introduce new foods but returns to normal within a few days',
    'Your baby strains slightly when passing a stool after starting solids but the stool is still soft',
    'Your toddler skips a day between bowel movements but the stool is not hard or painful when it comes',
  ],
  whenToMention: [
    'Your baby consistently passes hard, pellet-like stools despite dietary adjustments',
    'Your baby or toddler goes more than three to four days without a bowel movement regularly',
    'Your child cries or shows significant distress during bowel movements',
    'You notice small streaks of blood on the outside of hard stools, which may indicate a small anal fissure',
  ],
  whenToActNow: [
    'Your baby has not had a bowel movement in over a week and appears to be in pain with a distended abdomen',
    'You see large amounts of blood in your baby\'s stool or diaper',
    'Your baby is vomiting along with severe constipation and a swollen belly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Constipation in Children. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children. NIDDK, 2023.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fiber: An Important Part of Your Teen\'s Diet. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Kids-Need-Fiber-Heres-Why-and-How.aspx',
    },
  ],
};
