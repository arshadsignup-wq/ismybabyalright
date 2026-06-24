import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-refusing-solids-after-six-months',
  title: 'Baby Still Refusing Solids After Six Months',
  category: 'feeding',
  searchTerms: [
    'baby refusing solids after 6 months',
    'baby won\'t eat food 7 months',
    'baby still only breastfeeding 8 months',
    'baby 9 months no solids',
    'baby not eating food only milk',
    'older baby refusing purees',
    'baby solids refusal 6 months plus',
    'late starting solids baby',
    'baby 10 months won\'t eat',
    'baby refusing food textures',
  ],
  quickAnswer:
    'While it is normal for babies to take some time warming up to solids, persistent refusal beyond 7-8 months deserves attention. By 6 months, babies need nutrients like iron and zinc that breast milk or formula alone cannot provide in sufficient quantities. If your baby is consistently refusing all solid foods after several weeks of attempts, discuss it with your pediatrician to rule out oral motor issues, sensory concerns, or other underlying causes.',
  byAge: [
    {
      ageRange: '6-8 months',
      context:
        'Some babies are late bloomers with solids, and a few weeks of refusal after the 6-month mark is not unusual. Continue offering a variety of tastes and textures without pressure. Try different approaches: some babies prefer purees, others prefer finger foods through baby-led weaning. Offer foods at different temperatures and times of day. Iron-fortified cereals, pureed meats, and beans are important early foods because iron stores from birth begin to deplete around 6 months.',
    },
    {
      ageRange: '8-10 months',
      context:
        'If your baby is still refusing most solids by 8-9 months, it is worth investigating further. Possible causes include oral motor delays, tongue tie, sensory processing differences, or persistent reflux making eating uncomfortable. A feeding evaluation by a pediatric speech-language pathologist or occupational therapist can identify specific issues. In the meantime, your pediatrician may recommend iron supplementation if your baby is primarily breastfed.',
    },
    {
      ageRange: '10-14 months',
      context:
        'By 10-12 months, solid foods should be contributing meaningfully to your baby\'s nutrition. Continued refusal at this age often benefits from professional feeding therapy. Common strategies include food chaining (starting from accepted foods and gradually introducing similar ones), desensitization to textures, and oral motor exercises. Toddlers who are not eating solids by 12 months are at risk for iron deficiency anemia and nutritional gaps that can affect development.',
    },
  ],
  whenNormal: [
    'Your 6-month-old is just starting solids and is still learning - some initial refusal is expected.',
    'Your baby accepts some foods but rejects others and is gradually expanding their diet.',
    'Your baby is gaining weight well and meeting developmental milestones despite slow solid food progress.',
  ],
  whenToMention: [
    'Your baby is over 7 months and has not accepted any solid foods despite regular offerings.',
    'Your baby gags excessively or vomits when any solid food is introduced.',
    'Your baby is losing interest in both breast/bottle and solid foods.',
  ],
  whenToActNow: [
    'Your baby is showing signs of nutritional deficiency: extreme pallor, fatigue, or developmental regression.',
    'Your baby is losing weight or falling off their growth curve.',
    'Your baby is over 12 months, eating no solids, and has not been evaluated by a specialist.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-refusing-solids', 'baby-spoon-feeding-vs-self-feeding', 'baby-choking-on-food', 'tongue-tie'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Starting Solid Foods. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Starting-Solid-Foods.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization - Complementary Feeding: Report of the Global Consultation.',
      url: 'https://www.who.int/publications/i/item/924154614X',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Iron Deficiency Anemia in Infants. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/007618.htm',
    },
  ],
};
