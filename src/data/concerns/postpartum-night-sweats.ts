import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-night-sweats',
  title: 'Postpartum Night Sweats',
  category: 'maternal',
  searchTerms: [
    'postpartum night sweats',
    'sweating at night after baby',
    'waking up drenched in sweat postpartum',
    'hot flashes after birth',
    'excessive sweating after delivery',
    'night sweats breastfeeding',
    'sweating while sleeping postpartum',
    'how long do postpartum night sweats last',
  ],
  quickAnswer:
    'Postpartum night sweats are a very common experience in the weeks after delivery, caused by rapidly dropping estrogen levels and your body\'s need to shed the extra fluid retained during pregnancy. Waking up drenched in sweat can be unsettling, but it is a normal part of your body\'s adjustment after birth. For most women, night sweats resolve within a few weeks as hormone levels stabilize.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'Night sweats are most intense during the first one to two weeks after delivery. Your body retained significant extra fluid during pregnancy, and sweating (along with increased urination) is one of the ways it eliminates this excess. Estrogen levels are also dropping dramatically, which directly triggers hot flashes and sweating. Sleeping on a towel and wearing moisture-wicking layers can help with comfort.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'Night sweats typically begin to decrease during this period as your body adjusts to its new hormonal baseline and sheds excess fluid. Staying well hydrated is important, especially if you are breastfeeding, as you are losing fluid through both sweat and milk production. Most women notice a significant improvement by four to six weeks postpartum.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'By this point, night sweats should be resolving or significantly reduced for most women. If you are still experiencing heavy night sweats, it is worth mentioning at your postpartum checkup. Persistent sweating beyond this point can occasionally be related to thyroid changes that sometimes occur after pregnancy.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'Ongoing night sweats at this stage are less common and may warrant investigation. Postpartum thyroiditis, which occurs in about 5-10% of women, can cause symptoms including sweating, anxiety, and a rapid heartbeat. A simple blood test can check thyroid function. Breastfeeding mothers may continue to experience some degree of night sweats related to hormonal fluctuations.',
    },
  ],
  whenNormal: [
    'Waking up sweaty or damp in the first few weeks after delivery, particularly at night',
    'Night sweats that are worst in the first one to two weeks and gradually improve',
    'Hot flashes during the day that accompany the night sweats',
    'Increased sweating that coincides with letdown during breastfeeding',
  ],
  whenToMention: [
    'Night sweats continue beyond six weeks postpartum without improvement',
    'You experience night sweats along with unexplained weight loss, anxiety, or a racing heart',
    'The sweating is so severe that it disrupts your sleep significantly beyond the first few weeks',
    'You develop a fever along with the sweating, which could indicate infection',
  ],
  whenToActNow: [
    'Night sweats are accompanied by a fever over 100.4 F (38 C), which may indicate a postpartum infection such as endometritis or mastitis',
    'You experience severe sweating along with chest pain, rapid heartbeat, or difficulty breathing',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Your Body After Baby. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/your-body-after-baby',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Postpartum Thyroiditis. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/article/000388.htm',
    },
    {
      org: 'NIH',
      citation:
        'Thurston RC, et al. Hot Flashes and Postpartum Health. Journal of Women\'s Health, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30312113/',
    },
  ],
};
