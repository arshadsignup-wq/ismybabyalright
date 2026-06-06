import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eating-paper-cardboard',
  title: 'My Baby Keeps Eating Paper and Cardboard',
  category: 'feeding',
  searchTerms: ['baby eating paper', 'baby eating cardboard', 'toddler eats paper', 'baby chewing on books', 'baby eating tissue paper', 'is paper harmful baby', 'baby eats cardboard box', 'baby swallowed paper', 'toddler paper eating', 'baby paper mouth'],
  quickAnswer: 'Babies love to explore paper and cardboard by mouthing, chewing, and sometimes swallowing small pieces. Small amounts of plain paper or cardboard are generally not toxic and usually pass through the digestive system without issue. However, paper with colored ink, glossy coatings, or small pieces that could be a choking hazard should be kept away from baby.',
  byAge: [
    { ageRange: '0-3 months', context: 'Very young babies do not typically access paper or cardboard independently.' },
    { ageRange: '4-6 months', context: 'As babies begin to grab objects, they may reach for paper and bring it to their mouth. Board books are safer than regular paper for this age.' },
    { ageRange: '6-9 months', context: 'Babies actively explore by mouthing everything including paper and books. Use board books rather than paper books. Redirect when you see baby eating paper. Small pieces of paper are a choking hazard.' },
    { ageRange: '9-12 months', context: 'Babies may deliberately tear paper and eat it. This is normal exploratory behavior. Supervise book reading and offer chew toys as alternatives. Keep magazines, newspapers, and tissues out of reach.' },
    { ageRange: '12-24 months', context: 'If your toddler continues to seek out and eat paper or cardboard in large amounts, it may be worth discussing with your pediatrician. Occasional mouthing of books is normal but persistent eating of non-food items could be pica.' },
  ],
  whenNormal: ['Baby chews on board books while looking at them', 'Baby accidentally swallows a tiny piece of paper', 'Baby mouths paper as part of normal exploration'],
  whenToMention: ['Child deliberately eats paper or cardboard regularly and in large amounts', 'Child seems to crave paper and seeks it out', 'You are concerned about the safety of the paper products your child is eating such as glossy or printed materials'],
  whenToActNow: ['Child has swallowed a large piece of paper or cardboard that may be a choking hazard', 'Child is choking on paper', 'Child has eaten paper that may have chemicals or toxic ink'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-eating-non-food-pica', 'baby-eating-crayons', 'baby-choking-on-food'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Choking Prevention and Non-Food Item Safety. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Pica in Young Children. Journal of Pediatrics, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
