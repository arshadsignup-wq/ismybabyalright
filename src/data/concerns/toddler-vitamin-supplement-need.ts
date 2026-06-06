import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-vitamin-supplement-need',
  title: 'Does My Toddler Need a Vitamin Supplement?',
  category: 'feeding',
  searchTerms: [
    'toddler vitamin supplement',
    'toddler multivitamin need',
    'vitamins for toddler picky eater',
    'does toddler need vitamins',
    'best vitamins for toddler',
    'toddler vitamin deficiency',
    'gummy vitamins toddler',
    'toddler vitamin D supplement',
    'toddler vitamin drops or chewable',
    'toddler nutritional supplement',
  ],
  quickAnswer:
    'Most toddlers who eat a reasonably varied diet do not need a multivitamin. However, very picky eaters, toddlers on restricted diets due to allergies, or those following vegan or vegetarian diets may benefit from supplementation. Vitamin D is commonly recommended for all toddlers who drink less than 16 ounces of fortified milk daily. Consult your pediatrician before starting any supplement.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Vitamin D drops are recommended for breastfed babies. No multivitamin is needed.',
    },
    {
      ageRange: '4-6 months',
      context: 'Continue vitamin D. No multivitamin needed as breast milk or formula plus emerging solids provide adequate nutrition.',
    },
    {
      ageRange: '6-9 months',
      context: 'Focus on offering a variety of nutrient-rich foods. Supplements are not typically needed at this stage.',
    },
    {
      ageRange: '9-12 months',
      context: 'If baby eats a varied diet, supplements are usually unnecessary. Babies with restricted diets may benefit from targeted supplementation as advised by their pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context: 'This is when parents most commonly consider vitamins because toddlers become picky eaters. A multivitamin can serve as a nutritional safety net but should not replace efforts to offer a varied diet. Look for a toddler-specific supplement without excessive doses. Avoid gummy vitamins for toddlers under 2 due to choking risk.',
    },
  ],
  whenNormal: [
    'Toddler eats a reasonably varied diet and does not need supplements',
    'Toddler takes vitamin D because their milk intake is low',
    'You give a toddler multivitamin as a safety net alongside a varied diet',
  ],
  whenToMention: [
    'Toddler is a very picky eater eating fewer than 10-15 foods',
    'Toddler follows a vegan or very restrictive diet',
    'You are unsure which supplement is appropriate for your toddler',
  ],
  whenToActNow: [
    'Toddler has consumed excessive amounts of vitamins, especially fat-soluble vitamins A and D which can be toxic in high doses',
    'Toddler shows signs of nutritional deficiency such as rickets, scurvy, or severe anemia',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-multivitamin-need', 'toddler-iron-deficiency-risk', 'picky-eating'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Vitamin Supplements for Toddlers. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Multivitamin/Mineral Supplements. Office of Dietary Supplements, 2022.',
      url: 'https://ods.od.nih.gov/factsheets/MVMS-HealthProfessional/',
    },
  ],
};
