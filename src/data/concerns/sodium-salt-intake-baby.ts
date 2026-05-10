import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sodium-salt-intake-baby',
  title: 'Sodium and Salt Intake for Babies',
  category: 'feeding',
  searchTerms: [
    'salt for baby safe',
    'how much sodium can baby have',
    'baby food sodium limit',
    'adding salt to baby food',
    'too much salt infant',
    'sodium in toddler food',
    'salty food for baby harmful',
    'baby kidney salt damage',
    'low sodium foods for baby',
  ],
  quickAnswer:
    'Babies under 12 months should consume less than 400 mg of sodium per day (less than 1 gram of salt), and toddlers aged 1-3 should have no more than 800 mg of sodium per day. Babies\' immature kidneys cannot process excess sodium efficiently. Breast milk and formula provide the right amount of sodium for infants. When introducing solids, do not add salt to baby food and be cautious with processed foods, which often contain high sodium levels.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Breast milk contains about 160 mg of sodium per liter, which is the perfect amount for newborns. Infant formula is carefully formulated to match this level. No additional sodium is needed or safe at this age. A baby\'s kidneys are still immature and cannot efficiently excrete excess sodium, making overconsumption potentially dangerous.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue exclusive breastfeeding or formula-feeding. The sodium content in breast milk and formula remains adequate. Never add salt, soy sauce, or other high-sodium seasonings to anything given to an infant. If complementary feeding begins around 4-6 months under pediatric guidance, foods should be unseasoned.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, babies begin consuming some sodium from foods naturally. The adequate intake for infants 7-12 months is 370 mg of sodium per day. Avoid adding salt to homemade baby food and read labels on commercial baby foods. Be cautious with bread (which can be surprisingly high in sodium), cheese, and processed meats. Offer fresh or frozen fruits and vegetables (without added sauces) as primary foods.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers aged 1-3 should consume no more than 800 mg of sodium per day, but many toddler diets far exceed this. Common high-sodium culprits include deli meats, hot dogs, canned soups, cheese, crackers, and restaurant foods. When cooking for the family, season adult portions separately and keep toddler portions unsalted or lightly salted. Gradually exposing your toddler to a variety of flavors using herbs and spices rather than salt helps establish healthier long-term preferences.',
    },
  ],
  whenNormal: [
    'Your baby is exclusively breastfed or formula-fed and receiving no additional sodium',
    'Your baby eats homemade foods prepared without added salt and a few low-sodium commercial baby foods',
    'Your toddler occasionally eats foods with moderate sodium content as part of a varied diet',
    'Your toddler drinks plain water and milk rather than salted or flavored beverages',
  ],
  whenToMention: [
    'Your toddler\'s diet consists largely of processed or packaged foods and you are concerned about sodium intake',
    'Your baby or toddler seems excessively thirsty, which could indicate high sodium intake or other conditions',
    'You are unsure how to read nutrition labels for sodium content in baby and toddler foods',
  ],
  whenToActNow: [
    'Your baby has accidentally consumed a large amount of salt (such as eating salt directly or drinking very salty water) and is showing signs of irritability, vomiting, or lethargy',
    'Your baby or toddler has significant swelling (edema), reduced urine output, or extreme thirst following high sodium intake',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Salt and Sodium. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Sodium-and-Salt.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Guideline: Sodium Intake for Adults and Children.',
      url: 'https://www.who.int/publications/i/item/9789241504836',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Sodium and Child Health.',
      url: 'https://www.cdc.gov/salt/reduce-sodium/children-sodium.html',
    },
  ],
};
