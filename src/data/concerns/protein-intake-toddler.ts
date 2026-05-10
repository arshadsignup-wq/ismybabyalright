import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'protein-intake-toddler',
  title: 'Protein Intake for Toddlers',
  category: 'feeding',
  searchTerms: [
    'protein for toddler',
    'how much protein does toddler need',
    'toddler not eating enough protein',
    'protein rich foods for baby',
    'toddler refuses meat',
    'vegetarian toddler protein',
    'protein sources for picky toddler',
    'baby protein needs',
  ],
  quickAnswer:
    'Most toddlers in developed countries actually get more than enough protein. Children aged 1-3 years need about 13 grams of protein per day, which is easily met through a varied diet. Even picky eaters typically consume sufficient protein from milk, cheese, yogurt, eggs, and grains. Protein deficiency in well-fed toddlers is extremely rare, though children on very restricted diets may need monitoring.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Infants in this age range get all the protein they need from breast milk or formula. Breast milk contains approximately 1 gram of protein per 100 mL, which is perfectly calibrated for infant needs. Infant formulas are designed to closely match the protein content and quality of breast milk. No additional protein sources are needed.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue exclusive breastfeeding or formula-feeding. The protein in breast milk and formula remains fully adequate for growth and development. Introducing high-protein complementary foods before 4-6 months is not recommended, as the infant\'s kidneys are not yet mature enough to handle excess protein efficiently.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As complementary foods are introduced, good first protein sources include pureed meats, poultry, fish, mashed beans, lentils, tofu, and egg yolks (whole eggs can be introduced as early as 6 months). Infants 7-12 months need about 11 grams of protein per day, much of which still comes from breast milk or formula. Offer a variety of protein sources to expose your baby to different textures and flavors.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers aged 1-3 need approximately 13 grams of protein per day. For reference, one cup of whole milk provides 8 grams, one egg provides 6 grams, and one ounce of chicken provides 7 grams. Most toddlers far exceed their protein needs. If your toddler refuses meat, other excellent protein sources include yogurt, cheese, nut butters (spread thin), beans, lentils, tofu, and whole grains like quinoa. Focus on variety rather than quantity.',
    },
  ],
  whenNormal: [
    'Your toddler eats small amounts of protein-containing foods throughout the day and is growing well',
    'Your toddler prefers dairy-based proteins over meat and still gets adequate protein overall',
    'Your toddler is a picky eater but still consumes milk, cheese, yogurt, or eggs regularly',
    'Your toddler\'s protein intake varies from day to day, which is completely normal for this age',
  ],
  whenToMention: [
    'Your toddler is on a very restricted diet (such as vegan) and you are unsure about meeting protein needs',
    'Your toddler is consistently losing weight or falling off their growth curve',
    'Your toddler has chronically dry, thinning hair, or persistent swelling in the extremities, which could indicate severe protein deficiency',
  ],
  whenToActNow: [
    'Your toddler shows signs of severe malnutrition such as muscle wasting, significant edema (swelling), and failure to thrive',
    'Your toddler has not gained weight or has lost weight significantly over several months despite being offered food',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Protein: Nutrition for Toddlers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids.',
      url: 'https://ods.od.nih.gov/HealthInformation/Dietary-Reference-Intakes.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Foods and Drinks for 12 to 23 Months Old.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/12-to-23-months-old.html',
    },
  ],
};
