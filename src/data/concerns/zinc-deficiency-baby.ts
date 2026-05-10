import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'zinc-deficiency-baby',
  title: 'Zinc Deficiency in Babies',
  category: 'feeding',
  searchTerms: [
    'zinc deficiency baby',
    'low zinc infant symptoms',
    'zinc for baby immune system',
    'zinc rich foods for baby',
    'baby rash zinc deficiency',
    'breastfed baby zinc',
    'zinc supplement infant',
    'baby poor growth zinc',
  ],
  quickAnswer:
    'Zinc is an essential mineral critical for immune function, growth, and cell repair in infants. Breast milk provides adequate zinc for the first 4-6 months, but zinc content in breast milk decreases over time. After 6 months, babies need zinc from complementary foods such as meats, legumes, and fortified cereals. Zinc deficiency can cause poor growth, increased infections, skin rashes, and delayed wound healing.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns receive zinc through breast milk or formula. Breast milk zinc concentration is highest in the first month (about 2 mg/L) and declines rapidly over the following months. Formula-fed babies receive a consistent amount from fortified formula. Premature babies are at higher risk of zinc deficiency due to lower stores at birth and higher zinc requirements for catch-up growth.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 3-6 months, zinc levels in breast milk have dropped significantly (to about 0.5-1 mg/L). While most healthy full-term babies still get enough zinc from breast milk alone during this period, signs of marginal deficiency may appear in some infants. Symptoms to watch for include persistent diaper rashes that do not respond to standard treatment, slowed growth, or unusual susceptibility to infections.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a critical period for zinc intake. As complementary foods are introduced, prioritize zinc-rich options such as pureed or ground meats (the best source of bioavailable zinc), beans, lentils, and iron-fortified infant cereals. Plant-based sources contain phytates that reduce zinc absorption, so pairing them with vitamin C-rich foods can help. The recommended dietary allowance for infants 7-12 months is 3 mg per day.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers need about 3 mg of zinc per day. Good sources include meat, poultry, dairy products, beans, nuts (in age-appropriate forms like nut butters), and whole grains. Toddlers who are very picky eaters or on restricted diets may be at risk for inadequate zinc intake. A children\'s multivitamin with zinc can help fill gaps, but food sources are preferred. Discuss with your pediatrician if you are concerned about your toddler\'s zinc status.',
    },
  ],
  whenNormal: [
    'Your baby is growing along their growth curve and eating a variety of foods including meats or legumes after 6 months',
    'Your breastfed baby is healthy and thriving in the first 6 months with no signs of rash or poor growth',
    'Your toddler eats a reasonably varied diet that includes some animal protein or fortified foods',
    'Occasional mild diaper rashes that respond to standard diaper cream and barrier ointments',
  ],
  whenToMention: [
    'Your baby has persistent skin rashes, especially around the mouth, hands, or diaper area, that do not respond to typical treatments',
    'Your baby or toddler is consistently falling off their growth curve despite adequate caloric intake',
    'Your baby seems to get sick more frequently than expected and recoveries are slow',
  ],
  whenToActNow: [
    'Your baby has widespread, worsening skin lesions with hair loss and chronic diarrhea, which may indicate severe zinc deficiency (acrodermatitis)',
    'Your baby is failing to thrive with persistent diarrhea and severe skin breakdown around body openings',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Office of Dietary Supplements. Zinc Fact Sheet for Health Professionals.',
      url: 'https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Zinc Supplementation in the Management of Diarrhoea. WHO/UNICEF Joint Statement.',
      url: 'https://www.who.int/publications/i/item/zinc-supplementation-in-the-management-of-diarrhoea',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Trace Elements. Pediatric Nutrition Handbook, 8th Edition.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
  ],
};
