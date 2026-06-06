import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'finger-food-readiness-signs',
  title: 'How Do I Know My Baby Is Ready for Finger Foods?',
  category: 'feeding',
  searchTerms: ['baby ready finger foods', 'when to start finger foods', 'finger food signs readiness', 'baby finger food age', 'first finger foods baby', 'baby self feeding readiness', 'when can baby eat finger food', 'finger food milestones', 'baby picking up food', 'baby ready for table food'],
  quickAnswer: 'Babies are typically ready for finger foods around 8-10 months when they can sit independently, bring objects to their mouth accurately, have developed a raking or pincer grasp, and can chew or munch (even without teeth). Start with soft, easily dissolvable foods cut into appropriate sizes. Baby does not need teeth to eat finger foods since gums are surprisingly strong.',
  byAge: [
    { ageRange: '0-3 months', context: 'Not applicable. Baby is not ready for any solid foods.' },
    { ageRange: '4-6 months', context: 'Baby is typically starting purees. Some baby-led weaning approaches introduce soft finger foods at 6 months when baby can sit unsupported and shows interest in food.' },
    { ageRange: '6-9 months', context: 'Many babies show readiness for finger foods during this period. Signs include sitting well without support, picking up objects with a raking grasp, bringing items to their mouth, and showing interest in your food. Start with very soft foods like ripe banana, avocado, steamed sweet potato, and dissolvable puffs.' },
    { ageRange: '9-12 months', context: 'Most babies are ready for a variety of finger foods. The pincer grasp develops around 8-10 months, allowing baby to pick up small pieces. Offer foods cut into strips or small pieces depending on grasp development. Continue to avoid choking hazards.' },
    { ageRange: '12-24 months', context: 'Toddlers should be eating a variety of finger foods and beginning to use utensils. If your toddler is still not interested in finger foods, discuss with your pediatrician.' },
  ],
  whenNormal: ['Baby reaches for food on your plate during meals', 'Baby picks up soft foods and brings them to their mouth', 'Baby chews and gums soft foods even without teeth', 'Baby has occasional gagging as they learn to manage new textures'],
  whenToMention: ['Baby shows no interest in finger foods by 10 months', 'Baby gags severely every time they try to pick up food', 'Baby cannot bring food to their mouth accurately by 9-10 months'],
  whenToActNow: ['Baby chokes on finger foods requiring intervention', 'Baby appears unable to swallow any solid food and coughs or chokes every time'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-led-weaning-safety', 'baby-pincer-grasp-feeding', 'baby-choking-on-food'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Finger Foods for Babies. HealthyChildren.org, 2024.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Finger-Foods-for-Babies.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Tastes and Textures for Infants. 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/tastes-and-textures.html' },
  ],
};
