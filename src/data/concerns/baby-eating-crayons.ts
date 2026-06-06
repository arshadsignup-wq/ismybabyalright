import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eating-crayons',
  title: 'My Baby Ate a Crayon or Art Supplies',
  category: 'feeding',
  searchTerms: ['baby ate crayon', 'baby eating crayons', 'toddler ate crayon', 'are crayons toxic baby', 'baby ate markers', 'baby ate paint', 'baby ate play dough', 'art supplies safe baby', 'non-toxic crayons baby', 'toddler eating art supplies'],
  quickAnswer: 'Most major brand crayons like Crayola are non-toxic and not dangerous if a small amount is eaten. However, always check labels for the ACMI non-toxic seal. Small pieces of crayon usually pass through the digestive system without issue. Other art supplies may be more concerning. If your child eats a non-toxic crayon, offer water and monitor. For unknown products, call Poison Control at 1-800-222-1222.',
  byAge: [
    { ageRange: '0-3 months', context: 'Art supplies should not be accessible to babies this young.' },
    { ageRange: '4-6 months', context: 'Keep all art supplies out of reach as babies this age will put everything in their mouth.' },
    { ageRange: '6-9 months', context: 'If older siblings have art supplies around, ensure they are stored safely. Babies this age will absolutely try to eat crayons if they can reach them.' },
    { ageRange: '9-12 months', context: 'Keep art supplies stored up high or in locked containers. When baby is around coloring activities, supervise closely. Choose large, non-toxic crayons for any early art exploration.' },
    { ageRange: '12-24 months', context: 'Toddlers begin art activities and may eat crayons during coloring time. Use only non-toxic art supplies labeled safe for young children. Supervise all art activities. A small taste of a non-toxic crayon is not harmful.' },
  ],
  whenNormal: ['Baby or toddler tastes a non-toxic crayon and you can remove the rest', 'Child eats a small piece of a certified non-toxic crayon and has no symptoms', 'Child explores art supplies by mouthing them briefly'],
  whenToMention: ['Child repeatedly eats crayons or art supplies despite having access to food', 'You are unsure whether the art supply your child ate is non-toxic', 'Child has digestive changes after eating art supplies'],
  whenToActNow: ['Child has eaten a product you believe is toxic or that does not have a non-toxic label', 'Child has symptoms like vomiting, drooling, or abdominal pain after eating art supplies', 'Child ate any amount of oil-based paint, turpentine, or adult art supplies - call Poison Control immediately'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-eating-non-food-pica', 'baby-eating-paper-cardboard', 'baby-eating-plants-leaves'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Poison Prevention and Treatment. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Poison-Prevention.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. National Capital Poison Center. Crayons and Art Supplies. 2023.', url: 'https://www.poison.org/' },
  ],
};
