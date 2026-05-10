import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sugar-intake-baby-toddler',
  title: 'Sugar Intake Concerns for Babies and Toddlers',
  category: 'feeding',
  searchTerms: [
    'sugar for baby safe',
    'how much sugar toddler',
    'added sugar baby food',
    'sugar in baby snacks',
    'toddler eating too much sugar',
    'no added sugar under 2',
    'fruit juice sugar baby',
    'hidden sugar in baby food',
    'sugar and toddler behavior',
  ],
  quickAnswer:
    'The American Heart Association and the AAP recommend that children under 2 years of age consume no added sugars at all. Added sugars provide empty calories, displace nutrient-dense foods, and establish a preference for sweet tastes that can lead to unhealthy eating patterns, obesity, and dental caries. Natural sugars found in whole fruits, vegetables, and plain dairy are fine and are part of a healthy diet.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Breast milk contains lactose, a natural sugar that provides about 40% of the calories in breast milk. This is the ideal and only sugar source needed. Formula also contains lactose or other carbohydrates to meet energy needs. Never add sugar, honey, corn syrup, or sweeteners to bottles. Sweetened water or other sweetened beverages are not appropriate for infants.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue exclusive breastfeeding or formula-feeding. The natural sugars in breast milk and formula are sufficient. Do not introduce fruit juices, sweetened beverages, or any foods with added sugars. If complementary foods are being introduced around 4-6 months under pediatric guidance, offer plain vegetables and fruits without any added sweeteners.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids expand, read labels carefully on commercial baby foods and toddler snacks. Many products marketed to babies contain hidden added sugars in the form of fruit juice concentrates, cane sugar, corn syrup, or concentrated fruit purees used as sweeteners. Offer plain whole fruits, vegetables, unsweetened yogurt, and plain cereals. Fruit puree pouches, while convenient, can be very high in natural sugars and encourage a sweet preference if overused.',
    },
    {
      ageRange: '12 months+',
      context:
        'The AHA recommends children aged 2-18 consume fewer than 25 grams (6 teaspoons) of added sugar per day, and children under 2 should have zero added sugars. In practice, common sources of added sugar in toddler diets include flavored yogurt, toddler cookies and crackers, juice, sweetened milk, and ketchup. Read nutrition labels and look for terms like sucrose, dextrose, maltose, high-fructose corn syrup, and fruit juice concentrate. Transitioning to a low-sugar family diet benefits everyone.',
    },
  ],
  whenNormal: [
    'Your baby or toddler consumes natural sugars from whole fruits, plain dairy, and breast milk or formula',
    'Your toddler occasionally has a small treat at a birthday party or special occasion without it being a dietary pattern',
    'Your toddler prefers sweet fruits over vegetables, which is a normal taste preference at this age',
    'You offer unsweetened food and drinks as the default and your child is growing well',
  ],
  whenToMention: [
    'Your toddler strongly refuses all foods that are not sweet and has an extremely limited diet',
    'Your toddler has multiple dental cavities, which may be linked to excessive sugar exposure',
    'Your toddler is gaining weight excessively and their diet is high in sweetened foods and beverages',
  ],
  whenToActNow: [
    'Your baby or toddler has severe tooth decay with visible dark spots, pain, or swelling in the gums that may indicate dental abscess',
    'Your toddler is showing signs of metabolic problems such as excessive thirst, frequent urination, or unexplained weight changes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Vos MB, et al. Added Sugars and Cardiovascular Disease Risk in Children: A Scientific Statement From the American Heart Association. Circulation. 2017;135(19):e1017-e1034.',
      url: 'https://www.ahajournals.org/doi/10.1161/CIR.0000000000000439',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Reducing Added Sugars in Children\'s Diets. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/How-to-Reduce-Added-Sugar-in-Your-Childs-Diet.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Foods and Drinks to Limit for Infants and Toddlers.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/foods-and-drinks-to-limit.html',
    },
  ],
};
