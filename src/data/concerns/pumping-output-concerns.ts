import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pumping-output-concerns',
  title: 'Pumping Output - How Much Breast Milk Is Normal?',
  category: 'feeding',
  searchTerms: ['pumping output low','how much milk should I pump','low pumping output','normal pumping amount','not pumping enough milk','breast pump output decreasing','how to increase pumping output','pumping only 1 oz','pumping less than baby needs','exclusive pumping output','pumping output per session','breast milk supply when pumping'],
  quickAnswer: 'Pumping output varies enormously between mothers and even between sessions. A typical output for a well-established milk supply is 1-5 oz total (both breasts combined) per pumping session. Output in the morning is usually highest and decreases throughout the day. What you pump is NOT an accurate measure of your milk supply - babies are much more efficient at extracting milk than pumps. Many mothers with excellent supply pump surprisingly small amounts.',
  byAge: [
    { ageRange: '0-2 weeks postpartum', context: 'In the first few days, you will produce colostrum in very small amounts - teaspoons, not ounces. This is normal and sufficient for your newborn\'s tiny stomach. Mature milk typically comes in around days 2-5. During the first two weeks, pumping output is establishing and variable. If you are exclusively pumping, aim for 8-12 pumping sessions per 24 hours to establish supply. Do not judge your supply by pump output in these early days.' },
    { ageRange: '2-6 weeks postpartum', context: 'Milk supply is still regulating. By 4-6 weeks, most mothers produce 25-35 oz per day total. Per session output varies widely - 2-5 oz total from both breasts is common, with morning sessions producing more. If exclusively pumping, 7-8 sessions per day typically maintains supply. Pump output can be affected by stress, hydration, flange fit, pump quality, and how relaxed you are while pumping.' },
    { ageRange: '6 weeks - 6 months', context: 'Supply is generally established and steady. Breastfed babies consume an average of 25-30 oz per day between 1-6 months (unlike formula, breast milk intake stays relatively stable). If pumping at work, 3-4 oz per session is typical for one pump session replacing one feeding. Some mothers pump 1-2 oz and some pump 8+ oz - all can be normal. A sudden decrease in pumping output can be related to stress, hormonal changes, insufficient pump maintenance, or simply variation.' },
    { ageRange: '6-12 months', context: 'As your baby starts solids, breast milk intake naturally decreases. Pumping output may also decrease, which is expected. If you are supplementing with solids, fewer ounces pumped does not necessarily mean supply is dropping - demand is simply shifting. Many mothers successfully pump until 12 months while gradually replacing pump sessions with solid food meals. The WHO recommends continued breastfeeding alongside solids until at least 2 years.' },
  ],
  whenNormal: ['You pump 1-5 oz total from both breasts per session and your baby is gaining weight well','Output varies throughout the day with mornings being highest','You pump less than you expected but your baby seems satisfied after direct breastfeeding','Pumping output fluctuates day to day based on stress, hydration, and sleep'],
  whenToMention: ['Your baby is not gaining weight adequately despite frequent breastfeeding and you pump very little','Pumping output has dramatically decreased and you cannot identify a cause','You are exclusively pumping and producing less than 20 oz per day by 2 weeks postpartum','You are struggling with the emotional burden of low pumping output and need support or guidance'],
  whenToActNow: ['Your newborn is showing signs of dehydration - fewer than 6 wet diapers per day after day 4, dark concentrated urine, lethargy','Your baby has lost more than 10% of birth weight and has not started regaining by day 5','You are experiencing severe breast pain, fever, or red streaks on the breast that could indicate mastitis'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['breastfeeding-to-formula-transition','baby-supplementing-with-formula','toddler-still-breastfeeding'],
  sources: [
    { org: 'AAP', citation: 'Meek JY, Noble L, et al. Policy Statement: Breastfeeding and the Use of Human Milk. Pediatrics. 2022.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Policy-Statement-Breastfeeding-and-the-Use-of' },
    { org: 'NIH', citation: 'Kent JC, et al. Volume and Frequency of Breastfeedings and Fat Content of Breast Milk Throughout the Day. Pediatrics. 2006.', url: 'https://pubmed.ncbi.nlm.nih.gov/16510618/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. How Much and How Often to Breastfeed.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/breastfeeding/how-much-and-how-often.html' },
  ],
};
