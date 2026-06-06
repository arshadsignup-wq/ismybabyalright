import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-omega-3-dha-importance',
  title: 'Does My Baby Need Omega-3 or DHA Supplementation?',
  category: 'feeding',
  searchTerms: [
    'baby omega-3 supplement',
    'DHA for baby brain development',
    'omega-3 baby food',
    'baby DHA drops',
    'fish oil for baby',
    'DHA importance infant',
    'omega-3 fatty acids baby',
    'baby brain development DHA',
    'DHA breastfed baby',
    'omega-3 supplement toddler',
  ],
  quickAnswer:
    'DHA (docosahexaenoic acid), an omega-3 fatty acid, is important for brain and eye development. Breast milk naturally contains DHA (amounts vary with maternal diet), and many formulas are fortified with it. Most babies do not need separate DHA supplements if they are breastfed by a mother eating fish or taking DHA supplements, or are formula-fed with DHA-fortified formula.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'DHA is transferred through breast milk and is included in most infant formulas. Breastfeeding mothers can increase their breast milk DHA by eating fatty fish twice a week or taking an omega-3 supplement.',
    },
    {
      ageRange: '4-6 months',
      context: 'Continue to provide DHA through breast milk or formula. If you are breastfeeding and do not eat fish or take supplements, discuss DHA supplementation with your doctor.',
    },
    {
      ageRange: '6-9 months',
      context: 'As baby starts eating solids, foods naturally rich in omega-3s like well-cooked salmon, sardines, and omega-3 enriched eggs can be introduced. These are excellent complementary sources of DHA.',
    },
    {
      ageRange: '9-12 months',
      context: 'Continue offering fatty fish 1-2 times per week. Mashed salmon, flaked sardines, and cooked white fish are all appropriate. If baby does not eat fish, discuss with your pediatrician whether a DHA supplement is appropriate.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers who eat fish regularly generally get adequate DHA. For those who do not eat fish, fortified foods or a DHA supplement may be beneficial. Plant sources like flaxseed and chia provide ALA, which the body converts to DHA in small amounts.',
    },
  ],
  whenNormal: [
    'Baby receives DHA through breast milk or fortified formula',
    'Baby eats fish once or twice a week after starting solids',
    'Breastfeeding mother takes a DHA supplement or eats fish regularly',
  ],
  whenToMention: [
    'Breastfeeding mother follows a strict vegan diet without DHA supplementation',
    'Baby is on a special formula that may not include DHA',
    'You want guidance on the right amount of DHA supplementation for your baby',
  ],
  whenToActNow: [
    'Baby has signs of essential fatty acid deficiency such as dry scaly skin, poor wound healing, or failure to thrive',
    'Baby has an allergic reaction to fish when it is introduced',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-multivitamin-need', 'baby-fat-intake-importance', 'baby-first-foods-best-choices'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Omega-3 Fatty Acids and Brain Development. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Omega-3 Fatty Acids Fact Sheet. Office of Dietary Supplements, 2023.',
      url: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',
    },
    {
      org: 'WHO',
      citation: 'World Health Organization. Fats and Fatty Acids in Human Nutrition. Geneva, 2010.',
      url: 'https://www.who.int/publications/i/item/9789241599672',
    },
  ],
};
