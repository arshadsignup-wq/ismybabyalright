import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-food-storage-duration',
  title: 'How Long Does Baby Food Last?',
  category: 'feeding',
  searchTerms: [
    'baby food storage time',
    'how long does baby food last',
    'baby food expiration',
    'baby food fridge how long',
    'baby food freezer how long',
    'opened baby food shelf life',
    'baby food storage duration',
    'leftover baby food safe',
    'homemade baby food how long',
    'baby food gone bad signs',
  ],
  quickAnswer:
    'Opened store-bought baby food lasts 1-3 days in the refrigerator depending on the type. Homemade baby food lasts 24-48 hours refrigerated and up to 3 months frozen. Once baby has eaten directly from a container, discard leftovers as bacteria from saliva can grow. Always check for signs of spoilage before serving.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Not applicable as babies are not eating solid foods yet.',
    },
    {
      ageRange: '4-6 months',
      context: 'When starting solids, you will likely use small amounts at a time. Spoon a portion into a separate bowl rather than feeding directly from the jar. This way, the remaining food can be refrigerated and used within 1-2 days for store-bought or 24-48 hours for homemade.',
    },
    {
      ageRange: '6-9 months',
      context: 'As baby eats larger portions, proper storage becomes even more important. Meat-based baby foods should be used within 1 day after opening. Fruit and vegetable baby foods last 2-3 days. Freeze homemade food in ice cube trays for convenient single portions.',
    },
    {
      ageRange: '9-12 months',
      context: 'With more variety in baby\'s diet, keep track of when foods were opened or prepared. Label homemade food with the date before storing. Discard any food that has been sitting at room temperature for more than 2 hours.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers eat family foods that follow standard food safety guidelines. Refrigerate leftovers within 2 hours and use within 3-4 days. Frozen leftovers should be used within 2-3 months for best quality.',
    },
  ],
  whenNormal: [
    'You discard opened baby food after the recommended storage time',
    'You freeze homemade baby food in small portions for later use',
    'You spoon portions into a bowl rather than feeding from the jar',
  ],
  whenToMention: [
    'You are unsure about safe storage practices for specific foods',
    'Baby has had stomach upset after eating stored food',
    'You need guidance on batch cooking and freezing baby food',
  ],
  whenToActNow: [
    'Baby shows signs of food poisoning such as persistent vomiting, diarrhea, or fever after eating stored food',
    'Baby consumed food that was visibly spoiled or had an off smell',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-food-reheating-safety', 'baby-homemade-puree-safety', 'formula-storage-guidelines'],
  sources: [
    {
      org: 'CDC',
      citation: 'Centers for Disease Control and Prevention. Food Safety for Baby Food. 2023.',
      url: 'https://www.cdc.gov/foodsafety/communication/infants-and-toddlers.html',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Food Safety Guidelines for Infants. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
  ],
};
