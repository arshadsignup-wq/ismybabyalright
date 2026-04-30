import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-starting-solids-when-ready',
  title: 'When to Start Solid Foods for Baby',
  category: 'feeding',
  searchTerms: ['when to start solids baby', 'when can baby eat food', 'baby ready for solids signs', 'starting solids 4 months vs 6 months', 'baby first foods', 'when to introduce baby food', 'baby solid food readiness', 'baby showing interest in food', 'when to start purees', 'signs baby ready for solids'],
  quickAnswer: 'Most babies are ready to start solid foods around 6 months of age, though some may be ready between 4-6 months. The AAP recommends exclusive breastfeeding for the first 6 months, with solids introduced around 6 months alongside continued breastfeeding. Key readiness signs include: sitting with minimal support, good head and neck control, showing interest in food, opening their mouth when food approaches, and loss of the tongue-thrust reflex that pushes food out of the mouth.',
  byAge: [
    { ageRange: '4-5 months', context: 'Some pediatricians may suggest starting solids as early as 4 months, especially for formula-fed babies or those at high risk for food allergies (early allergen introduction may reduce allergy risk). However, your baby must show physical readiness signs: sitting with support, good head control, and interest in food. If your baby still pushes food out with their tongue (tongue-thrust reflex), they are not ready yet. Breast milk or formula remains the primary nutrition source.' },
    { ageRange: '6 months', context: 'This is the most commonly recommended age to start. Good first foods include iron-fortified single-grain cereal, pureed meats, or iron-rich vegetables. Introduce one new food every 2-3 days to watch for allergic reactions. There is no evidence that starting with vegetables before fruits prevents sweet preference. Current AAP guidelines recommend introducing common allergens (peanut, egg, dairy) early rather than delaying them.' },
    { ageRange: '7-12 months', context: 'Gradually increase texture from smooth purees to mashed and then soft finger foods. By 8-9 months, most babies can handle soft, small pieces of food and enjoy feeding themselves. Offer a variety of flavors and colors. If your baby was not interested in solids at 6 months, try again every few weeks - some babies are not ready until 7-8 months, which is fine as long as they are growing well on breast milk or formula.' },
  ],
  whenNormal: ['Starting solids between 4-6 months based on readiness signs', 'Your baby showing more interest some days than others', 'Your baby eating very small amounts at first (1-2 teaspoons)', 'Gagging on new textures as they learn to manage food in their mouth', 'Breast milk or formula remaining the primary nutrition through 12 months'],
  whenToMention: ['You are unsure whether your baby is showing readiness signs', 'Your baby was premature and you need guidance on adjusted age for starting solids', 'Your baby has severe eczema or a family history of food allergies and you want allergen introduction guidance', 'Your baby is 7-8 months and shows no interest in solids at all'],
  whenToActNow: ['Your baby chokes (not gags) on solid food and has difficulty breathing', 'Your baby has an allergic reaction (hives, swelling, vomiting) after a new food', 'Your baby is losing weight or not growing on track and is refusing solids and milk'],
  relatedMilestones: ['6-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['refusing-solids', 'baby-gagging-on-textures', 'baby-choking-vs-gagging-difference', 'baby-not-interested-in-food'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx' },
    { org: 'WHO', citation: 'World Health Organization. Complementary Feeding.', url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Infant Food and Feeding. Pediatrics.', url: 'https://publications.aap.org/pediatrics' },
  ],
};
