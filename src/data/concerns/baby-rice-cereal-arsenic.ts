import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rice-cereal-arsenic',
  title: 'Should I Worry About Arsenic in Rice Cereal?',
  category: 'feeding',
  searchTerms: [
    'arsenic rice cereal baby',
    'rice cereal arsenic levels',
    'is rice cereal safe for baby',
    'arsenic in baby rice',
    'rice baby food arsenic',
    'heavy metals rice cereal',
    'rice cereal danger baby',
    'arsenic rice baby food concern',
    'inorganic arsenic baby food',
    'FDA rice cereal arsenic',
  ],
  quickAnswer:
    'Rice tends to absorb more arsenic from the environment than other grains. The FDA has set limits on inorganic arsenic in infant rice cereal. While occasional rice cereal is unlikely to be harmful, pediatric nutritionists recommend varying grains and not relying solely on rice-based products. Oatmeal, barley, and multi-grain cereals are good alternatives.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'No cereal or solid food is appropriate at this age.',
    },
    {
      ageRange: '4-6 months',
      context: 'If choosing cereal as a first food, iron-fortified oatmeal or multi-grain cereal is preferred over rice cereal. If you do use rice cereal, do not make it the only grain in baby\'s diet.',
    },
    {
      ageRange: '6-9 months',
      context: 'Offer a variety of grains rather than only rice. Include oats, barley, quinoa, and other whole grains in baby\'s diet. Limit rice cereal to no more than one serving per day and vary with other options.',
    },
    {
      ageRange: '9-12 months',
      context: 'As baby eats more table foods, rice can be part of the diet in moderation. Rinsing rice thoroughly and cooking in extra water can reduce arsenic content. Vary grains throughout the week.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers can eat rice as part of a varied diet. Limit rice-based snacks like rice cakes and puffed rice snacks to moderate amounts. Choose a variety of grains for balanced nutrition.',
    },
  ],
  whenNormal: [
    'You limit rice cereal and vary grains in baby\'s diet',
    'Baby eats rice occasionally as part of a diverse diet',
    'You choose oatmeal or multi-grain cereal as the primary infant cereal',
  ],
  whenToMention: [
    'Your family eats a lot of rice-based foods and you want guidance on safe amounts for baby',
    'You are concerned about heavy metals in baby food in general',
    'Baby only accepts rice cereal and refuses other grains',
  ],
  whenToActNow: [
    'You suspect baby has consumed a contaminated product that has been recalled',
    'Baby shows symptoms of illness that you think may be food-related',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-cereal-as-first-food', 'baby-oatmeal-vs-rice-cereal', 'baby-food-heavy-metals-concern'],
  sources: [
    {
      org: 'FDA',
      citation: 'U.S. Food and Drug Administration. Inorganic Arsenic in Rice Cereals for Infants: Action Level. 2020.',
      url: 'https://www.fda.gov/food/cfsan-risk-safety-assessments/arsenic-rice-and-rice-products',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Reducing Arsenic Exposure in Children. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Reduce-Arsenic.aspx',
    },
    {
      org: 'WHO',
      citation: 'World Health Organization. Arsenic Fact Sheet. 2022.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/arsenic',
    },
  ],
};
