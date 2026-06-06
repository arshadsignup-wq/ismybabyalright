import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-gi-virus-recovery-diet',
  title: 'What to Feed Baby After a Stomach Bug',
  category: 'digestive',
  searchTerms: [
    'what to feed baby after stomach bug',
    'baby diet after vomiting',
    'feeding baby after gastroenteritis',
    'what to eat after stomach flu baby',
    'baby food after stomach virus',
    'reintroducing food after vomiting baby',
    'baby diet recovery stomach bug',
    'BRAT diet baby',
    'baby eating after gastro',
    'toddler food after stomach bug',
  ],
  quickAnswer:
    'After a stomach bug, resume your baby\'s normal diet as tolerated rather than restricting to bland foods. Breast milk and formula are ideal for recovery. The old BRAT diet (bananas, rice, applesauce, toast) is no longer specifically recommended because it is too restrictive in nutrition. Offer whatever your baby will eat, in small frequent amounts, focusing on hydration first.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Continue breastfeeding or formula feeding as the primary recovery diet. Breast milk is ideal because it contains immune factors that help fight the infection. If your baby is vomiting, offer smaller, more frequent feeds. Oral rehydration solution can supplement if dehydration is a concern, but should not replace milk feeds.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Resume normal breast milk or formula as soon as vomiting subsides. There is no need to dilute formula during recovery. If your baby had just started solids, you can pause them temporarily until the acute illness resolves and then reintroduce. Focus on maintaining milk feeds for hydration and nutrition.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once vomiting stops, offer breast milk or formula first, then reintroduce regular solid foods as tolerated. Starchy foods (bananas, rice cereal, potatoes), protein (chicken, yogurt), and easily digested fruits are good choices. Avoid high-sugar foods and juice. Small, frequent meals are better than large ones.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Offer whatever your toddler will eat from their normal diet. Good recovery foods include crackers, toast, rice, bananas, applesauce, chicken soup, and yogurt. Avoid fatty, fried, or heavily sweetened foods initially. Full appetite typically returns within 3 to 5 days of recovery. Temporary dairy avoidance may help if diarrhea persists.',
    },
  ],
  whenNormal: [
    'Decreased appetite for 2 to 5 days after a stomach bug that gradually improves',
    'Preference for bland or simple foods during recovery',
    'Small amounts eaten at first, building back to normal portions over days',
  ],
  whenToMention: [
    'Your baby refuses to eat for more than 3 days after vomiting has stopped',
    'You are unsure how to safely reintroduce foods after a prolonged illness',
    'Diarrhea persists more than a week after the illness despite dietary modifications',
  ],
  whenToActNow: [
    'Your baby cannot tolerate any oral intake and shows signs of dehydration',
    'Weight loss during or after the illness is significant',
    'Vomiting returns when food is reintroduced, especially if it is bilious',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Treating Vomiting. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Treating-Vomiting.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diarrhea Treatment. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Diarrhea.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Eating and Diet for Viral Gastroenteritis.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/viral-gastroenteritis/eating-diet-nutrition',
    },
  ],
  relatedConcernSlugs: ['baby-stomach-virus-duration', 'baby-vomiting-repeatedly-dehydration', 'baby-lactose-intolerance-temporary'],
};
