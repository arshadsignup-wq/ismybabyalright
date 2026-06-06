import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-zinc-deficiency-signs',
  title: 'Could My Baby Have a Zinc Deficiency?',
  category: 'feeding',
  searchTerms: [
    'baby zinc deficiency',
    'zinc deficiency signs baby',
    'baby zinc needs',
    'zinc rich foods for baby',
    'baby zinc supplement',
    'low zinc baby symptoms',
    'zinc deficiency skin baby',
    'zinc importance baby growth',
    'baby not getting enough zinc',
    'zinc in baby diet',
  ],
  quickAnswer:
    'Zinc is essential for growth, immune function, and wound healing. Breast milk provides adequate zinc for the first 6 months, but zinc needs increase when solids are introduced. Signs of zinc deficiency can include poor growth, frequent infections, skin rashes around the mouth, and decreased appetite. Zinc-rich foods include meat, beans, fortified cereal, and dairy.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Breast milk and formula provide adequate zinc for babies this age. Full-term babies are born with zinc stores. Premature babies may need additional supplementation as directed by their doctor.',
    },
    {
      ageRange: '4-6 months',
      context: 'Zinc levels in breast milk naturally decrease over time. As solids are introduced, zinc-rich foods become important. Iron-fortified cereal and pureed meats are good early sources of zinc.',
    },
    {
      ageRange: '6-9 months',
      context: 'Offer zinc-rich foods regularly including meat, poultry, beans, and fortified cereals. Breastfed babies may be at slightly higher risk for low zinc if their solid food intake is limited, as breast milk zinc continues to decline.',
    },
    {
      ageRange: '9-12 months',
      context: 'Continue providing zinc-rich foods at meals. If your baby has a very limited diet, particularly if they refuse meat and beans, discuss zinc intake with your pediatrician. Zinc from animal sources is better absorbed than from plant sources.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers need about 3mg of zinc daily. Good sources include meat, cheese, yogurt, beans, and whole grains. If your toddler has a very restricted diet, a multivitamin with zinc may be helpful. Discuss with your pediatrician.',
    },
  ],
  whenNormal: [
    'Baby eats a variety of zinc-rich foods regularly',
    'Baby is growing well and has a normal immune response',
    'Baby occasionally has a limited diet but generally eats zinc-containing foods',
  ],
  whenToMention: [
    'Baby has persistent skin rashes, especially around the mouth and diaper area',
    'Baby seems to get sick more frequently than expected',
    'Baby has poor appetite and slow weight gain despite adequate calorie availability',
  ],
  whenToActNow: [
    'Baby has severe skin breakdown around the mouth, hands, or diaper area along with chronic diarrhea and hair loss, which may indicate severe zinc deficiency',
    'Baby has failure to thrive and significant immune compromise',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-multivitamin-need', 'baby-protein-needs-by-age', 'iron-rich-foods-for-baby'],
  sources: [
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Zinc Fact Sheet for Health Professionals. Office of Dietary Supplements, 2023.',
      url: 'https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/',
    },
    {
      org: 'WHO',
      citation: 'World Health Organization. Zinc Supplementation and Growth in Children. 2013.',
      url: 'https://www.who.int/tools/elena/interventions/zinc-stunting',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Zinc in Pediatric Nutrition. Pediatric Nutrition, 8th Edition, 2019.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx',
    },
  ],
};
