import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'early-complementary-food-obesity-risk',
  title: 'Starting Solid Foods Too Early and Obesity Risk',
  category: 'feeding',
  searchTerms: [
    'starting solids too early',
    'baby food before 4 months',
    'early solids obesity risk',
    'when to start baby food',
    'rice cereal in bottle baby',
    'baby ready for solid food signs',
    'complementary feeding timing',
    'introducing solids early baby',
    'baby food too soon risk',
    'cereal in bottle dangerous',
  ],
  quickAnswer:
    'Current guidelines recommend introducing solid (complementary) foods around 6 months of age, and not before 4 months. Introducing solids before 4 months has been associated with increased risk of obesity, partly because very young infants lack the developmental readiness to regulate solid food intake. Adding cereal to bottles is specifically discouraged as it bypasses the baby\'s satiety cues. Signs of readiness for solids include good head control, sitting with support, showing interest in food, and loss of the tongue-thrust reflex.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Babies under 4 months should receive only breast milk, formula, or both. Their digestive system, oral motor skills, and kidney function are not mature enough for solid foods. The tongue-thrust reflex, which pushes food out of the mouth, is still active. Adding rice cereal to bottles to help babies "sleep through the night" is a persistent myth -- research does not support this, and it adds unnecessary calories while bypassing satiety mechanisms. It also increases the risk of choking and overfeeding.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Some babies may show readiness signs between 4-6 months: good head and neck control, ability to sit with support, interest in food, and diminished tongue-thrust reflex. The AAP recommends exclusive breastfeeding for about 6 months, while acknowledging that introduction between 4-6 months may be appropriate for some babies after discussion with their pediatrician. Starting solids in this window (rather than earlier) appears to have a neutral or protective effect on obesity risk, especially when responsive feeding practices are used.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Around 6 months is the recommended time to begin complementary foods. Start with iron-rich foods (pureed meats, iron-fortified cereals) and gradually introduce a variety of fruits, vegetables, and allergens. Let your baby lead the pace of eating and watch for fullness cues (turning away, closing mouth, losing interest). Responsive feeding -- offering food in response to hunger cues and stopping when baby shows satiety -- is the most important factor in establishing healthy eating patterns and preventing excessive weight gain.',
    },
  ],
  whenNormal: [
    'Your baby is exclusively breastfed or formula-fed until around 4-6 months and you are introducing solids when they show readiness signs.',
    'Your baby explores food at their own pace and sometimes eats very little at meals -- this is normal as they learn.',
    'Your baby is growing along their own growth curve without crossing percentile lines rapidly upward.',
  ],
  whenToMention: [
    'You are being pressured by family to give your baby solids before 4 months and want guidance.',
    'Your baby seems very hungry despite adequate breast milk or formula intake before 4 months.',
    'You are concerned about your baby\'s weight gain trajectory and want to discuss complementary feeding strategies.',
  ],
  whenToActNow: [
    'Your baby has choked or had a choking episode from being given solid foods or cereal in a bottle before they were developmentally ready.',
    'Your baby is showing signs of an allergic reaction after starting solids: hives, vomiting, difficulty breathing.',
    'Your young baby has been given honey (botulism risk before 12 months) or inappropriate foods.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['childhood-obesity-new-icd-codes-severity', 'early-allergen-introduction-peanut-egg-safety', 'formula-constipation-hard-stools'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Complementary Feeding. WHO.',
      url: 'https://www.who.int/health-topics/complementary-feeding',
    },
    {
      org: 'NIH',
      citation:
        'Huh SY, et al. Timing of Solid Food Introduction and Risk of Obesity in Preschool-Aged Children. Pediatrics, 2011.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21300677/',
    },
  ],
};
