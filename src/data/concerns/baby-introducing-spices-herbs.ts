import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-introducing-spices-herbs',
  title: 'Can I Add Spices and Herbs to My Baby\'s Food?',
  category: 'feeding',
  searchTerms: [
    'spices for baby food safe',
    'herbs for baby food',
    'can baby eat cinnamon',
    'baby food seasoning when',
    'adding spices to baby puree',
    'is turmeric safe for babies',
    'garlic for baby food',
    'baby bland food myth',
    'cumin coriander baby food',
    'salt and sugar baby food avoid',
  ],
  quickAnswer:
    'Mild herbs and spices can be safely added to baby food starting around 6 months of age when solid foods are introduced. There is no medical reason to limit babies to bland food. Spices like cinnamon, cumin, turmeric, garlic, ginger, and herbs like basil, oregano, and mint can add flavor and expose babies to diverse tastes. However, avoid adding salt, sugar, and honey (before age 1). Start with small amounts to gauge tolerance.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Before starting solids, your baby\'s palate is already being shaped. Breastfed babies are exposed to the flavors of their mother\'s diet through breast milk, which may make them more accepting of varied flavors when solids begin. Research shows that this early flavor exposure can influence food acceptance later. If you eat spiced foods while breastfeeding, your baby is already getting a taste preview. Formula-fed babies may benefit from slightly more gradual flavor introduction when solids start.',
    },
    {
      ageRange: '6-12 months',
      context:
        'When starting solids, you can add mild spices and herbs to purees, cereals, and finger foods. Good first spices include cinnamon (great mixed with fruit or cereal), cumin, coriander, mild curry powder, turmeric, garlic powder, ginger, vanilla, and fresh herbs like basil, cilantro, dill, and mint. Start with a small pinch to judge your baby\'s response. Avoid hot peppers, chili powder, and large amounts of strong spices. Do not add salt — babies\' kidneys cannot process excess sodium. Do not add sugar or honey (honey poses a botulism risk before 12 months). If your baby has eczema or known food allergies, introduce one new spice at a time.',
    },
    {
      ageRange: '12-36 months',
      context:
        'By this age, toddlers can enjoy a wide variety of seasoned foods. Continuing to offer diverse flavors helps prevent picky eating. Mild versions of family meals with herbs and spices are appropriate. You can introduce slightly spicier flavors gradually. Small amounts of salt can be used after 12 months, but keep it minimal — the recommended limit is less than 2 grams of salt per day for children aged 1-3. Dried herb and spice containers should be checked for freshness and free of mold. Some cultural cuisines traditionally include spices in baby food from the start, and research supports this practice as safe and beneficial for developing diverse taste preferences.',
    },
  ],
  whenNormal: [
    'Your baby accepts food with mild spices and herbs without any adverse reaction.',
    'Your baby initially makes faces at new flavors but eats the food — this is normal exploration.',
    'Your baby prefers some flavored foods over bland versions — this is healthy taste development.',
  ],
  whenToMention: [
    'Your baby develops a rash, stomach upset, or diarrhea after eating a particular spice and you want to determine if it is a reaction.',
    'You are unsure which spices are appropriate for your baby\'s age.',
    'Your baby refuses all flavored foods and you want strategies for expanding their palate.',
  ],
  whenToActNow: [
    'Your baby has an allergic reaction (hives, swelling, difficulty breathing) after eating food with a new spice — seek emergency care. While true spice allergies are rare, they can occur.',
    'Your baby has consumed a large amount of a concentrated spice or essential oil — contact Poison Control (1-800-222-1222) as some concentrated spices can be harmful in large quantities.',
    'Your baby accidentally consumed honey (in a spice mix or food) before 12 months and develops constipation, weak cry, or floppiness — seek medical care for possible infant botulism.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-food-preparation-hygiene', 'baby-introducing-meat-first-foods', 'baby-herbal-supplement-risk'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Starting Solid Foods',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Foods and Drinks to Limit for Your Child',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/foods-and-drinks/foods-and-drinks-to-limit.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine — Flavor Exposure and Infant Food Acceptance',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24693160/',
    },
  ],
};
