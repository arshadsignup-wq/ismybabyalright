import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-calcium-intake-dairy-free',
  title: 'How Can My Baby Get Enough Calcium Without Dairy?',
  category: 'feeding',
  searchTerms: [
    'baby calcium without dairy',
    'dairy free baby calcium',
    'calcium sources baby no milk',
    'milk allergy baby calcium',
    'baby calcium needs',
    'non dairy calcium baby',
    'calcium rich foods baby',
    'vegan baby calcium',
    'baby calcium deficiency risk',
    'calcium supplement baby',
  ],
  quickAnswer:
    'If your baby cannot have dairy due to allergy or intolerance, there are many other calcium sources. These include calcium-fortified foods, broccoli, kale, tofu made with calcium sulfate, beans, calcium-fortified plant milks (after 12 months), and sardines. Breast milk and formula provide adequate calcium before 12 months. If dairy-free after 12 months, planning is important.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Breast milk and formula provide all the calcium your baby needs. If baby has a confirmed milk protein allergy and is formula-fed, hypoallergenic formulas contain adequate calcium.',
    },
    {
      ageRange: '4-6 months',
      context: 'Breast milk or formula continues to be the primary calcium source. As solids are introduced, calcium-containing vegetables like broccoli and kale can be offered in pureed form.',
    },
    {
      ageRange: '6-9 months',
      context: 'Offer calcium-rich solid foods alongside continued breast milk or formula. Good options include mashed broccoli, pureed white beans, tofu, and fortified cereals. These complement the calcium from milk feeds.',
    },
    {
      ageRange: '9-12 months',
      context: 'Continue providing a variety of calcium-rich foods. If baby is dairy-free, be intentional about including multiple calcium sources at each meal. Sesame seeds or tahini and fortified foods are helpful additions.',
    },
    {
      ageRange: '12-24 months',
      context: 'When transitioning off breast milk or formula, choosing a calcium-fortified plant milk is important for dairy-free toddlers. Soy milk is the most nutritionally comparable to cow\'s milk. Aim for 700mg of calcium daily. A calcium supplement may be needed if dietary intake is insufficient. Work with your pediatrician.',
    },
  ],
  whenNormal: [
    'Baby gets calcium from breast milk or formula plus calcium-rich foods',
    'Baby eats some non-dairy calcium sources regularly',
    'Baby is growing well on a dairy-free diet with attention to calcium sources',
  ],
  whenToMention: [
    'You are struggling to include enough calcium in your dairy-free baby\'s diet',
    'Baby is transitioning from formula and you need guidance on dairy-free alternatives',
    'You want to know if your baby needs a calcium supplement',
  ],
  whenToActNow: [
    'Baby has signs of calcium deficiency such as muscle cramps, tingling, or seizures',
    'Baby is showing signs of poor bone development',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['milk-protein-allergy', 'plant-milk-nutrition-toddler', 'cow-milk-alternative-comparison'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Calcium Requirements for Children. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Calcium Fact Sheet for Health Professionals. Office of Dietary Supplements, 2023.',
      url: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    },
  ],
};
