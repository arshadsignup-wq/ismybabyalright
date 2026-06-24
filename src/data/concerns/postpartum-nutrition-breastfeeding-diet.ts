import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-nutrition-breastfeeding-diet',
  title: 'Nutrition and Diet While Breastfeeding',
  category: 'maternal',
  searchTerms: [
    'breastfeeding diet',
    'what to eat while breastfeeding',
    'foods to avoid breastfeeding',
    'breastfeeding nutrition',
    'postpartum diet',
    'diet to increase milk supply',
    'breastfeeding calories needed',
    'vitamins while breastfeeding',
    'foods that cause gas in breastfed baby',
    'breastfeeding and weight loss diet',
    'lactation diet plan',
  ],
  quickAnswer:
    'Breastfeeding requires approximately 450-500 extra calories per day, and a varied, balanced diet is the best approach for both you and your baby. There is no specific list of foods you must eat or avoid while breastfeeding. Most foods, including spicy foods and common allergens, are fine to eat. Stay well hydrated, continue taking a postnatal vitamin, and focus on nutrient-dense whole foods rather than restrictive dieting.',
  byAge: [
    {
      ageRange: '0-6 weeks postpartum',
      context:
        'In the early weeks, focus on eating regular meals and snacks to support your recovery and establish your milk supply. You need extra calories, but this is not the time for dieting. Prioritize protein (lean meats, eggs, beans, dairy), whole grains, fruits, and vegetables. Continue taking a prenatal or postnatal vitamin with DHA, as your baby depends on you for omega-3 fatty acids important for brain development. Keep water bottles in places where you nurse and aim for at least eight to ten cups of fluid daily.',
    },
    {
      ageRange: '6 weeks to 3 months postpartum',
      context:
        'As breastfeeding becomes more established, continue eating a varied diet. Contrary to popular belief, most babies are not bothered by specific foods in their mother\'s diet. If you suspect a particular food is causing fussiness in your baby, try eliminating it for two to three weeks and then reintroduce it to see if symptoms return. The most common culprit, when there is one, is cow\'s milk protein rather than spicy foods, garlic, or broccoli. Vitamin D supplementation for your breastfed baby (400 IU daily) is recommended by the AAP.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'You may feel ready to focus more on your own nutrition and health at this stage. Gradual, moderate weight loss of about one to two pounds per week is generally safe and does not affect milk supply. Crash diets, very low-calorie diets, and liquid cleanses can reduce milk supply and deplete your nutritional stores. Focus on nutrient density rather than calorie restriction. Iron-rich foods are important, as many postpartum individuals are iron-depleted. Include leafy greens, lean red meat, lentils, and fortified cereals.',
    },
    {
      ageRange: '6+ months postpartum',
      context:
        'As your baby begins solid foods, you remain their primary nutrition source for the first year. Continue eating well and staying hydrated. If you are considering a specific diet (plant-based, keto, etc.), ensure you are getting adequate protein, calcium, iron, vitamin B12, and omega-3 fatty acids. A registered dietitian can help create a plan that meets your needs without compromising milk quality. Alcohol should be limited, and if consumed, waiting at least two hours per drink before nursing is recommended.',
    },
  ],
  whenNormal: [
    'Feeling hungrier than usual, especially during the first few months of breastfeeding',
    'Needing to drink more water than you did before breastfeeding',
    'Gradual weight loss without intentional dieting',
    'Your baby gaining weight well regardless of the specific foods you eat',
  ],
  whenToMention: [
    'You are losing weight very rapidly (more than two pounds per week) without trying',
    'You suspect your baby has a food allergy or intolerance related to your diet (blood in stool, persistent eczema, extreme fussiness)',
    'You are following a very restrictive diet and want to ensure you are meeting nutritional needs',
    'You are experiencing hair loss, extreme fatigue, or other signs of nutritional deficiency',
  ],
  whenToActNow: [
    'You are unable to eat or keep food down due to illness and are concerned about dehydration',
    'You are experiencing signs of severe malnutrition or an eating disorder that is affecting your ability to care for yourself or your baby',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-water-intake-breastfeeding',
    'postpartum-weight-loss-breastfeeding',
    'postpartum-caffeine-breastfeeding-safe',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Maternal Diet. Breastfeeding, 2024.',
      url: 'https://www.cdc.gov/breastfeeding/breastfeeding-special-circumstances/diet-and-micronutrients/maternal-diet.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Nutrition During Breastfeeding. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/breastfeeding-your-baby',
    },
  ],
};
