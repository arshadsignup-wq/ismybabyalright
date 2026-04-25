import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nursing-strike',
  title: 'Baby Nursing Strike',
  category: 'feeding',
  searchTerms: [
    'baby nursing strike',
    'baby suddenly stopped breastfeeding',
    'baby won\'t breastfeed anymore',
    'nursing strike how long',
    'baby refusing to nurse suddenly',
    'baby went on nursing strike',
    'breastfeeding strike',
    'baby stopped nursing at 6 months',
    'how to end nursing strike',
    'is my baby weaning or on a nursing strike',
  ],
  quickAnswer:
    'A nursing strike is a sudden refusal to breastfeed by a baby who was previously nursing well. It is different from natural weaning, which is gradual. Nursing strikes are almost always temporary, typically lasting 2 to 5 days, and have an identifiable cause such as illness, teething, a change in routine, or a startling experience at the breast. With patience, skin-to-skin contact, and continued offering, most babies return to nursing.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Nursing strikes are less common in very young babies. If your newborn suddenly refuses to nurse, it is important to rule out a medical cause such as an ear infection, nasal congestion, or oral thrush. Pain from a birth injury or torticollis can also make certain nursing positions uncomfortable. Seek help from a lactation consultant and your pediatrician promptly, as young babies can become dehydrated more quickly.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, nursing strikes can be triggered by distraction, a change in your scent (new soap, deodorant, or laundry detergent), returning to work, or a change in your milk supply or taste. Try nursing in a calm, dark room, offering the breast when your baby is sleepy, and maximizing skin-to-skin contact. Continue pumping to maintain your supply.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is one of the most common ages for nursing strikes, often triggered by teething pain, a cold or ear infection, or the baby biting and receiving a strong reaction from the parent. The baby may associate nursing with the negative experience. Stay calm and patient. Offer the breast frequently without pressure. Many parents find that the baby will nurse while drowsy or during the night even if they refuse during the day.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Nursing strikes around this age can be mistaken for self-weaning, but true self-weaning before 12 months is rare. A nursing strike will typically come on suddenly, while weaning is gradual. If your baby is refusing the breast but happily takes a bottle, it is likely a strike, not weaning. Continue offering the breast, pump to maintain supply, and provide milk via bottle or cup in the meantime.',
    },
  ],
  whenNormal: [
    'The nursing strike follows an identifiable trigger such as teething, illness, or a startling event',
    'Your baby is still drinking well from a bottle or cup and producing adequate wet diapers',
    'Your baby nurses when drowsy, half-asleep, or during nighttime feedings even though they refuse during the day',
    'The strike resolves within a few days to a week',
  ],
  whenToMention: [
    'The nursing strike has lasted more than a week and you need support maintaining your milk supply',
    'Your baby is refusing breast and bottle and you are concerned about adequate intake',
    'You suspect an ear infection, thrush, or other medical cause that needs treatment',
    'You are feeling emotionally overwhelmed or experiencing signs of mastitis from engorgement',
  ],
  whenToActNow: [
    'Your baby is showing signs of dehydration: fewer than 6 wet diapers in 24 hours, no tears, sunken fontanelle, or lethargy',
    'Your baby has a high fever alongside the nursing refusal',
    'Your very young baby under 3 months suddenly refuses all feeding sources',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
    'social-emotional',
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
        'World Health Organization. Breastfeeding recommendations.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};
