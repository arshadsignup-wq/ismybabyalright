import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-calcium-needs-dairy-alternatives',
  title: 'Calcium for Babies Who Cannot Have Dairy',
  category: 'feeding',
  searchTerms: [
    'baby calcium without dairy',
    'non dairy calcium sources baby',
    'calcium for milk allergy baby',
    'vegan baby calcium needs',
    'dairy free baby nutrition',
    'calcium rich foods for baby',
    'plant milk calcium toddler',
    'baby lactose intolerant calcium',
    'how much calcium does baby need',
    'dairy alternative baby nutrition',
  ],
  quickAnswer:
    'Babies need adequate calcium for bone development, and there are many non-dairy sources available. For babies under 12 months, breast milk or formula (including specialized formulas for milk allergies) provides adequate calcium. After 12 months, calcium-rich foods include fortified plant milks, tofu made with calcium sulfate, broccoli, kale, calcium-fortified cereals, beans, and canned fish with soft bones. The recommended calcium intake is 200mg/day for 0-6 months, 260mg/day for 7-12 months, and 700mg/day for 1-3 years.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Breast milk and infant formula provide all the calcium your baby needs at this age (about 200mg/day). If your baby requires a specialized formula due to cow\'s milk protein allergy, both extensively hydrolyzed and amino acid-based formulas are formulated to meet calcium requirements. Soy-based formulas also contain adequate calcium. Do not use regular plant milks (oat, almond, coconut) as a substitute for breast milk or formula at this age - they are not nutritionally complete for infants.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, you can begin offering calcium-rich foods alongside breast milk or formula, which remains the primary nutrition source. Good non-dairy calcium sources for babies include pureed broccoli, mashed white beans, tofu (made with calcium sulfate), calcium-fortified infant cereal, and soft-cooked dark leafy greens like kale. Sesame seeds (as tahini) are also calcium-rich. Continue breast milk or appropriate formula as the main drink - do not offer cow\'s milk or plant milks as a primary beverage before 12 months.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Calcium needs increase to 700mg/day in the toddler years. If your child cannot have dairy, fortified soy milk is the best plant-based alternative as it most closely matches cow\'s milk in protein and calcium content. Other fortified plant milks (oat, pea protein) can supplement but check labels for calcium fortification. Serve a variety of calcium-rich foods daily: tofu, edamame, white beans, broccoli, fortified orange juice, calcium-set cereals, and nut butters (if no allergy). Your pediatrician may recommend a calcium or vitamin D supplement.',
    },
  ],
  whenNormal: [
    'Your baby is on breast milk or an appropriate specialized formula and is growing well.',
    'Your toddler eats a varied diet with multiple non-dairy calcium sources and is growing along their curve.',
    'Your baby accepts fortified plant milk as a complement to meals after age 12 months.',
  ],
  whenToMention: [
    'Your baby has a milk allergy and you are unsure if their current diet provides enough calcium.',
    'Your toddler on a dairy-free diet is a picky eater and you are concerned about calcium intake.',
    'You want guidance on vitamin D supplementation to support calcium absorption in your dairy-free child.',
  ],
  whenToActNow: [
    'Your baby is showing signs of failure to thrive - poor weight gain, falling off growth curve, lethargy.',
    'Your toddler has had fractures or bone pain and you are concerned about bone health.',
    'Your baby is refusing all formula and calcium-rich foods and showing signs of nutritional deficiency.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-amino-acid-formula-when',
    'baby-failure-to-thrive-signs',
    'baby-european-formula-safety',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Calcium Requirements for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Calcium-Requirements.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Calcium Fact Sheet for Health Professionals. Office of Dietary Supplements.',
      url: 'https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition: Vitamins and Minerals.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/vitamins-minerals/index.html',
    },
  ],
};
