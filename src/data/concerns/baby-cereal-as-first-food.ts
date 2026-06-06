import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cereal-as-first-food',
  title: 'Should Rice Cereal Be My Baby\'s First Food?',
  category: 'feeding',
  searchTerms: [
    'rice cereal first food baby',
    'baby rice cereal necessary',
    'rice cereal starter food',
    'is rice cereal good first food',
    'should baby eat rice cereal first',
    'alternatives to rice cereal',
    'baby cereal first food debate',
    'infant rice cereal recommendations',
    'oatmeal instead of rice cereal',
    'baby cereal starting solids',
  ],
  quickAnswer:
    'Rice cereal is no longer universally recommended as the first food for babies. While iron-fortified cereal can be a good early food, oatmeal or multi-grain cereals are preferred over rice cereal due to concerns about arsenic levels in rice. There is no medical requirement to start with cereal at all. Iron-rich foods like pureed meats, beans, and fortified cereals are all appropriate.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Adding cereal to bottles is not recommended. It does not help babies sleep longer and can increase choking risk. Babies this age should only have breast milk or formula.',
    },
    {
      ageRange: '4-6 months',
      context: 'If you choose to start with cereal, iron-fortified oatmeal cereal is preferred over rice cereal. Mix with breast milk or formula to a thin consistency. However, you can also start with pureed vegetables, fruits, or meats. There is no required order for starting foods.',
    },
    {
      ageRange: '6-9 months',
      context: 'Iron-fortified cereal can be part of a varied diet. Offer different grains like oat, barley, and multi-grain rather than only rice. Pair cereal with fruits, vegetables, and protein sources for a balanced diet.',
    },
    {
      ageRange: '9-12 months',
      context: 'As baby eats more table foods, infant cereal becomes less central to the diet. Baby can get iron from other sources like meat, beans, and fortified foods. There is no need to continue infant cereal indefinitely.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers do not need infant cereal. They can eat regular oatmeal, whole grain cereals with low sugar, and a variety of other iron-rich foods.',
    },
  ],
  whenNormal: [
    'You start with oatmeal cereal or another iron-fortified cereal instead of rice',
    'You skip cereal entirely and start with pureed meats, fruits, or vegetables',
    'Baby eats cereal as one of many first foods in a varied diet',
  ],
  whenToMention: [
    'You are unsure which first foods are best for your baby',
    'Baby has a family history of celiac disease and you are worried about grain introduction',
    'Baby refuses all cereal and you are concerned about iron intake',
  ],
  whenToActNow: [
    'Baby has an allergic reaction to cereal such as rash, vomiting, or difficulty breathing',
    'Baby is choking on cereal mixed into a bottle',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-rice-cereal-arsenic', 'baby-oatmeal-vs-rice-cereal', 'baby-iron-fortified-cereal-need'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Starting Solid Foods: What to Feed and When. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'FDA',
      citation: 'U.S. Food and Drug Administration. Arsenic in Rice and Rice Products. 2020.',
      url: 'https://www.fda.gov/food/metals-and-your-food/arsenic-food-and-dietary-supplements',
    },
  ],
};
