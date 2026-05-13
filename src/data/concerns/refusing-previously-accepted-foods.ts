import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'refusing-previously-accepted-foods',
  title: 'Suddenly Refusing Foods They Used to Eat',
  category: 'feeding',
  searchTerms: [
    'baby suddenly refusing foods they used to eat',
    'toddler won\'t eat foods they liked before',
    'baby rejecting favorite food',
    'food regression toddler',
    'picky eating suddenly started',
    'toddler stopped eating everything',
    'baby used to eat well now won\'t eat',
    'neophobia toddler food',
    'why did my toddler stop eating certain foods',
  ],
  quickAnswer:
    'It is extremely common for babies and toddlers to suddenly reject foods they previously enjoyed. This often coincides with the development of food neophobia, a natural wariness of new or previously accepted foods that peaks between 18 and 24 months. This is a normal developmental phase and not a sign that something is wrong with your child or your feeding approach.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age are generally quite accepting of new foods, which is why early and broad exposure is encouraged. However, some babies may go through phases of refusing a food they previously liked, often related to teething, illness, or simply changing preferences. Continue offering rejected foods without pressure. It can take 10 to 15 exposures before a baby accepts a food.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is when food neophobia typically begins to emerge. Your toddler may suddenly refuse vegetables, proteins, or mixed dishes they happily ate as a baby. This is a developmentally normal protective mechanism. Continue serving rejected foods alongside accepted ones without pressuring your child to eat them. Modeling enthusiastic eating and eating together as a family can help. Avoid becoming a short-order cook who prepares separate meals.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Food neophobia often peaks around this age and can feel very frustrating for parents. Your toddler may go through phases of only wanting a few specific foods. Keep offering a variety at each meal, include at least one food you know your child will eat, and stay neutral about what they choose. Research shows that most children naturally broaden their diet as they mature, especially if mealtimes remain low-pressure and positive.',
    },
  ],
  whenNormal: [
    'Your toddler goes through phases of loving and then refusing a food, cycling over weeks or months',
    'Your toddler rejects a food but will still eat a reasonable variety of other foods across the week',
    'Your toddler is growing well and has normal energy levels despite their selectivity',
    'Your toddler is more willing to eat familiar foods and is suspicious of new presentations or recipes',
  ],
  whenToMention: [
    'Your child\'s accepted food list is shrinking significantly and they are down to fewer than 10 to 15 foods',
    'Your child refuses entire food groups for more than a few weeks, such as all fruits or all proteins',
    'Your child becomes very distressed or anxious around unfamiliar foods beyond typical dislike',
    'Your child\'s weight gain or growth has slowed noticeably',
  ],
  whenToActNow: [
    'Your child refuses all food and drink for more than 24 hours',
    'Your child is losing weight or showing signs of nutritional deficiency such as extreme fatigue, pallor, or brittle nails',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Picky Eating and What You Can Do About It. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/Picky-Eaters.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Dovey TM, et al. Food Neophobia and Picky/Fussy Eating in Children: A Review. Appetite, 2008.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/17707947/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toddler Food and Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/nutrition/Pages/default.aspx',
    },
  ],
};
