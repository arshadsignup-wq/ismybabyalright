import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-supplementing-with-formula',
  title: 'Supplementing Breastfeeding with Formula',
  category: 'feeding',
  searchTerms: ['supplementing breastfeeding with formula','combo feeding baby','mixed feeding breast and bottle','how to supplement with formula','when to supplement with formula','topping up with formula','breastfeeding and formula at same time','will supplementing reduce milk supply','combo feeding schedule','partial breastfeeding formula','breast milk and formula together','supplementing formula guilt'],
  quickAnswer: 'Combination feeding (breast milk and formula) is very common and can work well for many families. Supplementing with formula does not have to be all-or-nothing - any amount of breast milk provides benefits. While adding formula can reduce breast milk supply if it replaces breastfeeding sessions, many mothers successfully maintain supply while supplementing by continuing to nurse or pump regularly. The best feeding plan is the one that keeps both you and your baby healthy and fed.',
  byAge: [
    { ageRange: '0-2 weeks', context: 'Supplementing in the first two weeks is sometimes medically necessary - for excessive weight loss (more than 10% of birth weight), jaundice, low blood sugar, or if milk has not come in by day 5. If your pediatrician recommends supplementing, it does not mean breastfeeding has failed. You can supplement while continuing to breastfeed at every feed to stimulate supply. Pump after breastfeeding sessions to signal your body to make more milk. Use paced bottle feeding to prevent bottle preference.' },
    { ageRange: '2-6 weeks', context: 'If you are supplementing during this critical supply-building period, try to maintain at least 8 breastfeeding or pumping sessions per 24 hours. Offer the breast first, then supplement with formula afterward. This ensures your baby gets breast milk at every feed and your supply gets stimulated. Some mothers supplement only at night to get longer sleep stretches - this is a reasonable approach as long as you nurse or pump during the day.' },
    { ageRange: '6 weeks - 6 months', context: 'By 6 weeks, milk supply is more established and can tolerate some supplementing without dramatic drops. Many working mothers supplement with formula during work hours and breastfeed mornings, evenings, and weekends. To maintain supply, pump at work if possible, or nurse frequently when with your baby. If you choose not to pump at work, your supply will adjust to produce milk during the times you do breastfeed. Any breast milk is beneficial.' },
    { ageRange: '6-12 months', context: 'As solids are introduced, many families find combo feeding becomes easier because breast milk and formula are both decreasing as food increases. You can continue any combination that works for your family. Some mothers breastfeed in the morning and at bedtime while using formula for daytime feeds. Others pump during the day and breastfeed at night. There is no wrong way to do this as long as your baby is growing well.' },
  ],
  whenNormal: ['Your baby is growing well on a combination of breast milk and formula','You are supplementing a few feeds per day and breastfeeding the rest - your supply adjusts accordingly','Your baby takes both breast and bottle without refusing either','You feel more rested and less stressed with a combo feeding approach'],
  whenToMention: ['You are supplementing because of concerns about low supply and want help determining if supplementation is needed','Your baby is refusing the breast after being introduced to bottles','You want to increase breast milk production and reduce formula supplementation','You are unsure how much formula to supplement alongside breastfeeding'],
  whenToActNow: ['Your newborn is not producing enough wet diapers (fewer than 6 per day after day 4)','Your baby has lost more than 10% of birth weight and is not gaining','Your baby is lethargic, difficult to wake for feeds, or showing signs of dehydration'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['breastfeeding-to-formula-transition','pumping-output-concerns','toddler-still-breastfeeding'],
  sources: [
    { org: 'AAP', citation: 'Meek JY, Noble L, et al. Policy Statement: Breastfeeding and the Use of Human Milk. Pediatrics. 2022.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Policy-Statement-Breastfeeding-and-the-Use-of' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Supplementing Breastfeeding. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Supplementing-Breastfeeding.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Breastfeeding: Frequently Asked Questions.', url: 'https://www.cdc.gov/breastfeeding/faq/index.htm' },
  ],
};
