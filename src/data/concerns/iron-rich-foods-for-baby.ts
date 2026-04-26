import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'iron-rich-foods-for-baby',
  title: 'Iron-Rich Foods for Babies',
  category: 'feeding',
  searchTerms: [
    'iron rich foods for baby',
    'baby iron deficiency',
    'iron in baby diet',
    'best first foods for iron',
    'iron fortified cereal baby',
    'when do babies need iron',
    'signs of low iron in baby',
    'iron supplements for baby',
    'breastfed baby iron needs',
    'meat for baby first foods',
    'anemia in babies',
  ],
  quickAnswer:
    'Iron is one of the most important nutrients for your baby\'s brain development, and iron needs increase significantly around six months of age when the iron stores they were born with begin to deplete. Introducing iron-rich foods as some of your baby\'s first solids is recommended by the AAP. Great first iron-rich foods include iron-fortified infant cereal, pureed meats, beans, lentils, and tofu. Pairing iron-rich foods with vitamin C sources like fruits and vegetables helps your baby absorb more iron.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Full-term babies are born with iron stores that typically last about four to six months. Breast milk contains a small amount of highly bioavailable iron, while infant formula is fortified with iron. No additional iron-rich foods or supplements are needed at this age for most babies. Premature babies may need an iron supplement starting at two weeks of age, as they are born with lower iron stores.',
    },
    {
      ageRange: '4-6 months',
      context:
        'As your baby approaches six months, their iron stores begin to run low. This is one reason why around six months is the recommended time to introduce complementary foods. The AAP recommends that iron-rich foods be among the first foods introduced. Iron-fortified single-grain infant cereal (such as oat or rice cereal) mixed with breast milk or formula is an easy first iron source. Pureed meats are also an excellent early food, as they contain heme iron which is the most easily absorbed form.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Aim to include an iron-rich food at most meals. Good options include iron-fortified infant cereal, pureed or finely minced chicken, turkey, beef, pork, or fish, mashed beans and lentils, tofu, and egg yolks. Pair these with vitamin C-rich foods like sweet potato, broccoli, strawberries, or citrus to boost iron absorption. If your baby is breastfed and not eating much solid food yet, talk to your pediatrician about whether an iron supplement is appropriate.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, your baby should be eating a variety of iron-rich foods regularly. Finger foods like small pieces of soft-cooked meat, bean patties, scrambled eggs, and strips of tofu are great options. Iron-fortified cereals can be mixed into other foods like yogurt or mashed banana. The AAP recommends screening for iron-deficiency anemia around 12 months of age.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers need about 7 mg of iron per day. Good sources include red meat, poultry, fish, beans, fortified cereals, spinach, and dried fruits like raisins. Be aware that drinking too much cow\'s milk (more than 24 ounces per day) can interfere with iron absorption and is one of the most common causes of iron-deficiency anemia in toddlers. If your toddler is a picky eater, a multivitamin with iron may be helpful.',
    },
  ],
  whenNormal: [
    'Your baby does not take to iron-fortified cereal right away but accepts other iron-rich foods like meats or beans',
    'Your baby\'s stool becomes darker or greenish after starting iron-rich foods or supplements, which is a normal color change',
    'Your baby eats varying amounts of iron-rich foods from day to day',
    'Your breastfed baby\'s iron levels are normal at the 12-month screening',
  ],
  whenToMention: [
    'Your baby is breastfed, is eating very little solid food by 9 months, and you are concerned about iron intake',
    'Your baby was born premature or had a low birth weight, which increases the risk of iron deficiency',
    'Your toddler\'s diet is very limited and you are unsure if they are getting enough iron',
  ],
  whenToActNow: [
    'Your baby appears very pale, is unusually tired or irritable, has rapid breathing, or craves non-food items like dirt or ice, which are signs of significant iron-deficiency anemia',
    'Your baby has been diagnosed with severe anemia that requires medical treatment',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diagnosis and Prevention of Iron Deficiency and Iron-Deficiency Anemia in Infants and Young Children. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/126/5/1040/65365/Diagnosis-and-Prevention-of-Iron-Deficiency-and',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Iron.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/vitamins-minerals/iron.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Iron Deficiency Anaemia: Assessment, Prevention and Control.',
      url: 'https://www.who.int/publications/m/item/iron-children-6to23--archived-iron-deficiency-anaemia-assessment-prevention-and-control',
    },
  ],
};
