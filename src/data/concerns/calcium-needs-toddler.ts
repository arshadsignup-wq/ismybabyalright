import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'calcium-needs-toddler',
  title: 'Calcium Needs for Toddlers',
  category: 'feeding',
  searchTerms: [
    'calcium for toddler',
    'toddler not getting enough calcium',
    'how much milk does toddler need',
    'calcium rich foods for baby',
    'toddler dairy alternatives calcium',
    'baby bones calcium',
    'toddler calcium supplement',
    'toddler refuses milk calcium',
    'non dairy calcium sources toddler',
  ],
  quickAnswer:
    'Calcium is essential for building strong bones and teeth, muscle function, and nerve signaling. Children aged 1-3 years need about 700 mg of calcium per day. Most toddlers get sufficient calcium from 2-3 servings of dairy foods daily (milk, yogurt, cheese). If your toddler cannot or will not consume dairy, calcium-fortified alternatives and other calcium-rich foods can meet their needs.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Infants under 6 months need about 200 mg of calcium per day, which is fully provided by breast milk or formula. Breast milk contains approximately 250-300 mg of calcium per liter, and infant formulas are fortified to provide adequate calcium. No supplementation is needed at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue exclusive breast milk or formula feeding, which provides all the calcium your baby needs. The adequate intake for infants 0-6 months remains 200 mg/day. Calcium absorption from breast milk is very efficient (about 60%), compared to formula (about 40%), so both sources meet infant needs despite differing concentrations.',
    },
    {
      ageRange: '6-12 months',
      context:
        'From 6-12 months, calcium needs increase to 260 mg per day. Breast milk or formula continues to be the primary source. As complementary foods are introduced, yogurt (plain, whole-milk) and small amounts of cheese can provide additional calcium. Do not introduce cow milk as a drink before 12 months. Other calcium-containing foods include tofu made with calcium sulfate, mashed white beans, and calcium-fortified baby cereals.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers aged 1-3 need 700 mg of calcium daily. About 16-24 ounces of whole milk per day provides 550-700 mg of calcium. Excessive milk intake (more than 24 ounces) can displace other important nutrients, particularly iron. For toddlers who do not drink milk, offer calcium-fortified plant milks (ensure they are unsweetened and fortified), yogurt, cheese, calcium-set tofu, fortified orange juice, broccoli, and canned salmon with bones. A calcium supplement may be discussed with your pediatrician if dietary intake is consistently inadequate.',
    },
  ],
  whenNormal: [
    'Your toddler consumes 2-3 servings of dairy or calcium-fortified foods daily and is growing well',
    'Your toddler drinks 16-24 ounces of whole milk per day along with a balanced diet',
    'Your child prefers yogurt or cheese over drinking milk but still gets adequate calcium overall',
    'Your toddler has strong teeth and bones with no signs of fractures or delayed growth',
  ],
  whenToMention: [
    'Your toddler refuses all dairy products and calcium-fortified alternatives consistently',
    'Your toddler has been diagnosed with a milk allergy and you are unsure how to meet calcium needs',
    'Your toddler has had a bone fracture from a minor fall, which could suggest weakened bones',
  ],
  whenToActNow: [
    'Your toddler has multiple bone fractures from minimal trauma, persistent bone pain, or visible skeletal deformities such as bowed legs',
    'Your toddler has muscle cramps, numbness, or seizures, which can indicate dangerously low calcium levels',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Calcium: What Every Parent Should Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Calcium-What-Every-Parent-Should-Know.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Office of Dietary Supplements. Calcium Fact Sheet for Health Professionals.',
      url: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Nutrition for Kids: Guidelines for a Healthy Diet.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/childrens-health/in-depth/nutrition-for-kids/art-20049335',
    },
  ],
};
