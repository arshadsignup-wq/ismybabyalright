import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'combo-feeding-breast-and-formula',
  title: 'Combining Breastfeeding and Formula',
  category: 'feeding',
  searchTerms: [
    'combo feeding breast and formula',
    'supplementing with formula',
    'breastfeeding and formula together',
    'mixed feeding baby',
    'combination feeding',
    'how to supplement with formula',
    'partial breastfeeding',
    'breast and bottle feeding both',
    'top up formula after breastfeeding',
  ],
  quickAnswer:
    'Combination feeding, also known as mixed feeding or combo feeding, means giving your baby both breast milk and formula. This is a common and perfectly healthy approach that many families use. It can work well for mothers returning to work, those with low supply, or anyone who wants the flexibility of both options. With some planning, you can maintain a breastfeeding relationship while supplementing with formula.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'If you are starting combo feeding in the early weeks, timing matters for establishing breast milk supply. Try to breastfeed or pump first before offering formula so that your body receives the signal to produce milk. If supplementation is medically necessary from the start, a lactation consultant can help you create a schedule that supports both milk production and adequate intake for your baby.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is a common time to start combo feeding, often coinciding with returning to work. You might breastfeed in the morning and evening while a caregiver gives formula during the day. Your supply will adjust to the reduced demand over a few days, and you may experience some engorgement during the transition. Pumping during the day can help maintain supply if desired.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With the introduction of solids, many families naturally shift the balance of breast milk and formula. Some babies begin to prefer one feeding method over the other, which is normal. Continue to offer both as your baby shows interest. Any amount of breast milk provides immune benefits, so even a few breastfeeds per day alongside formula and solids is valuable.',
    },
    {
      ageRange: '12-24 months',
      context:
        'After 12 months, formula is no longer necessary as your child can drink whole cow\'s milk. If you are still breastfeeding, you can continue alongside regular meals and milk. There is no pressure to wean from the breast at 12 months; the decision depends on what works for you and your toddler.',
    },
  ],
  whenNormal: [
    'Your baby accepts both breast and bottle without difficulty',
    'Your breast milk supply adjusts to the reduced demand and stabilizes',
    'Your baby gets different amounts from breast versus bottle at different times of day',
    'You and your baby have found a rhythm that includes both breast and formula feeds',
  ],
  whenToMention: [
    'Your baby is refusing the breast after being introduced to bottles and you want to maintain breastfeeding',
    'Your milk supply has dropped significantly and you want help increasing it while combo feeding',
    'You are unsure how much formula to supplement and want guidance on the right amounts',
    'You feel confused by conflicting advice about whether combo feeding is beneficial',
  ],
  whenToActNow: [
    'Your baby is not gaining weight adequately despite combo feeding and seems constantly hungry or lethargic',
    'Your baby shows signs of a milk protein allergy such as blood in stool, persistent vomiting, or hives',
    'You are experiencing breast infection symptoms like fever, redness, and severe pain that need medical treatment',
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
        'American Academy of Pediatrics. Supplementing with Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Supplementing-with-Formula.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
  ],
};
