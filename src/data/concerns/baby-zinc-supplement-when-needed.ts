import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-zinc-supplement-when-needed',
  title: 'Zinc Supplements for Babies: When Are They Needed?',
  category: 'feeding',
  searchTerms: [
    'baby zinc supplement',
    'zinc for babies',
    'when does baby need zinc',
    'zinc deficiency baby signs',
    'baby zinc for diarrhea',
    'zinc in baby food',
    'infant zinc supplement',
    'breastfed baby zinc',
    'zinc rich foods for baby',
    'baby zinc drops',
    'zinc and baby immune system',
  ],
  quickAnswer:
    'Most healthy, full-term babies get adequate zinc from breast milk or formula in the first 6 months. After 6 months, zinc-rich complementary foods like meat, beans, and fortified cereals become important. Zinc supplements are generally only recommended for specific medical conditions, such as persistent diarrhea or diagnosed zinc deficiency. Always consult your pediatrician before giving any supplement.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Breast milk and infant formula provide adequate zinc for most healthy, full-term infants during the first 6 months. Colostrum is particularly rich in zinc. Premature infants or those with certain gastrointestinal conditions may have higher zinc needs that your pediatrician will monitor. Zinc supplements should not be given to young infants unless specifically prescribed by a doctor.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As breast milk zinc content naturally decreases over time, complementary foods become an important source of zinc starting around 6 months. Good first sources include pureed meats, fortified infant cereals, and mashed beans. The recommended daily zinc intake for infants 7-12 months is about 3 mg. Introducing zinc-rich foods early helps prevent deficiency as breast milk alone may not meet needs at this stage.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers need about 3 mg of zinc daily, which is usually achievable through a varied diet that includes meat, poultry, dairy, beans, and whole grains. Picky eaters who refuse protein-rich foods may be at risk for marginal zinc intake. Signs of zinc deficiency can include frequent infections, slow wound healing, poor appetite, and in severe cases, skin rashes or hair loss. Discuss supplementation with your pediatrician if you are concerned.',
    },
  ],
  whenNormal: [
    'Your baby is breastfed or formula-fed and growing well in the first 6 months without supplements.',
    'Your baby over 6 months is eating zinc-rich complementary foods like meat, beans, or fortified cereals.',
    'Your toddler has a varied diet that includes some animal proteins or legumes.',
  ],
  whenToMention: [
    'Your baby has had persistent diarrhea lasting more than a week, as zinc supplementation may be recommended.',
    'Your older baby or toddler is an extremely picky eater who refuses most protein-rich foods.',
    'Your baby was premature or has a chronic gastrointestinal condition that may affect nutrient absorption.',
  ],
  whenToActNow: [
    'Your baby shows signs of severe zinc deficiency: widespread skin rash, persistent diarrhea, and failure to gain weight.',
    'Your baby has accidentally ingested a large amount of a zinc supplement, which can cause toxicity with vomiting and stomach pain.',
    'Your baby has symptoms of zinc toxicity such as persistent vomiting, diarrhea, or lethargy after supplement ingestion.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['exclusive-breastfeeding-micronutrient-gaps', 'formula-gas-bloating-discomfort', 'early-complementary-food-obesity-risk'],
  sources: [
    {
      org: 'WHO',
      citation:
        'World Health Organization. Zinc supplementation in the management of diarrhoea. WHO, 2023.',
      url: 'https://www.who.int/tools/elena/interventions/zinc-diarrhoea',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Vitamins and Mineral Supplements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Vitamin-D-and-Iron-Supplements-for-Babies.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health, Office of Dietary Supplements. Zinc Fact Sheet for Health Professionals.',
      url: 'https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/',
    },
  ],
};
