import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'excessive-juice-consumption',
  title: 'Excessive Juice Consumption in Toddlers',
  category: 'feeding',
  searchTerms: [
    'toddler drinks too much juice',
    'juice for toddlers',
    'how much juice is too much',
    'toddler only wants juice',
    'juice causing diarrhea toddler',
    'toddler juice limit',
    'fruit juice bad for toddlers',
    'toddler refusing water only wants juice',
    'juice and tooth decay toddler',
    'should toddlers drink juice',
  ],
  quickAnswer:
    'The AAP recommends no fruit juice for babies under 12 months and no more than 4 ounces per day for toddlers ages 1 to 3. While 100% fruit juice contains some vitamins, it is high in sugar and calories, can cause diarrhea and tooth decay, and often displaces more nutritious foods and drinks. If your toddler has developed a strong preference for juice, gradually diluting it with water and offering whole fruits instead are effective strategies.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under six months should only have breast milk or formula. Juice is never appropriate at this age. It offers no nutritional benefit and can interfere with breast milk or formula intake. If you have been advised to give juice for constipation, small amounts (1 to 2 ounces) of prune or pear juice may be used after two months of age, but only under your pediatrician\'s guidance.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The AAP recommends no fruit juice for babies under 12 months. At this age, whole fruits are a much better option because they contain fiber, which helps with digestion and slows sugar absorption. Offer water in a cup with meals once your baby starts solids. If juice is introduced before one year, it can establish a strong preference that is difficult to change later.',
    },
    {
      ageRange: '1-2 years',
      context:
        'If you choose to offer juice, limit it to no more than 4 ounces per day of 100% fruit juice (not fruit-flavored drinks, which are essentially sugar water). Serve juice in a cup at mealtimes, never in a bottle or sippy cup that your toddler carries around throughout the day. Toddlers who sip juice all day are at high risk for tooth decay because their teeth are constantly bathed in sugar.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Continue limiting juice to 4 ounces per day. If your toddler is already drinking more than this and refusing water, try gradually diluting the juice with increasing amounts of water over one to two weeks until you reach a ratio your child accepts. Offer whole fruits to satisfy their preference for sweet flavors while providing fiber and more complete nutrition. Make water the default drink in your home.',
    },
  ],
  whenNormal: [
    'Your toddler prefers juice over water but will drink water when juice is not available',
    'Your toddler drinks 4 ounces or less of 100% fruit juice per day alongside a balanced diet',
    'Your toddler has slightly looser stools on days when they drink more juice than usual',
    'Your toddler prefers the taste of sweet drinks, which is a natural biological preference',
  ],
  whenToMention: [
    'Your toddler drinks more than 8 ounces of juice daily and refuses most solid foods',
    'Your toddler has chronic diarrhea that may be related to excessive juice intake (sometimes called "toddler\'s diarrhea")',
    'Your child\'s dentist has identified early signs of tooth decay that may be related to juice consumption',
  ],
  whenToActNow: [
    'Your toddler is losing weight or not gaining weight because juice is replacing nutritious meals',
    'Your toddler has severe, persistent diarrhea with signs of dehydration',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fruit Juice in Infants, Children, and Adolescents: Current Recommendations. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/139/6/e20170967/27298/Fruit-Juice-in-Infants-Children-and-Adolescents',
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
        'Centers for Disease Control and Prevention. Drinks and Foods to Limit.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/foods-and-drinks-to-limit.html',
    },
  ],
};
