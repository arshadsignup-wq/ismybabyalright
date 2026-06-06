import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-refusing-all-drinks',
  title: "My Toddler Won't Drink Anything",
  category: 'feeding',
  searchTerms: [
    'toddler refusing all drinks',
    'toddler won\'t drink water or milk',
    'toddler dehydration not drinking',
    'toddler refuses liquids',
    'toddler won\'t drink anything',
    'getting toddler to drink fluids',
    'toddler stops drinking',
    'toddler drink refusal',
    'toddler hydration concerns',
    'toddler not drinking enough fluids',
  ],
  quickAnswer:
    'A toddler who refuses all drinks needs attention as dehydration can develop. If this is a sudden change, illness may be the cause. Try offering fluids in different cups, at different temperatures, and flavored with frozen fruit. Water-rich foods like watermelon, cucumber, and soup also contribute to hydration. If your toddler has not had adequate fluids for 12-24 hours, call your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Babies this age who refuse breast milk or formula need immediate medical attention. Do not wait.',
    },
    {
      ageRange: '4-6 months',
      context: 'If a baby this age refuses breast milk or formula, contact your pediatrician promptly. Small amounts of water refusal are not concerning since breast milk or formula provides hydration.',
    },
    {
      ageRange: '6-9 months',
      context: 'If baby refuses water from a cup but still drinks breast milk or formula normally, this is not a concern. If they refuse all liquids including milk, seek medical advice.',
    },
    {
      ageRange: '9-12 months',
      context: 'If baby is refusing all liquids, check for illness such as sore throat or mouth sores (hand-foot-and-mouth disease). Offer cold liquids which may be soothing. Popsicles made from breast milk or purees can help with hydration.',
    },
    {
      ageRange: '12-24 months',
      context: 'Drink refusal in toddlers is often temporary and may be related to throat pain, mouth sores, or simple preference. Try different cups, straws, temperatures, and adding frozen fruit to water. Offer water-rich foods. If refusal persists more than 24 hours, watch for dehydration signs and contact your pediatrician.',
    },
  ],
  whenNormal: [
    'Toddler refuses water but drinks milk normally',
    'Toddler drinks less some days and more other days',
    'Toddler prefers one type of cup or drink over another',
  ],
  whenToMention: [
    'Toddler has significantly reduced all fluid intake for more than 12 hours',
    'Toddler has mouth sores or throat pain that seems to be preventing drinking',
    'Toddler consistently drinks very little and urine output is low',
  ],
  whenToActNow: [
    'Toddler has not urinated in 8 or more hours',
    'Toddler has dry lips, no tears when crying, sunken eyes, or extreme lethargy',
    'Toddler has been vomiting and cannot keep any fluids down',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-not-drinking-enough-water', 'baby-refusing-water', 'baby-wont-drink-from-cup'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Signs of Dehydration in Infants and Children. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Dehydration.aspx',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Water and Nutrition for Young Children. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/water-and-healthier-drinks.html',
    },
  ],
};
