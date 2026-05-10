import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'omega-3-importance-baby-brain',
  title: 'Omega-3 and Baby Brain Development',
  category: 'feeding',
  searchTerms: [
    'omega 3 baby brain development',
    'DHA for infant',
    'fish oil for baby',
    'omega 3 foods for baby',
    'DHA in breast milk',
    'omega 3 supplement baby',
    'baby brain development nutrition',
    'DHA formula infant',
    'fatty acids for baby',
  ],
  quickAnswer:
    'Omega-3 fatty acids, particularly DHA (docosahexaenoic acid), are crucial for brain and eye development in infants. DHA accumulates rapidly in the brain during the last trimester and the first two years of life. Breast milk naturally contains DHA (levels vary based on maternal diet), and most infant formulas are now fortified with DHA. After 6 months, introducing DHA-rich foods like fatty fish supports continued brain development.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'During this period of rapid brain growth, infants rely entirely on breast milk or formula for DHA. Breastfeeding mothers who eat fatty fish 2-3 times per week or take a DHA supplement (200-300 mg/day) typically provide adequate DHA through their milk. Most infant formulas in the US are supplemented with DHA. There is no established recommended daily intake for DHA in infants, but expert groups suggest 100 mg/day of DHA is reasonable for infants.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Brain growth continues at a remarkable pace. Continue breastfeeding or formula-feeding to provide a steady source of DHA. Nursing mothers should maintain their DHA intake through diet or supplementation. There is no need for direct supplementation of the infant at this age if they are receiving adequate DHA from breast milk or formula.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, incorporating DHA-rich foods becomes possible and beneficial. Well-cooked, flaked salmon, sardines, or trout are excellent options. Start with small, age-appropriate portions. Egg yolks (especially from DHA-enriched eggs) are another good source. Avoid high-mercury fish such as shark, swordfish, king mackerel, and tilefish. Continue breast milk or formula as the primary source of nutrition and DHA.',
    },
    {
      ageRange: '12 months+',
      context:
        'The brain continues to grow rapidly through age 2. Offer fatty fish 1-2 times per week. Low-mercury options include salmon, sardines, anchovies, herring, and trout. Walnuts and ground flaxseed provide ALA, a plant-based omega-3 that the body can partially convert to DHA, though conversion rates are low. If your toddler does not eat fish, consider discussing a DHA supplement with your pediatrician, especially if they are on a vegetarian or vegan diet.',
    },
  ],
  whenNormal: [
    'Your breastfed baby is thriving and you eat fish or take a DHA supplement regularly',
    'Your formula-fed baby is receiving a DHA-fortified formula and meeting developmental milestones',
    'Your toddler eats some fish or DHA-rich foods occasionally and is developing normally',
    'Your baby is meeting cognitive and visual milestones on schedule',
  ],
  whenToMention: [
    'Your baby or toddler is on a very restricted diet with no sources of DHA and you are concerned about brain development',
    'Your breastfed baby is not meeting developmental milestones and you eat no fish or DHA-containing foods',
    'You are considering giving your baby an omega-3 supplement and want guidance on dosing',
  ],
  whenToActNow: [
    'Your baby has significant developmental delays in multiple areas, which warrants a comprehensive evaluation regardless of dietary factors',
    'Your baby shows signs of a severe allergic reaction after eating fish, such as hives, swelling, vomiting, or difficulty breathing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Office of Dietary Supplements. Omega-3 Fatty Acids Fact Sheet for Health Professionals.',
      url: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fish: What Pregnant Women and Parents Should Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/Pages/Fish-What-Pregnant-Women-and-Parents-Should-Know.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Fats and Fatty Acids in Human Nutrition. Report of an Expert Consultation. FAO Food and Nutrition Paper 91.',
      url: 'https://www.who.int/publications/i/item/9789241599672',
    },
  ],
};
