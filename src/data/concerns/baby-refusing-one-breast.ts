import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-refusing-one-breast',
  title: 'Baby Refusing One Breast',
  category: 'feeding',
  searchTerms: [
    'baby refusing one breast',
    'baby only nurses on one side',
    'baby prefers left breast',
    'baby prefers right breast',
    'baby won\'t take one breast',
    'baby fusses on one breast',
    'one sided breastfeeding',
    'breast refusal one side',
    'baby cries when offered one breast',
    'uneven breast milk supply',
  ],
  quickAnswer:
    'Many babies develop a preference for one breast over the other, and this is quite common. The most frequent causes are differences in milk flow between sides, a positioning issue that makes one side less comfortable for your baby, or an ear infection or nasal congestion making one position painful. In most cases, you can work through this preference, but even if your baby continues to prefer one side, you can absolutely nourish your baby with just one breast.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies may refuse one breast due to differences in nipple shape, a faster or slower letdown on one side, or positioning discomfort from birth trauma such as a stiff neck from delivery. Try offering the less preferred breast when your baby is sleepy or drowsy, as they tend to be less fussy. Different positions like the football hold can sometimes help. If your baby was born via vacuum or forceps delivery, their neck may be tender on one side, making certain nursing positions uncomfortable.',
    },
    {
      ageRange: '3-6 months',
      context:
        'A sudden refusal of one breast in this age range can be caused by an ear infection (lying on the affected ear hurts), nasal congestion, or teething. Try nursing in an upright position or a position where your baby does not have to lie on the uncomfortable side. If the refusal is sudden and persistent, check with your pediatrician to rule out an ear infection.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies may develop a strong preference and be harder to redirect. If your baby firmly refuses one breast, you can maintain supply on the unused side with pumping, or you can allow the unused breast to gradually reduce production and nurse exclusively from the preferred side. Many mothers have successfully nursed long-term from just one breast.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers who nurse may be very opinionated about which breast they prefer. This is rarely a medical concern at this age and is usually just a strong personal preference. If your toddler is eating solid foods well and nursing is supplemental, a one-breast preference has very little impact on overall nutrition.',
    },
  ],
  whenNormal: [
    'Your baby shows a mild preference for one side but can be convinced to nurse on both with different positions',
    'The preference coincides with a cold, congestion, or teething and resolves when the illness passes',
    'Your baby nurses well on the preferred side and is gaining weight appropriately',
    'One breast produces more milk and your baby simply prefers the faster flow',
  ],
  whenToMention: [
    'Your baby suddenly and persistently refuses one breast, which could indicate an ear infection or other discomfort',
    'You notice a new lump, skin change, or unusual discharge in the refused breast that is unrelated to normal engorgement',
    'You are concerned about maintaining milk supply on the unused side',
  ],
  whenToActNow: [
    'Your baby refuses both breasts and is showing signs of dehydration or is not getting enough nutrition',
    'You notice a painful, red, swollen area on the refused breast along with fever, which may indicate mastitis',
  ],
  relatedMilestones: [
    'feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Breastfeeding Challenges. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};
