import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-homemade-puree-safety',
  title: 'Is My Homemade Baby Food Safe?',
  category: 'feeding',
  searchTerms: [
    'homemade baby food safety',
    'making baby food at home safe',
    'homemade puree safety',
    'baby food preparation hygiene',
    'nitrates in homemade baby food',
    'homemade baby food bacteria',
    'safe baby food preparation',
    'blending baby food at home',
    'homemade baby food risks',
    'storing homemade baby food',
  ],
  quickAnswer:
    'Homemade baby food can be a safe, nutritious option when prepared with proper food safety practices. Key guidelines include washing hands and surfaces thoroughly, cooking foods to appropriate temperatures, storing properly in the refrigerator or freezer, and being aware that certain vegetables like beets and spinach should be avoided for very young babies due to nitrate content.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'No solid foods should be offered at this age.',
    },
    {
      ageRange: '4-6 months',
      context: 'When making homemade purees, cook foods thoroughly, blend to a very smooth consistency, and use within 24-48 hours if refrigerated or freeze for up to 3 months. Avoid homemade preparations of beets, spinach, turnips, and collard greens for babies under 6 months due to nitrate concerns.',
    },
    {
      ageRange: '6-9 months',
      context: 'You can now include a wider variety of vegetables in homemade baby food. Use ice cube trays to freeze individual portions. Thaw in the refrigerator overnight and reheat once. Do not re-freeze thawed food. Introduce one new ingredient at a time to watch for allergies.',
    },
    {
      ageRange: '9-12 months',
      context: 'As textures progress, ensure meats are fully cooked to safe internal temperatures before mashing or blending. Fish, eggs, and meats need proper cooking. Homemade finger foods should be soft enough to mash between your fingers.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers can eat most safely prepared family foods. Continue practicing basic food safety: wash produce, cook meats to proper temperatures, avoid cross-contamination, and refrigerate leftovers promptly.',
    },
  ],
  whenNormal: [
    'You make baby food at home following basic food safety guidelines',
    'Homemade food is stored in the refrigerator and used within 48 hours',
    'Frozen homemade baby food is used within 3 months',
    'You cook all meats and eggs thoroughly before pureeing',
  ],
  whenToMention: [
    'You are unsure about which foods need to be cooked before serving to baby',
    'Baby has had digestive upset after eating homemade food',
    'You want guidance on safe food preparation for a baby with allergies',
  ],
  whenToActNow: [
    'Baby has symptoms of food poisoning such as vomiting, diarrhea, and fever after eating homemade food',
    'Baby has an allergic reaction after trying a new homemade food',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-food-storage-duration', 'baby-food-reheating-safety', 'homemade-vs-store-baby-food'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Making Your Own Baby Food. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Making-Your-Own-Baby-Food.aspx',
    },
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Food Safety for Infants and Toddlers. 2023.',
      url: 'https://www.cdc.gov/foodsafety/communication/infants-and-toddlers.html',
    },
  ],
};
