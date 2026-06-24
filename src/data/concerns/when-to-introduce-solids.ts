import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'when-to-introduce-solids',
  title: 'When Should I Introduce Solid Foods to My Baby?',
  category: 'feeding',
  searchTerms: [
    'when to start solids baby',
    'introducing solids to baby',
    'baby first foods when',
    'baby ready for solids signs',
    'starting solids 4 months vs 6 months',
    'baby first solid food',
    'when to start baby food',
    'baby weaning start age',
    'signs baby ready for food',
    'introduction of complementary foods baby',
    'baby led weaning age',
  ],
  quickAnswer:
    'The AAP and WHO recommend introducing solid foods around 6 months of age, when most babies show signs of developmental readiness. Some pediatricians may recommend starting between 4-6 months for certain babies. Key readiness signs include: sitting with minimal support, good head and neck control, showing interest in food, loss of the tongue-thrust reflex, and being able to move food to the back of the mouth. Breast milk or formula remains the primary source of nutrition throughout the first year.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Babies this young are not developmentally ready for solid foods. Their digestive systems are immature, they lack the oral motor skills to safely manage food, and the tongue-thrust reflex (which pushes foreign objects out of the mouth) is still strong. Breast milk or formula provides complete nutrition during this period. Starting solids before 4 months has been associated with increased risk of obesity, allergies, and gastrointestinal issues. If well-meaning family members suggest starting cereal in a bottle, this practice is not recommended.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Some pediatricians recommend starting solids as early as 4 months for specific reasons, such as early introduction of allergenic foods for high-risk babies (those with severe eczema or egg allergy). However, most babies are not truly ready until closer to 6 months. Look for readiness signs rather than relying on age alone: your baby can sit with support, holds their head steady, opens their mouth when food approaches, and seems interested in what you are eating. If your baby consistently pushes food out with their tongue, they may not be ready yet.',
    },
    {
      ageRange: '6-8 months',
      context:
        'This is the ideal starting window for most babies. Begin with single-ingredient foods — iron-fortified baby cereal, pureed meats, or mashed fruits and vegetables. Introduce one new food every 3-5 days to monitor for allergies. Current evidence supports early introduction of common allergens (peanut, egg, milk, wheat, soy, fish) around 6 months rather than delaying them. You can choose traditional puree feeding, baby-led weaning (soft finger foods from the start), or a combination approach. There is no evidence that one method is superior.',
    },
    {
      ageRange: '8-12 months',
      context:
        'By 8-12 months, your baby should be eating a variety of foods with increasing texture complexity — moving from purees to mashed foods to soft finger foods. Breast milk or formula remains the primary source of nutrition until age 12 months, with solid foods complementing rather than replacing milk feeds. By 12 months, most babies can eat many of the same foods as the family in appropriate sizes and textures. Avoid honey until age 1 (botulism risk), whole nuts (choking risk), and added salt and sugar.',
    },
  ],
  whenNormal: [
    'Your baby shows readiness signs at 5-6 months and begins eating small amounts of solid food',
    'Your baby is more interested in playing with food than eating it at first — this is normal exploration',
    'Your baby eats very small amounts of solids initially — breast milk or formula is still the main source of nutrition',
    'Your baby accepts some foods and rejects others — food preferences are normal and change over time',
  ],
  whenToMention: [
    'Your baby is 6 months old and shows none of the readiness signs for solids (cannot sit, pushes all food out with tongue)',
    'Your baby is 8 months old and has not started any solid foods yet',
    'Your baby has a severe allergic reaction to a new food (hives, vomiting, swelling)',
  ],
  whenToActNow: [
    'Your baby chokes (not gags) on solid food — learn the difference between gagging (normal, noisy) and choking (silent, cannot breathe) and know infant CPR',
    'Your baby has signs of anaphylaxis after trying a new food: difficulty breathing, widespread hives, facial swelling — call 911',
    'Your baby refuses all food and drink and shows signs of dehydration or failure to thrive',
  ],
  relatedMilestones: [
    'feeding-solids-introduction',
    'oral-motor-skills',
    'gross-motor-sitting',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-choking-on-food',
    'toddler-food-texture-sensitivity',
    'toddler-picky-eater-strategies',
    'toddler-self-feeding-messy-normal',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Complementary Feeding.',
      url: 'https://www.who.int/health-topics/complementary-feeding',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. When, What, and How to Introduce Solid Foods.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/when-to-introduce-solid-foods.html',
    },
  ],
};
