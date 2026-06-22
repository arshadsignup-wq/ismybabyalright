import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'daycare-nutrition-what-to-expect',
  title: 'Daycare Nutrition and Food Safety: What to Expect',
  category: 'feeding',
  searchTerms: [
    'daycare nutrition for babies',
    'what does daycare feed my baby',
    'daycare food safety for infants',
    'daycare allergy management',
    'CACFP daycare meal requirements',
    'daycare choking prevention food',
    'questions to ask daycare about food',
    'daycare meal plan for toddlers',
    'breast milk storage at daycare',
    'daycare food allergy policy',
  ],
  quickAnswer:
    'Daycare nutrition is regulated by the USDA\'s Child and Adult Care Food Program (CACFP), which provides nutritional guidelines for meals and snacks served to children in care. Participating daycares must serve meals that include specific food groups: fruits, vegetables, grains, protein, and milk (or formula/breast milk for infants). For infants, daycares should follow the parent\'s feeding plan for breast milk or formula, introduce solids only with parental consent and pediatrician guidance, and serve age-appropriate textures. Key areas to discuss with your daycare include: allergen management (how they prevent cross-contamination), choking prevention (food cut to safe sizes, no round coins, grapes halved lengthwise), breast milk handling (proper storage and labeling), and their process for introducing new foods. The AAP recommends that daycares not serve honey to children under 12 months and avoid common choking hazards like whole grapes, hot dogs, popcorn, and raw carrots.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Infants under 6 months should receive only breast milk or formula at daycare. Verify that the facility properly stores breast milk (refrigerated, labeled with name and date, used within 24 hours or discarded), warms bottles safely (warm water bath, never microwave), and feeds on demand rather than on a rigid schedule. Staff should hold infants during bottle feeding, since propping bottles is a choking and ear infection risk. Discuss your feeding preferences and any supplementation plans with the daycare.',
    },
    {
      ageRange: '6-9 months',
      context:
        'When starting solids, the daycare should coordinate with you on which foods have been introduced at home first. The AAP recommends introducing potential allergens (peanut, egg, milk, wheat) at home before the daycare serves them, so you can monitor for reactions. Daycare staff should be trained to recognize allergic reactions (hives, swelling, vomiting, difficulty breathing) and have an action plan. Food textures should be appropriate: purees progressing to soft, mashable pieces.',
    },
    {
      ageRange: '9-12 months',
      context:
        'As babies transition to more finger foods, choking prevention becomes critical. Verify that food is cut into small pieces (no larger than ½ inch), round foods like grapes and cherry tomatoes are halved lengthwise, and babies are always seated and supervised while eating. Staff should be infant CPR certified and know the difference between gagging (normal, productive cough) and choking (silent, no airflow). Ask about the meal plan and whether it provides iron-rich foods, which are important at this age.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers at daycare eat table food meals and snacks. CACFP-participating daycares must offer balanced meals from all food groups. Whole milk is typically served at 12 months (or an alternative with medical documentation). Discuss any dietary restrictions, cultural food preferences, or allergies with the daycare. Ask whether toddlers eat in a group setting (which encourages social eating and trying new foods) and how they handle picky eating, where pressure-free approaches aligned with Ellyn Satter\'s Division of Responsibility model are considered best practice.',
    },
  ],
  whenNormal: [
    'Your child eating differently at daycare than at home, since peer influence and different settings change eating behavior',
    'Daycare serving foods you haven\'t tried at home yet (after the initial allergen introduction period)',
    'Your child eating less at daycare on some days, because appetite naturally varies',
    'Minor differences between your home feeding approach and the daycare\'s approach',
  ],
  whenToMention: [
    'You suspect the daycare is not following your child\'s allergy action plan',
    'Your child consistently refuses to eat at daycare and is losing weight or seems hungry at pickup',
    'You have concerns about food safety practices (unsanitary preparation areas, improperly stored breast milk)',
    'The daycare is introducing foods to your infant without your consent',
  ],
  whenToActNow: [
    'Your child has an allergic reaction at daycare (hives, facial swelling, vomiting, difficulty breathing), ensure epinephrine was administered if prescribed and seek emergency care',
    'Your child choked on food at daycare and needed intervention, so discuss the incident and review their choking prevention practices',
    'You discover the daycare has been serving a known allergen to your child despite documented allergy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'food-allergy-signs',
    'high-choking-risk-foods-baby',
    'baby-food-allergy-outgrowing',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Feeding Kids When They Are in Child Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'USDA',
      citation:
        'U.S. Department of Agriculture. Child and Adult Care Food Program (CACFP) Meal Patterns.',
      url: 'https://www.fns.usda.gov/cacfp/meals-and-snacks',
    },
    {
      org: 'NAEYC',
      citation:
        'National Association for the Education of Young Children. Healthy Eating in Early Childhood.',
      url: 'https://www.naeyc.org/resources/topics/health/nutrition',
    },
  ],
};
