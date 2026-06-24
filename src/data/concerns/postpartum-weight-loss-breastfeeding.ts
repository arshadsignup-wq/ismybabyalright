import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-weight-loss-breastfeeding',
  title: 'Weight Loss While Breastfeeding: What Is Safe',
  category: 'maternal',
  searchTerms: [
    'weight loss breastfeeding',
    'losing weight while breastfeeding',
    'breastfeeding weight loss',
    'postpartum weight loss safe',
    'diet while breastfeeding weight',
    'not losing weight breastfeeding',
    'breastfeeding hold onto weight',
    'can\'t lose weight nursing',
    'calorie deficit breastfeeding safe',
    'postpartum body weight',
    'when will I lose baby weight',
  ],
  quickAnswer:
    'Gradual weight loss of one to two pounds per week is generally safe while breastfeeding and should not affect your milk supply. Most breastfeeding parents naturally lose weight over time as nursing burns approximately 450-500 extra calories daily. However, some people find their bodies hold onto weight while breastfeeding, particularly around the hips and thighs, due to hormonal changes. Crash diets, very low-calorie diets (under 1800 calories), and rapid weight loss can reduce milk supply and deplete your nutritional stores.',
  byAge: [
    {
      ageRange: '0-6 weeks postpartum',
      context:
        'In the first six weeks, focus on recovery and establishing your milk supply rather than weight loss. Your body will naturally shed excess fluid and some weight during this time. Immediately postpartum, you lose about 10-13 pounds (from the baby, placenta, and amniotic fluid), and additional water weight follows over the next few weeks. Eating regular, nutritious meals to fuel recovery and milk production is more important than restricting calories at this stage.',
    },
    {
      ageRange: '6 weeks to 3 months postpartum',
      context:
        'After your postpartum checkup, you can begin focusing more intentionally on nutrition and gentle exercise. Aim for at least 1800 calories daily while breastfeeding, though most people need more. Focus on nutrient-dense foods rather than calorie counting. Some parents lose weight effortlessly while breastfeeding, while others find their body stubbornly holds onto reserves. Both experiences are normal and largely driven by hormones. Prolactin, the hormone that stimulates milk production, can promote fat storage in some individuals.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'A moderate approach combining balanced nutrition with gradually increasing physical activity is the safest path. Avoid fad diets, detoxes, or extreme restriction, all of which can reduce milk supply and leave you nutrient-depleted. If you are not losing weight despite eating well and exercising, consider having your thyroid checked, as postpartum thyroiditis can cause weight retention. Be patient with your body: it took nine months to grow a baby, and it is reasonable for recovery to take at least that long.',
    },
    {
      ageRange: '6+ months postpartum',
      context:
        'Some parents notice weight loss accelerates after the six-month mark as their baby starts solids and breastfeeding frequency changes. Others may not see significant weight change until they fully wean. Both patterns are normal. Focus on how you feel functionally (energy, strength, mood) rather than a number on the scale. If weight is causing significant distress, a registered dietitian who specializes in postpartum nutrition can create a sustainable plan. Your body has done something extraordinary, and it deserves kindness.',
    },
  ],
  whenNormal: [
    'Losing one to two pounds per week while eating well and staying active',
    'Not losing weight despite breastfeeding, especially in the first few months',
    'Your body shape and weight distribution looking different from pre-pregnancy',
    'Gradual, effortless weight loss that occurs naturally while nursing',
  ],
  whenToMention: [
    'You are losing weight very rapidly (more than two pounds per week) without intentional dieting',
    'You are unable to lose weight and are experiencing fatigue, hair loss, or mood changes that could suggest thyroid issues',
    'You are struggling with disordered eating behaviors or body image distress',
    'Your milk supply has dropped significantly since starting a new diet or exercise program',
  ],
  whenToActNow: [
    'You are experiencing symptoms of an eating disorder such as restricting severely, bingeing, or purging while breastfeeding',
    'You have rapid unexplained weight loss accompanied by excessive thirst, frequent urination, or other concerning symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-nutrition-breastfeeding-diet',
    'postpartum-exercise-when-to-start',
    'postpartum-body-image',
  ],
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Nutrition During Breastfeeding. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/breastfeeding-your-baby',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Maternal Diet and Weight Loss. Breastfeeding, 2024.',
      url: 'https://www.cdc.gov/breastfeeding/breastfeeding-special-circumstances/diet-and-micronutrients/maternal-diet.html',
    },
    {
      org: 'NIH',
      citation:
        'Dewey KG. Energy and Protein Requirements During Lactation. Annual Review of Nutrition, 1997.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/9240919/',
    },
  ],
};
