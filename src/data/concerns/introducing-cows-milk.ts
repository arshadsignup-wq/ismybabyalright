import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'introducing-cows-milk',
  title: 'Introducing Cow\'s Milk at 12 Months',
  category: 'feeding',
  searchTerms: [
    'introducing cow\'s milk to baby',
    'when to give baby cow\'s milk',
    'whole milk at 12 months',
    'switching from formula to milk',
    'how to introduce cow\'s milk',
    'baby won\'t drink cow\'s milk',
    'cow milk transition from formula',
    'what type of milk for 1 year old',
    'whole milk vs 2 percent for toddler',
    'baby rejecting cow\'s milk',
    'milk alternatives for toddler',
  ],
  quickAnswer:
    'Whole cow\'s milk can be introduced starting at 12 months of age. Before 12 months, cow\'s milk does not have the right balance of nutrients for babies and can strain immature kidneys. When your baby turns one, you can offer whole milk (not reduced-fat) as a drink alongside meals. Some babies love it immediately, while others need time to adjust to the different taste. A gradual transition by mixing formula or breast milk with cow\'s milk over a week or two often helps.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Cow\'s milk should not be given as a drink to babies under 12 months. At this age, breast milk or iron-fortified infant formula is the only appropriate milk. Cow\'s milk lacks adequate iron and vitamin C, contains too much protein and sodium for immature kidneys, and can irritate the intestinal lining, potentially causing microscopic blood loss that contributes to iron deficiency.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While cow\'s milk is not appropriate as a drink before 12 months, small amounts of dairy products like yogurt and cheese can be introduced as complementary foods around six months. These are processed forms that are easier for babies to digest. Continue breast milk or formula as the primary milk source. As your baby approaches 12 months, you can start preparing for the transition.',
    },
    {
      ageRange: '12-18 months',
      context:
        'At 12 months, you can begin offering whole cow\'s milk. Aim for 16 to 24 ounces per day - not more, as too much milk can interfere with iron absorption and reduce appetite for solid foods. If your baby does not like the taste at first, try mixing it with breast milk or formula and gradually increasing the proportion of cow\'s milk over one to two weeks. Offer milk in a cup rather than a bottle to support the bottle-weaning process.',
    },
    {
      ageRange: '18 months - 2 years',
      context:
        'Continue offering whole milk until age two, when the AAP says you can switch to reduced-fat or low-fat milk if desired and if your child is growing well. If your toddler refuses cow\'s milk entirely, you can meet their calcium and vitamin D needs through yogurt, cheese, calcium-fortified foods, and if needed, a supplement. Talk to your pediatrician about alternatives if your child has a milk allergy or if your family follows a plant-based diet.',
    },
    {
      ageRange: '2-3 years',
      context:
        'After age two, most children can drink low-fat or fat-free milk. Your child needs about two to two and a half cups of dairy (or dairy equivalents) per day. If your child drinks a plant-based milk alternative, choose one that is unsweetened and fortified with calcium and vitamin D. Oat, soy, and pea protein milks vary in nutritional content, so check labels and discuss options with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby initially refuses cow\'s milk because it tastes different from formula or breast milk',
    'Your baby needs a gradual transition period of one to two weeks mixing milks before accepting straight cow\'s milk',
    'Your baby drinks slightly less milk overall after the transition but is eating solid foods well',
    'Your baby prefers milk warm or at room temperature rather than cold from the refrigerator',
  ],
  whenToMention: [
    'Your baby develops persistent diarrhea, vomiting, or a rash after starting cow\'s milk, which may indicate a milk allergy or intolerance',
    'Your baby completely refuses cow\'s milk and you are unsure how to ensure adequate calcium and vitamin D intake',
    'You want to use a plant-based milk alternative and need guidance on which ones are nutritionally appropriate',
  ],
  whenToActNow: [
    'Your baby has signs of a severe allergic reaction to cow\'s milk, including hives, facial swelling, difficulty breathing, or vomiting',
    'Your baby under 12 months was accidentally given cow\'s milk as a primary drink and is showing signs of illness',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Formula Instead of Cow\'s Milk? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Why-Formula-Instead-of-Cows-Milk.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 and Younger. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Cow\'s Milk and Milk Alternatives.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/cows-milk-and-milk-alternatives.html',
    },
  ],
};
