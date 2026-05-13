import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'weaning-at-six-months',
  title: 'Weaning from Breastfeeding at 6 Months',
  category: 'feeding',
  searchTerms: [
    'weaning at 6 months',
    'stop breastfeeding at 6 months',
    'weaning baby six months',
    'how to wean at 6 months',
    'transitioning from breast to formula at 6 months',
    'ending breastfeeding 6 months',
    'breastfeeding to formula 6 months',
    'ready to stop breastfeeding',
  ],
  quickAnswer:
    'Weaning from breastfeeding at 6 months is a personal decision and a perfectly reasonable one. While the AAP recommends breastfeeding for at least 12 months, any amount of breastfeeding provides benefits, and there are many valid reasons to wean at 6 months. A gradual approach, dropping one feeding at a time over several weeks, is gentlest on both your body and your baby.',
  byAge: [
    {
      ageRange: '3-6 months',
      context:
        'If you are planning to wean at 6 months, starting the process a few weeks early by gradually dropping one breastfeeding session at a time can help. Replace each dropped session with a bottle of formula. Start with the feeding your baby seems least interested in, which is often a midday feed. This gradual approach helps prevent engorgement, reduces your risk of mastitis, and gives your baby time to adjust.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At 6 months, your baby will need infant formula as their primary milk source until 12 months, as cow\'s milk is not appropriate before then. Your baby is also starting solids at this age, which provides additional nutrition and helps with the transition. Some babies adapt quickly to formula, while others may need a few days to accept the new taste. Offering formula in a cup rather than a bottle is also an option at this age.',
    },
  ],
  whenNormal: [
    'Your baby initially resists formula but accepts it within a few days',
    'You experience some breast engorgement or discomfort as your supply decreases, which resolves within a week',
    'You feel a mix of relief and sadness about ending breastfeeding, which is a normal emotional response',
    'Your baby nurses less enthusiastically at some feeds, making those sessions easier to drop',
  ],
  whenToMention: [
    'You are experiencing significant engorgement, plugged ducts, or signs of mastitis during the weaning process',
    'Your baby is refusing formula completely and not taking enough milk from other sources',
    'You are feeling emotionally overwhelmed by the weaning process and could use support',
    'You want to wean but are unsure which formula to choose for your baby\'s needs',
  ],
  whenToActNow: [
    'You have signs of mastitis including fever, breast redness, warmth, and severe pain that are worsening',
    'Your baby is refusing all milk sources and showing signs of dehydration such as fewer wet diapers or lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Wean Your Baby from Breastfeeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/How-to-Wean-Your-Baby.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};
