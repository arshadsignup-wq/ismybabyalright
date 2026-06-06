import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breast-pump-flange-size-wrong',
  title: 'Is My Breast Pump Flange the Wrong Size?',
  category: 'feeding',
  searchTerms: ['breast pump flange size', 'wrong flange size', 'pump flange fit', 'flange too big', 'flange too small', 'nipple pump fit', 'breast pump flange pain', 'flange sizing guide', 'pump shield size', 'flange measurement'],
  quickAnswer: 'An incorrectly sized flange is one of the most common reasons for low pumping output and nipple pain. The correct flange should allow your nipple to move freely in the tunnel without too much areola being pulled in. Signs of wrong size include pain during pumping, nipple rubbing on the sides, areola swelling into the tunnel, or poor milk output despite good supply.',
  byAge: [
    { ageRange: '0-3 months', context: 'Getting the right flange size from the start is crucial for establishing supply. Your nipple size may change in the early postpartum period, so you may need to reassess flange size after a few weeks. Many pump brands offer measurement tools or virtual fitting services.' },
    { ageRange: '4-6 months', context: 'If you have been pumping with discomfort, revisit your flange size. Many mothers use the wrong size for months before realizing. A properly fitted flange should be comfortable and help you empty the breast more efficiently.' },
    { ageRange: '6-9 months', context: 'Nipple size can change over time with pumping. If output has dropped, check whether a different flange size improves things. Even small differences in flange size can significantly affect output and comfort.' },
    { ageRange: '9-12 months', context: 'Continue to assess flange fit periodically. Worn-out pump parts can also affect fit and suction. Replace valves, membranes, and flanges according to manufacturer guidelines.' },
    { ageRange: '12-24 months', context: 'If still pumping, the same principles apply. Comfort and efficiency are the goals of proper flange fit.' },
  ],
  whenNormal: ['Nipple moves freely in the tunnel with just 1-2mm of space around it', 'Pumping is comfortable with no pain', 'Milk flows well and you can empty the breast in 15-20 minutes'],
  whenToMention: ['Pumping is consistently painful despite trying different suction levels', 'You see nipple damage like cracking, blistering, or color changes after pumping', 'Pump output is low and you suspect flange fit may be the issue'],
  whenToActNow: ['You have severe nipple injury from pumping such as open wounds or bleeding', 'You develop signs of mastitis from incomplete emptying due to poor flange fit'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['pumping-not-enough-output', 'pumping-output-concerns', 'sore-cracked-nipples-breastfeeding'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breast Pump Use and Fit. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Breast Shield Size and Pumping Efficiency. Journal of Human Lactation, 2019.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
