import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-first-foods-best-choices',
  title: 'What Are the Best First Foods for My Baby?',
  category: 'feeding',
  searchTerms: [
    'best first foods baby',
    'what to feed baby first',
    'starting solids first food',
    'baby first food recommendations',
    'iron rich first foods baby',
    'best baby food to start with',
    'first foods for baby list',
    'what should baby eat first',
    'starting solids what food first',
    'baby first solid food ideas',
  ],
  quickAnswer:
    'The best first foods for babies are iron-rich foods like iron-fortified infant cereal, pureed meats, and beans. There is no required order for introducing foods, but iron-rich options are prioritized because babies\' iron stores from birth begin to deplete around 6 months. Single-ingredient fruits, vegetables, and grains are all appropriate early foods.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Breast milk or formula provides all the nutrition your baby needs. Solid foods should not be introduced yet.',
    },
    {
      ageRange: '4-6 months',
      context: 'When your baby shows readiness signs, start with smooth, single-ingredient foods. Good options include iron-fortified infant cereal mixed with breast milk or formula, pureed sweet potato, pureed avocado, pureed banana, or pureed meat. Introduce one new food at a time and wait 2-3 days before introducing another to watch for allergies.',
    },
    {
      ageRange: '6-9 months',
      context: 'Expand the variety of foods offered. Include a range of fruits, vegetables, grains, proteins, and healthy fats. This is also the time to begin introducing common allergens like peanut butter (thinned), well-cooked eggs, and dairy. Offer a variety of flavors including less sweet options like broccoli and spinach.',
    },
    {
      ageRange: '9-12 months',
      context: 'By now, baby should be eating a wide variety of foods from all food groups. Offer soft finger foods alongside purees. Include foods with different flavors, textures, and colors. Family meals with appropriate modifications are encouraged.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers can eat most family foods with appropriate size and texture modifications. Continue to offer a variety. It is normal for toddlers to become pickier, so the broad foundation you built in the first year is valuable.',
    },
  ],
  whenNormal: [
    'Baby shows interest in food around 6 months',
    'Baby takes a few days to accept a new food',
    'Baby prefers some foods over others',
    'Baby eats small amounts at first and gradually increases intake',
  ],
  whenToMention: [
    'Baby shows no interest in solid foods after 7 months',
    'Baby has a strong family history of food allergies and you need guidance on allergen introduction',
    'You are unsure which foods are safe for your baby\'s age',
  ],
  whenToActNow: [
    'Baby has an allergic reaction to a new food such as hives, swelling, vomiting, or difficulty breathing',
    'Baby chokes on a first food and you need emergency intervention',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-starting-solids-when-ready', 'baby-single-ingredient-first', 'introducing-common-allergens-safely'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. When, What, and How to Introduce Solid Foods. 2023.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/when-to-introduce-solid-foods.html',
    },
    {
      org: 'WHO',
      citation: 'World Health Organization. Complementary Feeding. 2023.',
      url: 'https://www.who.int/health-topics/complementary-feeding',
    },
  ],
};
