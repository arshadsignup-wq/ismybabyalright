import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'herbal-supplements-while-breastfeeding',
  title: 'Herbal Supplements While Breastfeeding',
  category: 'feeding',
  searchTerms: [
    'herbal supplements breastfeeding',
    'fenugreek breastfeeding',
    'galactagogue supplements',
    'herbal tea while breastfeeding',
    'lactation supplements safe',
    'blessed thistle breastfeeding',
    'moringa breastfeeding',
    'herbal remedies nursing',
    'natural supplements while breastfeeding',
    'milk boosting supplements',
  ],
  quickAnswer:
    'Many breastfeeding mothers consider herbal supplements, often called galactagogues, to boost milk supply. While some herbs like fenugreek, blessed thistle, and moringa have a long traditional history of use, most lack strong scientific evidence for effectiveness. Importantly, herbal supplements are not regulated like medications and can carry risks including allergic reactions, interactions with medications, and effects on your baby through breast milk.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the early weeks, concerns about low milk supply are extremely common, and many mothers reach for herbal supplements as a first step. Before taking any supplement, it is important to have your supply properly evaluated by a lactation consultant, as perceived low supply is often not actual low supply. Frequent, effective nursing or pumping is the most evidence-based way to establish and increase milk production during this critical window.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If you are considering galactagogues at this stage, perhaps because of returning to work and pumping concerns, discuss specific products with your healthcare provider or a pharmacist knowledgeable about lactation. Fenugreek, one of the most popular supplements, can cause gastrointestinal symptoms in the mother and may change the smell of sweat and urine. It is also contraindicated for mothers with certain conditions including asthma and thyroid disorders.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby increasingly relies on solid foods, the pressure on breast milk supply decreases. If you are still concerned about supply at this stage, herbal supplements are unlikely to be the solution. Focus on nursing or pumping frequency, adequate hydration and nutrition, and consult your healthcare provider about whether a prescription galactagogue might be more appropriate if truly needed.',
    },
  ],
  whenNormal: [
    'You drink occasional lactation tea and your baby is gaining weight well and you enjoy the ritual',
    'You tried a galactagogue supplement and did not notice a difference, so you stopped taking it',
    'You use herbs in cooking (such as fennel or garlic) that have traditional associations with lactation',
  ],
  whenToMention: [
    'You are taking multiple herbal supplements and want to know about potential interactions with each other or with medications',
    'You are experiencing side effects such as digestive upset, allergic symptoms, or changes in your baby\'s behavior since starting a supplement',
    'You have a medical condition and are unsure whether a particular herbal supplement is safe for you',
    'You want evidence-based guidance on whether any galactagogue is appropriate for your situation',
  ],
  whenToActNow: [
    'You or your baby develops an allergic reaction such as hives, swelling, or difficulty breathing after you start a new supplement',
    'You are taking herbal supplements alongside prescription medications and experience unexpected symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Transfer of Drugs and Therapeutics Into Human Breast Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/132/3/e796/31630/The-Transfer-of-Drugs-and-Therapeutics-Into-Human',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. LactMed: Herbal Galactagogues. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK501771/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Maternal Diet Considerations While Breastfeeding.',
      url: 'https://www.cdc.gov/breastfeeding/breastfeeding-special-circumstances/diet-and-micronutrients/maternal-diet.html',
    },
  ],
};
