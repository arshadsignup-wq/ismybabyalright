import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'excessive-fruit-juice-toddler',
  title: 'Excessive Fruit Juice Consumption',
  category: 'feeding',
  searchTerms: [
    'too much juice toddler',
    'fruit juice bad for baby',
    'how much juice can toddler have',
    'juice causing diarrhea toddler',
    'toddler drinks only juice',
    'fruit juice tooth decay baby',
    'juice limit for toddler',
    'apple juice baby safe',
    'juice instead of water toddler',
  ],
  quickAnswer:
    'The AAP recommends no fruit juice for babies under 12 months and no more than 4 ounces (1/2 cup) per day for toddlers aged 1-3 years. Excessive juice consumption can cause diarrhea, poor nutrition (by replacing more nutritious foods and milk), tooth decay, and contribute to excessive weight gain. Whole fruits are always a better choice than juice because they contain fiber, which slows sugar absorption and promotes healthy digestion.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Fruit juice is not recommended at any amount for babies under 12 months. Breast milk and formula provide complete nutrition and hydration. In the past, juice was sometimes recommended for constipation in young infants, but current guidelines advise against this practice. If your infant has constipation, speak with your pediatrician about appropriate interventions.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue to avoid juice entirely. Some parents are tempted to offer diluted juice as an early beverage, but this is not recommended. The natural sugars in juice can contribute to a preference for sweet beverages and may cause osmotic diarrhea in young infants. Breast milk or formula remains the only appropriate beverage.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Even as solids are introduced, juice should still be avoided. The AAP changed its guidelines in 2017 to recommend no juice before age 1 (previously the recommendation was no juice before 6 months). When your baby is ready for sips of liquid other than milk, offer plain water. If you want to provide fruit flavors, offer pureed or mashed whole fruit instead, which provides fiber and nutrients that juice lacks.',
    },
    {
      ageRange: '12 months+',
      context:
        'After the first birthday, juice can be introduced in limited amounts: no more than 4 ounces per day for ages 1-3. Choose 100% fruit juice (not "fruit drinks," "fruit cocktails," or "fruit-flavored beverages," which may contain added sugars). Serve juice only in an open cup, never a sippy cup or bottle, to reduce prolonged exposure to teeth. Do not allow your toddler to carry a cup of juice around or sip on it throughout the day. Better yet, offer whole fruit and water instead. If your toddler\'s juice intake has been high, gradually dilute it with increasing amounts of water to wean them off.',
    },
  ],
  whenNormal: [
    'Your baby under 12 months drinks no juice and is hydrated by breast milk or formula',
    'Your toddler has 4 ounces or less of 100% fruit juice per day as part of a balanced diet',
    'Your toddler prefers whole fruits over juice and drinks water throughout the day',
    'Your toddler occasionally has juice at a party or social setting but it is not a daily habit',
  ],
  whenToMention: [
    'Your toddler is drinking more than 8 ounces of juice daily and refuses water or milk',
    'Your toddler has chronic loose stools or diarrhea that may be related to excessive juice intake (toddler\'s diarrhea)',
    'Your toddler has visible dental cavities or your dentist has raised concerns about tooth decay from juice consumption',
  ],
  whenToActNow: [
    'Your toddler has signs of severe tooth decay with pain, swelling, or infection requiring urgent dental care',
    'Your toddler is failing to thrive or losing weight because juice is replacing nutrient-dense foods and milk in the diet',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'Heyman MB, Abrams SA; Section on Gastroenterology, Hepatology, and Nutrition, Committee on Nutrition. Fruit Juice in Infants, Children, and Adolescents: Current Recommendations. Pediatrics. 2017;139(6):e20170967.',
      url: 'https://publications.aap.org/pediatrics/article/139/6/e20170967/76508/Fruit-Juice-in-Infants-Children-and-Adolescents',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Where We Stand: Fruit Juice. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Where-We-Stand-Fruit-Juice.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Water and Healthier Drinks. Infant and Toddler Nutrition.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/water-and-healthier-drinks.html',
    },
  ],
};
