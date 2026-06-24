import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-water-intake-breastfeeding',
  title: 'Hydration While Breastfeeding: How Much Water',
  category: 'maternal',
  searchTerms: [
    'how much water breastfeeding',
    'hydration breastfeeding',
    'water intake breastfeeding',
    'dehydration breastfeeding symptoms',
    'does drinking water increase milk supply',
    'breastfeeding thirsty',
    'water breastfeeding how many ounces',
    'dehydrated while breastfeeding',
    'hydration and milk supply',
    'fluids while nursing',
  ],
  quickAnswer:
    'Breastfeeding increases your fluid needs because breast milk is approximately 87% water. Most breastfeeding parents should aim for about 128 ounces (16 cups or about 3.8 liters) of total fluids daily, though individual needs vary based on activity level, climate, and body size. Drinking to thirst is generally adequate, but many new parents are so busy they forget to drink. Keeping a water bottle at every nursing station is a simple, effective strategy.',
  byAge: [
    {
      ageRange: '0-6 weeks postpartum',
      context:
        'In the early postpartum period, you are recovering from birth while establishing breastfeeding, and your body needs extra fluids for both. Many breastfeeding parents notice intense thirst during let-down, which is triggered by oxytocin release. This is your body\'s built-in reminder to hydrate. Make it a habit to have a full water bottle at every place you nurse. Your urine color is the simplest hydration indicator: pale yellow means well hydrated, dark yellow or amber means you need more fluids. Water, milk, herbal tea, and broth all count toward your fluid intake.',
    },
    {
      ageRange: '6 weeks to 3 months postpartum',
      context:
        'As breastfeeding becomes established and your milk supply regulates, maintain consistent hydration. While some parents worry that drinking more water will increase milk supply, research shows that drinking beyond thirst does not boost production. However, inadequate hydration can decrease supply and cause fatigue, headaches, and constipation. If you are struggling to drink enough, try flavoring water with fruit slices, setting phone reminders, or using a marked water bottle to track intake throughout the day.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Your fluid needs remain elevated as long as you are breastfeeding. During warmer months or if you are exercising, you will need additional fluids. Sports drinks are generally unnecessary unless you are doing prolonged vigorous exercise; water is the best choice for routine hydration. Avoid relying on caffeinated beverages as your primary fluid source, as excessive caffeine can have mild diuretic effects. Electrolyte drinks or coconut water can be helpful if you are very active or in a hot climate.',
    },
    {
      ageRange: '6+ months postpartum',
      context:
        'As your baby starts solid foods and may nurse less frequently, your fluid needs may decrease slightly but remain higher than pre-pregnancy levels as long as you continue breastfeeding. If you notice a dip in milk supply, check your hydration status before assuming other causes. Signs of dehydration include dark urine, dry lips and mouth, fatigue, dizziness, and constipation. By this stage, staying hydrated should be a well-established habit. Continue to drink consistently throughout the day.',
    },
  ],
  whenNormal: [
    'Feeling very thirsty during and immediately after breastfeeding sessions',
    'Needing to drink noticeably more fluids than before pregnancy',
    'Urine is consistently pale yellow throughout the day',
  ],
  whenToMention: [
    'You are consistently producing dark yellow urine despite trying to drink more',
    'You notice a decrease in milk supply and suspect dehydration',
    'You have persistent headaches, dizziness, or fatigue that may be related to hydration',
    'You are unsure about fluid needs with medical conditions like kidney issues or gestational diabetes',
  ],
  whenToActNow: [
    'You are unable to keep fluids down due to illness (vomiting, diarrhea) and are showing signs of severe dehydration (very dark urine, rapid heartbeat, confusion)',
    'You feel faint or dizzy when standing and have not been able to drink adequate fluids',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-nutrition-breastfeeding-diet',
    'postpartum-caffeine-breastfeeding-safe',
    'postpartum-constipation-remedies',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Maternal Diet. Breastfeeding, 2024.',
      url: 'https://www.cdc.gov/breastfeeding/breastfeeding-special-circumstances/diet-and-micronutrients/maternal-diet.html',
    },
    {
      org: 'NIH',
      citation:
        'National Academies of Sciences, Engineering, and Medicine. Dietary Reference Intakes for Water. National Academies Press, 2005.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK109832/',
    },
  ],
};
