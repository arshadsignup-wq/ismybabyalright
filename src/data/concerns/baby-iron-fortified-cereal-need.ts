import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-iron-fortified-cereal-need',
  title: 'Does My Baby Need Iron-Fortified Cereal?',
  category: 'feeding',
  searchTerms: [
    'iron fortified cereal baby necessary',
    'baby need iron cereal',
    'infant cereal iron importance',
    'iron fortified cereal benefits baby',
    'does baby need fortified cereal',
    'baby iron without cereal',
    'iron cereal baby first food',
    'iron sources baby no cereal',
    'baby cereal iron content',
    'skip iron cereal baby',
  ],
  quickAnswer:
    'Iron-fortified cereal is one of several ways to meet your baby\'s iron needs but it is not the only option. Babies\' iron stores from birth begin to deplete around 4-6 months. If your baby eats other iron-rich foods like pureed meats, beans, lentils, or tofu regularly, iron-fortified cereal may not be necessary. Discuss your baby\'s specific iron needs with your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Full-term babies are born with iron stores that typically last about 4-6 months. Breast milk contains small amounts of highly bioavailable iron. Formula is iron-fortified. No cereal needed.',
    },
    {
      ageRange: '4-6 months',
      context: 'As iron stores deplete, babies need dietary iron from complementary foods. Iron-fortified cereal is an easy way to provide this, but pureed meats are actually better absorbed. A combination approach works well.',
    },
    {
      ageRange: '6-9 months',
      context: 'Your baby needs about 11mg of iron per day. This can come from iron-fortified cereal, meats, beans, lentils, tofu, or fortified foods. Pairing iron-rich foods with vitamin C sources like fruits enhances iron absorption.',
    },
    {
      ageRange: '9-12 months',
      context: 'If baby eats a variety of iron-rich foods regularly, iron-fortified cereal becomes less critical. However, if baby is a picky eater or primarily breastfed with limited solid intake, continuing iron-fortified cereal can be an important safety net.',
    },
    {
      ageRange: '12-24 months',
      context: 'Toddlers need about 7mg of iron per day. Good sources include meat, beans, fortified cereals, leafy greens, and dried fruits. If your toddler drinks too much cow\'s milk (more than 16-20 ounces), it can interfere with iron absorption.',
    },
  ],
  whenNormal: [
    'Baby gets iron from a variety of sources including but not limited to cereal',
    'Baby eats iron-rich foods like meat, beans, or fortified cereal regularly',
    'Baby skips cereal but eats plenty of other iron-rich foods',
  ],
  whenToMention: [
    'Baby refuses all iron-rich foods including fortified cereal',
    'Baby was premature and may need extra iron supplementation',
    'You are concerned about whether baby is getting enough iron',
  ],
  whenToActNow: [
    'Baby appears very pale, is extremely tired, or has very poor appetite, which may indicate iron deficiency anemia',
    'Baby is eating non-food items like dirt or ice, which can be a sign of iron deficiency',
  ],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['iron-rich-foods-for-baby', 'baby-cereal-as-first-food', 'iron-deficiency-from-milk'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Iron Needs of Babies and Children. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Iron-Needs-of-Babies-and-Children.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institutes of Health. Iron Fact Sheet for Health Professionals. Office of Dietary Supplements, 2023.',
      url: 'https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/',
    },
    {
      org: 'WHO',
      citation: 'World Health Organization. Iron Supplementation in Infants and Young Children. 2016.',
      url: 'https://www.who.int/publications/i/item/9789241549523',
    },
  ],
};
