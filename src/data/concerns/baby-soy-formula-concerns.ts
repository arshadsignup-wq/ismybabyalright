import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-soy-formula-concerns',
  title: 'Soy Formula for Babies: Concerns and Safety',
  category: 'feeding',
  searchTerms: [
    'soy formula baby safe',
    'soy formula concerns',
    'soy formula phytoestrogen baby',
    'soy formula vs cow milk formula',
    'baby soy allergy formula',
    'soy formula side effects',
    'when to use soy formula',
    'soy formula dairy allergy baby',
    'soy isoflavones baby',
    'soy formula boy baby',
  ],
  quickAnswer:
    'Soy-based infant formulas are FDA-regulated, nutritionally complete, and have been safely used for decades. They may be appropriate for babies with galactosemia, hereditary lactase deficiency, or families preferring a plant-based option. However, soy formula is not recommended for premature infants, and many babies with cow\'s milk protein allergy also react to soy. While concerns about phytoestrogens exist, current research has not shown adverse developmental or reproductive effects in children who were fed soy formula.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Breast milk or iron-fortified infant formula (cow\'s milk-based or soy-based) are the only appropriate nutrition sources. Soy formula may be recommended for babies with galactosemia (a rare metabolic disorder) or hereditary lactase deficiency. It is important to know that soy formula is not recommended for premature infants due to concerns about bone mineralization. Up to 60% of babies with confirmed cow\'s milk protein allergy also react to soy protein, so soy formula may not be the best alternative - a hydrolyzed formula may be more appropriate.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby is thriving on soy formula, there is no medical reason to switch. As solids are introduced, be aware that soy allergy is one of the top food allergens in children. If your baby tolerates soy formula well, they are likely not allergic to soy. Parents sometimes switch to soy formula for fussiness, gas, or colic, but evidence does not strongly support this change for these reasons. Discuss with your pediatrician before switching formulas.',
    },
    {
      ageRange: '12-36 months',
      context:
        'After 12 months, toddlers transition from formula to whole milk or a plant-based milk alternative. If your family prefers plant-based options, fortified soy milk is the AAP and USDA recommended dairy alternative due to its protein content and nutritional profile closest to cow\'s milk. Other plant milks (almond, oat, rice) are generally lower in protein and calories and should not be the primary milk source without careful dietary planning.',
    },
  ],
  whenNormal: [
    'Your baby is growing well on soy formula prescribed by your pediatrician.',
    'You chose soy formula for cultural, ethical, or dietary reasons and your baby is thriving.',
    'Your baby has galactosemia or hereditary lactase deficiency and soy formula is medically indicated.',
  ],
  whenToMention: [
    'You are considering switching from cow\'s milk formula to soy formula and want medical guidance.',
    'Your baby on soy formula has persistent gas, fussiness, or loose stools.',
    'You have concerns about phytoestrogens in soy formula and want evidence-based information.',
  ],
  whenToActNow: [
    'Your baby develops hives, vomiting, bloody stool, or difficulty breathing after starting soy formula - this could indicate a soy protein allergy.',
    'Your premature baby has been placed on soy formula without pediatric guidance.',
    'Your baby is failing to gain weight on any formula and needs immediate nutritional evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-reflux-formula-thickened', 'baby-refusing-bottle', 'baby-probiotics-evidence-safety'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Use of Soy Protein-Based Formulas in Infant Feeding. Pediatrics, 2008.',
      url: 'https://publications.aap.org/pediatrics/article/121/5/1062/72177/Use-of-Soy-Protein-Based-Formulas-in-Infant',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Soy Infant Formula. NTP Monograph.',
      url: 'https://ntp.niehs.nih.gov/whatwestudy/assessments/reproductive/completed/soyformula',
    },
    {
      org: 'FDA',
      citation:
        'U.S. Food and Drug Administration - Questions and Answers for Consumers Concerning Infant Formula.',
      url: 'https://www.fda.gov/food/people-risk-foodborne-illness/questions-answers-consumers-concerning-infant-formula',
    },
  ],
};
