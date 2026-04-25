import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'iron-deficiency-from-milk',
  title: 'My Toddler Drinks Too Much Milk (Iron Deficiency Risk)',
  category: 'feeding',
  searchTerms: [
    'toddler drinking too much milk',
    'toddler iron deficiency milk',
    'toddler anemia from milk',
    'toddler only wants milk',
    'milk anemia toddler',
    'toddler prefers milk over food',
    'how much milk for toddler',
    'toddler pale from too much milk',
    'cow\'s milk iron deficiency',
    'toddler addicted to milk',
  ],
  quickAnswer:
    'While milk is nutritious, toddlers who drink too much cow\'s milk, more than 24 ounces per day, are at risk for iron deficiency anemia. Cow\'s milk is low in iron and can interfere with iron absorption, and filling up on milk reduces appetite for iron-rich foods. The AAP recommends limiting cow\'s milk to 16 to 24 ounces per day for toddlers.',
  byAge: [
    {
      ageRange: '12-18 months',
      context:
        'This is the transition period from breast milk or formula to cow\'s milk and an increasingly solid food diet. Many toddlers love milk and would happily drink it all day, but it is important to set limits early. Offer milk with meals and water between meals. If your toddler was previously on formula, the transition to cow\'s milk is a good opportunity to establish healthy limits. Aim for no more than 16 to 24 ounces of whole cow\'s milk per day.',
    },
    {
      ageRange: '18-24 months',
      context:
        'If your toddler is drinking more than 24 ounces of milk per day, they are likely filling up on milk and eating less solid food, which puts them at risk for iron deficiency. Iron is critical for brain development at this age. Gradually reduce milk intake by offering smaller portions of milk at meals and providing water in a cup throughout the day. Increasing iron-rich foods such as meat, beans, fortified cereals, and leafy greens alongside vitamin C-rich foods can help rebuild iron stores.',
    },
    {
      ageRange: '2-3 years',
      context:
        'By age 2, your child can switch from whole milk to low-fat or fat-free milk, and the recommended intake remains 16 to 24 ounces per day. If your toddler has been drinking excessive milk and you are concerned about iron deficiency, your pediatrician can check iron levels with a simple blood test. Symptoms of iron deficiency anemia include pallor, fatigue, irritability, poor appetite, and in some cases, cravings for non-food items like ice or dirt.',
    },
  ],
  whenNormal: [
    'Your toddler drinks 16 to 24 ounces of milk per day and eats a varied diet',
    'Your toddler prefers milk at certain meals but still eats solid food throughout the day',
    'Your toddler went through a brief phase of wanting extra milk during a growth spurt or illness',
    'Your toddler\'s skin color is healthy and they have good energy levels',
  ],
  whenToMention: [
    'Your toddler consistently drinks more than 24 ounces of milk per day and has limited interest in solid food',
    'Your toddler looks unusually pale, is more tired than usual, or seems irritable without clear cause',
    'Your toddler craves unusual non-food items such as ice, dirt, or chalk, which can be a sign of iron deficiency',
  ],
  whenToActNow: [
    'Your toddler is extremely pale, lethargic, has a rapid heartbeat, or is short of breath, which may indicate severe anemia',
    'Your toddler is eating non-food items such as paint chips or soil, which could lead to lead poisoning in addition to indicating iron deficiency',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Recommended Drinks for Children Age 5 and Younger. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Recommended-Drinks-for-Young-Children-Ages-0-5.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diagnosis and Prevention of Iron Deficiency and Iron-Deficiency Anemia in Infants and Young Children. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/126/5/1040/65344/Diagnosis-and-Prevention-of-Iron-Deficiency-and',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Iron Deficiency in Children.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/vitamins-minerals/iron.html',
    },
  ],
};
