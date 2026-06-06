import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-multivitamin-need',
  title: 'Does My Baby Need a Multivitamin?',
  category: 'feeding',
  searchTerms: [
    'baby multivitamin necessary',
    'does baby need vitamins',
    'infant multivitamin',
    'baby vitamin supplement need',
    'when to start baby vitamins',
    'baby multivitamin drops',
    'breastfed baby vitamins needed',
    'formula fed baby vitamins',
    'baby nutritional supplements',
    'vitamins for infant',
  ],
  quickAnswer:
    'Most babies who are breastfed need vitamin D supplementation, and those who are formula-fed typically get adequate vitamins through fortified formula. A full multivitamin is generally not necessary for babies eating a varied diet. Your pediatrician can help determine if your specific baby needs any supplements based on their diet, health, and risk factors.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Breastfed babies need 400 IU of vitamin D daily. Formula-fed babies getting at least 32 ounces of formula per day typically get enough vitamin D from formula. No other multivitamin is usually needed at this stage.',
    },
    {
      ageRange: '4-6 months',
      context: 'Continue vitamin D for breastfed babies. As solids are introduced, most vitamins and minerals will come from food. Premature babies may need additional supplements as directed by their pediatrician.',
    },
    {
      ageRange: '6-9 months',
      context: 'If baby is eating a variety of solid foods including fruits, vegetables, proteins, and iron-rich foods, a multivitamin is generally not needed. Focus on dietary variety rather than supplements.',
    },
    {
      ageRange: '9-12 months',
      context: 'Most babies with a reasonably varied diet do not need a multivitamin. Exceptions may include babies with restricted diets due to allergies, medical conditions, or very limited food acceptance.',
    },
    {
      ageRange: '12-24 months',
      context: 'For picky toddlers with very limited diets, a multivitamin may be recommended by your pediatrician as a nutritional safety net. Focus first on improving dietary variety, but a supplement can help fill gaps. Choose one formulated for infants and toddlers to avoid excessive doses.',
    },
  ],
  whenNormal: [
    'Breastfed baby receives vitamin D drops only',
    'Formula-fed baby does not take additional vitamins',
    'Baby with a varied diet does not need a multivitamin',
  ],
  whenToMention: [
    'Baby is on a very restricted diet due to allergies or picky eating',
    'Baby follows a vegan or vegetarian diet and you are concerned about B12 and other nutrients',
    'Baby has a medical condition that may affect nutrient absorption',
  ],
  whenToActNow: [
    'Baby shows signs of a severe nutritional deficiency such as rickets, scurvy, or anemia',
    'Baby has accidentally consumed excessive amounts of vitamins, especially fat-soluble ones like A and D',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-vitamin-d-drops-taste', 'toddler-vitamin-supplement-need', 'baby-omega-3-dha-importance'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Vitamins and Mineral Supplements for Babies. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Multivitamin/Mineral Supplements Fact Sheet. Office of Dietary Supplements, 2022.',
      url: 'https://ods.od.nih.gov/factsheets/MVMS-HealthProfessional/',
    },
  ],
};
