import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-milk-alternatives',
  title: 'Toddler Milk Alternatives',
  category: 'feeding',
  searchTerms: [
    'toddler milk alternative',
    'best milk for toddler',
    'almond milk for toddler',
    'oat milk for toddler',
    'soy milk for toddler',
    'toddler milk allergy alternatives',
    'plant milk for toddler safe',
    'toddler formula vs milk',
    'toddler refuses cow milk',
  ],
  quickAnswer:
    'The AAP recommends whole cow\'s milk (16-24 ounces per day) as the primary milk for toddlers aged 1-2 years due to its ideal balance of fat, protein, calcium, and vitamin D. If cow\'s milk is not an option due to allergy, intolerance, or family preference, fortified soy milk is the best plant-based alternative because it most closely matches the protein and nutrient profile of cow\'s milk. Other plant milks (almond, oat, coconut, rice) are significantly lower in protein and calories and should not be used as primary milk sources without dietary planning.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies under 12 months should receive only breast milk or infant formula. Cow\'s milk, plant milks, toddler formulas, and other milk alternatives are not appropriate for infants under 1 year. The protein and mineral content of cow\'s milk can strain infant kidneys, and plant milks lack essential nutrients needed for infant growth.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue exclusive breastfeeding or formula-feeding. If you plan to use a milk alternative after 12 months, begin discussing this with your pediatrician now, especially if your baby has a confirmed cow\'s milk protein allergy. Specialized hypoallergenic formulas are available for allergic infants and are a better choice than plant milks during the first year.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Breast milk or formula should remain the primary milk source. Small amounts of yogurt and cheese (cow or soy-based) can be introduced as complementary foods even before age 1. If cow\'s milk allergy is confirmed, avoid all dairy products and discuss calcium and vitamin D supplementation with your pediatrician. Do not substitute any plant milk for formula before 12 months.',
    },
    {
      ageRange: '12 months+',
      context:
        'At 12 months, introduce whole cow\'s milk (up to 16-24 ounces per day). If cow\'s milk is not suitable, fortified unsweetened soy milk is recommended as it provides about 7 grams of protein per cup, similar to cow\'s milk. Oat milk provides about 3 grams of protein per cup and is less ideal. Almond milk has only about 1 gram of protein per cup and is not suitable as a primary milk. Rice milk is very low in protein and may contain higher arsenic levels. Coconut milk is very low in protein and most nutrients. If using any plant milk, ensure it is fortified with calcium and vitamin D, and compensate for lower protein with other dietary sources.',
    },
  ],
  whenNormal: [
    'Your toddler drinks 16-24 ounces of whole cow\'s milk per day and eats a varied diet',
    'Your toddler with a milk allergy drinks fortified soy milk and gets adequate calcium and protein from other foods',
    'Your toddler prefers water to milk at some meals but still gets dairy through yogurt and cheese',
    'Your toddler transitions from formula to whole milk at 12 months without digestive issues',
  ],
  whenToMention: [
    'Your toddler refuses all milk and milk alternatives and you are concerned about calcium and vitamin D intake',
    'You are using a plant milk that is not fortified and want to discuss nutritional supplementation',
    'Your toddler has symptoms of milk intolerance (gas, bloating, diarrhea) when you introduce cow\'s milk',
  ],
  whenToActNow: [
    'Your toddler has a severe allergic reaction to cow\'s milk or a milk alternative, including hives, facial swelling, vomiting, or difficulty breathing',
    'Your toddler shows signs of severe nutritional deficiency such as failure to thrive, extreme fatigue, or bone abnormalities from an inadequate milk alternative',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Lott M, et al. Healthy Beverage Consumption in Early Childhood: Recommendations from Key National Health and Nutrition Organizations. Healthy Eating Research, 2019.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Milk-Allergy-Foods-and-Ingredients-to-Avoid.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 and Younger. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Office of Dietary Supplements. Calcium Fact Sheet for Consumers.',
      url: 'https://ods.od.nih.gov/factsheets/Calcium-Consumer/',
    },
  ],
};
